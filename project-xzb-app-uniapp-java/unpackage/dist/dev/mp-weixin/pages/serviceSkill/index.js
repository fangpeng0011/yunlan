"use strict";
const common_vendor = require("../../common/vendor.js");
const pages_api_setting = require("../api/setting.js");
require("../../utils/request.js");
if (!Math) {
  UniNav();
}
const UniNav = () => "../../components/uni-nav/index.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const activeId = common_vendor.ref(null);
    const activeIndex = common_vendor.ref(0);
    const serviceSkill = common_vendor.reactive({
      data: []
    });
    const rightItem = common_vendor.reactive({
      data: []
    });
    const status = common_vendor.ref("read");
    common_vendor.onMounted(() => {
      getServiceSkillAllFunc();
    });
    const getServiceSkillAllFunc = () => {
      pages_api_setting.getServiceSkillAll().then((res) => {
        if (res.code == 200) {
          serviceSkill.data = res.data;
          activeId.value = res.data[0].serveTypeId;
          rightItem.data = serviceSkill.data[0].serveSkillItemResDTOList;
          console.log(serviceSkill.data, "serviceSkill.data");
        }
      }).catch((err) => {
        common_vendor.index.showToast({
          title: err.msg || "接口调用失败",
          duration: 1500,
          icon: "none"
        });
      });
    };
    const handleSelect = (active) => {
      if (status.value === "read")
        return;
      serviceSkill.data[activeIndex.value].serveSkillItemResDTOList = serviceSkill.data[activeIndex.value].serveSkillItemResDTOList.map(
        (item) => {
          if (active.serveItemId === item.serveItemId) {
            return Object.assign({}, item, { isSelected: !item.isSelected });
          } else {
            return item;
          }
        }
      ), rightItem.data = [
        ...serviceSkill.data[activeIndex.value].serveSkillItemResDTOList
      ];
      console.log(serviceSkill.data, "点击后 ");
    };
    const handleSubmit = () => {
      const selectedList = [];
      serviceSkill.data.forEach((item, index) => {
        item.serveSkillItemResDTOList.forEach((item1, index1) => {
          if (item1.isSelected) {
            selectedList.push({
              serveItemId: item1.serveItemId,
              serveItemName: item1.serveItemName,
              serveTypeId: item.serveTypeId,
              serveTypeName: item.serveTypeName
            });
          }
        });
      });
      pages_api_setting.updateServiceSkill(selectedList).then((res) => {
        if (res.code === 200) {
          status.value = "read";
          getServiceSkillAllFunc();
        }
      }).catch((err) => {
        common_vendor.index.showToast({
          title: err.msg || "接口调用失败",
          duration: 1500,
          icon: "none"
        });
      });
    };
    const handleCancel = () => {
      status.value = "read";
      getServiceSkillAllFunc();
    };
    const handleEdit = () => {
      status.value = "edit";
      console.log("编辑状态");
    };
    const tabChange = (item, index) => {
      activeId.value = item.serveTypeId;
      activeIndex.value = index;
      rightItem.data = serviceSkill.data[activeIndex.value].serveSkillItemResDTOList;
    };
    const goBack = () => {
      common_vendor.index.navigateBack();
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(goBack),
        b: common_vendor.o(handleEdit),
        c: common_vendor.p({
          title: "选择服务技能",
          rithtText: status.value === "read" ? "编辑" : ""
        }),
        d: common_vendor.f(serviceSkill.data, (item, index, i0) => {
          return common_vendor.e({
            a: common_vendor.t(item.serveTypeName),
            b: item.count
          }, item.count ? {
            c: common_vendor.t(item.count)
          } : {}, {
            d: index,
            e: common_vendor.n(activeId.value === item.serveTypeId ? "active tagBox" : "tagBox"),
            f: common_vendor.o(($event) => tabChange(item, index), index)
          });
        }),
        e: common_vendor.f(rightItem.data, (item, index, i0) => {
          return {
            a: common_vendor.t(item.serveItemName),
            b: common_vendor.n(item.isSelected ? "active" : ""),
            c: index,
            d: common_vendor.o(($event) => handleSelect(item), index)
          };
        }),
        f: common_vendor.o(handleCancel),
        g: common_vendor.o(handleSubmit),
        h: status.value === "edit"
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6ade5948"], ["__file", "D:/项目/小智帮/project-xzb-app-uniapp-java/pages/serviceSkill/index.vue"]]);
wx.createPage(MiniProgramPage);
