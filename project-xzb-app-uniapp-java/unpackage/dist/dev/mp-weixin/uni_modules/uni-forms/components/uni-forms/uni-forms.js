"use strict";
const uni_modules_uniForms_components_uniForms_validate = require("./validate.js");
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "uniForms",
  components: {},
  emits: ["input", "reset", "validate", "submit"],
  props: {
    // 即将弃用
    value: {
      type: Object,
      default() {
        return {};
      }
    },
    // 替换 value 属性
    modelValue: {
      type: Object,
      default() {
        return {};
      }
    },
    // 表单校验规则
    rules: {
      type: Object,
      default() {
        return {};
      }
    },
    // 校验触发器方式，默认 关闭
    validateTrigger: {
      type: String,
      default: ""
    },
    // label 位置，可选值 top/left
    labelPosition: {
      type: String,
      default: "left"
    },
    // label 宽度，单位 px
    labelWidth: {
      type: [String, Number],
      default: ""
    },
    // label 居中方式，可选值 left/center/right
    labelAlign: {
      type: String,
      default: "left"
    },
    errShowType: {
      type: String,
      default: "undertext"
    },
    border: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      formData: {}
    };
  },
  computed: {
    dataValue() {
      if (JSON.stringify(this.modelValue) === "{}") {
        return this.value;
      } else {
        return this.modelValue;
      }
    }
  },
  watch: {
    rules(newVal) {
      this.init(newVal);
    },
    labelPosition() {
      this.childrens.forEach((vm) => {
        vm.init();
      });
    }
  },
  created() {
    let getbinddata = getApp().$vm.$.appContext.config.globalProperties.binddata;
    if (!getbinddata) {
      getApp().$vm.$.appContext.config.globalProperties.binddata = function(name, value, formName) {
        if (formName) {
          this.$refs[formName].setValue(name, value);
        } else {
          let formVm;
          for (let i in this.$refs) {
            const vm = this.$refs[i];
            if (vm && vm.$options && vm.$options.name === "uniForms") {
              formVm = vm;
              break;
            }
          }
          if (!formVm)
            return console.error("当前 uni-froms 组件缺少 ref 属性");
          formVm.setValue(name, value);
        }
      };
    }
    this.unwatchs = [];
    this.childrens = [];
    this.inputChildrens = [];
    this.checkboxChildrens = [];
    this.formRules = [];
    this.init(this.rules);
  },
  // mounted() {
  // 	this.init(this.rules)
  // },
  methods: {
    init(formRules) {
      if (Object.keys(formRules).length === 0) {
        try {
          this.formData = JSON.parse(JSON.stringify(this.dataValue));
        } catch (e) {
          this.formData = {};
        }
        return;
      }
      this.formRules = formRules;
      this.validator = new uni_modules_uniForms_components_uniForms_validate.SchemaValidator(formRules);
      this.registerWatch();
    },
    // 监听 watch
    registerWatch() {
      this.unwatchs.forEach((v) => v());
      this.childrens.forEach((v) => {
        v.init();
      });
      Object.keys(this.dataValue).forEach((key) => {
        let watch = this.$watch(
          "dataValue." + key,
          (value) => {
            if (!value)
              return;
            if (value.toString() === "[object Object]") {
              for (let i in value) {
                let name = `${key}[${i}]`;
                this.formData[name] = this._getValue(name, value[i]);
              }
            } else {
              this.formData[key] = this._getValue(key, value);
            }
          },
          {
            deep: true,
            immediate: true
          }
        );
        this.unwatchs.push(watch);
      });
    },
    /**
     * 公开给用户使用
     * 设置校验规则
     * @param {Object} formRules
     */
    setRules(formRules) {
      this.init(formRules);
    },
    /**
     * 公开给用户使用
     * 设置自定义表单组件 value 值
     *  @param {String} name 字段名称
     *  @param {String} value 字段值
     */
    setValue(name, value, callback) {
      let example = this.childrens.find((child) => child.name === name);
      if (!example)
        return null;
      value = this._getValue(example.name, value);
      this.formData[name] = value;
      example.val = value;
      return example.triggerCheck(value, callback);
    },
    /**
     * 表单重置
     * @param {Object} event
     */
    resetForm(event) {
      this.childrens.forEach((item) => {
        item.errMsg = "";
        const inputComp = this.inputChildrens.find((child) => child.rename === item.name);
        if (inputComp) {
          inputComp.errMsg = "";
          inputComp.is_reset = true;
          inputComp.$emit("input", inputComp.multiple ? [] : "");
          inputComp.$emit("update:modelValue", inputComp.multiple ? [] : "");
        }
      });
      this.childrens.forEach((item) => {
        if (item.name) {
          this.formData[item.name] = this._getValue(item.name, "");
        }
      });
      this.$emit("reset", event);
    },
    /**
     * 触发表单校验，通过 @validate 获取
     * @param {Object} validate
     */
    validateCheck(validate) {
      if (validate === null)
        validate = null;
      this.$emit("validate", validate);
    },
    /**
     * 校验所有或者部分表单
     */
    async validateAll(invalidFields, type, keepitem, callback) {
      let childrens = [];
      for (let i in invalidFields) {
        const item = this.childrens.find((v) => v.name === i);
        if (item) {
          childrens.push(item);
        }
      }
      if (!callback && typeof keepitem === "function") {
        callback = keepitem;
      }
      let promise;
      if (!callback && typeof callback !== "function" && Promise) {
        promise = new Promise((resolve, reject) => {
          callback = function(valid, invalidFields2) {
            !valid ? resolve(invalidFields2) : reject(valid);
          };
        });
      }
      let results = [];
      let newFormData = {};
      if (this.validator) {
        for (let key in childrens) {
          const child = childrens[key];
          let name = child.isArray ? child.arrayField : child.name;
          if (child.isArray) {
            if (child.name.indexOf("[") !== -1 && child.name.indexOf("]") !== -1) {
              const fieldData = child.name.split("[");
              const fieldName = fieldData[0];
              const fieldValue = fieldData[1].replace("]", "");
              if (!newFormData[fieldName]) {
                newFormData[fieldName] = {};
              }
              newFormData[fieldName][fieldValue] = this._getValue(name, invalidFields[name]);
            }
          } else {
            newFormData[name] = this._getValue(name, invalidFields[name]);
          }
          const result = await child.triggerCheck(invalidFields[name], true);
          if (result) {
            results.push(result);
            if (this.errShowType === "toast" || this.errShowType === "modal")
              break;
          }
        }
      } else {
        newFormData = invalidFields;
      }
      if (Array.isArray(results)) {
        if (results.length === 0)
          results = null;
      }
      if (Array.isArray(keepitem)) {
        keepitem.forEach((v) => {
          newFormData[v] = this.dataValue[v];
        });
      }
      if (type === "submit") {
        this.$emit("submit", {
          detail: {
            value: newFormData,
            errors: results
          }
        });
      } else {
        this.$emit("validate", results);
      }
      callback && typeof callback === "function" && callback(results, newFormData);
      if (promise && callback) {
        return promise;
      } else {
        return null;
      }
    },
    submitForm() {
    },
    /**
     * 外部调用方法
     * 手动提交校验表单
     * 对整个表单进行校验的方法，参数为一个回调函数。
     */
    submit(keepitem, callback, type) {
      for (let i in this.dataValue) {
        const itemData = this.childrens.find((v) => v.name === i);
        if (itemData) {
          if (this.formData[i] === void 0) {
            this.formData[i] = this._getValue(i, this.dataValue[i]);
          }
        }
      }
      if (!type) {
        console.warn("submit 方法即将废弃，请使用validate方法代替！");
      }
      return this.validateAll(this.formData, "submit", keepitem, callback);
    },
    /**
     * 外部调用方法
     * 校验表单
     * 对整个表单进行校验的方法，参数为一个回调函数。
     */
    validate(keepitem, callback) {
      return this.submit(keepitem, callback, true);
    },
    /**
     * 部分表单校验
     * @param {Object} props
     * @param {Object} cb
     */
    validateField(props, callback) {
      props = [].concat(props);
      let invalidFields = {};
      this.childrens.forEach((item) => {
        if (props.indexOf(item.name) !== -1) {
          invalidFields = Object.assign({}, invalidFields, {
            [item.name]: this.formData[item.name]
          });
        }
      });
      return this.validateAll(invalidFields, "submit", [], callback);
    },
    /**
     * 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果
     */
    resetFields() {
      this.resetForm();
    },
    /**
     * 移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果
     */
    clearValidate(props) {
      props = [].concat(props);
      this.childrens.forEach((item) => {
        const inputComp = this.inputChildrens.find((child) => child.rename === item.name);
        if (props.length === 0) {
          item.errMsg = "";
          if (inputComp) {
            inputComp.errMsg = "";
          }
        } else {
          if (props.indexOf(item.name) !== -1) {
            item.errMsg = "";
            if (inputComp) {
              inputComp.errMsg = "";
            }
          }
        }
      });
    },
    /**
     * 把 value 转换成指定的类型
     * @param {Object} key
     * @param {Object} value
     */
    _getValue(key, value) {
      const rules = this.formRules[key] && this.formRules[key].rules || [];
      const isRuleNum = rules.find((val) => val.format && this.type_filter(val.format));
      const isRuleBool = rules.find((val) => val.format && val.format === "boolean" || val.format === "bool");
      if (isRuleNum) {
        value = isNaN(value) ? value : value === "" || value === null ? null : Number(value);
      }
      if (isRuleBool) {
        value = !value ? false : true;
      }
      return value;
    },
    /**
     * 过滤数字类型
     * @param {Object} format
     */
    type_filter(format) {
      return format === "int" || format === "double" || format === "number" || format === "timestamp";
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.submitForm && $options.submitForm(...args)),
    b: common_vendor.o((...args) => $options.resetForm && $options.resetForm(...args)),
    c: !$props.border ? 1 : ""
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/项目/小智帮/project-xzb-app-uniapp-java/uni_modules/uni-forms/components/uni-forms/uni-forms.vue"]]);
wx.createComponent(Component);
