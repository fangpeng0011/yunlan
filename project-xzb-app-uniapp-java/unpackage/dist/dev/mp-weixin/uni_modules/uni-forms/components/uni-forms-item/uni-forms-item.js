"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "uniFormsItem",
  props: {
    // 自定义内容
    custom: {
      type: Boolean,
      default: false
    },
    // 是否显示报错信息
    showMessage: {
      type: Boolean,
      default: true
    },
    name: String,
    required: Boolean,
    validateTrigger: {
      type: String,
      default: ""
    },
    leftIcon: String,
    iconColor: {
      type: String,
      default: "#606266"
    },
    label: String,
    // 左边标题的宽度单位px
    labelWidth: {
      type: [Number, String],
      default: ""
    },
    // 对齐方式，left|center|right
    labelAlign: {
      type: String,
      default: ""
    },
    // lable的位置，可选为 left-左边，top-上边
    labelPosition: {
      type: String,
      default: ""
    },
    errorMessage: {
      type: [String, Boolean],
      default: ""
    },
    // 表单校验规则
    rules: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      errorTop: false,
      errorBottom: false,
      labelMarginBottom: "",
      errorWidth: "",
      errMsg: "",
      val: "",
      labelPos: "",
      labelWid: "",
      labelAli: "",
      showMsg: "undertext",
      border: false,
      isFirstBorder: false,
      isArray: false,
      arrayField: ""
    };
  },
  computed: {
    msg() {
      return this.errorMessage || this.errMsg;
    },
    fieldStyle() {
      let style = {};
      if (this.labelPos == "top") {
        style.padding = "0 0";
        this.labelMarginBottom = "6px";
      }
      if (this.labelPos == "left" && this.msg !== false && this.msg != "") {
        style.paddingBottom = "0px";
        this.errorBottom = true;
        this.errorTop = false;
      } else if (this.labelPos == "top" && this.msg !== false && this.msg != "") {
        this.errorBottom = false;
        this.errorTop = true;
      } else {
        this.errorTop = false;
        this.errorBottom = false;
      }
      return style;
    },
    // uni不支持在computed中写style.justifyContent = 'center'的形式，故用此方法
    justifyContent() {
      if (this.labelAli === "left")
        return "flex-start";
      if (this.labelAli === "center")
        return "center";
      if (this.labelAli === "right")
        return "flex-end";
    },
    labelLeft() {
      return (this.labelPos === "left" ? parseInt(this.labelWid) : 0) + "px";
    }
  },
  watch: {
    validateTrigger(trigger) {
      this.formTrigger = trigger;
    }
  },
  created() {
    this.form = this.getForm();
    this.group = this.getForm("uniGroup");
    this.formRules = [];
    this.formTrigger = this.validateTrigger;
    if (this.name && this.name.indexOf("[") !== -1 && this.name.indexOf("]") !== -1) {
      this.isArray = true;
      this.arrayField = this.name;
      this.form.formData[this.name] = this.form._getValue(this.name, "");
    }
  },
  mounted() {
    if (this.form) {
      this.form.childrens.push(this);
    }
    this.init();
  },
  unmounted() {
    this.__isUnmounted = true;
    this.unInit();
  },
  methods: {
    init() {
      if (this.form) {
        let { formRules, validator, formData, value, labelPosition, labelWidth, labelAlign, errShowType } = this.form;
        this.labelPos = this.labelPosition ? this.labelPosition : labelPosition;
        if (this.label) {
          this.labelWid = this.labelWidth ? this.labelWidth : labelWidth || 70;
        } else {
          this.labelWid = this.labelWidth ? this.labelWidth : labelWidth || "auto";
        }
        if (this.labelWid && this.labelWid !== "auto") {
          this.labelWid += "px";
        }
        this.labelAli = this.labelAlign ? this.labelAlign : labelAlign;
        if (!this.form.isFirstBorder) {
          this.form.isFirstBorder = true;
          this.isFirstBorder = true;
        }
        if (this.group) {
          if (!this.group.isFirstBorder) {
            this.group.isFirstBorder = true;
            this.isFirstBorder = true;
          }
        }
        this.border = this.form.border;
        this.showMsg = errShowType;
        let name = this.isArray ? this.arrayField : this.name;
        if (!name)
          return;
        if (formRules && this.rules.length > 0) {
          if (!formRules[name]) {
            formRules[name] = {
              rules: this.rules
            };
          }
          validator.updateSchema(formRules);
        }
        this.formRules = formRules[name] || {};
        this.validator = validator;
      } else {
        this.labelPos = this.labelPosition || "left";
        this.labelWid = this.labelWidth || 65;
        this.labelAli = this.labelAlign || "left";
      }
    },
    unInit() {
      if (this.form) {
        this.form.childrens.forEach((item, index) => {
          if (item === this) {
            this.form.childrens.splice(index, 1);
            delete this.form.formData[item.name];
          }
        });
      }
    },
    /**
     * 获取父元素实例
     */
    getForm(name = "uniForms") {
      let parent = this.$parent;
      let parentName = parent.$options.name;
      while (parentName !== name) {
        parent = parent.$parent;
        if (!parent)
          return false;
        parentName = parent.$options.name;
      }
      return parent;
    },
    /**
     * 移除该表单项的校验结果
     */
    clearValidate() {
      this.errMsg = "";
    },
    /**
     * 子组件调用，如 easyinput
     * @param {Object} value
     */
    setValue(value) {
      let name = this.isArray ? this.arrayField : this.name;
      if (name) {
        if (this.errMsg)
          this.errMsg = "";
        this.form.formData[name] = this.form._getValue(name, value);
        if (!this.formRules || typeof this.formRules && JSON.stringify(this.formRules) === "{}")
          return;
        this.triggerCheck(this.form._getValue(this.name, value));
      }
    },
    /**
     * 校验规则
     * @param {Object} value
     */
    async triggerCheck(value, formTrigger) {
      this.errMsg = "";
      if (!this.validator || Object.keys(this.formRules).length === 0)
        return;
      const isNoField = this.isRequired(this.formRules.rules || []);
      let isTrigger = this.isTrigger(this.formRules.validateTrigger, this.validateTrigger, this.form.validateTrigger);
      let result = null;
      if (!!isTrigger || formTrigger) {
        let name = this.isArray ? this.arrayField : this.name;
        result = await this.validator.validateUpdate(
          {
            [name]: value
          },
          this.form.formData
        );
      }
      if (!isNoField && (value === void 0 || value === "")) {
        result = null;
      }
      const inputComp = this.form.inputChildrens.find((child) => child.rename === this.name);
      if ((isTrigger || formTrigger) && result && result.errorMessage) {
        if (inputComp) {
          inputComp.errMsg = result.errorMessage;
        }
        if (this.form.errShowType === "toast") {
          common_vendor.index.showToast({
            title: result.errorMessage || "校验错误",
            icon: "none"
          });
        }
        if (this.form.errShowType === "modal") {
          common_vendor.index.showModal({
            title: "提示",
            content: result.errorMessage || "校验错误"
          });
        }
      } else {
        if (inputComp) {
          inputComp.errMsg = "";
        }
      }
      this.errMsg = !result ? "" : result.errorMessage;
      this.form.validateCheck(result ? result : null);
      return result ? result : null;
    },
    /**
     * 触发时机
     * @param {Object} event
     */
    isTrigger(rule, itemRlue, parentRule) {
      if (rule === "submit" || !rule) {
        if (rule === void 0) {
          if (itemRlue !== "bind") {
            if (!itemRlue) {
              return parentRule === "bind" ? true : false;
            }
            return false;
          }
          return true;
        }
        return false;
      }
      return true;
    },
    // 是否有必填字段
    isRequired(rules) {
      let isNoField = false;
      for (let i = 0; i < rules.length; i++) {
        const ruleData = rules[i];
        if (ruleData.required) {
          isNoField = true;
          break;
        }
      }
      return isNoField;
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../../uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.required
  }, $props.required ? {} : {}, {
    b: $props.leftIcon
  }, $props.leftIcon ? {
    c: common_vendor.p({
      size: "16",
      type: $props.leftIcon,
      color: $props.iconColor
    })
  } : {}, {
    d: common_vendor.t($props.label),
    e: $props.label
  }, $props.label ? {} : {}, {
    f: $data.labelWid,
    g: $options.justifyContent,
    h: $options.msg ? 1 : "",
    i: common_vendor.n("is-direction-" + $data.labelPos),
    j: $options.msg
  }, $options.msg ? {
    k: common_vendor.t($data.showMsg === "undertext" ? $options.msg : ""),
    l: $data.border ? 1 : "",
    m: $options.labelLeft
  } : {}, {
    n: $data.border ? 1 : "",
    o: $data.border && $data.isFirstBorder ? 1 : "",
    p: $options.msg ? 1 : ""
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/项目/小智帮/project-xzb-app-uniapp-java/uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.vue"]]);
wx.createComponent(Component);
