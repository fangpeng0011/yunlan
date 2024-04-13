if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue, shared) {
  "use strict";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$M = {
    name: "StarPage",
    setup: () => {
      vue.onMounted(() => {
        const times = setTimeout(() => {
          uni.redirectTo({
            url: "/pages/login/user"
          });
          clearTimeout(times);
        }, 3e3);
      });
      return {};
    }
  };
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "starPage" }, [
      vue.createElementVNode("view", { class: "page" }),
      vue.createElementVNode("view", { class: "bottom" })
    ]);
  }
  const PagesStartIndex = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["render", _sfc_render$f], ["__scopeId", "data-v-255b53b3"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/pages/start/index.vue"]]);
  const icons = {
    "id": "2852637",
    "name": "uniui图标库",
    "font_family": "uniicons",
    "css_prefix_text": "uniui-",
    "description": "",
    "glyphs": [
      {
        "icon_id": "25027049",
        "name": "yanse",
        "font_class": "color",
        "unicode": "e6cf",
        "unicode_decimal": 59087
      },
      {
        "icon_id": "25027048",
        "name": "wallet",
        "font_class": "wallet",
        "unicode": "e6b1",
        "unicode_decimal": 59057
      },
      {
        "icon_id": "25015720",
        "name": "settings-filled",
        "font_class": "settings-filled",
        "unicode": "e6ce",
        "unicode_decimal": 59086
      },
      {
        "icon_id": "25015434",
        "name": "shimingrenzheng-filled",
        "font_class": "auth-filled",
        "unicode": "e6cc",
        "unicode_decimal": 59084
      },
      {
        "icon_id": "24934246",
        "name": "shop-filled",
        "font_class": "shop-filled",
        "unicode": "e6cd",
        "unicode_decimal": 59085
      },
      {
        "icon_id": "24934159",
        "name": "staff-filled-01",
        "font_class": "staff-filled",
        "unicode": "e6cb",
        "unicode_decimal": 59083
      },
      {
        "icon_id": "24932461",
        "name": "VIP-filled",
        "font_class": "vip-filled",
        "unicode": "e6c6",
        "unicode_decimal": 59078
      },
      {
        "icon_id": "24932462",
        "name": "plus_circle_fill",
        "font_class": "plus-filled",
        "unicode": "e6c7",
        "unicode_decimal": 59079
      },
      {
        "icon_id": "24932463",
        "name": "folder_add-filled",
        "font_class": "folder-add-filled",
        "unicode": "e6c8",
        "unicode_decimal": 59080
      },
      {
        "icon_id": "24932464",
        "name": "yanse-filled",
        "font_class": "color-filled",
        "unicode": "e6c9",
        "unicode_decimal": 59081
      },
      {
        "icon_id": "24932465",
        "name": "tune-filled",
        "font_class": "tune-filled",
        "unicode": "e6ca",
        "unicode_decimal": 59082
      },
      {
        "icon_id": "24932455",
        "name": "a-rilidaka-filled",
        "font_class": "calendar-filled",
        "unicode": "e6c0",
        "unicode_decimal": 59072
      },
      {
        "icon_id": "24932456",
        "name": "notification-filled",
        "font_class": "notification-filled",
        "unicode": "e6c1",
        "unicode_decimal": 59073
      },
      {
        "icon_id": "24932457",
        "name": "wallet-filled",
        "font_class": "wallet-filled",
        "unicode": "e6c2",
        "unicode_decimal": 59074
      },
      {
        "icon_id": "24932458",
        "name": "paihangbang-filled",
        "font_class": "medal-filled",
        "unicode": "e6c3",
        "unicode_decimal": 59075
      },
      {
        "icon_id": "24932459",
        "name": "gift-filled",
        "font_class": "gift-filled",
        "unicode": "e6c4",
        "unicode_decimal": 59076
      },
      {
        "icon_id": "24932460",
        "name": "fire-filled",
        "font_class": "fire-filled",
        "unicode": "e6c5",
        "unicode_decimal": 59077
      },
      {
        "icon_id": "24928001",
        "name": "refreshempty",
        "font_class": "refreshempty",
        "unicode": "e6bf",
        "unicode_decimal": 59071
      },
      {
        "icon_id": "24926853",
        "name": "location-ellipse",
        "font_class": "location-filled",
        "unicode": "e6af",
        "unicode_decimal": 59055
      },
      {
        "icon_id": "24926735",
        "name": "person-filled",
        "font_class": "person-filled",
        "unicode": "e69d",
        "unicode_decimal": 59037
      },
      {
        "icon_id": "24926703",
        "name": "personadd-filled",
        "font_class": "personadd-filled",
        "unicode": "e698",
        "unicode_decimal": 59032
      },
      {
        "icon_id": "24923351",
        "name": "back",
        "font_class": "back",
        "unicode": "e6b9",
        "unicode_decimal": 59065
      },
      {
        "icon_id": "24923352",
        "name": "forward",
        "font_class": "forward",
        "unicode": "e6ba",
        "unicode_decimal": 59066
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrow-right",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrowthinright",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrow-left",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrowthinleft",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrow-up",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrowthinup",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrow-down",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrowthindown",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "bottom",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "arrowdown",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "right",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "arrowright",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "top",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "arrowup",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "left",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "arrowleft",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923334",
        "name": "eye",
        "font_class": "eye",
        "unicode": "e651",
        "unicode_decimal": 58961
      },
      {
        "icon_id": "24923335",
        "name": "eye-filled",
        "font_class": "eye-filled",
        "unicode": "e66a",
        "unicode_decimal": 58986
      },
      {
        "icon_id": "24923336",
        "name": "eye-slash",
        "font_class": "eye-slash",
        "unicode": "e6b3",
        "unicode_decimal": 59059
      },
      {
        "icon_id": "24923337",
        "name": "eye-slash-filled",
        "font_class": "eye-slash-filled",
        "unicode": "e6b4",
        "unicode_decimal": 59060
      },
      {
        "icon_id": "24923305",
        "name": "info-filled",
        "font_class": "info-filled",
        "unicode": "e649",
        "unicode_decimal": 58953
      },
      {
        "icon_id": "24923299",
        "name": "reload-01",
        "font_class": "reload",
        "unicode": "e6b2",
        "unicode_decimal": 59058
      },
      {
        "icon_id": "24923195",
        "name": "mic_slash_fill",
        "font_class": "micoff-filled",
        "unicode": "e6b0",
        "unicode_decimal": 59056
      },
      {
        "icon_id": "24923165",
        "name": "map-pin-ellipse",
        "font_class": "map-pin-ellipse",
        "unicode": "e6ac",
        "unicode_decimal": 59052
      },
      {
        "icon_id": "24923166",
        "name": "map-pin",
        "font_class": "map-pin",
        "unicode": "e6ad",
        "unicode_decimal": 59053
      },
      {
        "icon_id": "24923167",
        "name": "location",
        "font_class": "location",
        "unicode": "e6ae",
        "unicode_decimal": 59054
      },
      {
        "icon_id": "24923064",
        "name": "starhalf",
        "font_class": "starhalf",
        "unicode": "e683",
        "unicode_decimal": 59011
      },
      {
        "icon_id": "24923065",
        "name": "star",
        "font_class": "star",
        "unicode": "e688",
        "unicode_decimal": 59016
      },
      {
        "icon_id": "24923066",
        "name": "star-filled",
        "font_class": "star-filled",
        "unicode": "e68f",
        "unicode_decimal": 59023
      },
      {
        "icon_id": "24899646",
        "name": "a-rilidaka",
        "font_class": "calendar",
        "unicode": "e6a0",
        "unicode_decimal": 59040
      },
      {
        "icon_id": "24899647",
        "name": "fire",
        "font_class": "fire",
        "unicode": "e6a1",
        "unicode_decimal": 59041
      },
      {
        "icon_id": "24899648",
        "name": "paihangbang",
        "font_class": "medal",
        "unicode": "e6a2",
        "unicode_decimal": 59042
      },
      {
        "icon_id": "24899649",
        "name": "font",
        "font_class": "font",
        "unicode": "e6a3",
        "unicode_decimal": 59043
      },
      {
        "icon_id": "24899650",
        "name": "gift",
        "font_class": "gift",
        "unicode": "e6a4",
        "unicode_decimal": 59044
      },
      {
        "icon_id": "24899651",
        "name": "link",
        "font_class": "link",
        "unicode": "e6a5",
        "unicode_decimal": 59045
      },
      {
        "icon_id": "24899652",
        "name": "notification",
        "font_class": "notification",
        "unicode": "e6a6",
        "unicode_decimal": 59046
      },
      {
        "icon_id": "24899653",
        "name": "staff",
        "font_class": "staff",
        "unicode": "e6a7",
        "unicode_decimal": 59047
      },
      {
        "icon_id": "24899654",
        "name": "VIP",
        "font_class": "vip",
        "unicode": "e6a8",
        "unicode_decimal": 59048
      },
      {
        "icon_id": "24899655",
        "name": "folder_add",
        "font_class": "folder-add",
        "unicode": "e6a9",
        "unicode_decimal": 59049
      },
      {
        "icon_id": "24899656",
        "name": "tune",
        "font_class": "tune",
        "unicode": "e6aa",
        "unicode_decimal": 59050
      },
      {
        "icon_id": "24899657",
        "name": "shimingrenzheng",
        "font_class": "auth",
        "unicode": "e6ab",
        "unicode_decimal": 59051
      },
      {
        "icon_id": "24899565",
        "name": "person",
        "font_class": "person",
        "unicode": "e699",
        "unicode_decimal": 59033
      },
      {
        "icon_id": "24899566",
        "name": "email-filled",
        "font_class": "email-filled",
        "unicode": "e69a",
        "unicode_decimal": 59034
      },
      {
        "icon_id": "24899567",
        "name": "phone-filled",
        "font_class": "phone-filled",
        "unicode": "e69b",
        "unicode_decimal": 59035
      },
      {
        "icon_id": "24899568",
        "name": "phone",
        "font_class": "phone",
        "unicode": "e69c",
        "unicode_decimal": 59036
      },
      {
        "icon_id": "24899570",
        "name": "email",
        "font_class": "email",
        "unicode": "e69e",
        "unicode_decimal": 59038
      },
      {
        "icon_id": "24899571",
        "name": "personadd",
        "font_class": "personadd",
        "unicode": "e69f",
        "unicode_decimal": 59039
      },
      {
        "icon_id": "24899558",
        "name": "chatboxes-filled",
        "font_class": "chatboxes-filled",
        "unicode": "e692",
        "unicode_decimal": 59026
      },
      {
        "icon_id": "24899559",
        "name": "contact",
        "font_class": "contact",
        "unicode": "e693",
        "unicode_decimal": 59027
      },
      {
        "icon_id": "24899560",
        "name": "chatbubble-filled",
        "font_class": "chatbubble-filled",
        "unicode": "e694",
        "unicode_decimal": 59028
      },
      {
        "icon_id": "24899561",
        "name": "contact-filled",
        "font_class": "contact-filled",
        "unicode": "e695",
        "unicode_decimal": 59029
      },
      {
        "icon_id": "24899562",
        "name": "chatboxes",
        "font_class": "chatboxes",
        "unicode": "e696",
        "unicode_decimal": 59030
      },
      {
        "icon_id": "24899563",
        "name": "chatbubble",
        "font_class": "chatbubble",
        "unicode": "e697",
        "unicode_decimal": 59031
      },
      {
        "icon_id": "24881290",
        "name": "upload-filled",
        "font_class": "upload-filled",
        "unicode": "e68e",
        "unicode_decimal": 59022
      },
      {
        "icon_id": "24881292",
        "name": "upload",
        "font_class": "upload",
        "unicode": "e690",
        "unicode_decimal": 59024
      },
      {
        "icon_id": "24881293",
        "name": "weixin",
        "font_class": "weixin",
        "unicode": "e691",
        "unicode_decimal": 59025
      },
      {
        "icon_id": "24881274",
        "name": "compose",
        "font_class": "compose",
        "unicode": "e67f",
        "unicode_decimal": 59007
      },
      {
        "icon_id": "24881275",
        "name": "qq",
        "font_class": "qq",
        "unicode": "e680",
        "unicode_decimal": 59008
      },
      {
        "icon_id": "24881276",
        "name": "download-filled",
        "font_class": "download-filled",
        "unicode": "e681",
        "unicode_decimal": 59009
      },
      {
        "icon_id": "24881277",
        "name": "pengyouquan",
        "font_class": "pyq",
        "unicode": "e682",
        "unicode_decimal": 59010
      },
      {
        "icon_id": "24881279",
        "name": "sound",
        "font_class": "sound",
        "unicode": "e684",
        "unicode_decimal": 59012
      },
      {
        "icon_id": "24881280",
        "name": "trash-filled",
        "font_class": "trash-filled",
        "unicode": "e685",
        "unicode_decimal": 59013
      },
      {
        "icon_id": "24881281",
        "name": "sound-filled",
        "font_class": "sound-filled",
        "unicode": "e686",
        "unicode_decimal": 59014
      },
      {
        "icon_id": "24881282",
        "name": "trash",
        "font_class": "trash",
        "unicode": "e687",
        "unicode_decimal": 59015
      },
      {
        "icon_id": "24881284",
        "name": "videocam-filled",
        "font_class": "videocam-filled",
        "unicode": "e689",
        "unicode_decimal": 59017
      },
      {
        "icon_id": "24881285",
        "name": "spinner-cycle",
        "font_class": "spinner-cycle",
        "unicode": "e68a",
        "unicode_decimal": 59018
      },
      {
        "icon_id": "24881286",
        "name": "weibo",
        "font_class": "weibo",
        "unicode": "e68b",
        "unicode_decimal": 59019
      },
      {
        "icon_id": "24881288",
        "name": "videocam",
        "font_class": "videocam",
        "unicode": "e68c",
        "unicode_decimal": 59020
      },
      {
        "icon_id": "24881289",
        "name": "download",
        "font_class": "download",
        "unicode": "e68d",
        "unicode_decimal": 59021
      },
      {
        "icon_id": "24879601",
        "name": "help",
        "font_class": "help",
        "unicode": "e679",
        "unicode_decimal": 59001
      },
      {
        "icon_id": "24879602",
        "name": "navigate-filled",
        "font_class": "navigate-filled",
        "unicode": "e67a",
        "unicode_decimal": 59002
      },
      {
        "icon_id": "24879603",
        "name": "plusempty",
        "font_class": "plusempty",
        "unicode": "e67b",
        "unicode_decimal": 59003
      },
      {
        "icon_id": "24879604",
        "name": "smallcircle",
        "font_class": "smallcircle",
        "unicode": "e67c",
        "unicode_decimal": 59004
      },
      {
        "icon_id": "24879605",
        "name": "minus-filled",
        "font_class": "minus-filled",
        "unicode": "e67d",
        "unicode_decimal": 59005
      },
      {
        "icon_id": "24879606",
        "name": "micoff",
        "font_class": "micoff",
        "unicode": "e67e",
        "unicode_decimal": 59006
      },
      {
        "icon_id": "24879588",
        "name": "closeempty",
        "font_class": "closeempty",
        "unicode": "e66c",
        "unicode_decimal": 58988
      },
      {
        "icon_id": "24879589",
        "name": "clear",
        "font_class": "clear",
        "unicode": "e66d",
        "unicode_decimal": 58989
      },
      {
        "icon_id": "24879590",
        "name": "navigate",
        "font_class": "navigate",
        "unicode": "e66e",
        "unicode_decimal": 58990
      },
      {
        "icon_id": "24879591",
        "name": "minus",
        "font_class": "minus",
        "unicode": "e66f",
        "unicode_decimal": 58991
      },
      {
        "icon_id": "24879592",
        "name": "image",
        "font_class": "image",
        "unicode": "e670",
        "unicode_decimal": 58992
      },
      {
        "icon_id": "24879593",
        "name": "mic",
        "font_class": "mic",
        "unicode": "e671",
        "unicode_decimal": 58993
      },
      {
        "icon_id": "24879594",
        "name": "paperplane",
        "font_class": "paperplane",
        "unicode": "e672",
        "unicode_decimal": 58994
      },
      {
        "icon_id": "24879595",
        "name": "close",
        "font_class": "close",
        "unicode": "e673",
        "unicode_decimal": 58995
      },
      {
        "icon_id": "24879596",
        "name": "help-filled",
        "font_class": "help-filled",
        "unicode": "e674",
        "unicode_decimal": 58996
      },
      {
        "icon_id": "24879597",
        "name": "plus-filled",
        "font_class": "paperplane-filled",
        "unicode": "e675",
        "unicode_decimal": 58997
      },
      {
        "icon_id": "24879598",
        "name": "plus",
        "font_class": "plus",
        "unicode": "e676",
        "unicode_decimal": 58998
      },
      {
        "icon_id": "24879599",
        "name": "mic-filled",
        "font_class": "mic-filled",
        "unicode": "e677",
        "unicode_decimal": 58999
      },
      {
        "icon_id": "24879600",
        "name": "image-filled",
        "font_class": "image-filled",
        "unicode": "e678",
        "unicode_decimal": 59e3
      },
      {
        "icon_id": "24855900",
        "name": "locked-filled",
        "font_class": "locked-filled",
        "unicode": "e668",
        "unicode_decimal": 58984
      },
      {
        "icon_id": "24855901",
        "name": "info",
        "font_class": "info",
        "unicode": "e669",
        "unicode_decimal": 58985
      },
      {
        "icon_id": "24855903",
        "name": "locked",
        "font_class": "locked",
        "unicode": "e66b",
        "unicode_decimal": 58987
      },
      {
        "icon_id": "24855884",
        "name": "camera-filled",
        "font_class": "camera-filled",
        "unicode": "e658",
        "unicode_decimal": 58968
      },
      {
        "icon_id": "24855885",
        "name": "chat-filled",
        "font_class": "chat-filled",
        "unicode": "e659",
        "unicode_decimal": 58969
      },
      {
        "icon_id": "24855886",
        "name": "camera",
        "font_class": "camera",
        "unicode": "e65a",
        "unicode_decimal": 58970
      },
      {
        "icon_id": "24855887",
        "name": "circle",
        "font_class": "circle",
        "unicode": "e65b",
        "unicode_decimal": 58971
      },
      {
        "icon_id": "24855888",
        "name": "checkmarkempty",
        "font_class": "checkmarkempty",
        "unicode": "e65c",
        "unicode_decimal": 58972
      },
      {
        "icon_id": "24855889",
        "name": "chat",
        "font_class": "chat",
        "unicode": "e65d",
        "unicode_decimal": 58973
      },
      {
        "icon_id": "24855890",
        "name": "circle-filled",
        "font_class": "circle-filled",
        "unicode": "e65e",
        "unicode_decimal": 58974
      },
      {
        "icon_id": "24855891",
        "name": "flag",
        "font_class": "flag",
        "unicode": "e65f",
        "unicode_decimal": 58975
      },
      {
        "icon_id": "24855892",
        "name": "flag-filled",
        "font_class": "flag-filled",
        "unicode": "e660",
        "unicode_decimal": 58976
      },
      {
        "icon_id": "24855893",
        "name": "gear-filled",
        "font_class": "gear-filled",
        "unicode": "e661",
        "unicode_decimal": 58977
      },
      {
        "icon_id": "24855894",
        "name": "home",
        "font_class": "home",
        "unicode": "e662",
        "unicode_decimal": 58978
      },
      {
        "icon_id": "24855895",
        "name": "home-filled",
        "font_class": "home-filled",
        "unicode": "e663",
        "unicode_decimal": 58979
      },
      {
        "icon_id": "24855896",
        "name": "gear",
        "font_class": "gear",
        "unicode": "e664",
        "unicode_decimal": 58980
      },
      {
        "icon_id": "24855897",
        "name": "smallcircle-filled",
        "font_class": "smallcircle-filled",
        "unicode": "e665",
        "unicode_decimal": 58981
      },
      {
        "icon_id": "24855898",
        "name": "map-filled",
        "font_class": "map-filled",
        "unicode": "e666",
        "unicode_decimal": 58982
      },
      {
        "icon_id": "24855899",
        "name": "map",
        "font_class": "map",
        "unicode": "e667",
        "unicode_decimal": 58983
      },
      {
        "icon_id": "24855825",
        "name": "refresh-filled",
        "font_class": "refresh-filled",
        "unicode": "e656",
        "unicode_decimal": 58966
      },
      {
        "icon_id": "24855826",
        "name": "refresh",
        "font_class": "refresh",
        "unicode": "e657",
        "unicode_decimal": 58967
      },
      {
        "icon_id": "24855808",
        "name": "cloud-upload",
        "font_class": "cloud-upload",
        "unicode": "e645",
        "unicode_decimal": 58949
      },
      {
        "icon_id": "24855809",
        "name": "cloud-download-filled",
        "font_class": "cloud-download-filled",
        "unicode": "e646",
        "unicode_decimal": 58950
      },
      {
        "icon_id": "24855810",
        "name": "cloud-download",
        "font_class": "cloud-download",
        "unicode": "e647",
        "unicode_decimal": 58951
      },
      {
        "icon_id": "24855811",
        "name": "cloud-upload-filled",
        "font_class": "cloud-upload-filled",
        "unicode": "e648",
        "unicode_decimal": 58952
      },
      {
        "icon_id": "24855813",
        "name": "redo",
        "font_class": "redo",
        "unicode": "e64a",
        "unicode_decimal": 58954
      },
      {
        "icon_id": "24855814",
        "name": "images-filled",
        "font_class": "images-filled",
        "unicode": "e64b",
        "unicode_decimal": 58955
      },
      {
        "icon_id": "24855815",
        "name": "undo-filled",
        "font_class": "undo-filled",
        "unicode": "e64c",
        "unicode_decimal": 58956
      },
      {
        "icon_id": "24855816",
        "name": "more",
        "font_class": "more",
        "unicode": "e64d",
        "unicode_decimal": 58957
      },
      {
        "icon_id": "24855817",
        "name": "more-filled",
        "font_class": "more-filled",
        "unicode": "e64e",
        "unicode_decimal": 58958
      },
      {
        "icon_id": "24855818",
        "name": "undo",
        "font_class": "undo",
        "unicode": "e64f",
        "unicode_decimal": 58959
      },
      {
        "icon_id": "24855819",
        "name": "images",
        "font_class": "images",
        "unicode": "e650",
        "unicode_decimal": 58960
      },
      {
        "icon_id": "24855821",
        "name": "paperclip",
        "font_class": "paperclip",
        "unicode": "e652",
        "unicode_decimal": 58962
      },
      {
        "icon_id": "24855822",
        "name": "settings",
        "font_class": "settings",
        "unicode": "e653",
        "unicode_decimal": 58963
      },
      {
        "icon_id": "24855823",
        "name": "search",
        "font_class": "search",
        "unicode": "e654",
        "unicode_decimal": 58964
      },
      {
        "icon_id": "24855824",
        "name": "redo-filled",
        "font_class": "redo-filled",
        "unicode": "e655",
        "unicode_decimal": 58965
      },
      {
        "icon_id": "24841702",
        "name": "list",
        "font_class": "list",
        "unicode": "e644",
        "unicode_decimal": 58948
      },
      {
        "icon_id": "24841489",
        "name": "mail-open-filled",
        "font_class": "mail-open-filled",
        "unicode": "e63a",
        "unicode_decimal": 58938
      },
      {
        "icon_id": "24841491",
        "name": "hand-thumbsdown-filled",
        "font_class": "hand-down-filled",
        "unicode": "e63c",
        "unicode_decimal": 58940
      },
      {
        "icon_id": "24841492",
        "name": "hand-thumbsdown",
        "font_class": "hand-down",
        "unicode": "e63d",
        "unicode_decimal": 58941
      },
      {
        "icon_id": "24841493",
        "name": "hand-thumbsup-filled",
        "font_class": "hand-up-filled",
        "unicode": "e63e",
        "unicode_decimal": 58942
      },
      {
        "icon_id": "24841494",
        "name": "hand-thumbsup",
        "font_class": "hand-up",
        "unicode": "e63f",
        "unicode_decimal": 58943
      },
      {
        "icon_id": "24841496",
        "name": "heart-filled",
        "font_class": "heart-filled",
        "unicode": "e641",
        "unicode_decimal": 58945
      },
      {
        "icon_id": "24841498",
        "name": "mail-open",
        "font_class": "mail-open",
        "unicode": "e643",
        "unicode_decimal": 58947
      },
      {
        "icon_id": "24841488",
        "name": "heart",
        "font_class": "heart",
        "unicode": "e639",
        "unicode_decimal": 58937
      },
      {
        "icon_id": "24839963",
        "name": "loop",
        "font_class": "loop",
        "unicode": "e633",
        "unicode_decimal": 58931
      },
      {
        "icon_id": "24839866",
        "name": "pulldown",
        "font_class": "pulldown",
        "unicode": "e632",
        "unicode_decimal": 58930
      },
      {
        "icon_id": "24813798",
        "name": "scan",
        "font_class": "scan",
        "unicode": "e62a",
        "unicode_decimal": 58922
      },
      {
        "icon_id": "24813786",
        "name": "bars",
        "font_class": "bars",
        "unicode": "e627",
        "unicode_decimal": 58919
      },
      {
        "icon_id": "24813788",
        "name": "cart-filled",
        "font_class": "cart-filled",
        "unicode": "e629",
        "unicode_decimal": 58921
      },
      {
        "icon_id": "24813790",
        "name": "checkbox",
        "font_class": "checkbox",
        "unicode": "e62b",
        "unicode_decimal": 58923
      },
      {
        "icon_id": "24813791",
        "name": "checkbox-filled",
        "font_class": "checkbox-filled",
        "unicode": "e62c",
        "unicode_decimal": 58924
      },
      {
        "icon_id": "24813794",
        "name": "shop",
        "font_class": "shop",
        "unicode": "e62f",
        "unicode_decimal": 58927
      },
      {
        "icon_id": "24813795",
        "name": "headphones",
        "font_class": "headphones",
        "unicode": "e630",
        "unicode_decimal": 58928
      },
      {
        "icon_id": "24813796",
        "name": "cart",
        "font_class": "cart",
        "unicode": "e631",
        "unicode_decimal": 58929
      }
    ]
  };
  const getVal$1 = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  const _sfc_main$L = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: icons.glyphs
      };
    },
    computed: {
      unicode() {
        let code = this.icons.find((v2) => v2.font_class === this.type);
        if (code) {
          return unescape(`%u${code.unicode}`);
        }
        return "";
      },
      iconSize() {
        return getVal$1(this.size);
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "text",
      {
        style: vue.normalizeStyle({ color: $props.color, "font-size": $options.iconSize }),
        class: vue.normalizeClass(["uni-icons", ["uniui-" + $props.type, $props.customPrefix, $props.customPrefix ? $props.type : ""]]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
      },
      null,
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_0$6 = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["render", _sfc_render$e], ["__scopeId", "data-v-d31e1c47"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  const ON_SHOW = "onShow";
  const ON_LOAD = "onLoad";
  const ON_PULL_DOWN_REFRESH = "onPullDownRefresh";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  const createHook = (lifecycle) => (hook, target = vue.getCurrentInstance()) => {
    !vue.isInSSRComponentSetup && vue.injectHook(lifecycle, hook, target);
  };
  const onShow = /* @__PURE__ */ createHook(ON_SHOW);
  const onLoad = /* @__PURE__ */ createHook(ON_LOAD);
  const onPullDownRefresh = /* @__PURE__ */ createHook(ON_PULL_DOWN_REFRESH);
  const _sfc_main$K = {
    name: "uni-easyinput",
    emits: ["click", "iconClick", "update:modelValue", "input", "focus", "blur", "confirm"],
    model: {
      prop: "modelValue",
      event: "update:modelValue"
    },
    props: {
      name: String,
      value: [Number, String],
      modelValue: [Number, String],
      type: {
        type: String,
        default: "text"
      },
      clearable: {
        type: Boolean,
        default: true
      },
      autoHeight: {
        type: Boolean,
        default: false
      },
      placeholder: String,
      placeholderStyle: String,
      focus: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      maxlength: {
        type: [Number, String],
        default: 140
      },
      confirmType: {
        type: String,
        default: "done"
      },
      clearSize: {
        type: [Number, String],
        default: 15
      },
      inputBorder: {
        type: Boolean,
        default: true
      },
      prefixIcon: {
        type: String,
        default: ""
      },
      suffixIcon: {
        type: String,
        default: ""
      },
      trim: {
        type: [Boolean, String],
        default: true
      },
      passwordIcon: {
        type: Boolean,
        default: true
      },
      styles: {
        type: Object,
        default() {
          return {
            color: "#333",
            disableColor: "#F7F6F6",
            borderColor: "#e5e5e5"
          };
        }
      },
      errorMessage: {
        type: [String, Boolean],
        default: ""
      }
    },
    data() {
      return {
        focused: false,
        errMsg: "",
        val: "",
        showMsg: "",
        border: false,
        isFirstBorder: false,
        showClearIcon: false,
        showPassword: false
      };
    },
    computed: {
      msg() {
        return this.errorMessage || this.errMsg;
      },
      // 因为uniapp的input组件的maxlength组件必须要数值，这里转为数值，用户可以传入字符串数值
      inputMaxlength() {
        return Number(this.maxlength);
      }
    },
    watch: {
      value(newVal) {
        if (this.errMsg)
          this.errMsg = "";
        this.val = newVal;
        if (this.form && this.formItem && !this.is_reset) {
          this.is_reset = false;
          this.formItem.setValue(newVal);
        }
      },
      modelValue(newVal) {
        if (this.errMsg)
          this.errMsg = "";
        this.val = newVal;
        if (this.form && this.formItem && !this.is_reset) {
          this.is_reset = false;
          this.formItem.setValue(newVal);
        }
      },
      focus(newVal) {
        this.$nextTick(() => {
          this.focused = this.focus;
        });
      }
    },
    created() {
      if (!this.value && this.value !== 0) {
        this.val = this.modelValue;
      }
      if (!this.modelValue && this.modelValue !== 0) {
        this.val = this.value;
      }
      this.form = this.getForm("uniForms");
      this.formItem = this.getForm("uniFormsItem");
      if (this.form && this.formItem) {
        if (this.formItem.name) {
          if (!this.is_reset) {
            this.is_reset = false;
            this.formItem.setValue(this.val);
          }
          this.rename = this.formItem.name;
          this.form.inputChildrens.push(this);
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.focused = this.focus;
      });
    },
    methods: {
      /**
       * 初始化变量值
       */
      init() {
      },
      onClickIcon(type) {
        this.$emit("iconClick", type);
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
      onEyes() {
        this.showPassword = !this.showPassword;
      },
      onInput(event) {
        let value = event.detail.value;
        if (this.trim) {
          if (typeof this.trim === "boolean" && this.trim) {
            value = this.trimStr(value);
          }
          if (typeof this.trim === "string") {
            value = this.trimStr(value, this.trim);
          }
        }
        if (this.errMsg)
          this.errMsg = "";
        this.val = value;
        this.$emit("input", value);
        this.$emit("update:modelValue", value);
      },
      onFocus(event) {
        this.$emit("focus", event);
      },
      onBlur(event) {
        event.detail.value;
        this.$emit("blur", event);
      },
      onConfirm(e2) {
        this.$emit("confirm", e2.detail.value);
      },
      onClear(event) {
        this.val = "";
        this.$emit("input", "");
        this.$emit("update:modelValue", "");
      },
      fieldClick() {
        this.$emit("click");
      },
      trimStr(str, pos = "both") {
        if (pos === "both") {
          return str.trim();
        } else if (pos === "left") {
          return str.trimLeft();
        } else if (pos === "right") {
          return str.trimRight();
        } else if (pos === "start") {
          return str.trimStart();
        } else if (pos === "end") {
          return str.trimEnd();
        } else if (pos === "all") {
          return str.replace(/\s+/g, "");
        } else if (pos === "none") {
          return str;
        }
        return str;
      }
    }
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$6);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["uni-easyinput", { "uni-easyinput-error": $options.msg }]),
        style: vue.normalizeStyle({ color: $props.inputBorder && $options.msg ? "#e43d33" : $props.styles.color })
      },
      [
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["uni-easyinput__content", { "is-input-border": $props.inputBorder, "is-input-error-border": $props.inputBorder && $options.msg, "is-textarea": $props.type === "textarea", "is-disabled": $props.disabled }]),
            style: vue.normalizeStyle({ "border-color": $props.inputBorder && $options.msg ? "#dd524d" : $props.styles.borderColor, "background-color": $props.disabled ? $props.styles.disableColor : "" })
          },
          [
            $props.prefixIcon ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
              key: 0,
              class: "content-clear-icon",
              type: $props.prefixIcon,
              color: "#c0c4cc",
              onClick: _cache[0] || (_cache[0] = ($event) => $options.onClickIcon("prefix"))
            }, null, 8, ["type"])) : vue.createCommentVNode("v-if", true),
            $props.type === "textarea" ? (vue.openBlock(), vue.createElementBlock("textarea", {
              key: 1,
              class: vue.normalizeClass(["uni-easyinput__content-textarea", { "input-padding": $props.inputBorder }]),
              name: $props.name,
              value: $data.val,
              placeholder: $props.placeholder,
              placeholderStyle: $props.placeholderStyle,
              disabled: $props.disabled,
              "placeholder-class": "uni-easyinput__placeholder-class",
              maxlength: $options.inputMaxlength,
              focus: $data.focused,
              autoHeight: $props.autoHeight,
              onInput: _cache[1] || (_cache[1] = (...args) => $options.onInput && $options.onInput(...args)),
              onBlur: _cache[2] || (_cache[2] = (...args) => $options.onBlur && $options.onBlur(...args)),
              onFocus: _cache[3] || (_cache[3] = (...args) => $options.onFocus && $options.onFocus(...args)),
              onConfirm: _cache[4] || (_cache[4] = (...args) => $options.onConfirm && $options.onConfirm(...args))
            }, null, 42, ["name", "value", "placeholder", "placeholderStyle", "disabled", "maxlength", "focus", "autoHeight"])) : (vue.openBlock(), vue.createElementBlock("input", {
              key: 2,
              type: $props.type === "password" ? "text" : $props.type,
              class: "uni-easyinput__content-input",
              style: vue.normalizeStyle({
                "padding-right": $props.type === "password" || $props.clearable || $props.prefixIcon ? "" : "10px",
                "padding-left": $props.prefixIcon ? "" : "10px"
              }),
              name: $props.name,
              value: $data.val,
              password: !$data.showPassword && $props.type === "password",
              placeholder: $props.placeholder,
              placeholderStyle: $props.placeholderStyle,
              "placeholder-class": "uni-easyinput__placeholder-class",
              disabled: $props.disabled,
              maxlength: $options.inputMaxlength,
              focus: $data.focused,
              confirmType: $props.confirmType,
              onFocus: _cache[5] || (_cache[5] = (...args) => $options.onFocus && $options.onFocus(...args)),
              onBlur: _cache[6] || (_cache[6] = (...args) => $options.onBlur && $options.onBlur(...args)),
              onInput: _cache[7] || (_cache[7] = (...args) => $options.onInput && $options.onInput(...args)),
              onConfirm: _cache[8] || (_cache[8] = (...args) => $options.onConfirm && $options.onConfirm(...args))
            }, null, 44, ["type", "name", "value", "password", "placeholder", "placeholderStyle", "disabled", "maxlength", "focus", "confirmType"])),
            $props.type === "password" && $props.passwordIcon ? (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              { key: 3 },
              [
                $data.val ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                  key: 0,
                  class: vue.normalizeClass(["content-clear-icon", { "is-textarea-icon": $props.type === "textarea" }]),
                  type: $data.showPassword ? "eye-slash-filled" : "eye-filled",
                  size: 18,
                  color: "#c0c4cc",
                  onClick: $options.onEyes
                }, null, 8, ["class", "type", "onClick"])) : vue.createCommentVNode("v-if", true)
              ],
              64
              /* STABLE_FRAGMENT */
            )) : $props.suffixIcon ? (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              { key: 4 },
              [
                $props.suffixIcon ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                  key: 0,
                  class: "content-clear-icon",
                  type: $props.suffixIcon,
                  color: "#c0c4cc",
                  onClick: _cache[9] || (_cache[9] = ($event) => $options.onClickIcon("suffix"))
                }, null, 8, ["type"])) : vue.createCommentVNode("v-if", true)
              ],
              64
              /* STABLE_FRAGMENT */
            )) : (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              { key: 5 },
              [
                $props.clearable && $data.val && !$props.disabled ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                  key: 0,
                  class: vue.normalizeClass(["content-clear-icon", { "is-textarea-icon": $props.type === "textarea" }]),
                  type: "clear",
                  size: $props.clearSize,
                  color: "#c0c4cc",
                  onClick: $options.onClear
                }, null, 8, ["class", "size", "onClick"])) : vue.createCommentVNode("v-if", true)
              ],
              64
              /* STABLE_FRAGMENT */
            )),
            vue.renderSlot(_ctx.$slots, "right", {}, void 0, true)
          ],
          6
          /* CLASS, STYLE */
        )
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_0$5 = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["render", _sfc_render$d], ["__scopeId", "data-v-09fd5285"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.vue"]]);
  const _sfc_main$J = {
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
            uni.showToast({
              title: result.errorMessage || "校验错误",
              icon: "none"
            });
          }
          if (this.form.errShowType === "modal") {
            uni.showModal({
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
        for (let i2 = 0; i2 < rules.length; i2++) {
          const ruleData = rules[i2];
          if (ruleData.required) {
            isNoField = true;
            break;
          }
        }
        return isNoField;
      }
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$6);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["uni-forms-item", { "uni-forms-item--border": $data.border, "is-first-border": $data.border && $data.isFirstBorder, "uni-forms-item-error": $options.msg }])
      },
      [
        vue.createElementVNode("view", { class: "uni-forms-item__box" }, [
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass(["uni-forms-item__inner", ["is-direction-" + $data.labelPos]])
            },
            [
              vue.createElementVNode(
                "view",
                {
                  class: "uni-forms-item__label",
                  style: vue.normalizeStyle({ width: $data.labelWid, justifyContent: $options.justifyContent })
                },
                [
                  vue.renderSlot(_ctx.$slots, "label", {}, () => [
                    $props.required ? (vue.openBlock(), vue.createElementBlock("text", {
                      key: 0,
                      class: "is-required"
                    }, "*")) : vue.createCommentVNode("v-if", true),
                    $props.leftIcon ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                      key: 1,
                      class: "label-icon",
                      size: "16",
                      type: $props.leftIcon,
                      color: $props.iconColor
                    }, null, 8, ["type", "color"])) : vue.createCommentVNode("v-if", true),
                    vue.createElementVNode(
                      "text",
                      { class: "label-text" },
                      vue.toDisplayString($props.label),
                      1
                      /* TEXT */
                    ),
                    $props.label ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 2,
                      class: "label-seat"
                    })) : vue.createCommentVNode("v-if", true)
                  ], true)
                ],
                4
                /* STYLE */
              ),
              vue.createElementVNode(
                "view",
                {
                  class: vue.normalizeClass(["uni-forms-item__content", { "is-input-error-border": $options.msg }])
                },
                [
                  vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
                ],
                2
                /* CLASS */
              )
            ],
            2
            /* CLASS */
          ),
          $options.msg ? (vue.openBlock(), vue.createElementBlock(
            "view",
            {
              key: 0,
              class: vue.normalizeClass(["uni-error-message", { "uni-error-msg--boeder": $data.border }]),
              style: vue.normalizeStyle({
                paddingLeft: $options.labelLeft
              })
            },
            [
              vue.createElementVNode(
                "text",
                { class: "uni-error-message-text" },
                vue.toDisplayString($data.showMsg === "undertext" ? $options.msg : ""),
                1
                /* TEXT */
              )
            ],
            6
            /* CLASS, STYLE */
          )) : vue.createCommentVNode("v-if", true)
        ])
      ],
      2
      /* CLASS */
    );
  }
  const __easycom_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["render", _sfc_render$c], ["__scopeId", "data-v-462874dd"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.vue"]]);
  var pattern = {
    email: /^\S+?@\S+?\.\S+?$/,
    idcard: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
    url: new RegExp(
      "^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$",
      "i"
    )
  };
  const FORMAT_MAPPING = {
    "int": "integer",
    "bool": "boolean",
    "double": "number",
    "long": "number",
    "password": "string"
    // "fileurls": 'array'
  };
  function formatMessage(args, resources = "") {
    var defaultMessage = ["label"];
    defaultMessage.forEach((item) => {
      if (args[item] === void 0) {
        args[item] = "";
      }
    });
    let str = resources;
    for (let key in args) {
      let reg = new RegExp("{" + key + "}");
      str = str.replace(reg, args[key]);
    }
    return str;
  }
  function isEmptyValue(value, type) {
    if (value === void 0 || value === null) {
      return true;
    }
    if (typeof value === "string" && !value) {
      return true;
    }
    if (Array.isArray(value) && !value.length) {
      return true;
    }
    if (type === "object" && !Object.keys(value).length) {
      return true;
    }
    return false;
  }
  const types = {
    integer(value) {
      return types.number(value) && parseInt(value, 10) === value;
    },
    string(value) {
      return typeof value === "string";
    },
    number(value) {
      if (isNaN(value)) {
        return false;
      }
      return typeof value === "number";
    },
    "boolean": function(value) {
      return typeof value === "boolean";
    },
    "float": function(value) {
      return types.number(value) && !types.integer(value);
    },
    array(value) {
      return Array.isArray(value);
    },
    object(value) {
      return typeof value === "object" && !types.array(value);
    },
    date(value) {
      return value instanceof Date;
    },
    timestamp(value) {
      if (!this.integer(value) || Math.abs(value).toString().length > 16) {
        return false;
      }
      return true;
    },
    file(value) {
      return typeof value.url === "string";
    },
    email(value) {
      return typeof value === "string" && !!value.match(pattern.email) && value.length < 255;
    },
    url(value) {
      return typeof value === "string" && !!value.match(pattern.url);
    },
    pattern(reg, value) {
      try {
        return new RegExp(reg).test(value);
      } catch (e2) {
        return false;
      }
    },
    method(value) {
      return typeof value === "function";
    },
    idcard(value) {
      return typeof value === "string" && !!value.match(pattern.idcard);
    },
    "url-https"(value) {
      return this.url(value) && value.startsWith("https://");
    },
    "url-scheme"(value) {
      return value.startsWith("://");
    },
    "url-web"(value) {
      return false;
    }
  };
  class RuleValidator {
    constructor(message) {
      this._message = message;
    }
    async validateRule(fieldKey, fieldValue, value, data, allData) {
      var result = null;
      let rules = fieldValue.rules;
      let hasRequired = rules.findIndex((item) => {
        return item.required;
      });
      if (hasRequired < 0) {
        if (value === null || value === void 0) {
          return result;
        }
        if (typeof value === "string" && !value.length) {
          return result;
        }
      }
      var message = this._message;
      if (rules === void 0) {
        return message["default"];
      }
      for (var i2 = 0; i2 < rules.length; i2++) {
        let rule = rules[i2];
        let vt2 = this._getValidateType(rule);
        Object.assign(rule, {
          label: fieldValue.label || `["${fieldKey}"]`
        });
        if (RuleValidatorHelper[vt2]) {
          result = RuleValidatorHelper[vt2](rule, value, message);
          if (result != null) {
            break;
          }
        }
        if (rule.validateExpr) {
          let now = Date.now();
          let resultExpr = rule.validateExpr(value, allData, now);
          if (resultExpr === false) {
            result = this._getMessage(rule, rule.errorMessage || this._message["default"]);
            break;
          }
        }
        if (rule.validateFunction) {
          result = await this.validateFunction(rule, value, data, allData, vt2);
          if (result !== null) {
            break;
          }
        }
      }
      if (result !== null) {
        result = message.TAG + result;
      }
      return result;
    }
    async validateFunction(rule, value, data, allData, vt2) {
      let result = null;
      try {
        let callbackMessage = null;
        const res = await rule.validateFunction(rule, value, allData || data, (message) => {
          callbackMessage = message;
        });
        if (callbackMessage || typeof res === "string" && res || res === false) {
          result = this._getMessage(rule, callbackMessage || res, vt2);
        }
      } catch (e2) {
        result = this._getMessage(rule, e2.message, vt2);
      }
      return result;
    }
    _getMessage(rule, message, vt2) {
      return formatMessage(rule, message || rule.errorMessage || this._message[vt2] || message["default"]);
    }
    _getValidateType(rule) {
      var result = "";
      if (rule.required) {
        result = "required";
      } else if (rule.format) {
        result = "format";
      } else if (rule.arrayType) {
        result = "arrayTypeFormat";
      } else if (rule.range) {
        result = "range";
      } else if (rule.maximum !== void 0 || rule.minimum !== void 0) {
        result = "rangeNumber";
      } else if (rule.maxLength !== void 0 || rule.minLength !== void 0) {
        result = "rangeLength";
      } else if (rule.pattern) {
        result = "pattern";
      } else if (rule.validateFunction) {
        result = "validateFunction";
      }
      return result;
    }
  }
  const RuleValidatorHelper = {
    required(rule, value, message) {
      if (rule.required && isEmptyValue(value, rule.format || typeof value)) {
        return formatMessage(rule, rule.errorMessage || message.required);
      }
      return null;
    },
    range(rule, value, message) {
      const {
        range,
        errorMessage
      } = rule;
      let list = new Array(range.length);
      for (let i2 = 0; i2 < range.length; i2++) {
        const item = range[i2];
        if (types.object(item) && item.value !== void 0) {
          list[i2] = item.value;
        } else {
          list[i2] = item;
        }
      }
      let result = false;
      if (Array.isArray(value)) {
        result = new Set(value.concat(list)).size === list.length;
      } else {
        if (list.indexOf(value) > -1) {
          result = true;
        }
      }
      if (!result) {
        return formatMessage(rule, errorMessage || message["enum"]);
      }
      return null;
    },
    rangeNumber(rule, value, message) {
      if (!types.number(value)) {
        return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
      }
      let {
        minimum,
        maximum,
        exclusiveMinimum,
        exclusiveMaximum
      } = rule;
      let min = exclusiveMinimum ? value <= minimum : value < minimum;
      let max = exclusiveMaximum ? value >= maximum : value > maximum;
      if (minimum !== void 0 && min) {
        return formatMessage(rule, rule.errorMessage || message["number"][exclusiveMinimum ? "exclusiveMinimum" : "minimum"]);
      } else if (maximum !== void 0 && max) {
        return formatMessage(rule, rule.errorMessage || message["number"][exclusiveMaximum ? "exclusiveMaximum" : "maximum"]);
      } else if (minimum !== void 0 && maximum !== void 0 && (min || max)) {
        return formatMessage(rule, rule.errorMessage || message["number"].range);
      }
      return null;
    },
    rangeLength(rule, value, message) {
      if (!types.string(value) && !types.array(value)) {
        return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
      }
      let min = rule.minLength;
      let max = rule.maxLength;
      let val = value.length;
      if (min !== void 0 && val < min) {
        return formatMessage(rule, rule.errorMessage || message["length"].minLength);
      } else if (max !== void 0 && val > max) {
        return formatMessage(rule, rule.errorMessage || message["length"].maxLength);
      } else if (min !== void 0 && max !== void 0 && (val < min || val > max)) {
        return formatMessage(rule, rule.errorMessage || message["length"].range);
      }
      return null;
    },
    pattern(rule, value, message) {
      if (!types["pattern"](rule.pattern, value)) {
        return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
      }
      return null;
    },
    format(rule, value, message) {
      var customTypes = Object.keys(types);
      var format2 = FORMAT_MAPPING[rule.format] ? FORMAT_MAPPING[rule.format] : rule.format || rule.arrayType;
      if (customTypes.indexOf(format2) > -1) {
        if (!types[format2](value)) {
          return formatMessage(rule, rule.errorMessage || message.typeError);
        }
      }
      return null;
    },
    arrayTypeFormat(rule, value, message) {
      if (!Array.isArray(value)) {
        return formatMessage(rule, rule.errorMessage || message.typeError);
      }
      for (let i2 = 0; i2 < value.length; i2++) {
        const element = value[i2];
        let formatResult = this.format(rule, element, message);
        if (formatResult !== null) {
          return formatResult;
        }
      }
      return null;
    }
  };
  class SchemaValidator extends RuleValidator {
    constructor(schema, options) {
      super(SchemaValidator.message);
      this._schema = schema;
      this._options = options || null;
    }
    updateSchema(schema) {
      this._schema = schema;
    }
    async validate(data, allData) {
      let result = this._checkFieldInSchema(data);
      if (!result) {
        result = await this.invokeValidate(data, false, allData);
      }
      return result.length ? result[0] : null;
    }
    async validateAll(data, allData) {
      let result = this._checkFieldInSchema(data);
      if (!result) {
        result = await this.invokeValidate(data, true, allData);
      }
      return result;
    }
    async validateUpdate(data, allData) {
      let result = this._checkFieldInSchema(data);
      if (!result) {
        result = await this.invokeValidateUpdate(data, false, allData);
      }
      return result.length ? result[0] : null;
    }
    async invokeValidate(data, all, allData) {
      let result = [];
      let schema = this._schema;
      for (let key in schema) {
        let value = schema[key];
        let errorMessage = await this.validateRule(key, value, data[key], data, allData);
        if (errorMessage != null) {
          result.push({
            key,
            errorMessage
          });
          if (!all)
            break;
        }
      }
      return result;
    }
    async invokeValidateUpdate(data, all, allData) {
      let result = [];
      for (let key in data) {
        let errorMessage = await this.validateRule(key, this._schema[key], data[key], data, allData);
        if (errorMessage != null) {
          result.push({
            key,
            errorMessage
          });
          if (!all)
            break;
        }
      }
      return result;
    }
    _checkFieldInSchema(data) {
      var keys = Object.keys(data);
      var keys2 = Object.keys(this._schema);
      if (new Set(keys.concat(keys2)).size === keys2.length) {
        return "";
      }
      var noExistFields = keys.filter((key) => {
        return keys2.indexOf(key) < 0;
      });
      var errorMessage = formatMessage({
        field: JSON.stringify(noExistFields)
      }, SchemaValidator.message.TAG + SchemaValidator.message["defaultInvalid"]);
      return [{
        key: "invalid",
        errorMessage
      }];
    }
  }
  function Message() {
    return {
      TAG: "",
      default: "验证错误",
      defaultInvalid: "提交的字段{field}在数据库中并不存在",
      validateFunction: "验证无效",
      required: "{label}必填",
      "enum": "{label}超出范围",
      timestamp: "{label}格式无效",
      whitespace: "{label}不能为空",
      typeError: "{label}类型无效",
      date: {
        format: "{label}日期{value}格式无效",
        parse: "{label}日期无法解析,{value}无效",
        invalid: "{label}日期{value}无效"
      },
      length: {
        minLength: "{label}长度不能少于{minLength}",
        maxLength: "{label}长度不能超过{maxLength}",
        range: "{label}必须介于{minLength}和{maxLength}之间"
      },
      number: {
        minimum: "{label}不能小于{minimum}",
        maximum: "{label}不能大于{maximum}",
        exclusiveMinimum: "{label}不能小于等于{minimum}",
        exclusiveMaximum: "{label}不能大于等于{maximum}",
        range: "{label}必须介于{minimum}and{maximum}之间"
      },
      pattern: {
        mismatch: "{label}格式不匹配"
      }
    };
  }
  SchemaValidator.message = new Message();
  const _sfc_main$I = {
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
            for (let i2 in this.$refs) {
              const vm = this.$refs[i2];
              if (vm && vm.$options && vm.$options.name === "uniForms") {
                formVm = vm;
                break;
              }
            }
            if (!formVm)
              return formatAppLog("error", "at uni_modules/uni-forms/components/uni-forms/uni-forms.vue:152", "当前 uni-froms 组件缺少 ref 属性");
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
          } catch (e2) {
            this.formData = {};
          }
          return;
        }
        this.formRules = formRules;
        this.validator = new SchemaValidator(formRules);
        this.registerWatch();
      },
      // 监听 watch
      registerWatch() {
        this.unwatchs.forEach((v2) => v2());
        this.childrens.forEach((v2) => {
          v2.init();
        });
        Object.keys(this.dataValue).forEach((key) => {
          let watch = this.$watch(
            "dataValue." + key,
            (value) => {
              if (!value)
                return;
              if (value.toString() === "[object Object]") {
                for (let i2 in value) {
                  let name = `${key}[${i2}]`;
                  this.formData[name] = this._getValue(name, value[i2]);
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
        for (let i2 in invalidFields) {
          const item = this.childrens.find((v2) => v2.name === i2);
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
          keepitem.forEach((v2) => {
            newFormData[v2] = this.dataValue[v2];
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
        for (let i2 in this.dataValue) {
          const itemData = this.childrens.find((v2) => v2.name === i2);
          if (itemData) {
            if (this.formData[i2] === void 0) {
              this.formData[i2] = this._getValue(i2, this.dataValue[i2]);
            }
          }
        }
        if (!type) {
          formatAppLog("warn", "at uni_modules/uni-forms/components/uni-forms/uni-forms.vue:377", "submit 方法即将废弃，请使用validate方法代替！");
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
      type_filter(format2) {
        return format2 === "int" || format2 === "double" || format2 === "number" || format2 === "timestamp";
      }
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["uni-forms", { "uni-forms--top": !$props.border }])
      },
      [
        vue.createElementVNode(
          "form",
          {
            onSubmit: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.submitForm && $options.submitForm(...args), ["stop"])),
            onReset: _cache[1] || (_cache[1] = (...args) => $options.resetForm && $options.resetForm(...args))
          },
          [
            vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ],
          32
          /* HYDRATE_EVENTS */
        )
      ],
      2
      /* CLASS */
    );
  }
  const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["render", _sfc_render$b], ["__scopeId", "data-v-9a1e3c32"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/uni_modules/uni-forms/components/uni-forms/uni-forms.vue"]]);
  class MPAnimation {
    constructor(options, _this) {
      this.options = options;
      this.animation = uni.createAnimation(options);
      this.currentStepAnimates = {};
      this.next = 0;
      this.$ = _this;
    }
    _nvuePushAnimates(type, args) {
      let aniObj = this.currentStepAnimates[this.next];
      let styles = {};
      if (!aniObj) {
        styles = {
          styles: {},
          config: {}
        };
      } else {
        styles = aniObj;
      }
      if (animateTypes1.includes(type)) {
        if (!styles.styles.transform) {
          styles.styles.transform = "";
        }
        let unit = "";
        if (type === "rotate") {
          unit = "deg";
        }
        styles.styles.transform += `${type}(${args + unit}) `;
      } else {
        styles.styles[type] = `${args}`;
      }
      this.currentStepAnimates[this.next] = styles;
    }
    _animateRun(styles = {}, config = {}) {
      let ref = this.$.$refs["ani"].ref;
      if (!ref)
        return;
      return new Promise((resolve, reject) => {
        nvueAnimation.transition(ref, {
          styles,
          ...config
        }, (res) => {
          resolve();
        });
      });
    }
    _nvueNextAnimate(animates, step = 0, fn) {
      let obj = animates[step];
      if (obj) {
        let {
          styles,
          config
        } = obj;
        this._animateRun(styles, config).then(() => {
          step += 1;
          this._nvueNextAnimate(animates, step, fn);
        });
      } else {
        this.currentStepAnimates = {};
        typeof fn === "function" && fn();
        this.isEnd = true;
      }
    }
    step(config = {}) {
      this.animation.step(config);
      return this;
    }
    run(fn) {
      this.$.animationData = this.animation.export();
      this.$.timer = setTimeout(() => {
        typeof fn === "function" && fn();
      }, this.$.durationTime);
    }
  }
  const animateTypes1 = [
    "matrix",
    "matrix3d",
    "rotate",
    "rotate3d",
    "rotateX",
    "rotateY",
    "rotateZ",
    "scale",
    "scale3d",
    "scaleX",
    "scaleY",
    "scaleZ",
    "skew",
    "skewX",
    "skewY",
    "translate",
    "translate3d",
    "translateX",
    "translateY",
    "translateZ"
  ];
  const animateTypes2 = ["opacity", "backgroundColor"];
  const animateTypes3 = ["width", "height", "left", "right", "top", "bottom"];
  animateTypes1.concat(animateTypes2, animateTypes3).forEach((type) => {
    MPAnimation.prototype[type] = function(...args) {
      this.animation[type](...args);
      return this;
    };
  });
  function createAnimation(option, _this) {
    if (!_this)
      return;
    clearTimeout(_this.timer);
    return new MPAnimation(option, _this);
  }
  const _sfc_main$H = {
    name: "uniTransition",
    emits: ["click", "change"],
    props: {
      show: {
        type: Boolean,
        default: false
      },
      modeClass: {
        type: [Array, String],
        default() {
          return "fade";
        }
      },
      duration: {
        type: Number,
        default: 300
      },
      styles: {
        type: Object,
        default() {
          return {};
        }
      },
      customClass: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        isShow: false,
        transform: "",
        opacity: 1,
        animationData: {},
        durationTime: 300,
        config: {}
      };
    },
    watch: {
      show: {
        handler(newVal) {
          if (newVal) {
            this.open();
          } else {
            if (this.isShow) {
              this.close();
            }
          }
        },
        immediate: true
      }
    },
    computed: {
      // 生成样式数据
      stylesObject() {
        let styles = {
          ...this.styles,
          "transition-duration": this.duration / 1e3 + "s"
        };
        let transform = "";
        for (let i2 in styles) {
          let line = this.toLine(i2);
          transform += line + ":" + styles[i2] + ";";
        }
        return transform;
      },
      // 初始化动画条件
      transformStyles() {
        return "transform:" + this.transform + ";opacity:" + this.opacity + ";" + this.stylesObject;
      }
    },
    created() {
      this.config = {
        duration: this.duration,
        timingFunction: "ease",
        transformOrigin: "50% 50%",
        delay: 0
      };
      this.durationTime = this.duration;
    },
    methods: {
      /**
       *  ref 触发 初始化动画
       */
      init(obj = {}) {
        if (obj.duration) {
          this.durationTime = obj.duration;
        }
        this.animation = createAnimation(Object.assign(this.config, obj), this);
      },
      /**
       * 点击组件触发回调
       */
      onClick() {
        this.$emit("click", {
          detail: this.isShow
        });
      },
      /**
       * ref 触发 动画分组
       * @param {Object} obj
       */
      step(obj, config = {}) {
        if (!this.animation)
          return;
        for (let i2 in obj) {
          try {
            if (typeof obj[i2] === "object") {
              this.animation[i2](...obj[i2]);
            } else {
              this.animation[i2](obj[i2]);
            }
          } catch (e2) {
            formatAppLog("error", "at uni_modules/uni-transition/components/uni-transition/uni-transition.vue:139", `方法 ${i2} 不存在`);
          }
        }
        this.animation.step(config);
        return this;
      },
      /**
       *  ref 触发 执行动画
       */
      run(fn) {
        if (!this.animation)
          return;
        this.animation.run(fn);
      },
      // 开始过度动画
      open() {
        clearTimeout(this.timer);
        this.transform = "";
        this.isShow = true;
        let { opacity, transform } = this.styleInit(false);
        if (typeof opacity !== "undefined") {
          this.opacity = opacity;
        }
        this.transform = transform;
        this.$nextTick(() => {
          this.timer = setTimeout(() => {
            this.animation = createAnimation(this.config, this);
            this.tranfromInit(false).step();
            this.animation.run();
            this.$emit("change", {
              detail: this.isShow
            });
          }, 20);
        });
      },
      // 关闭过度动画
      close(type) {
        if (!this.animation)
          return;
        this.tranfromInit(true).step().run(() => {
          this.isShow = false;
          this.animationData = null;
          this.animation = null;
          let { opacity, transform } = this.styleInit(false);
          this.opacity = opacity || 1;
          this.transform = transform;
          this.$emit("change", {
            detail: this.isShow
          });
        });
      },
      // 处理动画开始前的默认样式
      styleInit(type) {
        let styles = {
          transform: ""
        };
        let buildStyle = (type2, mode) => {
          if (mode === "fade") {
            styles.opacity = this.animationType(type2)[mode];
          } else {
            styles.transform += this.animationType(type2)[mode] + " ";
          }
        };
        if (typeof this.modeClass === "string") {
          buildStyle(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode) => {
            buildStyle(type, mode);
          });
        }
        return styles;
      },
      // 处理内置组合动画
      tranfromInit(type) {
        let buildTranfrom = (type2, mode) => {
          let aniNum = null;
          if (mode === "fade") {
            aniNum = type2 ? 0 : 1;
          } else {
            aniNum = type2 ? "-100%" : "0";
            if (mode === "zoom-in") {
              aniNum = type2 ? 0.8 : 1;
            }
            if (mode === "zoom-out") {
              aniNum = type2 ? 1.2 : 1;
            }
            if (mode === "slide-right") {
              aniNum = type2 ? "100%" : "0";
            }
            if (mode === "slide-bottom") {
              aniNum = type2 ? "100%" : "0";
            }
          }
          this.animation[this.animationMode()[mode]](aniNum);
        };
        if (typeof this.modeClass === "string") {
          buildTranfrom(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode) => {
            buildTranfrom(type, mode);
          });
        }
        return this.animation;
      },
      animationType(type) {
        return {
          fade: type ? 1 : 0,
          "slide-top": `translateY(${type ? "0" : "-100%"})`,
          "slide-right": `translateX(${type ? "0" : "100%"})`,
          "slide-bottom": `translateY(${type ? "0" : "100%"})`,
          "slide-left": `translateX(${type ? "0" : "-100%"})`,
          "zoom-in": `scaleX(${type ? 1 : 0.8}) scaleY(${type ? 1 : 0.8})`,
          "zoom-out": `scaleX(${type ? 1 : 1.2}) scaleY(${type ? 1 : 1.2})`
        };
      },
      // 内置动画类型与实际动画对应字典
      animationMode() {
        return {
          fade: "opacity",
          "slide-top": "translateY",
          "slide-right": "translateX",
          "slide-bottom": "translateY",
          "slide-left": "translateX",
          "zoom-in": "scale",
          "zoom-out": "scale"
        };
      },
      // 驼峰转中横线
      toLine(name) {
        return name.replace(/([A-Z])/g, "-$1").toLowerCase();
      }
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    return $data.isShow ? (vue.openBlock(), vue.createElementBlock("view", {
      key: 0,
      ref: "ani",
      animation: $data.animationData,
      class: vue.normalizeClass($props.customClass),
      style: vue.normalizeStyle($options.transformStyles),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 14, ["animation"])) : vue.createCommentVNode("v-if", true);
  }
  const __easycom_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["render", _sfc_render$a], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/uni_modules/uni-transition/components/uni-transition/uni-transition.vue"]]);
  const _sfc_main$G = {
    name: "uniPopup",
    components: {},
    emits: ["change", "maskClick"],
    props: {
      // 开启动画
      animation: {
        type: Boolean,
        default: true
      },
      // 弹出层类型，可选值，top: 顶部弹出层；bottom：底部弹出层；center：全屏弹出层
      // message: 消息提示 ; dialog : 对话框
      type: {
        type: String,
        default: "center"
      },
      // maskClick
      isMaskClick: {
        type: Boolean,
        default: null
      },
      // TODO 2 个版本后废弃属性 ，使用 isMaskClick
      maskClick: {
        type: Boolean,
        default: null
      },
      backgroundColor: {
        type: String,
        default: "none"
      },
      safeArea: {
        type: Boolean,
        default: true
      },
      maskBackgroundColor: {
        type: String,
        default: "rgba(0, 0, 0, 0.4)"
      }
    },
    watch: {
      /**
       * 监听type类型
       */
      type: {
        handler: function(type) {
          if (!this.config[type])
            return;
          this[this.config[type]](true);
        },
        immediate: true
      },
      isDesktop: {
        handler: function(newVal) {
          if (!this.config[newVal])
            return;
          this[this.config[this.type]](true);
        },
        immediate: true
      },
      /**
       * 监听遮罩是否可点击
       * @param {Object} val
       */
      maskClick: {
        handler: function(val) {
          this.mkclick = val;
        },
        immediate: true
      },
      isMaskClick: {
        handler: function(val) {
          this.mkclick = val;
        },
        immediate: true
      },
      // H5 下禁止底部滚动
      showPopup(show) {
      }
    },
    data() {
      return {
        duration: 300,
        ani: [],
        showPopup: false,
        showTrans: false,
        popupWidth: 0,
        popupHeight: 0,
        config: {
          top: "top",
          bottom: "bottom",
          center: "center",
          left: "left",
          right: "right",
          message: "top",
          dialog: "center",
          share: "bottom"
        },
        maskClass: {
          position: "fixed",
          bottom: 0,
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)"
        },
        transClass: {
          position: "fixed",
          left: 0,
          right: 0
        },
        maskShow: true,
        mkclick: true,
        popupstyle: this.isDesktop ? "fixforpc-top" : "top"
      };
    },
    computed: {
      isDesktop() {
        return this.popupWidth >= 500 && this.popupHeight >= 500;
      },
      bg() {
        if (this.backgroundColor === "" || this.backgroundColor === "none") {
          return "transparent";
        }
        return this.backgroundColor;
      }
    },
    mounted() {
      const fixSize = () => {
        const {
          windowWidth,
          windowHeight,
          windowTop,
          safeArea,
          screenHeight,
          safeAreaInsets
        } = uni.getSystemInfoSync();
        this.popupWidth = windowWidth;
        this.popupHeight = windowHeight + (windowTop || 0);
        if (safeArea && this.safeArea) {
          this.safeAreaInsets = safeAreaInsets.bottom;
        } else {
          this.safeAreaInsets = 0;
        }
      };
      fixSize();
    },
    // TODO vue3
    unmounted() {
      this.setH5Visible();
    },
    created() {
      if (this.isMaskClick === null && this.maskClick === null) {
        this.mkclick = true;
      } else {
        this.mkclick = this.isMaskClick !== null ? this.isMaskClick : this.maskClick;
      }
      if (this.animation) {
        this.duration = 300;
      } else {
        this.duration = 0;
      }
      this.messageChild = null;
      this.clearPropagation = false;
      this.maskClass.backgroundColor = this.maskBackgroundColor;
    },
    methods: {
      setH5Visible() {
      },
      /**
       * 公用方法，不显示遮罩层
       */
      closeMask() {
        this.maskShow = false;
      },
      /**
       * 公用方法，遮罩层禁止点击
       */
      disableMask() {
        this.mkclick = false;
      },
      // TODO nvue 取消冒泡
      clear(e2) {
        e2.stopPropagation();
        this.clearPropagation = true;
      },
      open(direction) {
        if (this.showPopup) {
          clearTimeout(this.timer);
          this.showPopup = false;
        }
        let innerType = ["top", "center", "bottom", "left", "right", "message", "dialog", "share"];
        if (!(direction && innerType.indexOf(direction) !== -1)) {
          direction = this.type;
        }
        if (!this.config[direction]) {
          formatAppLog("error", "at uni_modules/uni-popup/components/uni-popup/uni-popup.vue:280", "缺少类型：", direction);
          return;
        }
        this[this.config[direction]]();
        this.$emit("change", {
          show: true,
          type: direction
        });
      },
      close(type) {
        this.showTrans = false;
        this.$emit("change", {
          show: false,
          type: this.type
        });
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.showPopup = false;
        }, 300);
      },
      // TODO 处理冒泡事件，头条的冒泡事件有问题 ，先这样兼容
      touchstart() {
        this.clearPropagation = false;
      },
      onTap() {
        if (this.clearPropagation) {
          this.clearPropagation = false;
          return;
        }
        this.$emit("maskClick");
        if (!this.mkclick)
          return;
        this.close();
      },
      /**
       * 顶部弹出样式处理
       */
      top(type) {
        this.popupstyle = this.isDesktop ? "fixforpc-top" : "top";
        this.ani = ["slide-top"];
        this.transClass = {
          position: "fixed",
          left: 0,
          right: 0,
          backgroundColor: this.bg
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
        this.$nextTick(() => {
          if (this.messageChild && this.type === "message") {
            this.messageChild.timerClose();
          }
        });
      },
      /**
       * 底部弹出样式处理
       */
      bottom(type) {
        this.popupstyle = "bottom";
        this.ani = ["slide-bottom"];
        this.transClass = {
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          paddingBottom: this.safeAreaInsets + "px",
          backgroundColor: this.bg
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      /**
       * 中间弹出样式处理
       */
      center(type) {
        this.popupstyle = "center";
        this.ani = ["zoom-out", "fade"];
        this.transClass = {
          position: "fixed",
          display: "flex",
          flexDirection: "column",
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
          justifyContent: "center",
          alignItems: "center"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      left(type) {
        this.popupstyle = "left";
        this.ani = ["slide-left"];
        this.transClass = {
          position: "fixed",
          left: 0,
          bottom: 0,
          top: 0,
          backgroundColor: this.bg,
          display: "flex",
          flexDirection: "column"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      right(type) {
        this.popupstyle = "right";
        this.ani = ["slide-right"];
        this.transClass = {
          position: "fixed",
          bottom: 0,
          right: 0,
          top: 0,
          backgroundColor: this.bg,
          display: "flex",
          flexDirection: "column"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      }
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_transition = resolveEasycom(vue.resolveDynamicComponent("uni-transition"), __easycom_0$4);
    return $data.showPopup ? (vue.openBlock(), vue.createElementBlock(
      "view",
      {
        key: 0,
        class: vue.normalizeClass(["uni-popup", [$data.popupstyle, $options.isDesktop ? "fixforpc-z-index" : ""]])
      },
      [
        vue.createElementVNode(
          "view",
          {
            onTouchstart: _cache[1] || (_cache[1] = (...args) => $options.touchstart && $options.touchstart(...args))
          },
          [
            $data.maskShow ? (vue.openBlock(), vue.createBlock(_component_uni_transition, {
              key: "1",
              name: "mask",
              "mode-class": "fade",
              styles: $data.maskClass,
              duration: $data.duration,
              show: $data.showTrans,
              onClick: $options.onTap
            }, null, 8, ["styles", "duration", "show", "onClick"])) : vue.createCommentVNode("v-if", true),
            vue.createVNode(_component_uni_transition, {
              key: "2",
              "mode-class": $data.ani,
              name: "content",
              styles: $data.transClass,
              duration: $data.duration,
              show: $data.showTrans,
              onClick: $options.onTap
            }, {
              default: vue.withCtx(() => [
                vue.createElementVNode(
                  "view",
                  {
                    class: vue.normalizeClass(["uni-popup__wrapper", [$data.popupstyle]]),
                    style: vue.normalizeStyle({ backgroundColor: $options.bg }),
                    onClick: _cache[0] || (_cache[0] = (...args) => $options.clear && $options.clear(...args))
                  },
                  [
                    vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
                  ],
                  6
                  /* CLASS, STYLE */
                )
              ]),
              _: 3
              /* FORWARDED */
            }, 8, ["mode-class", "styles", "duration", "show", "onClick"])
          ],
          32
          /* HYDRATE_EVENTS */
        )
      ],
      2
      /* CLASS */
    )) : vue.createCommentVNode("v-if", true);
  }
  const __easycom_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["render", _sfc_render$9], ["__scopeId", "data-v-4dd3c44b"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/uni_modules/uni-popup/components/uni-popup/uni-popup.vue"]]);
  const _imports_0 = "/static/new/img_logo@2x.png";
  function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function getTarget() {
    return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
  }
  const isProxyAvailable = typeof Proxy === "function";
  const HOOK_SETUP = "devtools-plugin:setup";
  const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
  class ApiProxy {
    constructor(plugin, hook) {
      this.target = null;
      this.targetQueue = [];
      this.onQueue = [];
      this.plugin = plugin;
      this.hook = hook;
      const defaultSettings = {};
      if (plugin.settings) {
        for (const id in plugin.settings) {
          const item = plugin.settings[id];
          defaultSettings[id] = item.defaultValue;
        }
      }
      const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
      let currentSettings = { ...defaultSettings };
      try {
        const raw = localStorage.getItem(localSettingsSaveId);
        const data = JSON.parse(raw);
        Object.assign(currentSettings, data);
      } catch (e2) {
      }
      this.fallbacks = {
        getSettings() {
          return currentSettings;
        },
        setSettings(value) {
          try {
            localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
          } catch (e2) {
          }
          currentSettings = value;
        }
      };
      hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
        if (pluginId === this.plugin.id) {
          this.fallbacks.setSettings(value);
        }
      });
      this.proxiedOn = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target.on[prop];
          } else {
            return (...args) => {
              this.onQueue.push({
                method: prop,
                args
              });
            };
          }
        }
      });
      this.proxiedTarget = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target[prop];
          } else if (prop === "on") {
            return this.proxiedOn;
          } else if (Object.keys(this.fallbacks).includes(prop)) {
            return (...args) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve: () => {
                }
              });
              return this.fallbacks[prop](...args);
            };
          } else {
            return (...args) => {
              return new Promise((resolve) => {
                this.targetQueue.push({
                  method: prop,
                  args,
                  resolve
                });
              });
            };
          }
        }
      });
    }
    async setRealTarget(target) {
      this.target = target;
      for (const item of this.onQueue) {
        this.target.on[item.method](...item.args);
      }
      for (const item of this.targetQueue) {
        item.resolve(await this.target[item.method](...item.args));
      }
    }
  }
  function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    const target = getTarget();
    const hook = getDevtoolsGlobalHook();
    const enableProxy = isProxyAvailable && pluginDescriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
      hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
    } else {
      const proxy = enableProxy ? new ApiProxy(pluginDescriptor, hook) : null;
      const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
      list.push({
        pluginDescriptor,
        setupFn,
        proxy
      });
      if (proxy)
        setupFn(proxy.proxiedTarget);
    }
  }
  /*!
   * vuex v4.1.0
   * (c) 2022 Evan You
   * @license MIT
   */
  var storeKey = "store";
  function useStore(key) {
    if (key === void 0)
      key = null;
    return vue.inject(key !== null ? key : storeKey);
  }
  function forEachValue(obj, fn) {
    Object.keys(obj).forEach(function(key) {
      return fn(obj[key], key);
    });
  }
  function isObject$1(obj) {
    return obj !== null && typeof obj === "object";
  }
  function isPromise(val) {
    return val && typeof val.then === "function";
  }
  function assert(condition2, msg) {
    if (!condition2) {
      throw new Error("[vuex] " + msg);
    }
  }
  function partial(fn, arg) {
    return function() {
      return fn(arg);
    };
  }
  function genericSubscribe(fn, subs, options) {
    if (subs.indexOf(fn) < 0) {
      options && options.prepend ? subs.unshift(fn) : subs.push(fn);
    }
    return function() {
      var i2 = subs.indexOf(fn);
      if (i2 > -1) {
        subs.splice(i2, 1);
      }
    };
  }
  function resetStore(store2, hot) {
    store2._actions = /* @__PURE__ */ Object.create(null);
    store2._mutations = /* @__PURE__ */ Object.create(null);
    store2._wrappedGetters = /* @__PURE__ */ Object.create(null);
    store2._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
    var state = store2.state;
    installModule(store2, state, [], store2._modules.root, true);
    resetStoreState(store2, state, hot);
  }
  function resetStoreState(store2, state, hot) {
    var oldState = store2._state;
    var oldScope = store2._scope;
    store2.getters = {};
    store2._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
    var wrappedGetters = store2._wrappedGetters;
    var computedObj = {};
    var computedCache = {};
    var scope = vue.effectScope(true);
    scope.run(function() {
      forEachValue(wrappedGetters, function(fn, key) {
        computedObj[key] = partial(fn, store2);
        computedCache[key] = vue.computed(function() {
          return computedObj[key]();
        });
        Object.defineProperty(store2.getters, key, {
          get: function() {
            return computedCache[key].value;
          },
          enumerable: true
          // for local getters
        });
      });
    });
    store2._state = vue.reactive({
      data: state
    });
    store2._scope = scope;
    if (store2.strict) {
      enableStrictMode(store2);
    }
    if (oldState) {
      if (hot) {
        store2._withCommit(function() {
          oldState.data = null;
        });
      }
    }
    if (oldScope) {
      oldScope.stop();
    }
  }
  function installModule(store2, rootState, path, module, hot) {
    var isRoot = !path.length;
    var namespace = store2._modules.getNamespace(path);
    if (module.namespaced) {
      if (store2._modulesNamespaceMap[namespace] && true) {
        console.error("[vuex] duplicate namespace " + namespace + " for the namespaced module " + path.join("/"));
      }
      store2._modulesNamespaceMap[namespace] = module;
    }
    if (!isRoot && !hot) {
      var parentState = getNestedState(rootState, path.slice(0, -1));
      var moduleName = path[path.length - 1];
      store2._withCommit(function() {
        {
          if (moduleName in parentState) {
            console.warn(
              '[vuex] state field "' + moduleName + '" was overridden by a module with the same name at "' + path.join(".") + '"'
            );
          }
        }
        parentState[moduleName] = module.state;
      });
    }
    var local = module.context = makeLocalContext(store2, namespace, path);
    module.forEachMutation(function(mutation, key) {
      var namespacedType = namespace + key;
      registerMutation(store2, namespacedType, mutation, local);
    });
    module.forEachAction(function(action, key) {
      var type = action.root ? key : namespace + key;
      var handler = action.handler || action;
      registerAction(store2, type, handler, local);
    });
    module.forEachGetter(function(getter, key) {
      var namespacedType = namespace + key;
      registerGetter(store2, namespacedType, getter, local);
    });
    module.forEachChild(function(child, key) {
      installModule(store2, rootState, path.concat(key), child, hot);
    });
  }
  function makeLocalContext(store2, namespace, path) {
    var noNamespace = namespace === "";
    var local = {
      dispatch: noNamespace ? store2.dispatch : function(_type, _payload, _options) {
        var args = unifyObjectStyle(_type, _payload, _options);
        var payload = args.payload;
        var options = args.options;
        var type = args.type;
        if (!options || !options.root) {
          type = namespace + type;
          if (!store2._actions[type]) {
            console.error("[vuex] unknown local action type: " + args.type + ", global type: " + type);
            return;
          }
        }
        return store2.dispatch(type, payload);
      },
      commit: noNamespace ? store2.commit : function(_type, _payload, _options) {
        var args = unifyObjectStyle(_type, _payload, _options);
        var payload = args.payload;
        var options = args.options;
        var type = args.type;
        if (!options || !options.root) {
          type = namespace + type;
          if (!store2._mutations[type]) {
            console.error("[vuex] unknown local mutation type: " + args.type + ", global type: " + type);
            return;
          }
        }
        store2.commit(type, payload, options);
      }
    };
    Object.defineProperties(local, {
      getters: {
        get: noNamespace ? function() {
          return store2.getters;
        } : function() {
          return makeLocalGetters(store2, namespace);
        }
      },
      state: {
        get: function() {
          return getNestedState(store2.state, path);
        }
      }
    });
    return local;
  }
  function makeLocalGetters(store2, namespace) {
    if (!store2._makeLocalGettersCache[namespace]) {
      var gettersProxy = {};
      var splitPos = namespace.length;
      Object.keys(store2.getters).forEach(function(type) {
        if (type.slice(0, splitPos) !== namespace) {
          return;
        }
        var localType = type.slice(splitPos);
        Object.defineProperty(gettersProxy, localType, {
          get: function() {
            return store2.getters[type];
          },
          enumerable: true
        });
      });
      store2._makeLocalGettersCache[namespace] = gettersProxy;
    }
    return store2._makeLocalGettersCache[namespace];
  }
  function registerMutation(store2, type, handler, local) {
    var entry = store2._mutations[type] || (store2._mutations[type] = []);
    entry.push(function wrappedMutationHandler(payload) {
      handler.call(store2, local.state, payload);
    });
  }
  function registerAction(store2, type, handler, local) {
    var entry = store2._actions[type] || (store2._actions[type] = []);
    entry.push(function wrappedActionHandler(payload) {
      var res = handler.call(store2, {
        dispatch: local.dispatch,
        commit: local.commit,
        getters: local.getters,
        state: local.state,
        rootGetters: store2.getters,
        rootState: store2.state
      }, payload);
      if (!isPromise(res)) {
        res = Promise.resolve(res);
      }
      if (store2._devtoolHook) {
        return res.catch(function(err) {
          store2._devtoolHook.emit("vuex:error", err);
          throw err;
        });
      } else {
        return res;
      }
    });
  }
  function registerGetter(store2, type, rawGetter, local) {
    if (store2._wrappedGetters[type]) {
      {
        console.error("[vuex] duplicate getter key: " + type);
      }
      return;
    }
    store2._wrappedGetters[type] = function wrappedGetter(store3) {
      return rawGetter(
        local.state,
        // local state
        local.getters,
        // local getters
        store3.state,
        // root state
        store3.getters
        // root getters
      );
    };
  }
  function enableStrictMode(store2) {
    vue.watch(function() {
      return store2._state.data;
    }, function() {
      {
        assert(store2._committing, "do not mutate vuex store state outside mutation handlers.");
      }
    }, { deep: true, flush: "sync" });
  }
  function getNestedState(state, path) {
    return path.reduce(function(state2, key) {
      return state2[key];
    }, state);
  }
  function unifyObjectStyle(type, payload, options) {
    if (isObject$1(type) && type.type) {
      options = payload;
      payload = type;
      type = type.type;
    }
    {
      assert(typeof type === "string", "expects string as the type, but found " + typeof type + ".");
    }
    return { type, payload, options };
  }
  var LABEL_VUEX_BINDINGS = "vuex bindings";
  var MUTATIONS_LAYER_ID = "vuex:mutations";
  var ACTIONS_LAYER_ID = "vuex:actions";
  var INSPECTOR_ID = "vuex";
  var actionId = 0;
  function addDevtools(app2, store2) {
    setupDevtoolsPlugin(
      {
        id: "org.vuejs.vuex",
        app: app2,
        label: "Vuex",
        homepage: "https://next.vuex.vuejs.org/",
        logo: "https://vuejs.org/images/icons/favicon-96x96.png",
        packageName: "vuex",
        componentStateTypes: [LABEL_VUEX_BINDINGS]
      },
      function(api) {
        api.addTimelineLayer({
          id: MUTATIONS_LAYER_ID,
          label: "Vuex Mutations",
          color: COLOR_LIME_500
        });
        api.addTimelineLayer({
          id: ACTIONS_LAYER_ID,
          label: "Vuex Actions",
          color: COLOR_LIME_500
        });
        api.addInspector({
          id: INSPECTOR_ID,
          label: "Vuex",
          icon: "storage",
          treeFilterPlaceholder: "Filter stores..."
        });
        api.on.getInspectorTree(function(payload) {
          if (payload.app === app2 && payload.inspectorId === INSPECTOR_ID) {
            if (payload.filter) {
              var nodes = [];
              flattenStoreForInspectorTree(nodes, store2._modules.root, payload.filter, "");
              payload.rootNodes = nodes;
            } else {
              payload.rootNodes = [
                formatStoreForInspectorTree(store2._modules.root, "")
              ];
            }
          }
        });
        api.on.getInspectorState(function(payload) {
          if (payload.app === app2 && payload.inspectorId === INSPECTOR_ID) {
            var modulePath = payload.nodeId;
            makeLocalGetters(store2, modulePath);
            payload.state = formatStoreForInspectorState(
              getStoreModule(store2._modules, modulePath),
              modulePath === "root" ? store2.getters : store2._makeLocalGettersCache,
              modulePath
            );
          }
        });
        api.on.editInspectorState(function(payload) {
          if (payload.app === app2 && payload.inspectorId === INSPECTOR_ID) {
            var modulePath = payload.nodeId;
            var path = payload.path;
            if (modulePath !== "root") {
              path = modulePath.split("/").filter(Boolean).concat(path);
            }
            store2._withCommit(function() {
              payload.set(store2._state.data, path, payload.state.value);
            });
          }
        });
        store2.subscribe(function(mutation, state) {
          var data = {};
          if (mutation.payload) {
            data.payload = mutation.payload;
          }
          data.state = state;
          api.notifyComponentUpdate();
          api.sendInspectorTree(INSPECTOR_ID);
          api.sendInspectorState(INSPECTOR_ID);
          api.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: Date.now(),
              title: mutation.type,
              data
            }
          });
        });
        store2.subscribeAction({
          before: function(action, state) {
            var data = {};
            if (action.payload) {
              data.payload = action.payload;
            }
            action._id = actionId++;
            action._time = Date.now();
            data.state = state;
            api.addTimelineEvent({
              layerId: ACTIONS_LAYER_ID,
              event: {
                time: action._time,
                title: action.type,
                groupId: action._id,
                subtitle: "start",
                data
              }
            });
          },
          after: function(action, state) {
            var data = {};
            var duration = Date.now() - action._time;
            data.duration = {
              _custom: {
                type: "duration",
                display: duration + "ms",
                tooltip: "Action duration",
                value: duration
              }
            };
            if (action.payload) {
              data.payload = action.payload;
            }
            data.state = state;
            api.addTimelineEvent({
              layerId: ACTIONS_LAYER_ID,
              event: {
                time: Date.now(),
                title: action.type,
                groupId: action._id,
                subtitle: "end",
                data
              }
            });
          }
        });
      }
    );
  }
  var COLOR_LIME_500 = 8702998;
  var COLOR_DARK = 6710886;
  var COLOR_WHITE = 16777215;
  var TAG_NAMESPACED = {
    label: "namespaced",
    textColor: COLOR_WHITE,
    backgroundColor: COLOR_DARK
  };
  function extractNameFromPath(path) {
    return path && path !== "root" ? path.split("/").slice(-2, -1)[0] : "Root";
  }
  function formatStoreForInspectorTree(module, path) {
    return {
      id: path || "root",
      // all modules end with a `/`, we want the last segment only
      // cart/ -> cart
      // nested/cart/ -> cart
      label: extractNameFromPath(path),
      tags: module.namespaced ? [TAG_NAMESPACED] : [],
      children: Object.keys(module._children).map(
        function(moduleName) {
          return formatStoreForInspectorTree(
            module._children[moduleName],
            path + moduleName + "/"
          );
        }
      )
    };
  }
  function flattenStoreForInspectorTree(result, module, filter, path) {
    if (path.includes(filter)) {
      result.push({
        id: path || "root",
        label: path.endsWith("/") ? path.slice(0, path.length - 1) : path || "Root",
        tags: module.namespaced ? [TAG_NAMESPACED] : []
      });
    }
    Object.keys(module._children).forEach(function(moduleName) {
      flattenStoreForInspectorTree(result, module._children[moduleName], filter, path + moduleName + "/");
    });
  }
  function formatStoreForInspectorState(module, getters, path) {
    getters = path === "root" ? getters : getters[path];
    var gettersKeys = Object.keys(getters);
    var storeState = {
      state: Object.keys(module.state).map(function(key) {
        return {
          key,
          editable: true,
          value: module.state[key]
        };
      })
    };
    if (gettersKeys.length) {
      var tree = transformPathsToObjectTree(getters);
      storeState.getters = Object.keys(tree).map(function(key) {
        return {
          key: key.endsWith("/") ? extractNameFromPath(key) : key,
          editable: false,
          value: canThrow(function() {
            return tree[key];
          })
        };
      });
    }
    return storeState;
  }
  function transformPathsToObjectTree(getters) {
    var result = {};
    Object.keys(getters).forEach(function(key) {
      var path = key.split("/");
      if (path.length > 1) {
        var target = result;
        var leafKey = path.pop();
        path.forEach(function(p2) {
          if (!target[p2]) {
            target[p2] = {
              _custom: {
                value: {},
                display: p2,
                tooltip: "Module",
                abstract: true
              }
            };
          }
          target = target[p2]._custom.value;
        });
        target[leafKey] = canThrow(function() {
          return getters[key];
        });
      } else {
        result[key] = canThrow(function() {
          return getters[key];
        });
      }
    });
    return result;
  }
  function getStoreModule(moduleMap, path) {
    var names = path.split("/").filter(function(n2) {
      return n2;
    });
    return names.reduce(
      function(module, moduleName, i2) {
        var child = module[moduleName];
        if (!child) {
          throw new Error('Missing module "' + moduleName + '" for path "' + path + '".');
        }
        return i2 === names.length - 1 ? child : child._children;
      },
      path === "root" ? moduleMap : moduleMap.root._children
    );
  }
  function canThrow(cb) {
    try {
      return cb();
    } catch (e2) {
      return e2;
    }
  }
  var Module = function Module2(rawModule, runtime) {
    this.runtime = runtime;
    this._children = /* @__PURE__ */ Object.create(null);
    this._rawModule = rawModule;
    var rawState = rawModule.state;
    this.state = (typeof rawState === "function" ? rawState() : rawState) || {};
  };
  var prototypeAccessors$1 = { namespaced: { configurable: true } };
  prototypeAccessors$1.namespaced.get = function() {
    return !!this._rawModule.namespaced;
  };
  Module.prototype.addChild = function addChild(key, module) {
    this._children[key] = module;
  };
  Module.prototype.removeChild = function removeChild(key) {
    delete this._children[key];
  };
  Module.prototype.getChild = function getChild(key) {
    return this._children[key];
  };
  Module.prototype.hasChild = function hasChild(key) {
    return key in this._children;
  };
  Module.prototype.update = function update2(rawModule) {
    this._rawModule.namespaced = rawModule.namespaced;
    if (rawModule.actions) {
      this._rawModule.actions = rawModule.actions;
    }
    if (rawModule.mutations) {
      this._rawModule.mutations = rawModule.mutations;
    }
    if (rawModule.getters) {
      this._rawModule.getters = rawModule.getters;
    }
  };
  Module.prototype.forEachChild = function forEachChild(fn) {
    forEachValue(this._children, fn);
  };
  Module.prototype.forEachGetter = function forEachGetter(fn) {
    if (this._rawModule.getters) {
      forEachValue(this._rawModule.getters, fn);
    }
  };
  Module.prototype.forEachAction = function forEachAction(fn) {
    if (this._rawModule.actions) {
      forEachValue(this._rawModule.actions, fn);
    }
  };
  Module.prototype.forEachMutation = function forEachMutation(fn) {
    if (this._rawModule.mutations) {
      forEachValue(this._rawModule.mutations, fn);
    }
  };
  Object.defineProperties(Module.prototype, prototypeAccessors$1);
  var ModuleCollection = function ModuleCollection2(rawRootModule) {
    this.register([], rawRootModule, false);
  };
  ModuleCollection.prototype.get = function get(path) {
    return path.reduce(function(module, key) {
      return module.getChild(key);
    }, this.root);
  };
  ModuleCollection.prototype.getNamespace = function getNamespace(path) {
    var module = this.root;
    return path.reduce(function(namespace, key) {
      module = module.getChild(key);
      return namespace + (module.namespaced ? key + "/" : "");
    }, "");
  };
  ModuleCollection.prototype.update = function update$1(rawRootModule) {
    update([], this.root, rawRootModule);
  };
  ModuleCollection.prototype.register = function register(path, rawModule, runtime) {
    var this$1$1 = this;
    if (runtime === void 0)
      runtime = true;
    {
      assertRawModule(path, rawModule);
    }
    var newModule = new Module(rawModule, runtime);
    if (path.length === 0) {
      this.root = newModule;
    } else {
      var parent = this.get(path.slice(0, -1));
      parent.addChild(path[path.length - 1], newModule);
    }
    if (rawModule.modules) {
      forEachValue(rawModule.modules, function(rawChildModule, key) {
        this$1$1.register(path.concat(key), rawChildModule, runtime);
      });
    }
  };
  ModuleCollection.prototype.unregister = function unregister(path) {
    var parent = this.get(path.slice(0, -1));
    var key = path[path.length - 1];
    var child = parent.getChild(key);
    if (!child) {
      {
        console.warn(
          "[vuex] trying to unregister module '" + key + "', which is not registered"
        );
      }
      return;
    }
    if (!child.runtime) {
      return;
    }
    parent.removeChild(key);
  };
  ModuleCollection.prototype.isRegistered = function isRegistered(path) {
    var parent = this.get(path.slice(0, -1));
    var key = path[path.length - 1];
    if (parent) {
      return parent.hasChild(key);
    }
    return false;
  };
  function update(path, targetModule, newModule) {
    {
      assertRawModule(path, newModule);
    }
    targetModule.update(newModule);
    if (newModule.modules) {
      for (var key in newModule.modules) {
        if (!targetModule.getChild(key)) {
          {
            console.warn(
              "[vuex] trying to add a new module '" + key + "' on hot reloading, manual reload is needed"
            );
          }
          return;
        }
        update(
          path.concat(key),
          targetModule.getChild(key),
          newModule.modules[key]
        );
      }
    }
  }
  var functionAssert = {
    assert: function(value) {
      return typeof value === "function";
    },
    expected: "function"
  };
  var objectAssert = {
    assert: function(value) {
      return typeof value === "function" || typeof value === "object" && typeof value.handler === "function";
    },
    expected: 'function or object with "handler" function'
  };
  var assertTypes = {
    getters: functionAssert,
    mutations: functionAssert,
    actions: objectAssert
  };
  function assertRawModule(path, rawModule) {
    Object.keys(assertTypes).forEach(function(key) {
      if (!rawModule[key]) {
        return;
      }
      var assertOptions = assertTypes[key];
      forEachValue(rawModule[key], function(value, type) {
        assert(
          assertOptions.assert(value),
          makeAssertionMessage(path, key, type, value, assertOptions.expected)
        );
      });
    });
  }
  function makeAssertionMessage(path, key, type, value, expected) {
    var buf = key + " should be " + expected + ' but "' + key + "." + type + '"';
    if (path.length > 0) {
      buf += ' in module "' + path.join(".") + '"';
    }
    buf += " is " + JSON.stringify(value) + ".";
    return buf;
  }
  function createStore(options) {
    return new Store(options);
  }
  var Store = function Store2(options) {
    var this$1$1 = this;
    if (options === void 0)
      options = {};
    {
      assert(typeof Promise !== "undefined", "vuex requires a Promise polyfill in this browser.");
      assert(this instanceof Store2, "store must be called with the new operator.");
    }
    var plugins = options.plugins;
    if (plugins === void 0)
      plugins = [];
    var strict = options.strict;
    if (strict === void 0)
      strict = false;
    var devtools = options.devtools;
    this._committing = false;
    this._actions = /* @__PURE__ */ Object.create(null);
    this._actionSubscribers = [];
    this._mutations = /* @__PURE__ */ Object.create(null);
    this._wrappedGetters = /* @__PURE__ */ Object.create(null);
    this._modules = new ModuleCollection(options);
    this._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
    this._subscribers = [];
    this._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
    this._scope = null;
    this._devtools = devtools;
    var store2 = this;
    var ref = this;
    var dispatch = ref.dispatch;
    var commit = ref.commit;
    this.dispatch = function boundDispatch(type, payload) {
      return dispatch.call(store2, type, payload);
    };
    this.commit = function boundCommit(type, payload, options2) {
      return commit.call(store2, type, payload, options2);
    };
    this.strict = strict;
    var state = this._modules.root.state;
    installModule(this, state, [], this._modules.root);
    resetStoreState(this, state);
    plugins.forEach(function(plugin) {
      return plugin(this$1$1);
    });
  };
  var prototypeAccessors = { state: { configurable: true } };
  Store.prototype.install = function install(app2, injectKey) {
    app2.provide(injectKey || storeKey, this);
    app2.config.globalProperties.$store = this;
    var useDevtools = this._devtools !== void 0 ? this._devtools : true;
    if (useDevtools) {
      addDevtools(app2, this);
    }
  };
  prototypeAccessors.state.get = function() {
    return this._state.data;
  };
  prototypeAccessors.state.set = function(v2) {
    {
      assert(false, "use store.replaceState() to explicit replace store state.");
    }
  };
  Store.prototype.commit = function commit(_type, _payload, _options) {
    var this$1$1 = this;
    var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;
    var mutation = { type, payload };
    var entry = this._mutations[type];
    if (!entry) {
      {
        console.error("[vuex] unknown mutation type: " + type);
      }
      return;
    }
    this._withCommit(function() {
      entry.forEach(function commitIterator(handler) {
        handler(payload);
      });
    });
    this._subscribers.slice().forEach(function(sub) {
      return sub(mutation, this$1$1.state);
    });
    if (options && options.silent) {
      console.warn(
        "[vuex] mutation type: " + type + ". Silent option has been removed. Use the filter functionality in the vue-devtools"
      );
    }
  };
  Store.prototype.dispatch = function dispatch(_type, _payload) {
    var this$1$1 = this;
    var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;
    var action = { type, payload };
    var entry = this._actions[type];
    if (!entry) {
      {
        console.error("[vuex] unknown action type: " + type);
      }
      return;
    }
    try {
      this._actionSubscribers.slice().filter(function(sub) {
        return sub.before;
      }).forEach(function(sub) {
        return sub.before(action, this$1$1.state);
      });
    } catch (e2) {
      {
        console.warn("[vuex] error in before action subscribers: ");
        console.error(e2);
      }
    }
    var result = entry.length > 1 ? Promise.all(entry.map(function(handler) {
      return handler(payload);
    })) : entry[0](payload);
    return new Promise(function(resolve, reject) {
      result.then(function(res) {
        try {
          this$1$1._actionSubscribers.filter(function(sub) {
            return sub.after;
          }).forEach(function(sub) {
            return sub.after(action, this$1$1.state);
          });
        } catch (e2) {
          {
            console.warn("[vuex] error in after action subscribers: ");
            console.error(e2);
          }
        }
        resolve(res);
      }, function(error) {
        try {
          this$1$1._actionSubscribers.filter(function(sub) {
            return sub.error;
          }).forEach(function(sub) {
            return sub.error(action, this$1$1.state, error);
          });
        } catch (e2) {
          {
            console.warn("[vuex] error in error action subscribers: ");
            console.error(e2);
          }
        }
        reject(error);
      });
    });
  };
  Store.prototype.subscribe = function subscribe(fn, options) {
    return genericSubscribe(fn, this._subscribers, options);
  };
  Store.prototype.subscribeAction = function subscribeAction(fn, options) {
    var subs = typeof fn === "function" ? { before: fn } : fn;
    return genericSubscribe(subs, this._actionSubscribers, options);
  };
  Store.prototype.watch = function watch$1(getter, cb, options) {
    var this$1$1 = this;
    {
      assert(typeof getter === "function", "store.watch only accepts a function.");
    }
    return vue.watch(function() {
      return getter(this$1$1.state, this$1$1.getters);
    }, cb, Object.assign({}, options));
  };
  Store.prototype.replaceState = function replaceState(state) {
    var this$1$1 = this;
    this._withCommit(function() {
      this$1$1._state.data = state;
    });
  };
  Store.prototype.registerModule = function registerModule(path, rawModule, options) {
    if (options === void 0)
      options = {};
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
      assert(path.length > 0, "cannot register the root module by using registerModule.");
    }
    this._modules.register(path, rawModule);
    installModule(this, this.state, path, this._modules.get(path), options.preserveState);
    resetStoreState(this, this.state);
  };
  Store.prototype.unregisterModule = function unregisterModule(path) {
    var this$1$1 = this;
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
    }
    this._modules.unregister(path);
    this._withCommit(function() {
      var parentState = getNestedState(this$1$1.state, path.slice(0, -1));
      delete parentState[path[path.length - 1]];
    });
    resetStore(this);
  };
  Store.prototype.hasModule = function hasModule(path) {
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
    }
    return this._modules.isRegistered(path);
  };
  Store.prototype.hotUpdate = function hotUpdate(newOptions) {
    this._modules.update(newOptions);
    resetStore(this, true);
  };
  Store.prototype._withCommit = function _withCommit(fn) {
    var committing = this._committing;
    this._committing = true;
    fn();
    this._committing = committing;
  };
  Object.defineProperties(Store.prototype, prototypeAccessors);
  const baseUrl = "/api";
  function request({ url = "", params = {}, method = "GET" }) {
    const token = uni.getStorageSync("token");
    let header = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: token
    };
    if (url == "/track/upload") {
      header["Content-Type"] = "application/x-www-form-urlencoded";
    }
    const requestRes = new Promise((resolve, reject) => {
      formatAppLog("log", "at utils/request.js:16", params, baseUrl + url, "进来了么");
      uni.request({
        url: baseUrl + url,
        data: params,
        header,
        method,
        sslVerify: false
      }).then((res) => {
        formatAppLog("log", "at utils/request.js:24", params, url, res, "header");
        const { data } = res;
        if (res.statusCode == 401) {
          uni.showToast({
            title: "您的登录已过期！请重新登录后操作！",
            duration: 2e3,
            icon: "none"
          });
          uni.redirectTo({
            url: "/pages/login/user"
          });
          return false;
        }
        let routes = getCurrentPages();
        if (data.code == 605 && routes[routes.length - 1].route !== "pages/login/user") {
          uni.removeStorageSync("token");
          uni.navigateTo({
            url: "/pages/login/user"
          });
        }
        if (data.code == 0 || data.code == 200) {
          resolve(res.data);
        } else {
          reject(res.data);
        }
      }).catch((err) => {
        formatAppLog("log", "at utils/request.js:52", err, "errr");
        const error = { data: { msg: err.data } };
        reject(error);
      });
    });
    return requestRes;
  }
  const phoneLogins = (params) => request({
    url: `/customer/open/login/worker`,
    method: "post",
    params
  });
  const getsmsCode = (params) => request({
    url: `/publics/sms-code/send`,
    method: "post",
    params
  });
  const getUserInfo = (params) => request({
    url: `/customer/worker/serve-provider/currentUserInfo`,
    method: "get",
    params
  });
  const getUserSetting = (params) => request({
    url: `/customer/worker/serve-settings/status`,
    method: "get",
    params
  });
  const setPickUpStatus = (params) => request({
    url: `/customer/worker/serve-settings/pick-up`,
    method: "put",
    params
  });
  const getServiceSkillAll = (params) => request({
    url: `/customer/worker/serve-skill/category`,
    method: "get",
    params
  });
  const updateServiceSkill = (params) => request({
    url: `/customer/worker/serve-skill/batchUpsert`,
    method: "post",
    params
  });
  const getSettingInfo = (params) => request({
    url: `/customer/worker/serve-settings`,
    method: "get",
    params
  });
  const getOpenCity = (params) => request({
    url: `/foundations/worker/region/activeRegionList`,
    method: "get",
    params
  });
  const setServiceSetting = (params) => request({
    url: `/customer/worker/serve-settings/serve-scope`,
    method: "put",
    params
  });
  const postAuth = (params) => request({
    url: `/customer/worker/worker-certification-audit`,
    method: "post",
    params
  });
  const getAuthFail = () => request({
    url: `/customer/worker/worker-certification-audit/rejectReason`,
    method: "get"
  });
  const postAccount = (params) => request({
    url: `/customer/worker/bank-account`,
    method: "post",
    params
  });
  const getAccountInfo = () => request({
    url: `/customer/worker/bank-account/currentUserBankAccount`,
    method: "get"
  });
  const _sfc_main$F = {
    __name: "user",
    setup(__props) {
      const store2 = useStore();
      const customForm = vue.ref();
      const alertDialog = vue.ref(null);
      const reason = vue.ref("");
      let fromInfo = vue.reactive({
        phone: "15066699132",
        //账号
        veriryCode: "",
        // 密码
        userType: 2
      });
      const customRules = vue.reactive({
        phone: {
          rules: [
            {
              required: true,
              errorMessage: "请输入手机号"
            },
            {
              validateFunction: function(rule, value, data, callback) {
                const reg = /^1[3-9]\d{9}$/;
                if (!reg.test(value)) {
                  callback("手机号输入错误！请重新输入");
                }
                return true;
              }
            }
          ]
        },
        veriryCode: {
          rules: [
            {
              required: true,
              errorMessage: "请输入验证码"
            }
          ]
        }
      });
      const handleClose = () => {
        alertDialog.value.close();
      };
      const handleSubmit = async () => {
        const valid = await customForm.value.validate();
        if (valid) {
          uni.showLoading({
            title: "loading",
            mask: true
          });
          await phoneLogins(fromInfo).then(async (res) => {
            uni.hideLoading();
            if (res.code === 200) {
              uni.setStorageSync("token", res.data.token);
              store2.commit("user/setToken", res.data.token);
              await getUserSetting().then((res2) => {
                if (Boolean(res2.data.settingsStatus)) {
                  uni.redirectTo({
                    url: "/pages/index/index"
                  });
                } else {
                  uni.redirectTo({
                    url: "/pages/setting/index"
                  });
                }
              });
            } else if (res.code === 605) {
              uni.showToast({
                title: res.msg,
                duration: 1e3,
                icon: "none"
              });
            }
          }).catch((err) => {
            uni.hideLoading();
            if (err.code === 605) {
              reason.value = err.msg;
              alertDialog.value.open();
            } else {
              uni.showToast({
                title: err.msg || "登录失败",
                duration: 1500,
                icon: "none"
              });
            }
          });
        }
      };
      const handlePwd = async () => {
        const reg = /^1[3-9]\d{9}$/;
        if (!reg.test(fromInfo.phone)) {
          return uni.showToast({
            title: "手机号输入错误！请重新输入",
            duration: 2e3,
            icon: "none"
          });
        }
        getsmsCode({
          bussinessType: 3,
          phone: fromInfo.phone
        }).then((res) => {
          fromInfo.veriryCode = "123456";
        }).catch((err) => {
          uni.showToast({
            title: err.msg || "获取验证码失败",
            duration: 1500,
            icon: "none"
          });
        });
      };
      return (_ctx, _cache) => {
        const _component_uni_easyinput = resolveEasycom(vue.resolveDynamicComponent("uni-easyinput"), __easycom_0$5);
        const _component_uni_forms_item = resolveEasycom(vue.resolveDynamicComponent("uni-forms-item"), __easycom_1$2);
        const _component_uni_forms = resolveEasycom(vue.resolveDynamicComponent("uni-forms"), __easycom_2);
        const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_0$3);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createElementVNode("image", {
            src: _imports_0,
            class: "logo"
          }),
          vue.createElementVNode("view", { class: "loginBox" }, [
            vue.createCommentVNode(" 登录表单 "),
            vue.createElementVNode("view", { class: "loginMain" }, [
              vue.createVNode(_component_uni_forms, {
                ref_key: "customForm",
                ref: customForm,
                rules: customRules,
                modelValue: vue.unref(fromInfo)
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_uni_forms_item, { name: "phone" }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_uni_easyinput, {
                        clearable: false,
                        class: "item",
                        modelValue: vue.unref(fromInfo).phone,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.unref(fromInfo).phone = $event),
                        placeholder: "请输入手机号"
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  vue.createVNode(_component_uni_forms_item, {
                    name: "veriryCode",
                    class: "pwdBox"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_uni_easyinput, {
                        clearable: false,
                        class: "item",
                        modelValue: vue.unref(fromInfo).veriryCode,
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => vue.unref(fromInfo).veriryCode = $event),
                        placeholder: "请输入验证码"
                      }, null, 8, ["modelValue"]),
                      vue.createElementVNode("text", {
                        class: "clearIcon",
                        onClick: handlePwd
                      }, "获取验证码")
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["rules", "modelValue"]),
              vue.createCommentVNode(" 按钮 "),
              vue.createElementVNode("view", { class: "btnBox" }, [
                vue.createElementVNode("button", {
                  class: vue.normalizeClass([
                    "btn-default",
                    vue.unref(fromInfo).phone.length === 0 || vue.unref(fromInfo).veriryCode.length === 0 ? "disabled" : ""
                  ]),
                  disabled: vue.unref(fromInfo).phone.length === 0 || vue.unref(fromInfo).veriryCode.length === 0,
                  type: "primary",
                  onClick: handleSubmit
                }, " 登录 ", 10, ["disabled"])
              ]),
              vue.createElementVNode("div", { class: "gentleReminder" }, " 仅用于IT培训教学使用，为保障您的个人信息安全，请勿向平台录入任何个人敏感信息（如手机号、身份证号等）！ "),
              vue.createCommentVNode(" end "),
              vue.createCommentVNode(" 更新请求Url - 教学需求 ")
            ]),
            vue.createCommentVNode(" end "),
            vue.createCommentVNode(" 提示窗示例 "),
            vue.createVNode(
              _component_uni_popup,
              {
                ref_key: "alertDialog",
                ref: alertDialog,
                type: "dialog",
                "is-mask-click": false
              },
              {
                default: vue.withCtx(() => [
                  vue.createElementVNode("view", { class: "dialog" }, [
                    vue.createElementVNode("view", { class: "content" }, "该手机号已被冻结"),
                    vue.createElementVNode("view", { class: "reason" }, [
                      vue.createElementVNode("text", null, "冻结原因："),
                      vue.createElementVNode(
                        "text",
                        null,
                        vue.toDisplayString(reason.value),
                        1
                        /* TEXT */
                      )
                    ]),
                    vue.createElementVNode("view", { class: "phoneLabel" }, "如需解冻请拨打客服电话："),
                    vue.createElementVNode("view", { class: "phone" }, "400-000-4000"),
                    vue.createElementVNode("view", {
                      class: "footer",
                      onClick: handleClose
                    }, "知道了")
                  ])
                ]),
                _: 1
                /* STABLE */
              },
              512
              /* NEED_PATCH */
            )
          ])
        ]);
      };
    }
  };
  const PagesLoginUser = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/pages/login/user.vue"]]);
  const _sfc_main$E = {
    name: "UniStatusBar",
    data() {
      return {
        statusBarHeight: 20
      };
    },
    mounted() {
      this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight + "px";
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        style: vue.normalizeStyle({ height: $data.statusBarHeight }),
        class: "uni-status-bar"
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      4
      /* STYLE */
    );
  }
  const statusBar = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["render", _sfc_render$8], ["__scopeId", "data-v-7920e3e0"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-status-bar.vue"]]);
  const getVal = (val) => typeof val === "number" ? val + "px" : val;
  const _sfc_main$D = {
    name: "UniNavBar",
    components: {
      statusBar
    },
    emits: ["clickLeft", "clickRight", "clickTitle"],
    props: {
      dark: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: ""
      },
      leftText: {
        type: String,
        default: ""
      },
      rightText: {
        type: String,
        default: ""
      },
      leftIcon: {
        type: String,
        default: ""
      },
      rightIcon: {
        type: String,
        default: ""
      },
      fixed: {
        type: [Boolean, String],
        default: false
      },
      color: {
        type: String,
        default: ""
      },
      backgroundColor: {
        type: String,
        default: ""
      },
      statusBar: {
        type: [Boolean, String],
        default: false
      },
      shadow: {
        type: [Boolean, String],
        default: false
      },
      border: {
        type: [Boolean, String],
        default: true
      },
      height: {
        type: [Number, String],
        default: 44
      },
      leftWidth: {
        type: [Number, String],
        default: 60
      },
      rightWidth: {
        type: [Number, String],
        default: 60
      },
      stat: {
        type: [Boolean, String],
        default: ""
      }
    },
    computed: {
      themeBgColor() {
        if (this.dark) {
          if (this.backgroundColor) {
            return this.backgroundColor;
          } else {
            return this.dark ? "#333" : "#FFF";
          }
        }
        return this.backgroundColor || "#FFF";
      },
      themeColor() {
        if (this.dark) {
          if (this.color) {
            return this.color;
          } else {
            return this.dark ? "#fff" : "#333";
          }
        }
        return this.color || "#333";
      },
      navbarHeight() {
        return getVal(this.height);
      },
      leftIconWidth() {
        return getVal(this.leftWidth);
      },
      rightIconWidth() {
        return getVal(this.rightWidth);
      }
    },
    mounted() {
      if (uni.report && this.stat && this.title !== "") {
        uni.report("title", this.title);
      }
    },
    methods: {
      onClickLeft() {
        this.$emit("clickLeft");
      },
      onClickRight() {
        this.$emit("clickRight");
      },
      onClickTitle() {
        this.$emit("clickTitle");
      }
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_status_bar = vue.resolveComponent("status-bar");
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$6);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["uni-navbar", { "uni-dark": $props.dark }])
      },
      [
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass([{ "uni-navbar--fixed": $props.fixed, "uni-navbar--shadow": $props.shadow, "uni-navbar--border": $props.border }, "uni-navbar__content"]),
            style: vue.normalizeStyle({ "background-color": $options.themeBgColor })
          },
          [
            $props.statusBar ? (vue.openBlock(), vue.createBlock(_component_status_bar, { key: 0 })) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode(
              "view",
              {
                style: vue.normalizeStyle({ color: $options.themeColor, backgroundColor: $options.themeBgColor, height: $options.navbarHeight }),
                class: "uni-navbar__header"
              },
              [
                vue.createElementVNode(
                  "view",
                  {
                    onClick: _cache[0] || (_cache[0] = (...args) => $options.onClickLeft && $options.onClickLeft(...args)),
                    class: "uni-navbar__header-btns uni-navbar__header-btns-left",
                    style: vue.normalizeStyle({ width: $options.leftIconWidth })
                  },
                  [
                    vue.renderSlot(_ctx.$slots, "left", {}, () => [
                      $props.leftIcon.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                        key: 0,
                        class: "uni-navbar__content_view"
                      }, [
                        vue.createVNode(_component_uni_icons, {
                          color: $options.themeColor,
                          type: $props.leftIcon,
                          size: "20"
                        }, null, 8, ["color", "type"])
                      ])) : vue.createCommentVNode("v-if", true),
                      $props.leftText.length ? (vue.openBlock(), vue.createElementBlock(
                        "view",
                        {
                          key: 1,
                          class: vue.normalizeClass([{ "uni-navbar-btn-icon-left": !$props.leftIcon.length > 0 }, "uni-navbar-btn-text"])
                        },
                        [
                          vue.createElementVNode(
                            "text",
                            {
                              style: vue.normalizeStyle({ color: $options.themeColor, fontSize: "12px" })
                            },
                            vue.toDisplayString($props.leftText),
                            5
                            /* TEXT, STYLE */
                          )
                        ],
                        2
                        /* CLASS */
                      )) : vue.createCommentVNode("v-if", true)
                    ], true)
                  ],
                  4
                  /* STYLE */
                ),
                vue.createElementVNode("view", {
                  class: "uni-navbar__header-container",
                  onClick: _cache[1] || (_cache[1] = (...args) => $options.onClickTitle && $options.onClickTitle(...args))
                }, [
                  vue.renderSlot(_ctx.$slots, "default", {}, () => [
                    $props.title.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 0,
                      class: "uni-navbar__header-container-inner"
                    }, [
                      vue.createElementVNode(
                        "text",
                        {
                          class: "uni-nav-bar-text uni-ellipsis-1",
                          style: vue.normalizeStyle({ color: $options.themeColor })
                        },
                        vue.toDisplayString($props.title),
                        5
                        /* TEXT, STYLE */
                      )
                    ])) : vue.createCommentVNode("v-if", true)
                  ], true)
                ]),
                vue.createElementVNode(
                  "view",
                  {
                    onClick: _cache[2] || (_cache[2] = (...args) => $options.onClickRight && $options.onClickRight(...args)),
                    class: "uni-navbar__header-btns uni-navbar__header-btns-right",
                    style: vue.normalizeStyle({ width: $options.rightIconWidth })
                  },
                  [
                    vue.renderSlot(_ctx.$slots, "right", {}, () => [
                      $props.rightIcon.length ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, [
                        vue.createVNode(_component_uni_icons, {
                          color: $options.themeColor,
                          type: $props.rightIcon,
                          size: "22"
                        }, null, 8, ["color", "type"])
                      ])) : vue.createCommentVNode("v-if", true),
                      $props.rightText.length && !$props.rightIcon.length ? (vue.openBlock(), vue.createElementBlock("view", {
                        key: 1,
                        class: "uni-navbar-btn-text"
                      }, [
                        vue.createElementVNode(
                          "text",
                          {
                            class: "uni-nav-bar-right-text",
                            style: vue.normalizeStyle({ color: $options.themeColor })
                          },
                          vue.toDisplayString($props.rightText),
                          5
                          /* TEXT, STYLE */
                        )
                      ])) : vue.createCommentVNode("v-if", true)
                    ], true)
                  ],
                  4
                  /* STYLE */
                )
              ],
              4
              /* STYLE */
            )
          ],
          6
          /* CLASS, STYLE */
        ),
        $props.fixed ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "uni-navbar__placeholder"
        }, [
          $props.statusBar ? (vue.openBlock(), vue.createBlock(_component_status_bar, { key: 0 })) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode(
            "view",
            {
              class: "uni-navbar__placeholder-view",
              style: vue.normalizeStyle({ height: $options.navbarHeight })
            },
            null,
            4
            /* STYLE */
          )
        ])) : vue.createCommentVNode("v-if", true)
      ],
      2
      /* CLASS */
    );
  }
  const __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["render", _sfc_render$7], ["__scopeId", "data-v-26544265"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue"]]);
  const rejectOrder = (params) => request({
    url: `/orders-dispatch/worker/reject`,
    method: "post",
    params
  });
  const getDispatchOrderInfo = (params) => request({
    url: `/orders-dispatch/worker/${params}`,
    method: "get"
  });
  const getRobOrder = (params) => request({
    url: params ? `/orders-seize/worker?${typeof params === "number" ? "serveDistance" : "serveTypeId"}=${params}` : "/orders-seize/worker",
    method: "get"
  });
  const getHomeFilter = () => request({
    url: `/foundations/operation/serve-type/queryServeTypeListByActiveStatus`,
    method: "get"
  });
  const robOrder = (params) => request({
    url: `/orders-seize/worker`,
    method: "post",
    params
  });
  const getOrder = (params, id) => request({
    url: params ? `/orders-manager/worker/queryForList?serveStatus=${params}&sortBy=` + (id ? id : "") : `/orders-manager/worker/queryForList?sortBy=${id ? id : ""}`,
    method: "get"
  });
  const deleteOrder = (params) => request({
    url: `/orders-manager/worker/serve/${params}`,
    method: "delete"
  });
  const getOrderInfo = (params) => request({
    url: `/orders-manager/worker/${params}`,
    method: "get"
  });
  const cancelOrder = (params) => request({
    url: `/orders-manager/worker/cancel`,
    method: "post",
    params
  });
  const startServe = (params) => request({
    url: `/orders-manager/worker/start`,
    method: "post",
    params
  });
  const finishServe = (params) => request({
    url: `/orders-manager/worker/finish`,
    method: "post",
    params
  });
  const getOrderStatusNum = (params) => request({
    url: `/orders-manager/worker/status/num`,
    method: "get"
  });
  const getHistoryOrder = (params) => request({
    url: `/orders-history/worker/orders/list`,
    method: "get",
    params
  });
  const getHistoryOrderInfo = (params) => request({
    url: `/orders-history/worker/orders/${params}`,
    method: "get"
  });
  const getEvaluateList = (params) => request({
    url: `/customer/worker/evaluation/pageByCurrentUserAndScoreLevel`,
    method: "get",
    params
  });
  const _sfc_main$C = {
    __name: "index",
    setup(__props) {
      const store2 = useStore();
      const users = store2.state.user;
      const workerCityCode = vue.ref();
      const workerCityName = vue.ref();
      const location2 = vue.ref("");
      const cityCode = vue.ref("");
      const alertDialog = vue.ref(null);
      onShow(() => {
        getSettingInfo().then((res) => {
          workerCityCode.value = res.data.cityCode;
          workerCityName.value = res.data.cityName;
          {
            uni.getLocation({
              type: "gcj02",
              geocode: true,
              success: function(res2) {
                location2.value = res2.address.city;
                cityCode.value = res2.address.cityCode;
                if (!users.first) {
                  return;
                }
                if (res2.address.cityCode !== workerCityCode.value) {
                  alertDialog.value.open();
                  store2.commit("setFirst", false);
                }
              },
              fail: (err) => {
                location2.value = "获取失败";
              }
            });
          }
        });
      });
      const handleToSet = () => {
        alertDialog.value.close();
        uni.navigateTo({
          url: "/pages/serviceRange/index"
        });
      };
      const handleNo = () => {
        alertDialog.value.close();
      };
      const handleClick = () => {
        alertDialog.value.open();
      };
      const baseSetting = vue.reactive([
        {
          label: "服务技能",
          url: "../../static/new/btn_top_fwjn@2x.png",
          path: "/pages/serviceSkill/index"
        },
        {
          label: "接单设置",
          url: "../../static/new/btn_top_jdsz@2x.png",
          path: "/pages/getOrder/index"
        },
        {
          label: "服务范围",
          url: "../../static/new/btn_top_fwfw@2x.png",
          path: "/pages/serviceRange/index"
        }
        // {
        //   label: '城市设置',
        //   url: '../../static/new/btn_top_fwjn@2x.png',
        //   path: '',
        // },
      ]);
      const handleLink = (val) => {
        uni.navigateTo({
          url: val
        });
      };
      return (_ctx, _cache) => {
        const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_0$3);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createCommentVNode(" 公用nav "),
            vue.createElementVNode("view", { class: "navBox" }, [
              vue.createElementVNode("view", { class: "baseSetting" }, [
                vue.createElementVNode("view", { class: "location" }, [
                  vue.createElementVNode("image", {
                    src: "/static/new/icon_weizhi4@2x.png",
                    onClick: handleClick
                  }),
                  vue.createTextVNode(
                    " " + vue.toDisplayString(location2.value) + " ",
                    1
                    /* TEXT */
                  ),
                  vue.createCommentVNode(" {{ '北京市' }} ")
                ]),
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(baseSetting, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: "item",
                      key: index,
                      onClick: ($event) => handleLink(item.path)
                    }, [
                      vue.createElementVNode("image", {
                        src: item.url,
                        class: "itemImg"
                      }, null, 8, ["src"]),
                      vue.createElementVNode(
                        "view",
                        { class: "itemLabel" },
                        vue.toDisplayString(item.label),
                        1
                        /* TEXT */
                      )
                    ], 8, ["onClick"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              vue.createElementVNode("view", { class: "bg" }),
              vue.createCommentVNode(" 提示窗示例 "),
              vue.createVNode(
                _component_uni_popup,
                {
                  ref_key: "alertDialog",
                  ref: alertDialog,
                  type: "dialog",
                  "is-mask-click": false
                },
                {
                  default: vue.withCtx(() => [
                    vue.createElementVNode("view", { class: "dialog" }, [
                      vue.createElementVNode(
                        "view",
                        { class: "content" },
                        "当前定位显示你在“" + vue.toDisplayString(location2.value) + "”，是否需要切换城市？",
                        1
                        /* TEXT */
                      ),
                      vue.createElementVNode("view", { class: "footer" }, [
                        vue.createElementVNode("view", {
                          class: "cancel",
                          onClick: handleNo
                        }, "否"),
                        vue.createElementVNode("view", {
                          class: "toSet",
                          onClick: handleToSet
                        }, "去切换")
                      ])
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                },
                512
                /* NEED_PATCH */
              )
            ]),
            vue.createCommentVNode(" end ")
          ],
          2112
          /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
        );
      };
    }
  };
  const UniNav$1 = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["__scopeId", "data-v-5f714409"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/components/uni-home-nav/index.vue"]]);
  const _sfc_main$B = {
    __name: "index",
    props: {
      pagePath: {
        type: String,
        default: ""
      }
    },
    setup(__props) {
      const store2 = useStore();
      let tabbar = vue.ref([
        {
          pagePath: "/pages/index/index",
          iconPath: "static/home.png",
          selectedIconPath: "static/homeActive.png",
          text: "首页"
        },
        {
          pagePath: "/pages/pickup/index",
          iconPath: "static/collect.png",
          selectedIconPath: "static/collectActive.png",
          text: "订单"
        },
        {
          pagePath: "/pages/delivery/index",
          iconPath: "static/delivery.png",
          selectedIconPath: "static/deliveryActive.png",
          text: "消息"
        },
        {
          pagePath: "/pages/my/index",
          iconPath: "static/user.png",
          selectedIconPath: "static/userActive.png",
          text: "我的"
        }
      ]);
      const changeTab = (item, index) => {
        store2.commit("setFootStatus", index);
        if (item.text !== "消息") {
          uni.redirectTo({
            url: item.pagePath
          });
        } else {
          uni.showToast({
            title: "当前功能非教学版本！",
            duration: 1e3,
            icon: "none"
          });
        }
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createCommentVNode(" 公用底部 "),
            vue.createElementVNode("view", { class: "footBox" }, [
              vue.createElementVNode("view", { class: "uni-tabbar" }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(vue.unref(tabbar), (item, index) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: vue.normalizeClass(["tabbar-item", vue.unref(store2).state.footStatus === index ? "active" : ""]),
                      key: index,
                      onClick: ($event) => changeTab(item, index)
                    }, [
                      vue.createElementVNode("view", { class: "uni-tabbar__bd" }, [
                        vue.createElementVNode("view", { class: "uni-tabbar__icon" }, [
                          vue.unref(store2).state.footStatus === index ? (vue.openBlock(), vue.createElementBlock("img", {
                            key: 0,
                            class: "item-img",
                            src: item.selectedIconPath
                          }, null, 8, ["src"])) : (vue.openBlock(), vue.createElementBlock("img", {
                            key: 1,
                            class: "item-img",
                            src: item.iconPath
                          }, null, 8, ["src"]))
                        ])
                      ]),
                      item.text !== "" ? (vue.openBlock(), vue.createElementBlock(
                        "view",
                        {
                          key: 0,
                          class: "uni-tabbar__label"
                        },
                        vue.toDisplayString(item.text),
                        1
                        /* TEXT */
                      )) : vue.createCommentVNode("v-if", true)
                    ], 10, ["onClick"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ]),
            vue.createCommentVNode(" end ")
          ],
          2112
          /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
        );
      };
    }
  };
  const UniFooter = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/components/uni-footer/index.vue"]]);
  const _sfc_main$A = {
    __name: "index",
    props: {
      canPickUp: {
        type: Boolean,
        default: true
      }
    },
    setup(__props, { emit }) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "empty" }, [
          vue.createElementVNode("view", { class: "image" }),
          vue.createCommentVNode(' <image class="aimage" src="../../static/new/empty.png"></image> '),
          __props.canPickUp ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "content"
          }, vue.toDisplayString("暂无相关内容哦～"))) : (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "content"
          }, " 当前未开启接单设置，无法进行抢单哦～ "))
        ]);
      };
    }
  };
  const Empty = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["__scopeId", "data-v-c00e6953"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/components/empty/index.vue"]]);
  const _sfc_main$z = {
    __name: "homeFilter",
    props: {
      fixTop: {
        type: Boolean,
        default: false
      },
      homeFilterList: {
        type: Array,
        default: () => []
      }
    },
    emits: ["handleCanScroll", "getList", "tabChange"],
    setup(__props, { emit }) {
      const props = __props;
      const type = vue.ref("");
      const status = vue.ref(0);
      const isOpen = vue.ref(false);
      let serviceType = vue.reactive({
        data: []
      });
      const activeType = vue.ref("");
      const distanceActive = vue.ref("");
      const handleClick = (val) => {
        status.value = val;
        emit("tabChange", status.value, activeType.value);
      };
      const handleOpen = (val) => {
        isOpen.value = !isOpen.value;
        type.value = val;
        if (val === "distance") {
          serviceType.data = [
            {
              id: "",
              name: "全部"
            },
            {
              id: 3,
              name: "3公里内"
            },
            {
              id: 5,
              name: "5公里内"
            },
            {
              id: 10,
              name: "10公里内"
            },
            {
              id: 20,
              name: "20公里内"
            },
            {
              id: 50,
              name: "50公里内"
            }
          ];
        } else {
          serviceType.data = [{ id: "", name: "全部" }].concat(props.homeFilterList);
        }
        emit("handleCanScroll", isOpen.value);
      };
      const handleReset = () => {
        activeType.value = "";
        distanceActive.value = "";
        isOpen.value = false;
        emit("handleCanScroll", isOpen.value);
        emit("tabChange", status.value, activeType.value);
      };
      const handleService = (val) => {
        if (type.value === "distance") {
          distanceActive.value = val;
          activeType.value = "";
        } else {
          activeType.value = val;
          distanceActive.value = "";
        }
      };
      const handleSubmit = () => {
        isOpen.value = false;
        emit("handleCanScroll", isOpen.value);
        emit(
          "tabChange",
          status.value,
          type.value === "distance" ? distanceActive.value : activeType.value
        );
      };
      vue.watch(
        () => props.homeFilterList,
        () => {
          serviceType.data = [{ id: "", name: "全部" }].concat(props.homeFilterList);
        }
      );
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          "view",
          {
            class: vue.normalizeClass(["homeFilter", __props.fixTop ? "fixTop" : ""])
          },
          [
            vue.createElementVNode("view", { class: "leftBox" }, [
              vue.createElementVNode("view", {
                class: "item",
                onClick: _cache[0] || (_cache[0] = ($event) => handleClick(0))
              }, "抢单大厅")
            ]),
            !status.value ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "rightBox"
            }, [
              vue.createElementVNode("view", { class: "distance" }, [
                vue.createElementVNode("view", { class: "label" }, "距离筛选"),
                vue.createElementVNode(
                  "view",
                  {
                    class: vue.normalizeClass(["icon", isOpen.value && type.value === "distance" ? "up" : "down"]),
                    onClick: _cache[1] || (_cache[1] = ($event) => handleOpen("distance"))
                  },
                  null,
                  2
                  /* CLASS */
                )
              ]),
              vue.createElementVNode("view", { class: "serviceType" }, [
                vue.createElementVNode("view", { class: "label" }, "服务类型"),
                vue.createElementVNode(
                  "view",
                  {
                    class: vue.normalizeClass(["icon", isOpen.value && type.value === "serviceType" ? "up" : "down"]),
                    onClick: _cache[2] || (_cache[2] = ($event) => handleOpen("serviceType"))
                  },
                  null,
                  2
                  /* CLASS */
                )
              ])
            ])) : vue.createCommentVNode("v-if", true),
            vue.withDirectives(vue.createElementVNode(
              "view",
              { class: "filterPopup" },
              [
                vue.createElementVNode("view", { class: "service" }, [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList(vue.unref(serviceType).data, (item, index) => {
                      return vue.openBlock(), vue.createElementBlock("view", {
                        class: vue.normalizeClass([
                          "serviceItem",
                          (type.value === "distance" ? distanceActive.value : activeType.value) === item.id ? "active" : ""
                        ]),
                        key: index,
                        onClick: ($event) => handleService(item.id)
                      }, vue.toDisplayString(item.name), 11, ["onClick"]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ]),
                vue.createElementVNode("view", { class: "footer" }, [
                  vue.createElementVNode("view", {
                    class: "btn-gray btn",
                    onClick: handleReset
                  }, "重置"),
                  vue.createElementVNode("view", {
                    class: "btn-red btn",
                    onClick: handleSubmit
                  }, "确定")
                ])
              ],
              512
              /* NEED_PATCH */
            ), [
              [vue.vShow, isOpen.value]
            ])
          ],
          2
          /* CLASS */
        );
      };
    }
  };
  const HomeFilter = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["__scopeId", "data-v-538110be"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/pages/index/components/homeFilter.vue"]]);
  const _sfc_main$y = {
    __name: "homeList",
    props: {
      data: {
        type: Array,
        default: () => []
      }
    },
    emits: ["refresh"],
    setup(__props, { emit }) {
      const props = __props;
      const isRob = vue.ref(true);
      let list = vue.reactive({
        data: []
      });
      const alertDialog = vue.ref(null);
      const msg = vue.ref("");
      const handleClose = () => {
        alertDialog.value.close();
        emit("refresh");
      };
      const handleTime = (val) => {
        return val ? val.replace(/:\d{2}$/, "") : "";
      };
      const handleRob = (id) => {
        robOrder({
          id
        }).then((res) => {
          if (res.code === 200) {
            isRob.value = true;
          } else {
            isRob.value = false;
          }
          alertDialog.value.open();
        }).catch((err) => {
          if (err.code === 608) {
            isRob.value = false;
            msg.value = err.msg;
            alertDialog.value.open();
          } else {
            uni.showToast({
              title: err.msg || "接单失败!",
              duration: 1e3,
              icon: "none"
            });
          }
        });
      };
      vue.watchEffect(() => {
        list.data = props.data;
      });
      return (_ctx, _cache) => {
        const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_0$3);
        return vue.openBlock(), vue.createElementBlock("view", { class: "homeList" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(vue.unref(list).data, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "card",
                key: index
              }, [
                vue.createElementVNode("view", { class: "card-content" }, [
                  vue.createElementVNode("image", {
                    class: "leftCardContent",
                    src: item.serveItemImg
                  }, null, 8, ["src"]),
                  vue.createElementVNode("view", { class: "rightCardContent" }, [
                    vue.createElementVNode(
                      "view",
                      { class: "title" },
                      vue.toDisplayString(item.serveItemName),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode("view", { class: "serviceTime" }, [
                      vue.createElementVNode("text", null, "预约时间"),
                      vue.createElementVNode(
                        "text",
                        null,
                        vue.toDisplayString(handleTime(item.serveStartTime)),
                        1
                        /* TEXT */
                      )
                    ])
                  ])
                ]),
                vue.createElementVNode("view", { class: "serviceAddress" }, [
                  vue.createCommentVNode(" <view>服务地址</view> "),
                  vue.createElementVNode("view", { class: "address" }, [
                    vue.createElementVNode(
                      "view",
                      { class: "addressContent" },
                      vue.toDisplayString(item.serveAddress),
                      1
                      /* TEXT */
                    )
                  ])
                ]),
                vue.createElementVNode("view", { class: "cardFooter" }, [
                  vue.createElementVNode("view", { class: "price" }, [
                    vue.createElementVNode("text", { class: "price-label" }, "服务费用"),
                    vue.createTextVNode(
                      " ￥" + vue.toDisplayString((Number(item.ordersAmount) * 0.997 * 0.3).toFixed(2)),
                      1
                      /* TEXT */
                    )
                  ]),
                  vue.createElementVNode("view", {
                    class: "robBtn btn-red",
                    onClick: vue.withModifiers(($event) => handleRob(item.id), ["stop"])
                  }, "立即抢单", 8, ["onClick"])
                ])
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          )),
          vue.createElementVNode("view", { class: "footer" }, "- 已 经 到 底 了 -"),
          vue.createCommentVNode(" 提示窗示例 "),
          vue.createVNode(
            _component_uni_popup,
            {
              ref_key: "alertDialog",
              ref: alertDialog,
              type: "dialog",
              "is-mask-click": false
            },
            {
              default: vue.withCtx(() => [
                vue.createElementVNode("view", { class: "dialog" }, [
                  vue.createElementVNode(
                    "view",
                    {
                      class: vue.normalizeClass(["img", isRob.value ? "success" : "fail"])
                    },
                    null,
                    2
                    /* CLASS */
                  ),
                  vue.createElementVNode(
                    "view",
                    {
                      class: vue.normalizeClass(["content", isRob.value ? "title" : "content"])
                    },
                    [
                      !isRob.value ? (vue.openBlock(), vue.createElementBlock("view", {
                        key: 0,
                        class: "title"
                      }, "抢单失败")) : vue.createCommentVNode("v-if", true),
                      vue.createTextVNode(
                        " " + vue.toDisplayString(isRob.value ? "抢单成功" : msg.value ? msg.value : "很遗憾，抢单失败"),
                        1
                        /* TEXT */
                      )
                    ],
                    2
                    /* CLASS */
                  ),
                  vue.createElementVNode("view", {
                    class: "dialogFooter",
                    onClick: handleClose
                  }, "确定")
                ])
              ]),
              _: 1
              /* STABLE */
            },
            512
            /* NEED_PATCH */
          )
        ]);
      };
    }
  };
  const HomeList$3 = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["__scopeId", "data-v-5d962223"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/pages/index/components/homeList.vue"]]);
  const _sfc_main$x = {
    __name: "index",
    setup(__props) {
      const fixTop = vue.ref(false);
      const icCanScroll = vue.ref(true);
      const serveId = vue.ref("");
      const store2 = useStore();
      const users = store2.state.user;
      let homeFilterList = vue.reactive({
        data: []
      });
      let homeList = vue.reactive({
        data: []
      });
      vue.onMounted(() => {
        getHomeFilterList();
      });
      onShow(() => {
        getList();
        getSetting();
      });
      onPullDownRefresh(() => {
        getList();
        setTimeout(function() {
          uni.stopPullDownRefresh();
        }, 1e3);
      });
      const tabChange = (val, id) => {
        serveId.value = id;
        getList();
      };
      const getSetting = () => {
        getUserSetting().then((res) => {
          if (res.code == 200) {
            store2.commit("user/setKeyCanPickUp", res.data.canPickUp);
          }
        }).catch((err) => {
          uni.showToast({
            title: err.msg || "接口调用失败",
            duration: 1500,
            icon: "none"
          });
        });
      };
      const getList = () => {
        getRobOrderList(serveId.value);
      };
      const getRobOrderList = (params) => {
        getRobOrder(params).then((res) => {
          homeList.data = res.data.ordersSeizes || [];
        });
      };
      const getHomeFilterList = () => {
        getHomeFilter().then((res) => {
          homeFilterList.data = res.data;
        });
      };
      const handleCanScroll = (val) => {
        icCanScroll.value = !val;
      };
      const handleScroll = (e2) => {
        if (e2.detail.scrollTop > 188) {
          fixTop.value = true;
        } else {
          fixTop.value = false;
        }
      };
      const goBack = () => {
        uni.redirectTo({
          url: "/pages/index/index"
        });
      };
      return (_ctx, _cache) => {
        const _component_uni_nav_bar = resolveEasycom(vue.resolveDynamicComponent("uni-nav-bar"), __easycom_0$2);
        return vue.openBlock(), vue.createElementBlock("view", { class: "home" }, [
          vue.createCommentVNode(" 手机状态栏 "),
          vue.createVNode(_component_uni_nav_bar, {
            statusBar: "true",
            backgroundColor: "#F74347"
          }),
          vue.createElementVNode("scroll-view", {
            "scroll-y": icCanScroll.value,
            class: "scrollList",
            onScroll: handleScroll
          }, [
            vue.createCommentVNode(" 顶部基础配置和背景图 "),
            vue.createElementVNode("view", { class: "navFrame" }, [
              vue.createCommentVNode(" nav "),
              vue.createVNode(UniNav$1, { onGoBack: goBack })
            ]),
            vue.createCommentVNode(" 首页筛选 "),
            vue.createVNode(vue.unref(HomeFilter), {
              onHandleCanScroll: handleCanScroll,
              homeFilterList: vue.unref(homeFilterList).data,
              onGetList: getList,
              onTabChange: tabChange,
              fixTop: fixTop.value
            }, null, 8, ["homeFilterList", "fixTop"]),
            vue.createCommentVNode(" 吸顶筛选 "),
            fixTop.value ? (vue.openBlock(), vue.createBlock(vue.unref(HomeFilter), {
              key: 0,
              homeFilterList: vue.unref(homeFilterList).data,
              onGetList: getList,
              onTabChange: tabChange
            }, null, 8, ["homeFilterList"])) : vue.createCommentVNode("v-if", true),
            vue.createCommentVNode(" end "),
            vue.unref(homeList).data.length ? (vue.openBlock(), vue.createBlock(vue.unref(HomeList$3), {
              key: 1,
              data: vue.unref(homeList).data,
              onRefresh: getList
            }, null, 8, ["data"])) : (vue.openBlock(), vue.createBlock(Empty, {
              key: 2,
              canPickUp: vue.unref(users).canPickUp
            }, null, 8, ["canPickUp"]))
          ], 40, ["scroll-y"]),
          vue.createCommentVNode(" footer "),
          vue.createVNode(UniFooter, { pagePath: "pages/index/index" }),
          vue.createCommentVNode(" end ")
        ]);
      };
    }
  };
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["__scopeId", "data-v-1cf27b2a"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/pages/index/index.vue"]]);
  const _sfc_main$w = {
    __name: "index",
    props: {
      title: {
        type: String,
        default: ""
      },
      rithtText: {
        type: String,
        default: ""
      },
      isLeftText: {
        type: Boolean
      }
    },
    setup(__props, { emit }) {
      const store2 = useStore();
      const users = store2.state.user;
      users.taskStatus;
      const goBack = () => {
        emit("goBack");
      };
      const handleAll = () => {
        emit("handleAll");
      };
      return (_ctx, _cache) => {
        const _component_uni_nav_bar = resolveEasycom(vue.resolveDynamicComponent("uni-nav-bar"), __easycom_0$2);
        return __props.isLeftText ? (vue.openBlock(), vue.createBlock(_component_uni_nav_bar, {
          key: 0,
          title: __props.title,
          statusBar: "true",
          fixed: "true"
        }, null, 8, ["title"])) : (vue.openBlock(), vue.createBlock(_component_uni_nav_bar, {
          key: 1,
          onClickLeft: goBack,
          "left-icon": "back",
          leftIcon: "arrowleft",
          title: __props.title,
          statusBar: "true",
          fixed: "true",
          "right-text": __props.rithtText,
          onClickRight: handleAll
        }, null, 8, ["title", "right-text"]));
      };
    }
  };
  const UniNav = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["__scopeId", "data-v-6e45a3f8"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/components/uni-nav/index.vue"]]);
  const _sfc_main$v = {
    __name: "index",
    setup(__props) {
      const activeId = vue.ref(null);
      const activeIndex = vue.ref(0);
      const serviceSkill = vue.reactive({
        data: []
      });
      const rightItem = vue.reactive({
        data: []
      });
      const status = vue.ref("read");
      vue.onMounted(() => {
        getServiceSkillAllFunc();
      });
      const getServiceSkillAllFunc = () => {
        getServiceSkillAll().then((res) => {
          if (res.code == 200) {
            serviceSkill.data = res.data;
            activeId.value = res.data[0].serveTypeId;
            rightItem.data = serviceSkill.data[0].serveSkillItemResDTOList;
          }
        }).catch((err) => {
          uni.showToast({
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
      };
      const handleSubmit = () => {
        const selectedList = [];
        serviceSkill.data.forEach((item) => {
          item.serveSkillItemResDTOList.forEach((item1) => {
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
        updateServiceSkill(selectedList).then((res) => {
          if (res.code === 200) {
            status.value = "read";
            getServiceSkillAllFunc();
          }
        }).catch((err) => {
          uni.showToast({
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
      };
      const tabChange = (item, index) => {
        activeId.value = item.serveTypeId;
        activeIndex.value = index;
        rightItem.data = serviceSkill.data[activeIndex.value].serveSkillItemResDTOList;
      };
      const goBack = () => {
        uni.navigateBack();
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "serviceSkill" }, [
          vue.createCommentVNode(" nav "),
          vue.createVNode(UniNav, {
            title: "选择服务技能",
            onGoBack: goBack,
            rithtText: status.value === "read" ? "编辑" : "",
            onHandleAll: handleEdit
          }, null, 8, ["rithtText"]),
          vue.createElementVNode("view", { class: "servicePage" }, [
            vue.createElementVNode("view", { class: "left" }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(serviceSkill.data, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    key: index,
                    class: vue.normalizeClass(activeId.value === item.serveTypeId ? "active tagBox" : "tagBox"),
                    onClick: ($event) => tabChange(item, index)
                  }, [
                    vue.createElementVNode("view", { class: "tag" }, [
                      vue.createTextVNode(
                        vue.toDisplayString(item.serveTypeName) + " ",
                        1
                        /* TEXT */
                      ),
                      item.count ? (vue.openBlock(), vue.createElementBlock(
                        "text",
                        {
                          key: 0,
                          class: "selectNum"
                        },
                        vue.toDisplayString(item.count),
                        1
                        /* TEXT */
                      )) : vue.createCommentVNode("v-if", true)
                    ])
                  ], 10, ["onClick"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            vue.createCommentVNode(" 右边内容区域 "),
            vue.createElementVNode("view", { class: "serviceBox right" }, [
              vue.createElementVNode("view", null, [
                vue.createElementVNode("view", { class: "clean" }, [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList(rightItem.data, (item, index) => {
                      return vue.openBlock(), vue.createElementBlock("view", {
                        class: vue.normalizeClass(["card", item.isSelected ? "active" : ""]),
                        key: index,
                        onClick: ($event) => handleSelect(item)
                      }, vue.toDisplayString(item.serveItemName), 11, ["onClick"]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])
              ])
            ])
          ]),
          vue.withDirectives(vue.createElementVNode(
            "view",
            { class: "footer" },
            [
              vue.createElementVNode("view", {
                class: "btn-gray btn",
                onClick: handleCancel
              }, "取消"),
              vue.createElementVNode("view", {
                class: "btn-red btn",
                onClick: handleSubmit
              }, "保存")
            ],
            512
            /* NEED_PATCH */
          ), [
            [vue.vShow, status.value === "edit"]
          ])
        ]);
      };
    }
  };
  const PagesServiceSkillIndex = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["__scopeId", "data-v-6ade5948"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/pages/serviceSkill/index.vue"]]);
  const _sfc_main$u = {
    __name: "index",
    setup(__props) {
      const canPickUp = vue.ref(false);
      onShow(() => {
        getSetting();
      });
      const handlePickUpStatus = () => {
        setPickUpStatus({
          canPickUp: canPickUp.value ? 0 : 1
        }).then((res) => {
          if (res.code == 200) {
            getSetting();
          }
        }).catch((err) => {
          uni.showToast({
            title: err.msg || "接口调用失败",
            duration: 1500,
            icon: "none"
          });
        });
      };
      const getSetting = () => {
        getUserSetting().then((res) => {
          if (res.code == 200) {
            canPickUp.value = res.data.canPickUp;
          }
        }).catch((err) => {
          uni.showToast({
            title: err.msg || "接口调用失败",
            duration: 1500,
            icon: "none"
          });
        });
      };
      const goBack = () => {
        uni.navigateBack();
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "serviceSkill" }, [
          vue.createCommentVNode(" nav "),
          vue.createVNode(UniNav, {
            title: "接单设置",
            onGoBack: goBack
          }),
          vue.createElementVNode("view", { class: "switchBox" }, [
            vue.createElementVNode("text", null, "开启接单"),
            vue.createElementVNode("switch", {
              color: "#F74347",
              style: { "transform": "scale(0.7)" },
              onChange: handlePickUpStatus,
              checked: canPickUp.value
            }, null, 40, ["checked"])
          ])
        ]);
      };
    }
  };
  const PagesGetOrderIndex = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["__scopeId", "data-v-2eafd06a"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/pages/getOrder/index.vue"]]);
  const _sfc_main$t = {
    __name: "index",
    setup(__props) {
      const cityName = vue.ref("请选择");
      const address = vue.ref("请选择");
      const store2 = useStore();
      const users = store2.state.user;
      const location2 = vue.reactive({
        latitude: "",
        longitude: ""
      });
      const markers = vue.reactive({
        data: {
          id: 1,
          latitude: 0,
          longitude: 0,
          iconPath: "/static/new/img_weizhi@2x.png",
          width: 60,
          height: 60
        }
      });
      const handleSelectCity = () => {
        uni.navigateTo({
          url: "/pages/city/index?address=" + address.value
        });
      };
      const handleChooseRange = () => {
        uni.chooseLocation({
          latitude: location2.latitude,
          longitude: location2.longitude,
          success: function(res) {
            address.value = res.name;
            location2.latitude = res.latitude;
            location2.longitude = res.longitude;
            markers.data.latitude = res.latitude;
            markers.data.longitude = res.longitude;
            store2.commit("user/setLocation", location2);
            store2.commit("user/setAddress", address.value);
          },
          fail: function(err) {
            formatAppLog("log", "at pages/serviceRange/index.vue:95", err, "选择具体服务范围失败");
          }
        });
      };
      const handleSubmit = () => {
        if (!users.cityCode) {
          return uni.showToast({
            title: "请选择服务城市",
            duration: 1500,
            icon: "none"
          });
        } else if (!users.address || users.address === "请选择") {
          return uni.showToast({
            title: "请设置意向接单范围",
            duration: 1500,
            icon: "none"
          });
        }
        uni.showLoading({
          title: "loading",
          mask: true
        });
        setServiceSetting({
          cityCode: users.cityCode,
          location: String(users.location.longitude) + "," + String(users.location.latitude),
          intentionScope: users.address,
          cityName: users.cityName
        }).then(() => {
          uni.showToast({
            title: "保存成功",
            duration: 1500,
            icon: "none",
            success: () => {
              uni.hideLoading();
              goBack();
            }
          });
        });
      };
      onShow(() => {
        getSettingInfo().then((res) => {
          formatAppLog("log", "at pages/serviceRange/index.vue:140", "app", '"app"');
          if (!res.data.cityCode) {
            {
              uni.getLocation({
                type: "gcj02",
                geocode: true,
                success: function(res2) {
                  location2.latitude = res2.latitude;
                  location2.longitude = res2.longitude;
                  markers.data.latitude = res2.latitude;
                  markers.data.longitude = res2.longitude;
                },
                fail: (err) => {
                  location2.latitude = 39.909187;
                  location2.longitude = 116.397455;
                  markers.data.latitude = 39.909187;
                  markers.data.longitude = 116.397455;
                }
              });
              cityName.value = users.cityName;
            }
          } else {
            store2.commit("user/setCityCode", users.cityCode || res.data.cityCode);
            store2.commit(
              "user/setCityName",
              users.cityName === "请选择" ? res.data.cityName : users.cityName
            );
            cityName.value = users.cityName === "请选择" ? res.data.cityName : users.cityName;
            address.value = users.address || res.data.intentionScope;
            address.value = address.value === "请选择" ? res.data.intentionScope : address.value;
            location2.latitude = res.data.location.split(",")[1];
            location2.longitude = res.data.location.split(",")[0];
            markers.data.latitude = res.data.location.split(",")[1];
            markers.data.longitude = res.data.location.split(",")[0];
            store2.commit("user/setLocation", location2);
            store2.commit("user/setAddress", address.value);
          }
        }).catch((err) => {
          uni.showToast({
            title: err.msg || "接口调用失败",
            duration: 1500,
            icon: "none"
          });
        });
      });
      vue.onMounted(() => {
      });
      const goBack = () => {
        uni.navigateBack();
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "serviceRange" }, [
          vue.createCommentVNode(" nav "),
          vue.createVNode(UniNav, {
            title: "请选择工作地点",
            onGoBack: goBack
          }),
          vue.createElementVNode("map", {
            class: "map",
            markers: [markers.data],
            latitude: location2.latitude,
            longitude: location2.longitude
          }, null, 8, ["markers", "latitude", "longitude"]),
          vue.createElementVNode("cover-view", { class: "address" }, [
            vue.createElementVNode("cover-view", { class: "city" }, [
              vue.createElementVNode("cover-view", { class: "label" }, "服务城市"),
              vue.createElementVNode("cover-view", { class: "content" }, [
                vue.createElementVNode(
                  "cover-view",
                  {
                    class: "cityName",
                    onClick: handleSelectCity
                  },
                  vue.toDisplayString(cityName.value),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("cover-image", {
                  onClick: handleSelectCity,
                  class: "icon",
                  src: "/static/new/icon_more@2x.png"
                })
              ])
            ]),
            vue.createElementVNode("cover-view", { class: "range" }, [
              vue.createElementVNode("cover-view", { class: "label" }, "意向接单范围"),
              vue.createElementVNode("cover-view", { class: "content" }, [
                vue.createElementVNode(
                  "cover-view",
                  {
                    class: "rangeName",
                    onClick: handleChooseRange
                  },
                  vue.toDisplayString(address.value),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("cover-image", {
                  onClick: handleChooseRange,
                  class: "icon",
                  src: "/static/new/icon_more@2x.png"
                })
              ])
            ]),
            vue.createElementVNode("cover-view", { class: "btn-red" }, [
              vue.createElementVNode("cover-view", {
                class: "text",
                onClick: handleSubmit
              }, "保存")
            ])
          ])
        ]);
      };
    }
  };
  const PagesServiceRangeIndex = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["__scopeId", "data-v-a953d043"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/pages/serviceRange/index.vue"]]);
  const Citys = {
    list: [
      {
        "cities": [
          {
            "cityCode": "0837",
            "cityName": "阿坝藏族羌族自治州"
          },
          {
            "cityCode": "0997",
            "cityName": "阿克苏地区"
          },
          {
            "cityCode": "1997",
            "cityName": "阿拉尔市"
          },
          {
            "cityCode": "0483",
            "cityName": "阿拉善盟"
          },
          {
            "cityCode": "0906",
            "cityName": "阿勒泰地区"
          },
          {
            "cityCode": "0897",
            "cityName": "阿里地区"
          },
          {
            "cityCode": "0412",
            "cityName": "鞍山市"
          },
          {
            "cityCode": "0915",
            "cityName": "安康市"
          },
          {
            "cityCode": "0556",
            "cityName": "安庆市"
          },
          {
            "cityCode": "0853",
            "cityName": "安顺市"
          },
          {
            "cityCode": "0372",
            "cityName": "安阳市"
          },
          {
            "cityCode": "1853",
            "cityName": "澳门特别行政区"
          }
        ],
        "idx": "A"
      },
      {
        "cities": [
          {
            "cityCode": "0478",
            "cityName": "巴彦淖尔市"
          },
          {
            "cityCode": "0996",
            "cityName": "巴音郭楞蒙古自治州"
          },
          {
            "cityCode": "0827",
            "cityName": "巴中市"
          },
          {
            "cityCode": "0436",
            "cityName": "白城市"
          },
          {
            "cityCode": "0802",
            "cityName": "白沙黎族自治县"
          },
          {
            "cityCode": "0439",
            "cityName": "白山市"
          },
          {
            "cityCode": "0943",
            "cityName": "白银市"
          },
          {
            "cityCode": "0776",
            "cityName": "百色市"
          },
          {
            "cityCode": "0552",
            "cityName": "蚌埠市"
          },
          {
            "cityCode": "0472",
            "cityName": "包头市"
          },
          {
            "cityCode": "0312",
            "cityName": "保定市"
          },
          {
            "cityCode": "0875",
            "cityName": "保山市"
          },
          {
            "cityCode": "0801",
            "cityName": "保亭黎族苗族自治县"
          },
          {
            "cityCode": "0917",
            "cityName": "宝鸡市"
          },
          {
            "cityCode": "0779",
            "cityName": "北海市"
          },
          {
            "cityCode": "010",
            "cityName": "北京市"
          },
          {
            "cityCode": "1906",
            "cityName": "北屯市"
          },
          {
            "cityCode": "0414",
            "cityName": "本溪市"
          },
          {
            "cityCode": "0857",
            "cityName": "毕节市"
          },
          {
            "cityCode": "0543",
            "cityName": "滨州市"
          },
          {
            "cityCode": "0909",
            "cityName": "博尔塔拉蒙古自治州"
          },
          {
            "cityCode": "0558",
            "cityName": "亳州市"
          }
        ],
        "idx": "B"
      },
      {
        "cities": [
          {
            "cityCode": "0317",
            "cityName": "沧州市"
          },
          {
            "cityCode": "0895",
            "cityName": "昌都市"
          },
          {
            "cityCode": "0994",
            "cityName": "昌吉回族自治州"
          },
          {
            "cityCode": "0803",
            "cityName": "昌江黎族自治县"
          },
          {
            "cityCode": "0736",
            "cityName": "常德市"
          },
          {
            "cityCode": "0519",
            "cityName": "常州市"
          },
          {
            "cityCode": "0431",
            "cityName": "长春市"
          },
          {
            "cityCode": "0731",
            "cityName": "长沙市"
          },
          {
            "cityCode": "0355",
            "cityName": "长治市"
          },
          {
            "cityCode": "0421",
            "cityName": "朝阳市"
          },
          {
            "cityCode": "0768",
            "cityName": "潮州市"
          },
          {
            "cityCode": "0735",
            "cityName": "郴州市"
          },
          {
            "cityCode": "028",
            "cityName": "成都市"
          },
          {
            "cityCode": "0804",
            "cityName": "澄迈县"
          },
          {
            "cityCode": "0314",
            "cityName": "承德市"
          },
          {
            "cityCode": "0566",
            "cityName": "池州市"
          },
          {
            "cityCode": "0476",
            "cityName": "赤峰市"
          },
          {
            "cityCode": "1771",
            "cityName": "崇左市"
          },
          {
            "cityCode": "0550",
            "cityName": "滁州市"
          },
          {
            "cityCode": "0878",
            "cityName": "楚雄彝族自治州"
          },
          {
            "cityCode": "023",
            "cityName": "重庆市"
          }
        ],
        "idx": "C"
      },
      {
        "cities": [
          {
            "cityCode": "0818",
            "cityName": "达州市"
          },
          {
            "cityCode": "0872",
            "cityName": "大理白族自治州"
          },
          {
            "cityCode": "0411",
            "cityName": "大连市"
          },
          {
            "cityCode": "0459",
            "cityName": "大庆市"
          },
          {
            "cityCode": "0352",
            "cityName": "大同市"
          },
          {
            "cityCode": "0457",
            "cityName": "大兴安岭地区"
          },
          {
            "cityCode": "0415",
            "cityName": "丹东市"
          },
          {
            "cityCode": "0692",
            "cityName": "德宏傣族景颇族自治州"
          },
          {
            "cityCode": "0838",
            "cityName": "德阳市"
          },
          {
            "cityCode": "0534",
            "cityName": "德州市"
          },
          {
            "cityCode": "0887",
            "cityName": "迪庆藏族自治州"
          },
          {
            "cityCode": "0806",
            "cityName": "定安县"
          },
          {
            "cityCode": "0932",
            "cityName": "定西市"
          },
          {
            "cityCode": "0807",
            "cityName": "东方市"
          },
          {
            "cityCode": "0546",
            "cityName": "东营市"
          },
          {
            "cityCode": "0769",
            "cityName": "东莞市"
          },
          {
            "cityCode": "0805",
            "cityName": "儋州市"
          }
        ],
        "idx": "D"
      },
      {
        "cities": [
          {
            "cityCode": "0477",
            "cityName": "鄂尔多斯市"
          },
          {
            "cityCode": "0711",
            "cityName": "鄂州市"
          },
          {
            "cityCode": "0718",
            "cityName": "恩施土家族苗族自治州"
          }
        ],
        "idx": "E"
      },
      {
        "cities": [
          {
            "cityCode": "0770",
            "cityName": "防城港市"
          },
          {
            "cityCode": "0757",
            "cityName": "佛山市"
          },
          {
            "cityCode": "0591",
            "cityName": "福州市"
          },
          {
            "cityCode": "0413",
            "cityName": "抚顺市"
          },
          {
            "cityCode": "0794",
            "cityName": "抚州市"
          },
          {
            "cityCode": "0418",
            "cityName": "阜新市"
          },
          {
            "cityCode": "1558",
            "cityName": "阜阳市"
          }
        ],
        "idx": "F"
      },
      {
        "cities": [
          {
            "cityCode": "0941",
            "cityName": "甘南藏族自治州"
          },
          {
            "cityCode": "0836",
            "cityName": "甘孜藏族自治州"
          },
          {
            "cityCode": "0797",
            "cityName": "赣州市"
          },
          {
            "cityCode": "0954",
            "cityName": "固原市"
          },
          {
            "cityCode": "0826",
            "cityName": "广安市"
          },
          {
            "cityCode": "0839",
            "cityName": "广元市"
          },
          {
            "cityCode": "020",
            "cityName": "广州市"
          },
          {
            "cityCode": "0773",
            "cityName": "桂林市"
          },
          {
            "cityCode": "1755",
            "cityName": "贵港市"
          },
          {
            "cityCode": "0851",
            "cityName": "贵阳市"
          },
          {
            "cityCode": "0975",
            "cityName": "果洛藏族自治州"
          }
        ],
        "idx": "G"
      },
      {
        "cities": [
          {
            "cityCode": "0451",
            "cityName": "哈尔滨市"
          },
          {
            "cityCode": "0902",
            "cityName": "哈密市"
          },
          {
            "cityCode": "0970",
            "cityName": "海北藏族自治州"
          },
          {
            "cityCode": "0972",
            "cityName": "海东市"
          },
          {
            "cityCode": "0898",
            "cityName": "海口市"
          },
          {
            "cityCode": "0974",
            "cityName": "海南藏族自治州"
          },
          {
            "cityCode": "0977",
            "cityName": "海西蒙古族藏族自治州"
          },
          {
            "cityCode": "0310",
            "cityName": "邯郸市"
          },
          {
            "cityCode": "0916",
            "cityName": "汉中市"
          },
          {
            "cityCode": "0571",
            "cityName": "杭州市"
          },
          {
            "cityCode": "0530",
            "cityName": "菏泽市"
          },
          {
            "cityCode": "0903",
            "cityName": "和田地区"
          },
          {
            "cityCode": "0551",
            "cityName": "合肥市"
          },
          {
            "cityCode": "0778",
            "cityName": "河池市"
          },
          {
            "cityCode": "0762",
            "cityName": "河源市"
          },
          {
            "cityCode": "0392",
            "cityName": "鹤壁市"
          },
          {
            "cityCode": "0468",
            "cityName": "鹤岗市"
          },
          {
            "cityCode": "1774",
            "cityName": "贺州市"
          },
          {
            "cityCode": "0456",
            "cityName": "黑河市"
          },
          {
            "cityCode": "0318",
            "cityName": "衡水市"
          },
          {
            "cityCode": "0734",
            "cityName": "衡阳市"
          },
          {
            "cityCode": "0873",
            "cityName": "红河哈尼族彝族自治州"
          },
          {
            "cityCode": "0471",
            "cityName": "呼和浩特市"
          },
          {
            "cityCode": "0470",
            "cityName": "呼伦贝尔市"
          },
          {
            "cityCode": "0429",
            "cityName": "葫芦岛市"
          },
          {
            "cityCode": "0992",
            "cityName": "胡杨河市"
          },
          {
            "cityCode": "0572",
            "cityName": "湖州市"
          },
          {
            "cityCode": "0745",
            "cityName": "怀化市"
          },
          {
            "cityCode": "0517",
            "cityName": "淮安市"
          },
          {
            "cityCode": "0561",
            "cityName": "淮北市"
          },
          {
            "cityCode": "0554",
            "cityName": "淮南市"
          },
          {
            "cityCode": "0713",
            "cityName": "黄冈市"
          },
          {
            "cityCode": "0973",
            "cityName": "黄南藏族自治州"
          },
          {
            "cityCode": "0559",
            "cityName": "黄山市"
          },
          {
            "cityCode": "0714",
            "cityName": "黄石市"
          },
          {
            "cityCode": "0752",
            "cityName": "惠州市"
          }
        ],
        "idx": "H"
      },
      {
        "cities": [],
        "idx": "I"
      },
      {
        "cities": [
          {
            "cityCode": "0467",
            "cityName": "鸡西市"
          },
          {
            "cityCode": "0796",
            "cityName": "吉安市"
          },
          {
            "cityCode": "0432",
            "cityName": "吉林市"
          },
          {
            "cityCode": "0531",
            "cityName": "济南市"
          },
          {
            "cityCode": "0537",
            "cityName": "济宁市"
          },
          {
            "cityCode": "1391",
            "cityName": "济源市"
          },
          {
            "cityCode": "0573",
            "cityName": "嘉兴市"
          },
          {
            "cityCode": "1937",
            "cityName": "嘉峪关市"
          },
          {
            "cityCode": "0454",
            "cityName": "佳木斯市"
          },
          {
            "cityCode": "0750",
            "cityName": "江门市"
          },
          {
            "cityCode": "0391",
            "cityName": "焦作市"
          },
          {
            "cityCode": "0663",
            "cityName": "揭阳市"
          },
          {
            "cityCode": "0935",
            "cityName": "金昌市"
          },
          {
            "cityCode": "0579",
            "cityName": "金华市"
          },
          {
            "cityCode": "0416",
            "cityName": "锦州市"
          },
          {
            "cityCode": "0356",
            "cityName": "晋城市"
          },
          {
            "cityCode": "0354",
            "cityName": "晋中市"
          },
          {
            "cityCode": "0724",
            "cityName": "荆门市"
          },
          {
            "cityCode": "0716",
            "cityName": "荆州市"
          },
          {
            "cityCode": "0798",
            "cityName": "景德镇市"
          },
          {
            "cityCode": "0792",
            "cityName": "九江市"
          },
          {
            "cityCode": "0937",
            "cityName": "酒泉市"
          }
        ],
        "idx": "J"
      },
      {
        "cities": [
          {
            "cityCode": "0998",
            "cityName": "喀什地区"
          },
          {
            "cityCode": "0378",
            "cityName": "开封市"
          },
          {
            "cityCode": "1999",
            "cityName": "可克达拉市"
          },
          {
            "cityCode": "0990",
            "cityName": "克拉玛依市"
          },
          {
            "cityCode": "0908",
            "cityName": "克孜勒苏柯尔克孜自治州"
          },
          {
            "cityCode": "0871",
            "cityName": "昆明市"
          },
          {
            "cityCode": "1903",
            "cityName": "昆玉市"
          }
        ],
        "idx": "K"
      },
      {
        "cities": [
          {
            "cityCode": "0891",
            "cityName": "拉萨市"
          },
          {
            "cityCode": "1772",
            "cityName": "来宾市"
          },
          {
            "cityCode": "0931",
            "cityName": "兰州市"
          },
          {
            "cityCode": "0316",
            "cityName": "廊坊市"
          },
          {
            "cityCode": "2802",
            "cityName": "乐东黎族自治县"
          },
          {
            "cityCode": "0833",
            "cityName": "乐山市"
          },
          {
            "cityCode": "0888",
            "cityName": "丽江市"
          },
          {
            "cityCode": "0578",
            "cityName": "丽水市"
          },
          {
            "cityCode": "0518",
            "cityName": "连云港市"
          },
          {
            "cityCode": "0834",
            "cityName": "凉山彝族自治州"
          },
          {
            "cityCode": "0635",
            "cityName": "聊城市"
          },
          {
            "cityCode": "0419",
            "cityName": "辽阳市"
          },
          {
            "cityCode": "0437",
            "cityName": "辽源市"
          },
          {
            "cityCode": "0894",
            "cityName": "林芝市"
          },
          {
            "cityCode": "0883",
            "cityName": "临沧市"
          },
          {
            "cityCode": "0357",
            "cityName": "临汾市"
          },
          {
            "cityCode": "1896",
            "cityName": "临高县"
          },
          {
            "cityCode": "0930",
            "cityName": "临夏回族自治州"
          },
          {
            "cityCode": "0539",
            "cityName": "临沂市"
          },
          {
            "cityCode": "0809",
            "cityName": "陵水黎族自治县"
          },
          {
            "cityCode": "0772",
            "cityName": "柳州市"
          },
          {
            "cityCode": "0564",
            "cityName": "六安市"
          },
          {
            "cityCode": "0858",
            "cityName": "六盘水市"
          },
          {
            "cityCode": "0597",
            "cityName": "龙岩市"
          },
          {
            "cityCode": "2935",
            "cityName": "陇南市"
          },
          {
            "cityCode": "0738",
            "cityName": "娄底市"
          },
          {
            "cityCode": "0358",
            "cityName": "吕梁市"
          },
          {
            "cityCode": "0379",
            "cityName": "洛阳市"
          },
          {
            "cityCode": "0830",
            "cityName": "泸州市"
          },
          {
            "cityCode": "0395",
            "cityName": "漯河市"
          }
        ],
        "idx": "L"
      },
      {
        "cities": [
          {
            "cityCode": "0555",
            "cityName": "马鞍山市"
          },
          {
            "cityCode": "0668",
            "cityName": "茂名市"
          },
          {
            "cityCode": "0753",
            "cityName": "梅州市"
          },
          {
            "cityCode": "1833",
            "cityName": "眉山市"
          },
          {
            "cityCode": "0816",
            "cityName": "绵阳市"
          },
          {
            "cityCode": "0453",
            "cityName": "牡丹江市"
          }
        ],
        "idx": "M"
      },
      {
        "cities": [
          {
            "cityCode": "0896",
            "cityName": "那曲市"
          },
          {
            "cityCode": "0791",
            "cityName": "南昌市"
          },
          {
            "cityCode": "0817",
            "cityName": "南充市"
          },
          {
            "cityCode": "025",
            "cityName": "南京市"
          },
          {
            "cityCode": "0771",
            "cityName": "南宁市"
          },
          {
            "cityCode": "0599",
            "cityName": "南平市"
          },
          {
            "cityCode": "0513",
            "cityName": "南通市"
          },
          {
            "cityCode": "0377",
            "cityName": "南阳市"
          },
          {
            "cityCode": "1832",
            "cityName": "内江市"
          },
          {
            "cityCode": "0574",
            "cityName": "宁波市"
          },
          {
            "cityCode": "0593",
            "cityName": "宁德市"
          },
          {
            "cityCode": "0886",
            "cityName": "怒江傈僳族自治州"
          }
        ],
        "idx": "N"
      },
      {
        "cities": [
          {
            "cityCode": "0812",
            "cityName": "攀枝花市"
          },
          {
            "cityCode": "0427",
            "cityName": "盘锦市"
          },
          {
            "cityCode": "0799",
            "cityName": "萍乡市"
          },
          {
            "cityCode": "0375",
            "cityName": "平顶山市"
          },
          {
            "cityCode": "0933",
            "cityName": "平凉市"
          },
          {
            "cityCode": "0594",
            "cityName": "莆田市"
          },
          {
            "cityCode": "0879",
            "cityName": "普洱市"
          },
          {
            "cityCode": "0393",
            "cityName": "濮阳市"
          }
        ],
        "idx": "P"
      },
      {
        "cities": [
          {
            "cityCode": "0464",
            "cityName": "七台河市"
          },
          {
            "cityCode": "0452",
            "cityName": "齐齐哈尔市"
          },
          {
            "cityCode": "0855",
            "cityName": "黔东南苗族侗族自治州"
          },
          {
            "cityCode": "0854",
            "cityName": "黔南布依族苗族自治州"
          },
          {
            "cityCode": "0859",
            "cityName": "黔西南布依族苗族自治州"
          },
          {
            "cityCode": "2728",
            "cityName": "潜江市"
          },
          {
            "cityCode": "0777",
            "cityName": "钦州市"
          },
          {
            "cityCode": "0335",
            "cityName": "秦皇岛市"
          },
          {
            "cityCode": "0532",
            "cityName": "青岛市"
          },
          {
            "cityCode": "0763",
            "cityName": "清远市"
          },
          {
            "cityCode": "0934",
            "cityName": "庆阳市"
          },
          {
            "cityCode": "1894",
            "cityName": "琼海市"
          },
          {
            "cityCode": "1899",
            "cityName": "琼中黎族苗族自治县"
          },
          {
            "cityCode": "0874",
            "cityName": "曲靖市"
          },
          {
            "cityCode": "0595",
            "cityName": "泉州市"
          },
          {
            "cityCode": "0570",
            "cityName": "衢州市"
          }
        ],
        "idx": "Q"
      },
      {
        "cities": [
          {
            "cityCode": "0892",
            "cityName": "日喀则市"
          },
          {
            "cityCode": "0633",
            "cityName": "日照市"
          }
        ],
        "idx": "R"
      },
      {
        "cities": [
          {
            "cityCode": "0398",
            "cityName": "三门峡市"
          },
          {
            "cityCode": "0598",
            "cityName": "三明市"
          },
          {
            "cityCode": "2898",
            "cityName": "三沙市"
          },
          {
            "cityCode": "0899",
            "cityName": "三亚市"
          },
          {
            "cityCode": "0893",
            "cityName": "山南市"
          },
          {
            "cityCode": "0754",
            "cityName": "汕头市"
          },
          {
            "cityCode": "0660",
            "cityName": "汕尾市"
          },
          {
            "cityCode": "0914",
            "cityName": "商洛市"
          },
          {
            "cityCode": "0370",
            "cityName": "商丘市"
          },
          {
            "cityCode": "021",
            "cityName": "上海市"
          },
          {
            "cityCode": "0793",
            "cityName": "上饶市"
          },
          {
            "cityCode": "0751",
            "cityName": "韶关市"
          },
          {
            "cityCode": "0739",
            "cityName": "邵阳市"
          },
          {
            "cityCode": "0575",
            "cityName": "绍兴市"
          },
          {
            "cityCode": "0755",
            "cityName": "深圳市"
          },
          {
            "cityCode": "1719",
            "cityName": "神农架林区"
          },
          {
            "cityCode": "024",
            "cityName": "沈阳市"
          },
          {
            "cityCode": "0719",
            "cityName": "十堰市"
          },
          {
            "cityCode": "0993",
            "cityName": "石河子市"
          },
          {
            "cityCode": "0311",
            "cityName": "石家庄市"
          },
          {
            "cityCode": "0952",
            "cityName": "石嘴山市"
          },
          {
            "cityCode": "1909",
            "cityName": "双河市"
          },
          {
            "cityCode": "0469",
            "cityName": "双鸭山市"
          },
          {
            "cityCode": "0349",
            "cityName": "朔州市"
          },
          {
            "cityCode": "0434",
            "cityName": "四平市"
          },
          {
            "cityCode": "0438",
            "cityName": "松原市"
          },
          {
            "cityCode": "0512",
            "cityName": "苏州市"
          },
          {
            "cityCode": "0527",
            "cityName": "宿迁市"
          },
          {
            "cityCode": "0557",
            "cityName": "宿州市"
          },
          {
            "cityCode": "0722",
            "cityName": "随州市"
          },
          {
            "cityCode": "0455",
            "cityName": "绥化市"
          },
          {
            "cityCode": "0825",
            "cityName": "遂宁市"
          }
        ],
        "idx": "S"
      },
      {
        "cities": [
          {
            "cityCode": "0901",
            "cityName": "塔城地区"
          },
          {
            "cityCode": "1886",
            "cityName": "台湾省"
          },
          {
            "cityCode": "0576",
            "cityName": "台州市"
          },
          {
            "cityCode": "0538",
            "cityName": "泰安市"
          },
          {
            "cityCode": "0523",
            "cityName": "泰州市"
          },
          {
            "cityCode": "0351",
            "cityName": "太原市"
          },
          {
            "cityCode": "0315",
            "cityName": "唐山市"
          },
          {
            "cityCode": "022",
            "cityName": "天津市"
          },
          {
            "cityCode": "1728",
            "cityName": "天门市"
          },
          {
            "cityCode": "0938",
            "cityName": "天水市"
          },
          {
            "cityCode": "0410",
            "cityName": "铁岭市"
          },
          {
            "cityCode": "1996",
            "cityName": "铁门关市"
          },
          {
            "cityCode": "0435",
            "cityName": "通化市"
          },
          {
            "cityCode": "0475",
            "cityName": "通辽市"
          },
          {
            "cityCode": "0919",
            "cityName": "铜川市"
          },
          {
            "cityCode": "0562",
            "cityName": "铜陵市"
          },
          {
            "cityCode": "0856",
            "cityName": "铜仁市"
          },
          {
            "cityCode": "1998",
            "cityName": "图木舒克市"
          },
          {
            "cityCode": "0995",
            "cityName": "吐鲁番市"
          },
          {
            "cityCode": "1892",
            "cityName": "屯昌县"
          }
        ],
        "idx": "T"
      },
      {
        "cities": [],
        "idx": "U"
      },
      {
        "cities": [],
        "idx": "V"
      },
      {
        "cities": [
          {
            "cityCode": "1900",
            "cityName": "外国"
          },
          {
            "cityCode": "1898",
            "cityName": "万宁市"
          },
          {
            "cityCode": "0631",
            "cityName": "威海市"
          },
          {
            "cityCode": "0536",
            "cityName": "潍坊市"
          },
          {
            "cityCode": "0913",
            "cityName": "渭南市"
          },
          {
            "cityCode": "0577",
            "cityName": "温州市"
          },
          {
            "cityCode": "1893",
            "cityName": "文昌市"
          },
          {
            "cityCode": "0876",
            "cityName": "文山壮族苗族自治州"
          },
          {
            "cityCode": "0473",
            "cityName": "乌海市"
          },
          {
            "cityCode": "0474",
            "cityName": "乌兰察布市"
          },
          {
            "cityCode": "0991",
            "cityName": "乌鲁木齐市"
          },
          {
            "cityCode": "0510",
            "cityName": "无锡市"
          },
          {
            "cityCode": "0553",
            "cityName": "芜湖市"
          },
          {
            "cityCode": "0774",
            "cityName": "梧州市"
          },
          {
            "cityCode": "0953",
            "cityName": "吴忠市"
          },
          {
            "cityCode": "027",
            "cityName": "武汉市"
          },
          {
            "cityCode": "1935",
            "cityName": "武威市"
          },
          {
            "cityCode": "1994",
            "cityName": "五家渠市"
          },
          {
            "cityCode": "1897",
            "cityName": "五指山市"
          }
        ],
        "idx": "W"
      },
      {
        "cities": [
          {
            "cityCode": "029",
            "cityName": "西安市"
          },
          {
            "cityCode": "0971",
            "cityName": "西宁市"
          },
          {
            "cityCode": "0691",
            "cityName": "西双版纳傣族自治州"
          },
          {
            "cityCode": "0479",
            "cityName": "锡林郭勒盟"
          },
          {
            "cityCode": "0592",
            "cityName": "厦门市"
          },
          {
            "cityCode": "0728",
            "cityName": "仙桃市"
          },
          {
            "cityCode": "0715",
            "cityName": "咸宁市"
          },
          {
            "cityCode": "0910",
            "cityName": "咸阳市"
          },
          {
            "cityCode": "1852",
            "cityName": "香港特别行政区"
          },
          {
            "cityCode": "0710",
            "cityName": "襄阳市"
          },
          {
            "cityCode": "0732",
            "cityName": "湘潭市"
          },
          {
            "cityCode": "0743",
            "cityName": "湘西土家族苗族自治州"
          },
          {
            "cityCode": "0712",
            "cityName": "孝感市"
          },
          {
            "cityCode": "0373",
            "cityName": "新乡市"
          },
          {
            "cityCode": "0790",
            "cityName": "新余市"
          },
          {
            "cityCode": "0350",
            "cityName": "忻州市"
          },
          {
            "cityCode": "0376",
            "cityName": "信阳市"
          },
          {
            "cityCode": "0482",
            "cityName": "兴安盟"
          },
          {
            "cityCode": "0319",
            "cityName": "邢台市"
          },
          {
            "cityCode": "0516",
            "cityName": "徐州市"
          },
          {
            "cityCode": "0374",
            "cityName": "许昌市"
          },
          {
            "cityCode": "0563",
            "cityName": "宣城市"
          }
        ],
        "idx": "X"
      },
      {
        "cities": [
          {
            "cityCode": "0835",
            "cityName": "雅安市"
          },
          {
            "cityCode": "0535",
            "cityName": "烟台市"
          },
          {
            "cityCode": "0515",
            "cityName": "盐城市"
          },
          {
            "cityCode": "0911",
            "cityName": "延安市"
          },
          {
            "cityCode": "1433",
            "cityName": "延边朝鲜族自治州"
          },
          {
            "cityCode": "0514",
            "cityName": "扬州市"
          },
          {
            "cityCode": "0662",
            "cityName": "阳江市"
          },
          {
            "cityCode": "0353",
            "cityName": "阳泉市"
          },
          {
            "cityCode": "0458",
            "cityName": "伊春市"
          },
          {
            "cityCode": "0999",
            "cityName": "伊犁哈萨克自治州"
          },
          {
            "cityCode": "0831",
            "cityName": "宜宾市"
          },
          {
            "cityCode": "0717",
            "cityName": "宜昌市"
          },
          {
            "cityCode": "0795",
            "cityName": "宜春市"
          },
          {
            "cityCode": "0737",
            "cityName": "益阳市"
          },
          {
            "cityCode": "0951",
            "cityName": "银川市"
          },
          {
            "cityCode": "0701",
            "cityName": "鹰潭市"
          },
          {
            "cityCode": "0417",
            "cityName": "营口市"
          },
          {
            "cityCode": "0746",
            "cityName": "永州市"
          },
          {
            "cityCode": "0912",
            "cityName": "榆林市"
          },
          {
            "cityCode": "0775",
            "cityName": "玉林市"
          },
          {
            "cityCode": "0976",
            "cityName": "玉树藏族自治州"
          },
          {
            "cityCode": "0877",
            "cityName": "玉溪市"
          },
          {
            "cityCode": "0730",
            "cityName": "岳阳市"
          },
          {
            "cityCode": "0766",
            "cityName": "云浮市"
          },
          {
            "cityCode": "0359",
            "cityName": "运城市"
          }
        ],
        "idx": "Y"
      },
      {
        "cities": [
          {
            "cityCode": "0632",
            "cityName": "枣庄市"
          },
          {
            "cityCode": "0759",
            "cityName": "湛江市"
          },
          {
            "cityCode": "0596",
            "cityName": "漳州市"
          },
          {
            "cityCode": "0744",
            "cityName": "张家界市"
          },
          {
            "cityCode": "0313",
            "cityName": "张家口市"
          },
          {
            "cityCode": "0936",
            "cityName": "张掖市"
          },
          {
            "cityCode": "0870",
            "cityName": "昭通市"
          },
          {
            "cityCode": "0758",
            "cityName": "肇庆市"
          },
          {
            "cityCode": "0511",
            "cityName": "镇江市"
          },
          {
            "cityCode": "0371",
            "cityName": "郑州市"
          },
          {
            "cityCode": "0760",
            "cityName": "中山市"
          },
          {
            "cityCode": "1953",
            "cityName": "中卫市"
          },
          {
            "cityCode": "0580",
            "cityName": "舟山市"
          },
          {
            "cityCode": "0394",
            "cityName": "周口市"
          },
          {
            "cityCode": "0756",
            "cityName": "珠海市"
          },
          {
            "cityCode": "0733",
            "cityName": "株洲市"
          },
          {
            "cityCode": "0396",
            "cityName": "驻马店市"
          },
          {
            "cityCode": "0832",
            "cityName": "资阳市"
          },
          {
            "cityCode": "0533",
            "cityName": "淄博市"
          },
          {
            "cityCode": "0813",
            "cityName": "自贡市"
          },
          {
            "cityCode": "0852",
            "cityName": "遵义市"
          }
        ],
        "idx": "Z"
      }
    ],
    index: [
      {
        "idx": "#"
      },
      {
        "idx": "A"
      },
      {
        "idx": "B"
      },
      {
        "idx": "C"
      },
      {
        "idx": "D"
      },
      {
        "idx": "E"
      },
      {
        "idx": "F"
      },
      {
        "idx": "G"
      },
      {
        "idx": "H"
      },
      {
        "idx": "J"
      },
      {
        "idx": "K"
      },
      {
        "idx": "L"
      },
      {
        "idx": "M"
      },
      {
        "idx": "N"
      },
      {
        "idx": "P"
      },
      {
        "idx": "Q"
      },
      {
        "idx": "R"
      },
      {
        "idx": "S"
      },
      {
        "idx": "T"
      },
      {
        "idx": "W"
      },
      {
        "idx": "X"
      },
      {
        "idx": "Y"
      },
      {
        "idx": "Z"
      }
    ]
  };
  const _sfc_main$s = {
    __name: "index",
    setup(__props) {
      const store2 = useStore();
      const address = vue.ref("");
      const customBar = vue.ref("87px");
      const winHeight = vue.ref(0);
      const itemHeight = vue.ref(0);
      const winOffsetY = vue.ref(0);
      const touchmove = vue.ref(false);
      const scrollHeight = vue.ref("");
      const letter = vue.ref([]);
      const scrollIntoId = vue.ref("");
      const list = vue.ref([]);
      const activeId = vue.ref(1);
      const disPosition = vue.ref(true);
      const currentCity = vue.ref();
      const po_tips = vue.ref("重新定位");
      const hotCity = vue.ref([
        { name: "北京市", cityCode: "010" },
        { name: "上海市", cityCode: "021" },
        { name: "广州市", cityCode: "020" },
        { name: "深圳市", cityCode: "0755" }
      ]);
      const instance = vue.getCurrentInstance();
      const setList = () => {
        uni.createSelectorQuery().in(instance).select("#list").boundingClientRect().exec((ret) => {
          winOffsetY.value = ret[0].top;
          winHeight.value = ret[0].height;
          itemHeight.value = winHeight.value / list.value.length;
        });
      };
      onLoad((option) => {
        address.value = option.address;
      });
      const goBack = () => {
        uni.navigateBack();
      };
      const touchStart = (e2) => {
        touchmove.value = true;
        let pageY = e2.touches[0].pageY;
        let index = Math.floor((pageY - winOffsetY.value) / itemHeight.value);
        if (list.value[index]) {
          scrollIntoId.value = list.value[index].idx;
        }
      };
      const touchMove = (e2) => {
        let pageY = e2.touches[0].pageY;
        let index = Math.floor((pageY - winOffsetY.value) / itemHeight.value);
        if (list.value[index] && list.value[index].idx === scrollIntoId.value) {
          return false;
        }
        if (list.value[index]) {
          scrollIntoId.value = list.value[index].idx;
        }
      };
      const touchEnd = () => {
        touchmove.value = false;
      };
      const activeCity = (val) => {
        activeId.value = val.cityCode;
        selectCity(val);
      };
      vue.onMounted(() => {
        getWarpWeft();
        scrollHeight.value = uni.getSystemInfoSync().windowHeight - parseInt(customBar.value) + "px";
        letter.value = Citys.index;
        list.value = Citys.list;
        setList();
        getOpenCity().then((res) => {
          list.value = res.data;
          let arr = [];
          hotCity.value.map((item) => {
            list.value.map((item1) => {
              if (item1.cityCode === item.cityCode) {
                arr.push(item);
              }
            });
          });
          hotCity.value = arr;
        });
      });
      const getWarpWeft = () => {
        {
          po_tips.value = "定位中...";
          uni.getLocation({
            type: "gcj02",
            geocode: true,
            success: function(res) {
              currentCity.value = {
                name: res.address.city
              };
              activeId.value = res.address.cityCode;
              setTimeout(() => {
                po_tips.value = "重新定位";
              }, 500);
            },
            fail: function() {
              setTimeout(() => {
                po_tips.value = "定位失败";
              }, 500);
              disPosition.value = true;
            }
          });
        }
      };
      const selectCity = (city) => {
        currentCity.value = city;
        store2.commit("user/setCityCode", city.cityCode);
        store2.commit("user/setCityName", city.name);
        uni.navigateBack();
      };
      vue.watch(list, () => {
        setTimeout(() => {
          setList();
        }, 100);
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "city" }, [
          vue.createCommentVNode(" nav "),
          vue.createVNode(UniNav, {
            title: "选择服务城市",
            onGoBack: goBack
          }),
          vue.createElementVNode("scroll-view", {
            class: "w100",
            "scroll-y": "true",
            "scroll-into-view": scrollIntoId.value,
            style: vue.normalizeStyle({ height: scrollHeight.value }),
            onTouchmove: _cache[0] || (_cache[0] = vue.withModifiers(() => {
            }, ["stop", "prevent"]))
          }, [
            disPosition.value ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              id: "hot"
            }, [
              vue.createElementVNode("view", { class: "grey" }, " 当前定位城市 "),
              vue.createCommentVNode(" 定位模块 "),
              vue.createElementVNode("view", { class: "position top" }, [
                vue.createElementVNode("view", { class: "position_city" }, [
                  vue.createElementVNode(
                    "view",
                    { class: "position_city_one" },
                    vue.toDisplayString(currentCity.value ? currentCity.value.name : "定位失败"),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode("view", {
                    class: "WarpWeft",
                    onClick: getWarpWeft
                  }, [
                    vue.createElementVNode("image", {
                      class: "image",
                      src: "/static/new/positions.png"
                    }),
                    vue.createElementVNode(
                      "text",
                      null,
                      vue.toDisplayString(po_tips.value),
                      1
                      /* TEXT */
                    )
                  ])
                ])
              ]),
              hotCity.value.length ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "hot grey"
              }, " 热门城市 ")) : vue.createCommentVNode("v-if", true),
              vue.createCommentVNode(" 最近模块 "),
              vue.createCommentVNode(" 热门 "),
              hotCity.value.length ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "position hotCity"
              }, [
                vue.createElementVNode("view", { class: "position_city position_city_hot" }, [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList(hotCity.value, (item, index) => {
                      return vue.openBlock(), vue.createElementBlock("view", {
                        class: vue.normalizeClass(
                          activeId.value === item.cityCode ? "position_city_tag_active position_city_tag" : "position_city_tag"
                        ),
                        key: index,
                        onClick: ($event) => activeCity(item)
                      }, vue.toDisplayString(item.name), 11, ["onClick"]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])
              ])) : vue.createCommentVNode("v-if", true),
              vue.createElementVNode("view", { class: "grey" }, " 已开通的城市 ")
            ])) : vue.createCommentVNode("v-if", true),
            vue.createCommentVNode(" 城市列表 "),
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(list.value, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  id: item.id,
                  key: index,
                  class: "cityList"
                }, [
                  vue.createElementVNode("view", { class: "contents" }, [
                    vue.createElementVNode("view", {
                      class: "city-div",
                      onClick: ($event) => selectCity(item)
                    }, [
                      vue.createElementVNode(
                        "text",
                        { class: "city" },
                        vue.toDisplayString(item.name),
                        1
                        /* TEXT */
                      )
                    ], 8, ["onClick"])
                  ])
                ], 8, ["id"]);
              }),
              128
              /* KEYED_FRAGMENT */
            )),
            vue.createElementVNode("view", { class: "placeholder footer" })
          ], 44, ["scroll-into-view"]),
          vue.createCommentVNode(" 右侧字母 "),
          vue.withDirectives(vue.createElementVNode("view", {
            class: "letters",
            id: "list",
            onTouchstart: touchStart,
            onTouchmove: vue.withModifiers(touchMove, ["stop", "prevent"]),
            onTouchend: touchEnd
          }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(letter.value, (item) => {
                return vue.openBlock(), vue.createElementBlock(
                  "view",
                  {
                    class: "fmin",
                    key: item.idx
                  },
                  vue.toDisplayString(item.idx),
                  1
                  /* TEXT */
                );
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ], 40, ["onTouchmove"]), [
            [vue.vShow, false]
          ]),
          vue.createCommentVNode(" 选中之后字母 "),
          vue.withDirectives(vue.createElementVNode(
            "view",
            { class: "mask" },
            [
              vue.createElementVNode(
                "view",
                { class: "mask-r bold" },
                vue.toDisplayString(scrollIntoId.value),
                1
                /* TEXT */
              )
            ],
            512
            /* NEED_PATCH */
          ), [
            [vue.vShow, false]
          ])
        ]);
      };
    }
  };
  const PagesCityIndex = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["__scopeId", "data-v-5a18b3c9"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/pages/city/index.vue"]]);
  const _sfc_main$r = {
    __name: "index",
    setup(__props) {
      const canPickUp = vue.ref(false);
      const settingsStatus = vue.ref(false);
      const serveRangeStatus = vue.ref(false);
      const serveSkillStatus = vue.ref(false);
      const certificationStatus = vue.ref(false);
      onShow(() => {
        getSetting();
      });
      vue.onMounted(() => {
      });
      const getSetting = () => {
        getUserSetting().then((res) => {
          if (res.code == 200) {
            canPickUp.value = res.data.canPickUp;
            settingsStatus.value = res.data.settingsStatus;
            serveRangeStatus.value = res.data.serveScopeSetted;
            serveSkillStatus.value = res.data.serveSkillSetted;
            certificationStatus.value = res.data.certificationStatus;
          }
        }).catch((err) => {
          uni.showToast({
            title: err.msg || "接口调用失败",
            duration: 1500,
            icon: "none"
          });
        });
      };
      const handlePickUpStatus = () => {
        setPickUpStatus({
          canPickUp: canPickUp.value ? 0 : 1
        }).then((res) => {
          if (res.code == 200) {
            getSetting();
          }
        }).catch((err) => {
          uni.showToast({
            title: err.msg || "接口调用失败",
            duration: 1500,
            icon: "none"
          });
        });
      };
      const handleToAuth = () => {
        if (certificationStatus.value === 0) {
          uni.navigateTo({
            url: "/pages/auth/index"
          });
        } else if (certificationStatus.value === 3) {
          uni.navigateTo({
            url: "/pages/authFail/index"
          });
        }
      };
      const toServiceSikll = () => {
        uni.navigateTo({
          url: "/pages/serviceSkill/index"
        });
      };
      const toServiceRange = () => {
        uni.navigateTo({
          url: "/pages/serviceRange/index"
        });
      };
      const toIndex = () => {
        if (!settingsStatus.value) {
          return;
        } else {
          uni.redirectTo({
            url: "/pages/index/index"
          });
        }
      };
      return (_ctx, _cache) => {
        const _component_uni_nav_bar = resolveEasycom(vue.resolveDynamicComponent("uni-nav-bar"), __easycom_0$2);
        return vue.openBlock(), vue.createElementBlock("view", { class: "setting" }, [
          vue.createCommentVNode(" 手机状态栏 "),
          vue.createVNode(_component_uni_nav_bar, { statusBar: "true" }),
          vue.createCommentVNode(" 引导词 "),
          vue.createElementVNode("view", { class: "guide" }, [
            vue.createElementVNode("image", { src: "/static/new/img_tishi@2x.png" }),
            vue.createCommentVNode(' <view class="content">亲，完成以下4步设置，方可接单哦～</view> ')
          ]),
          vue.createCommentVNode(" 具体步骤 "),
          vue.createElementVNode("view", { class: "step" }, [
            vue.createElementVNode("view", { class: "stepOne stepItem" }, [
              vue.createElementVNode("image", { src: "/static/new/stepOne.png" }),
              vue.createElementVNode("view", { class: "stepBox" }, [
                vue.createElementVNode("view", { class: "stepContent" }, [
                  vue.createElementVNode("view", { class: "setpTitle" }, "实名认证"),
                  vue.createElementVNode("view", { class: "setpIntroduce" }, "平台会保护你的个人信息")
                ]),
                vue.createElementVNode(
                  "view",
                  {
                    class: vue.normalizeClass([
                      "btn",
                      certificationStatus.value === 2 ? "btn-successGreen" : certificationStatus.value === 1 ? "btn-ing" : certificationStatus.value === 3 ? "btn-fail" : "btn-red"
                    ]),
                    onClick: handleToAuth
                  },
                  vue.toDisplayString(certificationStatus.value === 2 ? "已完成" : certificationStatus.value === 1 ? "认证中" : certificationStatus.value === 3 ? "认证失败" : "去认证"),
                  3
                  /* TEXT, CLASS */
                )
              ])
            ]),
            vue.createElementVNode("view", { class: "stepTwo stepItem" }, [
              vue.createElementVNode("image", { src: "/static/new/stepTwo.png" }),
              vue.createElementVNode("view", { class: "stepBox" }, [
                vue.createElementVNode("view", { class: "stepContent" }, [
                  vue.createElementVNode("view", { class: "setpTitle" }, "服务技能设置"),
                  vue.createElementVNode("view", { class: "setpIntroduce" }, "设置完成后，方可为您推荐订单")
                ]),
                vue.createElementVNode(
                  "view",
                  {
                    class: vue.normalizeClass(["btn", serveSkillStatus.value ? "btn-successGreen" : "btn-red"]),
                    onClick: toServiceSikll
                  },
                  vue.toDisplayString(serveSkillStatus.value ? "已完成" : "去设置"),
                  3
                  /* TEXT, CLASS */
                )
              ])
            ]),
            vue.createElementVNode("view", { class: "stepThree stepItem" }, [
              vue.createElementVNode("image", { src: "/static/new/stepThree.png" }),
              vue.createElementVNode("view", { class: "stepBox" }, [
                vue.createElementVNode("view", { class: "stepContent" }, [
                  vue.createElementVNode("view", { class: "setpTitle" }, "服务范围设置"),
                  vue.createElementVNode("view", { class: "setpIntroduce" }, "设置完成后，方可为您推荐订单")
                ]),
                vue.createElementVNode(
                  "view",
                  {
                    class: vue.normalizeClass(["btn", serveRangeStatus.value ? "btn-successGreen" : "btn-red"]),
                    onClick: toServiceRange
                  },
                  vue.toDisplayString(serveRangeStatus.value ? "已完成" : "去设置"),
                  3
                  /* TEXT, CLASS */
                )
              ])
            ]),
            vue.createElementVNode("view", { class: "stepFour stepItem" }, [
              vue.createElementVNode("image", { src: "/static/new/stepFour.png" }),
              vue.createElementVNode("view", { class: "stepBox" }, [
                vue.createElementVNode("view", { class: "stepContent" }, [
                  vue.createElementVNode("view", { class: "setpTitle" }, "接单设置"),
                  vue.createElementVNode("view", { class: "setpIntroduce" }, "开启接单后，方可进行接单哦")
                ]),
                vue.createElementVNode("switch", {
                  color: "#F74347",
                  style: { "transform": "scale(0.7)" },
                  onChange: handlePickUpStatus,
                  checked: canPickUp.value
                }, null, 40, ["checked"])
              ])
            ])
          ]),
          vue.createCommentVNode(" 底部按钮 "),
          vue.createElementVNode(
            "view",
            {
              onClick: toIndex,
              class: vue.normalizeClass(["btn-red footerBtn", settingsStatus.value ? "" : "notSetting"])
            },
            "进入首页",
            2
            /* CLASS */
          )
        ]);
      };
    }
  };
  const PagesSettingIndex = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/pages/setting/index.vue"]]);
  function _typeof(o2) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
      return typeof o3;
    } : function(o3) {
      return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
    }, _typeof(o2);
  }
  function toInteger(dirtyNumber) {
    if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
      return NaN;
    }
    var number = Number(dirtyNumber);
    if (isNaN(number)) {
      return number;
    }
    return number < 0 ? Math.ceil(number) : Math.floor(number);
  }
  function requiredArgs(required, args) {
    if (args.length < required) {
      throw new TypeError(required + " argument" + (required > 1 ? "s" : "") + " required, but only " + args.length + " present");
    }
  }
  function toDate(argument) {
    requiredArgs(1, arguments);
    var argStr = Object.prototype.toString.call(argument);
    if (argument instanceof Date || _typeof(argument) === "object" && argStr === "[object Date]") {
      return new Date(argument.getTime());
    } else if (typeof argument === "number" || argStr === "[object Number]") {
      return new Date(argument);
    } else {
      if ((typeof argument === "string" || argStr === "[object String]") && typeof console !== "undefined") {
        formatAppLog("warn", "at node_modules/_date-fns@2.30.0@date-fns/esm/toDate/index.js:46", "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
        formatAppLog("warn", "at node_modules/_date-fns@2.30.0@date-fns/esm/toDate/index.js:48", new Error().stack);
      }
      return /* @__PURE__ */ new Date(NaN);
    }
  }
  function addMilliseconds(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var timestamp = toDate(dirtyDate).getTime();
    var amount = toInteger(dirtyAmount);
    return new Date(timestamp + amount);
  }
  var defaultOptions = {};
  function getDefaultOptions() {
    return defaultOptions;
  }
  function getTimezoneOffsetInMilliseconds(date) {
    var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
    utcDate.setUTCFullYear(date.getFullYear());
    return date.getTime() - utcDate.getTime();
  }
  function isDate(value) {
    requiredArgs(1, arguments);
    return value instanceof Date || _typeof(value) === "object" && Object.prototype.toString.call(value) === "[object Date]";
  }
  function isValid(dirtyDate) {
    requiredArgs(1, arguments);
    if (!isDate(dirtyDate) && typeof dirtyDate !== "number") {
      return false;
    }
    var date = toDate(dirtyDate);
    return !isNaN(Number(date));
  }
  function subMilliseconds(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var amount = toInteger(dirtyAmount);
    return addMilliseconds(dirtyDate, -amount);
  }
  var MILLISECONDS_IN_DAY = 864e5;
  function getUTCDayOfYear(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var timestamp = date.getTime();
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
    var startOfYearTimestamp = date.getTime();
    var difference = timestamp - startOfYearTimestamp;
    return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
  }
  function startOfUTCISOWeek(dirtyDate) {
    requiredArgs(1, arguments);
    var weekStartsOn = 1;
    var date = toDate(dirtyDate);
    var day = date.getUTCDay();
    var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    date.setUTCDate(date.getUTCDate() - diff);
    date.setUTCHours(0, 0, 0, 0);
    return date;
  }
  function getUTCISOWeekYear(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var year = date.getUTCFullYear();
    var fourthOfJanuaryOfNextYear = /* @__PURE__ */ new Date(0);
    fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
    fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
    var startOfNextYear = startOfUTCISOWeek(fourthOfJanuaryOfNextYear);
    var fourthOfJanuaryOfThisYear = /* @__PURE__ */ new Date(0);
    fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
    fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
    var startOfThisYear = startOfUTCISOWeek(fourthOfJanuaryOfThisYear);
    if (date.getTime() >= startOfNextYear.getTime()) {
      return year + 1;
    } else if (date.getTime() >= startOfThisYear.getTime()) {
      return year;
    } else {
      return year - 1;
    }
  }
  function startOfUTCISOWeekYear(dirtyDate) {
    requiredArgs(1, arguments);
    var year = getUTCISOWeekYear(dirtyDate);
    var fourthOfJanuary = /* @__PURE__ */ new Date(0);
    fourthOfJanuary.setUTCFullYear(year, 0, 4);
    fourthOfJanuary.setUTCHours(0, 0, 0, 0);
    var date = startOfUTCISOWeek(fourthOfJanuary);
    return date;
  }
  var MILLISECONDS_IN_WEEK$1 = 6048e5;
  function getUTCISOWeek(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var diff = startOfUTCISOWeek(date).getTime() - startOfUTCISOWeekYear(date).getTime();
    return Math.round(diff / MILLISECONDS_IN_WEEK$1) + 1;
  }
  function startOfUTCWeek(dirtyDate, options) {
    var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
    requiredArgs(1, arguments);
    var defaultOptions2 = getDefaultOptions();
    var weekStartsOn = toInteger((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
      throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    }
    var date = toDate(dirtyDate);
    var day = date.getUTCDay();
    var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    date.setUTCDate(date.getUTCDate() - diff);
    date.setUTCHours(0, 0, 0, 0);
    return date;
  }
  function getUTCWeekYear(dirtyDate, options) {
    var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var year = date.getUTCFullYear();
    var defaultOptions2 = getDefaultOptions();
    var firstWeekContainsDate = toInteger((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
    if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
      throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    }
    var firstWeekOfNextYear = /* @__PURE__ */ new Date(0);
    firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
    firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
    var startOfNextYear = startOfUTCWeek(firstWeekOfNextYear, options);
    var firstWeekOfThisYear = /* @__PURE__ */ new Date(0);
    firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
    firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
    var startOfThisYear = startOfUTCWeek(firstWeekOfThisYear, options);
    if (date.getTime() >= startOfNextYear.getTime()) {
      return year + 1;
    } else if (date.getTime() >= startOfThisYear.getTime()) {
      return year;
    } else {
      return year - 1;
    }
  }
  function startOfUTCWeekYear(dirtyDate, options) {
    var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
    requiredArgs(1, arguments);
    var defaultOptions2 = getDefaultOptions();
    var firstWeekContainsDate = toInteger((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
    var year = getUTCWeekYear(dirtyDate, options);
    var firstWeek = /* @__PURE__ */ new Date(0);
    firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
    firstWeek.setUTCHours(0, 0, 0, 0);
    var date = startOfUTCWeek(firstWeek, options);
    return date;
  }
  var MILLISECONDS_IN_WEEK = 6048e5;
  function getUTCWeek(dirtyDate, options) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var diff = startOfUTCWeek(date, options).getTime() - startOfUTCWeekYear(date, options).getTime();
    return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
  }
  function addLeadingZeros(number, targetLength) {
    var sign = number < 0 ? "-" : "";
    var output = Math.abs(number).toString();
    while (output.length < targetLength) {
      output = "0" + output;
    }
    return sign + output;
  }
  var formatters$2 = {
    // Year
    y: function y2(date, token) {
      var signedYear = date.getUTCFullYear();
      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return addLeadingZeros(token === "yy" ? year % 100 : year, token.length);
    },
    // Month
    M: function M2(date, token) {
      var month = date.getUTCMonth();
      return token === "M" ? String(month + 1) : addLeadingZeros(month + 1, 2);
    },
    // Day of the month
    d: function d2(date, token) {
      return addLeadingZeros(date.getUTCDate(), token.length);
    },
    // AM or PM
    a: function a2(date, token) {
      var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? "pm" : "am";
      switch (token) {
        case "a":
        case "aa":
          return dayPeriodEnumValue.toUpperCase();
        case "aaa":
          return dayPeriodEnumValue;
        case "aaaaa":
          return dayPeriodEnumValue[0];
        case "aaaa":
        default:
          return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
      }
    },
    // Hour [1-12]
    h: function h2(date, token) {
      return addLeadingZeros(date.getUTCHours() % 12 || 12, token.length);
    },
    // Hour [0-23]
    H: function H2(date, token) {
      return addLeadingZeros(date.getUTCHours(), token.length);
    },
    // Minute
    m: function m2(date, token) {
      return addLeadingZeros(date.getUTCMinutes(), token.length);
    },
    // Second
    s: function s2(date, token) {
      return addLeadingZeros(date.getUTCSeconds(), token.length);
    },
    // Fraction of second
    S: function S2(date, token) {
      var numberOfDigits = token.length;
      var milliseconds = date.getUTCMilliseconds();
      var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
      return addLeadingZeros(fractionalSeconds, token.length);
    }
  };
  const formatters$3 = formatters$2;
  var dayPeriodEnum = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  };
  var formatters = {
    // Era
    G: function G2(date, token, localize2) {
      var era = date.getUTCFullYear() > 0 ? 1 : 0;
      switch (token) {
        case "G":
        case "GG":
        case "GGG":
          return localize2.era(era, {
            width: "abbreviated"
          });
        case "GGGGG":
          return localize2.era(era, {
            width: "narrow"
          });
        case "GGGG":
        default:
          return localize2.era(era, {
            width: "wide"
          });
      }
    },
    // Year
    y: function y2(date, token, localize2) {
      if (token === "yo") {
        var signedYear = date.getUTCFullYear();
        var year = signedYear > 0 ? signedYear : 1 - signedYear;
        return localize2.ordinalNumber(year, {
          unit: "year"
        });
      }
      return formatters$3.y(date, token);
    },
    // Local week-numbering year
    Y: function Y2(date, token, localize2, options) {
      var signedWeekYear = getUTCWeekYear(date, options);
      var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
      if (token === "YY") {
        var twoDigitYear = weekYear % 100;
        return addLeadingZeros(twoDigitYear, 2);
      }
      if (token === "Yo") {
        return localize2.ordinalNumber(weekYear, {
          unit: "year"
        });
      }
      return addLeadingZeros(weekYear, token.length);
    },
    // ISO week-numbering year
    R: function R2(date, token) {
      var isoWeekYear = getUTCISOWeekYear(date);
      return addLeadingZeros(isoWeekYear, token.length);
    },
    // Extended year. This is a single number designating the year of this calendar system.
    // The main difference between `y` and `u` localizers are B.C. years:
    // | Year | `y` | `u` |
    // |------|-----|-----|
    // | AC 1 |   1 |   1 |
    // | BC 1 |   1 |   0 |
    // | BC 2 |   2 |  -1 |
    // Also `yy` always returns the last two digits of a year,
    // while `uu` pads single digit years to 2 characters and returns other years unchanged.
    u: function u2(date, token) {
      var year = date.getUTCFullYear();
      return addLeadingZeros(year, token.length);
    },
    // Quarter
    Q: function Q2(date, token, localize2) {
      var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
      switch (token) {
        case "Q":
          return String(quarter);
        case "QQ":
          return addLeadingZeros(quarter, 2);
        case "Qo":
          return localize2.ordinalNumber(quarter, {
            unit: "quarter"
          });
        case "QQQ":
          return localize2.quarter(quarter, {
            width: "abbreviated",
            context: "formatting"
          });
        case "QQQQQ":
          return localize2.quarter(quarter, {
            width: "narrow",
            context: "formatting"
          });
        case "QQQQ":
        default:
          return localize2.quarter(quarter, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // Stand-alone quarter
    q: function q2(date, token, localize2) {
      var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
      switch (token) {
        case "q":
          return String(quarter);
        case "qq":
          return addLeadingZeros(quarter, 2);
        case "qo":
          return localize2.ordinalNumber(quarter, {
            unit: "quarter"
          });
        case "qqq":
          return localize2.quarter(quarter, {
            width: "abbreviated",
            context: "standalone"
          });
        case "qqqqq":
          return localize2.quarter(quarter, {
            width: "narrow",
            context: "standalone"
          });
        case "qqqq":
        default:
          return localize2.quarter(quarter, {
            width: "wide",
            context: "standalone"
          });
      }
    },
    // Month
    M: function M2(date, token, localize2) {
      var month = date.getUTCMonth();
      switch (token) {
        case "M":
        case "MM":
          return formatters$3.M(date, token);
        case "Mo":
          return localize2.ordinalNumber(month + 1, {
            unit: "month"
          });
        case "MMM":
          return localize2.month(month, {
            width: "abbreviated",
            context: "formatting"
          });
        case "MMMMM":
          return localize2.month(month, {
            width: "narrow",
            context: "formatting"
          });
        case "MMMM":
        default:
          return localize2.month(month, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // Stand-alone month
    L: function L2(date, token, localize2) {
      var month = date.getUTCMonth();
      switch (token) {
        case "L":
          return String(month + 1);
        case "LL":
          return addLeadingZeros(month + 1, 2);
        case "Lo":
          return localize2.ordinalNumber(month + 1, {
            unit: "month"
          });
        case "LLL":
          return localize2.month(month, {
            width: "abbreviated",
            context: "standalone"
          });
        case "LLLLL":
          return localize2.month(month, {
            width: "narrow",
            context: "standalone"
          });
        case "LLLL":
        default:
          return localize2.month(month, {
            width: "wide",
            context: "standalone"
          });
      }
    },
    // Local week of year
    w: function w2(date, token, localize2, options) {
      var week = getUTCWeek(date, options);
      if (token === "wo") {
        return localize2.ordinalNumber(week, {
          unit: "week"
        });
      }
      return addLeadingZeros(week, token.length);
    },
    // ISO week of year
    I: function I2(date, token, localize2) {
      var isoWeek = getUTCISOWeek(date);
      if (token === "Io") {
        return localize2.ordinalNumber(isoWeek, {
          unit: "week"
        });
      }
      return addLeadingZeros(isoWeek, token.length);
    },
    // Day of the month
    d: function d2(date, token, localize2) {
      if (token === "do") {
        return localize2.ordinalNumber(date.getUTCDate(), {
          unit: "date"
        });
      }
      return formatters$3.d(date, token);
    },
    // Day of year
    D: function D2(date, token, localize2) {
      var dayOfYear = getUTCDayOfYear(date);
      if (token === "Do") {
        return localize2.ordinalNumber(dayOfYear, {
          unit: "dayOfYear"
        });
      }
      return addLeadingZeros(dayOfYear, token.length);
    },
    // Day of week
    E: function E2(date, token, localize2) {
      var dayOfWeek = date.getUTCDay();
      switch (token) {
        case "E":
        case "EE":
        case "EEE":
          return localize2.day(dayOfWeek, {
            width: "abbreviated",
            context: "formatting"
          });
        case "EEEEE":
          return localize2.day(dayOfWeek, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEEEE":
          return localize2.day(dayOfWeek, {
            width: "short",
            context: "formatting"
          });
        case "EEEE":
        default:
          return localize2.day(dayOfWeek, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // Local day of week
    e: function e2(date, token, localize2, options) {
      var dayOfWeek = date.getUTCDay();
      var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
      switch (token) {
        case "e":
          return String(localDayOfWeek);
        case "ee":
          return addLeadingZeros(localDayOfWeek, 2);
        case "eo":
          return localize2.ordinalNumber(localDayOfWeek, {
            unit: "day"
          });
        case "eee":
          return localize2.day(dayOfWeek, {
            width: "abbreviated",
            context: "formatting"
          });
        case "eeeee":
          return localize2.day(dayOfWeek, {
            width: "narrow",
            context: "formatting"
          });
        case "eeeeee":
          return localize2.day(dayOfWeek, {
            width: "short",
            context: "formatting"
          });
        case "eeee":
        default:
          return localize2.day(dayOfWeek, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // Stand-alone local day of week
    c: function c2(date, token, localize2, options) {
      var dayOfWeek = date.getUTCDay();
      var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
      switch (token) {
        case "c":
          return String(localDayOfWeek);
        case "cc":
          return addLeadingZeros(localDayOfWeek, token.length);
        case "co":
          return localize2.ordinalNumber(localDayOfWeek, {
            unit: "day"
          });
        case "ccc":
          return localize2.day(dayOfWeek, {
            width: "abbreviated",
            context: "standalone"
          });
        case "ccccc":
          return localize2.day(dayOfWeek, {
            width: "narrow",
            context: "standalone"
          });
        case "cccccc":
          return localize2.day(dayOfWeek, {
            width: "short",
            context: "standalone"
          });
        case "cccc":
        default:
          return localize2.day(dayOfWeek, {
            width: "wide",
            context: "standalone"
          });
      }
    },
    // ISO day of week
    i: function i2(date, token, localize2) {
      var dayOfWeek = date.getUTCDay();
      var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
      switch (token) {
        case "i":
          return String(isoDayOfWeek);
        case "ii":
          return addLeadingZeros(isoDayOfWeek, token.length);
        case "io":
          return localize2.ordinalNumber(isoDayOfWeek, {
            unit: "day"
          });
        case "iii":
          return localize2.day(dayOfWeek, {
            width: "abbreviated",
            context: "formatting"
          });
        case "iiiii":
          return localize2.day(dayOfWeek, {
            width: "narrow",
            context: "formatting"
          });
        case "iiiiii":
          return localize2.day(dayOfWeek, {
            width: "short",
            context: "formatting"
          });
        case "iiii":
        default:
          return localize2.day(dayOfWeek, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // AM or PM
    a: function a2(date, token, localize2) {
      var hours = date.getUTCHours();
      var dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
      switch (token) {
        case "a":
        case "aa":
          return localize2.dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting"
          });
        case "aaa":
          return localize2.dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting"
          }).toLowerCase();
        case "aaaaa":
          return localize2.dayPeriod(dayPeriodEnumValue, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaa":
        default:
          return localize2.dayPeriod(dayPeriodEnumValue, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // AM, PM, midnight, noon
    b: function b2(date, token, localize2) {
      var hours = date.getUTCHours();
      var dayPeriodEnumValue;
      if (hours === 12) {
        dayPeriodEnumValue = dayPeriodEnum.noon;
      } else if (hours === 0) {
        dayPeriodEnumValue = dayPeriodEnum.midnight;
      } else {
        dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
      }
      switch (token) {
        case "b":
        case "bb":
          return localize2.dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting"
          });
        case "bbb":
          return localize2.dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting"
          }).toLowerCase();
        case "bbbbb":
          return localize2.dayPeriod(dayPeriodEnumValue, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbb":
        default:
          return localize2.dayPeriod(dayPeriodEnumValue, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // in the morning, in the afternoon, in the evening, at night
    B: function B2(date, token, localize2) {
      var hours = date.getUTCHours();
      var dayPeriodEnumValue;
      if (hours >= 17) {
        dayPeriodEnumValue = dayPeriodEnum.evening;
      } else if (hours >= 12) {
        dayPeriodEnumValue = dayPeriodEnum.afternoon;
      } else if (hours >= 4) {
        dayPeriodEnumValue = dayPeriodEnum.morning;
      } else {
        dayPeriodEnumValue = dayPeriodEnum.night;
      }
      switch (token) {
        case "B":
        case "BB":
        case "BBB":
          return localize2.dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting"
          });
        case "BBBBB":
          return localize2.dayPeriod(dayPeriodEnumValue, {
            width: "narrow",
            context: "formatting"
          });
        case "BBBB":
        default:
          return localize2.dayPeriod(dayPeriodEnumValue, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // Hour [1-12]
    h: function h2(date, token, localize2) {
      if (token === "ho") {
        var hours = date.getUTCHours() % 12;
        if (hours === 0)
          hours = 12;
        return localize2.ordinalNumber(hours, {
          unit: "hour"
        });
      }
      return formatters$3.h(date, token);
    },
    // Hour [0-23]
    H: function H2(date, token, localize2) {
      if (token === "Ho") {
        return localize2.ordinalNumber(date.getUTCHours(), {
          unit: "hour"
        });
      }
      return formatters$3.H(date, token);
    },
    // Hour [0-11]
    K: function K2(date, token, localize2) {
      var hours = date.getUTCHours() % 12;
      if (token === "Ko") {
        return localize2.ordinalNumber(hours, {
          unit: "hour"
        });
      }
      return addLeadingZeros(hours, token.length);
    },
    // Hour [1-24]
    k: function k(date, token, localize2) {
      var hours = date.getUTCHours();
      if (hours === 0)
        hours = 24;
      if (token === "ko") {
        return localize2.ordinalNumber(hours, {
          unit: "hour"
        });
      }
      return addLeadingZeros(hours, token.length);
    },
    // Minute
    m: function m2(date, token, localize2) {
      if (token === "mo") {
        return localize2.ordinalNumber(date.getUTCMinutes(), {
          unit: "minute"
        });
      }
      return formatters$3.m(date, token);
    },
    // Second
    s: function s2(date, token, localize2) {
      if (token === "so") {
        return localize2.ordinalNumber(date.getUTCSeconds(), {
          unit: "second"
        });
      }
      return formatters$3.s(date, token);
    },
    // Fraction of second
    S: function S2(date, token) {
      return formatters$3.S(date, token);
    },
    // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
    X: function X2(date, token, _localize, options) {
      var originalDate = options._originalDate || date;
      var timezoneOffset = originalDate.getTimezoneOffset();
      if (timezoneOffset === 0) {
        return "Z";
      }
      switch (token) {
        case "X":
          return formatTimezoneWithOptionalMinutes(timezoneOffset);
        case "XXXX":
        case "XX":
          return formatTimezone(timezoneOffset);
        case "XXXXX":
        case "XXX":
        default:
          return formatTimezone(timezoneOffset, ":");
      }
    },
    // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
    x: function x(date, token, _localize, options) {
      var originalDate = options._originalDate || date;
      var timezoneOffset = originalDate.getTimezoneOffset();
      switch (token) {
        case "x":
          return formatTimezoneWithOptionalMinutes(timezoneOffset);
        case "xxxx":
        case "xx":
          return formatTimezone(timezoneOffset);
        case "xxxxx":
        case "xxx":
        default:
          return formatTimezone(timezoneOffset, ":");
      }
    },
    // Timezone (GMT)
    O: function O2(date, token, _localize, options) {
      var originalDate = options._originalDate || date;
      var timezoneOffset = originalDate.getTimezoneOffset();
      switch (token) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + formatTimezoneShort(timezoneOffset, ":");
        case "OOOO":
        default:
          return "GMT" + formatTimezone(timezoneOffset, ":");
      }
    },
    // Timezone (specific non-location)
    z: function z2(date, token, _localize, options) {
      var originalDate = options._originalDate || date;
      var timezoneOffset = originalDate.getTimezoneOffset();
      switch (token) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + formatTimezoneShort(timezoneOffset, ":");
        case "zzzz":
        default:
          return "GMT" + formatTimezone(timezoneOffset, ":");
      }
    },
    // Seconds timestamp
    t: function t2(date, token, _localize, options) {
      var originalDate = options._originalDate || date;
      var timestamp = Math.floor(originalDate.getTime() / 1e3);
      return addLeadingZeros(timestamp, token.length);
    },
    // Milliseconds timestamp
    T: function T2(date, token, _localize, options) {
      var originalDate = options._originalDate || date;
      var timestamp = originalDate.getTime();
      return addLeadingZeros(timestamp, token.length);
    }
  };
  function formatTimezoneShort(offset, dirtyDelimiter) {
    var sign = offset > 0 ? "-" : "+";
    var absOffset = Math.abs(offset);
    var hours = Math.floor(absOffset / 60);
    var minutes = absOffset % 60;
    if (minutes === 0) {
      return sign + String(hours);
    }
    var delimiter = dirtyDelimiter || "";
    return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
  }
  function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
    if (offset % 60 === 0) {
      var sign = offset > 0 ? "-" : "+";
      return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
    }
    return formatTimezone(offset, dirtyDelimiter);
  }
  function formatTimezone(offset, dirtyDelimiter) {
    var delimiter = dirtyDelimiter || "";
    var sign = offset > 0 ? "-" : "+";
    var absOffset = Math.abs(offset);
    var hours = addLeadingZeros(Math.floor(absOffset / 60), 2);
    var minutes = addLeadingZeros(absOffset % 60, 2);
    return sign + hours + delimiter + minutes;
  }
  const formatters$1 = formatters;
  var dateLongFormatter = function dateLongFormatter2(pattern2, formatLong2) {
    switch (pattern2) {
      case "P":
        return formatLong2.date({
          width: "short"
        });
      case "PP":
        return formatLong2.date({
          width: "medium"
        });
      case "PPP":
        return formatLong2.date({
          width: "long"
        });
      case "PPPP":
      default:
        return formatLong2.date({
          width: "full"
        });
    }
  };
  var timeLongFormatter = function timeLongFormatter2(pattern2, formatLong2) {
    switch (pattern2) {
      case "p":
        return formatLong2.time({
          width: "short"
        });
      case "pp":
        return formatLong2.time({
          width: "medium"
        });
      case "ppp":
        return formatLong2.time({
          width: "long"
        });
      case "pppp":
      default:
        return formatLong2.time({
          width: "full"
        });
    }
  };
  var dateTimeLongFormatter = function dateTimeLongFormatter2(pattern2, formatLong2) {
    var matchResult = pattern2.match(/(P+)(p+)?/) || [];
    var datePattern = matchResult[1];
    var timePattern = matchResult[2];
    if (!timePattern) {
      return dateLongFormatter(pattern2, formatLong2);
    }
    var dateTimeFormat;
    switch (datePattern) {
      case "P":
        dateTimeFormat = formatLong2.dateTime({
          width: "short"
        });
        break;
      case "PP":
        dateTimeFormat = formatLong2.dateTime({
          width: "medium"
        });
        break;
      case "PPP":
        dateTimeFormat = formatLong2.dateTime({
          width: "long"
        });
        break;
      case "PPPP":
      default:
        dateTimeFormat = formatLong2.dateTime({
          width: "full"
        });
        break;
    }
    return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong2)).replace("{{time}}", timeLongFormatter(timePattern, formatLong2));
  };
  var longFormatters = {
    p: timeLongFormatter,
    P: dateTimeLongFormatter
  };
  const longFormatters$1 = longFormatters;
  var protectedDayOfYearTokens = ["D", "DD"];
  var protectedWeekYearTokens = ["YY", "YYYY"];
  function isProtectedDayOfYearToken(token) {
    return protectedDayOfYearTokens.indexOf(token) !== -1;
  }
  function isProtectedWeekYearToken(token) {
    return protectedWeekYearTokens.indexOf(token) !== -1;
  }
  function throwProtectedError(token, format2, input) {
    if (token === "YYYY") {
      throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format2, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    } else if (token === "YY") {
      throw new RangeError("Use `yy` instead of `YY` (in `".concat(format2, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    } else if (token === "D") {
      throw new RangeError("Use `d` instead of `D` (in `".concat(format2, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    } else if (token === "DD") {
      throw new RangeError("Use `dd` instead of `DD` (in `".concat(format2, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    }
  }
  var formatDistanceLocale = {
    lessThanXSeconds: {
      one: "less than a second",
      other: "less than {{count}} seconds"
    },
    xSeconds: {
      one: "1 second",
      other: "{{count}} seconds"
    },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
      one: "less than a minute",
      other: "less than {{count}} minutes"
    },
    xMinutes: {
      one: "1 minute",
      other: "{{count}} minutes"
    },
    aboutXHours: {
      one: "about 1 hour",
      other: "about {{count}} hours"
    },
    xHours: {
      one: "1 hour",
      other: "{{count}} hours"
    },
    xDays: {
      one: "1 day",
      other: "{{count}} days"
    },
    aboutXWeeks: {
      one: "about 1 week",
      other: "about {{count}} weeks"
    },
    xWeeks: {
      one: "1 week",
      other: "{{count}} weeks"
    },
    aboutXMonths: {
      one: "about 1 month",
      other: "about {{count}} months"
    },
    xMonths: {
      one: "1 month",
      other: "{{count}} months"
    },
    aboutXYears: {
      one: "about 1 year",
      other: "about {{count}} years"
    },
    xYears: {
      one: "1 year",
      other: "{{count}} years"
    },
    overXYears: {
      one: "over 1 year",
      other: "over {{count}} years"
    },
    almostXYears: {
      one: "almost 1 year",
      other: "almost {{count}} years"
    }
  };
  var formatDistance = function formatDistance2(token, count, options) {
    var result;
    var tokenValue = formatDistanceLocale[token];
    if (typeof tokenValue === "string") {
      result = tokenValue;
    } else if (count === 1) {
      result = tokenValue.one;
    } else {
      result = tokenValue.other.replace("{{count}}", count.toString());
    }
    if (options !== null && options !== void 0 && options.addSuffix) {
      if (options.comparison && options.comparison > 0) {
        return "in " + result;
      } else {
        return result + " ago";
      }
    }
    return result;
  };
  const formatDistance$1 = formatDistance;
  function buildFormatLongFn(args) {
    return function() {
      var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var width = options.width ? String(options.width) : args.defaultWidth;
      var format2 = args.formats[width] || args.formats[args.defaultWidth];
      return format2;
    };
  }
  var dateFormats = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy"
  };
  var timeFormats = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
  };
  var dateTimeFormats = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
  };
  var formatLong = {
    date: buildFormatLongFn({
      formats: dateFormats,
      defaultWidth: "full"
    }),
    time: buildFormatLongFn({
      formats: timeFormats,
      defaultWidth: "full"
    }),
    dateTime: buildFormatLongFn({
      formats: dateTimeFormats,
      defaultWidth: "full"
    })
  };
  const formatLong$1 = formatLong;
  var formatRelativeLocale = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P"
  };
  var formatRelative = function formatRelative2(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
  };
  const formatRelative$1 = formatRelative;
  function buildLocalizeFn(args) {
    return function(dirtyIndex, options) {
      var context = options !== null && options !== void 0 && options.context ? String(options.context) : "standalone";
      var valuesArray;
      if (context === "formatting" && args.formattingValues) {
        var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
        var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
        valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
      } else {
        var _defaultWidth = args.defaultWidth;
        var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;
        valuesArray = args.values[_width] || args.values[_defaultWidth];
      }
      var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
      return valuesArray[index];
    };
  }
  var eraValues = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"]
  };
  var quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
  };
  var monthValues = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  };
  var dayValues = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  };
  var dayPeriodValues = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
    }
  };
  var formattingDayPeriodValues = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night"
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night"
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night"
    }
  };
  var ordinalNumber = function ordinalNumber2(dirtyNumber, _options) {
    var number = Number(dirtyNumber);
    var rem100 = number % 100;
    if (rem100 > 20 || rem100 < 10) {
      switch (rem100 % 10) {
        case 1:
          return number + "st";
        case 2:
          return number + "nd";
        case 3:
          return number + "rd";
      }
    }
    return number + "th";
  };
  var localize = {
    ordinalNumber,
    era: buildLocalizeFn({
      values: eraValues,
      defaultWidth: "wide"
    }),
    quarter: buildLocalizeFn({
      values: quarterValues,
      defaultWidth: "wide",
      argumentCallback: function argumentCallback(quarter) {
        return quarter - 1;
      }
    }),
    month: buildLocalizeFn({
      values: monthValues,
      defaultWidth: "wide"
    }),
    day: buildLocalizeFn({
      values: dayValues,
      defaultWidth: "wide"
    }),
    dayPeriod: buildLocalizeFn({
      values: dayPeriodValues,
      defaultWidth: "wide",
      formattingValues: formattingDayPeriodValues,
      defaultFormattingWidth: "wide"
    })
  };
  const localize$1 = localize;
  function buildMatchFn(args) {
    return function(string) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var width = options.width;
      var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
      var matchResult = string.match(matchPattern);
      if (!matchResult) {
        return null;
      }
      var matchedString = matchResult[0];
      var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
      var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function(pattern2) {
        return pattern2.test(matchedString);
      }) : findKey(parsePatterns, function(pattern2) {
        return pattern2.test(matchedString);
      });
      var value;
      value = args.valueCallback ? args.valueCallback(key) : key;
      value = options.valueCallback ? options.valueCallback(value) : value;
      var rest = string.slice(matchedString.length);
      return {
        value,
        rest
      };
    };
  }
  function findKey(object, predicate) {
    for (var key in object) {
      if (object.hasOwnProperty(key) && predicate(object[key])) {
        return key;
      }
    }
    return void 0;
  }
  function findIndex(array, predicate) {
    for (var key = 0; key < array.length; key++) {
      if (predicate(array[key])) {
        return key;
      }
    }
    return void 0;
  }
  function buildMatchPatternFn(args) {
    return function(string) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var matchResult = string.match(args.matchPattern);
      if (!matchResult)
        return null;
      var matchedString = matchResult[0];
      var parseResult = string.match(args.parsePattern);
      if (!parseResult)
        return null;
      var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
      value = options.valueCallback ? options.valueCallback(value) : value;
      var rest = string.slice(matchedString.length);
      return {
        value,
        rest
      };
    };
  }
  var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
  var parseOrdinalNumberPattern = /\d+/i;
  var matchEraPatterns = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
  };
  var parseEraPatterns = {
    any: [/^b/i, /^(a|c)/i]
  };
  var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
  };
  var parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i]
  };
  var matchMonthPatterns = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
  };
  var parseMonthPatterns = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
  };
  var matchDayPatterns = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
  };
  var parseDayPatterns = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
  };
  var matchDayPeriodPatterns = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
  };
  var parseDayPeriodPatterns = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i
    }
  };
  var match = {
    ordinalNumber: buildMatchPatternFn({
      matchPattern: matchOrdinalNumberPattern,
      parsePattern: parseOrdinalNumberPattern,
      valueCallback: function valueCallback(value) {
        return parseInt(value, 10);
      }
    }),
    era: buildMatchFn({
      matchPatterns: matchEraPatterns,
      defaultMatchWidth: "wide",
      parsePatterns: parseEraPatterns,
      defaultParseWidth: "any"
    }),
    quarter: buildMatchFn({
      matchPatterns: matchQuarterPatterns,
      defaultMatchWidth: "wide",
      parsePatterns: parseQuarterPatterns,
      defaultParseWidth: "any",
      valueCallback: function valueCallback(index) {
        return index + 1;
      }
    }),
    month: buildMatchFn({
      matchPatterns: matchMonthPatterns,
      defaultMatchWidth: "wide",
      parsePatterns: parseMonthPatterns,
      defaultParseWidth: "any"
    }),
    day: buildMatchFn({
      matchPatterns: matchDayPatterns,
      defaultMatchWidth: "wide",
      parsePatterns: parseDayPatterns,
      defaultParseWidth: "any"
    }),
    dayPeriod: buildMatchFn({
      matchPatterns: matchDayPeriodPatterns,
      defaultMatchWidth: "any",
      parsePatterns: parseDayPeriodPatterns,
      defaultParseWidth: "any"
    })
  };
  const match$1 = match;
  var locale = {
    code: "en-US",
    formatDistance: formatDistance$1,
    formatLong: formatLong$1,
    formatRelative: formatRelative$1,
    localize: localize$1,
    match: match$1,
    options: {
      weekStartsOn: 0,
      firstWeekContainsDate: 1
    }
  };
  const defaultLocale = locale;
  var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
  var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
  var escapedStringRegExp = /^'([^]*?)'?$/;
  var doubleQuoteRegExp = /''/g;
  var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
  function format(dirtyDate, dirtyFormatStr, options) {
    var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;
    requiredArgs(2, arguments);
    var formatStr = String(dirtyFormatStr);
    var defaultOptions2 = getDefaultOptions();
    var locale2 = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions2.locale) !== null && _ref !== void 0 ? _ref : defaultLocale;
    var firstWeekContainsDate = toInteger((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions2.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1);
    if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
      throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    }
    var weekStartsOn = toInteger((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions2.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions2.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0);
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
      throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    }
    if (!locale2.localize) {
      throw new RangeError("locale must contain localize property");
    }
    if (!locale2.formatLong) {
      throw new RangeError("locale must contain formatLong property");
    }
    var originalDate = toDate(dirtyDate);
    if (!isValid(originalDate)) {
      throw new RangeError("Invalid time value");
    }
    var timezoneOffset = getTimezoneOffsetInMilliseconds(originalDate);
    var utcDate = subMilliseconds(originalDate, timezoneOffset);
    var formatterOptions = {
      firstWeekContainsDate,
      weekStartsOn,
      locale: locale2,
      _originalDate: originalDate
    };
    var result = formatStr.match(longFormattingTokensRegExp).map(function(substring) {
      var firstCharacter = substring[0];
      if (firstCharacter === "p" || firstCharacter === "P") {
        var longFormatter = longFormatters$1[firstCharacter];
        return longFormatter(substring, locale2.formatLong);
      }
      return substring;
    }).join("").match(formattingTokensRegExp).map(function(substring) {
      if (substring === "''") {
        return "'";
      }
      var firstCharacter = substring[0];
      if (firstCharacter === "'") {
        return cleanEscapedString(substring);
      }
      var formatter = formatters$1[firstCharacter];
      if (formatter) {
        if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && isProtectedWeekYearToken(substring)) {
          throwProtectedError(substring, dirtyFormatStr, String(dirtyDate));
        }
        if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && isProtectedDayOfYearToken(substring)) {
          throwProtectedError(substring, dirtyFormatStr, String(dirtyDate));
        }
        return formatter(utcDate, substring, locale2.localize, formatterOptions);
      }
      if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
        throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
      }
      return substring;
    }).join("");
    return result;
  }
  function cleanEscapedString(input) {
    var matched = input.match(escapedStringRegExp);
    if (!matched) {
      return input;
    }
    return matched[1].replace(doubleQuoteRegExp, "'");
  }
  const orderStatus = [
    {
      value: 1,
      label: "待上门"
    },
    {
      value: 2,
      label: "待完工"
    },
    {
      value: 3,
      label: "已完成"
    },
    {
      value: 4,
      label: "已关闭"
    }
  ];
  const DeliveryData = [
    {
      value: 1,
      label: "待上门"
    },
    {
      value: 2,
      label: "待完工"
    },
    {
      value: 3,
      label: "已完成"
    },
    {
      value: "",
      label: "全部"
    }
  ];
  const cancelData = [
    {
      value: 1,
      label: "服务地址有误"
    },
    {
      value: 2,
      label: "看错地址，无法服务"
    },
    {
      value: 3,
      label: "价格太低，不想服务了"
    },
    {
      value: 4,
      label: "临时有事，无法服务"
    },
    {
      value: 5,
      label: "产品维修复杂，无法服务"
    }
  ];
  const evaluateData = [
    {
      value: "",
      label: "全部"
    },
    {
      value: 3,
      label: "好评"
    },
    {
      value: 2,
      label: "中评"
    },
    {
      value: 1,
      label: "差评"
    }
  ];
  const ImgList = [
    "😀",
    "😃",
    "😄",
    "😁",
    "😅",
    "🙂",
    "😉",
    "😍",
    "😙",
    "😘",
    "🤑",
    "😋",
    "😝",
    "🤪",
    "😜",
    "🤐",
    "😑",
    "🙄",
    "😪",
    "😴",
    "🤢",
    "😫",
    "🙁",
    "😮",
    "😥",
    "😱",
    "😨",
    "😤",
    "😈",
    "😠",
    "🤞",
    "😫"
  ];
  const _sfc_main$q = {
    __name: "homeList",
    props: {
      data: {
        type: Array,
        default: () => []
      }
    },
    emits: ["refresh"],
    setup(__props, { emit }) {
      const props = __props;
      vue.onMounted(() => {
      });
      let list = vue.reactive({
        data: [
          {
            serveTypeName: "保洁服务",
            serveItemName: "空调清洗",
            serveStartTime: "2023-7-28 11:48:00",
            serveAddress: "金燕龙",
            serveFee: "666"
          }
        ]
      });
      const handleTime = (val) => {
        return val ? val.replace(/:\d{2}$/, "") : "";
      };
      const handleToInfo = (item) => {
        uni.navigateTo({
          url: "/pages/orderInfo/index?id=" + item.id + "&type=history"
        });
      };
      const handleCancel = (id) => {
        uni.navigateTo({
          url: "/pages/cancel/index?id=" + id + "&type=list"
        });
      };
      const handleServeRecord = (id, status) => {
        uni.navigateTo({
          url: "/pages/serveRecord/index?status=" + status + "&id=" + id + "&type=list"
        });
      };
      vue.watchEffect(() => {
        list.data = props.data;
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "homeList" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(vue.unref(list).data, (item) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "card",
                key: item.id,
                onClick: ($event) => handleToInfo(item)
              }, [
                vue.createElementVNode("view", { class: "card-content" }, [
                  vue.createElementVNode("image", {
                    class: "leftCardContent",
                    src: item.serveItemImg || "../../../static/new/empty.png"
                  }, null, 8, ["src"]),
                  vue.createElementVNode("view", { class: "rightCardContent" }, [
                    vue.createElementVNode("view", { class: "title" }, [
                      vue.createTextVNode(
                        vue.toDisplayString(item.serveItemName) + " ",
                        1
                        /* TEXT */
                      ),
                      vue.createCommentVNode(" {{ item.id }} ")
                    ]),
                    vue.createElementVNode("view", { class: "serviceTime" }, [
                      vue.createElementVNode(
                        "text",
                        null,
                        vue.toDisplayString(item.serveStatus === 1 ? "预约时间" : item.serveStatus === 2 ? "服务开始时间" : "服务完成时间"),
                        1
                        /* TEXT */
                      ),
                      vue.createElementVNode(
                        "text",
                        { class: "content" },
                        vue.toDisplayString(handleTime(
                          item.serveStatus === 1 ? item.serveStartTime : item.serveStatus === 2 ? item.realServeStartTime : item.realServeEndTime
                        )),
                        1
                        /* TEXT */
                      )
                    ])
                  ]),
                  vue.createElementVNode(
                    "view",
                    {
                      class: vue.normalizeClass(["orderStatus", [3, 4, 5].includes(item.serveStatus) ? "gray" : ""])
                    },
                    vue.toDisplayString(vue.unref(orderStatus).filter((item1) => item1.value === item.serveStatus).length && vue.unref(orderStatus).filter((item1) => item1.value === item.serveStatus)[0].label),
                    3
                    /* TEXT, CLASS */
                  )
                ]),
                vue.createElementVNode("view", { class: "serviceAddress" }, [
                  vue.createElementVNode("view", { class: "address" }, [
                    vue.createElementVNode(
                      "view",
                      { class: "addressContent" },
                      vue.toDisplayString(item.serveAddress),
                      1
                      /* TEXT */
                    )
                  ])
                ]),
                [1, 2].includes(item.serveStatus) ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 0,
                  class: "cardFooter"
                }, [
                  [1].includes(item.serveStatus) ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 0,
                    class: "robBtn btn-gray",
                    onClick: vue.withModifiers(($event) => handleCancel(item.id), ["stop"])
                  }, "取消订单", 8, ["onClick"])) : vue.createCommentVNode("v-if", true),
                  [1, 2].includes(item.serveStatus) ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 1,
                    class: "robBtn btn-red",
                    onClick: vue.withModifiers(($event) => handleServeRecord(item.id, item.serveStatus), ["stop"])
                  }, vue.toDisplayString(item.serveStatus === 1 ? "开始服务" : "完成服务"), 9, ["onClick"])) : vue.createCommentVNode("v-if", true)
                ])) : vue.createCommentVNode("v-if", true)
              ], 8, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          )),
          vue.createCommentVNode(" 加载底部 "),
          vue.createElementVNode("view", { class: "footer" }, "- 已 经 到 底 了 -")
        ]);
      };
    }
  };
  const HomeList$2 = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["__scopeId", "data-v-dee59258"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/pages/history/components/homeList.vue"]]);
  const calendar = {
    /**
     * 农历1900-2100的润大小信息表
     * @Array Of Property
     * @return Hex
     */
    lunarInfo: [
      19416,
      19168,
      42352,
      21717,
      53856,
      55632,
      91476,
      22176,
      39632,
      21970,
      //1900-1909
      19168,
      42422,
      42192,
      53840,
      119381,
      46400,
      54944,
      44450,
      38320,
      84343,
      //1910-1919
      18800,
      42160,
      46261,
      27216,
      27968,
      109396,
      11104,
      38256,
      21234,
      18800,
      //1920-1929
      25958,
      54432,
      59984,
      92821,
      23248,
      11104,
      100067,
      37600,
      116951,
      51536,
      //1930-1939
      54432,
      120998,
      46416,
      22176,
      107956,
      9680,
      37584,
      53938,
      43344,
      46423,
      //1940-1949
      27808,
      46416,
      86869,
      19872,
      42416,
      83315,
      21168,
      43432,
      59728,
      27296,
      //1950-1959
      44710,
      43856,
      19296,
      43748,
      42352,
      21088,
      62051,
      55632,
      23383,
      22176,
      //1960-1969
      38608,
      19925,
      19152,
      42192,
      54484,
      53840,
      54616,
      46400,
      46752,
      103846,
      //1970-1979
      38320,
      18864,
      43380,
      42160,
      45690,
      27216,
      27968,
      44870,
      43872,
      38256,
      //1980-1989
      19189,
      18800,
      25776,
      29859,
      59984,
      27480,
      23232,
      43872,
      38613,
      37600,
      //1990-1999
      51552,
      55636,
      54432,
      55888,
      30034,
      22176,
      43959,
      9680,
      37584,
      51893,
      //2000-2009
      43344,
      46240,
      47780,
      44368,
      21977,
      19360,
      42416,
      86390,
      21168,
      43312,
      //2010-2019
      31060,
      27296,
      44368,
      23378,
      19296,
      42726,
      42208,
      53856,
      60005,
      54576,
      //2020-2029
      23200,
      30371,
      38608,
      19195,
      19152,
      42192,
      118966,
      53840,
      54560,
      56645,
      //2030-2039
      46496,
      22224,
      21938,
      18864,
      42359,
      42160,
      43600,
      111189,
      27936,
      44448,
      //2040-2049
      /**Add By JJonline@JJonline.Cn**/
      84835,
      37744,
      18936,
      18800,
      25776,
      92326,
      59984,
      27424,
      108228,
      43744,
      //2050-2059
      37600,
      53987,
      51552,
      54615,
      54432,
      55888,
      23893,
      22176,
      42704,
      21972,
      //2060-2069
      21200,
      43448,
      43344,
      46240,
      46758,
      44368,
      21920,
      43940,
      42416,
      21168,
      //2070-2079
      45683,
      26928,
      29495,
      27296,
      44368,
      84821,
      19296,
      42352,
      21732,
      53600,
      //2080-2089
      59752,
      54560,
      55968,
      92838,
      22224,
      19168,
      43476,
      41680,
      53584,
      62034,
      //2090-2099
      54560
    ],
    //2100
    /**
     * 公历每个月份的天数普通表
     * @Array Of Property
     * @return Number
     */
    solarMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    /**
     * 天干地支之天干速查表
     * @Array Of Property trans["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"]
     * @return Cn string
     */
    Gan: ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"],
    /**
     * 天干地支之地支速查表
     * @Array Of Property
     * @trans["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"]
     * @return Cn string
     */
    Zhi: ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"],
    /**
     * 天干地支之地支速查表<=>生肖
     * @Array Of Property
     * @trans["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"]
     * @return Cn string
     */
    Animals: ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"],
    /**
     * 阳历节日
     */
    festival: {
      "1-1": { title: "元旦节" },
      "2-14": { title: "情人节" },
      "5-1": { title: "劳动节" },
      "5-4": { title: "青年节" },
      "6-1": { title: "儿童节" },
      "9-10": { title: "教师节" },
      "10-1": { title: "国庆节" },
      "12-25": { title: "圣诞节" },
      "3-8": { title: "妇女节" },
      "3-12": { title: "植树节" },
      "4-1": { title: "愚人节" },
      "5-12": { title: "护士节" },
      "7-1": { title: "建党节" },
      "8-1": { title: "建军节" },
      "12-24": { title: "平安夜" }
    },
    /**
     * 农历节日
     */
    lFestival: {
      "12-30": { title: "除夕" },
      "1-1": { title: "春节" },
      "1-15": { title: "元宵节" },
      "2-2": { title: "龙抬头" },
      "5-5": { title: "端午节" },
      "7-7": { title: "七夕节" },
      "7-15": { title: "中元节" },
      "8-15": { title: "中秋节" },
      "9-9": { title: "重阳节" },
      "10-1": { title: "寒衣节" },
      "10-15": { title: "下元节" },
      "12-8": { title: "腊八节" },
      "12-23": { title: "北方小年" },
      "12-24": { title: "南方小年" }
    },
    /**
     * 返回默认定义的阳历节日
     */
    getFestival() {
      return this.festival;
    },
    /**
     * 返回默认定义的内容里节日
     */
    getLunarFestival() {
      return this.lFestival;
    },
    /**
     *
     * @param param {Object} 按照festival的格式输入数据，设置阳历节日
     */
    setFestival(param = {}) {
      this.festival = param;
    },
    /**
     *
     * @param param {Object} 按照lFestival的格式输入数据，设置农历节日
     */
    setLunarFestival(param = {}) {
      this.lFestival = param;
    },
    /**
     * 24节气速查表
     * @Array Of Property
     * @trans["小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至"]
     * @return Cn string
     */
    solarTerm: ["小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至"],
    /**
     * 1900-2100各年的24节气日期速查表
     * @Array Of Property
     * @return 0x string For splice
     */
    sTermInfo: [
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c3598082c95f8c965cc920f",
      "97bd0b06bdb0722c965ce1cfcc920f",
      "b027097bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c359801ec95f8c965cc920f",
      "97bd0b06bdb0722c965ce1cfcc920f",
      "b027097bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c359801ec95f8c965cc920f",
      "97bd0b06bdb0722c965ce1cfcc920f",
      "b027097bd097c36b0b6fc9274c91aa",
      "9778397bd19801ec9210c965cc920e",
      "97b6b97bd19801ec95f8c965cc920f",
      "97bd09801d98082c95f8e1cfcc920f",
      "97bd097bd097c36b0b6fc9210c8dc2",
      "9778397bd197c36c9210c9274c91aa",
      "97b6b97bd19801ec95f8c965cc920e",
      "97bd09801d98082c95f8e1cfcc920f",
      "97bd097bd097c36b0b6fc9210c8dc2",
      "9778397bd097c36c9210c9274c91aa",
      "97b6b97bd19801ec95f8c965cc920e",
      "97bcf97c3598082c95f8e1cfcc920f",
      "97bd097bd097c36b0b6fc9210c8dc2",
      "9778397bd097c36c9210c9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c3598082c95f8c965cc920f",
      "97bd097bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c3598082c95f8c965cc920f",
      "97bd097bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c359801ec95f8c965cc920f",
      "97bd097bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c359801ec95f8c965cc920f",
      "97bd097bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c359801ec95f8c965cc920f",
      "97bd097bd07f595b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9210c8dc2",
      "9778397bd19801ec9210c9274c920e",
      "97b6b97bd19801ec95f8c965cc920f",
      "97bd07f5307f595b0b0bc920fb0722",
      "7f0e397bd097c36b0b6fc9210c8dc2",
      "9778397bd097c36c9210c9274c920e",
      "97b6b97bd19801ec95f8c965cc920f",
      "97bd07f5307f595b0b0bc920fb0722",
      "7f0e397bd097c36b0b6fc9210c8dc2",
      "9778397bd097c36c9210c9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bd07f1487f595b0b0bc920fb0722",
      "7f0e397bd097c36b0b6fc9210c8dc2",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf7f1487f595b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf7f1487f595b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf7f1487f531b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf7f1487f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c9274c920e",
      "97bcf7f0e47f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "9778397bd097c36b0b6fc9210c91aa",
      "97b6b97bd197c36c9210c9274c920e",
      "97bcf7f0e47f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "9778397bd097c36b0b6fc9210c8dc2",
      "9778397bd097c36c9210c9274c920e",
      "97b6b7f0e47f531b0723b0b6fb0722",
      "7f0e37f5307f595b0b0bc920fb0722",
      "7f0e397bd097c36b0b6fc9210c8dc2",
      "9778397bd097c36b0b70c9274c91aa",
      "97b6b7f0e47f531b0723b0b6fb0721",
      "7f0e37f1487f595b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc9210c8dc2",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f595b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b7f0e47f531b0723b0787b0721",
      "7f0e27f0e47f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "9778397bd097c36b0b6fc9210c91aa",
      "97b6b7f0e47f149b0723b0787b0721",
      "7f0e27f0e47f531b0723b0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "9778397bd097c36b0b6fc9210c8dc2",
      "977837f0e37f149b0723b0787b0721",
      "7f07e7f0e47f531b0723b0b6fb0722",
      "7f0e37f5307f595b0b0bc920fb0722",
      "7f0e397bd097c35b0b6fc9210c8dc2",
      "977837f0e37f14998082b0787b0721",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e37f1487f595b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc9210c8dc2",
      "977837f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "977837f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "977837f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "977837f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "977837f0e37f14998082b0787b06bd",
      "7f07e7f0e47f149b0723b0787b0721",
      "7f0e27f0e47f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "977837f0e37f14998082b0723b06bd",
      "7f07e7f0e37f149b0723b0787b0721",
      "7f0e27f0e47f531b0723b0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "977837f0e37f14898082b0723b02d5",
      "7ec967f0e37f14998082b0787b0721",
      "7f07e7f0e47f531b0723b0b6fb0722",
      "7f0e37f1487f595b0b0bb0b6fb0722",
      "7f0e37f0e37f14898082b0723b02d5",
      "7ec967f0e37f14998082b0787b0721",
      "7f07e7f0e47f531b0723b0b6fb0722",
      "7f0e37f1487f531b0b0bb0b6fb0722",
      "7f0e37f0e37f14898082b0723b02d5",
      "7ec967f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e37f1487f531b0b0bb0b6fb0722",
      "7f0e37f0e37f14898082b072297c35",
      "7ec967f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e37f0e37f14898082b072297c35",
      "7ec967f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e37f0e366aa89801eb072297c35",
      "7ec967f0e37f14998082b0787b06bd",
      "7f07e7f0e47f149b0723b0787b0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e37f0e366aa89801eb072297c35",
      "7ec967f0e37f14998082b0723b06bd",
      "7f07e7f0e47f149b0723b0787b0721",
      "7f0e27f0e47f531b0723b0b6fb0722",
      "7f0e37f0e366aa89801eb072297c35",
      "7ec967f0e37f14998082b0723b06bd",
      "7f07e7f0e37f14998083b0787b0721",
      "7f0e27f0e47f531b0723b0b6fb0722",
      "7f0e37f0e366aa89801eb072297c35",
      "7ec967f0e37f14898082b0723b02d5",
      "7f07e7f0e37f14998082b0787b0721",
      "7f07e7f0e47f531b0723b0b6fb0722",
      "7f0e36665b66aa89801e9808297c35",
      "665f67f0e37f14898082b0723b02d5",
      "7ec967f0e37f14998082b0787b0721",
      "7f07e7f0e47f531b0723b0b6fb0722",
      "7f0e36665b66a449801e9808297c35",
      "665f67f0e37f14898082b0723b02d5",
      "7ec967f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e36665b66a449801e9808297c35",
      "665f67f0e37f14898082b072297c35",
      "7ec967f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e26665b66a449801e9808297c35",
      "665f67f0e37f1489801eb072297c35",
      "7ec967f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722"
    ],
    /**
     * 数字转中文速查表
     * @Array Of Property
     * @trans ['日','一','二','三','四','五','六','七','八','九','十']
     * @return Cn string
     */
    nStr1: ["日", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"],
    /**
     * 日期转农历称呼速查表
     * @Array Of Property
     * @trans ['初','十','廿','卅']
     * @return Cn string
     */
    nStr2: ["初", "十", "廿", "卅"],
    /**
     * 月份转农历称呼速查表
     * @Array Of Property
     * @trans ['正','一','二','三','四','五','六','七','八','九','十','冬','腊']
     * @return Cn string
     */
    nStr3: ["正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊"],
    /**
     * 返回农历y年一整年的总天数
     * @param y lunar Year
     * @return Number
     * @eg:var count = calendar.lYearDays(1987) ;//count=387
     */
    lYearDays: function(y2) {
      let i2, sum = 348;
      for (i2 = 32768; i2 > 8; i2 >>= 1) {
        sum += this.lunarInfo[y2 - 1900] & i2 ? 1 : 0;
      }
      return sum + this.leapDays(y2);
    },
    /**
     * 返回农历y年闰月是哪个月；若y年没有闰月 则返回0
     * @param y lunar Year
     * @return Number (0-12)
     * @eg:var leapMonth = calendar.leapMonth(1987) ;//leapMonth=6
     */
    leapMonth: function(y2) {
      return this.lunarInfo[y2 - 1900] & 15;
    },
    /**
     * 返回农历y年闰月的天数 若该年没有闰月则返回0
     * @param y lunar Year
     * @return Number (0、29、30)
     * @eg:var leapMonthDay = calendar.leapDays(1987) ;//leapMonthDay=29
     */
    leapDays: function(y2) {
      if (this.leapMonth(y2)) {
        return this.lunarInfo[y2 - 1900] & 65536 ? 30 : 29;
      }
      return 0;
    },
    /**
     * 返回农历y年m月（非闰月）的总天数，计算m为闰月时的天数请使用leapDays方法
     * @param y lunar Year
     * @param m lunar Month
     * @return Number (-1、29、30)
     * @eg:var MonthDay = calendar.monthDays(1987,9) ;//MonthDay=29
     */
    monthDays: function(y2, m2) {
      if (m2 > 12 || m2 < 1) {
        return -1;
      }
      return this.lunarInfo[y2 - 1900] & 65536 >> m2 ? 30 : 29;
    },
    /**
     * 返回公历(!)y年m月的天数
     * @param y solar Year
     * @param m solar Month
     * @return Number (-1、28、29、30、31)
     * @eg:var solarMonthDay = calendar.leapDays(1987) ;//solarMonthDay=30
     */
    solarDays: function(y2, m2) {
      if (m2 > 12 || m2 < 1) {
        return -1;
      }
      const ms2 = m2 - 1;
      if (ms2 === 1) {
        return y2 % 4 === 0 && y2 % 100 !== 0 || y2 % 400 === 0 ? 29 : 28;
      } else {
        return this.solarMonth[ms2];
      }
    },
    /**
     * 农历年份转换为干支纪年
     * @param  lYear 农历年的年份数
     * @return Cn string
     */
    toGanZhiYear: function(lYear) {
      var ganKey = (lYear - 3) % 10;
      var zhiKey = (lYear - 3) % 12;
      if (ganKey === 0)
        ganKey = 10;
      if (zhiKey === 0)
        zhiKey = 12;
      return this.Gan[ganKey - 1] + this.Zhi[zhiKey - 1];
    },
    /**
     * 公历月、日判断所属星座
     * @param  cMonth [description]
     * @param  cDay [description]
     * @return Cn string
     */
    toAstro: function(cMonth, cDay) {
      const s2 = "魔羯水瓶双鱼白羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯";
      const arr = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22];
      return s2.substr(cMonth * 2 - (cDay < arr[cMonth - 1] ? 2 : 0), 2) + "座";
    },
    /**
     * 传入offset偏移量返回干支
     * @param offset 相对甲子的偏移量
     * @return Cn string
     */
    toGanZhi: function(offset) {
      return this.Gan[offset % 10] + this.Zhi[offset % 12];
    },
    /**
     * 传入公历(!)y年获得该年第n个节气的公历日期
     * @param y y公历年(1900-2100)
     * @param n n二十四节气中的第几个节气(1~24)；从n=1(小寒)算起
     * @return day Number
     * @eg:var _24 = calendar.getTerm(1987,3) ;//_24=4;意即1987年2月4日立春
     */
    getTerm: function(y2, n2) {
      if (y2 < 1900 || y2 > 2100 || n2 < 1 || n2 > 24) {
        return -1;
      }
      const _table = this.sTermInfo[y2 - 1900];
      const _calcDay = [];
      for (let index = 0; index < _table.length; index += 5) {
        const chunk = parseInt("0x" + _table.substr(index, 5)).toString();
        _calcDay.push(
          chunk[0],
          chunk.substr(1, 2),
          chunk[3],
          chunk.substr(4, 2)
        );
      }
      return parseInt(_calcDay[n2 - 1]);
    },
    /**
      * 农历年份数字称呼速查表
      * @Array Of Property
      * @trans ['零','一','二','三','四','五','六','七','八','九','十']
      * @return Cn string
      */
    nStr4: ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"],
    /**
     * 
     * @param y lunar year 
     * @returns Cn string
     * @eg: var cnYear = calendar,toChinaYear(1900); // cnYear=""
     */
    toChinaYear: function(y2) {
      let year = y2.toString().split("");
      return `${this.nStr4[year[0]]}${this.nStr4[year[1]]}${this.nStr4[year[2]]}${this.nStr4[year[3]]}`;
    },
    /**
     * 传入农历数字月份返回汉语通俗表示法
     * @param m lunar month
     * @return Cn string
     * @eg:var cnMonth = calendar.toChinaMonth(12) ;//cnMonth='腊月'
     */
    toChinaMonth: function(m2) {
      if (m2 > 12 || m2 < 1) {
        return -1;
      }
      let s2 = this.nStr3[m2 - 1];
      s2 += "月";
      return s2;
    },
    /**
     * 传入农历日期数字返回汉字表示法
     * @param d lunar day
     * @return Cn string
     * @eg:var cnDay = calendar.toChinaDay(21) ;//cnMonth='廿一'
     */
    toChinaDay: function(d2) {
      let s2;
      switch (d2) {
        case 10:
          s2 = "初十";
          break;
        case 20:
          s2 = "二十";
          break;
        case 30:
          s2 = "三十";
          break;
        default:
          s2 = this.nStr2[Math.floor(d2 / 10)];
          s2 += this.nStr1[d2 % 10];
      }
      return s2;
    },
    /**
     * 年份转生肖[!仅能大致转换] => 精确划分生肖分界线是“立春”
     * @param y year
     * @return Cn string
     * @eg:var animal = calendar.getAnimal(1987) ;//animal='兔'
     */
    getAnimal: function(y2) {
      return this.Animals[(y2 - 4) % 12];
    },
    /**
     * 传入阳历年月日获得详细的公历、农历object信息 <=>JSON
     * !important! 公历参数区间1900.1.31~2100.12.31
     * @param yPara  solar year
     * @param mPara  solar month
     * @param dPara  solar day
     * @return JSON object
     * @eg:__f__('log','at components/gscosmosDateSelect/calendar.js:455',calendar.solar2lunar(1987,11,01));
     */
    solar2lunar: function(yPara, mPara, dPara) {
      let y2 = parseInt(yPara);
      let m2 = parseInt(mPara);
      let d2 = parseInt(dPara);
      if (y2 < 1900 || y2 > 2100) {
        return -1;
      }
      if (y2 === 1900 && m2 === 1 && d2 < 31) {
        return -1;
      }
      let objDate;
      if (!y2) {
        objDate = /* @__PURE__ */ new Date();
      } else {
        objDate = new Date(y2, parseInt(m2) - 1, d2);
      }
      let i2, leap = 0, temp = 0;
      y2 = objDate.getFullYear();
      m2 = objDate.getMonth() + 1;
      d2 = objDate.getDate();
      let offset = (Date.UTC(objDate.getFullYear(), objDate.getMonth(), objDate.getDate()) - Date.UTC(1900, 0, 31)) / 864e5;
      for (i2 = 1900; i2 < 2101 && offset > 0; i2++) {
        temp = this.lYearDays(i2);
        offset -= temp;
      }
      if (offset < 0) {
        offset += temp;
        i2--;
      }
      let isTodayObj = /* @__PURE__ */ new Date(), isToday = false;
      if (isTodayObj.getFullYear() === y2 && isTodayObj.getMonth() + 1 === m2 && isTodayObj.getDate() === d2) {
        isToday = true;
      }
      let nWeek = objDate.getDay(), cWeek = this.nStr1[nWeek];
      if (nWeek === 0) {
        nWeek = 7;
      }
      const year = i2;
      leap = this.leapMonth(i2);
      let isLeap = false;
      for (i2 = 1; i2 < 13 && offset > 0; i2++) {
        if (leap > 0 && i2 === leap + 1 && isLeap === false) {
          --i2;
          isLeap = true;
          temp = this.leapDays(year);
        } else {
          temp = this.monthDays(year, i2);
        }
        if (isLeap === true && i2 === leap + 1) {
          isLeap = false;
        }
        offset -= temp;
      }
      if (offset === 0 && leap > 0 && i2 === leap + 1) {
        if (isLeap) {
          isLeap = false;
        } else {
          isLeap = true;
          --i2;
        }
      }
      if (offset < 0) {
        offset += temp;
        --i2;
      }
      const month = i2;
      const day = offset + 1;
      const sm = m2 - 1;
      const gzY = this.toGanZhiYear(year);
      const firstNode = this.getTerm(y2, m2 * 2 - 1);
      const secondNode = this.getTerm(y2, m2 * 2);
      let gzM = this.toGanZhi((y2 - 1900) * 12 + m2 + 11);
      if (d2 >= firstNode) {
        gzM = this.toGanZhi((y2 - 1900) * 12 + m2 + 12);
      }
      let isTerm = false;
      let Term = null;
      if (firstNode === d2) {
        isTerm = true;
        Term = this.solarTerm[m2 * 2 - 2];
      }
      if (secondNode === d2) {
        isTerm = true;
        Term = this.solarTerm[m2 * 2 - 1];
      }
      const dayCyclical = Date.UTC(y2, sm, 1, 0, 0, 0, 0) / 864e5 + 25567 + 10;
      const gzD = this.toGanZhi(dayCyclical + d2 - 1);
      const astro = this.toAstro(m2, d2);
      const solarDate = y2 + "-" + m2 + "-" + d2;
      const lunarDate = year + "-" + month + "-" + day;
      const festival = this.festival;
      const lFestival = this.lFestival;
      const festivalDate = m2 + "-" + d2;
      let lunarFestivalDate = month + "-" + day;
      if (month === 12 && day === 29 && this.monthDays(year, month) === 29) {
        lunarFestivalDate = "12-30";
      }
      return {
        date: solarDate,
        lunarDate,
        festival: festival[festivalDate] ? festival[festivalDate].title : null,
        lunarFestival: lFestival[lunarFestivalDate] ? lFestival[lunarFestivalDate].title : null,
        "lYear": year,
        "lMonth": month,
        "lDay": day,
        "Animal": this.getAnimal(year),
        "IMonthCn": (isLeap ? "闰" : "") + this.toChinaMonth(month),
        "IDayCn": this.toChinaDay(day),
        "cYear": y2,
        "cMonth": m2,
        "cDay": d2,
        "gzYear": gzY,
        "gzMonth": gzM,
        "gzDay": gzD,
        "isToday": isToday,
        "isLeap": isLeap,
        "nWeek": nWeek,
        "ncWeek": "星期" + cWeek,
        "isTerm": isTerm,
        "Term": Term,
        "astro": astro
      };
    },
    /**
     * 传入农历年月日以及传入的月份是否闰月获得详细的公历、农历object信息 <=>JSON
     * !important! 参数区间1900.1.31~2100.12.1
     * @param y  lunar year
     * @param m  lunar month
     * @param d  lunar day
     * @param isLeapMonth  lunar month is leap or not.[如果是农历闰月第四个参数赋值true即可]
     * @return JSON object
     * @eg:__f__('log','at components/gscosmosDateSelect/calendar.js:627',calendar.lunar2solar(1987,9,10));
     */
    lunar2solar: function(y2, m2, d2, isLeapMonth) {
      y2 = parseInt(y2);
      m2 = parseInt(m2);
      d2 = parseInt(d2);
      isLeapMonth = !!isLeapMonth;
      const leapMonth = this.leapMonth(y2);
      this.leapDays(y2);
      if (isLeapMonth && leapMonth !== m2) {
        return -1;
      }
      if (y2 === 2100 && m2 === 12 && d2 > 1 || y2 === 1900 && m2 === 1 && d2 < 31) {
        return -1;
      }
      const day = this.monthDays(y2, m2);
      let _day = day;
      if (isLeapMonth) {
        _day = this.leapDays(y2, m2);
      }
      if (y2 < 1900 || y2 > 2100 || d2 > _day) {
        return -1;
      }
      let offset = 0;
      let i2;
      for (i2 = 1900; i2 < y2; i2++) {
        offset += this.lYearDays(i2);
      }
      let leap = 0, isAdd = false;
      for (i2 = 1; i2 < m2; i2++) {
        leap = this.leapMonth(y2);
        if (!isAdd) {
          if (leap <= i2 && leap > 0) {
            offset += this.leapDays(y2);
            isAdd = true;
          }
        }
        offset += this.monthDays(y2, i2);
      }
      if (isLeapMonth) {
        offset += day;
      }
      const strap = Date.UTC(1900, 1, 30, 0, 0, 0);
      const calObj = new Date((offset + d2 - 31) * 864e5 + strap);
      const cY = calObj.getUTCFullYear();
      const cM = calObj.getUTCMonth() + 1;
      const cD = calObj.getUTCDate();
      return this.solar2lunar(cY, cM, cD);
    }
  };
  const _sfc_main$p = {
    __name: "index",
    props: {
      showCalendar: {
        type: Boolean,
        default: false
      },
      defaultValue: {
        type: Array,
        default: () => [100, 0, 0]
      },
      defaultType: {
        type: String,
        default: () => "solar"
      },
      timeType: {
        type: String
      },
      isSwitch: {
        type: Boolean,
        default: true
      },
      minYear: {
        type: Number,
        default: 1900
      },
      maxYear: {
        type: Number,
        default: 2100
      }
    },
    emits: ["confirm", "cancel"],
    setup(__props, { emit }) {
      const props = __props;
      const showCalendar = vue.ref(false);
      const type = vue.ref("solar");
      const dateInfo = vue.ref({});
      const indicatorStyle = `height: ${Math.round(
        uni.getSystemInfoSync().screenWidth / (750 / 60)
      )}px;`;
      const years = vue.ref([]);
      const months = vue.ref([]);
      const days = vue.ref([]);
      const minYear = 1900;
      const maxYear = 2100;
      const selectValue = vue.ref(props.defaultValue);
      vue.watch(
        () => props.showCalendar,
        (newV, oldV) => {
          showCalendar.value = newV;
          getYear();
          getMonth();
          getDay();
        }
      );
      const getYear = () => {
        years.value = [];
        if (type.value === "solar") {
          for (let i2 = minYear; i2 <= maxYear; i2++) {
            years.value.push(i2);
          }
          getMonth();
          return years;
        }
        if (type.value === "lunar") {
          for (let i2 = minYear; i2 <= maxYear; i2++) {
            years.value.push(calendar.toChinaYear(i2));
          }
          return years;
        }
      };
      const getMonth = () => {
        months.value = [];
        if (type.value === "solar") {
          for (let i2 = 1; i2 <= 12; i2++) {
            months.value.push(i2 + "月");
          }
          return months;
        }
        if (type.value === "lunar") {
          const year = selectValue.value[0] + minYear;
          const leap_month = calendar.leapMonth(year);
          for (let i2 = 1; i2 <= 12; i2++) {
            months.value.push(calendar.toChinaMonth(i2));
            if (i2 == leap_month) {
              months.value.push("闰" + calendar.toChinaMonth(i2));
            }
          }
          return months;
        }
      };
      const getDay = () => {
        days.value = [];
        let year = selectValue.value[0] + minYear;
        let month = selectValue.value[1] + 1;
        for (let i2 = 1; i2 <= calendar.solarDays(year, month); i2++) {
          days.value.push(i2 + "日");
        }
        return days;
      };
      const bindChange = async (e2) => {
        let val = e2.detail.value;
        selectValue.value = await val;
        const year = val[0] + minYear;
        const month = val[1] + 1;
        const day = val[2] + 1;
        setSolarDate(year, month, day);
      };
      const setSolarDate = (y2, m2, d2) => {
        const dt2 = calendar.solar2lunar(y2, m2, d2);
        dateInfo.value = {
          type: "solar",
          Animal: dt2.Animal,
          astro: dt2.astro,
          ncWeek: dt2.ncWeek,
          nWeek: dt2.nWeek,
          gzYear: dt2.gzYear,
          gzMonth: dt2.gzMonth,
          gzDay: dt2.gzDay,
          IMonthCn: dt2.IMonthCn,
          IDayCn: dt2.IDayCn,
          festival: dt2.festival,
          year: dt2.cYear,
          month: dt2.cMonth,
          day: dt2.cDay,
          solarDate: dt2.date,
          lDay: dt2.lDay,
          lMonth: dt2.lMonth,
          lYear: dt2.lYear,
          lunarDate: `${dt2.gzYear}年${dt2.IMonthCn}${dt2.IDayCn}(${dt2.date})`,
          lunarDateNumber: dt2.lunarDate,
          Term: dt2.Term,
          isTerm: dt2.isTerm,
          isLeap: dt2.isLeap,
          isToday: dt2.isToday
        };
      };
      vue.watch(selectValue, (newV, oldV) => {
        getYear();
        getMonth();
        getDay();
      });
      const cancel = () => {
        emit("cancel");
      };
      const confirmFun = () => {
        if (Object.keys(dateInfo.value).length === 0) {
          setSolarDate(
            props.defaultValue[0] + 1900,
            props.defaultValue[1] + 1,
            props.defaultValue[2] + 1
          );
        }
        emit("confirm", dateInfo.value);
      };
      return (_ctx, _cache) => {
        return showCalendar.value ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "mask",
          onClick: _cache[2] || (_cache[2] = vue.withModifiers(($event) => showCalendar.value = false, ["stop"]))
        }, [
          vue.createElementVNode("view", {
            class: "calendar",
            onClick: _cache[1] || (_cache[1] = vue.withModifiers(() => {
            }, ["stop"]))
          }, [
            vue.createElementVNode("view", {
              class: "content",
              onClick: _cache[0] || (_cache[0] = vue.withModifiers(() => {
              }, ["stop"]))
            }, [
              vue.createElementVNode("view", { class: "title" }, [
                vue.createElementVNode("view", { class: "sure" }),
                vue.createElementVNode(
                  "view",
                  { class: "left" },
                  vue.toDisplayString(__props.timeType === "start" ? "开始时间" : "结束时间"),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("view", {
                  class: "close",
                  onClick: cancel
                })
              ]),
              vue.createElementVNode("picker-view", {
                "indicator-style": indicatorStyle,
                value: selectValue.value,
                onChange: bindChange
              }, [
                vue.createElementVNode("picker-view-column", null, [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList(years.value, (item, index) => {
                      return vue.openBlock(), vue.createElementBlock(
                        "view",
                        {
                          class: vue.normalizeClass(["item", selectValue.value[0] === index ? "active" : ""]),
                          key: index
                        },
                        vue.toDisplayString(item) + "年",
                        3
                        /* TEXT, CLASS */
                      );
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ]),
                vue.createElementVNode("picker-view-column", null, [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList(months.value, (item, index) => {
                      return vue.openBlock(), vue.createElementBlock(
                        "view",
                        {
                          class: vue.normalizeClass(["item", selectValue.value[1] === index ? "active" : ""]),
                          key: index
                        },
                        vue.toDisplayString(item),
                        3
                        /* TEXT, CLASS */
                      );
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ]),
                vue.createElementVNode("picker-view-column", null, [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList(days.value, (item, index) => {
                      return vue.openBlock(), vue.createElementBlock(
                        "view",
                        {
                          class: vue.normalizeClass(["item", selectValue.value[2] === index ? "active" : ""]),
                          key: index
                        },
                        vue.toDisplayString(item),
                        3
                        /* TEXT, CLASS */
                      );
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])
              ], 40, ["value"]),
              vue.createElementVNode("view", { class: "pageFoot" }, [
                vue.createElementVNode("button", {
                  onClick: confirmFun,
                  class: "confirm"
                }, "确定")
              ])
            ])
          ])
        ])) : vue.createCommentVNode("v-if", true);
      };
    }
  };
  const gscosmosDateSelect = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__scopeId", "data-v-d9a95d4f"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/components/gscosmosDateSelect/index.vue"]]);
  const _sfc_main$o = {
    __name: "index",
    emits: "",
    setup(__props, { emit }) {
      const popup2 = vue.ref("");
      const isHaveMore = vue.ref(false);
      const icCanScroll = vue.ref(true);
      const homeList = vue.reactive({
        data: []
      });
      const startTime = vue.ref(format((/* @__PURE__ */ new Date()).getTime() - 15552e6, "yyyy-MM-dd"));
      const endTime = vue.ref(format(/* @__PURE__ */ new Date() - 864e5, "yyyy-MM-dd"));
      const dateSelecStarttVisiable = vue.ref(false);
      const dateSelecEndtVisiable = vue.ref(false);
      const scrollTop = vue.ref(0);
      const scrollView = vue.ref(null);
      onShow(() => {
        getListData();
      });
      const handleReset = () => {
        startTime.value = "开始时间";
        endTime.value = "结束时间";
      };
      const searchDataByTime = () => {
        if (startTime.value === "开始时间" || endTime.value === "结束时间") {
          return uni.showToast({
            title: "请选择时间",
            duration: 1e3,
            icon: "none"
          });
        }
        homeList.data = [];
        getListData();
        popup2.value.close();
      };
      const bindStartDateChange = (e2) => {
        if (new Date(endTime.value).getTime() - format(new Date(e2.solarDate), "yyyy-MM-dd").getTime() > 31536e6) {
          uni.showToast({
            title: "时间间隔不能大于365天",
            duration: 1e3,
            icon: "none"
          });
        } else {
          startTime.value = format(new Date(e2.solarDate), "yyyy-MM-dd");
        }
      };
      const bindEndDateChange = (e2) => {
        if (new Date(format(new Date(e2.solarDate), "yyyy-MM-dd")).getTime() - new Date(startTime.value).getTime() > 31536e6) {
          return uni.showToast({
            title: "时间间隔不能大于365天",
            duration: 1e3,
            icon: "none"
          });
        } else {
          endTime.value = format(new Date(e2.solarDate), "yyyy-MM-dd");
        }
      };
      const handleStartTime = () => {
        dateSelecStarttVisiable.value = true;
      };
      const handleEndTime = () => {
        dateSelecEndtVisiable.value = true;
      };
      const goBack = () => {
        uni.navigateBack();
      };
      const handletTime = () => {
        popup2.value.open();
      };
      const handleLoad = () => {
        if (isHaveMore.value) {
          getListData(homeList.data[homeList.data.length - 1].sortTime);
        }
      };
      const getListData = (time) => {
        const params = {
          minSortTime: startTime.value + " 00:00:00",
          maxSortTime: endTime.value + " 23:59:59",
          lastSortTime: time
        };
        if (!time)
          delete params.lastSortTime;
        getHistoryOrder(params).then((res) => {
          if (res.data.length === 10) {
            isHaveMore.value = true;
          } else {
            isHaveMore.value = false;
          }
          homeList.data = homeList.data.concat(res.data);
        });
      };
      const handleClose = () => {
        dateSelecStarttVisiable.value = false;
        dateSelecEndtVisiable.value = false;
      };
      return (_ctx, _cache) => {
        const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_0$3);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode("view", { class: "historyOrder" }, [
              vue.createVNode(vue.unref(gscosmosDateSelect), {
                date: startTime.value,
                minYear: 1900,
                maxYear: 2100,
                timeType: "start",
                defaultValue: [
                  new Date(startTime.value).getFullYear() - 1900,
                  new Date(startTime.value).getMonth(),
                  new Date(startTime.value).getDate() - 1
                ],
                onConfirm: bindStartDateChange,
                showCalendar: dateSelecStarttVisiable.value,
                onCancel: handleClose
              }, null, 8, ["date", "defaultValue", "showCalendar"]),
              vue.createVNode(vue.unref(gscosmosDateSelect), {
                date: endTime.value,
                minYear: 1900,
                maxYear: 2100,
                timeType: "end",
                defaultValue: [
                  new Date(endTime.value).getFullYear() - 1900,
                  new Date(endTime.value).getMonth(),
                  new Date(endTime.value).getDate() - 1
                ],
                onConfirm: bindEndDateChange,
                showCalendar: dateSelecEndtVisiable.value,
                onCancel: handleClose
              }, null, 8, ["date", "defaultValue", "showCalendar"]),
              vue.createCommentVNode(" nav "),
              vue.createVNode(UniNav, {
                title: "历史订单",
                onGoBack: goBack,
                rithtText: "筛选",
                onHandleAll: handletTime
              }),
              vue.createCommentVNode(" 订单列表 "),
              vue.createElementVNode("scroll-view", {
                "scroll-y": icCanScroll.value,
                class: "scrollList",
                onScrolltolower: handleLoad,
                "upper-threshold": 50,
                ref_key: "scrollView",
                ref: scrollView,
                "scroll-top": scrollTop.value
              }, [
                homeList.data.length ? (vue.openBlock(), vue.createBlock(vue.unref(HomeList$2), {
                  key: 0,
                  data: homeList.data
                }, null, 8, ["data"])) : (vue.openBlock(), vue.createBlock(Empty, { key: 1 })),
                vue.createCommentVNode(" 普通弹窗 "),
                vue.createVNode(
                  _component_uni_popup,
                  {
                    ref_key: "popup",
                    ref: popup2,
                    "background-color": "#fff",
                    type: "bottom"
                  },
                  {
                    default: vue.withCtx(() => [
                      vue.createElementVNode("view", { class: "popup-content" }, [
                        vue.createElementVNode("view", { class: "header" }, [
                          vue.createElementVNode("view", { class: "tips" }, "选择时间"),
                          vue.createElementVNode("image", {
                            class: "close",
                            src: "/static/new/btn_nav_close@2x.png",
                            onClick: _cache[0] || (_cache[0] = ($event) => popup2.value.close())
                          })
                        ]),
                        vue.createElementVNode("view", { class: "time" }, [
                          vue.createElementVNode(
                            "view",
                            {
                              class: "startTime",
                              onClick: handleStartTime
                            },
                            vue.toDisplayString(startTime.value || "开始时间"),
                            1
                            /* TEXT */
                          ),
                          vue.createElementVNode("view", { class: "zhi" }, "至"),
                          vue.createElementVNode(
                            "view",
                            {
                              class: "endTime",
                              onClick: handleEndTime
                            },
                            vue.toDisplayString(endTime.value || "结束时间"),
                            1
                            /* TEXT */
                          )
                        ]),
                        vue.createElementVNode("view", { class: "footer" }, [
                          vue.createElementVNode("view", {
                            class: "reset",
                            onClick: handleReset
                          }, "重置"),
                          vue.createElementVNode("view", {
                            class: "confirm",
                            onClick: searchDataByTime
                          }, "确定")
                        ])
                      ])
                    ]),
                    _: 1
                    /* STABLE */
                  },
                  512
                  /* NEED_PATCH */
                )
              ], 40, ["scroll-y", "scroll-top"]),
              vue.createVNode(UniFooter, { pagePath: "pages/pickup/index" })
            ]),
            vue.createCommentVNode(" end ")
          ],
          2112
          /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
        );
      };
    }
  };
  const PagesHistoryIndex = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__scopeId", "data-v-b37acf1c"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/pages/history/index.vue"]]);
  const _sfc_main$n = {
    __name: "homeList",
    props: {
      data: {
        type: Array,
        default: () => []
      }
    },
    emits: ["refresh"],
    setup(__props, { emit }) {
      const props = __props;
      vue.onMounted(() => {
      });
      vue.ref(true);
      let list = vue.reactive({
        data: [
          {
            serveTypeName: "保洁服务",
            serveItemName: "空调清洗",
            serveStartTime: "2023-7-28 11:48:00",
            serveAddress: "金燕龙",
            serveFee: "666"
          }
        ]
      });
      const handleTime = (val) => {
        return val ? val.replace(/:\d{2}$/, "") : "";
      };
      const handleToInfo = (item) => {
        uni.navigateTo({
          url: "/pages/orderInfo/index?id=" + item.id
        });
      };
      const handleServeRecord = (id, status) => {
        uni.navigateTo({
          url: "/pages/serveRecord/index?status=" + status + "&id=" + id + "&type=list"
        });
      };
      vue.watchEffect(() => {
        list.data = props.data;
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "homeList" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(vue.unref(list).data, (item) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "card",
                key: item.id,
                onClick: ($event) => handleToInfo(item)
              }, [
                vue.createElementVNode("view", { class: "card-content" }, [
                  vue.createElementVNode("image", {
                    class: "leftCardContent",
                    src: item.serveItemImg || "../../../static/new/empty.png"
                  }, null, 8, ["src"]),
                  vue.createElementVNode("view", { class: "rightCardContent" }, [
                    vue.createElementVNode(
                      "view",
                      { class: "title" },
                      vue.toDisplayString(item.serveItemName),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode("view", { class: "serviceTime" }, [
                      vue.createElementVNode(
                        "text",
                        null,
                        vue.toDisplayString(item.serveStatus === 1 ? "预约时间" : item.serveStatus === 2 ? "服务开始时间" : "服务完成时间"),
                        1
                        /* TEXT */
                      ),
                      vue.createElementVNode(
                        "text",
                        { class: "content" },
                        vue.toDisplayString(handleTime(
                          item.serveStatus === 1 ? item.serveStartTime : item.serveStatus === 2 ? item.realServeStartTime : item.realServeEndTime
                        )),
                        1
                        /* TEXT */
                      )
                    ])
                  ]),
                  vue.createElementVNode(
                    "view",
                    {
                      class: vue.normalizeClass(["orderStatus", [3, 4, 5].includes(item.serveStatus) ? "gray" : ""])
                    },
                    vue.toDisplayString(vue.unref(orderStatus).filter((item1) => item1.value === item.serveStatus).length && vue.unref(orderStatus).filter((item1) => item1.value === item.serveStatus)[0].label),
                    3
                    /* TEXT, CLASS */
                  )
                ]),
                vue.createElementVNode("view", { class: "serviceAddress" }, [
                  vue.createElementVNode("view", { class: "address" }, [
                    vue.createElementVNode(
                      "view",
                      { class: "addressContent" },
                      vue.toDisplayString(item.serveAddress),
                      1
                      /* TEXT */
                    )
                  ])
                ]),
                [1, 2].includes(item.serveStatus) ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 0,
                  class: "cardFooter"
                }, [
                  [1, 2].includes(item.serveStatus) ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 0,
                    class: "robBtn btn-red",
                    onClick: vue.withModifiers(($event) => handleServeRecord(item.id, item.serveStatus), ["stop"])
                  }, vue.toDisplayString(item.serveStatus === 1 ? "开始服务" : "完成服务"), 9, ["onClick"])) : vue.createCommentVNode("v-if", true)
                ])) : vue.createCommentVNode("v-if", true)
              ], 8, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          )),
          vue.createElementVNode("view", { class: "footer" }, "- 已 经 到 底 了 -")
        ]);
      };
    }
  };
  const HomeList$1 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__scopeId", "data-v-c2937e80"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/pages/pickup/components/homeList.vue"]]);
  const _sfc_main$m = {
    name: "UniBadge",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: "error"
      },
      inverted: {
        type: Boolean,
        default: false
      },
      isDot: {
        type: Boolean,
        default: false
      },
      maxNum: {
        type: Number,
        default: 99
      },
      absolute: {
        type: String,
        default: ""
      },
      offset: {
        type: Array,
        default() {
          return [0, 0];
        }
      },
      text: {
        type: [String, Number],
        default: ""
      },
      size: {
        type: String,
        default: "small"
      },
      customStyle: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    data() {
      return {};
    },
    computed: {
      width() {
        return String(this.text).length * 8 + 12;
      },
      classNames() {
        const {
          inverted,
          type,
          size,
          absolute
        } = this;
        return [
          inverted ? "uni-badge--" + type + "-inverted" : "",
          "uni-badge--" + type,
          "uni-badge--" + size,
          absolute ? "uni-badge--absolute" : ""
        ].join(" ");
      },
      positionStyle() {
        if (!this.absolute)
          return {};
        let w2 = this.width / 2, h2 = 10;
        if (this.isDot) {
          w2 = 5;
          h2 = 5;
        }
        const x = `${-w2 + this.offset[0]}px`;
        const y2 = `${-h2 + this.offset[1]}px`;
        const whiteList = {
          rightTop: {
            right: x,
            top: y2
          },
          rightBottom: {
            right: x,
            bottom: y2
          },
          leftBottom: {
            left: x,
            bottom: y2
          },
          leftTop: {
            left: x,
            top: y2
          }
        };
        const match2 = whiteList[this.absolute];
        return match2 ? match2 : whiteList["rightTop"];
      },
      badgeWidth() {
        return {
          width: `${this.width}px`
        };
      },
      dotStyle() {
        if (!this.isDot)
          return {};
        return {
          width: "10px",
          height: "10px",
          borderRadius: "10px"
        };
      },
      displayValue() {
        const {
          isDot,
          text,
          maxNum
        } = this;
        return isDot ? "" : Number(text) > maxNum ? `${maxNum}+` : text;
      }
    },
    methods: {
      onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-badge--x" }, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
      $props.text ? (vue.openBlock(), vue.createElementBlock(
        "text",
        {
          key: 0,
          class: vue.normalizeClass([$options.classNames, "uni-badge"]),
          style: vue.normalizeStyle([$options.badgeWidth, $options.positionStyle, $props.customStyle, $options.dotStyle]),
          onClick: _cache[0] || (_cache[0] = ($event) => $options.onClick())
        },
        vue.toDisplayString($options.displayValue),
        7
        /* TEXT, CLASS, STYLE */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$6], ["__scopeId", "data-v-c97cb896"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/uni_modules/uni-badge/components/uni-badge/uni-badge.vue"]]);
  const _sfc_main$l = {
    __name: "index",
    props: {
      tabBars: {
        type: Array,
        default: () => []
      },
      statusNum: {
        type: Array,
        default: () => []
      },
      isShowHistory: {
        type: Boolean,
        default: false
      }
    },
    emits: "",
    setup(__props, { expose, emit }) {
      const props = __props;
      const store2 = useStore();
      const statusNum = vue.reactive({
        data: []
      });
      const users = store2.state.user;
      const scrollinto = vue.ref("tab0");
      let tabIndex = vue.ref(users.tabIndex ? users.tabIndex : 0);
      const changeTab = (index) => {
        if (tabIndex.value == index) {
          return;
        }
        tabIndex.value = index;
        emit("getTabIndex", index);
        scrollinto.value = "tab" + index;
      };
      const handleToHistory = () => {
        uni.navigateTo({
          url: "/pages/history/index"
        });
      };
      vue.watchEffect(() => {
        statusNum.data = props.statusNum;
      });
      expose({
        changeTab
      });
      return (_ctx, _cache) => {
        const _component_uni_badge = resolveEasycom(vue.resolveDynamicComponent("uni-badge"), __easycom_0$1);
        return vue.openBlock(), vue.createElementBlock("scroll-view", {
          "scroll-x": "true",
          class: "tabScroll",
          "scroll-into-view": scrollinto.value,
          "scroll-with-animation": true
        }, [
          __props.isShowHistory ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "history"
          }, [
            vue.createElementVNode("view", { class: "title" }, "订单"),
            vue.createElementVNode("view", {
              class: "toHistory",
              onClick: handleToHistory
            }, "历史订单")
          ])) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("view", { class: "order" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(__props.tabBars, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: index,
                  id: "tab" + index,
                  class: vue.normalizeClass(["scroll-row-item", vue.unref(tabIndex) == index ? "badge-act" : ""]),
                  onClick: ($event) => changeTab(index)
                }, [
                  statusNum.data[index] != "0" ? (vue.openBlock(), vue.createBlock(_component_uni_badge, {
                    key: 0,
                    class: "uni-badge-left-margin",
                    text: statusNum.data[index],
                    absolute: "rightTop",
                    offset: [-8, 3],
                    size: "small"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createElementVNode(
                        "view",
                        {
                          class: vue.normalizeClass(vue.unref(tabIndex) == index ? "scroll-row-item-act" : "")
                        },
                        [
                          vue.createElementVNode("text", { class: "line" }),
                          vue.createTextVNode(
                            " " + vue.toDisplayString(item.label),
                            1
                            /* TEXT */
                          )
                        ],
                        2
                        /* CLASS */
                      )
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["text"])) : (vue.openBlock(), vue.createElementBlock(
                    "view",
                    {
                      key: 1,
                      class: vue.normalizeClass(vue.unref(tabIndex) == index ? "scroll-row-item-act" : "")
                    },
                    [
                      vue.createElementVNode("text", { class: "line" }),
                      vue.createTextVNode(
                        " " + vue.toDisplayString(item.label),
                        1
                        /* TEXT */
                      )
                    ],
                    2
                    /* CLASS */
                  ))
                ], 10, ["id", "onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ], 8, ["scroll-into-view"]);
      };
    }
  };
  const UniTab = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/components/uni-tab/index.vue"]]);
  const _sfc_main$k = {
    __name: "index",
    emits: "",
    setup(__props, { emit }) {
      const store2 = useStore();
      const users = store2.state.user;
      const statusNum = vue.reactive({
        data: []
      });
      const isHaveMore = vue.ref(false);
      const tabBars = DeliveryData;
      const icCanScroll = vue.ref(true);
      const homeList = vue.reactive({
        data: []
      });
      const scrollTop = vue.ref(0);
      const scrollView = vue.ref(null);
      onShow(() => {
        getTabIndex(users.tabIndex);
        getOrderStatusNumFunc2();
      });
      const handleLoad = () => {
        if (isHaveMore.value) {
          getListData(
            tabBars[users.tabIndex].value,
            homeList.data[homeList.data.length - 1].sortBy
          );
        }
      };
      const getOrderStatusNumFunc2 = () => {
        getOrderStatusNum().then((res) => {
          statusNum.data = [res.data.noServed, res.data.serving];
        });
      };
      const getListData = (val, id) => {
        getOrder(val, id).then((res) => {
          if (res.data.ordersServes.length === 10) {
            isHaveMore.value = true;
          } else {
            isHaveMore.value = false;
          }
          homeList.data = homeList.data.concat(res.data.ordersServes);
        });
      };
      const getRobOrderList = () => {
      };
      const scrollToTop = () => {
        scrollTop.value = scrollTop.value === 0 ? 1 : 0;
      };
      const getTabIndex = (index) => {
        scrollToTop();
        store2.commit("user/setTabIndex", index);
        homeList.data = [];
        getListData(tabBars[index].value, "");
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode("view", { class: "order" }, [
              vue.createCommentVNode(" 状态筛选 "),
              vue.createVNode(UniTab, {
                tabBars: vue.unref(tabBars),
                onGetTabIndex: getTabIndex,
                statusNum: statusNum.data,
                isShowHistory: ""
              }, null, 8, ["tabBars", "statusNum"]),
              vue.createCommentVNode(" 订单列表 "),
              vue.createElementVNode("scroll-view", {
                "scroll-y": icCanScroll.value,
                class: vue.normalizeClass(["scrollList", homeList.data.length ? "" : "noData"]),
                onScrolltolower: handleLoad,
                "upper-threshold": 50,
                ref_key: "scrollView",
                ref: scrollView,
                "scroll-top": scrollTop.value
              }, [
                homeList.data.length ? (vue.openBlock(), vue.createBlock(vue.unref(HomeList$1), {
                  key: 0,
                  data: homeList.data,
                  onRefresh: getRobOrderList
                }, null, 8, ["data"])) : (vue.openBlock(), vue.createBlock(Empty, { key: 1 }))
              ], 42, ["scroll-y", "scroll-top"]),
              vue.createVNode(UniFooter, { pagePath: "pages/pickup/index" })
            ]),
            vue.createCommentVNode(" end ")
          ],
          2112
          /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
        );
      };
    }
  };
  const PagesPickupIndex = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-003520e8"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/pages/pickup/index.vue"]]);
  const popup = {
    data() {
      return {};
    },
    created() {
      this.popup = this.getParent();
    },
    methods: {
      /**
       * 获取父元素实例
       */
      getParent(name = "uniPopup") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      }
    }
  };
  const isObject = (val) => val !== null && typeof val === "object";
  const defaultDelimiters = ["{", "}"];
  class BaseFormatter {
    constructor() {
      this._caches = /* @__PURE__ */ Object.create(null);
    }
    interpolate(message, values, delimiters = defaultDelimiters) {
      if (!values) {
        return [message];
      }
      let tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }
  const RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
  const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
  function parse(format2, [startDelimiter, endDelimiter]) {
    const tokens = [];
    let position = 0;
    let text = "";
    while (position < format2.length) {
      let char = format2[position++];
      if (char === startDelimiter) {
        if (text) {
          tokens.push({ type: "text", value: text });
        }
        text = "";
        let sub = "";
        char = format2[position++];
        while (char !== void 0 && char !== endDelimiter) {
          sub += char;
          char = format2[position++];
        }
        const isClosed = char === endDelimiter;
        const type = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
        tokens.push({ value: sub, type });
      } else {
        text += char;
      }
    }
    text && tokens.push({ type: "text", value: text });
    return tokens;
  }
  function compile(tokens, values) {
    const compiled = [];
    let index = 0;
    const mode = Array.isArray(values) ? "list" : isObject(values) ? "named" : "unknown";
    if (mode === "unknown") {
      return compiled;
    }
    while (index < tokens.length) {
      const token = tokens[index];
      switch (token.type) {
        case "text":
          compiled.push(token.value);
          break;
        case "list":
          compiled.push(values[parseInt(token.value, 10)]);
          break;
        case "named":
          if (mode === "named") {
            compiled.push(values[token.value]);
          } else {
            {
              console.warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`);
            }
          }
          break;
        case "unknown":
          {
            console.warn(`Detect 'unknown' type of token!`);
          }
          break;
      }
      index++;
    }
    return compiled;
  }
  const LOCALE_ZH_HANS = "zh-Hans";
  const LOCALE_ZH_HANT = "zh-Hant";
  const LOCALE_EN = "en";
  const LOCALE_FR = "fr";
  const LOCALE_ES = "es";
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  const hasOwn = (val, key) => hasOwnProperty.call(val, key);
  const defaultFormatter = new BaseFormatter();
  function include(str, parts) {
    return !!parts.find((part) => str.indexOf(part) !== -1);
  }
  function startsWith(str, parts) {
    return parts.find((part) => str.indexOf(part) === 0);
  }
  function normalizeLocale(locale2, messages2) {
    if (!locale2) {
      return;
    }
    locale2 = locale2.trim().replace(/_/g, "-");
    if (messages2 && messages2[locale2]) {
      return locale2;
    }
    locale2 = locale2.toLowerCase();
    if (locale2 === "chinese") {
      return LOCALE_ZH_HANS;
    }
    if (locale2.indexOf("zh") === 0) {
      if (locale2.indexOf("-hans") > -1) {
        return LOCALE_ZH_HANS;
      }
      if (locale2.indexOf("-hant") > -1) {
        return LOCALE_ZH_HANT;
      }
      if (include(locale2, ["-tw", "-hk", "-mo", "-cht"])) {
        return LOCALE_ZH_HANT;
      }
      return LOCALE_ZH_HANS;
    }
    let locales = [LOCALE_EN, LOCALE_FR, LOCALE_ES];
    if (messages2 && Object.keys(messages2).length > 0) {
      locales = Object.keys(messages2);
    }
    const lang = startsWith(locale2, locales);
    if (lang) {
      return lang;
    }
  }
  class I18n {
    constructor({ locale: locale2, fallbackLocale, messages: messages2, watcher, formater }) {
      this.locale = LOCALE_EN;
      this.fallbackLocale = LOCALE_EN;
      this.message = {};
      this.messages = {};
      this.watchers = [];
      if (fallbackLocale) {
        this.fallbackLocale = fallbackLocale;
      }
      this.formater = formater || defaultFormatter;
      this.messages = messages2 || {};
      this.setLocale(locale2 || LOCALE_EN);
      if (watcher) {
        this.watchLocale(watcher);
      }
    }
    setLocale(locale2) {
      const oldLocale = this.locale;
      this.locale = normalizeLocale(locale2, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      if (oldLocale !== this.locale) {
        this.watchers.forEach((watcher) => {
          watcher(this.locale, oldLocale);
        });
      }
    }
    getLocale() {
      return this.locale;
    }
    watchLocale(fn) {
      const index = this.watchers.push(fn) - 1;
      return () => {
        this.watchers.splice(index, 1);
      };
    }
    add(locale2, message, override = true) {
      const curMessages = this.messages[locale2];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach((key) => {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale2] = message;
      }
    }
    f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join("");
    }
    t(key, locale2, values) {
      let message = this.message;
      if (typeof locale2 === "string") {
        locale2 = normalizeLocale(locale2, this.messages);
        locale2 && (message = this.messages[locale2]);
      } else {
        values = locale2;
      }
      if (!hasOwn(message, key)) {
        console.warn(`Cannot translate the value of keypath ${key}. Use the value of keypath as default.`);
        return key;
      }
      return this.formater.interpolate(message[key], values).join("");
    }
  }
  function watchAppLocale(appVm, i18n) {
    if (appVm.$watchLocale) {
      appVm.$watchLocale((newLocale) => {
        i18n.setLocale(newLocale);
      });
    } else {
      appVm.$watch(() => appVm.$locale, (newLocale) => {
        i18n.setLocale(newLocale);
      });
    }
  }
  function getDefaultLocale() {
    if (typeof uni !== "undefined" && uni.getLocale) {
      return uni.getLocale();
    }
    if (typeof global !== "undefined" && global.getLocale) {
      return global.getLocale();
    }
    return LOCALE_EN;
  }
  function initVueI18n(locale2, messages2 = {}, fallbackLocale, watcher) {
    if (typeof locale2 !== "string") {
      [locale2, messages2] = [
        messages2,
        locale2
      ];
    }
    if (typeof locale2 !== "string") {
      locale2 = getDefaultLocale();
    }
    if (typeof fallbackLocale !== "string") {
      fallbackLocale = typeof __uniConfig !== "undefined" && __uniConfig.fallbackLocale || LOCALE_EN;
    }
    const i18n = new I18n({
      locale: locale2,
      fallbackLocale,
      messages: messages2,
      watcher
    });
    let t2 = (key, values) => {
      if (typeof getApp !== "function") {
        t2 = function(key2, values2) {
          return i18n.t(key2, values2);
        };
      } else {
        let isWatchedAppLocale = false;
        t2 = function(key2, values2) {
          const appVm = getApp().$vm;
          if (appVm) {
            appVm.$locale;
            if (!isWatchedAppLocale) {
              isWatchedAppLocale = true;
              watchAppLocale(appVm, i18n);
            }
          }
          return i18n.t(key2, values2);
        };
      }
      return t2(key, values);
    };
    return {
      i18n,
      f(message, values, delimiters) {
        return i18n.f(message, values, delimiters);
      },
      t(key, values) {
        return t2(key, values);
      },
      add(locale3, message, override = true) {
        return i18n.add(locale3, message, override);
      },
      watch(fn) {
        return i18n.watchLocale(fn);
      },
      getLocale() {
        return i18n.getLocale();
      },
      setLocale(newLocale) {
        return i18n.setLocale(newLocale);
      }
    };
  }
  const en = {
    "uni-popup.cancel": "cancel",
    "uni-popup.ok": "ok",
    "uni-popup.placeholder": "pleace enter",
    "uni-popup.title": "Hint",
    "uni-popup.shareTitle": "Share to"
  };
  const zhHans = {
    "uni-popup.cancel": "取消",
    "uni-popup.ok": "确定",
    "uni-popup.placeholder": "请输入",
    "uni-popup.title": "提示",
    "uni-popup.shareTitle": "分享到"
  };
  const zhHant = {
    "uni-popup.cancel": "取消",
    "uni-popup.ok": "確定",
    "uni-popup.placeholder": "請輸入",
    "uni-popup.title": "提示",
    "uni-popup.shareTitle": "分享到"
  };
  const messages = {
    en,
    "zh-Hans": zhHans,
    "zh-Hant": zhHant
  };
  const { t: t$1 } = initVueI18n(messages);
  const _sfc_main$j = {
    name: "uniPopupDialog",
    mixins: [popup],
    emits: ["confirm", "close"],
    props: {
      value: {
        type: [String, Number],
        default: ""
      },
      placeholder: {
        type: [String, Number],
        default: ""
      },
      type: {
        type: String,
        default: "error"
      },
      mode: {
        type: String,
        default: "base"
      },
      title: {
        type: String,
        default: ""
      },
      content: {
        type: String,
        default: ""
      },
      beforeClose: {
        type: Boolean,
        default: false
      },
      cancelText: {
        type: String,
        default: ""
      },
      confirmText: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        dialogType: "error",
        focus: false,
        val: ""
      };
    },
    computed: {
      okText() {
        return this.confirmText || t$1("uni-popup.ok");
      },
      closeText() {
        return this.cancelText || t$1("uni-popup.cancel");
      },
      placeholderText() {
        return this.placeholder || t$1("uni-popup.placeholder");
      },
      titleText() {
        return this.title || t$1("uni-popup.title");
      }
    },
    watch: {
      type(val) {
        this.dialogType = val;
      },
      mode(val) {
        if (val === "input") {
          this.dialogType = "info";
        }
      },
      value(val) {
        this.val = val;
      }
    },
    created() {
      this.popup.disableMask();
      if (this.mode === "input") {
        this.dialogType = "info";
        this.val = this.value;
      } else {
        this.dialogType = this.type;
      }
    },
    mounted() {
      this.focus = true;
    },
    methods: {
      /**
       * 点击确认按钮
       */
      onOk() {
        if (this.mode === "input") {
          this.$emit("confirm", this.val);
        } else {
          this.$emit("confirm");
        }
        if (this.beforeClose)
          return;
        this.popup.close();
      },
      /**
       * 点击取消按钮
       */
      closeDialog() {
        this.$emit("close");
        if (this.beforeClose)
          return;
        this.popup.close();
      },
      close() {
        this.popup.close();
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-popup-dialog" }, [
      vue.createElementVNode("view", { class: "uni-dialog-title" }, [
        vue.createElementVNode(
          "text",
          {
            class: vue.normalizeClass(["uni-dialog-title-text", ["uni-popup__" + $data.dialogType]])
          },
          vue.toDisplayString($options.titleText),
          3
          /* TEXT, CLASS */
        )
      ]),
      $props.mode === "base" ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "uni-dialog-content"
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, () => [
          vue.createElementVNode(
            "text",
            { class: "uni-dialog-content-text" },
            vue.toDisplayString($props.content),
            1
            /* TEXT */
          )
        ], true)
      ])) : (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "uni-dialog-content"
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, () => [
          vue.withDirectives(vue.createElementVNode("input", {
            class: "uni-dialog-input",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.val = $event),
            type: "text",
            placeholder: $options.placeholderText,
            focus: $data.focus
          }, null, 8, ["placeholder", "focus"]), [
            [vue.vModelText, $data.val]
          ])
        ], true)
      ])),
      vue.createElementVNode("view", { class: "uni-dialog-button-group" }, [
        vue.createElementVNode("view", {
          class: "uni-dialog-button",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.closeDialog && $options.closeDialog(...args))
        }, [
          vue.createElementVNode(
            "text",
            { class: "uni-dialog-button-text" },
            vue.toDisplayString($options.closeText),
            1
            /* TEXT */
          )
        ]),
        vue.createElementVNode("view", {
          class: "uni-dialog-button uni-border-left",
          onClick: _cache[2] || (_cache[2] = (...args) => $options.onOk && $options.onOk(...args))
        }, [
          vue.createElementVNode(
            "text",
            { class: "uni-dialog-button-text uni-button-color" },
            vue.toDisplayString($options.okText),
            1
            /* TEXT */
          )
        ])
      ])
    ]);
  }
  const __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$5], ["__scopeId", "data-v-d78c88b7"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog.vue"]]);
  const _sfc_main$i = {
    __name: "index",
    props: {
      tabBars: {
        type: Array,
        default: () => []
      }
    },
    emits: "",
    setup(__props, { emit }) {
      const type = vue.ref("");
      const alertDialog = vue.ref(null);
      const noCancelDialog = vue.ref(null);
      const content2 = vue.ref("");
      const phoneNum = vue.ref("");
      let info = vue.reactive({
        data: {
          serveStatus: 1,
          customerInfo: {
            serveAddress: "北京市昌平区红旗大街124号五星大厦19层109室4号五星大厦19层109室",
            contactsName: "柯胜伦",
            contactsPhone: "17788884444"
          },
          ordersInfo: {
            serveCode: "7364734677776",
            serveStartTime: "2026.5.26 12:30"
          },
          refundInfo: {
            refundReason: "未上门服务",
            refundTime: "2026.5.26 12:30",
            refundAmount: "198"
          },
          cancelInfo: {
            cancelReason: "未上门服务",
            cancelTime: "2026.5.26 12:30"
          },
          serveInfo: {
            serveTypeName: "保洁清洗",
            serveItemName: "日常保洁",
            serveNum: "1",
            serveFee: "198",
            serveBeforeIllustrate: "服务开始说明",
            realServeStartTime: "2022-12-03  12:00",
            serveBeforeImgs: [
              "https://yjy-slwl-oss.oss-cn-hangzhou.aliyuncs.com/61032c27-43eb-49cc-86df-ba8cbeb2c27d.png",
              "https://yjy-slwl-oss.oss-cn-hangzhou.aliyuncs.com/61032c27-43eb-49cc-86df-ba8cbeb2c27d.png",
              "https://yjy-slwl-oss.oss-cn-hangzhou.aliyuncs.com/61032c27-43eb-49cc-86df-ba8cbeb2c27d.png"
            ],
            //服务开始前照片列表
            serveAfterIllustrate: "服务结束说明",
            realServeEndTime: "2022-12-03  12:00",
            serveAfterImgs: [
              "https://yjy-slwl-oss.oss-cn-hangzhou.aliyuncs.com/61032c27-43eb-49cc-86df-ba8cbeb2c27d.png",
              "https://yjy-slwl-oss.oss-cn-hangzhou.aliyuncs.com/61032c27-43eb-49cc-86df-ba8cbeb2c27d.png",
              "https://yjy-slwl-oss.oss-cn-hangzhou.aliyuncs.com/61032c27-43eb-49cc-86df-ba8cbeb2c27d.png"
            ]
            //服务结束照片列表
          }
        }
      });
      onLoad((options) => {
        type.value = options.type;
        getOrderInfoFunc(options.id);
      });
      const openPhone = (val) => {
        phoneNum.value = val;
        alertDialog.value.open();
        close();
      };
      const close = () => {
        noCancelDialog.value.close();
      };
      const handleClose = () => {
        alertDialog.value.close();
      };
      const makePhoneCall = () => {
        uni.makePhoneCall({
          phoneNumber: "400-000-4000"
          //仅为示例，并非真实的电话号码
        });
      };
      const previewImage = (url, imgList) => {
        uni.previewImage({
          current: url,
          // 当前显示的图片链接
          urls: imgList
          // 需要预览的图片链接列表，一般是一个数组
        });
      };
      const getOrderInfoFunc = (id) => {
        if (type.value === "dispatch") {
          getDispatchOrderInfo(id).then((res) => {
            info.data = res.data;
          });
        } else if (type.value === "history") {
          getHistoryOrderInfo(id).then((res) => {
            info.data = res.data;
          });
        } else {
          getOrderInfo(id).then((res) => {
            info.data = res.data;
          });
        }
      };
      const handleServeRecord = (id, status) => {
        uni.navigateTo({
          url: "/pages/serveRecord/index?id=" + id + "&type=info&status" + status
        });
      };
      const handleDelete = (id) => {
        deleteOrder(id).then((res) => {
          uni.showToast({
            title: res.msg || "删除订单成功",
            duration: 1500,
            icon: "none"
          });
          uni.navigateBack();
        }).catch((err) => {
          uni.showToast({
            title: err.msg || "删除订单失败",
            duration: 1500,
            icon: "none"
          });
        });
      };
      const handleCancel = (item) => {
        const now = (/* @__PURE__ */ new Date()).getTime();
        const time = new Date(item.ordersInfo.serveStartTime).getTime() - now;
        if (time < 2 * 60 * 60 * 1e3) {
          content2.value = "当前不可自行取消订单， 如需取消需拨打客服热线 400-000-4000";
          noCancelDialog.value.open();
        } else {
          uni.navigateTo({
            url: "/pages/cancel/index?id=" + item.id + "&type=info"
          });
        }
      };
      const goBack = () => {
        if (type.value === "info") {
          uni.redirectTo({
            url: "/pages/pickup/index"
          });
        } else {
          uni.navigateBack();
        }
      };
      return (_ctx, _cache) => {
        const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_0$3);
        const _component_uni_popup_dialog = resolveEasycom(vue.resolveDynamicComponent("uni-popup-dialog"), __easycom_1$1);
        return vue.openBlock(), vue.createElementBlock("view", { class: "order-info" }, [
          vue.createVNode(UniNav, {
            title: "订单详情",
            onGoBack: goBack
          }),
          vue.createCommentVNode(" 订单状态 "),
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass([
                "serveStatus",
                [1, 2, 3].includes(vue.unref(info).data.serveStatus) || !vue.unref(info).data.serveStatus ? "successStatus" : "failStatus"
              ])
            },
            [
              vue.createElementVNode(
                "view",
                {
                  class: vue.normalizeClass([
                    "status",
                    [1, 2, 3].includes(vue.unref(info).data.serveStatus) || !vue.unref(info).data.serveStatus ? "successStatus" : "failStatus"
                  ])
                },
                vue.toDisplayString(vue.unref(info).data.serveStatus ? vue.unref(orderStatus).filter(
                  (item) => item.value === vue.unref(info).data.serveStatus
                )[0].label : "派单中"),
                3
                /* TEXT, CLASS */
              ),
              vue.unref(info).data.serveStatus === 1 || !vue.unref(info).data.serveStatus ? (vue.openBlock(), vue.createElementBlock(
                "view",
                {
                  key: 0,
                  class: "serveTime"
                },
                " 请在" + vue.toDisplayString(vue.unref(info).data.ordersInfo.serveStartTime ? vue.unref(info).data.ordersInfo.serveStartTime.replace(/:\d{2}$/, "") : "") + "前上门服务 ",
                1
                /* TEXT */
              )) : vue.createCommentVNode("v-if", true)
            ],
            2
            /* CLASS */
          ),
          vue.createCommentVNode(" 客户信息 "),
          vue.createElementVNode("view", { class: "customerInfo card" }, [
            vue.createElementVNode("view", { class: "title" }, "客户信息"),
            vue.createElementVNode("view", { class: "nameAndPhone" }, [
              vue.createElementVNode(
                "text",
                { class: "name" },
                vue.toDisplayString(vue.unref(info).data.customerInfo.contactsName),
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "text",
                {
                  class: "phone",
                  onClick: _cache[0] || (_cache[0] = ($event) => openPhone(vue.unref(info).data.customerInfo.contactsPhone))
                },
                vue.toDisplayString(vue.unref(info).data.customerInfo.contactsPhone),
                1
                /* TEXT */
              )
            ]),
            vue.createElementVNode("view", { class: "address" }, [
              vue.createElementVNode("view", { class: "location" }),
              vue.createElementVNode(
                "view",
                { class: "addressInfo" },
                vue.toDisplayString(vue.unref(info).data.customerInfo.serveAddress),
                1
                /* TEXT */
              )
            ])
          ]),
          vue.createCommentVNode(" 服务信息 "),
          vue.createElementVNode("view", { class: "serveInfo card" }, [
            vue.createElementVNode("view", { class: "title" }, "服务信息"),
            vue.createElementVNode("view", { class: "content" }, [
              vue.createElementVNode("image", {
                class: "serveImg",
                src: vue.unref(info).data.serveInfo.serveItemImg || "../../static/new/empty.png"
              }, null, 8, ["src"]),
              vue.createElementVNode("view", { class: "serveTypeBox" }, [
                vue.createElementVNode(
                  "view",
                  { class: "serveType" },
                  vue.toDisplayString(vue.unref(info).data.serveInfo.serveTypeName),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("view", { class: "serveItem" }, [
                  vue.createElementVNode(
                    "text",
                    null,
                    vue.toDisplayString(vue.unref(info).data.serveInfo.serveItemName),
                    1
                    /* TEXT */
                  ),
                  vue.createTextVNode(" x "),
                  vue.createElementVNode(
                    "text",
                    null,
                    vue.toDisplayString(vue.unref(info).data.serveInfo.serveNum),
                    1
                    /* TEXT */
                  ),
                  vue.createTextVNode(" 小时 ")
                ])
              ])
            ]),
            vue.createElementVNode("view", { class: "fee" }, [
              vue.createTextVNode(" 服务费用"),
              vue.createElementVNode(
                "text",
                { class: "feeText" },
                "￥" + vue.toDisplayString((Number(vue.unref(info).data.ordersInfo.ordersAmount) * 0.997 * 0.3).toFixed(2)),
                1
                /* TEXT */
              )
            ])
          ]),
          vue.createCommentVNode(" 订单信息 "),
          vue.createElementVNode("view", { class: "orderInfo card" }, [
            vue.createElementVNode("view", { class: "title" }, "订单信息"),
            vue.createElementVNode("view", { class: "orderNum info first" }, [
              vue.createElementVNode("text", { class: "label" }, "订单编号"),
              vue.createElementVNode(
                "text",
                { class: "content" },
                vue.toDisplayString(vue.unref(info).data.id),
                1
                /* TEXT */
              )
            ]),
            vue.createElementVNode("view", { class: "orderTime info" }, [
              vue.createElementVNode("text", { class: "label" }, "预约时间"),
              vue.createElementVNode(
                "text",
                { class: "content" },
                vue.toDisplayString(vue.unref(info).data.ordersInfo.serveStartTime ? vue.unref(info).data.ordersInfo.serveStartTime.replace(/:\d{2}$/, "") : ""),
                1
                /* TEXT */
              )
            ])
          ]),
          vue.createCommentVNode(" 取消信息 "),
          vue.unref(info).data.serveStatus === 4 ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "orderInfo card"
          }, [
            vue.createElementVNode("view", { class: "title" }, "取消信息"),
            vue.createElementVNode("view", { class: "orderNum info first" }, [
              vue.createElementVNode("text", { class: "label" }, "取消时间"),
              vue.createElementVNode(
                "text",
                { class: "content" },
                vue.toDisplayString(vue.unref(info).data.cancelInfo.cancelTime),
                1
                /* TEXT */
              )
            ]),
            vue.createElementVNode("view", { class: "orderTime info" }, [
              vue.createElementVNode("text", { class: "label" }, "取消原因"),
              vue.createElementVNode(
                "text",
                { class: "content" },
                vue.toDisplayString(vue.unref(info).data.cancelInfo.cancelReason),
                1
                /* TEXT */
              )
            ])
          ])) : vue.createCommentVNode("v-if", true),
          vue.createCommentVNode(" 服务记录 "),
          [2, 3].includes(vue.unref(info).data.serveStatus) ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "serveRecord card"
          }, [
            vue.createElementVNode("view", { class: "title" }, "服务记录"),
            (vue.unref(info).data.serveStatus === 2 || vue.unref(info).data.serveStatus === 3) && vue.unref(info).data.serveInfo.realServeStartTime ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "serveBefore"
            }, [
              vue.createElementVNode("view", { class: "subTitle" }, "服务前照片"),
              vue.createElementVNode("view", { class: "imgList" }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(vue.unref(info).data.serveInfo.serveBeforeImgs, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock("image", {
                      class: "img",
                      src: item,
                      key: index,
                      onClick: ($event) => previewImage(item, vue.unref(info).data.serveInfo.serveBeforeImgs)
                    }, null, 8, ["src", "onClick"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              vue.createElementVNode("view", { class: "tips" }, [
                vue.createElementVNode("text", null, "补充说明："),
                vue.createElementVNode(
                  "text",
                  null,
                  vue.toDisplayString(vue.unref(info).data.serveInfo.serveBeforeIllustrate),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode(
                "view",
                { class: "time" },
                vue.toDisplayString(vue.unref(info).data.serveInfo.realServeStartTime ? vue.unref(info).data.serveInfo.realServeStartTime.replace(/:\d{2}$/, "") : ""),
                1
                /* TEXT */
              )
            ])) : vue.createCommentVNode("v-if", true),
            vue.unref(info).data.serveStatus === 3 && vue.unref(info).data.serveInfo.realServeEndTime ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "serveAfter"
            }, [
              vue.createElementVNode("view", { class: "subTitle" }, "服务后照片"),
              vue.createElementVNode("view", { class: "imgList" }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(vue.unref(info).data.serveInfo.serveAfterImgs, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock("image", {
                      class: "img",
                      src: item,
                      key: index,
                      onClick: ($event) => previewImage(item, vue.unref(info).data.serveInfo.serveAfterImgs)
                    }, null, 8, ["src", "onClick"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              vue.createElementVNode("view", { class: "tips" }, [
                vue.createElementVNode("text", null, "补充说明："),
                vue.createElementVNode(
                  "text",
                  null,
                  vue.toDisplayString(vue.unref(info).data.serveInfo.serveAfterIllustrate),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode(
                "view",
                { class: "time" },
                vue.toDisplayString(vue.unref(info).data.serveInfo.realServeEndTime ? vue.unref(info).data.serveInfo.realServeEndTime.replace(/:\d{2}$/, "") : ""),
                1
                /* TEXT */
              )
            ])) : vue.createCommentVNode("v-if", true)
          ])) : vue.createCommentVNode("v-if", true),
          [1, 2, 4].includes(vue.unref(info).data.serveStatus) ? (vue.openBlock(), vue.createElementBlock(
            "view",
            {
              key: 2,
              class: vue.normalizeClass(["footer", [4].includes(vue.unref(info).data.serveStatus) ? "end" : ""])
            },
            [
              [1].includes(vue.unref(info).data.serveStatus) ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "btn-gray",
                onClick: _cache[1] || (_cache[1] = ($event) => handleCancel(vue.unref(info).data))
              }, "取消订单")) : vue.createCommentVNode("v-if", true),
              [1, 2].includes(vue.unref(info).data.serveStatus) ? (vue.openBlock(), vue.createElementBlock(
                "view",
                {
                  key: 1,
                  class: "btn-red",
                  onClick: _cache[2] || (_cache[2] = ($event) => handleServeRecord(vue.unref(info).data.id, vue.unref(info).data.serveStatus))
                },
                vue.toDisplayString(vue.unref(info).data.serveStatus === 1 ? "开始服务" : "完成服务"),
                1
                /* TEXT */
              )) : vue.createCommentVNode("v-if", true),
              [4].includes(vue.unref(info).data.serveStatus) ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 2,
                class: "btn-gray",
                onClick: _cache[3] || (_cache[3] = ($event) => handleDelete(vue.unref(info).data.id))
              }, "删除订单")) : vue.createCommentVNode("v-if", true)
            ],
            2
            /* CLASS */
          )) : vue.createCommentVNode("v-if", true),
          vue.createCommentVNode(" 提示窗示例 "),
          vue.createVNode(
            _component_uni_popup,
            {
              ref_key: "alertDialog",
              ref: alertDialog,
              type: "bottom",
              "is-mask-click": false
            },
            {
              default: vue.withCtx(() => [
                vue.createElementVNode(
                  "button",
                  {
                    class: "phone-button",
                    onClick: makePhoneCall
                  },
                  " 呼叫 " + vue.toDisplayString(phoneNum.value || "400-000-4000"),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("button", {
                  class: "phone-button",
                  onClick: handleClose
                }, "取消")
              ]),
              _: 1
              /* STABLE */
            },
            512
            /* NEED_PATCH */
          ),
          vue.createCommentVNode(" 提示窗提示无法取消 "),
          vue.createVNode(
            _component_uni_popup,
            {
              ref_key: "noCancelDialog",
              ref: noCancelDialog,
              "is-mask-click": false,
              class: "freeze"
            },
            {
              default: vue.withCtx(() => [
                vue.createVNode(_component_uni_popup_dialog, {
                  mode: "base",
                  content: "当前不可自行取消订单，如需取消需拨打客服热线400-000-4000",
                  title: " ",
                  animation: false,
                  "before-close": true,
                  confirmText: "联系客服",
                  cancelText: "我知道了",
                  onClose: close,
                  onConfirm: openPhone
                }, {
                  default: vue.withCtx(() => [
                    vue.createElementVNode(
                      "view",
                      { class: "cancelDialog" },
                      vue.toDisplayString(content2.value),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              _: 1
              /* STABLE */
            },
            512
            /* NEED_PATCH */
          )
        ]);
      };
    }
  };
  const PagesOrderInfoIndex = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-c0232ef0"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/pages/orderInfo/index.vue"]]);
  const _sfc_main$h = {
    __name: "index",
    setup(__props) {
      const title = vue.ref("取消原因");
      let cancel = vue.ref(null);
      const orderId = vue.ref("");
      const from = vue.ref("");
      onLoad((options) => {
        orderId.value = options.id;
        from.value = options.type;
        title.value = from.value === "dispatch" ? "拒单原因" : "取消原因";
      });
      const handleCause = (value) => {
        cancel.value = value;
      };
      const handleSubmit = () => {
        if (from.value === "dispatch") {
          handleRejectSubmit();
        } else {
          handleCancelSubmit();
        }
      };
      const handleCancelSubmit = async () => {
        if (cancel.value) {
          uni.showLoading({
            title: "loading"
          });
          const params = {
            id: orderId.value,
            cancelReason: cancelData.filter((item) => item.value === cancel.value)[0].label
          };
          await cancelOrder(params).then((res) => {
            if (res.code === 200) {
              uni.hideLoading();
              uni.showToast({
                title: "取消成功!",
                duration: 1e3,
                icon: "none"
              });
              uni.navigateTo({
                url: "/pages/pickup/index"
              });
              cancel.value = "";
              orderId.value = "";
            } else {
              return uni.showToast({
                title: res.msg || "请求失败",
                duration: 1e3,
                icon: "none"
              });
            }
          }).catch((err) => {
            uni.hideLoading();
            if (err.code == 607) {
              content.value = err.msg || "取消失败";
            } else {
              uni.showToast({
                title: err.msg || "请求失败",
                duration: 1e3,
                icon: "none"
              });
            }
          });
        } else {
          return uni.showToast({
            title: "请选择取消原因!",
            duration: 1e3,
            icon: "none"
          });
        }
      };
      const handleRejectSubmit = async () => {
        if (cancel.value) {
          uni.showLoading({
            title: "loading"
          });
          const params = {
            id: orderId.value,
            rejectReason: cancelData.filter((item) => item.value === cancel.value)[0].label
          };
          await rejectOrder(params).then((res) => {
            if (res.code === 200) {
              uni.hideLoading();
              if (from.value === "list" || from.value === "dispatch") {
                goBack();
              } else {
                uni.navigateTo({
                  url: "/pages/orderInfo/index?id=" + orderId.value + "&type=info"
                });
              }
              cancel.value = "";
              orderId.value = "";
              return uni.showToast({
                title: "拒单成功!",
                duration: 1e3,
                icon: "none"
              });
            }
          }).catch((err) => {
            uni.hideLoading();
            return uni.showToast({
              title: err.msg || "请求失败",
              duration: 1e3,
              icon: "none"
            });
          });
        } else {
          return uni.showToast({
            title: "请选择拒绝原因!",
            duration: 1e3,
            icon: "none"
          });
        }
      };
      const goBack = () => {
        uni.navigateBack();
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "cancel" }, [
          vue.createCommentVNode(" 自定义头部 "),
          vue.createVNode(UniNav, {
            title: title.value,
            onGoBack: goBack
          }, null, 8, ["title"]),
          vue.createCommentVNode(" end "),
          vue.createElementVNode("view", { class: "pageBox" }, [
            vue.createElementVNode("view", { class: "boxCon concelBox" }, [
              vue.createElementVNode("view", { class: "tabConList" }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(vue.unref(cancelData), (item, index) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: "item",
                      key: index
                    }, [
                      vue.createElementVNode(
                        "text",
                        null,
                        vue.toDisplayString(item.label),
                        1
                        /* TEXT */
                      ),
                      vue.createElementVNode("view", { class: "cause" }, [
                        vue.createElementVNode("radio", {
                          color: "#F74347",
                          style: { "transform": "scale(0.7)" },
                          value: "r1",
                          checked: item.value === vue.unref(cancel),
                          onClick: ($event) => handleCause(item.value)
                        }, null, 8, ["checked", "onClick"])
                      ])
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ])
          ]),
          vue.createCommentVNode(" 底部按钮 "),
          vue.createElementVNode("view", { class: "footer" }, [
            vue.createElementVNode("view", {
              class: "btn-red",
              onClick: handleSubmit
            }, "确认提交")
          ])
        ]);
      };
    }
  };
  const PagesCancelIndex = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-35babf6b"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/pages/cancel/index.vue"]]);
  const pages = [
    {
      path: "pages/start/index",
      style: {
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/login/user",
      style: {
        navigationStyle: "custom",
        navigationBarTitleText: "登录"
      }
    },
    {
      path: "pages/index/index",
      style: {
        navigationStyle: "custom",
        navigationBarTitleText: "云岚到家",
        "app-plus": {
          pullToRefresh: {
            support: true,
            color: "#ff3333",
            style: "default",
            height: "50px"
          }
        }
      }
    },
    {
      path: "pages/serviceSkill/index",
      style: {
        navigationStyle: "custom",
        navigationBarTitleText: "选择服务技能"
      }
    },
    {
      path: "pages/getOrder/index",
      style: {
        navigationStyle: "custom",
        navigationBarTitleText: "接单设置"
      }
    },
    {
      path: "pages/serviceRange/index",
      style: {
        navigationStyle: "custom",
        navigationBarTitleText: "请选择工作地点"
      }
    },
    {
      path: "pages/city/index",
      style: {
        navigationStyle: "custom",
        navigationBarTitleText: "选择服务城市"
      }
    },
    {
      path: "pages/setting/index",
      style: {
        navigationStyle: "custom",
        navigationBarTitleText: "基础配置"
      }
    },
    {
      path: "pages/history/index",
      style: {
        navigationStyle: "custom",
        navigationBarTitleText: "历史订单"
      }
    },
    {
      path: "pages/pickup/index",
      style: {
        navigationStyle: "custom",
        navigationBarTitleText: "订单"
      }
    },
    {
      path: "pages/orderInfo/index",
      style: {
        navigationStyle: "custom",
        navigationBarTitleText: "订单详情"
      }
    },
    {
      path: "pages/cancel/index",
      style: {
        navigationStyle: "custom",
        navigationBarTitleText: "取消原因"
      }
    },
    {
      path: "pages/serveRecord/index",
      style: {
        navigationStyle: "custom",
        navigationBarTitleText: "服务记录"
      }
    },
    {
      path: "pages/delivery/index",
      style: {
        navigationStyle: "custom",
        navigationBarTitleText: "消息"
      }
    },
    {
      path: "pages/my/index",
      style: {
        navigationStyle: "custom",
        navigationBarTitleText: "我的"
      }
    },
    {
      path: "pages/evaluate/index",
      style: {
        navigationStyle: "custom",
        navigationBarTitleText: "我的评价"
      }
    },
    {
      path: "pages/account/index",
      style: {
        navigationStyle: "custom",
        navigationBarTitleText: "账户设置"
      }
    },
    {
      path: "pages/auth/index",
      style: {
        navigationStyle: "custom",
        navigationBarTitleText: "实名认证"
      }
    },
    {
      path: "pages/authFail/index",
      style: {
        navigationStyle: "custom",
        navigationBarTitleText: "实名认证"
      }
    }
  ];
  const globalStyle = {
    navigationBarTextStyle: "black",
    navigationBarTitleText: "云岚到家",
    backgroundColor: "#F8F8F8",
    onReachBottomDistance: 50
  };
  const condition = {
    current: 0,
    list: [
      {
        name: "",
        path: "",
        query: ""
      }
    ]
  };
  const e$1 = {
    pages,
    globalStyle,
    condition
  };
  function t(e2) {
    return e2 && e2.__esModule && Object.prototype.hasOwnProperty.call(e2, "default") ? e2.default : e2;
  }
  function n(e2, t2, n2) {
    return e2(n2 = { path: t2, exports: {}, require: function(e3, t3) {
      return function() {
        throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
      }(null == t3 && n2.path);
    } }, n2.exports), n2.exports;
  }
  var s = n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = n2 || function(e3, t3) {
      var n3 = Object.create || function() {
        function e4() {
        }
        return function(t4) {
          var n4;
          return e4.prototype = t4, n4 = new e4(), e4.prototype = null, n4;
        };
      }(), s2 = {}, r2 = s2.lib = {}, i2 = r2.Base = { extend: function(e4) {
        var t4 = n3(this);
        return e4 && t4.mixIn(e4), t4.hasOwnProperty("init") && this.init !== t4.init || (t4.init = function() {
          t4.$super.init.apply(this, arguments);
        }), t4.init.prototype = t4, t4.$super = this, t4;
      }, create: function() {
        var e4 = this.extend();
        return e4.init.apply(e4, arguments), e4;
      }, init: function() {
      }, mixIn: function(e4) {
        for (var t4 in e4)
          e4.hasOwnProperty(t4) && (this[t4] = e4[t4]);
        e4.hasOwnProperty("toString") && (this.toString = e4.toString);
      }, clone: function() {
        return this.init.prototype.extend(this);
      } }, o2 = r2.WordArray = i2.extend({ init: function(e4, n4) {
        e4 = this.words = e4 || [], this.sigBytes = n4 != t3 ? n4 : 4 * e4.length;
      }, toString: function(e4) {
        return (e4 || c2).stringify(this);
      }, concat: function(e4) {
        var t4 = this.words, n4 = e4.words, s3 = this.sigBytes, r3 = e4.sigBytes;
        if (this.clamp(), s3 % 4)
          for (var i3 = 0; i3 < r3; i3++) {
            var o3 = n4[i3 >>> 2] >>> 24 - i3 % 4 * 8 & 255;
            t4[s3 + i3 >>> 2] |= o3 << 24 - (s3 + i3) % 4 * 8;
          }
        else
          for (i3 = 0; i3 < r3; i3 += 4)
            t4[s3 + i3 >>> 2] = n4[i3 >>> 2];
        return this.sigBytes += r3, this;
      }, clamp: function() {
        var t4 = this.words, n4 = this.sigBytes;
        t4[n4 >>> 2] &= 4294967295 << 32 - n4 % 4 * 8, t4.length = e3.ceil(n4 / 4);
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4.words = this.words.slice(0), e4;
      }, random: function(t4) {
        for (var n4, s3 = [], r3 = function(t5) {
          t5 = t5;
          var n5 = 987654321, s4 = 4294967295;
          return function() {
            var r4 = ((n5 = 36969 * (65535 & n5) + (n5 >> 16) & s4) << 16) + (t5 = 18e3 * (65535 & t5) + (t5 >> 16) & s4) & s4;
            return r4 /= 4294967296, (r4 += 0.5) * (e3.random() > 0.5 ? 1 : -1);
          };
        }, i3 = 0; i3 < t4; i3 += 4) {
          var a3 = r3(4294967296 * (n4 || e3.random()));
          n4 = 987654071 * a3(), s3.push(4294967296 * a3() | 0);
        }
        return new o2.init(s3, t4);
      } }), a2 = s2.enc = {}, c2 = a2.Hex = { stringify: function(e4) {
        for (var t4 = e4.words, n4 = e4.sigBytes, s3 = [], r3 = 0; r3 < n4; r3++) {
          var i3 = t4[r3 >>> 2] >>> 24 - r3 % 4 * 8 & 255;
          s3.push((i3 >>> 4).toString(16)), s3.push((15 & i3).toString(16));
        }
        return s3.join("");
      }, parse: function(e4) {
        for (var t4 = e4.length, n4 = [], s3 = 0; s3 < t4; s3 += 2)
          n4[s3 >>> 3] |= parseInt(e4.substr(s3, 2), 16) << 24 - s3 % 8 * 4;
        return new o2.init(n4, t4 / 2);
      } }, u2 = a2.Latin1 = { stringify: function(e4) {
        for (var t4 = e4.words, n4 = e4.sigBytes, s3 = [], r3 = 0; r3 < n4; r3++) {
          var i3 = t4[r3 >>> 2] >>> 24 - r3 % 4 * 8 & 255;
          s3.push(String.fromCharCode(i3));
        }
        return s3.join("");
      }, parse: function(e4) {
        for (var t4 = e4.length, n4 = [], s3 = 0; s3 < t4; s3++)
          n4[s3 >>> 2] |= (255 & e4.charCodeAt(s3)) << 24 - s3 % 4 * 8;
        return new o2.init(n4, t4);
      } }, l2 = a2.Utf8 = { stringify: function(e4) {
        try {
          return decodeURIComponent(escape(u2.stringify(e4)));
        } catch (e5) {
          throw new Error("Malformed UTF-8 data");
        }
      }, parse: function(e4) {
        return u2.parse(unescape(encodeURIComponent(e4)));
      } }, h2 = r2.BufferedBlockAlgorithm = i2.extend({ reset: function() {
        this._data = new o2.init(), this._nDataBytes = 0;
      }, _append: function(e4) {
        "string" == typeof e4 && (e4 = l2.parse(e4)), this._data.concat(e4), this._nDataBytes += e4.sigBytes;
      }, _process: function(t4) {
        var n4 = this._data, s3 = n4.words, r3 = n4.sigBytes, i3 = this.blockSize, a3 = r3 / (4 * i3), c3 = (a3 = t4 ? e3.ceil(a3) : e3.max((0 | a3) - this._minBufferSize, 0)) * i3, u3 = e3.min(4 * c3, r3);
        if (c3) {
          for (var l3 = 0; l3 < c3; l3 += i3)
            this._doProcessBlock(s3, l3);
          var h3 = s3.splice(0, c3);
          n4.sigBytes -= u3;
        }
        return new o2.init(h3, u3);
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4._data = this._data.clone(), e4;
      }, _minBufferSize: 0 });
      r2.Hasher = h2.extend({ cfg: i2.extend(), init: function(e4) {
        this.cfg = this.cfg.extend(e4), this.reset();
      }, reset: function() {
        h2.reset.call(this), this._doReset();
      }, update: function(e4) {
        return this._append(e4), this._process(), this;
      }, finalize: function(e4) {
        return e4 && this._append(e4), this._doFinalize();
      }, blockSize: 16, _createHelper: function(e4) {
        return function(t4, n4) {
          return new e4.init(n4).finalize(t4);
        };
      }, _createHmacHelper: function(e4) {
        return function(t4, n4) {
          return new d2.HMAC.init(e4, n4).finalize(t4);
        };
      } });
      var d2 = s2.algo = {};
      return s2;
    }(Math), n2);
  }), r = s, i = (n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = r, function(e3) {
      var t3 = n2, s2 = t3.lib, r2 = s2.WordArray, i2 = s2.Hasher, o2 = t3.algo, a2 = [];
      !function() {
        for (var t4 = 0; t4 < 64; t4++)
          a2[t4] = 4294967296 * e3.abs(e3.sin(t4 + 1)) | 0;
      }();
      var c2 = o2.MD5 = i2.extend({ _doReset: function() {
        this._hash = new r2.init([1732584193, 4023233417, 2562383102, 271733878]);
      }, _doProcessBlock: function(e4, t4) {
        for (var n3 = 0; n3 < 16; n3++) {
          var s3 = t4 + n3, r3 = e4[s3];
          e4[s3] = 16711935 & (r3 << 8 | r3 >>> 24) | 4278255360 & (r3 << 24 | r3 >>> 8);
        }
        var i3 = this._hash.words, o3 = e4[t4 + 0], c3 = e4[t4 + 1], p2 = e4[t4 + 2], f2 = e4[t4 + 3], g2 = e4[t4 + 4], m2 = e4[t4 + 5], y2 = e4[t4 + 6], _2 = e4[t4 + 7], w2 = e4[t4 + 8], v2 = e4[t4 + 9], I2 = e4[t4 + 10], S2 = e4[t4 + 11], b2 = e4[t4 + 12], k = e4[t4 + 13], A2 = e4[t4 + 14], P2 = e4[t4 + 15], T2 = i3[0], C2 = i3[1], x = i3[2], O2 = i3[3];
        T2 = u2(T2, C2, x, O2, o3, 7, a2[0]), O2 = u2(O2, T2, C2, x, c3, 12, a2[1]), x = u2(x, O2, T2, C2, p2, 17, a2[2]), C2 = u2(C2, x, O2, T2, f2, 22, a2[3]), T2 = u2(T2, C2, x, O2, g2, 7, a2[4]), O2 = u2(O2, T2, C2, x, m2, 12, a2[5]), x = u2(x, O2, T2, C2, y2, 17, a2[6]), C2 = u2(C2, x, O2, T2, _2, 22, a2[7]), T2 = u2(T2, C2, x, O2, w2, 7, a2[8]), O2 = u2(O2, T2, C2, x, v2, 12, a2[9]), x = u2(x, O2, T2, C2, I2, 17, a2[10]), C2 = u2(C2, x, O2, T2, S2, 22, a2[11]), T2 = u2(T2, C2, x, O2, b2, 7, a2[12]), O2 = u2(O2, T2, C2, x, k, 12, a2[13]), x = u2(x, O2, T2, C2, A2, 17, a2[14]), T2 = l2(T2, C2 = u2(C2, x, O2, T2, P2, 22, a2[15]), x, O2, c3, 5, a2[16]), O2 = l2(O2, T2, C2, x, y2, 9, a2[17]), x = l2(x, O2, T2, C2, S2, 14, a2[18]), C2 = l2(C2, x, O2, T2, o3, 20, a2[19]), T2 = l2(T2, C2, x, O2, m2, 5, a2[20]), O2 = l2(O2, T2, C2, x, I2, 9, a2[21]), x = l2(x, O2, T2, C2, P2, 14, a2[22]), C2 = l2(C2, x, O2, T2, g2, 20, a2[23]), T2 = l2(T2, C2, x, O2, v2, 5, a2[24]), O2 = l2(O2, T2, C2, x, A2, 9, a2[25]), x = l2(x, O2, T2, C2, f2, 14, a2[26]), C2 = l2(C2, x, O2, T2, w2, 20, a2[27]), T2 = l2(T2, C2, x, O2, k, 5, a2[28]), O2 = l2(O2, T2, C2, x, p2, 9, a2[29]), x = l2(x, O2, T2, C2, _2, 14, a2[30]), T2 = h2(T2, C2 = l2(C2, x, O2, T2, b2, 20, a2[31]), x, O2, m2, 4, a2[32]), O2 = h2(O2, T2, C2, x, w2, 11, a2[33]), x = h2(x, O2, T2, C2, S2, 16, a2[34]), C2 = h2(C2, x, O2, T2, A2, 23, a2[35]), T2 = h2(T2, C2, x, O2, c3, 4, a2[36]), O2 = h2(O2, T2, C2, x, g2, 11, a2[37]), x = h2(x, O2, T2, C2, _2, 16, a2[38]), C2 = h2(C2, x, O2, T2, I2, 23, a2[39]), T2 = h2(T2, C2, x, O2, k, 4, a2[40]), O2 = h2(O2, T2, C2, x, o3, 11, a2[41]), x = h2(x, O2, T2, C2, f2, 16, a2[42]), C2 = h2(C2, x, O2, T2, y2, 23, a2[43]), T2 = h2(T2, C2, x, O2, v2, 4, a2[44]), O2 = h2(O2, T2, C2, x, b2, 11, a2[45]), x = h2(x, O2, T2, C2, P2, 16, a2[46]), T2 = d2(T2, C2 = h2(C2, x, O2, T2, p2, 23, a2[47]), x, O2, o3, 6, a2[48]), O2 = d2(O2, T2, C2, x, _2, 10, a2[49]), x = d2(x, O2, T2, C2, A2, 15, a2[50]), C2 = d2(C2, x, O2, T2, m2, 21, a2[51]), T2 = d2(T2, C2, x, O2, b2, 6, a2[52]), O2 = d2(O2, T2, C2, x, f2, 10, a2[53]), x = d2(x, O2, T2, C2, I2, 15, a2[54]), C2 = d2(C2, x, O2, T2, c3, 21, a2[55]), T2 = d2(T2, C2, x, O2, w2, 6, a2[56]), O2 = d2(O2, T2, C2, x, P2, 10, a2[57]), x = d2(x, O2, T2, C2, y2, 15, a2[58]), C2 = d2(C2, x, O2, T2, k, 21, a2[59]), T2 = d2(T2, C2, x, O2, g2, 6, a2[60]), O2 = d2(O2, T2, C2, x, S2, 10, a2[61]), x = d2(x, O2, T2, C2, p2, 15, a2[62]), C2 = d2(C2, x, O2, T2, v2, 21, a2[63]), i3[0] = i3[0] + T2 | 0, i3[1] = i3[1] + C2 | 0, i3[2] = i3[2] + x | 0, i3[3] = i3[3] + O2 | 0;
      }, _doFinalize: function() {
        var t4 = this._data, n3 = t4.words, s3 = 8 * this._nDataBytes, r3 = 8 * t4.sigBytes;
        n3[r3 >>> 5] |= 128 << 24 - r3 % 32;
        var i3 = e3.floor(s3 / 4294967296), o3 = s3;
        n3[15 + (r3 + 64 >>> 9 << 4)] = 16711935 & (i3 << 8 | i3 >>> 24) | 4278255360 & (i3 << 24 | i3 >>> 8), n3[14 + (r3 + 64 >>> 9 << 4)] = 16711935 & (o3 << 8 | o3 >>> 24) | 4278255360 & (o3 << 24 | o3 >>> 8), t4.sigBytes = 4 * (n3.length + 1), this._process();
        for (var a3 = this._hash, c3 = a3.words, u3 = 0; u3 < 4; u3++) {
          var l3 = c3[u3];
          c3[u3] = 16711935 & (l3 << 8 | l3 >>> 24) | 4278255360 & (l3 << 24 | l3 >>> 8);
        }
        return a3;
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4._hash = this._hash.clone(), e4;
      } });
      function u2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (t4 & n3 | ~t4 & s3) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      function l2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (t4 & s3 | n3 & ~s3) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      function h2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (t4 ^ n3 ^ s3) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      function d2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (n3 ^ (t4 | ~s3)) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      t3.MD5 = i2._createHelper(c2), t3.HmacMD5 = i2._createHmacHelper(c2);
    }(Math), n2.MD5);
  }), n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = r, void function() {
      var e3 = n2, t3 = e3.lib.Base, s2 = e3.enc.Utf8;
      e3.algo.HMAC = t3.extend({ init: function(e4, t4) {
        e4 = this._hasher = new e4.init(), "string" == typeof t4 && (t4 = s2.parse(t4));
        var n3 = e4.blockSize, r2 = 4 * n3;
        t4.sigBytes > r2 && (t4 = e4.finalize(t4)), t4.clamp();
        for (var i2 = this._oKey = t4.clone(), o2 = this._iKey = t4.clone(), a2 = i2.words, c2 = o2.words, u2 = 0; u2 < n3; u2++)
          a2[u2] ^= 1549556828, c2[u2] ^= 909522486;
        i2.sigBytes = o2.sigBytes = r2, this.reset();
      }, reset: function() {
        var e4 = this._hasher;
        e4.reset(), e4.update(this._iKey);
      }, update: function(e4) {
        return this._hasher.update(e4), this;
      }, finalize: function(e4) {
        var t4 = this._hasher, n3 = t4.finalize(e4);
        return t4.reset(), t4.finalize(this._oKey.clone().concat(n3));
      } });
    }());
  }), n(function(e2, t2) {
    e2.exports = r.HmacMD5;
  })), o = n(function(e2, t2) {
    e2.exports = r.enc.Utf8;
  }), a = n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = r, function() {
      var e3 = n2, t3 = e3.lib.WordArray;
      function s2(e4, n3, s3) {
        for (var r2 = [], i2 = 0, o2 = 0; o2 < n3; o2++)
          if (o2 % 4) {
            var a2 = s3[e4.charCodeAt(o2 - 1)] << o2 % 4 * 2, c2 = s3[e4.charCodeAt(o2)] >>> 6 - o2 % 4 * 2;
            r2[i2 >>> 2] |= (a2 | c2) << 24 - i2 % 4 * 8, i2++;
          }
        return t3.create(r2, i2);
      }
      e3.enc.Base64 = { stringify: function(e4) {
        var t4 = e4.words, n3 = e4.sigBytes, s3 = this._map;
        e4.clamp();
        for (var r2 = [], i2 = 0; i2 < n3; i2 += 3)
          for (var o2 = (t4[i2 >>> 2] >>> 24 - i2 % 4 * 8 & 255) << 16 | (t4[i2 + 1 >>> 2] >>> 24 - (i2 + 1) % 4 * 8 & 255) << 8 | t4[i2 + 2 >>> 2] >>> 24 - (i2 + 2) % 4 * 8 & 255, a2 = 0; a2 < 4 && i2 + 0.75 * a2 < n3; a2++)
            r2.push(s3.charAt(o2 >>> 6 * (3 - a2) & 63));
        var c2 = s3.charAt(64);
        if (c2)
          for (; r2.length % 4; )
            r2.push(c2);
        return r2.join("");
      }, parse: function(e4) {
        var t4 = e4.length, n3 = this._map, r2 = this._reverseMap;
        if (!r2) {
          r2 = this._reverseMap = [];
          for (var i2 = 0; i2 < n3.length; i2++)
            r2[n3.charCodeAt(i2)] = i2;
        }
        var o2 = n3.charAt(64);
        if (o2) {
          var a2 = e4.indexOf(o2);
          -1 !== a2 && (t4 = a2);
        }
        return s2(e4, t4, r2);
      }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" };
    }(), n2.enc.Base64);
  });
  const c = "FUNCTION", u = "OBJECT", l = "CLIENT_DB", h = "pending", d = "fulfilled", p = "rejected";
  function f(e2) {
    return Object.prototype.toString.call(e2).slice(8, -1).toLowerCase();
  }
  function g(e2) {
    return "object" === f(e2);
  }
  function m(e2) {
    return "function" == typeof e2;
  }
  function y(e2) {
    return function() {
      try {
        return e2.apply(e2, arguments);
      } catch (e3) {
        console.error(e3);
      }
    };
  }
  const _ = "REJECTED", w = "NOT_PENDING";
  class v {
    constructor({ createPromise: e2, retryRule: t2 = _ } = {}) {
      this.createPromise = e2, this.status = null, this.promise = null, this.retryRule = t2;
    }
    get needRetry() {
      if (!this.status)
        return true;
      switch (this.retryRule) {
        case _:
          return this.status === p;
        case w:
          return this.status !== h;
      }
    }
    exec() {
      return this.needRetry ? (this.status = h, this.promise = this.createPromise().then((e2) => (this.status = d, Promise.resolve(e2)), (e2) => (this.status = p, Promise.reject(e2))), this.promise) : this.promise;
    }
  }
  function I(e2) {
    return e2 && "string" == typeof e2 ? JSON.parse(e2) : e2;
  }
  const S = true, b = "app", A = I([]), P = b, T = I(""), C = I("[]") || [];
  let O = "";
  try {
    O = "__UNI__E9AF589";
  } catch (e2) {
  }
  let E = {};
  function L(e2, t2 = {}) {
    var n2, s2;
    return n2 = E, s2 = e2, Object.prototype.hasOwnProperty.call(n2, s2) || (E[e2] = t2), E[e2];
  }
  E = uni._globalUniCloudObj ? uni._globalUniCloudObj : uni._globalUniCloudObj = {};
  const R = ["invoke", "success", "fail", "complete"], U = L("_globalUniCloudInterceptor");
  function N(e2, t2) {
    U[e2] || (U[e2] = {}), g(t2) && Object.keys(t2).forEach((n2) => {
      R.indexOf(n2) > -1 && function(e3, t3, n3) {
        let s2 = U[e3][t3];
        s2 || (s2 = U[e3][t3] = []), -1 === s2.indexOf(n3) && m(n3) && s2.push(n3);
      }(e2, n2, t2[n2]);
    });
  }
  function D(e2, t2) {
    U[e2] || (U[e2] = {}), g(t2) ? Object.keys(t2).forEach((n2) => {
      R.indexOf(n2) > -1 && function(e3, t3, n3) {
        const s2 = U[e3][t3];
        if (!s2)
          return;
        const r2 = s2.indexOf(n3);
        r2 > -1 && s2.splice(r2, 1);
      }(e2, n2, t2[n2]);
    }) : delete U[e2];
  }
  function M(e2, t2) {
    return e2 && 0 !== e2.length ? e2.reduce((e3, n2) => e3.then(() => n2(t2)), Promise.resolve()) : Promise.resolve();
  }
  function q(e2, t2) {
    return U[e2] && U[e2][t2] || [];
  }
  function F(e2) {
    N("callObject", e2);
  }
  const K = L("_globalUniCloudListener"), j = "response", B = "needLogin", $ = "refreshToken", W = "clientdb", H = "cloudfunction", z = "cloudobject";
  function J(e2) {
    return K[e2] || (K[e2] = []), K[e2];
  }
  function V(e2, t2) {
    const n2 = J(e2);
    n2.includes(t2) || n2.push(t2);
  }
  function G(e2, t2) {
    const n2 = J(e2), s2 = n2.indexOf(t2);
    -1 !== s2 && n2.splice(s2, 1);
  }
  function Y(e2, t2) {
    const n2 = J(e2);
    for (let e3 = 0; e3 < n2.length; e3++) {
      (0, n2[e3])(t2);
    }
  }
  let Q, X = false;
  function Z() {
    return Q || (Q = new Promise((e2) => {
      X && e2(), function t2() {
        if ("function" == typeof getCurrentPages) {
          const t3 = getCurrentPages();
          t3 && t3[0] && (X = true, e2());
        }
        X || setTimeout(() => {
          t2();
        }, 30);
      }();
    }), Q);
  }
  function ee(e2) {
    const t2 = {};
    for (const n2 in e2) {
      const s2 = e2[n2];
      m(s2) && (t2[n2] = y(s2));
    }
    return t2;
  }
  class te extends Error {
    constructor(e2) {
      super(e2.message), this.errMsg = e2.message || e2.errMsg || "unknown system error", this.code = this.errCode = e2.code || e2.errCode || "SYSTEM_ERROR", this.errSubject = this.subject = e2.subject || e2.errSubject, this.cause = e2.cause, this.requestId = e2.requestId;
    }
    toJson(e2 = 0) {
      if (!(e2 >= 10))
        return e2++, { errCode: this.errCode, errMsg: this.errMsg, errSubject: this.errSubject, cause: this.cause && this.cause.toJson ? this.cause.toJson(e2) : this.cause };
    }
  }
  var ne = { request: (e2) => uni.request(e2), uploadFile: (e2) => uni.uploadFile(e2), setStorageSync: (e2, t2) => uni.setStorageSync(e2, t2), getStorageSync: (e2) => uni.getStorageSync(e2), removeStorageSync: (e2) => uni.removeStorageSync(e2), clearStorageSync: () => uni.clearStorageSync() };
  function se(e2) {
    return e2 && se(e2.__v_raw) || e2;
  }
  function re() {
    return { token: ne.getStorageSync("uni_id_token") || ne.getStorageSync("uniIdToken"), tokenExpired: ne.getStorageSync("uni_id_token_expired") };
  }
  function ie({ token: e2, tokenExpired: t2 } = {}) {
    e2 && ne.setStorageSync("uni_id_token", e2), t2 && ne.setStorageSync("uni_id_token_expired", t2);
  }
  let oe, ae;
  function ce() {
    return oe || (oe = uni.getSystemInfoSync()), oe;
  }
  function ue() {
    let e2, t2;
    try {
      if (uni.getLaunchOptionsSync) {
        if (uni.getLaunchOptionsSync.toString().indexOf("not yet implemented") > -1)
          return;
        const { scene: n2, channel: s2 } = uni.getLaunchOptionsSync();
        e2 = s2, t2 = n2;
      }
    } catch (e3) {
    }
    return { channel: e2, scene: t2 };
  }
  function le() {
    const e2 = uni.getLocale && uni.getLocale() || "en";
    if (ae)
      return { ...ae, locale: e2, LOCALE: e2 };
    const t2 = ce(), { deviceId: n2, osName: s2, uniPlatform: r2, appId: i2 } = t2, o2 = ["pixelRatio", "brand", "model", "system", "language", "version", "platform", "host", "SDKVersion", "swanNativeVersion", "app", "AppPlatform", "fontSizeSetting"];
    for (let e3 = 0; e3 < o2.length; e3++) {
      delete t2[o2[e3]];
    }
    return ae = { PLATFORM: r2, OS: s2, APPID: i2, DEVICEID: n2, ...ue(), ...t2 }, { ...ae, locale: e2, LOCALE: e2 };
  }
  var he = { sign: function(e2, t2) {
    let n2 = "";
    return Object.keys(e2).sort().forEach(function(t3) {
      e2[t3] && (n2 = n2 + "&" + t3 + "=" + e2[t3]);
    }), n2 = n2.slice(1), i(n2, t2).toString();
  }, wrappedRequest: function(e2, t2) {
    return new Promise((n2, s2) => {
      t2(Object.assign(e2, { complete(e3) {
        e3 || (e3 = {});
        const t3 = e3.data && e3.data.header && e3.data.header["x-serverless-request-id"] || e3.header && e3.header["request-id"];
        if (!e3.statusCode || e3.statusCode >= 400)
          return s2(new te({ code: "SYS_ERR", message: e3.errMsg || "request:fail", requestId: t3 }));
        const r2 = e3.data;
        if (r2.error)
          return s2(new te({ code: r2.error.code, message: r2.error.message, requestId: t3 }));
        r2.result = r2.data, r2.requestId = t3, delete r2.data, n2(r2);
      } }));
    });
  }, toBase64: function(e2) {
    return a.stringify(o.parse(e2));
  } };
  var de = class {
    constructor(e2) {
      ["spaceId", "clientSecret"].forEach((t2) => {
        if (!Object.prototype.hasOwnProperty.call(e2, t2))
          throw new Error(`${t2} required`);
      }), this.config = Object.assign({}, { endpoint: 0 === e2.spaceId.indexOf("mp-") ? "https://api.next.bspapp.com" : "https://api.bspapp.com" }, e2), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = ne, this._getAccessTokenPromiseHub = new v({ createPromise: () => this.requestAuth(this.setupRequest({ method: "serverless.auth.user.anonymousAuthorize", params: "{}" }, "auth")).then((e3) => {
        if (!e3.result || !e3.result.accessToken)
          throw new te({ code: "AUTH_FAILED", message: "获取accessToken失败" });
        this.setAccessToken(e3.result.accessToken);
      }), retryRule: w });
    }
    get hasAccessToken() {
      return !!this.accessToken;
    }
    setAccessToken(e2) {
      this.accessToken = e2;
    }
    requestWrapped(e2) {
      return he.wrappedRequest(e2, this.adapter.request);
    }
    requestAuth(e2) {
      return this.requestWrapped(e2);
    }
    request(e2, t2) {
      return Promise.resolve().then(() => this.hasAccessToken ? t2 ? this.requestWrapped(e2) : this.requestWrapped(e2).catch((t3) => new Promise((e3, n2) => {
        !t3 || "GATEWAY_INVALID_TOKEN" !== t3.code && "InvalidParameter.InvalidToken" !== t3.code ? n2(t3) : e3();
      }).then(() => this.getAccessToken()).then(() => {
        const t4 = this.rebuildRequest(e2);
        return this.request(t4, true);
      })) : this.getAccessToken().then(() => {
        const t3 = this.rebuildRequest(e2);
        return this.request(t3, true);
      }));
    }
    rebuildRequest(e2) {
      const t2 = Object.assign({}, e2);
      return t2.data.token = this.accessToken, t2.header["x-basement-token"] = this.accessToken, t2.header["x-serverless-sign"] = he.sign(t2.data, this.config.clientSecret), t2;
    }
    setupRequest(e2, t2) {
      const n2 = Object.assign({}, e2, { spaceId: this.config.spaceId, timestamp: Date.now() }), s2 = { "Content-Type": "application/json" };
      return "auth" !== t2 && (n2.token = this.accessToken, s2["x-basement-token"] = this.accessToken), s2["x-serverless-sign"] = he.sign(n2, this.config.clientSecret), { url: this.config.requestUrl, method: "POST", data: n2, dataType: "json", header: s2 };
    }
    getAccessToken() {
      return this._getAccessTokenPromiseHub.exec();
    }
    async authorize() {
      await this.getAccessToken();
    }
    callFunction(e2) {
      const t2 = { method: "serverless.function.runtime.invoke", params: JSON.stringify({ functionTarget: e2.name, functionArgs: e2.data || {} }) };
      return this.request(this.setupRequest(t2));
    }
    getOSSUploadOptionsFromPath(e2) {
      const t2 = { method: "serverless.file.resource.generateProximalSign", params: JSON.stringify(e2) };
      return this.request(this.setupRequest(t2));
    }
    uploadFileToOSS({ url: e2, formData: t2, name: n2, filePath: s2, fileType: r2, onUploadProgress: i2 }) {
      return new Promise((o2, a2) => {
        const c2 = this.adapter.uploadFile({ url: e2, formData: t2, name: n2, filePath: s2, fileType: r2, header: { "X-OSS-server-side-encrpytion": "AES256" }, success(e3) {
          e3 && e3.statusCode < 400 ? o2(e3) : a2(new te({ code: "UPLOAD_FAILED", message: "文件上传失败" }));
        }, fail(e3) {
          a2(new te({ code: e3.code || "UPLOAD_FAILED", message: e3.message || e3.errMsg || "文件上传失败" }));
        } });
        "function" == typeof i2 && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((e3) => {
          i2({ loaded: e3.totalBytesSent, total: e3.totalBytesExpectedToSend });
        });
      });
    }
    reportOSSUpload(e2) {
      const t2 = { method: "serverless.file.resource.report", params: JSON.stringify(e2) };
      return this.request(this.setupRequest(t2));
    }
    async uploadFile({ filePath: e2, cloudPath: t2, fileType: n2 = "image", cloudPathAsRealPath: s2 = false, onUploadProgress: r2, config: i2 }) {
      if ("string" !== f(t2))
        throw new te({ code: "INVALID_PARAM", message: "cloudPath必须为字符串类型" });
      if (!(t2 = t2.trim()))
        throw new te({ code: "INVALID_PARAM", message: "cloudPath不可为空" });
      if (/:\/\//.test(t2))
        throw new te({ code: "INVALID_PARAM", message: "cloudPath不合法" });
      const o2 = i2 && i2.envType || this.config.envType;
      if (s2 && ("/" !== t2[0] && (t2 = "/" + t2), t2.indexOf("\\") > -1))
        throw new te({ code: "INVALID_PARAM", message: "使用cloudPath作为路径时，cloudPath不可包含“\\”" });
      const a2 = (await this.getOSSUploadOptionsFromPath({ env: o2, filename: s2 ? t2.split("/").pop() : t2, fileId: s2 ? t2 : void 0 })).result, c2 = "https://" + a2.cdnDomain + "/" + a2.ossPath, { securityToken: u2, accessKeyId: l2, signature: h2, host: d2, ossPath: p2, id: g2, policy: m2, ossCallbackUrl: y2 } = a2, _2 = { "Cache-Control": "max-age=2592000", "Content-Disposition": "attachment", OSSAccessKeyId: l2, Signature: h2, host: d2, id: g2, key: p2, policy: m2, success_action_status: 200 };
      if (u2 && (_2["x-oss-security-token"] = u2), y2) {
        const e3 = JSON.stringify({ callbackUrl: y2, callbackBody: JSON.stringify({ fileId: g2, spaceId: this.config.spaceId }), callbackBodyType: "application/json" });
        _2.callback = he.toBase64(e3);
      }
      const w2 = { url: "https://" + a2.host, formData: _2, fileName: "file", name: "file", filePath: e2, fileType: n2 };
      if (await this.uploadFileToOSS(Object.assign({}, w2, { onUploadProgress: r2 })), y2)
        return { success: true, filePath: e2, fileID: c2 };
      if ((await this.reportOSSUpload({ id: g2 })).success)
        return { success: true, filePath: e2, fileID: c2 };
      throw new te({ code: "UPLOAD_FAILED", message: "文件上传失败" });
    }
    getTempFileURL({ fileList: e2 } = {}) {
      return new Promise((t2, n2) => {
        Array.isArray(e2) && 0 !== e2.length || n2(new te({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" })), t2({ fileList: e2.map((e3) => ({ fileID: e3, tempFileURL: e3 })) });
      });
    }
    async getFileInfo({ fileList: e2 } = {}) {
      if (!Array.isArray(e2) || 0 === e2.length)
        throw new te({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" });
      const t2 = { method: "serverless.file.resource.info", params: JSON.stringify({ id: e2.map((e3) => e3.split("?")[0]).join(",") }) };
      return { fileList: (await this.request(this.setupRequest(t2))).result };
    }
  };
  var pe = { init(e2) {
    const t2 = new de(e2), n2 = { signInAnonymously: function() {
      return t2.authorize();
    }, getLoginState: function() {
      return Promise.resolve(false);
    } };
    return t2.auth = function() {
      return n2;
    }, t2.customAuth = t2.auth, t2;
  } };
  const fe = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:";
  var ge;
  !function(e2) {
    e2.local = "local", e2.none = "none", e2.session = "session";
  }(ge || (ge = {}));
  var me = function() {
  }, ye = n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = r, function(e3) {
      var t3 = n2, s2 = t3.lib, r2 = s2.WordArray, i2 = s2.Hasher, o2 = t3.algo, a2 = [], c2 = [];
      !function() {
        function t4(t5) {
          for (var n4 = e3.sqrt(t5), s4 = 2; s4 <= n4; s4++)
            if (!(t5 % s4))
              return false;
          return true;
        }
        function n3(e4) {
          return 4294967296 * (e4 - (0 | e4)) | 0;
        }
        for (var s3 = 2, r3 = 0; r3 < 64; )
          t4(s3) && (r3 < 8 && (a2[r3] = n3(e3.pow(s3, 0.5))), c2[r3] = n3(e3.pow(s3, 1 / 3)), r3++), s3++;
      }();
      var u2 = [], l2 = o2.SHA256 = i2.extend({ _doReset: function() {
        this._hash = new r2.init(a2.slice(0));
      }, _doProcessBlock: function(e4, t4) {
        for (var n3 = this._hash.words, s3 = n3[0], r3 = n3[1], i3 = n3[2], o3 = n3[3], a3 = n3[4], l3 = n3[5], h2 = n3[6], d2 = n3[7], p2 = 0; p2 < 64; p2++) {
          if (p2 < 16)
            u2[p2] = 0 | e4[t4 + p2];
          else {
            var f2 = u2[p2 - 15], g2 = (f2 << 25 | f2 >>> 7) ^ (f2 << 14 | f2 >>> 18) ^ f2 >>> 3, m2 = u2[p2 - 2], y2 = (m2 << 15 | m2 >>> 17) ^ (m2 << 13 | m2 >>> 19) ^ m2 >>> 10;
            u2[p2] = g2 + u2[p2 - 7] + y2 + u2[p2 - 16];
          }
          var _2 = s3 & r3 ^ s3 & i3 ^ r3 & i3, w2 = (s3 << 30 | s3 >>> 2) ^ (s3 << 19 | s3 >>> 13) ^ (s3 << 10 | s3 >>> 22), v2 = d2 + ((a3 << 26 | a3 >>> 6) ^ (a3 << 21 | a3 >>> 11) ^ (a3 << 7 | a3 >>> 25)) + (a3 & l3 ^ ~a3 & h2) + c2[p2] + u2[p2];
          d2 = h2, h2 = l3, l3 = a3, a3 = o3 + v2 | 0, o3 = i3, i3 = r3, r3 = s3, s3 = v2 + (w2 + _2) | 0;
        }
        n3[0] = n3[0] + s3 | 0, n3[1] = n3[1] + r3 | 0, n3[2] = n3[2] + i3 | 0, n3[3] = n3[3] + o3 | 0, n3[4] = n3[4] + a3 | 0, n3[5] = n3[5] + l3 | 0, n3[6] = n3[6] + h2 | 0, n3[7] = n3[7] + d2 | 0;
      }, _doFinalize: function() {
        var t4 = this._data, n3 = t4.words, s3 = 8 * this._nDataBytes, r3 = 8 * t4.sigBytes;
        return n3[r3 >>> 5] |= 128 << 24 - r3 % 32, n3[14 + (r3 + 64 >>> 9 << 4)] = e3.floor(s3 / 4294967296), n3[15 + (r3 + 64 >>> 9 << 4)] = s3, t4.sigBytes = 4 * n3.length, this._process(), this._hash;
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4._hash = this._hash.clone(), e4;
      } });
      t3.SHA256 = i2._createHelper(l2), t3.HmacSHA256 = i2._createHmacHelper(l2);
    }(Math), n2.SHA256);
  }), _e = ye, we = n(function(e2, t2) {
    e2.exports = r.HmacSHA256;
  });
  const ve = () => {
    let e2;
    if (!Promise) {
      e2 = () => {
      }, e2.promise = {};
      const t3 = () => {
        throw new te({ message: 'Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.' });
      };
      return Object.defineProperty(e2.promise, "then", { get: t3 }), Object.defineProperty(e2.promise, "catch", { get: t3 }), e2;
    }
    const t2 = new Promise((t3, n2) => {
      e2 = (e3, s2) => e3 ? n2(e3) : t3(s2);
    });
    return e2.promise = t2, e2;
  };
  function Ie(e2) {
    return void 0 === e2;
  }
  function Se(e2) {
    return "[object Null]" === Object.prototype.toString.call(e2);
  }
  var be;
  function ke(e2) {
    const t2 = (n2 = e2, "[object Array]" === Object.prototype.toString.call(n2) ? e2 : [e2]);
    var n2;
    for (const e3 of t2) {
      const { isMatch: t3, genAdapter: n3, runtime: s2 } = e3;
      if (t3())
        return { adapter: n3(), runtime: s2 };
    }
  }
  !function(e2) {
    e2.WEB = "web", e2.WX_MP = "wx_mp";
  }(be || (be = {}));
  const Ae = { adapter: null, runtime: void 0 }, Pe = ["anonymousUuidKey"];
  class Te extends me {
    constructor() {
      super(), Ae.adapter.root.tcbObject || (Ae.adapter.root.tcbObject = {});
    }
    setItem(e2, t2) {
      Ae.adapter.root.tcbObject[e2] = t2;
    }
    getItem(e2) {
      return Ae.adapter.root.tcbObject[e2];
    }
    removeItem(e2) {
      delete Ae.adapter.root.tcbObject[e2];
    }
    clear() {
      delete Ae.adapter.root.tcbObject;
    }
  }
  function Ce(e2, t2) {
    switch (e2) {
      case "local":
        return t2.localStorage || new Te();
      case "none":
        return new Te();
      default:
        return t2.sessionStorage || new Te();
    }
  }
  class xe {
    constructor(e2) {
      if (!this._storage) {
        this._persistence = Ae.adapter.primaryStorage || e2.persistence, this._storage = Ce(this._persistence, Ae.adapter);
        const t2 = `access_token_${e2.env}`, n2 = `access_token_expire_${e2.env}`, s2 = `refresh_token_${e2.env}`, r2 = `anonymous_uuid_${e2.env}`, i2 = `login_type_${e2.env}`, o2 = `user_info_${e2.env}`;
        this.keys = { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2, anonymousUuidKey: r2, loginTypeKey: i2, userInfoKey: o2 };
      }
    }
    updatePersistence(e2) {
      if (e2 === this._persistence)
        return;
      const t2 = "local" === this._persistence;
      this._persistence = e2;
      const n2 = Ce(e2, Ae.adapter);
      for (const e3 in this.keys) {
        const s2 = this.keys[e3];
        if (t2 && Pe.includes(e3))
          continue;
        const r2 = this._storage.getItem(s2);
        Ie(r2) || Se(r2) || (n2.setItem(s2, r2), this._storage.removeItem(s2));
      }
      this._storage = n2;
    }
    setStore(e2, t2, n2) {
      if (!this._storage)
        return;
      const s2 = { version: n2 || "localCachev1", content: t2 }, r2 = JSON.stringify(s2);
      try {
        this._storage.setItem(e2, r2);
      } catch (e3) {
        throw e3;
      }
    }
    getStore(e2, t2) {
      try {
        if (!this._storage)
          return;
      } catch (e3) {
        return "";
      }
      t2 = t2 || "localCachev1";
      const n2 = this._storage.getItem(e2);
      if (!n2)
        return "";
      if (n2.indexOf(t2) >= 0) {
        return JSON.parse(n2).content;
      }
      return "";
    }
    removeStore(e2) {
      this._storage.removeItem(e2);
    }
  }
  const Oe = {}, Ee = {};
  function Le(e2) {
    return Oe[e2];
  }
  class Re {
    constructor(e2, t2) {
      this.data = t2 || null, this.name = e2;
    }
  }
  class Ue extends Re {
    constructor(e2, t2) {
      super("error", { error: e2, data: t2 }), this.error = e2;
    }
  }
  const Ne = new class {
    constructor() {
      this._listeners = {};
    }
    on(e2, t2) {
      return function(e3, t3, n2) {
        n2[e3] = n2[e3] || [], n2[e3].push(t3);
      }(e2, t2, this._listeners), this;
    }
    off(e2, t2) {
      return function(e3, t3, n2) {
        if (n2 && n2[e3]) {
          const s2 = n2[e3].indexOf(t3);
          -1 !== s2 && n2[e3].splice(s2, 1);
        }
      }(e2, t2, this._listeners), this;
    }
    fire(e2, t2) {
      if (e2 instanceof Ue)
        return console.error(e2.error), this;
      const n2 = "string" == typeof e2 ? new Re(e2, t2 || {}) : e2;
      const s2 = n2.name;
      if (this._listens(s2)) {
        n2.target = this;
        const e3 = this._listeners[s2] ? [...this._listeners[s2]] : [];
        for (const t3 of e3)
          t3.call(this, n2);
      }
      return this;
    }
    _listens(e2) {
      return this._listeners[e2] && this._listeners[e2].length > 0;
    }
  }();
  function De(e2, t2) {
    Ne.on(e2, t2);
  }
  function Me(e2, t2 = {}) {
    Ne.fire(e2, t2);
  }
  function qe(e2, t2) {
    Ne.off(e2, t2);
  }
  const Fe = "loginStateChanged", Ke = "loginStateExpire", je = "loginTypeChanged", Be = "anonymousConverted", $e = "refreshAccessToken";
  var We;
  !function(e2) {
    e2.ANONYMOUS = "ANONYMOUS", e2.WECHAT = "WECHAT", e2.WECHAT_PUBLIC = "WECHAT-PUBLIC", e2.WECHAT_OPEN = "WECHAT-OPEN", e2.CUSTOM = "CUSTOM", e2.EMAIL = "EMAIL", e2.USERNAME = "USERNAME", e2.NULL = "NULL";
  }(We || (We = {}));
  const He = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"], ze = { "X-SDK-Version": "1.3.5" };
  function Je(e2, t2, n2) {
    const s2 = e2[t2];
    e2[t2] = function(t3) {
      const r2 = {}, i2 = {};
      n2.forEach((n3) => {
        const { data: s3, headers: o3 } = n3.call(e2, t3);
        Object.assign(r2, s3), Object.assign(i2, o3);
      });
      const o2 = t3.data;
      return o2 && (() => {
        var e3;
        if (e3 = o2, "[object FormData]" !== Object.prototype.toString.call(e3))
          t3.data = { ...o2, ...r2 };
        else
          for (const e4 in r2)
            o2.append(e4, r2[e4]);
      })(), t3.headers = { ...t3.headers || {}, ...i2 }, s2.call(e2, t3);
    };
  }
  function Ve() {
    const e2 = Math.random().toString(16).slice(2);
    return { data: { seqId: e2 }, headers: { ...ze, "x-seqid": e2 } };
  }
  class Ge {
    constructor(e2 = {}) {
      var t2;
      this.config = e2, this._reqClass = new Ae.adapter.reqClass({ timeout: this.config.timeout, timeoutMsg: `请求在${this.config.timeout / 1e3}s内未完成，已中断`, restrictedMethods: ["post"] }), this._cache = Le(this.config.env), this._localCache = (t2 = this.config.env, Ee[t2]), Je(this._reqClass, "post", [Ve]), Je(this._reqClass, "upload", [Ve]), Je(this._reqClass, "download", [Ve]);
    }
    async post(e2) {
      return await this._reqClass.post(e2);
    }
    async upload(e2) {
      return await this._reqClass.upload(e2);
    }
    async download(e2) {
      return await this._reqClass.download(e2);
    }
    async refreshAccessToken() {
      let e2, t2;
      this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken());
      try {
        e2 = await this._refreshAccessTokenPromise;
      } catch (e3) {
        t2 = e3;
      }
      if (this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t2)
        throw t2;
      return e2;
    }
    async _refreshAccessToken() {
      const { accessTokenKey: e2, accessTokenExpireKey: t2, refreshTokenKey: n2, loginTypeKey: s2, anonymousUuidKey: r2 } = this._cache.keys;
      this._cache.removeStore(e2), this._cache.removeStore(t2);
      let i2 = this._cache.getStore(n2);
      if (!i2)
        throw new te({ message: "未登录CloudBase" });
      const o2 = { refresh_token: i2 }, a2 = await this.request("auth.fetchAccessTokenWithRefreshToken", o2);
      if (a2.data.code) {
        const { code: e3 } = a2.data;
        if ("SIGN_PARAM_INVALID" === e3 || "REFRESH_TOKEN_EXPIRED" === e3 || "INVALID_REFRESH_TOKEN" === e3) {
          if (this._cache.getStore(s2) === We.ANONYMOUS && "INVALID_REFRESH_TOKEN" === e3) {
            const e4 = this._cache.getStore(r2), t3 = this._cache.getStore(n2), s3 = await this.send("auth.signInAnonymously", { anonymous_uuid: e4, refresh_token: t3 });
            return this.setRefreshToken(s3.refresh_token), this._refreshAccessToken();
          }
          Me(Ke), this._cache.removeStore(n2);
        }
        throw new te({ code: a2.data.code, message: `刷新access token失败：${a2.data.code}` });
      }
      if (a2.data.access_token)
        return Me($e), this._cache.setStore(e2, a2.data.access_token), this._cache.setStore(t2, a2.data.access_token_expire + Date.now()), { accessToken: a2.data.access_token, accessTokenExpire: a2.data.access_token_expire };
      a2.data.refresh_token && (this._cache.removeStore(n2), this._cache.setStore(n2, a2.data.refresh_token), this._refreshAccessToken());
    }
    async getAccessToken() {
      const { accessTokenKey: e2, accessTokenExpireKey: t2, refreshTokenKey: n2 } = this._cache.keys;
      if (!this._cache.getStore(n2))
        throw new te({ message: "refresh token不存在，登录状态异常" });
      let s2 = this._cache.getStore(e2), r2 = this._cache.getStore(t2), i2 = true;
      return this._shouldRefreshAccessTokenHook && !await this._shouldRefreshAccessTokenHook(s2, r2) && (i2 = false), (!s2 || !r2 || r2 < Date.now()) && i2 ? this.refreshAccessToken() : { accessToken: s2, accessTokenExpire: r2 };
    }
    async request(e2, t2, n2) {
      const s2 = `x-tcb-trace_${this.config.env}`;
      let r2 = "application/x-www-form-urlencoded";
      const i2 = { action: e2, env: this.config.env, dataVersion: "2019-08-16", ...t2 };
      if (-1 === He.indexOf(e2)) {
        const { refreshTokenKey: e3 } = this._cache.keys;
        this._cache.getStore(e3) && (i2.access_token = (await this.getAccessToken()).accessToken);
      }
      let o2;
      if ("storage.uploadFile" === e2) {
        o2 = new FormData();
        for (let e3 in o2)
          o2.hasOwnProperty(e3) && void 0 !== o2[e3] && o2.append(e3, i2[e3]);
        r2 = "multipart/form-data";
      } else {
        r2 = "application/json", o2 = {};
        for (let e3 in i2)
          void 0 !== i2[e3] && (o2[e3] = i2[e3]);
      }
      let a2 = { headers: { "content-type": r2 } };
      n2 && n2.onUploadProgress && (a2.onUploadProgress = n2.onUploadProgress);
      const c2 = this._localCache.getStore(s2);
      c2 && (a2.headers["X-TCB-Trace"] = c2);
      const { parse: u2, inQuery: l2, search: h2 } = t2;
      let d2 = { env: this.config.env };
      u2 && (d2.parse = true), l2 && (d2 = { ...l2, ...d2 });
      let p2 = function(e3, t3, n3 = {}) {
        const s3 = /\?/.test(t3);
        let r3 = "";
        for (let e4 in n3)
          "" === r3 ? !s3 && (t3 += "?") : r3 += "&", r3 += `${e4}=${encodeURIComponent(n3[e4])}`;
        return /^http(s)?\:\/\//.test(t3 += r3) ? t3 : `${e3}${t3}`;
      }(fe, "//tcb-api.tencentcloudapi.com/web", d2);
      h2 && (p2 += h2);
      const f2 = await this.post({ url: p2, data: o2, ...a2 }), g2 = f2.header && f2.header["x-tcb-trace"];
      if (g2 && this._localCache.setStore(s2, g2), 200 !== Number(f2.status) && 200 !== Number(f2.statusCode) || !f2.data)
        throw new te({ code: "NETWORK_ERROR", message: "network request error" });
      return f2;
    }
    async send(e2, t2 = {}) {
      const n2 = await this.request(e2, t2, { onUploadProgress: t2.onUploadProgress });
      if ("ACCESS_TOKEN_EXPIRED" === n2.data.code && -1 === He.indexOf(e2)) {
        await this.refreshAccessToken();
        const n3 = await this.request(e2, t2, { onUploadProgress: t2.onUploadProgress });
        if (n3.data.code)
          throw new te({ code: n3.data.code, message: n3.data.message });
        return n3.data;
      }
      if (n2.data.code)
        throw new te({ code: n2.data.code, message: n2.data.message });
      return n2.data;
    }
    setRefreshToken(e2) {
      const { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.removeStore(n2), this._cache.setStore(s2, e2);
    }
  }
  const Ye = {};
  function Qe(e2) {
    return Ye[e2];
  }
  class Xe {
    constructor(e2) {
      this.config = e2, this._cache = Le(e2.env), this._request = Qe(e2.env);
    }
    setRefreshToken(e2) {
      const { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.removeStore(n2), this._cache.setStore(s2, e2);
    }
    setAccessToken(e2, t2) {
      const { accessTokenKey: n2, accessTokenExpireKey: s2 } = this._cache.keys;
      this._cache.setStore(n2, e2), this._cache.setStore(s2, t2);
    }
    async refreshUserInfo() {
      const { data: e2 } = await this._request.send("auth.getUserInfo", {});
      return this.setLocalUserInfo(e2), e2;
    }
    setLocalUserInfo(e2) {
      const { userInfoKey: t2 } = this._cache.keys;
      this._cache.setStore(t2, e2);
    }
  }
  class Ze {
    constructor(e2) {
      if (!e2)
        throw new te({ code: "PARAM_ERROR", message: "envId is not defined" });
      this._envId = e2, this._cache = Le(this._envId), this._request = Qe(this._envId), this.setUserInfo();
    }
    linkWithTicket(e2) {
      if ("string" != typeof e2)
        throw new te({ code: "PARAM_ERROR", message: "ticket must be string" });
      return this._request.send("auth.linkWithTicket", { ticket: e2 });
    }
    linkWithRedirect(e2) {
      e2.signInWithRedirect();
    }
    updatePassword(e2, t2) {
      return this._request.send("auth.updatePassword", { oldPassword: t2, newPassword: e2 });
    }
    updateEmail(e2) {
      return this._request.send("auth.updateEmail", { newEmail: e2 });
    }
    updateUsername(e2) {
      if ("string" != typeof e2)
        throw new te({ code: "PARAM_ERROR", message: "username must be a string" });
      return this._request.send("auth.updateUsername", { username: e2 });
    }
    async getLinkedUidList() {
      const { data: e2 } = await this._request.send("auth.getLinkedUidList", {});
      let t2 = false;
      const { users: n2 } = e2;
      return n2.forEach((e3) => {
        e3.wxOpenId && e3.wxPublicId && (t2 = true);
      }), { users: n2, hasPrimaryUid: t2 };
    }
    setPrimaryUid(e2) {
      return this._request.send("auth.setPrimaryUid", { uid: e2 });
    }
    unlink(e2) {
      return this._request.send("auth.unlink", { platform: e2 });
    }
    async update(e2) {
      const { nickName: t2, gender: n2, avatarUrl: s2, province: r2, country: i2, city: o2 } = e2, { data: a2 } = await this._request.send("auth.updateUserInfo", { nickName: t2, gender: n2, avatarUrl: s2, province: r2, country: i2, city: o2 });
      this.setLocalUserInfo(a2);
    }
    async refresh() {
      const { data: e2 } = await this._request.send("auth.getUserInfo", {});
      return this.setLocalUserInfo(e2), e2;
    }
    setUserInfo() {
      const { userInfoKey: e2 } = this._cache.keys, t2 = this._cache.getStore(e2);
      ["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl"].forEach((e3) => {
        this[e3] = t2[e3];
      }), this.location = { country: t2.country, province: t2.province, city: t2.city };
    }
    setLocalUserInfo(e2) {
      const { userInfoKey: t2 } = this._cache.keys;
      this._cache.setStore(t2, e2), this.setUserInfo();
    }
  }
  class et {
    constructor(e2) {
      if (!e2)
        throw new te({ code: "PARAM_ERROR", message: "envId is not defined" });
      this._cache = Le(e2);
      const { refreshTokenKey: t2, accessTokenKey: n2, accessTokenExpireKey: s2 } = this._cache.keys, r2 = this._cache.getStore(t2), i2 = this._cache.getStore(n2), o2 = this._cache.getStore(s2);
      this.credential = { refreshToken: r2, accessToken: i2, accessTokenExpire: o2 }, this.user = new Ze(e2);
    }
    get isAnonymousAuth() {
      return this.loginType === We.ANONYMOUS;
    }
    get isCustomAuth() {
      return this.loginType === We.CUSTOM;
    }
    get isWeixinAuth() {
      return this.loginType === We.WECHAT || this.loginType === We.WECHAT_OPEN || this.loginType === We.WECHAT_PUBLIC;
    }
    get loginType() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
  }
  class tt extends Xe {
    async signIn() {
      this._cache.updatePersistence("local");
      const { anonymousUuidKey: e2, refreshTokenKey: t2 } = this._cache.keys, n2 = this._cache.getStore(e2) || void 0, s2 = this._cache.getStore(t2) || void 0, r2 = await this._request.send("auth.signInAnonymously", { anonymous_uuid: n2, refresh_token: s2 });
      if (r2.uuid && r2.refresh_token) {
        this._setAnonymousUUID(r2.uuid), this.setRefreshToken(r2.refresh_token), await this._request.refreshAccessToken(), Me(Fe), Me(je, { env: this.config.env, loginType: We.ANONYMOUS, persistence: "local" });
        const e3 = new et(this.config.env);
        return await e3.user.refresh(), e3;
      }
      throw new te({ message: "匿名登录失败" });
    }
    async linkAndRetrieveDataWithTicket(e2) {
      const { anonymousUuidKey: t2, refreshTokenKey: n2 } = this._cache.keys, s2 = this._cache.getStore(t2), r2 = this._cache.getStore(n2), i2 = await this._request.send("auth.linkAndRetrieveDataWithTicket", { anonymous_uuid: s2, refresh_token: r2, ticket: e2 });
      if (i2.refresh_token)
        return this._clearAnonymousUUID(), this.setRefreshToken(i2.refresh_token), await this._request.refreshAccessToken(), Me(Be, { env: this.config.env }), Me(je, { loginType: We.CUSTOM, persistence: "local" }), { credential: { refreshToken: i2.refresh_token } };
      throw new te({ message: "匿名转化失败" });
    }
    _setAnonymousUUID(e2) {
      const { anonymousUuidKey: t2, loginTypeKey: n2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.setStore(t2, e2), this._cache.setStore(n2, We.ANONYMOUS);
    }
    _clearAnonymousUUID() {
      this._cache.removeStore(this._cache.keys.anonymousUuidKey);
    }
  }
  class nt extends Xe {
    async signIn(e2) {
      if ("string" != typeof e2)
        throw new te({ code: "PARAM_ERROR", message: "ticket must be a string" });
      const { refreshTokenKey: t2 } = this._cache.keys, n2 = await this._request.send("auth.signInWithTicket", { ticket: e2, refresh_token: this._cache.getStore(t2) || "" });
      if (n2.refresh_token)
        return this.setRefreshToken(n2.refresh_token), await this._request.refreshAccessToken(), Me(Fe), Me(je, { env: this.config.env, loginType: We.CUSTOM, persistence: this.config.persistence }), await this.refreshUserInfo(), new et(this.config.env);
      throw new te({ message: "自定义登录失败" });
    }
  }
  class st extends Xe {
    async signIn(e2, t2) {
      if ("string" != typeof e2)
        throw new te({ code: "PARAM_ERROR", message: "email must be a string" });
      const { refreshTokenKey: n2 } = this._cache.keys, s2 = await this._request.send("auth.signIn", { loginType: "EMAIL", email: e2, password: t2, refresh_token: this._cache.getStore(n2) || "" }), { refresh_token: r2, access_token: i2, access_token_expire: o2 } = s2;
      if (r2)
        return this.setRefreshToken(r2), i2 && o2 ? this.setAccessToken(i2, o2) : await this._request.refreshAccessToken(), await this.refreshUserInfo(), Me(Fe), Me(je, { env: this.config.env, loginType: We.EMAIL, persistence: this.config.persistence }), new et(this.config.env);
      throw s2.code ? new te({ code: s2.code, message: `邮箱登录失败: ${s2.message}` }) : new te({ message: "邮箱登录失败" });
    }
    async activate(e2) {
      return this._request.send("auth.activateEndUserMail", { token: e2 });
    }
    async resetPasswordWithToken(e2, t2) {
      return this._request.send("auth.resetPasswordWithToken", { token: e2, newPassword: t2 });
    }
  }
  class rt extends Xe {
    async signIn(e2, t2) {
      if ("string" != typeof e2)
        throw new te({ code: "PARAM_ERROR", message: "username must be a string" });
      "string" != typeof t2 && (t2 = "", console.warn("password is empty"));
      const { refreshTokenKey: n2 } = this._cache.keys, s2 = await this._request.send("auth.signIn", { loginType: We.USERNAME, username: e2, password: t2, refresh_token: this._cache.getStore(n2) || "" }), { refresh_token: r2, access_token_expire: i2, access_token: o2 } = s2;
      if (r2)
        return this.setRefreshToken(r2), o2 && i2 ? this.setAccessToken(o2, i2) : await this._request.refreshAccessToken(), await this.refreshUserInfo(), Me(Fe), Me(je, { env: this.config.env, loginType: We.USERNAME, persistence: this.config.persistence }), new et(this.config.env);
      throw s2.code ? new te({ code: s2.code, message: `用户名密码登录失败: ${s2.message}` }) : new te({ message: "用户名密码登录失败" });
    }
  }
  class it {
    constructor(e2) {
      this.config = e2, this._cache = Le(e2.env), this._request = Qe(e2.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), De(je, this._onLoginTypeChanged);
    }
    get currentUser() {
      const e2 = this.hasLoginState();
      return e2 && e2.user || null;
    }
    get loginType() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
    anonymousAuthProvider() {
      return new tt(this.config);
    }
    customAuthProvider() {
      return new nt(this.config);
    }
    emailAuthProvider() {
      return new st(this.config);
    }
    usernameAuthProvider() {
      return new rt(this.config);
    }
    async signInAnonymously() {
      return new tt(this.config).signIn();
    }
    async signInWithEmailAndPassword(e2, t2) {
      return new st(this.config).signIn(e2, t2);
    }
    signInWithUsernameAndPassword(e2, t2) {
      return new rt(this.config).signIn(e2, t2);
    }
    async linkAndRetrieveDataWithTicket(e2) {
      this._anonymousAuthProvider || (this._anonymousAuthProvider = new tt(this.config)), De(Be, this._onAnonymousConverted);
      return await this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e2);
    }
    async signOut() {
      if (this.loginType === We.ANONYMOUS)
        throw new te({ message: "匿名用户不支持登出操作" });
      const { refreshTokenKey: e2, accessTokenKey: t2, accessTokenExpireKey: n2 } = this._cache.keys, s2 = this._cache.getStore(e2);
      if (!s2)
        return;
      const r2 = await this._request.send("auth.logout", { refresh_token: s2 });
      return this._cache.removeStore(e2), this._cache.removeStore(t2), this._cache.removeStore(n2), Me(Fe), Me(je, { env: this.config.env, loginType: We.NULL, persistence: this.config.persistence }), r2;
    }
    async signUpWithEmailAndPassword(e2, t2) {
      return this._request.send("auth.signUpWithEmailAndPassword", { email: e2, password: t2 });
    }
    async sendPasswordResetEmail(e2) {
      return this._request.send("auth.sendPasswordResetEmail", { email: e2 });
    }
    onLoginStateChanged(e2) {
      De(Fe, () => {
        const t3 = this.hasLoginState();
        e2.call(this, t3);
      });
      const t2 = this.hasLoginState();
      e2.call(this, t2);
    }
    onLoginStateExpired(e2) {
      De(Ke, e2.bind(this));
    }
    onAccessTokenRefreshed(e2) {
      De($e, e2.bind(this));
    }
    onAnonymousConverted(e2) {
      De(Be, e2.bind(this));
    }
    onLoginTypeChanged(e2) {
      De(je, () => {
        const t2 = this.hasLoginState();
        e2.call(this, t2);
      });
    }
    async getAccessToken() {
      return { accessToken: (await this._request.getAccessToken()).accessToken, env: this.config.env };
    }
    hasLoginState() {
      const { refreshTokenKey: e2 } = this._cache.keys;
      return this._cache.getStore(e2) ? new et(this.config.env) : null;
    }
    async isUsernameRegistered(e2) {
      if ("string" != typeof e2)
        throw new te({ code: "PARAM_ERROR", message: "username must be a string" });
      const { data: t2 } = await this._request.send("auth.isUsernameRegistered", { username: e2 });
      return t2 && t2.isRegistered;
    }
    getLoginState() {
      return Promise.resolve(this.hasLoginState());
    }
    async signInWithTicket(e2) {
      return new nt(this.config).signIn(e2);
    }
    shouldRefreshAccessToken(e2) {
      this._request._shouldRefreshAccessTokenHook = e2.bind(this);
    }
    getUserInfo() {
      return this._request.send("auth.getUserInfo", {}).then((e2) => e2.code ? e2 : { ...e2.data, requestId: e2.seqId });
    }
    getAuthHeader() {
      const { refreshTokenKey: e2, accessTokenKey: t2 } = this._cache.keys, n2 = this._cache.getStore(e2);
      return { "x-cloudbase-credentials": this._cache.getStore(t2) + "/@@/" + n2 };
    }
    _onAnonymousConverted(e2) {
      const { env: t2 } = e2.data;
      t2 === this.config.env && this._cache.updatePersistence(this.config.persistence);
    }
    _onLoginTypeChanged(e2) {
      const { loginType: t2, persistence: n2, env: s2 } = e2.data;
      s2 === this.config.env && (this._cache.updatePersistence(n2), this._cache.setStore(this._cache.keys.loginTypeKey, t2));
    }
  }
  const ot = function(e2, t2) {
    t2 = t2 || ve();
    const n2 = Qe(this.config.env), { cloudPath: s2, filePath: r2, onUploadProgress: i2, fileType: o2 = "image" } = e2;
    return n2.send("storage.getUploadMetadata", { path: s2 }).then((e3) => {
      const { data: { url: a2, authorization: c2, token: u2, fileId: l2, cosFileId: h2 }, requestId: d2 } = e3, p2 = { key: s2, signature: c2, "x-cos-meta-fileid": h2, success_action_status: "201", "x-cos-security-token": u2 };
      n2.upload({ url: a2, data: p2, file: r2, name: s2, fileType: o2, onUploadProgress: i2 }).then((e4) => {
        201 === e4.statusCode ? t2(null, { fileID: l2, requestId: d2 }) : t2(new te({ code: "STORAGE_REQUEST_FAIL", message: `STORAGE_REQUEST_FAIL: ${e4.data}` }));
      }).catch((e4) => {
        t2(e4);
      });
    }).catch((e3) => {
      t2(e3);
    }), t2.promise;
  }, at = function(e2, t2) {
    t2 = t2 || ve();
    const n2 = Qe(this.config.env), { cloudPath: s2 } = e2;
    return n2.send("storage.getUploadMetadata", { path: s2 }).then((e3) => {
      t2(null, e3);
    }).catch((e3) => {
      t2(e3);
    }), t2.promise;
  }, ct = function({ fileList: e2 }, t2) {
    if (t2 = t2 || ve(), !e2 || !Array.isArray(e2))
      return { code: "INVALID_PARAM", message: "fileList必须是非空的数组" };
    for (let t3 of e2)
      if (!t3 || "string" != typeof t3)
        return { code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" };
    const n2 = { fileid_list: e2 };
    return Qe(this.config.env).send("storage.batchDeleteFile", n2).then((e3) => {
      e3.code ? t2(null, e3) : t2(null, { fileList: e3.data.delete_list, requestId: e3.requestId });
    }).catch((e3) => {
      t2(e3);
    }), t2.promise;
  }, ut = function({ fileList: e2 }, t2) {
    t2 = t2 || ve(), e2 && Array.isArray(e2) || t2(null, { code: "INVALID_PARAM", message: "fileList必须是非空的数组" });
    let n2 = [];
    for (let s3 of e2)
      "object" == typeof s3 ? (s3.hasOwnProperty("fileID") && s3.hasOwnProperty("maxAge") || t2(null, { code: "INVALID_PARAM", message: "fileList的元素必须是包含fileID和maxAge的对象" }), n2.push({ fileid: s3.fileID, max_age: s3.maxAge })) : "string" == typeof s3 ? n2.push({ fileid: s3 }) : t2(null, { code: "INVALID_PARAM", message: "fileList的元素必须是字符串" });
    const s2 = { file_list: n2 };
    return Qe(this.config.env).send("storage.batchGetDownloadUrl", s2).then((e3) => {
      e3.code ? t2(null, e3) : t2(null, { fileList: e3.data.download_list, requestId: e3.requestId });
    }).catch((e3) => {
      t2(e3);
    }), t2.promise;
  }, lt = async function({ fileID: e2 }, t2) {
    const n2 = (await ut.call(this, { fileList: [{ fileID: e2, maxAge: 600 }] })).fileList[0];
    if ("SUCCESS" !== n2.code)
      return t2 ? t2(n2) : new Promise((e3) => {
        e3(n2);
      });
    const s2 = Qe(this.config.env);
    let r2 = n2.download_url;
    if (r2 = encodeURI(r2), !t2)
      return s2.download({ url: r2 });
    t2(await s2.download({ url: r2 }));
  }, ht = function({ name: e2, data: t2, query: n2, parse: s2, search: r2 }, i2) {
    const o2 = i2 || ve();
    let a2;
    try {
      a2 = t2 ? JSON.stringify(t2) : "";
    } catch (e3) {
      return Promise.reject(e3);
    }
    if (!e2)
      return Promise.reject(new te({ code: "PARAM_ERROR", message: "函数名不能为空" }));
    const c2 = { inQuery: n2, parse: s2, search: r2, function_name: e2, request_data: a2 };
    return Qe(this.config.env).send("functions.invokeFunction", c2).then((e3) => {
      if (e3.code)
        o2(null, e3);
      else {
        let t3 = e3.data.response_data;
        if (s2)
          o2(null, { result: t3, requestId: e3.requestId });
        else
          try {
            t3 = JSON.parse(e3.data.response_data), o2(null, { result: t3, requestId: e3.requestId });
          } catch (e4) {
            o2(new te({ message: "response data must be json" }));
          }
      }
      return o2.promise;
    }).catch((e3) => {
      o2(e3);
    }), o2.promise;
  }, dt = { timeout: 15e3, persistence: "session" }, pt = {};
  class ft {
    constructor(e2) {
      this.config = e2 || this.config, this.authObj = void 0;
    }
    init(e2) {
      switch (Ae.adapter || (this.requestClient = new Ae.adapter.reqClass({ timeout: e2.timeout || 5e3, timeoutMsg: `请求在${(e2.timeout || 5e3) / 1e3}s内未完成，已中断` })), this.config = { ...dt, ...e2 }, true) {
        case this.config.timeout > 6e5:
          console.warn("timeout大于可配置上限[10分钟]，已重置为上限数值"), this.config.timeout = 6e5;
          break;
        case this.config.timeout < 100:
          console.warn("timeout小于可配置下限[100ms]，已重置为下限数值"), this.config.timeout = 100;
      }
      return new ft(this.config);
    }
    auth({ persistence: e2 } = {}) {
      if (this.authObj)
        return this.authObj;
      const t2 = e2 || Ae.adapter.primaryStorage || dt.persistence;
      var n2;
      return t2 !== this.config.persistence && (this.config.persistence = t2), function(e3) {
        const { env: t3 } = e3;
        Oe[t3] = new xe(e3), Ee[t3] = new xe({ ...e3, persistence: "local" });
      }(this.config), n2 = this.config, Ye[n2.env] = new Ge(n2), this.authObj = new it(this.config), this.authObj;
    }
    on(e2, t2) {
      return De.apply(this, [e2, t2]);
    }
    off(e2, t2) {
      return qe.apply(this, [e2, t2]);
    }
    callFunction(e2, t2) {
      return ht.apply(this, [e2, t2]);
    }
    deleteFile(e2, t2) {
      return ct.apply(this, [e2, t2]);
    }
    getTempFileURL(e2, t2) {
      return ut.apply(this, [e2, t2]);
    }
    downloadFile(e2, t2) {
      return lt.apply(this, [e2, t2]);
    }
    uploadFile(e2, t2) {
      return ot.apply(this, [e2, t2]);
    }
    getUploadMetadata(e2, t2) {
      return at.apply(this, [e2, t2]);
    }
    registerExtension(e2) {
      pt[e2.name] = e2;
    }
    async invokeExtension(e2, t2) {
      const n2 = pt[e2];
      if (!n2)
        throw new te({ message: `扩展${e2} 必须先注册` });
      return await n2.invoke(t2, this);
    }
    useAdapters(e2) {
      const { adapter: t2, runtime: n2 } = ke(e2) || {};
      t2 && (Ae.adapter = t2), n2 && (Ae.runtime = n2);
    }
  }
  var gt = new ft();
  function mt(e2, t2, n2) {
    void 0 === n2 && (n2 = {});
    var s2 = /\?/.test(t2), r2 = "";
    for (var i2 in n2)
      "" === r2 ? !s2 && (t2 += "?") : r2 += "&", r2 += i2 + "=" + encodeURIComponent(n2[i2]);
    return /^http(s)?:\/\//.test(t2 += r2) ? t2 : "" + e2 + t2;
  }
  class yt {
    post(e2) {
      const { url: t2, data: n2, headers: s2 } = e2;
      return new Promise((e3, r2) => {
        ne.request({ url: mt("https:", t2), data: n2, method: "POST", header: s2, success(t3) {
          e3(t3);
        }, fail(e4) {
          r2(e4);
        } });
      });
    }
    upload(e2) {
      return new Promise((t2, n2) => {
        const { url: s2, file: r2, data: i2, headers: o2, fileType: a2 } = e2, c2 = ne.uploadFile({ url: mt("https:", s2), name: "file", formData: Object.assign({}, i2), filePath: r2, fileType: a2, header: o2, success(e3) {
          const n3 = { statusCode: e3.statusCode, data: e3.data || {} };
          200 === e3.statusCode && i2.success_action_status && (n3.statusCode = parseInt(i2.success_action_status, 10)), t2(n3);
        }, fail(e3) {
          n2(new Error(e3.errMsg || "uploadFile:fail"));
        } });
        "function" == typeof e2.onUploadProgress && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((t3) => {
          e2.onUploadProgress({ loaded: t3.totalBytesSent, total: t3.totalBytesExpectedToSend });
        });
      });
    }
  }
  const _t = { setItem(e2, t2) {
    ne.setStorageSync(e2, t2);
  }, getItem: (e2) => ne.getStorageSync(e2), removeItem(e2) {
    ne.removeStorageSync(e2);
  }, clear() {
    ne.clearStorageSync();
  } };
  var wt = { genAdapter: function() {
    return { root: {}, reqClass: yt, localStorage: _t, primaryStorage: "local" };
  }, isMatch: function() {
    return true;
  }, runtime: "uni_app" };
  gt.useAdapters(wt);
  const vt = gt, It = vt.init;
  vt.init = function(e2) {
    e2.env = e2.spaceId;
    const t2 = It.call(this, e2);
    t2.config.provider = "tencent", t2.config.spaceId = e2.spaceId;
    const n2 = t2.auth;
    return t2.auth = function(e3) {
      const t3 = n2.call(this, e3);
      return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach((e4) => {
        var n3;
        t3[e4] = (n3 = t3[e4], function(e5) {
          e5 = e5 || {};
          const { success: t4, fail: s2, complete: r2 } = ee(e5);
          if (!(t4 || s2 || r2))
            return n3.call(this, e5);
          n3.call(this, e5).then((e6) => {
            t4 && t4(e6), r2 && r2(e6);
          }, (e6) => {
            s2 && s2(e6), r2 && r2(e6);
          });
        }).bind(t3);
      }), t3;
    }, t2.customAuth = t2.auth, t2;
  };
  var St = vt;
  var bt = class extends de {
    getAccessToken() {
      return new Promise((e2, t2) => {
        const n2 = "Anonymous_Access_token";
        this.setAccessToken(n2), e2(n2);
      });
    }
    setupRequest(e2, t2) {
      const n2 = Object.assign({}, e2, { spaceId: this.config.spaceId, timestamp: Date.now() }), s2 = { "Content-Type": "application/json" };
      "auth" !== t2 && (n2.token = this.accessToken, s2["x-basement-token"] = this.accessToken), s2["x-serverless-sign"] = he.sign(n2, this.config.clientSecret);
      const r2 = le();
      s2["x-client-info"] = encodeURIComponent(JSON.stringify(r2));
      const { token: i2 } = re();
      return s2["x-client-token"] = i2, { url: this.config.requestUrl, method: "POST", data: n2, dataType: "json", header: JSON.parse(JSON.stringify(s2)) };
    }
    uploadFileToOSS({ url: e2, formData: t2, name: n2, filePath: s2, fileType: r2, onUploadProgress: i2 }) {
      return new Promise((o2, a2) => {
        const c2 = this.adapter.uploadFile({ url: e2, formData: t2, name: n2, filePath: s2, fileType: r2, success(e3) {
          e3 && e3.statusCode < 400 ? o2(e3) : a2(new te({ code: "UPLOAD_FAILED", message: "文件上传失败" }));
        }, fail(e3) {
          a2(new te({ code: e3.code || "UPLOAD_FAILED", message: e3.message || e3.errMsg || "文件上传失败" }));
        } });
        "function" == typeof i2 && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((e3) => {
          i2({ loaded: e3.totalBytesSent, total: e3.totalBytesExpectedToSend });
        });
      });
    }
    uploadFile({ filePath: e2, cloudPath: t2, fileType: n2 = "image", onUploadProgress: s2 }) {
      if (!t2)
        throw new te({ code: "CLOUDPATH_REQUIRED", message: "cloudPath不可为空" });
      let r2;
      return this.getOSSUploadOptionsFromPath({ cloudPath: t2 }).then((t3) => {
        const { url: i2, formData: o2, name: a2 } = t3.result;
        r2 = t3.result.fileUrl;
        const c2 = { url: i2, formData: o2, name: a2, filePath: e2, fileType: n2 };
        return this.uploadFileToOSS(Object.assign({}, c2, { onUploadProgress: s2 }));
      }).then(() => this.reportOSSUpload({ cloudPath: t2 })).then((t3) => new Promise((n3, s3) => {
        t3.success ? n3({ success: true, filePath: e2, fileID: r2 }) : s3(new te({ code: "UPLOAD_FAILED", message: "文件上传失败" }));
      }));
    }
    deleteFile({ fileList: e2 }) {
      const t2 = { method: "serverless.file.resource.delete", params: JSON.stringify({ fileList: e2 }) };
      return this.request(this.setupRequest(t2)).then((e3) => {
        if (e3.success)
          return e3.result;
        throw new te({ code: "DELETE_FILE_FAILED", message: "删除文件失败" });
      });
    }
    getTempFileURL({ fileList: e2, maxAge: t2 } = {}) {
      if (!Array.isArray(e2) || 0 === e2.length)
        throw new te({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" });
      const n2 = { method: "serverless.file.resource.getTempFileURL", params: JSON.stringify({ fileList: e2, maxAge: t2 }) };
      return this.request(this.setupRequest(n2)).then((e3) => {
        if (e3.success)
          return { fileList: e3.result.fileList.map((e4) => ({ fileID: e4.fileID, tempFileURL: e4.tempFileURL })) };
        throw new te({ code: "GET_TEMP_FILE_URL_FAILED", message: "获取临时文件链接失败" });
      });
    }
  };
  var kt = { init(e2) {
    const t2 = new bt(e2), n2 = { signInAnonymously: function() {
      return t2.authorize();
    }, getLoginState: function() {
      return Promise.resolve(false);
    } };
    return t2.auth = function() {
      return n2;
    }, t2.customAuth = t2.auth, t2;
  } }, At = n(function(e2, t2) {
    e2.exports = r.enc.Hex;
  });
  function Pt(e2 = "", t2 = {}) {
    const { data: n2, functionName: s2, method: r2, headers: i2, signHeaderKeys: o2 = [], config: a2 } = t2, c2 = Date.now(), u2 = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e3) {
      var t3 = 16 * Math.random() | 0;
      return ("x" === e3 ? t3 : 3 & t3 | 8).toString(16);
    }), l2 = Object.assign({}, i2, { "x-from-app-id": a2.appId, "x-from-env-id": a2.envId, "x-to-env-id": a2.envId, "x-from-instance-id": c2, "x-from-function-name": s2, "x-client-timestamp": c2, "x-alipay-source": "client", "x-request-id": u2, "x-alipay-callid": u2 }), h2 = ["x-from-app-id", "x-from-env-id", "x-to-env-id", "x-from-instance-id", "x-from-function-name", "x-client-timestamp"].concat(o2), [d2 = "", p2 = ""] = e2.split("?") || [], f2 = function(e3) {
      const t3 = e3.signedHeaders.join(";"), n3 = e3.signedHeaders.map((t4) => `${t4.toLowerCase()}:${e3.headers[t4]}
`).join(""), s3 = _e(e3.body).toString(At), r3 = `${e3.method.toUpperCase()}
${e3.path}
${e3.query}
${n3}
${t3}
${s3}
`, i3 = _e(r3).toString(At), o3 = `HMAC-SHA256
${e3.timestamp}
${i3}
`, a3 = we(o3, e3.secretKey).toString(At);
      return `HMAC-SHA256 Credential=${e3.secretId}, SignedHeaders=${t3}, Signature=${a3}`;
    }({ path: d2, query: p2, method: r2, headers: l2, timestamp: c2, body: JSON.stringify(n2), secretId: a2.secretId, secretKey: a2.secretKey, signedHeaders: h2.sort() });
    return { url: `${a2.endpoint}${e2.replace(/^\//, "")}`, headers: Object.assign({}, l2, { Authorization: f2 }) };
  }
  function Tt({ url: e2, data: t2, method: n2 = "POST", headers: s2 = {} }) {
    return new Promise((r2, i2) => {
      ne.request({ url: e2, method: n2, data: t2, header: s2, dataType: "json", complete: (e3 = {}) => {
        if (!e3.statusCode || e3.statusCode >= 400) {
          const { errMsg: t3 } = e3.data || {};
          return i2(new te({ code: "SYS_ERR", message: t3 || e3.errMsg || "request:fail" }));
        }
        r2({ status: e3.statusCode, data: e3.data, headers: e3.header });
      } });
    });
  }
  function Ct(e2, t2) {
    const { path: n2, data: s2, method: r2 = "GET" } = e2, { url: i2, headers: o2 } = Pt(n2, { functionName: "", data: s2, method: r2, headers: { "x-alipay-cloud-mode": "oss", "x-data-api-type": "oss", "x-expire-timestamp": Date.now() + 6e4 }, signHeaderKeys: ["x-data-api-type", "x-expire-timestamp"], config: t2 });
    return Tt({ url: i2, data: s2, method: r2, headers: o2 }).then((e3) => {
      const t3 = e3.data || {};
      if (!t3.success)
        throw new te({ code: e3.code, message: e3.message, requestId: e3.trace_id });
      return t3.data || {};
    }).catch((e3) => {
      throw new te({ code: e3.errCode, message: e3.errMsg, requestId: e3.requestId });
    });
  }
  function xt(e2 = "") {
    const t2 = e2.trim().replace(/^cloud:\/\//, ""), n2 = t2.indexOf("/");
    if (n2 <= 0)
      throw new te({ code: "INVALID_PARAM", message: "fileID不合法" });
    const s2 = t2.substring(0, n2), r2 = t2.substring(n2 + 1);
    return s2 !== this.config.envId && console.warn("file ".concat(e2, " does not belong to env ").concat(this.config.envId)), r2;
  }
  var Ot = class {
    constructor(e2) {
      ["spaceId", "spaceAppId", "accessKey", "secretKey"].forEach((t3) => {
        if (!Object.prototype.hasOwnProperty.call(e2, t3))
          throw new Error(`${t3} required`);
      });
      const { spaceAppId: t2, accessKey: n2, ...s2 } = e2;
      this.config = Object.assign({}, { endpoint: e2.endpoint || `https://${e2.envId}.api-hz.cloudbasefunction.cn/`, envId: e2.spaceId, appId: t2, secretId: n2 }, s2);
    }
    callFunction(e2) {
      return function(e3, t2) {
        const { name: n2, data: s2 } = e3, r2 = "POST", { url: i2, headers: o2 } = Pt("/functions/invokeFunction", { functionName: n2, data: s2, method: r2, headers: { "x-to-function-name": n2 }, signHeaderKeys: ["x-to-function-name"], config: t2 });
        return Tt({ url: i2, data: s2, method: r2, headers: o2 }).then((e4) => (e4.errCode = 0, e4.success = true, e4.requestId = e4.requestID || e4.requestId, e4.result = e4.data, delete e4.requestID, delete e4.data, e4)).catch((e4) => {
          throw new te({ code: e4.errCode, message: e4.errMsg, requestId: e4.requestId });
        });
      }(e2, this.config);
    }
    uploadFileToOSS({ url: e2, filePath: t2, fileType: n2, formData: s2, onUploadProgress: r2 }) {
      return new Promise((i2, o2) => {
        const a2 = ne.uploadFile({ url: e2, filePath: t2, fileType: n2, formData: s2, success(e3) {
          e3 && e3.statusCode < 400 ? i2(e3) : o2(new te({ code: "UPLOAD_FAILED", message: "文件上传失败" }));
        }, fail(e3) {
          o2(new te({ code: e3.code || "UPLOAD_FAILED", message: e3.message || e3.errMsg || "文件上传失败" }));
        } });
        "function" == typeof r2 && a2 && "function" == typeof a2.onProgressUpdate && a2.onProgressUpdate((e3) => {
          r2({ loaded: e3.totalBytesSent, total: e3.totalBytesExpectedToSend });
        });
      });
    }
    async uploadFile({ filePath: e2, cloudPath: t2 = "", fileType: n2 = "image", onUploadProgress: s2 }) {
      if ("string" !== f(t2))
        throw new te({ code: "INVALID_PARAM", message: "cloudPath必须为字符串类型" });
      if (!(t2 = t2.trim()))
        throw new te({ code: "INVALID_PARAM", message: "cloudPath不可为空" });
      if (/:\/\//.test(t2))
        throw new te({ code: "INVALID_PARAM", message: "cloudPath不合法" });
      const r2 = await Ct({ path: "/".concat(t2.replace(/^\//, ""), "?post_url") }, this.config), { file_id: i2, upload_url: o2, form_data: a2 } = r2, c2 = a2 && a2.reduce((e3, t3) => (e3[t3.key] = t3.value, e3), {});
      return this.uploadFileToOSS({ url: o2, filePath: e2, fileType: n2, formData: c2, onUploadProgress: s2 }).then(() => ({ fileID: i2 }));
    }
    async getTempFileURL({ fileList: e2 }) {
      return new Promise((t2, n2) => {
        (!e2 || e2.length < 0) && n2(new te({ errCode: "INVALID_PARAM", errMsg: "fileList不能为空数组" })), e2.length > 50 && n2(new te({ errCode: "INVALID_PARAM", errMsg: "fileList数组长度不能超过50" }));
        const s2 = [];
        for (const t3 of e2) {
          "string" !== f(t3) && n2(new te({ errCode: "INVALID_PARAM", errMsg: "fileList的元素必须是非空的字符串" }));
          const e3 = xt.call(this, t3);
          s2.push({ file_id: e3, expire: 600 });
        }
        Ct({ path: "/?download_url", data: { file_list: s2 }, method: "POST" }, this.config).then((e3) => {
          const { file_list: n3 = [] } = e3;
          t2({ fileList: n3.map((e4) => ({ fileID: e4.file_id, tempFileURL: e4.download_url })) });
        }).catch((e3) => n2(e3));
      });
    }
    async deleteFile({ fileList: e2 }) {
      return new Promise((t2, n2) => {
        (!e2 || e2.length < 0) && n2(new te({ errCode: "INVALID_PARAM", errMsg: "fileList不能为空数组" })), e2.length > 50 && n2(new te({ errCode: "INVALID_PARAM", errMsg: "fileList数组长度不能超过50" }));
        const s2 = [];
        for (const t3 of e2)
          "string" !== f(t3) && n2(new te({ errCode: "INVALID_PARAM", errMsg: "fileList的元素必须是非空的字符串" })), s2.push(xt.call(this, t3));
        Ct({ path: "/?delete", data: { file_list: s2 }, method: "POST" }, this.config).then((e3) => {
          const { file_list: n3 = [] } = e3;
          t2({ fileList: n3.map((e4) => ({ fileID: e4.file_id, tempFileURL: e4.download_url })) });
        }).catch((e3) => n2(e3));
      });
    }
  };
  var Et = { init: (e2) => {
    e2.envId = e2.spaceId, e2.provider = "alipay";
    const t2 = new Ot(e2);
    return t2.auth = function() {
      return { signInAnonymously: function() {
        return Promise.resolve();
      }, getLoginState: function() {
        return Promise.resolve(true);
      } };
    }, t2;
  } };
  function Lt({ data: e2 }) {
    let t2;
    t2 = le();
    const n2 = JSON.parse(JSON.stringify(e2 || {}));
    if (Object.assign(n2, { clientInfo: t2 }), !n2.uniIdToken) {
      const { token: e3 } = re();
      e3 && (n2.uniIdToken = e3);
    }
    return n2;
  }
  async function Rt({ name: e2, data: t2 } = {}) {
    await this.__dev__.initLocalNetwork();
    const { localAddress: n2, localPort: s2 } = this.__dev__, r2 = { aliyun: "aliyun", tencent: "tcb", alipay: "alipay" }[this.config.provider], i2 = this.config.spaceId, o2 = `http://${n2}:${s2}/system/check-function`, a2 = `http://${n2}:${s2}/cloudfunctions/${e2}`;
    return new Promise((t3, n3) => {
      ne.request({ method: "POST", url: o2, data: { name: e2, platform: P, provider: r2, spaceId: i2 }, timeout: 3e3, success(e3) {
        t3(e3);
      }, fail() {
        t3({ data: { code: "NETWORK_ERROR", message: "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下，自动切换为已部署的云函数。" } });
      } });
    }).then(({ data: e3 } = {}) => {
      const { code: t3, message: n3 } = e3 || {};
      return { code: 0 === t3 ? 0 : t3 || "SYS_ERR", message: n3 || "SYS_ERR" };
    }).then(({ code: n3, message: s3 }) => {
      if (0 !== n3) {
        switch (n3) {
          case "MODULE_ENCRYPTED":
            console.error(`此云函数（${e2}）依赖加密公共模块不可本地调试，自动切换为云端已部署的云函数`);
            break;
          case "FUNCTION_ENCRYPTED":
            console.error(`此云函数（${e2}）已加密不可本地调试，自动切换为云端已部署的云函数`);
            break;
          case "ACTION_ENCRYPTED":
            console.error(s3 || "需要访问加密的uni-clientDB-action，自动切换为云端环境");
            break;
          case "NETWORK_ERROR": {
            const e3 = "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下";
            throw console.error(e3), new Error(e3);
          }
          case "SWITCH_TO_CLOUD":
            break;
          default: {
            const e3 = `检测本地调试服务出现错误：${s3}，请检查网络环境或重启客户端再试`;
            throw console.error(e3), new Error(e3);
          }
        }
        return this._callCloudFunction({ name: e2, data: t2 });
      }
      return new Promise((e3, n4) => {
        const s4 = Lt.call(this, { data: t2 });
        ne.request({ method: "POST", url: a2, data: { provider: r2, platform: P, param: s4 }, success: ({ statusCode: t3, data: s5 } = {}) => !t3 || t3 >= 400 ? n4(new te({ code: s5.code || "SYS_ERR", message: s5.message || "request:fail" })) : e3({ result: s5 }), fail(e4) {
          n4(new te({ code: e4.code || e4.errCode || "SYS_ERR", message: e4.message || e4.errMsg || "request:fail" }));
        } });
      });
    });
  }
  const Ut = [{ rule: /fc_function_not_found|FUNCTION_NOT_FOUND/, content: "，云函数[{functionName}]在云端不存在，请检查此云函数名称是否正确以及该云函数是否已上传到服务空间", mode: "append" }];
  var Nt = /[\\^$.*+?()[\]{}|]/g, Dt = RegExp(Nt.source);
  function Mt(e2, t2, n2) {
    return e2.replace(new RegExp((s2 = t2) && Dt.test(s2) ? s2.replace(Nt, "\\$&") : s2, "g"), n2);
    var s2;
  }
  const Ft = "request", Kt = "response", jt = "both";
  const kn = { code: 2e4, message: "System error" }, An = { code: 20101, message: "Invalid client" };
  function Cn(e2) {
    const { errSubject: t2, subject: n2, errCode: s2, errMsg: r2, code: i2, message: o2, cause: a2 } = e2 || {};
    return new te({ subject: t2 || n2 || "uni-secure-network", code: s2 || i2 || kn.code, message: r2 || o2, cause: a2 });
  }
  let On;
  function Nn({ secretType: e2 } = {}) {
    return e2 === Ft || e2 === Kt || e2 === jt;
  }
  function Dn({ name: e2, data: t2 = {} } = {}) {
    return "DCloud-clientDB" === e2 && "encryption" === t2.redirectTo && "getAppClientKey" === t2.action;
  }
  function Mn({ provider: e2, spaceId: t2, functionName: n2 } = {}) {
    const { appId: s2, uniPlatform: r2, osName: i2 } = ce();
    let o2 = r2;
    "app" === r2 && (o2 = i2);
    const a2 = function({ provider: e3, spaceId: t3 } = {}) {
      const n3 = A;
      if (!n3)
        return {};
      e3 = function(e4) {
        return "tencent" === e4 ? "tcb" : e4;
      }(e3);
      const s3 = n3.find((n4) => n4.provider === e3 && n4.spaceId === t3);
      return s3 && s3.config;
    }({ provider: e2, spaceId: t2 });
    if (!a2 || !a2.accessControl || !a2.accessControl.enable)
      return false;
    const c2 = a2.accessControl.function || {}, u2 = Object.keys(c2);
    if (0 === u2.length)
      return true;
    const l2 = function(e3, t3) {
      let n3, s3, r3;
      for (let i3 = 0; i3 < e3.length; i3++) {
        const o3 = e3[i3];
        o3 !== t3 ? "*" !== o3 ? o3.split(",").map((e4) => e4.trim()).indexOf(t3) > -1 && (s3 = o3) : r3 = o3 : n3 = o3;
      }
      return n3 || s3 || r3;
    }(u2, n2);
    if (!l2)
      return false;
    if ((c2[l2] || []).find((e3 = {}) => e3.appId === s2 && (e3.platform || "").toLowerCase() === o2.toLowerCase()))
      return true;
    throw console.error(`此应用[appId: ${s2}, platform: ${o2}]不在云端配置的允许访问的应用列表内，参考：https://uniapp.dcloud.net.cn/uniCloud/secure-network.html#verify-client`), Cn(An);
  }
  function qn({ functionName: e2, result: t2, logPvd: n2 }) {
    if (this.__dev__.debugLog && t2 && t2.requestId) {
      const s2 = JSON.stringify({ spaceId: this.config.spaceId, functionName: e2, requestId: t2.requestId });
      console.log(`[${n2}-request]${s2}[/${n2}-request]`);
    }
  }
  function Fn(e2) {
    const t2 = e2.callFunction, n2 = function(n3) {
      const s2 = n3.name;
      n3.data = Lt.call(e2, { data: n3.data });
      const r2 = { aliyun: "aliyun", tencent: "tcb", tcb: "tcb", alipay: "alipay" }[this.config.provider], i2 = Nn(n3), o2 = Dn(n3), a2 = i2 || o2;
      return t2.call(this, n3).then((e3) => (e3.errCode = 0, !a2 && qn.call(this, { functionName: s2, result: e3, logPvd: r2 }), Promise.resolve(e3)), (e3) => (!a2 && qn.call(this, { functionName: s2, result: e3, logPvd: r2 }), e3 && e3.message && (e3.message = function({ message: e4 = "", extraInfo: t3 = {}, formatter: n4 = [] } = {}) {
        for (let s3 = 0; s3 < n4.length; s3++) {
          const { rule: r3, content: i3, mode: o3 } = n4[s3], a3 = e4.match(r3);
          if (!a3)
            continue;
          let c2 = i3;
          for (let e5 = 1; e5 < a3.length; e5++)
            c2 = Mt(c2, `{$${e5}}`, a3[e5]);
          for (const e5 in t3)
            c2 = Mt(c2, `{${e5}}`, t3[e5]);
          return "replace" === o3 ? c2 : e4 + c2;
        }
        return e4;
      }({ message: `[${n3.name}]: ${e3.message}`, formatter: Ut, extraInfo: { functionName: s2 } })), Promise.reject(e3)));
    };
    e2.callFunction = function(t3) {
      const { provider: s2, spaceId: r2 } = e2.config, i2 = t3.name;
      let o2, a2;
      if (t3.data = t3.data || {}, e2.__dev__.debugInfo && !e2.__dev__.debugInfo.forceRemote && C ? (e2._callCloudFunction || (e2._callCloudFunction = n2, e2._callLocalFunction = Rt), o2 = Rt) : o2 = n2, o2 = o2.bind(e2), Dn(t3))
        a2 = n2.call(e2, t3);
      else if (Nn(t3)) {
        a2 = new On({ secretType: t3.secretType, uniCloudIns: e2 }).wrapEncryptDataCallFunction(n2.bind(e2))(t3);
      } else if (Mn({ provider: s2, spaceId: r2, functionName: i2 })) {
        a2 = new On({ secretType: t3.secretType, uniCloudIns: e2 }).wrapVerifyClientCallFunction(n2.bind(e2))(t3);
      } else
        a2 = o2(t3);
      return Object.defineProperty(a2, "result", { get: () => (console.warn("当前返回结果为Promise类型，不可直接访问其result属性，详情请参考：https://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), {}) }), a2;
    };
  }
  On = class {
    constructor() {
      throw Cn({ message: `Platform ${P} is not enabled, please check whether secure network module is enabled in your manifest.json` });
    }
  };
  const Kn = Symbol("CLIENT_DB_INTERNAL");
  function jn(e2, t2) {
    return e2.then = "DoNotReturnProxyWithAFunctionNamedThen", e2._internalType = Kn, e2.inspect = null, e2.__v_raw = void 0, new Proxy(e2, { get(e3, n2, s2) {
      if ("_uniClient" === n2)
        return null;
      if ("symbol" == typeof n2)
        return e3[n2];
      if (n2 in e3 || "string" != typeof n2) {
        const t3 = e3[n2];
        return "function" == typeof t3 ? t3.bind(e3) : t3;
      }
      return t2.get(e3, n2, s2);
    } });
  }
  function Bn(e2) {
    return { on: (t2, n2) => {
      e2[t2] = e2[t2] || [], e2[t2].indexOf(n2) > -1 || e2[t2].push(n2);
    }, off: (t2, n2) => {
      e2[t2] = e2[t2] || [];
      const s2 = e2[t2].indexOf(n2);
      -1 !== s2 && e2[t2].splice(s2, 1);
    } };
  }
  const $n = ["db.Geo", "db.command", "command.aggregate"];
  function Wn(e2, t2) {
    return $n.indexOf(`${e2}.${t2}`) > -1;
  }
  function Hn(e2) {
    switch (f(e2 = se(e2))) {
      case "array":
        return e2.map((e3) => Hn(e3));
      case "object":
        return e2._internalType === Kn || Object.keys(e2).forEach((t2) => {
          e2[t2] = Hn(e2[t2]);
        }), e2;
      case "regexp":
        return { $regexp: { source: e2.source, flags: e2.flags } };
      case "date":
        return { $date: e2.toISOString() };
      default:
        return e2;
    }
  }
  function zn(e2) {
    return e2 && e2.content && e2.content.$method;
  }
  class Jn {
    constructor(e2, t2, n2) {
      this.content = e2, this.prevStage = t2 || null, this.udb = null, this._database = n2;
    }
    toJSON() {
      let e2 = this;
      const t2 = [e2.content];
      for (; e2.prevStage; )
        e2 = e2.prevStage, t2.push(e2.content);
      return { $db: t2.reverse().map((e3) => ({ $method: e3.$method, $param: Hn(e3.$param) })) };
    }
    toString() {
      return JSON.stringify(this.toJSON());
    }
    getAction() {
      const e2 = this.toJSON().$db.find((e3) => "action" === e3.$method);
      return e2 && e2.$param && e2.$param[0];
    }
    getCommand() {
      return { $db: this.toJSON().$db.filter((e2) => "action" !== e2.$method) };
    }
    get isAggregate() {
      let e2 = this;
      for (; e2; ) {
        const t2 = zn(e2), n2 = zn(e2.prevStage);
        if ("aggregate" === t2 && "collection" === n2 || "pipeline" === t2)
          return true;
        e2 = e2.prevStage;
      }
      return false;
    }
    get isCommand() {
      let e2 = this;
      for (; e2; ) {
        if ("command" === zn(e2))
          return true;
        e2 = e2.prevStage;
      }
      return false;
    }
    get isAggregateCommand() {
      let e2 = this;
      for (; e2; ) {
        const t2 = zn(e2), n2 = zn(e2.prevStage);
        if ("aggregate" === t2 && "command" === n2)
          return true;
        e2 = e2.prevStage;
      }
      return false;
    }
    getNextStageFn(e2) {
      const t2 = this;
      return function() {
        return Vn({ $method: e2, $param: Hn(Array.from(arguments)) }, t2, t2._database);
      };
    }
    get count() {
      return this.isAggregate ? this.getNextStageFn("count") : function() {
        return this._send("count", Array.from(arguments));
      };
    }
    get remove() {
      return this.isCommand ? this.getNextStageFn("remove") : function() {
        return this._send("remove", Array.from(arguments));
      };
    }
    get() {
      return this._send("get", Array.from(arguments));
    }
    get add() {
      return this.isCommand ? this.getNextStageFn("add") : function() {
        return this._send("add", Array.from(arguments));
      };
    }
    update() {
      return this._send("update", Array.from(arguments));
    }
    end() {
      return this._send("end", Array.from(arguments));
    }
    get set() {
      return this.isCommand ? this.getNextStageFn("set") : function() {
        throw new Error("JQL禁止使用set方法");
      };
    }
    _send(e2, t2) {
      const n2 = this.getAction(), s2 = this.getCommand();
      if (s2.$db.push({ $method: e2, $param: Hn(t2) }), S) {
        const e3 = s2.$db.find((e4) => "collection" === e4.$method), t3 = e3 && e3.$param;
        t3 && 1 === t3.length && "string" == typeof e3.$param[0] && e3.$param[0].indexOf(",") > -1 && console.warn("检测到使用JQL语法联表查询时，未使用getTemp先过滤主表数据，在主表数据量大的情况下可能会查询缓慢。\n- 如何优化请参考此文档：https://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp \n- 如果主表数据量很小请忽略此信息，项目发行时不会出现此提示。");
      }
      return this._database._callCloudFunction({ action: n2, command: s2 });
    }
  }
  function Vn(e2, t2, n2) {
    return jn(new Jn(e2, t2, n2), { get(e3, t3) {
      let s2 = "db";
      return e3 && e3.content && (s2 = e3.content.$method), Wn(s2, t3) ? Vn({ $method: t3 }, e3, n2) : function() {
        return Vn({ $method: t3, $param: Hn(Array.from(arguments)) }, e3, n2);
      };
    } });
  }
  function Gn({ path: e2, method: t2 }) {
    return class {
      constructor() {
        this.param = Array.from(arguments);
      }
      toJSON() {
        return { $newDb: [...e2.map((e3) => ({ $method: e3 })), { $method: t2, $param: this.param }] };
      }
      toString() {
        return JSON.stringify(this.toJSON());
      }
    };
  }
  function Yn(e2, t2 = {}) {
    return jn(new e2(t2), { get: (e3, t3) => Wn("db", t3) ? Vn({ $method: t3 }, null, e3) : function() {
      return Vn({ $method: t3, $param: Hn(Array.from(arguments)) }, null, e3);
    } });
  }
  class Qn extends class {
    constructor({ uniClient: e2 = {}, isJQL: t2 = false } = {}) {
      this._uniClient = e2, this._authCallBacks = {}, this._dbCallBacks = {}, e2._isDefault && (this._dbCallBacks = L("_globalUniCloudDatabaseCallback")), t2 || (this.auth = Bn(this._authCallBacks)), this._isJQL = t2, Object.assign(this, Bn(this._dbCallBacks)), this.env = jn({}, { get: (e3, t3) => ({ $env: t3 }) }), this.Geo = jn({}, { get: (e3, t3) => Gn({ path: ["Geo"], method: t3 }) }), this.serverDate = Gn({ path: [], method: "serverDate" }), this.RegExp = Gn({ path: [], method: "RegExp" });
    }
    getCloudEnv(e2) {
      if ("string" != typeof e2 || !e2.trim())
        throw new Error("getCloudEnv参数错误");
      return { $env: e2.replace("$cloudEnv_", "") };
    }
    _callback(e2, t2) {
      const n2 = this._dbCallBacks;
      n2[e2] && n2[e2].forEach((e3) => {
        e3(...t2);
      });
    }
    _callbackAuth(e2, t2) {
      const n2 = this._authCallBacks;
      n2[e2] && n2[e2].forEach((e3) => {
        e3(...t2);
      });
    }
    multiSend() {
      const e2 = Array.from(arguments), t2 = e2.map((e3) => {
        const t3 = e3.getAction(), n2 = e3.getCommand();
        if ("getTemp" !== n2.$db[n2.$db.length - 1].$method)
          throw new Error("multiSend只支持子命令内使用getTemp");
        return { action: t3, command: n2 };
      });
      return this._callCloudFunction({ multiCommand: t2, queryList: e2 });
    }
  } {
    _parseResult(e2) {
      return this._isJQL ? e2.result : e2;
    }
    _callCloudFunction({ action: e2, command: t2, multiCommand: n2, queryList: s2 }) {
      function r2(e3, t3) {
        if (n2 && s2)
          for (let n3 = 0; n3 < s2.length; n3++) {
            const r3 = s2[n3];
            r3.udb && "function" == typeof r3.udb.setResult && (t3 ? r3.udb.setResult(t3) : r3.udb.setResult(e3.result.dataList[n3]));
          }
      }
      const i2 = this, o2 = this._isJQL ? "databaseForJQL" : "database";
      function a2(e3) {
        return i2._callback("error", [e3]), M(q(o2, "fail"), e3).then(() => M(q(o2, "complete"), e3)).then(() => (r2(null, e3), Y(j, { type: W, content: e3 }), Promise.reject(e3)));
      }
      const c2 = M(q(o2, "invoke")), u2 = this._uniClient;
      return c2.then(() => u2.callFunction({ name: "DCloud-clientDB", type: l, data: { action: e2, command: t2, multiCommand: n2 } })).then((e3) => {
        const { code: t3, message: n3, token: s3, tokenExpired: c3, systemInfo: u3 = [] } = e3.result;
        if (u3)
          for (let e4 = 0; e4 < u3.length; e4++) {
            const { level: t4, message: n4, detail: s4 } = u3[e4], r3 = console["warn" === t4 ? "error" : t4] || console.log;
            let i3 = "[System Info]" + n4;
            s4 && (i3 = `${i3}
详细信息：${s4}`), r3(i3);
          }
        if (t3) {
          return a2(new te({ code: t3, message: n3, requestId: e3.requestId }));
        }
        e3.result.errCode = e3.result.errCode || e3.result.code, e3.result.errMsg = e3.result.errMsg || e3.result.message, s3 && c3 && (ie({ token: s3, tokenExpired: c3 }), this._callbackAuth("refreshToken", [{ token: s3, tokenExpired: c3 }]), this._callback("refreshToken", [{ token: s3, tokenExpired: c3 }]), Y($, { token: s3, tokenExpired: c3 }));
        const l2 = [{ prop: "affectedDocs", tips: "affectedDocs不再推荐使用，请使用inserted/deleted/updated/data.length替代" }, { prop: "code", tips: "code不再推荐使用，请使用errCode替代" }, { prop: "message", tips: "message不再推荐使用，请使用errMsg替代" }];
        for (let t4 = 0; t4 < l2.length; t4++) {
          const { prop: n4, tips: s4 } = l2[t4];
          if (n4 in e3.result) {
            const t5 = e3.result[n4];
            Object.defineProperty(e3.result, n4, { get: () => (console.warn(s4), t5) });
          }
        }
        return function(e4) {
          return M(q(o2, "success"), e4).then(() => M(q(o2, "complete"), e4)).then(() => {
            r2(e4, null);
            const t4 = i2._parseResult(e4);
            return Y(j, { type: W, content: t4 }), Promise.resolve(t4);
          });
        }(e3);
      }, (e3) => {
        /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e3.message) && console.warn("clientDB未初始化，请在web控制台保存一次schema以开启clientDB");
        return a2(new te({ code: e3.code || "SYSTEM_ERROR", message: e3.message, requestId: e3.requestId }));
      });
    }
  }
  const Xn = "token无效，跳转登录页面", Zn = "token过期，跳转登录页面", es = { TOKEN_INVALID_TOKEN_EXPIRED: Zn, TOKEN_INVALID_INVALID_CLIENTID: Xn, TOKEN_INVALID: Xn, TOKEN_INVALID_WRONG_TOKEN: Xn, TOKEN_INVALID_ANONYMOUS_USER: Xn }, ts = { "uni-id-token-expired": Zn, "uni-id-check-token-failed": Xn, "uni-id-token-not-exist": Xn, "uni-id-check-device-feature-failed": Xn };
  function ns(e2, t2) {
    let n2 = "";
    return n2 = e2 ? `${e2}/${t2}` : t2, n2.replace(/^\//, "");
  }
  function ss(e2 = [], t2 = "") {
    const n2 = [], s2 = [];
    return e2.forEach((e3) => {
      true === e3.needLogin ? n2.push(ns(t2, e3.path)) : false === e3.needLogin && s2.push(ns(t2, e3.path));
    }), { needLoginPage: n2, notNeedLoginPage: s2 };
  }
  function rs(e2) {
    return e2.split("?")[0].replace(/^\//, "");
  }
  function is() {
    return function(e2) {
      let t2 = e2 && e2.$page && e2.$page.fullPath || "";
      return t2 ? ("/" !== t2.charAt(0) && (t2 = "/" + t2), t2) : t2;
    }(function() {
      const e2 = getCurrentPages();
      return e2[e2.length - 1];
    }());
  }
  function os() {
    return rs(is());
  }
  function as(e2 = "", t2 = {}) {
    if (!e2)
      return false;
    if (!(t2 && t2.list && t2.list.length))
      return false;
    const n2 = t2.list, s2 = rs(e2);
    return n2.some((e3) => e3.pagePath === s2);
  }
  const cs = !!e$1.uniIdRouter;
  const { loginPage: us, routerNeedLogin: ls, resToLogin: hs, needLoginPage: ds, notNeedLoginPage: ps, loginPageInTabBar: fs } = function({ pages: t2 = [], subPackages: n2 = [], uniIdRouter: s2 = {}, tabBar: r2 = {} } = e$1) {
    const { loginPage: i2, needLogin: o2 = [], resToLogin: a2 = true } = s2, { needLoginPage: c2, notNeedLoginPage: u2 } = ss(t2), { needLoginPage: l2, notNeedLoginPage: h2 } = function(e2 = []) {
      const t3 = [], n3 = [];
      return e2.forEach((e3) => {
        const { root: s3, pages: r3 = [] } = e3, { needLoginPage: i3, notNeedLoginPage: o3 } = ss(r3, s3);
        t3.push(...i3), n3.push(...o3);
      }), { needLoginPage: t3, notNeedLoginPage: n3 };
    }(n2);
    return { loginPage: i2, routerNeedLogin: o2, resToLogin: a2, needLoginPage: [...c2, ...l2], notNeedLoginPage: [...u2, ...h2], loginPageInTabBar: as(i2, r2) };
  }();
  if (ds.indexOf(us) > -1)
    throw new Error(`Login page [${us}] should not be "needLogin", please check your pages.json`);
  function gs(e2) {
    const t2 = os();
    if ("/" === e2.charAt(0))
      return e2;
    const [n2, s2] = e2.split("?"), r2 = n2.replace(/^\//, "").split("/"), i2 = t2.split("/");
    i2.pop();
    for (let e3 = 0; e3 < r2.length; e3++) {
      const t3 = r2[e3];
      ".." === t3 ? i2.pop() : "." !== t3 && i2.push(t3);
    }
    return "" === i2[0] && i2.shift(), "/" + i2.join("/") + (s2 ? "?" + s2 : "");
  }
  function ms(e2) {
    const t2 = rs(gs(e2));
    return !(ps.indexOf(t2) > -1) && (ds.indexOf(t2) > -1 || ls.some((t3) => function(e3, t4) {
      return new RegExp(t4).test(e3);
    }(e2, t3)));
  }
  function ys({ redirect: e2 }) {
    const t2 = rs(e2), n2 = rs(us);
    return os() !== n2 && t2 !== n2;
  }
  function _s({ api: e2, redirect: t2 } = {}) {
    if (!t2 || !ys({ redirect: t2 }))
      return;
    const n2 = function(e3, t3) {
      return "/" !== e3.charAt(0) && (e3 = "/" + e3), t3 ? e3.indexOf("?") > -1 ? e3 + `&uniIdRedirectUrl=${encodeURIComponent(t3)}` : e3 + `?uniIdRedirectUrl=${encodeURIComponent(t3)}` : e3;
    }(us, t2);
    fs ? "navigateTo" !== e2 && "redirectTo" !== e2 || (e2 = "switchTab") : "switchTab" === e2 && (e2 = "navigateTo");
    const s2 = { navigateTo: uni.navigateTo, redirectTo: uni.redirectTo, switchTab: uni.switchTab, reLaunch: uni.reLaunch };
    setTimeout(() => {
      s2[e2]({ url: n2 });
    });
  }
  function ws({ url: e2 } = {}) {
    const t2 = { abortLoginPageJump: false, autoToLoginPage: false }, n2 = function() {
      const { token: e3, tokenExpired: t3 } = re();
      let n3;
      if (e3) {
        if (t3 < Date.now()) {
          const e4 = "uni-id-token-expired";
          n3 = { errCode: e4, errMsg: ts[e4] };
        }
      } else {
        const e4 = "uni-id-check-token-failed";
        n3 = { errCode: e4, errMsg: ts[e4] };
      }
      return n3;
    }();
    if (ms(e2) && n2) {
      n2.uniIdRedirectUrl = e2;
      if (J(B).length > 0)
        return setTimeout(() => {
          Y(B, n2);
        }, 0), t2.abortLoginPageJump = true, t2;
      t2.autoToLoginPage = true;
    }
    return t2;
  }
  function vs() {
    !function() {
      const e3 = is(), { abortLoginPageJump: t2, autoToLoginPage: n2 } = ws({ url: e3 });
      t2 || n2 && _s({ api: "redirectTo", redirect: e3 });
    }();
    const e2 = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];
    for (let t2 = 0; t2 < e2.length; t2++) {
      const n2 = e2[t2];
      uni.addInterceptor(n2, { invoke(e3) {
        const { abortLoginPageJump: t3, autoToLoginPage: s2 } = ws({ url: e3.url });
        return t3 ? e3 : s2 ? (_s({ api: n2, redirect: gs(e3.url) }), false) : e3;
      } });
    }
  }
  function Is() {
    this.onResponse((e2) => {
      const { type: t2, content: n2 } = e2;
      let s2 = false;
      switch (t2) {
        case "cloudobject":
          s2 = function(e3) {
            if ("object" != typeof e3)
              return false;
            const { errCode: t3 } = e3 || {};
            return t3 in ts;
          }(n2);
          break;
        case "clientdb":
          s2 = function(e3) {
            if ("object" != typeof e3)
              return false;
            const { errCode: t3 } = e3 || {};
            return t3 in es;
          }(n2);
      }
      s2 && function(e3 = {}) {
        const t3 = J(B);
        Z().then(() => {
          const n3 = is();
          if (n3 && ys({ redirect: n3 }))
            return t3.length > 0 ? Y(B, Object.assign({ uniIdRedirectUrl: n3 }, e3)) : void (us && _s({ api: "navigateTo", redirect: n3 }));
        });
      }(n2);
    });
  }
  function Ss(e2) {
    !function(e3) {
      e3.onResponse = function(e4) {
        V(j, e4);
      }, e3.offResponse = function(e4) {
        G(j, e4);
      };
    }(e2), function(e3) {
      e3.onNeedLogin = function(e4) {
        V(B, e4);
      }, e3.offNeedLogin = function(e4) {
        G(B, e4);
      }, cs && (L("_globalUniCloudStatus").needLoginInit || (L("_globalUniCloudStatus").needLoginInit = true, Z().then(() => {
        vs.call(e3);
      }), hs && Is.call(e3)));
    }(e2), function(e3) {
      e3.onRefreshToken = function(e4) {
        V($, e4);
      }, e3.offRefreshToken = function(e4) {
        G($, e4);
      };
    }(e2);
  }
  let bs;
  const ks = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", As = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
  function Ps() {
    const e2 = re().token || "", t2 = e2.split(".");
    if (!e2 || 3 !== t2.length)
      return { uid: null, role: [], permission: [], tokenExpired: 0 };
    let n2;
    try {
      n2 = JSON.parse((s2 = t2[1], decodeURIComponent(bs(s2).split("").map(function(e3) {
        return "%" + ("00" + e3.charCodeAt(0).toString(16)).slice(-2);
      }).join(""))));
    } catch (e3) {
      throw new Error("获取当前用户信息出错，详细错误信息为：" + e3.message);
    }
    var s2;
    return n2.tokenExpired = 1e3 * n2.exp, delete n2.exp, delete n2.iat, n2;
  }
  bs = "function" != typeof atob ? function(e2) {
    if (e2 = String(e2).replace(/[\t\n\f\r ]+/g, ""), !As.test(e2))
      throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    var t2;
    e2 += "==".slice(2 - (3 & e2.length));
    for (var n2, s2, r2 = "", i2 = 0; i2 < e2.length; )
      t2 = ks.indexOf(e2.charAt(i2++)) << 18 | ks.indexOf(e2.charAt(i2++)) << 12 | (n2 = ks.indexOf(e2.charAt(i2++))) << 6 | (s2 = ks.indexOf(e2.charAt(i2++))), r2 += 64 === n2 ? String.fromCharCode(t2 >> 16 & 255) : 64 === s2 ? String.fromCharCode(t2 >> 16 & 255, t2 >> 8 & 255) : String.fromCharCode(t2 >> 16 & 255, t2 >> 8 & 255, 255 & t2);
    return r2;
  } : atob;
  var Ts = n(function(e2, t2) {
    Object.defineProperty(t2, "__esModule", { value: true });
    const n2 = "chooseAndUploadFile:ok", s2 = "chooseAndUploadFile:fail";
    function r2(e3, t3) {
      return e3.tempFiles.forEach((e4, n3) => {
        e4.name || (e4.name = e4.path.substring(e4.path.lastIndexOf("/") + 1)), t3 && (e4.fileType = t3), e4.cloudPath = Date.now() + "_" + n3 + e4.name.substring(e4.name.lastIndexOf("."));
      }), e3.tempFilePaths || (e3.tempFilePaths = e3.tempFiles.map((e4) => e4.path)), e3;
    }
    function i2(e3, t3, { onChooseFile: s3, onUploadProgress: r3 }) {
      return t3.then((e4) => {
        if (s3) {
          const t4 = s3(e4);
          if (void 0 !== t4)
            return Promise.resolve(t4).then((t5) => void 0 === t5 ? e4 : t5);
        }
        return e4;
      }).then((t4) => false === t4 ? { errMsg: n2, tempFilePaths: [], tempFiles: [] } : function(e4, t5, s4 = 5, r4) {
        (t5 = Object.assign({}, t5)).errMsg = n2;
        const i3 = t5.tempFiles, o2 = i3.length;
        let a2 = 0;
        return new Promise((n3) => {
          for (; a2 < s4; )
            c2();
          function c2() {
            const s5 = a2++;
            if (s5 >= o2)
              return void (!i3.find((e5) => !e5.url && !e5.errMsg) && n3(t5));
            const u2 = i3[s5];
            e4.uploadFile({ filePath: u2.path, cloudPath: u2.cloudPath, fileType: u2.fileType, cloudPathAsRealPath: u2.cloudPathAsRealPath, onUploadProgress(e5) {
              e5.index = s5, e5.tempFile = u2, e5.tempFilePath = u2.path, r4 && r4(e5);
            } }).then((e5) => {
              u2.url = e5.fileID, s5 < o2 && c2();
            }).catch((e5) => {
              u2.errMsg = e5.errMsg || e5.message, s5 < o2 && c2();
            });
          }
        });
      }(e3, t4, 5, r3));
    }
    t2.initChooseAndUploadFile = function(e3) {
      return function(t3 = { type: "all" }) {
        return "image" === t3.type ? i2(e3, function(e4) {
          const { count: t4, sizeType: n3, sourceType: i3 = ["album", "camera"], extension: o2 } = e4;
          return new Promise((e5, a2) => {
            uni.chooseImage({ count: t4, sizeType: n3, sourceType: i3, extension: o2, success(t5) {
              e5(r2(t5, "image"));
            }, fail(e6) {
              a2({ errMsg: e6.errMsg.replace("chooseImage:fail", s2) });
            } });
          });
        }(t3), t3) : "video" === t3.type ? i2(e3, function(e4) {
          const { camera: t4, compressed: n3, maxDuration: i3, sourceType: o2 = ["album", "camera"], extension: a2 } = e4;
          return new Promise((e5, c2) => {
            uni.chooseVideo({ camera: t4, compressed: n3, maxDuration: i3, sourceType: o2, extension: a2, success(t5) {
              const { tempFilePath: n4, duration: s3, size: i4, height: o3, width: a3 } = t5;
              e5(r2({ errMsg: "chooseVideo:ok", tempFilePaths: [n4], tempFiles: [{ name: t5.tempFile && t5.tempFile.name || "", path: n4, size: i4, type: t5.tempFile && t5.tempFile.type || "", width: a3, height: o3, duration: s3, fileType: "video", cloudPath: "" }] }, "video"));
            }, fail(e6) {
              c2({ errMsg: e6.errMsg.replace("chooseVideo:fail", s2) });
            } });
          });
        }(t3), t3) : i2(e3, function(e4) {
          const { count: t4, extension: n3 } = e4;
          return new Promise((e5, i3) => {
            let o2 = uni.chooseFile;
            if ("undefined" != typeof wx && "function" == typeof wx.chooseMessageFile && (o2 = wx.chooseMessageFile), "function" != typeof o2)
              return i3({ errMsg: s2 + " 请指定 type 类型，该平台仅支持选择 image 或 video。" });
            o2({ type: "all", count: t4, extension: n3, success(t5) {
              e5(r2(t5));
            }, fail(e6) {
              i3({ errMsg: e6.errMsg.replace("chooseFile:fail", s2) });
            } });
          });
        }(t3), t3);
      };
    };
  }), Cs = t(Ts);
  const xs = "manual";
  function Os(e2) {
    return { props: { localdata: { type: Array, default: () => [] }, options: { type: [Object, Array], default: () => ({}) }, spaceInfo: { type: Object, default: () => ({}) }, collection: { type: [String, Array], default: "" }, action: { type: String, default: "" }, field: { type: String, default: "" }, orderby: { type: String, default: "" }, where: { type: [String, Object], default: "" }, pageData: { type: String, default: "add" }, pageCurrent: { type: Number, default: 1 }, pageSize: { type: Number, default: 20 }, getcount: { type: [Boolean, String], default: false }, gettree: { type: [Boolean, String], default: false }, gettreepath: { type: [Boolean, String], default: false }, startwith: { type: String, default: "" }, limitlevel: { type: Number, default: 10 }, groupby: { type: String, default: "" }, groupField: { type: String, default: "" }, distinct: { type: [Boolean, String], default: false }, foreignKey: { type: String, default: "" }, loadtime: { type: String, default: "auto" }, manual: { type: Boolean, default: false } }, data: () => ({ mixinDatacomLoading: false, mixinDatacomHasMore: false, mixinDatacomResData: [], mixinDatacomErrorMessage: "", mixinDatacomPage: {} }), created() {
      this.mixinDatacomPage = { current: this.pageCurrent, size: this.pageSize, count: 0 }, this.$watch(() => {
        var e3 = [];
        return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach((t2) => {
          e3.push(this[t2]);
        }), e3;
      }, (e3, t2) => {
        if (this.loadtime === xs)
          return;
        let n2 = false;
        const s2 = [];
        for (let r2 = 2; r2 < e3.length; r2++)
          e3[r2] !== t2[r2] && (s2.push(e3[r2]), n2 = true);
        e3[0] !== t2[0] && (this.mixinDatacomPage.current = this.pageCurrent), this.mixinDatacomPage.size = this.pageSize, this.onMixinDatacomPropsChange(n2, s2);
      });
    }, methods: { onMixinDatacomPropsChange(e3, t2) {
    }, mixinDatacomEasyGet({ getone: e3 = false, success: t2, fail: n2 } = {}) {
      this.mixinDatacomLoading || (this.mixinDatacomLoading = true, this.mixinDatacomErrorMessage = "", this.mixinDatacomGet().then((n3) => {
        this.mixinDatacomLoading = false;
        const { data: s2, count: r2 } = n3.result;
        this.getcount && (this.mixinDatacomPage.count = r2), this.mixinDatacomHasMore = s2.length < this.pageSize;
        const i2 = e3 ? s2.length ? s2[0] : void 0 : s2;
        this.mixinDatacomResData = i2, t2 && t2(i2);
      }).catch((e4) => {
        this.mixinDatacomLoading = false, this.mixinDatacomErrorMessage = e4, n2 && n2(e4);
      }));
    }, mixinDatacomGet(t2 = {}) {
      let n2 = e2.database(this.spaceInfo);
      const s2 = t2.action || this.action;
      s2 && (n2 = n2.action(s2));
      const r2 = t2.collection || this.collection;
      n2 = Array.isArray(r2) ? n2.collection(...r2) : n2.collection(r2);
      const i2 = t2.where || this.where;
      i2 && Object.keys(i2).length && (n2 = n2.where(i2));
      const o2 = t2.field || this.field;
      o2 && (n2 = n2.field(o2));
      const a2 = t2.foreignKey || this.foreignKey;
      a2 && (n2 = n2.foreignKey(a2));
      const c2 = t2.groupby || this.groupby;
      c2 && (n2 = n2.groupBy(c2));
      const u2 = t2.groupField || this.groupField;
      u2 && (n2 = n2.groupField(u2));
      true === (void 0 !== t2.distinct ? t2.distinct : this.distinct) && (n2 = n2.distinct());
      const l2 = t2.orderby || this.orderby;
      l2 && (n2 = n2.orderBy(l2));
      const h2 = void 0 !== t2.pageCurrent ? t2.pageCurrent : this.mixinDatacomPage.current, d2 = void 0 !== t2.pageSize ? t2.pageSize : this.mixinDatacomPage.size, p2 = void 0 !== t2.getcount ? t2.getcount : this.getcount, f2 = void 0 !== t2.gettree ? t2.gettree : this.gettree, g2 = void 0 !== t2.gettreepath ? t2.gettreepath : this.gettreepath, m2 = { getCount: p2 }, y2 = { limitLevel: void 0 !== t2.limitlevel ? t2.limitlevel : this.limitlevel, startWith: void 0 !== t2.startwith ? t2.startwith : this.startwith };
      return f2 && (m2.getTree = y2), g2 && (m2.getTreePath = y2), n2 = n2.skip(d2 * (h2 - 1)).limit(d2).get(m2), n2;
    } } };
  }
  function Es(e2) {
    return function(t2, n2 = {}) {
      n2 = function(e3, t3 = {}) {
        return e3.customUI = t3.customUI || e3.customUI, e3.parseSystemError = t3.parseSystemError || e3.parseSystemError, Object.assign(e3.loadingOptions, t3.loadingOptions), Object.assign(e3.errorOptions, t3.errorOptions), "object" == typeof t3.secretMethods && (e3.secretMethods = t3.secretMethods), e3;
      }({ customUI: false, loadingOptions: { title: "加载中...", mask: true }, errorOptions: { type: "modal", retry: false } }, n2);
      const { customUI: s2, loadingOptions: r2, errorOptions: i2, parseSystemError: o2 } = n2, a2 = !s2;
      return new Proxy({}, { get: (s3, c2) => function({ fn: e3, interceptorName: t3, getCallbackArgs: n3 } = {}) {
        return async function(...s4) {
          const r3 = n3 ? n3({ params: s4 }) : {};
          let i3, o3;
          try {
            return await M(q(t3, "invoke"), { ...r3 }), i3 = await e3(...s4), await M(q(t3, "success"), { ...r3, result: i3 }), i3;
          } catch (e4) {
            throw o3 = e4, await M(q(t3, "fail"), { ...r3, error: o3 }), o3;
          } finally {
            await M(q(t3, "complete"), o3 ? { ...r3, error: o3 } : { ...r3, result: i3 });
          }
        };
      }({ fn: async function s4(...l2) {
        let h2;
        a2 && uni.showLoading({ title: r2.title, mask: r2.mask });
        const d2 = { name: t2, type: u, data: { method: c2, params: l2 } };
        "object" == typeof n2.secretMethods && function(e3, t3) {
          const n3 = t3.data.method, s5 = e3.secretMethods || {}, r3 = s5[n3] || s5["*"];
          r3 && (t3.secretType = r3);
        }(n2, d2);
        let p2 = false;
        try {
          h2 = await e2.callFunction(d2);
        } catch (e3) {
          p2 = true, h2 = { result: new te(e3) };
        }
        const { errSubject: f2, errCode: g2, errMsg: m2, newToken: y2 } = h2.result || {};
        if (a2 && uni.hideLoading(), y2 && y2.token && y2.tokenExpired && (ie(y2), Y($, { ...y2 })), g2) {
          let e3 = m2;
          if (p2 && o2) {
            e3 = (await o2({ objectName: t2, methodName: c2, params: l2, errSubject: f2, errCode: g2, errMsg: m2 })).errMsg || m2;
          }
          if (a2)
            if ("toast" === i2.type)
              uni.showToast({ title: e3, icon: "none" });
            else {
              if ("modal" !== i2.type)
                throw new Error(`Invalid errorOptions.type: ${i2.type}`);
              {
                const { confirm: t3 } = await async function({ title: e4, content: t4, showCancel: n4, cancelText: s5, confirmText: r3 } = {}) {
                  return new Promise((i3, o3) => {
                    uni.showModal({ title: e4, content: t4, showCancel: n4, cancelText: s5, confirmText: r3, success(e5) {
                      i3(e5);
                    }, fail() {
                      i3({ confirm: false, cancel: true });
                    } });
                  });
                }({ title: "提示", content: e3, showCancel: i2.retry, cancelText: "取消", confirmText: i2.retry ? "重试" : "确定" });
                if (i2.retry && t3)
                  return s4(...l2);
              }
            }
          const n3 = new te({ subject: f2, code: g2, message: m2, requestId: h2.requestId });
          throw n3.detail = h2.result, Y(j, { type: z, content: n3 }), n3;
        }
        return Y(j, { type: z, content: h2.result }), h2.result;
      }, interceptorName: "callObject", getCallbackArgs: function({ params: e3 } = {}) {
        return { objectName: t2, methodName: c2, params: e3 };
      } }) });
    };
  }
  function Ls(e2) {
    return L("_globalUniCloudSecureNetworkCache__{spaceId}".replace("{spaceId}", e2.config.spaceId));
  }
  async function Rs({ openid: e2, callLoginByWeixin: t2 = false } = {}) {
    Ls(this);
    throw new Error(`[SecureNetwork] API \`initSecureNetworkByWeixin\` is not supported on platform \`${P}\``);
  }
  async function Us(e2) {
    const t2 = Ls(this);
    return t2.initPromise || (t2.initPromise = Rs.call(this, e2)), t2.initPromise;
  }
  function Ns(e2) {
    return function({ openid: t2, callLoginByWeixin: n2 = false } = {}) {
      return Us.call(e2, { openid: t2, callLoginByWeixin: n2 });
    };
  }
  function Ds(e2) {
    const t2 = { getSystemInfo: uni.getSystemInfo, getPushClientId: uni.getPushClientId };
    return function(n2) {
      return new Promise((s2, r2) => {
        t2[e2]({ ...n2, success(e3) {
          s2(e3);
        }, fail(e3) {
          r2(e3);
        } });
      });
    };
  }
  class Ms extends class {
    constructor() {
      this._callback = {};
    }
    addListener(e2, t2) {
      this._callback[e2] || (this._callback[e2] = []), this._callback[e2].push(t2);
    }
    on(e2, t2) {
      return this.addListener(e2, t2);
    }
    removeListener(e2, t2) {
      if (!t2)
        throw new Error('The "listener" argument must be of type function. Received undefined');
      const n2 = this._callback[e2];
      if (!n2)
        return;
      const s2 = function(e3, t3) {
        for (let n3 = e3.length - 1; n3 >= 0; n3--)
          if (e3[n3] === t3)
            return n3;
        return -1;
      }(n2, t2);
      n2.splice(s2, 1);
    }
    off(e2, t2) {
      return this.removeListener(e2, t2);
    }
    removeAllListener(e2) {
      delete this._callback[e2];
    }
    emit(e2, ...t2) {
      const n2 = this._callback[e2];
      if (n2)
        for (let e3 = 0; e3 < n2.length; e3++)
          n2[e3](...t2);
    }
  } {
    constructor() {
      super(), this._uniPushMessageCallback = this._receivePushMessage.bind(this), this._currentMessageId = -1, this._payloadQueue = [];
    }
    init() {
      return Promise.all([Ds("getSystemInfo")(), Ds("getPushClientId")()]).then(([{ appId: e2 } = {}, { cid: t2 } = {}] = []) => {
        if (!e2)
          throw new Error("Invalid appId, please check the manifest.json file");
        if (!t2)
          throw new Error("Invalid push client id");
        this._appId = e2, this._pushClientId = t2, this._seqId = Date.now() + "-" + Math.floor(9e5 * Math.random() + 1e5), this.emit("open"), this._initMessageListener();
      }, (e2) => {
        throw this.emit("error", e2), this.close(), e2;
      });
    }
    async open() {
      return this.init();
    }
    _isUniCloudSSE(e2) {
      if ("receive" !== e2.type)
        return false;
      const t2 = e2 && e2.data && e2.data.payload;
      return !(!t2 || "UNI_CLOUD_SSE" !== t2.channel || t2.seqId !== this._seqId);
    }
    _receivePushMessage(e2) {
      if (!this._isUniCloudSSE(e2))
        return;
      const t2 = e2 && e2.data && e2.data.payload, { action: n2, messageId: s2, message: r2 } = t2;
      this._payloadQueue.push({ action: n2, messageId: s2, message: r2 }), this._consumMessage();
    }
    _consumMessage() {
      for (; ; ) {
        const e2 = this._payloadQueue.find((e3) => e3.messageId === this._currentMessageId + 1);
        if (!e2)
          break;
        this._currentMessageId++, this._parseMessagePayload(e2);
      }
    }
    _parseMessagePayload(e2) {
      const { action: t2, messageId: n2, message: s2 } = e2;
      "end" === t2 ? this._end({ messageId: n2, message: s2 }) : "message" === t2 && this._appendMessage({ messageId: n2, message: s2 });
    }
    _appendMessage({ messageId: e2, message: t2 } = {}) {
      this.emit("message", t2);
    }
    _end({ messageId: e2, message: t2 } = {}) {
      this.emit("end", t2), this.close();
    }
    _initMessageListener() {
      uni.onPushMessage(this._uniPushMessageCallback);
    }
    _destroy() {
      uni.offPushMessage(this._uniPushMessageCallback);
    }
    toJSON() {
      return { appId: this._appId, pushClientId: this._pushClientId, seqId: this._seqId };
    }
    close() {
      this._destroy(), this.emit("close");
    }
  }
  async function qs(e2, t2) {
    const n2 = `http://${e2}:${t2}/system/ping`;
    try {
      const e3 = await (s2 = { url: n2, timeout: 500 }, new Promise((e4, t3) => {
        ne.request({ ...s2, success(t4) {
          e4(t4);
        }, fail(e5) {
          t3(e5);
        } });
      }));
      return !(!e3.data || 0 !== e3.data.code);
    } catch (e3) {
      return false;
    }
    var s2;
  }
  async function Fs(e2) {
    {
      const { osName: e3, osVersion: t3 } = ce();
      "ios" === e3 && function(e4) {
        if (!e4 || "string" != typeof e4)
          return 0;
        const t4 = e4.match(/^(\d+)./);
        return t4 && t4[1] ? parseInt(t4[1]) : 0;
      }(t3) >= 14 && console.warn("iOS 14及以上版本连接uniCloud本地调试服务需要允许客户端查找并连接到本地网络上的设备（仅开发模式生效，发行模式会连接uniCloud云端服务）");
    }
    const t2 = e2.__dev__;
    if (!t2.debugInfo)
      return;
    const { address: n2, servePort: s2 } = t2.debugInfo, { address: r2 } = await async function(e3, t3) {
      let n3;
      for (let s3 = 0; s3 < e3.length; s3++) {
        const r3 = e3[s3];
        if (await qs(r3, t3)) {
          n3 = r3;
          break;
        }
      }
      return { address: n3, port: t3 };
    }(n2, s2);
    if (r2)
      return t2.localAddress = r2, void (t2.localPort = s2);
    const i2 = console["error"];
    let o2 = "";
    if ("remote" === t2.debugInfo.initialLaunchType ? (t2.debugInfo.forceRemote = true, o2 = "当前客户端和HBuilderX不在同一局域网下（或其他网络原因无法连接HBuilderX），uniCloud本地调试服务不对当前客户端生效。\n- 如果不使用uniCloud本地调试服务，请直接忽略此信息。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。") : o2 = "无法连接uniCloud本地调试服务，请检查当前客户端是否与主机在同一局域网下。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。", o2 += "\n- 如果在HBuilderX开启的状态下切换过网络环境，请重启HBuilderX后再试\n- 检查系统防火墙是否拦截了HBuilderX自带的nodejs\n- 检查是否错误的使用拦截器修改uni.request方法的参数", 0 === P.indexOf("mp-") && (o2 += "\n- 小程序中如何使用uniCloud，请参考：https://uniapp.dcloud.net.cn/uniCloud/publish.html#useinmp"), !t2.debugInfo.forceRemote)
      throw new Error(o2);
    i2(o2);
  }
  function Ks(e2) {
    e2._initPromiseHub || (e2._initPromiseHub = new v({ createPromise: function() {
      let t2 = Promise.resolve();
      var n2;
      n2 = 1, t2 = new Promise((e3) => {
        setTimeout(() => {
          e3();
        }, n2);
      });
      const s2 = e2.auth();
      return t2.then(() => s2.getLoginState()).then((e3) => e3 ? Promise.resolve() : s2.signInAnonymously());
    } }));
  }
  const js = { tcb: St, tencent: St, aliyun: pe, private: kt, alipay: Et };
  let Bs = new class {
    init(e2) {
      let t2 = {};
      const n2 = js[e2.provider];
      if (!n2)
        throw new Error("未提供正确的provider参数");
      t2 = n2.init(e2), function(e3) {
        const t3 = {};
        e3.__dev__ = t3, t3.debugLog = "app" === P;
        const n3 = T;
        n3 && !n3.code && (t3.debugInfo = n3);
        const s2 = new v({ createPromise: function() {
          return Fs(e3);
        } });
        t3.initLocalNetwork = function() {
          return s2.exec();
        };
      }(t2), Ks(t2), Fn(t2), function(e3) {
        const t3 = e3.uploadFile;
        e3.uploadFile = function(e4) {
          return t3.call(this, e4);
        };
      }(t2), function(e3) {
        e3.database = function(t3) {
          if (t3 && Object.keys(t3).length > 0)
            return e3.init(t3).database();
          if (this._database)
            return this._database;
          const n3 = Yn(Qn, { uniClient: e3 });
          return this._database = n3, n3;
        }, e3.databaseForJQL = function(t3) {
          if (t3 && Object.keys(t3).length > 0)
            return e3.init(t3).databaseForJQL();
          if (this._databaseForJQL)
            return this._databaseForJQL;
          const n3 = Yn(Qn, { uniClient: e3, isJQL: true });
          return this._databaseForJQL = n3, n3;
        };
      }(t2), function(e3) {
        e3.getCurrentUserInfo = Ps, e3.chooseAndUploadFile = Cs.initChooseAndUploadFile(e3), Object.assign(e3, { get mixinDatacom() {
          return Os(e3);
        } }), e3.SSEChannel = Ms, e3.initSecureNetworkByWeixin = Ns(e3), e3.importObject = Es(e3);
      }(t2);
      return ["callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile"].forEach((e3) => {
        if (!t2[e3])
          return;
        const n3 = t2[e3];
        t2[e3] = function() {
          return n3.apply(t2, Array.from(arguments));
        }, t2[e3] = function(e4, t3) {
          return function(n4) {
            let s2 = false;
            if ("callFunction" === t3) {
              const e5 = n4 && n4.type || c;
              s2 = e5 !== c;
            }
            const r2 = "callFunction" === t3 && !s2, i2 = this._initPromiseHub.exec();
            n4 = n4 || {};
            const { success: o2, fail: a2, complete: u2 } = ee(n4), l2 = i2.then(() => s2 ? Promise.resolve() : M(q(t3, "invoke"), n4)).then(() => e4.call(this, n4)).then((e5) => s2 ? Promise.resolve(e5) : M(q(t3, "success"), e5).then(() => M(q(t3, "complete"), e5)).then(() => (r2 && Y(j, { type: H, content: e5 }), Promise.resolve(e5))), (e5) => s2 ? Promise.reject(e5) : M(q(t3, "fail"), e5).then(() => M(q(t3, "complete"), e5)).then(() => (Y(j, { type: H, content: e5 }), Promise.reject(e5))));
            if (!(o2 || a2 || u2))
              return l2;
            l2.then((e5) => {
              o2 && o2(e5), u2 && u2(e5), r2 && Y(j, { type: H, content: e5 });
            }, (e5) => {
              a2 && a2(e5), u2 && u2(e5), r2 && Y(j, { type: H, content: e5 });
            });
          };
        }(t2[e3], e3).bind(t2);
      }), t2.init = this.init, t2;
    }
  }();
  (() => {
    const e2 = C;
    let t2 = {};
    if (e2 && 1 === e2.length)
      t2 = e2[0], Bs = Bs.init(t2), Bs._isDefault = true;
    else {
      const t3 = ["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "database", "getCurrentUSerInfo", "importObject"];
      let n2;
      n2 = e2 && e2.length > 0 ? "应用有多个服务空间，请通过uniCloud.init方法指定要使用的服务空间" : "应用未关联服务空间，请在uniCloud目录右键关联服务空间", t3.forEach((e3) => {
        Bs[e3] = function() {
          return console.error(n2), Promise.reject(new te({ code: "SYS_ERR", message: n2 }));
        };
      });
    }
    Object.assign(Bs, { get mixinDatacom() {
      return Os(Bs);
    } }), Ss(Bs), Bs.addInterceptor = N, Bs.removeInterceptor = D, Bs.interceptObject = F;
  })();
  var $s = Bs;
  const ERR_MSG_OK = "chooseAndUploadFile:ok";
  const ERR_MSG_FAIL = "chooseAndUploadFile:fail";
  function chooseImage(opts) {
    const {
      count,
      sizeType = ["original", "compressed"],
      sourceType = ["album", "camera"],
      extension
    } = opts;
    return new Promise((resolve, reject) => {
      uni.chooseImage({
        count,
        sizeType,
        sourceType,
        extension,
        success(res) {
          resolve(normalizeChooseAndUploadFileRes(res, "image"));
        },
        fail(res) {
          reject({
            errMsg: res.errMsg.replace("chooseImage:fail", ERR_MSG_FAIL)
          });
        }
      });
    });
  }
  function chooseVideo(opts) {
    const {
      camera,
      compressed,
      maxDuration,
      sourceType = ["album", "camera"],
      extension
    } = opts;
    return new Promise((resolve, reject) => {
      uni.chooseVideo({
        camera,
        compressed,
        maxDuration,
        sourceType,
        extension,
        success(res) {
          const {
            tempFilePath,
            duration,
            size,
            height,
            width
          } = res;
          resolve(normalizeChooseAndUploadFileRes({
            errMsg: "chooseVideo:ok",
            tempFilePaths: [tempFilePath],
            tempFiles: [
              {
                name: res.tempFile && res.tempFile.name || "",
                path: tempFilePath,
                size,
                type: res.tempFile && res.tempFile.type || "",
                width,
                height,
                duration,
                fileType: "video",
                cloudPath: ""
              }
            ]
          }, "video"));
        },
        fail(res) {
          reject({
            errMsg: res.errMsg.replace("chooseVideo:fail", ERR_MSG_FAIL)
          });
        }
      });
    });
  }
  function chooseAll(opts) {
    const {
      count,
      extension
    } = opts;
    return new Promise((resolve, reject) => {
      let chooseFile = uni.chooseFile;
      if (typeof wx !== "undefined" && typeof wx.chooseMessageFile === "function") {
        chooseFile = wx.chooseMessageFile;
      }
      if (typeof chooseFile !== "function") {
        return reject({
          errMsg: ERR_MSG_FAIL + " 请指定 type 类型，该平台仅支持选择 image 或 video。"
        });
      }
      chooseFile({
        type: "all",
        count,
        extension,
        success(res) {
          resolve(normalizeChooseAndUploadFileRes(res));
        },
        fail(res) {
          reject({
            errMsg: res.errMsg.replace("chooseFile:fail", ERR_MSG_FAIL)
          });
        }
      });
    });
  }
  function normalizeChooseAndUploadFileRes(res, fileType) {
    res.tempFiles.forEach((item, index) => {
      if (!item.name) {
        item.name = item.path.substring(item.path.lastIndexOf("/") + 1);
      }
      if (fileType) {
        item.fileType = fileType;
      }
      item.cloudPath = Date.now() + "_" + index + item.name.substring(item.name.lastIndexOf("."));
    });
    if (!res.tempFilePaths) {
      res.tempFilePaths = res.tempFiles.map((file) => file.path);
    }
    return res;
  }
  function uploadCloudFiles(files, max = 5, onUploadProgress) {
    files = JSON.parse(JSON.stringify(files));
    const len = files.length;
    let count = 0;
    let self = this;
    return new Promise((resolve) => {
      while (count < max) {
        next();
      }
      function next() {
        let cur = count++;
        if (cur >= len) {
          !files.find((item) => !item.url && !item.errMsg) && resolve(files);
          return;
        }
        const fileItem = files[cur];
        const index = self.files.findIndex((v2) => v2.uuid === fileItem.uuid);
        fileItem.url = "";
        delete fileItem.errMsg;
        $s.uploadFile({
          filePath: fileItem.path,
          cloudPath: fileItem.cloudPath,
          fileType: fileItem.fileType,
          onUploadProgress: (res) => {
            res.index = index;
            onUploadProgress && onUploadProgress(res);
          }
        }).then((res) => {
          fileItem.url = res.fileID;
          fileItem.index = index;
          if (cur < len) {
            next();
          }
        }).catch((res) => {
          fileItem.errMsg = res.errMsg || res.message;
          fileItem.index = index;
          if (cur < len) {
            next();
          }
        });
      }
    });
  }
  function uploadFiles(choosePromise, {
    onChooseFile,
    onUploadProgress
  }) {
    return choosePromise.then((res) => {
      if (onChooseFile) {
        const customChooseRes = onChooseFile(res);
        if (typeof customChooseRes !== "undefined") {
          return Promise.resolve(customChooseRes).then((chooseRes) => typeof chooseRes === "undefined" ? res : chooseRes);
        }
      }
      return res;
    }).then((res) => {
      if (res === false) {
        return {
          errMsg: ERR_MSG_OK,
          tempFilePaths: [],
          tempFiles: []
        };
      }
      return res;
    });
  }
  function chooseAndUploadFile(opts = {
    type: "all"
  }) {
    if (opts.type === "image") {
      return uploadFiles(chooseImage(opts), opts);
    } else if (opts.type === "video") {
      return uploadFiles(chooseVideo(opts), opts);
    }
    return uploadFiles(chooseAll(opts), opts);
  }
  const get_file_ext = (name) => {
    const last_len = name.lastIndexOf(".");
    const len = name.length;
    return {
      name: name.substring(0, last_len),
      ext: name.substring(last_len + 1, len)
    };
  };
  const get_extname = (fileExtname) => {
    if (!Array.isArray(fileExtname)) {
      let extname = fileExtname.replace(/(\[|\])/g, "");
      return extname.split(",");
    } else {
      return fileExtname;
    }
  };
  const get_files_and_is_max = (res, _extname) => {
    let filePaths = [];
    let files = [];
    if (!_extname || _extname.length === 0) {
      return {
        filePaths,
        files
      };
    }
    res.tempFiles.forEach((v2) => {
      let fileFullName = get_file_ext(v2.name);
      const extname = fileFullName.ext.toLowerCase();
      if (_extname.indexOf(extname) !== -1) {
        files.push(v2);
        filePaths.push(v2.path);
      }
    });
    if (files.length !== res.tempFiles.length) {
      uni.showToast({
        title: `当前选择了${res.tempFiles.length}个文件 ，${res.tempFiles.length - files.length} 个文件格式不正确`,
        icon: "none",
        duration: 5e3
      });
    }
    return {
      filePaths,
      files
    };
  };
  const get_file_info = (filepath) => {
    return new Promise((resolve, reject) => {
      uni.getImageInfo({
        src: filepath,
        success(res) {
          resolve(res);
        },
        fail(err) {
          reject(err);
        }
      });
    });
  };
  const get_file_data = async (files, type = "image") => {
    let fileFullName = get_file_ext(files.name);
    const extname = fileFullName.ext.toLowerCase();
    let filedata = {
      name: files.name,
      uuid: files.uuid,
      extname: extname || "",
      cloudPath: files.cloudPath,
      fileType: files.fileType,
      url: files.path || files.path,
      size: files.size,
      //单位是字节
      image: {},
      path: files.path,
      video: {}
    };
    if (type === "image") {
      const imageinfo = await get_file_info(files.path);
      delete filedata.video;
      filedata.image.width = imageinfo.width;
      filedata.image.height = imageinfo.height;
      filedata.image.location = imageinfo.path;
    } else {
      delete filedata.image;
    }
    return filedata;
  };
  const _sfc_main$g = {
    name: "uploadImage",
    emits: ["uploadFiles", "choose", "delFile"],
    props: {
      filesList: {
        type: Array,
        default() {
          return [];
        }
      },
      disabled: {
        type: Boolean,
        default: false
      },
      disablePreview: {
        type: Boolean,
        default: false
      },
      limit: {
        type: [Number, String],
        default: 9
      },
      imageStyles: {
        type: Object,
        default() {
          return {
            width: "auto",
            height: "auto",
            border: {}
          };
        }
      },
      delIcon: {
        type: Boolean,
        default: true
      },
      readonly: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      styles() {
        let styles = {
          width: "auto",
          height: "auto",
          border: {}
        };
        return Object.assign(styles, this.imageStyles);
      },
      boxStyle() {
        const {
          width = "auto",
          height = "auto"
        } = this.styles;
        let obj = {};
        if (height === "auto") {
          if (width !== "auto") {
            obj.height = this.value2px(width);
            obj["padding-top"] = 0;
          } else {
            obj.height = 0;
          }
        } else {
          obj.height = this.value2px(height);
          obj["padding-top"] = 0;
        }
        if (width === "auto") {
          if (height !== "auto") {
            obj.width = this.value2px(height);
          } else {
            obj.width = "33.3%";
          }
        } else {
          obj.width = this.value2px(width);
        }
        let classles = "";
        for (let i2 in obj) {
          classles += `${i2}:${obj[i2]};`;
        }
        return classles;
      },
      borderStyle() {
        let {
          border
        } = this.styles;
        let obj = {};
        const widthDefaultValue = 1;
        const radiusDefaultValue = 3;
        if (typeof border === "boolean") {
          obj.border = border ? "1px #eee solid" : "none";
        } else {
          let width = border && border.width || widthDefaultValue;
          width = this.value2px(width);
          let radius = border && border.radius || radiusDefaultValue;
          radius = this.value2px(radius);
          obj = {
            "border-width": width,
            "border-style": border && border.style || "solid",
            "border-color": border && border.color || "#eee",
            "border-radius": radius
          };
        }
        let classles = "";
        for (let i2 in obj) {
          classles += `${i2}:${obj[i2]};`;
        }
        return classles;
      }
    },
    methods: {
      uploadFiles(item, index) {
        this.$emit("uploadFiles", item);
      },
      choose() {
        this.$emit("choose");
      },
      delFile(index) {
        this.$emit("delFile", index);
      },
      prviewImage(img, index) {
        let urls = [];
        if (Number(this.limit) === 1 && this.disablePreview && !this.disabled) {
          this.$emit("choose");
        }
        if (this.disablePreview)
          return;
        this.filesList.forEach((i2) => {
          urls.push(i2.url);
        });
        uni.previewImage({
          urls,
          current: index
        });
      },
      value2px(value) {
        if (typeof value === "number") {
          value += "px";
        } else {
          if (value.indexOf("%") === -1) {
            value = value.indexOf("px") !== -1 ? value : value + "px";
          }
        }
        return value;
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-file-picker__container" }, [
      (vue.openBlock(true), vue.createElementBlock(
        vue.Fragment,
        null,
        vue.renderList($props.filesList, (item, index) => {
          return vue.openBlock(), vue.createElementBlock(
            "view",
            {
              class: "file-picker__box",
              key: index,
              style: vue.normalizeStyle($options.boxStyle)
            },
            [
              vue.createElementVNode(
                "view",
                {
                  class: "file-picker__box-content",
                  style: vue.normalizeStyle($options.borderStyle)
                },
                [
                  vue.createElementVNode("image", {
                    class: "file-image",
                    src: item.url,
                    mode: "aspectFill",
                    onClick: vue.withModifiers(($event) => $options.prviewImage(item, index), ["stop"])
                  }, null, 8, ["src", "onClick"]),
                  $props.delIcon && !$props.readonly ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 0,
                    class: "icon-del-box",
                    onClick: vue.withModifiers(($event) => $options.delFile(index), ["stop"])
                  }, [
                    vue.createElementVNode("view", { class: "icon-del" }),
                    vue.createElementVNode("view", { class: "icon-del rotate" })
                  ], 8, ["onClick"])) : vue.createCommentVNode("v-if", true),
                  item.progress && item.progress !== 100 || item.progress === 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 1,
                    class: "file-picker__progress"
                  }, [
                    vue.createElementVNode("progress", {
                      class: "file-picker__progress-item",
                      percent: item.progress === -1 ? 0 : item.progress,
                      "stroke-width": "4",
                      backgroundColor: item.errMsg ? "#ff5a5f" : "#EBEBEB"
                    }, null, 8, ["percent", "backgroundColor"])
                  ])) : vue.createCommentVNode("v-if", true),
                  item.errMsg ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 2,
                    class: "file-picker__mask",
                    onClick: vue.withModifiers(($event) => $options.uploadFiles(item, index), ["stop"])
                  }, " 点击重试 ", 8, ["onClick"])) : vue.createCommentVNode("v-if", true)
                ],
                4
                /* STYLE */
              )
            ],
            4
            /* STYLE */
          );
        }),
        128
        /* KEYED_FRAGMENT */
      )),
      $props.filesList.length < $props.limit && !$props.readonly ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 0,
          class: "file-picker__box",
          style: vue.normalizeStyle($options.boxStyle)
        },
        [
          vue.createElementVNode(
            "view",
            {
              class: "file-picker__box-content is-add",
              style: vue.normalizeStyle($options.borderStyle),
              onClick: _cache[0] || (_cache[0] = (...args) => $options.choose && $options.choose(...args))
            },
            [
              vue.renderSlot(_ctx.$slots, "default", {}, () => [
                vue.createElementVNode("view", { class: "icon-add" }),
                vue.createElementVNode("view", { class: "icon-add rotate" })
              ], true)
            ],
            4
            /* STYLE */
          )
        ],
        4
        /* STYLE */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const uploadImage = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$4], ["__scopeId", "data-v-bdfc07e0"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/uni_modules/uni-file-picker/components/uni-file-picker/upload-image.vue"]]);
  const _sfc_main$f = {
    name: "uploadFile",
    emits: ["uploadFiles", "choose", "delFile"],
    props: {
      filesList: {
        type: Array,
        default() {
          return [];
        }
      },
      delIcon: {
        type: Boolean,
        default: true
      },
      limit: {
        type: [Number, String],
        default: 9
      },
      showType: {
        type: String,
        default: ""
      },
      listStyles: {
        type: Object,
        default() {
          return {
            // 是否显示边框
            border: true,
            // 是否显示分隔线
            dividline: true,
            // 线条样式
            borderStyle: {}
          };
        }
      },
      readonly: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      list() {
        let files = [];
        this.filesList.forEach((v2) => {
          files.push(v2);
        });
        return files;
      },
      styles() {
        let styles = {
          border: true,
          dividline: true,
          "border-style": {}
        };
        return Object.assign(styles, this.listStyles);
      },
      borderStyle() {
        let {
          borderStyle,
          border
        } = this.styles;
        let obj = {};
        if (!border) {
          obj.border = "none";
        } else {
          let width = borderStyle && borderStyle.width || 1;
          width = this.value2px(width);
          let radius = borderStyle && borderStyle.radius || 5;
          radius = this.value2px(radius);
          obj = {
            "border-width": width,
            "border-style": borderStyle && borderStyle.style || "solid",
            "border-color": borderStyle && borderStyle.color || "#eee",
            "border-radius": radius
          };
        }
        let classles = "";
        for (let i2 in obj) {
          classles += `${i2}:${obj[i2]};`;
        }
        return classles;
      },
      borderLineStyle() {
        let obj = {};
        let {
          borderStyle
        } = this.styles;
        if (borderStyle && borderStyle.color) {
          obj["border-color"] = borderStyle.color;
        }
        if (borderStyle && borderStyle.width) {
          let width = borderStyle && borderStyle.width || 1;
          let style = borderStyle && borderStyle.style || 0;
          if (typeof width === "number") {
            width += "px";
          } else {
            width = width.indexOf("px") ? width : width + "px";
          }
          obj["border-width"] = width;
          if (typeof style === "number") {
            style += "px";
          } else {
            style = style.indexOf("px") ? style : style + "px";
          }
          obj["border-top-style"] = style;
        }
        let classles = "";
        for (let i2 in obj) {
          classles += `${i2}:${obj[i2]};`;
        }
        return classles;
      }
    },
    methods: {
      uploadFiles(item, index) {
        this.$emit("uploadFiles", {
          item,
          index
        });
      },
      choose() {
        this.$emit("choose");
      },
      delFile(index) {
        this.$emit("delFile", index);
      },
      value2px(value) {
        if (typeof value === "number") {
          value += "px";
        } else {
          value = value.indexOf("px") !== -1 ? value : value + "px";
        }
        return value;
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-file-picker__files" }, [
      !$props.readonly ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "files-button",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.choose && $options.choose(...args))
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ])) : vue.createCommentVNode("v-if", true),
      vue.createCommentVNode(` :class="{'is-text-box':showType === 'list'}" `),
      $options.list.length > 0 ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 1,
          class: "uni-file-picker__lists is-text-box",
          style: vue.normalizeStyle($options.borderStyle)
        },
        [
          vue.createCommentVNode(" ,'is-list-card':showType === 'list-card' "),
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($options.list, (item, index) => {
              return vue.openBlock(), vue.createElementBlock(
                "view",
                {
                  class: vue.normalizeClass(["uni-file-picker__lists-box", {
                    "files-border": index !== 0 && $options.styles.dividline
                  }]),
                  key: index,
                  style: vue.normalizeStyle(index !== 0 && $options.styles.dividline && $options.borderLineStyle)
                },
                [
                  vue.createElementVNode("view", { class: "uni-file-picker__item" }, [
                    vue.createCommentVNode(` :class="{'is-text-image':showType === 'list'}" `),
                    vue.createCommentVNode(' 	<view class="files__image is-text-image">\r\n						<image class="header-image" :src="item.logo" mode="aspectFit"></image>\r\n					</view> '),
                    vue.createElementVNode(
                      "view",
                      { class: "files__name" },
                      vue.toDisplayString(item.name),
                      1
                      /* TEXT */
                    ),
                    $props.delIcon && !$props.readonly ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 0,
                      class: "icon-del-box icon-files",
                      onClick: ($event) => $options.delFile(index)
                    }, [
                      vue.createElementVNode("view", { class: "icon-del icon-files" }),
                      vue.createElementVNode("view", { class: "icon-del rotate" })
                    ], 8, ["onClick"])) : vue.createCommentVNode("v-if", true)
                  ]),
                  item.progress && item.progress !== 100 || item.progress === 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 0,
                    class: "file-picker__progress"
                  }, [
                    vue.createElementVNode("progress", {
                      class: "file-picker__progress-item",
                      percent: item.progress === -1 ? 0 : item.progress,
                      "stroke-width": "4",
                      backgroundColor: item.errMsg ? "#ff5a5f" : "#EBEBEB"
                    }, null, 8, ["percent", "backgroundColor"])
                  ])) : vue.createCommentVNode("v-if", true),
                  item.status === "error" ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 1,
                    class: "file-picker__mask",
                    onClick: vue.withModifiers(($event) => $options.uploadFiles(item, index), ["stop"])
                  }, " 点击重试 ", 8, ["onClick"])) : vue.createCommentVNode("v-if", true)
                ],
                6
                /* CLASS, STYLE */
              );
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        4
        /* STYLE */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const uploadFile = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$3], ["__scopeId", "data-v-a54939c6"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/uni_modules/uni-file-picker/components/uni-file-picker/upload-file.vue"]]);
  const _sfc_main$e = {
    name: "uniFilePicker",
    components: {
      uploadImage,
      uploadFile
    },
    emits: [
      "select",
      "success",
      "fail",
      "progress",
      "delete",
      "update:modelValue",
      "input"
    ],
    props: {
      modelValue: {
        type: [Array, Object],
        default() {
          return [];
        }
      },
      disabled: {
        type: Boolean,
        default: false
      },
      disablePreview: {
        type: Boolean,
        default: false
      },
      delIcon: {
        type: Boolean,
        default: true
      },
      // 自动上传
      autoUpload: {
        type: Boolean,
        default: true
      },
      // 最大选择个数 ，h5只能限制单选或是多选
      limit: {
        type: [Number, String],
        default: 9
      },
      // 列表样式 grid | list | list-card
      mode: {
        type: String,
        default: "grid"
      },
      // 选择文件类型  image/video/all
      fileMediatype: {
        type: String,
        default: "image"
      },
      // 文件类型筛选
      fileExtname: {
        type: [Array, String],
        default() {
          return [];
        }
      },
      title: {
        type: String,
        default: ""
      },
      listStyles: {
        type: Object,
        default() {
          return {
            // 是否显示边框
            border: true,
            // 是否显示分隔线
            dividline: true,
            // 线条样式
            borderStyle: {}
          };
        }
      },
      imageStyles: {
        type: Object,
        default() {
          return {
            width: "auto",
            height: "auto"
          };
        }
      },
      readonly: {
        type: Boolean,
        default: false
      },
      returnType: {
        type: String,
        default: "array"
      },
      sizeType: {
        type: Array,
        default() {
          return ["original", "compressed"];
        }
      }
    },
    data() {
      return {
        files: [],
        localValue: []
      };
    },
    watch: {
      modelValue: {
        handler(newVal, oldVal) {
          this.setValue(newVal, oldVal);
        },
        immediate: true
      }
    },
    computed: {
      filesList() {
        let files = [];
        this.files.forEach((v2) => {
          files.push(v2);
        });
        return files;
      },
      showType() {
        if (this.fileMediatype === "image") {
          return this.mode;
        }
        return "list";
      },
      limitLength() {
        if (this.returnType === "object") {
          return 1;
        }
        if (!this.limit) {
          return 1;
        }
        if (this.limit >= 9) {
          return 9;
        }
        return this.limit;
      }
    },
    created() {
      if (!($s.config && $s.config.provider)) {
        this.noSpace = true;
        $s.chooseAndUploadFile = chooseAndUploadFile;
      }
      this.form = this.getForm("uniForms");
      this.formItem = this.getForm("uniFormsItem");
      if (this.form && this.formItem) {
        if (this.formItem.name) {
          this.rename = this.formItem.name;
          this.form.inputChildrens.push(this);
        }
      }
    },
    methods: {
      /**
       * 公开用户使用，清空文件
       * @param {Object} index
       */
      clearFiles(index) {
        if (index !== 0 && !index) {
          this.files = [];
          this.$nextTick(() => {
            this.setEmit();
          });
        } else {
          this.files.splice(index, 1);
        }
        this.$nextTick(() => {
          this.setEmit();
        });
      },
      /**
       * 公开用户使用，继续上传
       */
      upload() {
        let files = [];
        this.files.forEach((v2, index) => {
          if (v2.status === "ready" || v2.status === "error") {
            files.push(Object.assign({}, v2));
          }
        });
        return this.uploadFiles(files);
      },
      async setValue(newVal, oldVal) {
        const newData = async (v2) => {
          const reg = /cloud:\/\/([\w.]+\/?)\S*/;
          let url = "";
          if (v2.fileID) {
            url = v2.fileID;
          } else {
            url = v2.url;
          }
          if (reg.test(url)) {
            v2.fileID = url;
            v2.url = await this.getTempFileURL(url);
          }
          if (v2.url)
            v2.path = v2.url;
          return v2;
        };
        if (this.returnType === "object") {
          if (newVal) {
            await newData(newVal);
          } else {
            newVal = {};
          }
        } else {
          if (!newVal)
            newVal = [];
          for (let i2 = 0; i2 < newVal.length; i2++) {
            let v2 = newVal[i2];
            await newData(v2);
          }
        }
        this.localValue = newVal;
        if (this.form && this.formItem && !this.is_reset) {
          this.is_reset = false;
          this.formItem.setValue(this.localValue);
        }
        let filesData = Object.keys(newVal).length > 0 ? newVal : [];
        this.files = [].concat(filesData);
      },
      /**
       * 选择文件
       */
      choose() {
        if (this.disabled)
          return;
        if (this.files.length >= Number(this.limitLength) && this.showType !== "grid" && this.returnType === "array") {
          uni.showToast({
            title: `您最多选择 ${this.limitLength} 个文件`,
            icon: "none"
          });
          return;
        }
        this.chooseFiles();
      },
      /**
       * 选择文件并上传
       */
      chooseFiles() {
        const _extname = get_extname(this.fileExtname);
        $s.chooseAndUploadFile({
          type: this.fileMediatype,
          compressed: false,
          sizeType: this.sizeType,
          // TODO 如果为空，video 有问题
          extension: _extname.length > 0 ? _extname : void 0,
          count: this.limitLength - this.files.length,
          //默认9
          onChooseFile: this.chooseFileCallback,
          onUploadProgress: (progressEvent) => {
            this.setProgress(progressEvent, progressEvent.index);
          }
        }).then((result) => {
          this.setSuccessAndError(result.tempFiles);
        });
      },
      /**
       * 选择文件回调
       * @param {Object} res
       */
      async chooseFileCallback(res) {
        const _extname = get_extname(this.fileExtname);
        const is_one = Number(this.limitLength) === 1 && this.disablePreview && !this.disabled || this.returnType === "object";
        if (is_one) {
          this.files = [];
        }
        let { filePaths, files } = get_files_and_is_max(res, _extname);
        if (!(_extname && _extname.length > 0)) {
          filePaths = res.tempFilePaths;
          files = res.tempFiles;
        }
        let currentData = [];
        for (let i2 = 0; i2 < files.length; i2++) {
          if (this.limitLength - this.files.length <= 0)
            break;
          files[i2].uuid = Date.now();
          let filedata = await get_file_data(files[i2], this.fileMediatype);
          filedata.progress = 0;
          filedata.status = "ready";
          this.files.push(filedata);
          currentData.push({
            ...filedata,
            file: files[i2]
          });
        }
        this.$emit("select", {
          tempFiles: currentData,
          tempFilePaths: filePaths
        });
        res.tempFiles = files;
        if (!this.autoUpload || this.noSpace) {
          res.tempFiles = [];
        }
      },
      /**
       * 批传
       * @param {Object} e
       */
      uploadFiles(files) {
        files = [].concat(files);
        return uploadCloudFiles.call(this, files, 5, (res) => {
          this.setProgress(res, res.index, true);
        }).then((result) => {
          this.setSuccessAndError(result);
          return result;
        });
      },
      /**
       * 成功或失败
       */
      async setSuccessAndError(res, fn) {
        let successData = [];
        let errorData = [];
        let tempFilePath = [];
        let errorTempFilePath = [];
        for (let i2 = 0; i2 < res.length; i2++) {
          const item = res[i2];
          const index = item.uuid ? this.files.findIndex((p2) => p2.uuid === item.uuid) : item.index;
          if (index === -1 || !this.files)
            break;
          if (item.errMsg === "request:fail") {
            this.files[index].url = item.path;
            this.files[index].status = "error";
            this.files[index].errMsg = item.errMsg;
            errorData.push(this.files[index]);
            errorTempFilePath.push(this.files[index].url);
          } else {
            this.files[index].errMsg = "";
            this.files[index].fileID = item.url;
            const reg = /cloud:\/\/([\w.]+\/?)\S*/;
            if (reg.test(item.url)) {
              this.files[index].url = await this.getTempFileURL(item.url);
            } else {
              this.files[index].url = item.url;
            }
            this.files[index].status = "success";
            this.files[index].progress += 1;
            successData.push(this.files[index]);
            tempFilePath.push(this.files[index].fileID);
          }
        }
        if (successData.length > 0) {
          this.setEmit();
          this.$emit("success", {
            tempFiles: this.backObject(successData),
            tempFilePaths: tempFilePath
          });
        }
        if (errorData.length > 0) {
          this.$emit("fail", {
            tempFiles: this.backObject(errorData),
            tempFilePaths: errorTempFilePath
          });
        }
      },
      /**
       * 获取进度
       * @param {Object} progressEvent
       * @param {Object} index
       * @param {Object} type
       */
      setProgress(progressEvent, index, type) {
        this.files.length;
        const percentCompleted = Math.round(
          progressEvent.loaded * 100 / progressEvent.total
        );
        let idx = index;
        if (!type) {
          idx = this.files.findIndex(
            (p2) => p2.uuid === progressEvent.tempFile.uuid
          );
        }
        if (idx === -1 || !this.files[idx])
          return;
        this.files[idx].progress = percentCompleted - 1;
        this.$emit("progress", {
          index: idx,
          progress: parseInt(percentCompleted),
          tempFile: this.files[idx]
        });
      },
      /**
       * 删除文件
       * @param {Object} index
       */
      delFile(index) {
        this.$emit("delete", {
          tempFile: this.files[index],
          tempFilePath: this.files[index].url
        });
        this.files.splice(index, 1);
        this.$nextTick(() => {
          this.setEmit();
        });
      },
      /**
       * 获取文件名和后缀
       * @param {Object} name
       */
      getFileExt(name) {
        const last_len = name.lastIndexOf(".");
        const len = name.length;
        return {
          name: name.substring(0, last_len),
          ext: name.substring(last_len + 1, len)
        };
      },
      /**
       * 处理返回事件
       */
      setEmit() {
        let data = [];
        if (this.returnType === "object") {
          data = this.backObject(this.files)[0];
          this.localValue = data ? data : null;
        } else {
          data = this.backObject(this.files);
          if (!this.localValue) {
            this.localValue = [];
          }
          this.localValue = [...data];
        }
        this.$emit("update:modelValue", this.localValue);
      },
      /**
       * 处理返回参数
       * @param {Object} files
       */
      backObject(files) {
        let newFilesData = [];
        files.forEach((v2) => {
          newFilesData.push({
            extname: v2.extname,
            fileType: v2.fileType,
            image: v2.image,
            name: v2.name,
            path: v2.path,
            size: v2.size,
            fileID: v2.fileID,
            url: v2.url
          });
        });
        return newFilesData;
      },
      async getTempFileURL(fileList) {
        fileList = {
          fileList: [].concat(fileList)
        };
        const urls = await $s.getTempFileURL(fileList);
        return urls.fileList[0].tempFileURL || "";
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
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_upload_image = vue.resolveComponent("upload-image");
    const _component_upload_file = vue.resolveComponent("upload-file");
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-file-picker" }, [
      $props.title ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "uni-file-picker__header"
      }, [
        vue.createElementVNode(
          "text",
          { class: "file-title" },
          vue.toDisplayString($props.title),
          1
          /* TEXT */
        ),
        vue.createElementVNode(
          "text",
          { class: "file-count" },
          vue.toDisplayString($options.filesList.length) + "/" + vue.toDisplayString($options.limitLength),
          1
          /* TEXT */
        )
      ])) : vue.createCommentVNode("v-if", true),
      $props.fileMediatype === "image" && $options.showType === "grid" ? (vue.openBlock(), vue.createBlock(_component_upload_image, {
        key: 1,
        readonly: $props.readonly,
        "image-styles": $props.imageStyles,
        "files-list": $options.filesList,
        limit: $options.limitLength,
        disablePreview: $props.disablePreview,
        delIcon: $props.delIcon,
        onUploadFiles: $options.uploadFiles,
        onChoose: $options.choose,
        onDelFile: $options.delFile
      }, {
        default: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "default", {}, () => [
            vue.createElementVNode("view", { class: "is-add" }, [
              vue.createElementVNode("view", { class: "icon-add" }),
              vue.createElementVNode("view", { class: "icon-add rotate" })
            ])
          ], true)
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["readonly", "image-styles", "files-list", "limit", "disablePreview", "delIcon", "onUploadFiles", "onChoose", "onDelFile"])) : vue.createCommentVNode("v-if", true),
      $props.fileMediatype !== "image" || $options.showType !== "grid" ? (vue.openBlock(), vue.createBlock(_component_upload_file, {
        key: 2,
        readonly: $props.readonly,
        "list-styles": $props.listStyles,
        "files-list": $options.filesList,
        showType: $options.showType,
        delIcon: $props.delIcon,
        onUploadFiles: $options.uploadFiles,
        onChoose: $options.choose,
        onDelFile: $options.delFile
      }, {
        default: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "default", {}, () => [
            vue.createElementVNode("button", {
              type: "primary",
              size: "mini"
            }, "选择文件")
          ], true)
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["readonly", "list-styles", "files-list", "showType", "delIcon", "onUploadFiles", "onChoose", "onDelFile"])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$2], ["__scopeId", "data-v-6223573f"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.vue"]]);
  const _sfc_main$d = {
    __name: "index",
    setup(__props) {
      const title = vue.ref("开始服务");
      const remark = vue.ref("");
      const orderId = vue.ref("");
      const fileList = vue.ref([]);
      const from = vue.ref("");
      onLoad((options) => {
        orderId.value = options.id;
        title.value = options.status == 1 ? "开始服务" : "完成服务";
        from.value = options.type;
      });
      const handleDelete = (e2) => {
        fileList.value = fileList.value.filter(
          (item) => item.uuid !== e2.tempFile.uuid
        );
      };
      const handleSuccess = (e2) => {
        formatAppLog("log", "at pages/serveRecord/index.vue:66", e2, "上传成功回调");
      };
      const uploadImage2 = async () => {
        const promises = fileList.value.map((item) => {
          return new Promise((resolve, reject) => {
            uni.uploadFile({
              url: `${baseUrl}/publics/storage/upload`,
              files: [
                {
                  name: "file",
                  uri: item.url,
                  file: item
                }
              ],
              header: {
                Authorization: uni.getStorageSync("token")
              },
              success: (uploadFileRes) => {
                const imageUrl = JSON.parse(uploadFileRes.data).data.url;
                resolve(imageUrl);
              },
              fail: (err) => {
                reject(err);
              }
            });
          });
        });
        try {
          const uploadedImages = await Promise.all(promises);
          return uploadedImages;
        } catch (error) {
          formatAppLog("error", "at pages/serveRecord/index.vue:99", error);
          uni.showToast({
            title: "图片上传失败",
            duration: 1e3,
            icon: "none"
          });
          return [];
        }
      };
      const handleSelect = (e2) => {
        if (fileList.value.length) {
          fileList.value = fileList.value.concat(e2.tempFiles);
        } else {
          fileList.value = e2.tempFiles;
        }
      };
      const handleFail = () => {
        formatAppLog("log", "at pages/serveRecord/index.vue:116", e, "上传失败");
      };
      const handleSubmit = async () => {
        const uploadedImages = await uploadImage2();
        if (!fileList.value.length) {
          return uni.showToast({
            title: "请上传图片",
            duration: 2e3,
            icon: "none"
          });
        }
        uni.showLoading({
          title: "loading"
        });
        let startParams = {
          id: orderId.value,
          serveBeforeImgs: uploadedImages,
          serveBeforeIllustrate: remark.value
        };
        let finishParams = {
          id: orderId.value,
          serveAfterImgs: uploadedImages,
          serveAfterIllustrate: remark.value
        };
        const sameFunc = () => {
          if (from.value === "list") {
            goBack();
          } else {
            uni.navigateTo({
              url: "/pages/orderInfo/index?id=" + orderId.value + "&type=info"
            });
          }
          remark.value = "";
          orderId.value = "";
          fileList.value = [];
        };
        if (title.value === "开始服务") {
          startServe(startParams).then((res) => {
            uni.hideLoading();
            if (res.code === 200) {
              sameFunc();
            } else {
              uni.showToast({
                title: "接口提交失败!",
                duration: 1e3,
                icon: "none"
              });
            }
          }).catch((err) => {
            uni.hideLoading();
            uni.showToast({
              title: "接口提交失败!",
              duration: 1e3,
              icon: "none"
            });
          });
        } else {
          finishServe(finishParams).then((res) => {
            uni.hideLoading();
            if (res.code === 200) {
              sameFunc();
            } else {
              uni.showToast({
                title: "接口提交失败!",
                duration: 1e3,
                icon: "none"
              });
            }
          }).catch((err) => {
            uni.hideLoading();
            uni.showToast({
              title: "接口提交失败!",
              duration: 1e3,
              icon: "none"
            });
          });
        }
      };
      const handleInput = (e2) => {
        remark.value = e2.detail.value;
      };
      const goBack = () => {
        uni.navigateBack();
      };
      return (_ctx, _cache) => {
        const _component_uni_file_picker = resolveEasycom(vue.resolveDynamicComponent("uni-file-picker"), __easycom_1);
        return vue.openBlock(), vue.createElementBlock("view", { class: "serveRecord" }, [
          vue.createCommentVNode(" nav "),
          vue.createVNode(UniNav, {
            title: title.value,
            onGoBack: goBack
          }, null, 8, ["title"]),
          vue.createElementVNode("view", { class: "img card" }, [
            vue.createElementVNode("view", { class: "title" }, [
              vue.createTextVNode(
                "服务" + vue.toDisplayString(title.value === "开始服务" ? "前" : "后") + "照片",
                1
                /* TEXT */
              ),
              vue.createElementVNode("span", { class: "must" }, "*")
            ]),
            vue.createVNode(_component_uni_file_picker, {
              limit: "3",
              title: "最多上传3张图片",
              onSuccess: handleSuccess,
              onSelect: handleSelect,
              onFail: handleFail,
              onDelete: handleDelete
            })
          ]),
          vue.createElementVNode("view", { class: "remark card" }, [
            vue.createElementVNode("view", { class: "title" }, "补充说明"),
            vue.createElementVNode("textarea", {
              onInput: handleInput,
              value: remark.value,
              maxlength: 50,
              "placeholder-style": "color:#F76260",
              placeholder: "请输入对本次服务前的其他说明补充"
            }, null, 40, ["value"]),
            vue.createElementVNode("view", { class: "limit" }, [
              vue.createElementVNode(
                "text",
                { class: "min" },
                vue.toDisplayString(remark.value.length),
                1
                /* TEXT */
              ),
              vue.createTextVNode("/"),
              vue.createElementVNode(
                "text",
                { class: "max" },
                vue.toDisplayString(50 - remark.value.length),
                1
                /* TEXT */
              )
            ])
          ]),
          vue.createCommentVNode(" 底部按钮 "),
          vue.createElementVNode("view", { class: "footer" }, [
            vue.createElementVNode("view", {
              class: "btn-red",
              onClick: handleSubmit
            }, "确认提交")
          ])
        ]);
      };
    }
  };
  const PagesServeRecordIndex = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-1ccdec0f"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/pages/serveRecord/index.vue"]]);
  const _sfc_main$c = {};
  function _sfc_render$1(_ctx, _cache) {
    const _component_UniFooter = vue.resolveComponent("UniFooter");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createTextVNode(" 消息页面 "),
      vue.createVNode(_component_UniFooter, { pagePath: "pages/delivery/index" })
    ]);
  }
  const PagesDeliveryIndex = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$1], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/pages/delivery/index.vue"]]);
  const _sfc_main$b = {
    __name: "BaseInfo",
    props: {
      baseData: {
        type: Object,
        default: () => ({})
      }
    },
    setup(__props) {
      const certificationStatus = vue.ref(0);
      vue.onMounted(() => {
        getUserSetting().then((res) => {
          if (res.code == 200) {
            certificationStatus.value = res.data.certificationStatus;
          }
        }).catch((err) => {
          uni.showToast({
            title: err.msg || "接口调用失败",
            duration: 1500,
            icon: "none"
          });
        });
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "nav-bg mnav-bg" }, [
          vue.createElementVNode("view", { class: "headBg" }),
          vue.createElementVNode("view", { class: "header" }, [
            vue.createElementVNode("view", { class: "headBox" }, [
              vue.createElementVNode("view", { class: "head" }, [
                __props.baseData.avatar === "" ? (vue.openBlock(), vue.createElementBlock("icon", { key: 0 })) : (vue.openBlock(), vue.createElementBlock("image", {
                  key: 1,
                  src: __props.baseData.avatar || "../../../static/new/toux.png"
                }, null, 8, ["src"]))
              ]),
              vue.createElementVNode("view", { class: "info" }, [
                vue.createElementVNode("view", { class: "tit" }, [
                  vue.createElementVNode(
                    "view",
                    { class: "name" },
                    vue.toDisplayString(__props.baseData.name || "吴彦祖"),
                    1
                    /* TEXT */
                  ),
                  certificationStatus.value === 2 ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 0,
                    class: "isAuth"
                  }, "已认证")) : vue.createCommentVNode("v-if", true)
                ]),
                vue.createElementVNode(
                  "view",
                  { class: "account" },
                  vue.toDisplayString(__props.baseData.phone || "177 9987 8876"),
                  1
                  /* TEXT */
                )
              ])
            ])
          ])
        ]);
      };
    }
  };
  const BaseInfo = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-d4d52b02"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/pages/my/commponents/BaseInfo.vue"]]);
  const _sfc_main$a = {
    __name: "Evaluate",
    props: {
      baseData: {
        type: Object,
        default: () => ({})
      }
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "boxBg headTop" }, [
          vue.createElementVNode("view", { class: "headItem score" }, [
            vue.createElementVNode("view", { class: "leftBox" }, [
              vue.createElementVNode(
                "view",
                { class: "scoreContent" },
                vue.toDisplayString(__props.baseData.score) + "分",
                1
                /* TEXT */
              ),
              vue.createElementVNode("view", { class: "label" }, "综合评分")
            ]),
            vue.createElementVNode("view", { class: "rightBox" }, [
              vue.createElementVNode(
                "view",
                { class: "scoreContent" },
                vue.toDisplayString(__props.baseData.goodLevelRate),
                1
                /* TEXT */
              ),
              vue.createElementVNode("view", { class: "label" }, "好评率")
            ])
          ])
        ]);
      };
    }
  };
  const Evaluate = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-fadf945b"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/pages/my/commponents/Evaluate.vue"]]);
  const _sfc_main$9 = {
    __name: "HistoryScope",
    setup(__props) {
      const handleAccount = () => {
        uni.navigateTo({
          url: "/pages/account/index"
        });
      };
      const handleHistory = () => {
        uni.navigateTo({
          url: "/pages/evaluate/index"
        });
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "boxBg" }, [
          vue.createElementVNode("view", { class: "headItem" }, [
            vue.createElementVNode("view", {
              class: "item",
              onClick: handleHistory
            }, [
              vue.createElementVNode("text", null, "我的评价"),
              vue.createElementVNode("text", null, [
                vue.createElementVNode("icon", { class: "nextIcon" })
              ])
            ]),
            vue.createElementVNode("view", {
              class: "item",
              onClick: handleAccount
            }, [
              vue.createElementVNode("text", null, "账户设置"),
              vue.createElementVNode("text", null, [
                vue.createElementVNode("icon", { class: "nextIcon" })
              ])
            ])
          ])
        ]);
      };
    }
  };
  const HistoryScope = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-efd76cc3"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/pages/my/commponents/HistoryScope.vue"]]);
  const _sfc_main$8 = {
    __name: "index",
    setup(__props) {
      const store2 = useStore();
      const baseData = vue.ref(uni.getStorageSync("userInfo"));
      vue.onMounted(() => {
        getUser();
      });
      const getUser = async () => {
        await getUserInfo().then((res) => {
          if (res.code === 200) {
            baseData.value = res.data;
            uni.setStorageSync("userInfo", res.data);
          }
        });
      };
      const handleOut = () => {
        uni.removeStorageSync("token");
        store2.commit("setFootStatus", 0);
        uni.redirectTo({
          url: "/pages/login/user"
        });
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createElementVNode("view", { class: "navFrame" }, [
            vue.createCommentVNode(" 我的基本信息 "),
            vue.createVNode(BaseInfo, { baseData: baseData.value }, null, 8, ["baseData"]),
            vue.createCommentVNode(" end "),
            vue.createCommentVNode(" 我的评价详情 "),
            vue.createVNode(Evaluate, { baseData: baseData.value }, null, 8, ["baseData"]),
            vue.createCommentVNode(" end "),
            vue.createCommentVNode(" 我的评价 "),
            vue.createVNode(HistoryScope),
            vue.createCommentVNode(" end ")
          ]),
          vue.createCommentVNode(" 退出按钮 "),
          vue.createElementVNode("view", { class: "footBtn myFootBtn" }, [
            vue.createElementVNode("view", { class: "btnBox" }, [
              vue.createElementVNode("button", {
                class: "btn-default",
                onClick: handleOut
              }, "退出登录")
            ])
          ]),
          vue.createCommentVNode(" end "),
          vue.createCommentVNode(" footer "),
          vue.createVNode(UniFooter, { pagePath: "pages/my/index" }),
          vue.createCommentVNode(" end ")
        ]);
      };
    }
  };
  const PagesMyIndex = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-f97bc692"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/pages/my/index.vue"]]);
  const _sfc_main$7 = {
    name: "UniRate",
    props: {
      isFill: {
        // 星星的类型，是否镂空
        type: [Boolean, String],
        default: true
      },
      color: {
        // 星星未选中的颜色
        type: String,
        default: "#ececec"
      },
      activeColor: {
        // 星星选中状态颜色
        type: String,
        default: "#ffca3e"
      },
      disabledColor: {
        // 星星禁用状态颜色
        type: String,
        default: "#c0c0c0"
      },
      size: {
        // 星星的大小
        type: [Number, String],
        default: 24
      },
      value: {
        // 当前评分
        type: [Number, String],
        default: 0
      },
      modelValue: {
        // 当前评分
        type: [Number, String],
        default: 0
      },
      max: {
        // 最大评分
        type: [Number, String],
        default: 5
      },
      margin: {
        // 星星的间距
        type: [Number, String],
        default: 0
      },
      disabled: {
        // 是否可点击
        type: [Boolean, String],
        default: false
      },
      readonly: {
        // 是否只读
        type: [Boolean, String],
        default: false
      },
      allowHalf: {
        // 是否显示半星
        type: [Boolean, String],
        default: false
      },
      touchable: {
        // 是否支持滑动手势
        type: [Boolean, String],
        default: true
      }
    },
    data() {
      return {
        valueSync: "",
        userMouseFristMove: true,
        userRated: false,
        userLastRate: 1
      };
    },
    watch: {
      value(newVal) {
        this.valueSync = Number(newVal);
      },
      modelValue(newVal) {
        this.valueSync = Number(newVal);
      }
    },
    computed: {
      stars() {
        const value = this.valueSync ? this.valueSync : 0;
        const starList = [];
        const floorValue = Math.floor(value);
        const ceilValue = Math.ceil(value);
        for (let i2 = 0; i2 < this.max; i2++) {
          if (floorValue > i2) {
            starList.push({
              activeWitch: "100%"
            });
          } else if (ceilValue - 1 === i2) {
            starList.push({
              activeWitch: (value - floorValue) * 100 + "%"
            });
          } else {
            starList.push({
              activeWitch: "0"
            });
          }
        }
        return starList;
      },
      marginNumber() {
        return Number(this.margin);
      }
    },
    created() {
      this.valueSync = Number(this.value || this.modelValue);
      this._rateBoxLeft = 0;
      this._oldValue = null;
    },
    mounted() {
      setTimeout(() => {
        this._getSize();
      }, 100);
    },
    methods: {
      touchstart(e2) {
        if (this.readonly || this.disabled)
          return;
        const {
          clientX,
          screenX
        } = e2.changedTouches[0];
        this._getRateCount(clientX || screenX);
      },
      touchmove(e2) {
        if (this.readonly || this.disabled || !this.touchable)
          return;
        const {
          clientX,
          screenX
        } = e2.changedTouches[0];
        this._getRateCount(clientX || screenX);
      },
      /**
       * 兼容 PC @tian
       */
      mousedown(e2) {
      },
      mousemove(e2) {
      },
      mouseleave(e2) {
      },
      /**
       * 获取星星个数
       */
      _getRateCount(clientX) {
        this._getSize();
        const size = Number(this.size);
        if (isNaN(size)) {
          return new Error("size 属性只能设置为数字");
        }
        const rateMoveRange = clientX - this._rateBoxLeft;
        let index = parseInt(rateMoveRange / (size + this.marginNumber));
        index = index < 0 ? 0 : index;
        index = index > this.max ? this.max : index;
        const range = parseInt(rateMoveRange - (size + this.marginNumber) * index);
        let value = 0;
        if (this._oldValue === index && !this.PC)
          return;
        this._oldValue = index;
        if (this.allowHalf) {
          if (range > size / 2) {
            value = index + 1;
          } else {
            value = index + 0.5;
          }
        } else {
          value = index + 1;
        }
        value = Math.max(0.5, Math.min(value, this.max));
        this.valueSync = value;
        this._onChange();
      },
      /**
       * 触发动态修改
       */
      _onChange() {
        this.$emit("input", this.valueSync);
        this.$emit("update:modelValue", this.valueSync);
        this.$emit("change", {
          value: this.valueSync
        });
      },
      /**
       * 获取星星距离屏幕左侧距离
       */
      _getSize() {
        uni.createSelectorQuery().in(this).select(".uni-rate").boundingClientRect().exec((ret) => {
          if (ret) {
            this._rateBoxLeft = ret[0].left;
          }
        });
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$6);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode(
        "view",
        {
          ref: "uni-rate",
          class: "uni-rate"
        },
        [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($options.stars, (star, index) => {
              return vue.openBlock(), vue.createElementBlock(
                "view",
                {
                  class: vue.normalizeClass(["uni-rate__icon", { "uni-cursor-not-allowed": $props.disabled }]),
                  style: vue.normalizeStyle({ "margin-right": $options.marginNumber + "px" }),
                  key: index,
                  onTouchstart: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.touchstart && $options.touchstart(...args), ["stop"])),
                  onTouchmove: _cache[1] || (_cache[1] = vue.withModifiers((...args) => $options.touchmove && $options.touchmove(...args), ["stop"])),
                  onMousedown: _cache[2] || (_cache[2] = vue.withModifiers((...args) => $options.mousedown && $options.mousedown(...args), ["stop"])),
                  onMousemove: _cache[3] || (_cache[3] = vue.withModifiers((...args) => $options.mousemove && $options.mousemove(...args), ["stop"])),
                  onMouseleave: _cache[4] || (_cache[4] = (...args) => $options.mouseleave && $options.mouseleave(...args))
                },
                [
                  vue.createVNode(_component_uni_icons, {
                    color: $props.color,
                    size: $props.size,
                    type: $props.isFill ? "star-filled" : "star"
                  }, null, 8, ["color", "size", "type"]),
                  vue.createElementVNode(
                    "view",
                    {
                      style: vue.normalizeStyle({ width: star.activeWitch }),
                      class: "uni-rate__icon-on"
                    },
                    [
                      vue.createVNode(_component_uni_icons, {
                        color: $props.disabled ? $props.disabledColor : $props.activeColor,
                        size: $props.size,
                        type: "star-filled"
                      }, null, 8, ["color", "size"])
                    ],
                    4
                    /* STYLE */
                  )
                ],
                38
                /* CLASS, STYLE, HYDRATE_EVENTS */
              );
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        512
        /* NEED_PATCH */
      )
    ]);
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render], ["__scopeId", "data-v-5c8fbdf3"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/uni_modules/uni-rate/components/uni-rate/uni-rate.vue"]]);
  const formatDateTimeToDateTimeString = (dateTime) => {
    if (!(dateTime instanceof Date)) {
      throw new Error("Invalid date format.");
    }
    const year = dateTime.getFullYear();
    const month = String(dateTime.getMonth() + 1).padStart(2, "0");
    const day = String(dateTime.getDate()).padStart(2, "0");
    const hour = String(dateTime.getHours()).padStart(2, "0");
    const minute = String(dateTime.getMinutes()).padStart(2, "0");
    const dateTimeString = `${year}-${month}-${day} ${hour}:${minute}`;
    return dateTimeString;
  };
  const _sfc_main$6 = {
    __name: "homeList",
    props: {
      data: {
        type: Array,
        default: () => []
      }
    },
    emits: ["refresh"],
    setup(__props, { emit }) {
      const props = __props;
      const alertDialog = vue.ref(null);
      const emojiShow = vue.ref(false);
      const input = vue.ref(null);
      const focus = vue.ref(true);
      const inputValue = vue.ref("");
      const keyBoardHeight = vue.ref("");
      let list = vue.reactive({
        data: []
      });
      const handleHideKeyBoard = () => {
        if (!emojiShow.value) {
          uni.hideKeyboard();
          focus.value = false;
        } else {
          focus.value = true;
        }
        emojiShow.value = !emojiShow.value;
      };
      const handleSubmit = () => {
        if (!inputValue.value.length) {
          return;
        } else {
          alertDialog.value.close();
        }
      };
      const handleClickEmoji = (item) => {
        inputValue.value = inputValue.value + item;
      };
      const handleFocus = () => {
        emojiShow.value = false;
      };
      vue.watchEffect(() => {
        list.data = props.data;
      });
      return (_ctx, _cache) => {
        const _component_uni_rate = resolveEasycom(vue.resolveDynamicComponent("uni-rate"), __easycom_0);
        const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_0$3);
        return vue.openBlock(), vue.createElementBlock("view", { class: "homeList" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(vue.unref(list).data, (item) => {
              var _a, _b;
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "card",
                key: item.id
              }, [
                vue.createElementVNode("view", { class: "evaluate" }, [
                  vue.createElementVNode("view", { class: "header" }, [
                    vue.createElementVNode("view", { class: "left" }, [
                      vue.createElementVNode("image", {
                        src: (_a = item.evaluatorInfo) == null ? void 0 : _a.avatar
                      }, null, 8, ["src"]),
                      vue.createElementVNode(
                        "text",
                        { class: "nickName" },
                        vue.toDisplayString((_b = item.evaluatorInfo) == null ? void 0 : _b.nickName),
                        1
                        /* TEXT */
                      )
                    ]),
                    vue.createElementVNode("view", { class: "right" }, [
                      vue.createCommentVNode(" 设置星星间隔 "),
                      vue.createVNode(_component_uni_rate, {
                        readonly: "",
                        value: item.totalScore,
                        margin: 5,
                        size: 15,
                        color: "#D2DBE7",
                        "active-color": "#F74347"
                      }, null, 8, ["value"]),
                      vue.createElementVNode(
                        "text",
                        null,
                        vue.toDisplayString(item.totalScore) + "分",
                        1
                        /* TEXT */
                      )
                    ])
                  ]),
                  vue.createElementVNode(
                    "view",
                    { class: "content" },
                    vue.toDisplayString(item.content),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode("view", { class: "time" }, [
                    vue.createElementVNode(
                      "text",
                      null,
                      vue.toDisplayString(vue.unref(formatDateTimeToDateTimeString)(
                        new Date(item.createTime.replace(/-/g, "/"))
                      )),
                      1
                      /* TEXT */
                    )
                  ]),
                  item.pictureArray ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 0,
                    class: "img"
                  }, [
                    (vue.openBlock(true), vue.createElementBlock(
                      vue.Fragment,
                      null,
                      vue.renderList(item.pictureArray, (item1, index) => {
                        return vue.openBlock(), vue.createElementBlock("image", {
                          src: item1,
                          key: index
                        }, null, 8, ["src"]);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ])) : vue.createCommentVNode("v-if", true),
                  vue.createElementVNode("view", { class: "order" }, [
                    vue.createElementVNode("view", { class: "left" }, [
                      vue.createElementVNode("image", {
                        src: item.serveItemImg
                      }, null, 8, ["src"])
                    ]),
                    vue.createElementVNode("view", { class: "right" }, [
                      vue.createElementVNode("view", { class: "num" }, [
                        vue.createElementVNode("text", null, "订单编号 "),
                        vue.createElementVNode(
                          "text",
                          null,
                          vue.toDisplayString(item.relationId),
                          1
                          /* TEXT */
                        )
                      ]),
                      vue.createElementVNode("view", { class: "time" }, [
                        vue.createElementVNode("text", null, "预约时间 "),
                        vue.createElementVNode(
                          "text",
                          null,
                          vue.toDisplayString(vue.unref(formatDateTimeToDateTimeString)(
                            new Date(item.updateTime.replace(/-/g, "/"))
                          )),
                          1
                          /* TEXT */
                        )
                      ]),
                      vue.createElementVNode(
                        "view",
                        { class: "address" },
                        vue.toDisplayString(item.serveAddress),
                        1
                        /* TEXT */
                      )
                    ])
                  ])
                ])
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          )),
          vue.createCommentVNode(" 加载底部 "),
          vue.createCommentVNode(" 输入弹出框 "),
          vue.createVNode(
            _component_uni_popup,
            {
              ref_key: "alertDialog",
              ref: alertDialog,
              type: "bottom",
              "is-mask-click": ""
            },
            {
              default: vue.withCtx(() => [
                vue.createElementVNode(
                  "view",
                  {
                    class: "content",
                    style: vue.normalizeStyle({ bottom: `${keyBoardHeight.value}px` })
                  },
                  [
                    vue.withDirectives(vue.createElementVNode("textarea", {
                      ref_key: "input",
                      ref: input,
                      class: "uni-input",
                      "adjust-position": false,
                      focus: focus.value,
                      onFocus: handleFocus,
                      placeholder: "请输入你的回复（80字以内）",
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => inputValue.value = $event),
                      "auto-height": "",
                      "placeholder-class": "placeholder"
                    }, null, 40, ["focus"]), [
                      [vue.vModelText, inputValue.value]
                    ]),
                    vue.createElementVNode("view", { class: "right" }, [
                      vue.createElementVNode("image", {
                        src: `${emojiShow.value ? "../../../static/new/btn_wenzi@2x.png" : "../../../static/new/btn_biaoqing@2x.png"}`,
                        onClick: vue.withModifiers(handleHideKeyBoard, ["stop"])
                      }, null, 8, ["src", "onClick"]),
                      vue.createElementVNode("button", {
                        class: vue.normalizeClass(["submitBtn", !inputValue.value.length ? "disabled" : ""]),
                        disabled: !inputValue.value.length,
                        onTouchend: vue.withModifiers(handleSubmit, ["prevent"])
                      }, " 提交 ", 42, ["disabled", "onTouchend"])
                    ])
                  ],
                  4
                  /* STYLE */
                ),
                vue.createElementVNode(
                  "view",
                  {
                    class: "emoji-picker",
                    style: vue.normalizeStyle({ height: `${keyBoardHeight.value}px` })
                  },
                  [
                    (vue.openBlock(true), vue.createElementBlock(
                      vue.Fragment,
                      null,
                      vue.renderList(vue.unref(ImgList), (item, key) => {
                        return vue.openBlock(), vue.createElementBlock("view", {
                          key,
                          class: "emoji-picker-item",
                          onClick: ($event) => handleClickEmoji(item)
                        }, vue.toDisplayString(item), 9, ["onClick"]);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ],
                  4
                  /* STYLE */
                )
              ]),
              _: 1
              /* STABLE */
            },
            512
            /* NEED_PATCH */
          ),
          vue.createElementVNode("view", { class: "footer" }, "- 已 经 到 底 了 -")
        ]);
      };
    }
  };
  const HomeList = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-1422da40"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/pages/evaluate/components/homeList.vue"]]);
  const _sfc_main$5 = {
    __name: "index",
    emits: "",
    setup(__props, { emit }) {
      const store2 = useStore();
      const users = store2.state.user;
      const title = vue.ref("我的评价");
      const requestData = vue.ref({
        pageNo: 1,
        pageSize: 10
      });
      const isHaveMore = vue.ref(false);
      const tabBars = evaluateData;
      const icCanScroll = vue.ref(true);
      const homeList = vue.reactive({
        data: []
      });
      const scrollTop = vue.ref(0);
      const scrollView = vue.ref(null);
      onShow(() => {
        getTabIndex(users.tabIndex);
        getEvaluateListFunc();
        getOrderStatusNumFunc();
      });
      const handleLoad = () => {
        if (isHaveMore.value) {
          requestData.value.pageNo++;
          getEvaluateListFunc();
        }
      };
      const getRobOrderList = () => {
      };
      const scrollToTop = () => {
        scrollTop.value = scrollTop.value === 0 ? 1 : 0;
      };
      const getTabIndex = (index) => {
        scrollToTop();
        store2.commit("user/setTabIndex", index);
        homeList.data = [];
        if (index === 0) {
          requestData.value = {
            pageNo: 1,
            pageSize: 10
          };
        } else {
          requestData.value = {
            pageNo: 1,
            pageSize: 10,
            scoreLevel: tabBars[index].value
          };
        }
        homeList.data = [];
        getEvaluateListFunc();
      };
      const getEvaluateListFunc = () => {
        getEvaluateList(requestData.value).then((res) => {
          if (res.code === 200) {
            homeList.data = res.data;
            if (res.data.length < requestData.value.pageSize) {
              isHaveMore.value = false;
            } else {
              isHaveMore.value = true;
            }
          }
        });
      };
      const goBack = () => {
        uni.navigateBack();
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode("view", { class: "evaluate" }, [
              vue.createCommentVNode(" 手机状态栏 "),
              vue.createVNode(UniNav, {
                title: title.value,
                onGoBack: goBack
              }, null, 8, ["title"]),
              vue.createCommentVNode(" nav "),
              vue.createCommentVNode(" 状态筛选 "),
              vue.createVNode(UniTab, {
                tabBars: vue.unref(tabBars),
                onGetTabIndex: getTabIndex
              }, null, 8, ["tabBars"]),
              vue.createCommentVNode(" 订单列表 "),
              vue.createElementVNode("scroll-view", {
                "scroll-y": icCanScroll.value,
                class: "scrollList",
                onScroll: _cache[0] || (_cache[0] = (...args) => _ctx.handleScroll && _ctx.handleScroll(...args)),
                onScrolltolower: handleLoad,
                "upper-threshold": 50,
                ref_key: "scrollView",
                ref: scrollView,
                "scroll-top": scrollTop.value
              }, [
                homeList.data.length ? (vue.openBlock(), vue.createBlock(vue.unref(HomeList), {
                  key: 0,
                  data: homeList.data,
                  onRefresh: getRobOrderList
                }, null, 8, ["data"])) : (vue.openBlock(), vue.createBlock(Empty, { key: 1 }))
              ], 40, ["scroll-y", "scroll-top"]),
              vue.createVNode(UniFooter, { pagePath: "pages/pickup/index" })
            ]),
            vue.createCommentVNode(" end ")
          ],
          2112
          /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
        );
      };
    }
  };
  const PagesEvaluateIndex = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-2cd4902b"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/pages/evaluate/index.vue"]]);
  const provinceData = [
    {
      "label": "北京",
      "value": "11"
    },
    {
      "label": "天津",
      "value": "12"
    },
    {
      "label": "河北省",
      "value": "13"
    },
    {
      "label": "山西省",
      "value": "14"
    },
    {
      "label": "内蒙古自治区",
      "value": "15"
    },
    {
      "label": "辽宁省",
      "value": "21"
    },
    {
      "label": "吉林省",
      "value": "22"
    },
    {
      "label": "黑龙江省",
      "value": "23"
    },
    {
      "label": "上海",
      "value": "31"
    },
    {
      "label": "江苏省",
      "value": "32"
    },
    {
      "label": "浙江省",
      "value": "33"
    },
    {
      "label": "安徽省",
      "value": "34"
    },
    {
      "label": "福建省",
      "value": "35"
    },
    {
      "label": "江西省",
      "value": "36"
    },
    {
      "label": "山东省",
      "value": "37"
    },
    {
      "label": "河南省",
      "value": "41"
    },
    {
      "label": "湖北省",
      "value": "42"
    },
    {
      "label": "湖南省",
      "value": "43"
    },
    {
      "label": "广东省",
      "value": "44"
    },
    {
      "label": "广西壮族自治区",
      "value": "45"
    },
    {
      "label": "海南省",
      "value": "46"
    },
    {
      "label": "重庆",
      "value": "50"
    },
    {
      "label": "四川省",
      "value": "51"
    },
    {
      "label": "贵州省",
      "value": "52"
    },
    {
      "label": "云南省",
      "value": "53"
    },
    {
      "label": "西藏自治区",
      "value": "54"
    },
    {
      "label": "陕西省",
      "value": "61"
    },
    {
      "label": "甘肃省",
      "value": "62"
    },
    {
      "label": "青海省",
      "value": "63"
    },
    {
      "label": "宁夏回族自治区",
      "value": "64"
    },
    {
      "label": "新疆维吾尔自治区",
      "value": "65"
    },
    {
      "label": "台湾",
      "value": "66"
    },
    {
      "label": "香港",
      "value": "67"
    },
    {
      "label": "澳门",
      "value": "68"
    }
  ];
  const cityData = [
    [{
      "label": "北京市",
      "value": "1101"
    }],
    [{
      "label": "天津市",
      "value": "1201"
    }],
    [
      {
        "label": "石家庄市",
        "value": "1301"
      },
      {
        "label": "唐山市",
        "value": "1302"
      },
      {
        "label": "秦皇岛市",
        "value": "1303"
      },
      {
        "label": "邯郸市",
        "value": "1304"
      },
      {
        "label": "邢台市",
        "value": "1305"
      },
      {
        "label": "保定市",
        "value": "1306"
      },
      {
        "label": "张家口市",
        "value": "1307"
      },
      {
        "label": "承德市",
        "value": "1308"
      },
      {
        "label": "沧州市",
        "value": "1309"
      },
      {
        "label": "廊坊市",
        "value": "1310"
      },
      {
        "label": "衡水市",
        "value": "1311"
      }
    ],
    [
      {
        "label": "太原市",
        "value": "1401"
      },
      {
        "label": "大同市",
        "value": "1402"
      },
      {
        "label": "阳泉市",
        "value": "1403"
      },
      {
        "label": "长治市",
        "value": "1404"
      },
      {
        "label": "晋城市",
        "value": "1405"
      },
      {
        "label": "朔州市",
        "value": "1406"
      },
      {
        "label": "晋中市",
        "value": "1407"
      },
      {
        "label": "运城市",
        "value": "1408"
      },
      {
        "label": "忻州市",
        "value": "1409"
      },
      {
        "label": "临汾市",
        "value": "1410"
      },
      {
        "label": "吕梁市",
        "value": "1411"
      }
    ],
    [
      {
        "label": "呼和浩特市",
        "value": "1501"
      },
      {
        "label": "包头市",
        "value": "1502"
      },
      {
        "label": "乌海市",
        "value": "1503"
      },
      {
        "label": "赤峰市",
        "value": "1504"
      },
      {
        "label": "通辽市",
        "value": "1505"
      },
      {
        "label": "鄂尔多斯市",
        "value": "1506"
      },
      {
        "label": "呼伦贝尔市",
        "value": "1507"
      },
      {
        "label": "巴彦淖尔市",
        "value": "1508"
      },
      {
        "label": "乌兰察布市",
        "value": "1509"
      },
      {
        "label": "兴安盟",
        "value": "1522"
      },
      {
        "label": "锡林郭勒盟",
        "value": "1525"
      },
      {
        "label": "阿拉善盟",
        "value": "1529"
      }
    ],
    [
      {
        "label": "沈阳市",
        "value": "2101"
      },
      {
        "label": "大连市",
        "value": "2102"
      },
      {
        "label": "鞍山市",
        "value": "2103"
      },
      {
        "label": "抚顺市",
        "value": "2104"
      },
      {
        "label": "本溪市",
        "value": "2105"
      },
      {
        "label": "丹东市",
        "value": "2106"
      },
      {
        "label": "锦州市",
        "value": "2107"
      },
      {
        "label": "营口市",
        "value": "2108"
      },
      {
        "label": "阜新市",
        "value": "2109"
      },
      {
        "label": "辽阳市",
        "value": "2110"
      },
      {
        "label": "盘锦市",
        "value": "2111"
      },
      {
        "label": "铁岭市",
        "value": "2112"
      },
      {
        "label": "朝阳市",
        "value": "2113"
      },
      {
        "label": "葫芦岛市",
        "value": "2114"
      }
    ],
    [
      {
        "label": "长春市",
        "value": "2201"
      },
      {
        "label": "吉林市",
        "value": "2202"
      },
      {
        "label": "四平市",
        "value": "2203"
      },
      {
        "label": "辽源市",
        "value": "2204"
      },
      {
        "label": "通化市",
        "value": "2205"
      },
      {
        "label": "白山市",
        "value": "2206"
      },
      {
        "label": "松原市",
        "value": "2207"
      },
      {
        "label": "白城市",
        "value": "2208"
      },
      {
        "label": "延边朝鲜族自治州",
        "value": "2224"
      }
    ],
    [
      {
        "label": "哈尔滨市",
        "value": "2301"
      },
      {
        "label": "齐齐哈尔市",
        "value": "2302"
      },
      {
        "label": "鸡西市",
        "value": "2303"
      },
      {
        "label": "鹤岗市",
        "value": "2304"
      },
      {
        "label": "双鸭山市",
        "value": "2305"
      },
      {
        "label": "大庆市",
        "value": "2306"
      },
      {
        "label": "伊春市",
        "value": "2307"
      },
      {
        "label": "佳木斯市",
        "value": "2308"
      },
      {
        "label": "七台河市",
        "value": "2309"
      },
      {
        "label": "牡丹江市",
        "value": "2310"
      },
      {
        "label": "黑河市",
        "value": "2311"
      },
      {
        "label": "绥化市",
        "value": "2312"
      },
      {
        "label": "大兴安岭地区",
        "value": "2327"
      }
    ],
    [{
      "label": "上海市",
      "value": "3101"
    }],
    [
      {
        "label": "南京市",
        "value": "3201"
      },
      {
        "label": "无锡市",
        "value": "3202"
      },
      {
        "label": "徐州市",
        "value": "3203"
      },
      {
        "label": "常州市",
        "value": "3204"
      },
      {
        "label": "苏州市",
        "value": "3205"
      },
      {
        "label": "南通市",
        "value": "3206"
      },
      {
        "label": "连云港市",
        "value": "3207"
      },
      {
        "label": "淮安市",
        "value": "3208"
      },
      {
        "label": "盐城市",
        "value": "3209"
      },
      {
        "label": "扬州市",
        "value": "3210"
      },
      {
        "label": "镇江市",
        "value": "3211"
      },
      {
        "label": "泰州市",
        "value": "3212"
      },
      {
        "label": "宿迁市",
        "value": "3213"
      }
    ],
    [
      {
        "label": "杭州市",
        "value": "3301"
      },
      {
        "label": "宁波市",
        "value": "3302"
      },
      {
        "label": "温州市",
        "value": "3303"
      },
      {
        "label": "嘉兴市",
        "value": "3304"
      },
      {
        "label": "湖州市",
        "value": "3305"
      },
      {
        "label": "绍兴市",
        "value": "3306"
      },
      {
        "label": "金华市",
        "value": "3307"
      },
      {
        "label": "衢州市",
        "value": "3308"
      },
      {
        "label": "舟山市",
        "value": "3309"
      },
      {
        "label": "台州市",
        "value": "3310"
      },
      {
        "label": "丽水市",
        "value": "3311"
      }
    ],
    [
      {
        "label": "合肥市",
        "value": "3401"
      },
      {
        "label": "芜湖市",
        "value": "3402"
      },
      {
        "label": "蚌埠市",
        "value": "3403"
      },
      {
        "label": "淮南市",
        "value": "3404"
      },
      {
        "label": "马鞍山市",
        "value": "3405"
      },
      {
        "label": "淮北市",
        "value": "3406"
      },
      {
        "label": "铜陵市",
        "value": "3407"
      },
      {
        "label": "安庆市",
        "value": "3408"
      },
      {
        "label": "黄山市",
        "value": "3410"
      },
      {
        "label": "滁州市",
        "value": "3411"
      },
      {
        "label": "阜阳市",
        "value": "3412"
      },
      {
        "label": "宿州市",
        "value": "3413"
      },
      {
        "label": "六安市",
        "value": "3415"
      },
      {
        "label": "亳州市",
        "value": "3416"
      },
      {
        "label": "池州市",
        "value": "3417"
      },
      {
        "label": "宣城市",
        "value": "3418"
      }
    ],
    [
      {
        "label": "福州市",
        "value": "3501"
      },
      {
        "label": "厦门市",
        "value": "3502"
      },
      {
        "label": "莆田市",
        "value": "3503"
      },
      {
        "label": "三明市",
        "value": "3504"
      },
      {
        "label": "泉州市",
        "value": "3505"
      },
      {
        "label": "漳州市",
        "value": "3506"
      },
      {
        "label": "南平市",
        "value": "3507"
      },
      {
        "label": "龙岩市",
        "value": "3508"
      },
      {
        "label": "宁德市",
        "value": "3509"
      }
    ],
    [
      {
        "label": "南昌市",
        "value": "3601"
      },
      {
        "label": "景德镇市",
        "value": "3602"
      },
      {
        "label": "萍乡市",
        "value": "3603"
      },
      {
        "label": "九江市",
        "value": "3604"
      },
      {
        "label": "新余市",
        "value": "3605"
      },
      {
        "label": "鹰潭市",
        "value": "3606"
      },
      {
        "label": "赣州市",
        "value": "3607"
      },
      {
        "label": "吉安市",
        "value": "3608"
      },
      {
        "label": "宜春市",
        "value": "3609"
      },
      {
        "label": "抚州市",
        "value": "3610"
      },
      {
        "label": "上饶市",
        "value": "3611"
      }
    ],
    [
      {
        "label": "济南市",
        "value": "3701"
      },
      {
        "label": "青岛市",
        "value": "3702"
      },
      {
        "label": "淄博市",
        "value": "3703"
      },
      {
        "label": "枣庄市",
        "value": "3704"
      },
      {
        "label": "东营市",
        "value": "3705"
      },
      {
        "label": "烟台市",
        "value": "3706"
      },
      {
        "label": "潍坊市",
        "value": "3707"
      },
      {
        "label": "济宁市",
        "value": "3708"
      },
      {
        "label": "泰安市",
        "value": "3709"
      },
      {
        "label": "威海市",
        "value": "3710"
      },
      {
        "label": "日照市",
        "value": "3711"
      },
      {
        "label": "莱芜市",
        "value": "3712"
      },
      {
        "label": "临沂市",
        "value": "3713"
      },
      {
        "label": "德州市",
        "value": "3714"
      },
      {
        "label": "聊城市",
        "value": "3715"
      },
      {
        "label": "滨州市",
        "value": "3716"
      },
      {
        "label": "菏泽市",
        "value": "3717"
      }
    ],
    [
      {
        "label": "郑州市",
        "value": "4101"
      },
      {
        "label": "开封市",
        "value": "4102"
      },
      {
        "label": "洛阳市",
        "value": "4103"
      },
      {
        "label": "平顶山市",
        "value": "4104"
      },
      {
        "label": "安阳市",
        "value": "4105"
      },
      {
        "label": "鹤壁市",
        "value": "4106"
      },
      {
        "label": "新乡市",
        "value": "4107"
      },
      {
        "label": "焦作市",
        "value": "4108"
      },
      {
        "label": "濮阳市",
        "value": "4109"
      },
      {
        "label": "许昌市",
        "value": "4110"
      },
      {
        "label": "漯河市",
        "value": "4111"
      },
      {
        "label": "三门峡市",
        "value": "4112"
      },
      {
        "label": "南阳市",
        "value": "4113"
      },
      {
        "label": "商丘市",
        "value": "4114"
      },
      {
        "label": "信阳市",
        "value": "4115"
      },
      {
        "label": "周口市",
        "value": "4116"
      },
      {
        "label": "驻马店市",
        "value": "4117"
      },
      {
        "label": "济源市",
        "value": "4190"
      }
    ],
    [
      {
        "label": "武汉市",
        "value": "4201"
      },
      {
        "label": "黄石市",
        "value": "4202"
      },
      {
        "label": "十堰市",
        "value": "4203"
      },
      {
        "label": "宜昌市",
        "value": "4205"
      },
      {
        "label": "襄阳市",
        "value": "4206"
      },
      {
        "label": "鄂州市",
        "value": "4207"
      },
      {
        "label": "荆门市",
        "value": "4208"
      },
      {
        "label": "孝感市",
        "value": "4209"
      },
      {
        "label": "荆州市",
        "value": "4210"
      },
      {
        "label": "黄冈市",
        "value": "4211"
      },
      {
        "label": "咸宁市",
        "value": "4212"
      },
      {
        "label": "随州市",
        "value": "4213"
      },
      {
        "label": "恩施土家族苗族自治州",
        "value": "4228"
      },
      {
        "label": "省直辖县级行政区划",
        "value": "4290"
      }
    ],
    [
      {
        "label": "长沙市",
        "value": "4301"
      },
      {
        "label": "株洲市",
        "value": "4302"
      },
      {
        "label": "湘潭市",
        "value": "4303"
      },
      {
        "label": "衡阳市",
        "value": "4304"
      },
      {
        "label": "邵阳市",
        "value": "4305"
      },
      {
        "label": "岳阳市",
        "value": "4306"
      },
      {
        "label": "常德市",
        "value": "4307"
      },
      {
        "label": "张家界市",
        "value": "4308"
      },
      {
        "label": "益阳市",
        "value": "4309"
      },
      {
        "label": "郴州市",
        "value": "4310"
      },
      {
        "label": "永州市",
        "value": "4311"
      },
      {
        "label": "怀化市",
        "value": "4312"
      },
      {
        "label": "娄底市",
        "value": "4313"
      },
      {
        "label": "湘西土家族苗族自治州",
        "value": "4331"
      }
    ],
    [
      {
        "label": "广州市",
        "value": "4401"
      },
      {
        "label": "韶关市",
        "value": "4402"
      },
      {
        "label": "深圳市",
        "value": "4403"
      },
      {
        "label": "珠海市",
        "value": "4404"
      },
      {
        "label": "汕头市",
        "value": "4405"
      },
      {
        "label": "佛山市",
        "value": "4406"
      },
      {
        "label": "江门市",
        "value": "4407"
      },
      {
        "label": "湛江市",
        "value": "4408"
      },
      {
        "label": "茂名市",
        "value": "4409"
      },
      {
        "label": "肇庆市",
        "value": "4412"
      },
      {
        "label": "惠州市",
        "value": "4413"
      },
      {
        "label": "梅州市",
        "value": "4414"
      },
      {
        "label": "汕尾市",
        "value": "4415"
      },
      {
        "label": "河源市",
        "value": "4416"
      },
      {
        "label": "阳江市",
        "value": "4417"
      },
      {
        "label": "清远市",
        "value": "4418"
      },
      {
        "label": "东莞市",
        "value": "4419"
      },
      {
        "label": "中山市",
        "value": "4420"
      },
      {
        "label": "潮州市",
        "value": "4451"
      },
      {
        "label": "揭阳市",
        "value": "4452"
      },
      {
        "label": "云浮市",
        "value": "4453"
      }
    ],
    [
      {
        "label": "南宁市",
        "value": "4501"
      },
      {
        "label": "柳州市",
        "value": "4502"
      },
      {
        "label": "桂林市",
        "value": "4503"
      },
      {
        "label": "梧州市",
        "value": "4504"
      },
      {
        "label": "北海市",
        "value": "4505"
      },
      {
        "label": "防城港市",
        "value": "4506"
      },
      {
        "label": "钦州市",
        "value": "4507"
      },
      {
        "label": "贵港市",
        "value": "4508"
      },
      {
        "label": "玉林市",
        "value": "4509"
      },
      {
        "label": "百色市",
        "value": "4510"
      },
      {
        "label": "贺州市",
        "value": "4511"
      },
      {
        "label": "河池市",
        "value": "4512"
      },
      {
        "label": "来宾市",
        "value": "4513"
      },
      {
        "label": "崇左市",
        "value": "4514"
      }
    ],
    [
      {
        "label": "海口市",
        "value": "4601"
      },
      {
        "label": "三亚市",
        "value": "4602"
      },
      {
        "label": "三沙市",
        "value": "4603"
      },
      {
        "label": "儋州市",
        "value": "4604"
      },
      {
        "label": "五指山市",
        "value": "469001"
      },
      {
        "label": "琼海市",
        "value": "469002"
      },
      {
        "label": "文昌市",
        "value": "469005"
      },
      {
        "label": "万宁市",
        "value": "469006"
      },
      {
        "label": "东方市",
        "value": "469007"
      },
      {
        "label": "定安县",
        "value": "469021"
      },
      {
        "label": "屯昌县",
        "value": "469022"
      },
      {
        "label": "澄迈县",
        "value": "469023"
      },
      {
        "label": "临高县",
        "value": "469024"
      },
      {
        "label": "白沙黎族自治县",
        "value": "469025"
      },
      {
        "label": "昌江黎族自治县",
        "value": "469026"
      },
      {
        "label": "乐东黎族自治县",
        "value": "469027"
      },
      {
        "label": "陵水黎族自治县",
        "value": "469028"
      },
      {
        "label": "保亭黎族苗族自治县",
        "value": "469029"
      },
      {
        "label": "琼中黎族苗族自治县",
        "value": "469030"
      }
    ],
    [
      {
        "label": "重庆市",
        "value": "5001"
      }
    ],
    [
      {
        "label": "成都市",
        "value": "5101"
      },
      {
        "label": "自贡市",
        "value": "5103"
      },
      {
        "label": "攀枝花市",
        "value": "5104"
      },
      {
        "label": "泸州市",
        "value": "5105"
      },
      {
        "label": "德阳市",
        "value": "5106"
      },
      {
        "label": "绵阳市",
        "value": "5107"
      },
      {
        "label": "广元市",
        "value": "5108"
      },
      {
        "label": "遂宁市",
        "value": "5109"
      },
      {
        "label": "内江市",
        "value": "5110"
      },
      {
        "label": "乐山市",
        "value": "5111"
      },
      {
        "label": "南充市",
        "value": "5113"
      },
      {
        "label": "眉山市",
        "value": "5114"
      },
      {
        "label": "宜宾市",
        "value": "5115"
      },
      {
        "label": "广安市",
        "value": "5116"
      },
      {
        "label": "达州市",
        "value": "5117"
      },
      {
        "label": "雅安市",
        "value": "5118"
      },
      {
        "label": "巴中市",
        "value": "5119"
      },
      {
        "label": "资阳市",
        "value": "5120"
      },
      {
        "label": "阿坝藏族羌族自治州",
        "value": "5132"
      },
      {
        "label": "甘孜藏族自治州",
        "value": "5133"
      },
      {
        "label": "凉山彝族自治州",
        "value": "5134"
      }
    ],
    [
      {
        "label": "贵阳市",
        "value": "5201"
      },
      {
        "label": "六盘水市",
        "value": "5202"
      },
      {
        "label": "遵义市",
        "value": "5203"
      },
      {
        "label": "安顺市",
        "value": "5204"
      },
      {
        "label": "毕节市",
        "value": "5205"
      },
      {
        "label": "铜仁市",
        "value": "5206"
      },
      {
        "label": "黔西南布依族苗族自治州",
        "value": "5223"
      },
      {
        "label": "黔东南苗族侗族自治州",
        "value": "5226"
      },
      {
        "label": "黔南布依族苗族自治州",
        "value": "5227"
      }
    ],
    [
      {
        "label": "昆明市",
        "value": "5301"
      },
      {
        "label": "曲靖市",
        "value": "5303"
      },
      {
        "label": "玉溪市",
        "value": "5304"
      },
      {
        "label": "保山市",
        "value": "5305"
      },
      {
        "label": "昭通市",
        "value": "5306"
      },
      {
        "label": "丽江市",
        "value": "5307"
      },
      {
        "label": "普洱市",
        "value": "5308"
      },
      {
        "label": "临沧市",
        "value": "5309"
      },
      {
        "label": "楚雄彝族自治州",
        "value": "5323"
      },
      {
        "label": "红河哈尼族彝族自治州",
        "value": "5325"
      },
      {
        "label": "文山壮族苗族自治州",
        "value": "5326"
      },
      {
        "label": "西双版纳傣族自治州",
        "value": "5328"
      },
      {
        "label": "大理白族自治州",
        "value": "5329"
      },
      {
        "label": "德宏傣族景颇族自治州",
        "value": "5331"
      },
      {
        "label": "怒江傈僳族自治州",
        "value": "5333"
      },
      {
        "label": "迪庆藏族自治州",
        "value": "5334"
      }
    ],
    [
      {
        "label": "拉萨市",
        "value": "5401"
      },
      {
        "label": "日喀则市",
        "value": "5402"
      },
      {
        "label": "昌都市",
        "value": "5403"
      },
      {
        "label": "林芝市",
        "value": "5404"
      },
      {
        "label": "山南市",
        "value": "5405"
      },
      {
        "label": "那曲地区",
        "value": "5424"
      },
      {
        "label": "阿里地区",
        "value": "5425"
      }
    ],
    [
      {
        "label": "西安市",
        "value": "6101"
      },
      {
        "label": "铜川市",
        "value": "6102"
      },
      {
        "label": "宝鸡市",
        "value": "6103"
      },
      {
        "label": "咸阳市",
        "value": "6104"
      },
      {
        "label": "渭南市",
        "value": "6105"
      },
      {
        "label": "延安市",
        "value": "6106"
      },
      {
        "label": "汉中市",
        "value": "6107"
      },
      {
        "label": "榆林市",
        "value": "6108"
      },
      {
        "label": "安康市",
        "value": "6109"
      },
      {
        "label": "商洛市",
        "value": "6110"
      }
    ],
    [
      {
        "label": "兰州市",
        "value": "6201"
      },
      {
        "label": "嘉峪关市",
        "value": "6202"
      },
      {
        "label": "金昌市",
        "value": "6203"
      },
      {
        "label": "白银市",
        "value": "6204"
      },
      {
        "label": "天水市",
        "value": "6205"
      },
      {
        "label": "武威市",
        "value": "6206"
      },
      {
        "label": "张掖市",
        "value": "6207"
      },
      {
        "label": "平凉市",
        "value": "6208"
      },
      {
        "label": "酒泉市",
        "value": "6209"
      },
      {
        "label": "庆阳市",
        "value": "6210"
      },
      {
        "label": "定西市",
        "value": "6211"
      },
      {
        "label": "陇南市",
        "value": "6212"
      },
      {
        "label": "临夏回族自治州",
        "value": "6229"
      },
      {
        "label": "甘南藏族自治州",
        "value": "6230"
      }
    ],
    [
      {
        "label": "西宁市",
        "value": "6301"
      },
      {
        "label": "海东市",
        "value": "6302"
      },
      {
        "label": "海北藏族自治州",
        "value": "6322"
      },
      {
        "label": "黄南藏族自治州",
        "value": "6323"
      },
      {
        "label": "海南藏族自治州",
        "value": "6325"
      },
      {
        "label": "果洛藏族自治州",
        "value": "6326"
      },
      {
        "label": "玉树藏族自治州",
        "value": "6327"
      },
      {
        "label": "海西蒙古族藏族自治州",
        "value": "6328"
      }
    ],
    [
      {
        "label": "银川市",
        "value": "6401"
      },
      {
        "label": "石嘴山市",
        "value": "6402"
      },
      {
        "label": "吴忠市",
        "value": "6403"
      },
      {
        "label": "固原市",
        "value": "6404"
      },
      {
        "label": "中卫市",
        "value": "6405"
      }
    ],
    [
      {
        "label": "乌鲁木齐市",
        "value": "6501"
      },
      {
        "label": "克拉玛依市",
        "value": "6502"
      },
      {
        "label": "吐鲁番市",
        "value": "6504"
      },
      {
        "label": "哈密市",
        "value": "6505"
      },
      {
        "label": "昌吉回族自治州",
        "value": "6523"
      },
      {
        "label": "博尔塔拉蒙古自治州",
        "value": "6527"
      },
      {
        "label": "巴音郭楞蒙古自治州",
        "value": "6528"
      },
      {
        "label": "阿克苏地区",
        "value": "6529"
      },
      {
        "label": "克孜勒苏柯尔克孜自治州",
        "value": "6530"
      },
      {
        "label": "喀什地区",
        "value": "6531"
      },
      {
        "label": "和田地区",
        "value": "6532"
      },
      {
        "label": "伊犁哈萨克自治州",
        "value": "6540"
      },
      {
        "label": "塔城地区",
        "value": "6542"
      },
      {
        "label": "阿勒泰地区",
        "value": "6543"
      },
      {
        "label": "石河子市",
        "value": "659001"
      },
      {
        "label": "阿拉尔市",
        "value": "659002"
      },
      {
        "label": "图木舒克市",
        "value": "659003"
      },
      {
        "label": "五家渠市",
        "value": "659004"
      },
      {
        "label": "铁门关市",
        "value": "659006"
      }
    ],
    [
      {
        "label": "台北",
        "value": "6601"
      },
      {
        "label": "高雄",
        "value": "6602"
      },
      {
        "label": "基隆",
        "value": "6603"
      },
      {
        "label": "台中",
        "value": "6604"
      },
      {
        "label": "台南",
        "value": "6605"
      },
      {
        "label": "新竹",
        "value": "6606"
      },
      {
        "label": "嘉义",
        "value": "6607"
      },
      {
        "label": "宜兰",
        "value": "6608"
      },
      {
        "label": "桃园",
        "value": "6609"
      },
      {
        "label": "苗栗",
        "value": "6610"
      },
      {
        "label": "彰化",
        "value": "6611"
      },
      {
        "label": "南投",
        "value": "6612"
      },
      {
        "label": "云林",
        "value": "6613"
      },
      {
        "label": "屏东",
        "value": "6614"
      },
      {
        "label": "台东",
        "value": "6615"
      },
      {
        "label": "花莲",
        "value": "6616"
      },
      {
        "label": "澎湖",
        "value": "6617"
      }
    ],
    [
      {
        "label": "香港特别行政区",
        "value": "67"
      }
    ],
    [
      {
        "label": "澳门特别行政区",
        "value": "68"
      }
    ]
  ];
  const areaData = [
    [
      [
        {
          "label": "东城区",
          "value": "110101"
        },
        {
          "label": "西城区",
          "value": "110102"
        },
        {
          "label": "朝阳区",
          "value": "110105"
        },
        {
          "label": "丰台区",
          "value": "110106"
        },
        {
          "label": "石景山区",
          "value": "110107"
        },
        {
          "label": "海淀区",
          "value": "110108"
        },
        {
          "label": "门头沟区",
          "value": "110109"
        },
        {
          "label": "房山区",
          "value": "110111"
        },
        {
          "label": "通州区",
          "value": "110112"
        },
        {
          "label": "顺义区",
          "value": "110113"
        },
        {
          "label": "昌平区",
          "value": "110114"
        },
        {
          "label": "大兴区",
          "value": "110115"
        },
        {
          "label": "怀柔区",
          "value": "110116"
        },
        {
          "label": "平谷区",
          "value": "110117"
        },
        {
          "label": "密云区",
          "value": "110118"
        },
        {
          "label": "延庆区",
          "value": "110119"
        }
      ]
    ],
    [
      [
        {
          "label": "和平区",
          "value": "120101"
        },
        {
          "label": "河东区",
          "value": "120102"
        },
        {
          "label": "河西区",
          "value": "120103"
        },
        {
          "label": "南开区",
          "value": "120104"
        },
        {
          "label": "河北区",
          "value": "120105"
        },
        {
          "label": "红桥区",
          "value": "120106"
        },
        {
          "label": "东丽区",
          "value": "120110"
        },
        {
          "label": "西青区",
          "value": "120111"
        },
        {
          "label": "津南区",
          "value": "120112"
        },
        {
          "label": "北辰区",
          "value": "120113"
        },
        {
          "label": "武清区",
          "value": "120114"
        },
        {
          "label": "宝坻区",
          "value": "120115"
        },
        {
          "label": "滨海新区",
          "value": "120116"
        },
        {
          "label": "宁河区",
          "value": "120117"
        },
        {
          "label": "静海区",
          "value": "120118"
        },
        {
          "label": "蓟州区",
          "value": "120119"
        }
      ]
    ],
    [
      [
        {
          "label": "长安区",
          "value": "130102"
        },
        {
          "label": "桥西区",
          "value": "130104"
        },
        {
          "label": "新华区",
          "value": "130105"
        },
        {
          "label": "井陉矿区",
          "value": "130107"
        },
        {
          "label": "裕华区",
          "value": "130108"
        },
        {
          "label": "藁城区",
          "value": "130109"
        },
        {
          "label": "鹿泉区",
          "value": "130110"
        },
        {
          "label": "栾城区",
          "value": "130111"
        },
        {
          "label": "井陉县",
          "value": "130121"
        },
        {
          "label": "正定县",
          "value": "130123"
        },
        {
          "label": "行唐县",
          "value": "130125"
        },
        {
          "label": "灵寿县",
          "value": "130126"
        },
        {
          "label": "高邑县",
          "value": "130127"
        },
        {
          "label": "深泽县",
          "value": "130128"
        },
        {
          "label": "赞皇县",
          "value": "130129"
        },
        {
          "label": "无极县",
          "value": "130130"
        },
        {
          "label": "平山县",
          "value": "130131"
        },
        {
          "label": "元氏县",
          "value": "130132"
        },
        {
          "label": "赵县",
          "value": "130133"
        },
        {
          "label": "石家庄高新技术产业开发区",
          "value": "130171"
        },
        {
          "label": "石家庄循环化工园区",
          "value": "130172"
        },
        {
          "label": "辛集市",
          "value": "130181"
        },
        {
          "label": "晋州市",
          "value": "130183"
        },
        {
          "label": "新乐市",
          "value": "130184"
        }
      ],
      [
        {
          "label": "路南区",
          "value": "130202"
        },
        {
          "label": "路北区",
          "value": "130203"
        },
        {
          "label": "古冶区",
          "value": "130204"
        },
        {
          "label": "开平区",
          "value": "130205"
        },
        {
          "label": "丰南区",
          "value": "130207"
        },
        {
          "label": "丰润区",
          "value": "130208"
        },
        {
          "label": "曹妃甸区",
          "value": "130209"
        },
        {
          "label": "滦县",
          "value": "130223"
        },
        {
          "label": "滦南县",
          "value": "130224"
        },
        {
          "label": "乐亭县",
          "value": "130225"
        },
        {
          "label": "迁西县",
          "value": "130227"
        },
        {
          "label": "玉田县",
          "value": "130229"
        },
        {
          "label": "唐山市芦台经济技术开发区",
          "value": "130271"
        },
        {
          "label": "唐山市汉沽管理区",
          "value": "130272"
        },
        {
          "label": "唐山高新技术产业开发区",
          "value": "130273"
        },
        {
          "label": "河北唐山海港经济开发区",
          "value": "130274"
        },
        {
          "label": "遵化市",
          "value": "130281"
        },
        {
          "label": "迁安市",
          "value": "130283"
        }
      ],
      [
        {
          "label": "海港区",
          "value": "130302"
        },
        {
          "label": "山海关区",
          "value": "130303"
        },
        {
          "label": "北戴河区",
          "value": "130304"
        },
        {
          "label": "抚宁区",
          "value": "130306"
        },
        {
          "label": "青龙满族自治县",
          "value": "130321"
        },
        {
          "label": "昌黎县",
          "value": "130322"
        },
        {
          "label": "卢龙县",
          "value": "130324"
        },
        {
          "label": "秦皇岛市经济技术开发区",
          "value": "130371"
        },
        {
          "label": "北戴河新区",
          "value": "130372"
        }
      ],
      [
        {
          "label": "邯山区",
          "value": "130402"
        },
        {
          "label": "丛台区",
          "value": "130403"
        },
        {
          "label": "复兴区",
          "value": "130404"
        },
        {
          "label": "峰峰矿区",
          "value": "130406"
        },
        {
          "label": "肥乡区",
          "value": "130407"
        },
        {
          "label": "永年区",
          "value": "130408"
        },
        {
          "label": "临漳县",
          "value": "130423"
        },
        {
          "label": "成安县",
          "value": "130424"
        },
        {
          "label": "大名县",
          "value": "130425"
        },
        {
          "label": "涉县",
          "value": "130426"
        },
        {
          "label": "磁县",
          "value": "130427"
        },
        {
          "label": "邱县",
          "value": "130430"
        },
        {
          "label": "鸡泽县",
          "value": "130431"
        },
        {
          "label": "广平县",
          "value": "130432"
        },
        {
          "label": "馆陶县",
          "value": "130433"
        },
        {
          "label": "魏县",
          "value": "130434"
        },
        {
          "label": "曲周县",
          "value": "130435"
        },
        {
          "label": "邯郸经济技术开发区",
          "value": "130471"
        },
        {
          "label": "邯郸冀南新区",
          "value": "130473"
        },
        {
          "label": "武安市",
          "value": "130481"
        }
      ],
      [
        {
          "label": "桥东区",
          "value": "130502"
        },
        {
          "label": "桥西区",
          "value": "130503"
        },
        {
          "label": "邢台县",
          "value": "130521"
        },
        {
          "label": "临城县",
          "value": "130522"
        },
        {
          "label": "内丘县",
          "value": "130523"
        },
        {
          "label": "柏乡县",
          "value": "130524"
        },
        {
          "label": "隆尧县",
          "value": "130525"
        },
        {
          "label": "任县",
          "value": "130526"
        },
        {
          "label": "南和县",
          "value": "130527"
        },
        {
          "label": "宁晋县",
          "value": "130528"
        },
        {
          "label": "巨鹿县",
          "value": "130529"
        },
        {
          "label": "新河县",
          "value": "130530"
        },
        {
          "label": "广宗县",
          "value": "130531"
        },
        {
          "label": "平乡县",
          "value": "130532"
        },
        {
          "label": "威县",
          "value": "130533"
        },
        {
          "label": "清河县",
          "value": "130534"
        },
        {
          "label": "临西县",
          "value": "130535"
        },
        {
          "label": "河北邢台经济开发区",
          "value": "130571"
        },
        {
          "label": "南宫市",
          "value": "130581"
        },
        {
          "label": "沙河市",
          "value": "130582"
        }
      ],
      [
        {
          "label": "竞秀区",
          "value": "130602"
        },
        {
          "label": "莲池区",
          "value": "130606"
        },
        {
          "label": "满城区",
          "value": "130607"
        },
        {
          "label": "清苑区",
          "value": "130608"
        },
        {
          "label": "徐水区",
          "value": "130609"
        },
        {
          "label": "涞水县",
          "value": "130623"
        },
        {
          "label": "阜平县",
          "value": "130624"
        },
        {
          "label": "定兴县",
          "value": "130626"
        },
        {
          "label": "唐县",
          "value": "130627"
        },
        {
          "label": "高阳县",
          "value": "130628"
        },
        {
          "label": "容城县",
          "value": "130629"
        },
        {
          "label": "涞源县",
          "value": "130630"
        },
        {
          "label": "望都县",
          "value": "130631"
        },
        {
          "label": "安新县",
          "value": "130632"
        },
        {
          "label": "易县",
          "value": "130633"
        },
        {
          "label": "曲阳县",
          "value": "130634"
        },
        {
          "label": "蠡县",
          "value": "130635"
        },
        {
          "label": "顺平县",
          "value": "130636"
        },
        {
          "label": "博野县",
          "value": "130637"
        },
        {
          "label": "雄县",
          "value": "130638"
        },
        {
          "label": "保定高新技术产业开发区",
          "value": "130671"
        },
        {
          "label": "保定白沟新城",
          "value": "130672"
        },
        {
          "label": "涿州市",
          "value": "130681"
        },
        {
          "label": "定州市",
          "value": "130682"
        },
        {
          "label": "安国市",
          "value": "130683"
        },
        {
          "label": "高碑店市",
          "value": "130684"
        }
      ],
      [
        {
          "label": "桥东区",
          "value": "130702"
        },
        {
          "label": "桥西区",
          "value": "130703"
        },
        {
          "label": "宣化区",
          "value": "130705"
        },
        {
          "label": "下花园区",
          "value": "130706"
        },
        {
          "label": "万全区",
          "value": "130708"
        },
        {
          "label": "崇礼区",
          "value": "130709"
        },
        {
          "label": "张北县",
          "value": "130722"
        },
        {
          "label": "康保县",
          "value": "130723"
        },
        {
          "label": "沽源县",
          "value": "130724"
        },
        {
          "label": "尚义县",
          "value": "130725"
        },
        {
          "label": "蔚县",
          "value": "130726"
        },
        {
          "label": "阳原县",
          "value": "130727"
        },
        {
          "label": "怀安县",
          "value": "130728"
        },
        {
          "label": "怀来县",
          "value": "130730"
        },
        {
          "label": "涿鹿县",
          "value": "130731"
        },
        {
          "label": "赤城县",
          "value": "130732"
        },
        {
          "label": "张家口市高新技术产业开发区",
          "value": "130771"
        },
        {
          "label": "张家口市察北管理区",
          "value": "130772"
        },
        {
          "label": "张家口市塞北管理区",
          "value": "130773"
        }
      ],
      [
        {
          "label": "双桥区",
          "value": "130802"
        },
        {
          "label": "双滦区",
          "value": "130803"
        },
        {
          "label": "鹰手营子矿区",
          "value": "130804"
        },
        {
          "label": "承德县",
          "value": "130821"
        },
        {
          "label": "兴隆县",
          "value": "130822"
        },
        {
          "label": "滦平县",
          "value": "130824"
        },
        {
          "label": "隆化县",
          "value": "130825"
        },
        {
          "label": "丰宁满族自治县",
          "value": "130826"
        },
        {
          "label": "宽城满族自治县",
          "value": "130827"
        },
        {
          "label": "围场满族蒙古族自治县",
          "value": "130828"
        },
        {
          "label": "承德高新技术产业开发区",
          "value": "130871"
        },
        {
          "label": "平泉市",
          "value": "130881"
        }
      ],
      [
        {
          "label": "新华区",
          "value": "130902"
        },
        {
          "label": "运河区",
          "value": "130903"
        },
        {
          "label": "沧县",
          "value": "130921"
        },
        {
          "label": "青县",
          "value": "130922"
        },
        {
          "label": "东光县",
          "value": "130923"
        },
        {
          "label": "海兴县",
          "value": "130924"
        },
        {
          "label": "盐山县",
          "value": "130925"
        },
        {
          "label": "肃宁县",
          "value": "130926"
        },
        {
          "label": "南皮县",
          "value": "130927"
        },
        {
          "label": "吴桥县",
          "value": "130928"
        },
        {
          "label": "献县",
          "value": "130929"
        },
        {
          "label": "孟村回族自治县",
          "value": "130930"
        },
        {
          "label": "河北沧州经济开发区",
          "value": "130971"
        },
        {
          "label": "沧州高新技术产业开发区",
          "value": "130972"
        },
        {
          "label": "沧州渤海新区",
          "value": "130973"
        },
        {
          "label": "泊头市",
          "value": "130981"
        },
        {
          "label": "任丘市",
          "value": "130982"
        },
        {
          "label": "黄骅市",
          "value": "130983"
        },
        {
          "label": "河间市",
          "value": "130984"
        }
      ],
      [
        {
          "label": "安次区",
          "value": "131002"
        },
        {
          "label": "广阳区",
          "value": "131003"
        },
        {
          "label": "固安县",
          "value": "131022"
        },
        {
          "label": "永清县",
          "value": "131023"
        },
        {
          "label": "香河县",
          "value": "131024"
        },
        {
          "label": "大城县",
          "value": "131025"
        },
        {
          "label": "文安县",
          "value": "131026"
        },
        {
          "label": "大厂回族自治县",
          "value": "131028"
        },
        {
          "label": "廊坊经济技术开发区",
          "value": "131071"
        },
        {
          "label": "霸州市",
          "value": "131081"
        },
        {
          "label": "三河市",
          "value": "131082"
        }
      ],
      [
        {
          "label": "桃城区",
          "value": "131102"
        },
        {
          "label": "冀州区",
          "value": "131103"
        },
        {
          "label": "枣强县",
          "value": "131121"
        },
        {
          "label": "武邑县",
          "value": "131122"
        },
        {
          "label": "武强县",
          "value": "131123"
        },
        {
          "label": "饶阳县",
          "value": "131124"
        },
        {
          "label": "安平县",
          "value": "131125"
        },
        {
          "label": "故城县",
          "value": "131126"
        },
        {
          "label": "景县",
          "value": "131127"
        },
        {
          "label": "阜城县",
          "value": "131128"
        },
        {
          "label": "河北衡水经济开发区",
          "value": "131171"
        },
        {
          "label": "衡水滨湖新区",
          "value": "131172"
        },
        {
          "label": "深州市",
          "value": "131182"
        }
      ]
    ],
    [
      [
        {
          "label": "小店区",
          "value": "140105"
        },
        {
          "label": "迎泽区",
          "value": "140106"
        },
        {
          "label": "杏花岭区",
          "value": "140107"
        },
        {
          "label": "尖草坪区",
          "value": "140108"
        },
        {
          "label": "万柏林区",
          "value": "140109"
        },
        {
          "label": "晋源区",
          "value": "140110"
        },
        {
          "label": "清徐县",
          "value": "140121"
        },
        {
          "label": "阳曲县",
          "value": "140122"
        },
        {
          "label": "娄烦县",
          "value": "140123"
        },
        {
          "label": "山西转型综合改革示范区",
          "value": "140171"
        },
        {
          "label": "古交市",
          "value": "140181"
        }
      ],
      [
        {
          "label": "城区",
          "value": "140202"
        },
        {
          "label": "矿区",
          "value": "140203"
        },
        {
          "label": "南郊区",
          "value": "140211"
        },
        {
          "label": "新荣区",
          "value": "140212"
        },
        {
          "label": "阳高县",
          "value": "140221"
        },
        {
          "label": "天镇县",
          "value": "140222"
        },
        {
          "label": "广灵县",
          "value": "140223"
        },
        {
          "label": "灵丘县",
          "value": "140224"
        },
        {
          "label": "浑源县",
          "value": "140225"
        },
        {
          "label": "左云县",
          "value": "140226"
        },
        {
          "label": "大同县",
          "value": "140227"
        },
        {
          "label": "山西大同经济开发区",
          "value": "140271"
        }
      ],
      [
        {
          "label": "城区",
          "value": "140302"
        },
        {
          "label": "矿区",
          "value": "140303"
        },
        {
          "label": "郊区",
          "value": "140311"
        },
        {
          "label": "平定县",
          "value": "140321"
        },
        {
          "label": "盂县",
          "value": "140322"
        },
        {
          "label": "山西阳泉经济开发区",
          "value": "140371"
        }
      ],
      [
        {
          "label": "城区",
          "value": "140402"
        },
        {
          "label": "郊区",
          "value": "140411"
        },
        {
          "label": "长治县",
          "value": "140421"
        },
        {
          "label": "襄垣县",
          "value": "140423"
        },
        {
          "label": "屯留县",
          "value": "140424"
        },
        {
          "label": "平顺县",
          "value": "140425"
        },
        {
          "label": "黎城县",
          "value": "140426"
        },
        {
          "label": "壶关县",
          "value": "140427"
        },
        {
          "label": "长子县",
          "value": "140428"
        },
        {
          "label": "武乡县",
          "value": "140429"
        },
        {
          "label": "沁县",
          "value": "140430"
        },
        {
          "label": "沁源县",
          "value": "140431"
        },
        {
          "label": "山西长治高新技术产业园区",
          "value": "140471"
        },
        {
          "label": "潞城市",
          "value": "140481"
        }
      ],
      [
        {
          "label": "城区",
          "value": "140502"
        },
        {
          "label": "沁水县",
          "value": "140521"
        },
        {
          "label": "阳城县",
          "value": "140522"
        },
        {
          "label": "陵川县",
          "value": "140524"
        },
        {
          "label": "泽州县",
          "value": "140525"
        },
        {
          "label": "高平市",
          "value": "140581"
        }
      ],
      [
        {
          "label": "朔城区",
          "value": "140602"
        },
        {
          "label": "平鲁区",
          "value": "140603"
        },
        {
          "label": "山阴县",
          "value": "140621"
        },
        {
          "label": "应县",
          "value": "140622"
        },
        {
          "label": "右玉县",
          "value": "140623"
        },
        {
          "label": "怀仁县",
          "value": "140624"
        },
        {
          "label": "山西朔州经济开发区",
          "value": "140671"
        }
      ],
      [
        {
          "label": "榆次区",
          "value": "140702"
        },
        {
          "label": "榆社县",
          "value": "140721"
        },
        {
          "label": "左权县",
          "value": "140722"
        },
        {
          "label": "和顺县",
          "value": "140723"
        },
        {
          "label": "昔阳县",
          "value": "140724"
        },
        {
          "label": "寿阳县",
          "value": "140725"
        },
        {
          "label": "太谷县",
          "value": "140726"
        },
        {
          "label": "祁县",
          "value": "140727"
        },
        {
          "label": "平遥县",
          "value": "140728"
        },
        {
          "label": "灵石县",
          "value": "140729"
        },
        {
          "label": "介休市",
          "value": "140781"
        }
      ],
      [
        {
          "label": "盐湖区",
          "value": "140802"
        },
        {
          "label": "临猗县",
          "value": "140821"
        },
        {
          "label": "万荣县",
          "value": "140822"
        },
        {
          "label": "闻喜县",
          "value": "140823"
        },
        {
          "label": "稷山县",
          "value": "140824"
        },
        {
          "label": "新绛县",
          "value": "140825"
        },
        {
          "label": "绛县",
          "value": "140826"
        },
        {
          "label": "垣曲县",
          "value": "140827"
        },
        {
          "label": "夏县",
          "value": "140828"
        },
        {
          "label": "平陆县",
          "value": "140829"
        },
        {
          "label": "芮城县",
          "value": "140830"
        },
        {
          "label": "永济市",
          "value": "140881"
        },
        {
          "label": "河津市",
          "value": "140882"
        }
      ],
      [
        {
          "label": "忻府区",
          "value": "140902"
        },
        {
          "label": "定襄县",
          "value": "140921"
        },
        {
          "label": "五台县",
          "value": "140922"
        },
        {
          "label": "代县",
          "value": "140923"
        },
        {
          "label": "繁峙县",
          "value": "140924"
        },
        {
          "label": "宁武县",
          "value": "140925"
        },
        {
          "label": "静乐县",
          "value": "140926"
        },
        {
          "label": "神池县",
          "value": "140927"
        },
        {
          "label": "五寨县",
          "value": "140928"
        },
        {
          "label": "岢岚县",
          "value": "140929"
        },
        {
          "label": "河曲县",
          "value": "140930"
        },
        {
          "label": "保德县",
          "value": "140931"
        },
        {
          "label": "偏关县",
          "value": "140932"
        },
        {
          "label": "五台山风景名胜区",
          "value": "140971"
        },
        {
          "label": "原平市",
          "value": "140981"
        }
      ],
      [
        {
          "label": "尧都区",
          "value": "141002"
        },
        {
          "label": "曲沃县",
          "value": "141021"
        },
        {
          "label": "翼城县",
          "value": "141022"
        },
        {
          "label": "襄汾县",
          "value": "141023"
        },
        {
          "label": "洪洞县",
          "value": "141024"
        },
        {
          "label": "古县",
          "value": "141025"
        },
        {
          "label": "安泽县",
          "value": "141026"
        },
        {
          "label": "浮山县",
          "value": "141027"
        },
        {
          "label": "吉县",
          "value": "141028"
        },
        {
          "label": "乡宁县",
          "value": "141029"
        },
        {
          "label": "大宁县",
          "value": "141030"
        },
        {
          "label": "隰县",
          "value": "141031"
        },
        {
          "label": "永和县",
          "value": "141032"
        },
        {
          "label": "蒲县",
          "value": "141033"
        },
        {
          "label": "汾西县",
          "value": "141034"
        },
        {
          "label": "侯马市",
          "value": "141081"
        },
        {
          "label": "霍州市",
          "value": "141082"
        }
      ],
      [
        {
          "label": "离石区",
          "value": "141102"
        },
        {
          "label": "文水县",
          "value": "141121"
        },
        {
          "label": "交城县",
          "value": "141122"
        },
        {
          "label": "兴县",
          "value": "141123"
        },
        {
          "label": "临县",
          "value": "141124"
        },
        {
          "label": "柳林县",
          "value": "141125"
        },
        {
          "label": "石楼县",
          "value": "141126"
        },
        {
          "label": "岚县",
          "value": "141127"
        },
        {
          "label": "方山县",
          "value": "141128"
        },
        {
          "label": "中阳县",
          "value": "141129"
        },
        {
          "label": "交口县",
          "value": "141130"
        },
        {
          "label": "孝义市",
          "value": "141181"
        },
        {
          "label": "汾阳市",
          "value": "141182"
        }
      ]
    ],
    [
      [
        {
          "label": "新城区",
          "value": "150102"
        },
        {
          "label": "回民区",
          "value": "150103"
        },
        {
          "label": "玉泉区",
          "value": "150104"
        },
        {
          "label": "赛罕区",
          "value": "150105"
        },
        {
          "label": "土默特左旗",
          "value": "150121"
        },
        {
          "label": "托克托县",
          "value": "150122"
        },
        {
          "label": "和林格尔县",
          "value": "150123"
        },
        {
          "label": "清水河县",
          "value": "150124"
        },
        {
          "label": "武川县",
          "value": "150125"
        },
        {
          "label": "呼和浩特金海工业园区",
          "value": "150171"
        },
        {
          "label": "呼和浩特经济技术开发区",
          "value": "150172"
        }
      ],
      [
        {
          "label": "东河区",
          "value": "150202"
        },
        {
          "label": "昆都仑区",
          "value": "150203"
        },
        {
          "label": "青山区",
          "value": "150204"
        },
        {
          "label": "石拐区",
          "value": "150205"
        },
        {
          "label": "白云鄂博矿区",
          "value": "150206"
        },
        {
          "label": "九原区",
          "value": "150207"
        },
        {
          "label": "土默特右旗",
          "value": "150221"
        },
        {
          "label": "固阳县",
          "value": "150222"
        },
        {
          "label": "达尔罕茂明安联合旗",
          "value": "150223"
        },
        {
          "label": "包头稀土高新技术产业开发区",
          "value": "150271"
        }
      ],
      [
        {
          "label": "海勃湾区",
          "value": "150302"
        },
        {
          "label": "海南区",
          "value": "150303"
        },
        {
          "label": "乌达区",
          "value": "150304"
        }
      ],
      [
        {
          "label": "红山区",
          "value": "150402"
        },
        {
          "label": "元宝山区",
          "value": "150403"
        },
        {
          "label": "松山区",
          "value": "150404"
        },
        {
          "label": "阿鲁科尔沁旗",
          "value": "150421"
        },
        {
          "label": "巴林左旗",
          "value": "150422"
        },
        {
          "label": "巴林右旗",
          "value": "150423"
        },
        {
          "label": "林西县",
          "value": "150424"
        },
        {
          "label": "克什克腾旗",
          "value": "150425"
        },
        {
          "label": "翁牛特旗",
          "value": "150426"
        },
        {
          "label": "喀喇沁旗",
          "value": "150428"
        },
        {
          "label": "宁城县",
          "value": "150429"
        },
        {
          "label": "敖汉旗",
          "value": "150430"
        }
      ],
      [
        {
          "label": "科尔沁区",
          "value": "150502"
        },
        {
          "label": "科尔沁左翼中旗",
          "value": "150521"
        },
        {
          "label": "科尔沁左翼后旗",
          "value": "150522"
        },
        {
          "label": "开鲁县",
          "value": "150523"
        },
        {
          "label": "库伦旗",
          "value": "150524"
        },
        {
          "label": "奈曼旗",
          "value": "150525"
        },
        {
          "label": "扎鲁特旗",
          "value": "150526"
        },
        {
          "label": "通辽经济技术开发区",
          "value": "150571"
        },
        {
          "label": "霍林郭勒市",
          "value": "150581"
        }
      ],
      [
        {
          "label": "东胜区",
          "value": "150602"
        },
        {
          "label": "康巴什区",
          "value": "150603"
        },
        {
          "label": "达拉特旗",
          "value": "150621"
        },
        {
          "label": "准格尔旗",
          "value": "150622"
        },
        {
          "label": "鄂托克前旗",
          "value": "150623"
        },
        {
          "label": "鄂托克旗",
          "value": "150624"
        },
        {
          "label": "杭锦旗",
          "value": "150625"
        },
        {
          "label": "乌审旗",
          "value": "150626"
        },
        {
          "label": "伊金霍洛旗",
          "value": "150627"
        }
      ],
      [
        {
          "label": "海拉尔区",
          "value": "150702"
        },
        {
          "label": "扎赉诺尔区",
          "value": "150703"
        },
        {
          "label": "阿荣旗",
          "value": "150721"
        },
        {
          "label": "莫力达瓦达斡尔族自治旗",
          "value": "150722"
        },
        {
          "label": "鄂伦春自治旗",
          "value": "150723"
        },
        {
          "label": "鄂温克族自治旗",
          "value": "150724"
        },
        {
          "label": "陈巴尔虎旗",
          "value": "150725"
        },
        {
          "label": "新巴尔虎左旗",
          "value": "150726"
        },
        {
          "label": "新巴尔虎右旗",
          "value": "150727"
        },
        {
          "label": "满洲里市",
          "value": "150781"
        },
        {
          "label": "牙克石市",
          "value": "150782"
        },
        {
          "label": "扎兰屯市",
          "value": "150783"
        },
        {
          "label": "额尔古纳市",
          "value": "150784"
        },
        {
          "label": "根河市",
          "value": "150785"
        }
      ],
      [
        {
          "label": "临河区",
          "value": "150802"
        },
        {
          "label": "五原县",
          "value": "150821"
        },
        {
          "label": "磴口县",
          "value": "150822"
        },
        {
          "label": "乌拉特前旗",
          "value": "150823"
        },
        {
          "label": "乌拉特中旗",
          "value": "150824"
        },
        {
          "label": "乌拉特后旗",
          "value": "150825"
        },
        {
          "label": "杭锦后旗",
          "value": "150826"
        }
      ],
      [
        {
          "label": "集宁区",
          "value": "150902"
        },
        {
          "label": "卓资县",
          "value": "150921"
        },
        {
          "label": "化德县",
          "value": "150922"
        },
        {
          "label": "商都县",
          "value": "150923"
        },
        {
          "label": "兴和县",
          "value": "150924"
        },
        {
          "label": "凉城县",
          "value": "150925"
        },
        {
          "label": "察哈尔右翼前旗",
          "value": "150926"
        },
        {
          "label": "察哈尔右翼中旗",
          "value": "150927"
        },
        {
          "label": "察哈尔右翼后旗",
          "value": "150928"
        },
        {
          "label": "四子王旗",
          "value": "150929"
        },
        {
          "label": "丰镇市",
          "value": "150981"
        }
      ],
      [
        {
          "label": "乌兰浩特市",
          "value": "152201"
        },
        {
          "label": "阿尔山市",
          "value": "152202"
        },
        {
          "label": "科尔沁右翼前旗",
          "value": "152221"
        },
        {
          "label": "科尔沁右翼中旗",
          "value": "152222"
        },
        {
          "label": "扎赉特旗",
          "value": "152223"
        },
        {
          "label": "突泉县",
          "value": "152224"
        }
      ],
      [
        {
          "label": "二连浩特市",
          "value": "152501"
        },
        {
          "label": "锡林浩特市",
          "value": "152502"
        },
        {
          "label": "阿巴嘎旗",
          "value": "152522"
        },
        {
          "label": "苏尼特左旗",
          "value": "152523"
        },
        {
          "label": "苏尼特右旗",
          "value": "152524"
        },
        {
          "label": "东乌珠穆沁旗",
          "value": "152525"
        },
        {
          "label": "西乌珠穆沁旗",
          "value": "152526"
        },
        {
          "label": "太仆寺旗",
          "value": "152527"
        },
        {
          "label": "镶黄旗",
          "value": "152528"
        },
        {
          "label": "正镶白旗",
          "value": "152529"
        },
        {
          "label": "正蓝旗",
          "value": "152530"
        },
        {
          "label": "多伦县",
          "value": "152531"
        },
        {
          "label": "乌拉盖管委会",
          "value": "152571"
        }
      ],
      [
        {
          "label": "阿拉善左旗",
          "value": "152921"
        },
        {
          "label": "阿拉善右旗",
          "value": "152922"
        },
        {
          "label": "额济纳旗",
          "value": "152923"
        },
        {
          "label": "内蒙古阿拉善经济开发区",
          "value": "152971"
        }
      ]
    ],
    [
      [
        {
          "label": "和平区",
          "value": "210102"
        },
        {
          "label": "沈河区",
          "value": "210103"
        },
        {
          "label": "大东区",
          "value": "210104"
        },
        {
          "label": "皇姑区",
          "value": "210105"
        },
        {
          "label": "铁西区",
          "value": "210106"
        },
        {
          "label": "苏家屯区",
          "value": "210111"
        },
        {
          "label": "浑南区",
          "value": "210112"
        },
        {
          "label": "沈北新区",
          "value": "210113"
        },
        {
          "label": "于洪区",
          "value": "210114"
        },
        {
          "label": "辽中区",
          "value": "210115"
        },
        {
          "label": "康平县",
          "value": "210123"
        },
        {
          "label": "法库县",
          "value": "210124"
        },
        {
          "label": "新民市",
          "value": "210181"
        }
      ],
      [
        {
          "label": "中山区",
          "value": "210202"
        },
        {
          "label": "西岗区",
          "value": "210203"
        },
        {
          "label": "沙河口区",
          "value": "210204"
        },
        {
          "label": "甘井子区",
          "value": "210211"
        },
        {
          "label": "旅顺口区",
          "value": "210212"
        },
        {
          "label": "金州区",
          "value": "210213"
        },
        {
          "label": "普兰店区",
          "value": "210214"
        },
        {
          "label": "长海县",
          "value": "210224"
        },
        {
          "label": "瓦房店市",
          "value": "210281"
        },
        {
          "label": "庄河市",
          "value": "210283"
        }
      ],
      [
        {
          "label": "铁东区",
          "value": "210302"
        },
        {
          "label": "铁西区",
          "value": "210303"
        },
        {
          "label": "立山区",
          "value": "210304"
        },
        {
          "label": "千山区",
          "value": "210311"
        },
        {
          "label": "台安县",
          "value": "210321"
        },
        {
          "label": "岫岩满族自治县",
          "value": "210323"
        },
        {
          "label": "海城市",
          "value": "210381"
        }
      ],
      [
        {
          "label": "新抚区",
          "value": "210402"
        },
        {
          "label": "东洲区",
          "value": "210403"
        },
        {
          "label": "望花区",
          "value": "210404"
        },
        {
          "label": "顺城区",
          "value": "210411"
        },
        {
          "label": "抚顺县",
          "value": "210421"
        },
        {
          "label": "新宾满族自治县",
          "value": "210422"
        },
        {
          "label": "清原满族自治县",
          "value": "210423"
        }
      ],
      [
        {
          "label": "平山区",
          "value": "210502"
        },
        {
          "label": "溪湖区",
          "value": "210503"
        },
        {
          "label": "明山区",
          "value": "210504"
        },
        {
          "label": "南芬区",
          "value": "210505"
        },
        {
          "label": "本溪满族自治县",
          "value": "210521"
        },
        {
          "label": "桓仁满族自治县",
          "value": "210522"
        }
      ],
      [
        {
          "label": "元宝区",
          "value": "210602"
        },
        {
          "label": "振兴区",
          "value": "210603"
        },
        {
          "label": "振安区",
          "value": "210604"
        },
        {
          "label": "宽甸满族自治县",
          "value": "210624"
        },
        {
          "label": "东港市",
          "value": "210681"
        },
        {
          "label": "凤城市",
          "value": "210682"
        }
      ],
      [
        {
          "label": "古塔区",
          "value": "210702"
        },
        {
          "label": "凌河区",
          "value": "210703"
        },
        {
          "label": "太和区",
          "value": "210711"
        },
        {
          "label": "黑山县",
          "value": "210726"
        },
        {
          "label": "义县",
          "value": "210727"
        },
        {
          "label": "凌海市",
          "value": "210781"
        },
        {
          "label": "北镇市",
          "value": "210782"
        }
      ],
      [
        {
          "label": "站前区",
          "value": "210802"
        },
        {
          "label": "西市区",
          "value": "210803"
        },
        {
          "label": "鲅鱼圈区",
          "value": "210804"
        },
        {
          "label": "老边区",
          "value": "210811"
        },
        {
          "label": "盖州市",
          "value": "210881"
        },
        {
          "label": "大石桥市",
          "value": "210882"
        }
      ],
      [
        {
          "label": "海州区",
          "value": "210902"
        },
        {
          "label": "新邱区",
          "value": "210903"
        },
        {
          "label": "太平区",
          "value": "210904"
        },
        {
          "label": "清河门区",
          "value": "210905"
        },
        {
          "label": "细河区",
          "value": "210911"
        },
        {
          "label": "阜新蒙古族自治县",
          "value": "210921"
        },
        {
          "label": "彰武县",
          "value": "210922"
        }
      ],
      [
        {
          "label": "白塔区",
          "value": "211002"
        },
        {
          "label": "文圣区",
          "value": "211003"
        },
        {
          "label": "宏伟区",
          "value": "211004"
        },
        {
          "label": "弓长岭区",
          "value": "211005"
        },
        {
          "label": "太子河区",
          "value": "211011"
        },
        {
          "label": "辽阳县",
          "value": "211021"
        },
        {
          "label": "灯塔市",
          "value": "211081"
        }
      ],
      [
        {
          "label": "双台子区",
          "value": "211102"
        },
        {
          "label": "兴隆台区",
          "value": "211103"
        },
        {
          "label": "大洼区",
          "value": "211104"
        },
        {
          "label": "盘山县",
          "value": "211122"
        }
      ],
      [
        {
          "label": "银州区",
          "value": "211202"
        },
        {
          "label": "清河区",
          "value": "211204"
        },
        {
          "label": "铁岭县",
          "value": "211221"
        },
        {
          "label": "西丰县",
          "value": "211223"
        },
        {
          "label": "昌图县",
          "value": "211224"
        },
        {
          "label": "调兵山市",
          "value": "211281"
        },
        {
          "label": "开原市",
          "value": "211282"
        }
      ],
      [
        {
          "label": "双塔区",
          "value": "211302"
        },
        {
          "label": "龙城区",
          "value": "211303"
        },
        {
          "label": "朝阳县",
          "value": "211321"
        },
        {
          "label": "建平县",
          "value": "211322"
        },
        {
          "label": "喀喇沁左翼蒙古族自治县",
          "value": "211324"
        },
        {
          "label": "北票市",
          "value": "211381"
        },
        {
          "label": "凌源市",
          "value": "211382"
        }
      ],
      [
        {
          "label": "连山区",
          "value": "211402"
        },
        {
          "label": "龙港区",
          "value": "211403"
        },
        {
          "label": "南票区",
          "value": "211404"
        },
        {
          "label": "绥中县",
          "value": "211421"
        },
        {
          "label": "建昌县",
          "value": "211422"
        },
        {
          "label": "兴城市",
          "value": "211481"
        }
      ]
    ],
    [
      [
        {
          "label": "南关区",
          "value": "220102"
        },
        {
          "label": "宽城区",
          "value": "220103"
        },
        {
          "label": "朝阳区",
          "value": "220104"
        },
        {
          "label": "二道区",
          "value": "220105"
        },
        {
          "label": "绿园区",
          "value": "220106"
        },
        {
          "label": "双阳区",
          "value": "220112"
        },
        {
          "label": "九台区",
          "value": "220113"
        },
        {
          "label": "农安县",
          "value": "220122"
        },
        {
          "label": "长春经济技术开发区",
          "value": "220171"
        },
        {
          "label": "长春净月高新技术产业开发区",
          "value": "220172"
        },
        {
          "label": "长春高新技术产业开发区",
          "value": "220173"
        },
        {
          "label": "长春汽车经济技术开发区",
          "value": "220174"
        },
        {
          "label": "榆树市",
          "value": "220182"
        },
        {
          "label": "德惠市",
          "value": "220183"
        }
      ],
      [
        {
          "label": "昌邑区",
          "value": "220202"
        },
        {
          "label": "龙潭区",
          "value": "220203"
        },
        {
          "label": "船营区",
          "value": "220204"
        },
        {
          "label": "丰满区",
          "value": "220211"
        },
        {
          "label": "永吉县",
          "value": "220221"
        },
        {
          "label": "吉林经济开发区",
          "value": "220271"
        },
        {
          "label": "吉林高新技术产业开发区",
          "value": "220272"
        },
        {
          "label": "吉林中国新加坡食品区",
          "value": "220273"
        },
        {
          "label": "蛟河市",
          "value": "220281"
        },
        {
          "label": "桦甸市",
          "value": "220282"
        },
        {
          "label": "舒兰市",
          "value": "220283"
        },
        {
          "label": "磐石市",
          "value": "220284"
        }
      ],
      [
        {
          "label": "铁西区",
          "value": "220302"
        },
        {
          "label": "铁东区",
          "value": "220303"
        },
        {
          "label": "梨树县",
          "value": "220322"
        },
        {
          "label": "伊通满族自治县",
          "value": "220323"
        },
        {
          "label": "公主岭市",
          "value": "220381"
        },
        {
          "label": "双辽市",
          "value": "220382"
        }
      ],
      [
        {
          "label": "龙山区",
          "value": "220402"
        },
        {
          "label": "西安区",
          "value": "220403"
        },
        {
          "label": "东丰县",
          "value": "220421"
        },
        {
          "label": "东辽县",
          "value": "220422"
        }
      ],
      [
        {
          "label": "东昌区",
          "value": "220502"
        },
        {
          "label": "二道江区",
          "value": "220503"
        },
        {
          "label": "通化县",
          "value": "220521"
        },
        {
          "label": "辉南县",
          "value": "220523"
        },
        {
          "label": "柳河县",
          "value": "220524"
        },
        {
          "label": "梅河口市",
          "value": "220581"
        },
        {
          "label": "集安市",
          "value": "220582"
        }
      ],
      [
        {
          "label": "浑江区",
          "value": "220602"
        },
        {
          "label": "江源区",
          "value": "220605"
        },
        {
          "label": "抚松县",
          "value": "220621"
        },
        {
          "label": "靖宇县",
          "value": "220622"
        },
        {
          "label": "长白朝鲜族自治县",
          "value": "220623"
        },
        {
          "label": "临江市",
          "value": "220681"
        }
      ],
      [
        {
          "label": "宁江区",
          "value": "220702"
        },
        {
          "label": "前郭尔罗斯蒙古族自治县",
          "value": "220721"
        },
        {
          "label": "长岭县",
          "value": "220722"
        },
        {
          "label": "乾安县",
          "value": "220723"
        },
        {
          "label": "吉林松原经济开发区",
          "value": "220771"
        },
        {
          "label": "扶余市",
          "value": "220781"
        }
      ],
      [
        {
          "label": "洮北区",
          "value": "220802"
        },
        {
          "label": "镇赉县",
          "value": "220821"
        },
        {
          "label": "通榆县",
          "value": "220822"
        },
        {
          "label": "吉林白城经济开发区",
          "value": "220871"
        },
        {
          "label": "洮南市",
          "value": "220881"
        },
        {
          "label": "大安市",
          "value": "220882"
        }
      ],
      [
        {
          "label": "延吉市",
          "value": "222401"
        },
        {
          "label": "图们市",
          "value": "222402"
        },
        {
          "label": "敦化市",
          "value": "222403"
        },
        {
          "label": "珲春市",
          "value": "222404"
        },
        {
          "label": "龙井市",
          "value": "222405"
        },
        {
          "label": "和龙市",
          "value": "222406"
        },
        {
          "label": "汪清县",
          "value": "222424"
        },
        {
          "label": "安图县",
          "value": "222426"
        }
      ]
    ],
    [
      [
        {
          "label": "道里区",
          "value": "230102"
        },
        {
          "label": "南岗区",
          "value": "230103"
        },
        {
          "label": "道外区",
          "value": "230104"
        },
        {
          "label": "平房区",
          "value": "230108"
        },
        {
          "label": "松北区",
          "value": "230109"
        },
        {
          "label": "香坊区",
          "value": "230110"
        },
        {
          "label": "呼兰区",
          "value": "230111"
        },
        {
          "label": "阿城区",
          "value": "230112"
        },
        {
          "label": "双城区",
          "value": "230113"
        },
        {
          "label": "依兰县",
          "value": "230123"
        },
        {
          "label": "方正县",
          "value": "230124"
        },
        {
          "label": "宾县",
          "value": "230125"
        },
        {
          "label": "巴彦县",
          "value": "230126"
        },
        {
          "label": "木兰县",
          "value": "230127"
        },
        {
          "label": "通河县",
          "value": "230128"
        },
        {
          "label": "延寿县",
          "value": "230129"
        },
        {
          "label": "尚志市",
          "value": "230183"
        },
        {
          "label": "五常市",
          "value": "230184"
        }
      ],
      [
        {
          "label": "龙沙区",
          "value": "230202"
        },
        {
          "label": "建华区",
          "value": "230203"
        },
        {
          "label": "铁锋区",
          "value": "230204"
        },
        {
          "label": "昂昂溪区",
          "value": "230205"
        },
        {
          "label": "富拉尔基区",
          "value": "230206"
        },
        {
          "label": "碾子山区",
          "value": "230207"
        },
        {
          "label": "梅里斯达斡尔族区",
          "value": "230208"
        },
        {
          "label": "龙江县",
          "value": "230221"
        },
        {
          "label": "依安县",
          "value": "230223"
        },
        {
          "label": "泰来县",
          "value": "230224"
        },
        {
          "label": "甘南县",
          "value": "230225"
        },
        {
          "label": "富裕县",
          "value": "230227"
        },
        {
          "label": "克山县",
          "value": "230229"
        },
        {
          "label": "克东县",
          "value": "230230"
        },
        {
          "label": "拜泉县",
          "value": "230231"
        },
        {
          "label": "讷河市",
          "value": "230281"
        }
      ],
      [
        {
          "label": "鸡冠区",
          "value": "230302"
        },
        {
          "label": "恒山区",
          "value": "230303"
        },
        {
          "label": "滴道区",
          "value": "230304"
        },
        {
          "label": "梨树区",
          "value": "230305"
        },
        {
          "label": "城子河区",
          "value": "230306"
        },
        {
          "label": "麻山区",
          "value": "230307"
        },
        {
          "label": "鸡东县",
          "value": "230321"
        },
        {
          "label": "虎林市",
          "value": "230381"
        },
        {
          "label": "密山市",
          "value": "230382"
        }
      ],
      [
        {
          "label": "向阳区",
          "value": "230402"
        },
        {
          "label": "工农区",
          "value": "230403"
        },
        {
          "label": "南山区",
          "value": "230404"
        },
        {
          "label": "兴安区",
          "value": "230405"
        },
        {
          "label": "东山区",
          "value": "230406"
        },
        {
          "label": "兴山区",
          "value": "230407"
        },
        {
          "label": "萝北县",
          "value": "230421"
        },
        {
          "label": "绥滨县",
          "value": "230422"
        }
      ],
      [
        {
          "label": "尖山区",
          "value": "230502"
        },
        {
          "label": "岭东区",
          "value": "230503"
        },
        {
          "label": "四方台区",
          "value": "230505"
        },
        {
          "label": "宝山区",
          "value": "230506"
        },
        {
          "label": "集贤县",
          "value": "230521"
        },
        {
          "label": "友谊县",
          "value": "230522"
        },
        {
          "label": "宝清县",
          "value": "230523"
        },
        {
          "label": "饶河县",
          "value": "230524"
        }
      ],
      [
        {
          "label": "萨尔图区",
          "value": "230602"
        },
        {
          "label": "龙凤区",
          "value": "230603"
        },
        {
          "label": "让胡路区",
          "value": "230604"
        },
        {
          "label": "红岗区",
          "value": "230605"
        },
        {
          "label": "大同区",
          "value": "230606"
        },
        {
          "label": "肇州县",
          "value": "230621"
        },
        {
          "label": "肇源县",
          "value": "230622"
        },
        {
          "label": "林甸县",
          "value": "230623"
        },
        {
          "label": "杜尔伯特蒙古族自治县",
          "value": "230624"
        },
        {
          "label": "大庆高新技术产业开发区",
          "value": "230671"
        }
      ],
      [
        {
          "label": "伊春区",
          "value": "230702"
        },
        {
          "label": "南岔区",
          "value": "230703"
        },
        {
          "label": "友好区",
          "value": "230704"
        },
        {
          "label": "西林区",
          "value": "230705"
        },
        {
          "label": "翠峦区",
          "value": "230706"
        },
        {
          "label": "新青区",
          "value": "230707"
        },
        {
          "label": "美溪区",
          "value": "230708"
        },
        {
          "label": "金山屯区",
          "value": "230709"
        },
        {
          "label": "五营区",
          "value": "230710"
        },
        {
          "label": "乌马河区",
          "value": "230711"
        },
        {
          "label": "汤旺河区",
          "value": "230712"
        },
        {
          "label": "带岭区",
          "value": "230713"
        },
        {
          "label": "乌伊岭区",
          "value": "230714"
        },
        {
          "label": "红星区",
          "value": "230715"
        },
        {
          "label": "上甘岭区",
          "value": "230716"
        },
        {
          "label": "嘉荫县",
          "value": "230722"
        },
        {
          "label": "铁力市",
          "value": "230781"
        }
      ],
      [
        {
          "label": "向阳区",
          "value": "230803"
        },
        {
          "label": "前进区",
          "value": "230804"
        },
        {
          "label": "东风区",
          "value": "230805"
        },
        {
          "label": "郊区",
          "value": "230811"
        },
        {
          "label": "桦南县",
          "value": "230822"
        },
        {
          "label": "桦川县",
          "value": "230826"
        },
        {
          "label": "汤原县",
          "value": "230828"
        },
        {
          "label": "同江市",
          "value": "230881"
        },
        {
          "label": "富锦市",
          "value": "230882"
        },
        {
          "label": "抚远市",
          "value": "230883"
        }
      ],
      [
        {
          "label": "新兴区",
          "value": "230902"
        },
        {
          "label": "桃山区",
          "value": "230903"
        },
        {
          "label": "茄子河区",
          "value": "230904"
        },
        {
          "label": "勃利县",
          "value": "230921"
        }
      ],
      [
        {
          "label": "东安区",
          "value": "231002"
        },
        {
          "label": "阳明区",
          "value": "231003"
        },
        {
          "label": "爱民区",
          "value": "231004"
        },
        {
          "label": "西安区",
          "value": "231005"
        },
        {
          "label": "林口县",
          "value": "231025"
        },
        {
          "label": "牡丹江经济技术开发区",
          "value": "231071"
        },
        {
          "label": "绥芬河市",
          "value": "231081"
        },
        {
          "label": "海林市",
          "value": "231083"
        },
        {
          "label": "宁安市",
          "value": "231084"
        },
        {
          "label": "穆棱市",
          "value": "231085"
        },
        {
          "label": "东宁市",
          "value": "231086"
        }
      ],
      [
        {
          "label": "爱辉区",
          "value": "231102"
        },
        {
          "label": "嫩江县",
          "value": "231121"
        },
        {
          "label": "逊克县",
          "value": "231123"
        },
        {
          "label": "孙吴县",
          "value": "231124"
        },
        {
          "label": "北安市",
          "value": "231181"
        },
        {
          "label": "五大连池市",
          "value": "231182"
        }
      ],
      [
        {
          "label": "北林区",
          "value": "231202"
        },
        {
          "label": "望奎县",
          "value": "231221"
        },
        {
          "label": "兰西县",
          "value": "231222"
        },
        {
          "label": "青冈县",
          "value": "231223"
        },
        {
          "label": "庆安县",
          "value": "231224"
        },
        {
          "label": "明水县",
          "value": "231225"
        },
        {
          "label": "绥棱县",
          "value": "231226"
        },
        {
          "label": "安达市",
          "value": "231281"
        },
        {
          "label": "肇东市",
          "value": "231282"
        },
        {
          "label": "海伦市",
          "value": "231283"
        }
      ],
      [
        {
          "label": "加格达奇区",
          "value": "232701"
        },
        {
          "label": "松岭区",
          "value": "232702"
        },
        {
          "label": "新林区",
          "value": "232703"
        },
        {
          "label": "呼中区",
          "value": "232704"
        },
        {
          "label": "呼玛县",
          "value": "232721"
        },
        {
          "label": "塔河县",
          "value": "232722"
        },
        {
          "label": "漠河县",
          "value": "232723"
        }
      ]
    ],
    [
      [
        {
          "label": "黄浦区",
          "value": "310101"
        },
        {
          "label": "徐汇区",
          "value": "310104"
        },
        {
          "label": "长宁区",
          "value": "310105"
        },
        {
          "label": "静安区",
          "value": "310106"
        },
        {
          "label": "普陀区",
          "value": "310107"
        },
        {
          "label": "虹口区",
          "value": "310109"
        },
        {
          "label": "杨浦区",
          "value": "310110"
        },
        {
          "label": "闵行区",
          "value": "310112"
        },
        {
          "label": "宝山区",
          "value": "310113"
        },
        {
          "label": "嘉定区",
          "value": "310114"
        },
        {
          "label": "浦东新区",
          "value": "310115"
        },
        {
          "label": "金山区",
          "value": "310116"
        },
        {
          "label": "松江区",
          "value": "310117"
        },
        {
          "label": "青浦区",
          "value": "310118"
        },
        {
          "label": "奉贤区",
          "value": "310120"
        },
        {
          "label": "崇明区",
          "value": "310151"
        }
      ]
    ],
    [
      [
        {
          "label": "玄武区",
          "value": "320102"
        },
        {
          "label": "秦淮区",
          "value": "320104"
        },
        {
          "label": "建邺区",
          "value": "320105"
        },
        {
          "label": "鼓楼区",
          "value": "320106"
        },
        {
          "label": "浦口区",
          "value": "320111"
        },
        {
          "label": "栖霞区",
          "value": "320113"
        },
        {
          "label": "雨花台区",
          "value": "320114"
        },
        {
          "label": "江宁区",
          "value": "320115"
        },
        {
          "label": "六合区",
          "value": "320116"
        },
        {
          "label": "溧水区",
          "value": "320117"
        },
        {
          "label": "高淳区",
          "value": "320118"
        }
      ],
      [
        {
          "label": "锡山区",
          "value": "320205"
        },
        {
          "label": "惠山区",
          "value": "320206"
        },
        {
          "label": "滨湖区",
          "value": "320211"
        },
        {
          "label": "梁溪区",
          "value": "320213"
        },
        {
          "label": "新吴区",
          "value": "320214"
        },
        {
          "label": "江阴市",
          "value": "320281"
        },
        {
          "label": "宜兴市",
          "value": "320282"
        }
      ],
      [
        {
          "label": "鼓楼区",
          "value": "320302"
        },
        {
          "label": "云龙区",
          "value": "320303"
        },
        {
          "label": "贾汪区",
          "value": "320305"
        },
        {
          "label": "泉山区",
          "value": "320311"
        },
        {
          "label": "铜山区",
          "value": "320312"
        },
        {
          "label": "丰县",
          "value": "320321"
        },
        {
          "label": "沛县",
          "value": "320322"
        },
        {
          "label": "睢宁县",
          "value": "320324"
        },
        {
          "label": "徐州经济技术开发区",
          "value": "320371"
        },
        {
          "label": "新沂市",
          "value": "320381"
        },
        {
          "label": "邳州市",
          "value": "320382"
        }
      ],
      [
        {
          "label": "天宁区",
          "value": "320402"
        },
        {
          "label": "钟楼区",
          "value": "320404"
        },
        {
          "label": "新北区",
          "value": "320411"
        },
        {
          "label": "武进区",
          "value": "320412"
        },
        {
          "label": "金坛区",
          "value": "320413"
        },
        {
          "label": "溧阳市",
          "value": "320481"
        }
      ],
      [
        {
          "label": "虎丘区",
          "value": "320505"
        },
        {
          "label": "吴中区",
          "value": "320506"
        },
        {
          "label": "相城区",
          "value": "320507"
        },
        {
          "label": "姑苏区",
          "value": "320508"
        },
        {
          "label": "吴江区",
          "value": "320509"
        },
        {
          "label": "苏州工业园区",
          "value": "320571"
        },
        {
          "label": "常熟市",
          "value": "320581"
        },
        {
          "label": "张家港市",
          "value": "320582"
        },
        {
          "label": "昆山市",
          "value": "320583"
        },
        {
          "label": "太仓市",
          "value": "320585"
        }
      ],
      [
        {
          "label": "崇川区",
          "value": "320602"
        },
        {
          "label": "港闸区",
          "value": "320611"
        },
        {
          "label": "通州区",
          "value": "320612"
        },
        {
          "label": "海安县",
          "value": "320621"
        },
        {
          "label": "如东县",
          "value": "320623"
        },
        {
          "label": "南通经济技术开发区",
          "value": "320671"
        },
        {
          "label": "启东市",
          "value": "320681"
        },
        {
          "label": "如皋市",
          "value": "320682"
        },
        {
          "label": "海门市",
          "value": "320684"
        }
      ],
      [
        {
          "label": "连云区",
          "value": "320703"
        },
        {
          "label": "海州区",
          "value": "320706"
        },
        {
          "label": "赣榆区",
          "value": "320707"
        },
        {
          "label": "东海县",
          "value": "320722"
        },
        {
          "label": "灌云县",
          "value": "320723"
        },
        {
          "label": "灌南县",
          "value": "320724"
        },
        {
          "label": "连云港经济技术开发区",
          "value": "320771"
        },
        {
          "label": "连云港高新技术产业开发区",
          "value": "320772"
        }
      ],
      [
        {
          "label": "淮安区",
          "value": "320803"
        },
        {
          "label": "淮阴区",
          "value": "320804"
        },
        {
          "label": "清江浦区",
          "value": "320812"
        },
        {
          "label": "洪泽区",
          "value": "320813"
        },
        {
          "label": "涟水县",
          "value": "320826"
        },
        {
          "label": "盱眙县",
          "value": "320830"
        },
        {
          "label": "金湖县",
          "value": "320831"
        },
        {
          "label": "淮安经济技术开发区",
          "value": "320871"
        }
      ],
      [
        {
          "label": "亭湖区",
          "value": "320902"
        },
        {
          "label": "盐都区",
          "value": "320903"
        },
        {
          "label": "大丰区",
          "value": "320904"
        },
        {
          "label": "响水县",
          "value": "320921"
        },
        {
          "label": "滨海县",
          "value": "320922"
        },
        {
          "label": "阜宁县",
          "value": "320923"
        },
        {
          "label": "射阳县",
          "value": "320924"
        },
        {
          "label": "建湖县",
          "value": "320925"
        },
        {
          "label": "盐城经济技术开发区",
          "value": "320971"
        },
        {
          "label": "东台市",
          "value": "320981"
        }
      ],
      [
        {
          "label": "广陵区",
          "value": "321002"
        },
        {
          "label": "邗江区",
          "value": "321003"
        },
        {
          "label": "江都区",
          "value": "321012"
        },
        {
          "label": "宝应县",
          "value": "321023"
        },
        {
          "label": "扬州经济技术开发区",
          "value": "321071"
        },
        {
          "label": "仪征市",
          "value": "321081"
        },
        {
          "label": "高邮市",
          "value": "321084"
        }
      ],
      [
        {
          "label": "京口区",
          "value": "321102"
        },
        {
          "label": "润州区",
          "value": "321111"
        },
        {
          "label": "丹徒区",
          "value": "321112"
        },
        {
          "label": "镇江新区",
          "value": "321171"
        },
        {
          "label": "丹阳市",
          "value": "321181"
        },
        {
          "label": "扬中市",
          "value": "321182"
        },
        {
          "label": "句容市",
          "value": "321183"
        }
      ],
      [
        {
          "label": "海陵区",
          "value": "321202"
        },
        {
          "label": "高港区",
          "value": "321203"
        },
        {
          "label": "姜堰区",
          "value": "321204"
        },
        {
          "label": "泰州医药高新技术产业开发区",
          "value": "321271"
        },
        {
          "label": "兴化市",
          "value": "321281"
        },
        {
          "label": "靖江市",
          "value": "321282"
        },
        {
          "label": "泰兴市",
          "value": "321283"
        }
      ],
      [
        {
          "label": "宿城区",
          "value": "321302"
        },
        {
          "label": "宿豫区",
          "value": "321311"
        },
        {
          "label": "沭阳县",
          "value": "321322"
        },
        {
          "label": "泗阳县",
          "value": "321323"
        },
        {
          "label": "泗洪县",
          "value": "321324"
        },
        {
          "label": "宿迁经济技术开发区",
          "value": "321371"
        }
      ]
    ],
    [
      [
        {
          "label": "上城区",
          "value": "330102"
        },
        {
          "label": "下城区",
          "value": "330103"
        },
        {
          "label": "江干区",
          "value": "330104"
        },
        {
          "label": "拱墅区",
          "value": "330105"
        },
        {
          "label": "西湖区",
          "value": "330106"
        },
        {
          "label": "滨江区",
          "value": "330108"
        },
        {
          "label": "萧山区",
          "value": "330109"
        },
        {
          "label": "余杭区",
          "value": "330110"
        },
        {
          "label": "富阳区",
          "value": "330111"
        },
        {
          "label": "临安区",
          "value": "330112"
        },
        {
          "label": "桐庐县",
          "value": "330122"
        },
        {
          "label": "淳安县",
          "value": "330127"
        },
        {
          "label": "建德市",
          "value": "330182"
        }
      ],
      [
        {
          "label": "海曙区",
          "value": "330203"
        },
        {
          "label": "江北区",
          "value": "330205"
        },
        {
          "label": "北仑区",
          "value": "330206"
        },
        {
          "label": "镇海区",
          "value": "330211"
        },
        {
          "label": "鄞州区",
          "value": "330212"
        },
        {
          "label": "奉化区",
          "value": "330213"
        },
        {
          "label": "象山县",
          "value": "330225"
        },
        {
          "label": "宁海县",
          "value": "330226"
        },
        {
          "label": "余姚市",
          "value": "330281"
        },
        {
          "label": "慈溪市",
          "value": "330282"
        }
      ],
      [
        {
          "label": "鹿城区",
          "value": "330302"
        },
        {
          "label": "龙湾区",
          "value": "330303"
        },
        {
          "label": "瓯海区",
          "value": "330304"
        },
        {
          "label": "洞头区",
          "value": "330305"
        },
        {
          "label": "永嘉县",
          "value": "330324"
        },
        {
          "label": "平阳县",
          "value": "330326"
        },
        {
          "label": "苍南县",
          "value": "330327"
        },
        {
          "label": "文成县",
          "value": "330328"
        },
        {
          "label": "泰顺县",
          "value": "330329"
        },
        {
          "label": "温州经济技术开发区",
          "value": "330371"
        },
        {
          "label": "瑞安市",
          "value": "330381"
        },
        {
          "label": "乐清市",
          "value": "330382"
        }
      ],
      [
        {
          "label": "南湖区",
          "value": "330402"
        },
        {
          "label": "秀洲区",
          "value": "330411"
        },
        {
          "label": "嘉善县",
          "value": "330421"
        },
        {
          "label": "海盐县",
          "value": "330424"
        },
        {
          "label": "海宁市",
          "value": "330481"
        },
        {
          "label": "平湖市",
          "value": "330482"
        },
        {
          "label": "桐乡市",
          "value": "330483"
        }
      ],
      [
        {
          "label": "吴兴区",
          "value": "330502"
        },
        {
          "label": "南浔区",
          "value": "330503"
        },
        {
          "label": "德清县",
          "value": "330521"
        },
        {
          "label": "长兴县",
          "value": "330522"
        },
        {
          "label": "安吉县",
          "value": "330523"
        }
      ],
      [
        {
          "label": "越城区",
          "value": "330602"
        },
        {
          "label": "柯桥区",
          "value": "330603"
        },
        {
          "label": "上虞区",
          "value": "330604"
        },
        {
          "label": "新昌县",
          "value": "330624"
        },
        {
          "label": "诸暨市",
          "value": "330681"
        },
        {
          "label": "嵊州市",
          "value": "330683"
        }
      ],
      [
        {
          "label": "婺城区",
          "value": "330702"
        },
        {
          "label": "金东区",
          "value": "330703"
        },
        {
          "label": "武义县",
          "value": "330723"
        },
        {
          "label": "浦江县",
          "value": "330726"
        },
        {
          "label": "磐安县",
          "value": "330727"
        },
        {
          "label": "兰溪市",
          "value": "330781"
        },
        {
          "label": "义乌市",
          "value": "330782"
        },
        {
          "label": "东阳市",
          "value": "330783"
        },
        {
          "label": "永康市",
          "value": "330784"
        }
      ],
      [
        {
          "label": "柯城区",
          "value": "330802"
        },
        {
          "label": "衢江区",
          "value": "330803"
        },
        {
          "label": "常山县",
          "value": "330822"
        },
        {
          "label": "开化县",
          "value": "330824"
        },
        {
          "label": "龙游县",
          "value": "330825"
        },
        {
          "label": "江山市",
          "value": "330881"
        }
      ],
      [
        {
          "label": "定海区",
          "value": "330902"
        },
        {
          "label": "普陀区",
          "value": "330903"
        },
        {
          "label": "岱山县",
          "value": "330921"
        },
        {
          "label": "嵊泗县",
          "value": "330922"
        }
      ],
      [
        {
          "label": "椒江区",
          "value": "331002"
        },
        {
          "label": "黄岩区",
          "value": "331003"
        },
        {
          "label": "路桥区",
          "value": "331004"
        },
        {
          "label": "三门县",
          "value": "331022"
        },
        {
          "label": "天台县",
          "value": "331023"
        },
        {
          "label": "仙居县",
          "value": "331024"
        },
        {
          "label": "温岭市",
          "value": "331081"
        },
        {
          "label": "临海市",
          "value": "331082"
        },
        {
          "label": "玉环市",
          "value": "331083"
        }
      ],
      [
        {
          "label": "莲都区",
          "value": "331102"
        },
        {
          "label": "青田县",
          "value": "331121"
        },
        {
          "label": "缙云县",
          "value": "331122"
        },
        {
          "label": "遂昌县",
          "value": "331123"
        },
        {
          "label": "松阳县",
          "value": "331124"
        },
        {
          "label": "云和县",
          "value": "331125"
        },
        {
          "label": "庆元县",
          "value": "331126"
        },
        {
          "label": "景宁畲族自治县",
          "value": "331127"
        },
        {
          "label": "龙泉市",
          "value": "331181"
        }
      ]
    ],
    [
      [
        {
          "label": "瑶海区",
          "value": "340102"
        },
        {
          "label": "庐阳区",
          "value": "340103"
        },
        {
          "label": "蜀山区",
          "value": "340104"
        },
        {
          "label": "包河区",
          "value": "340111"
        },
        {
          "label": "长丰县",
          "value": "340121"
        },
        {
          "label": "肥东县",
          "value": "340122"
        },
        {
          "label": "肥西县",
          "value": "340123"
        },
        {
          "label": "庐江县",
          "value": "340124"
        },
        {
          "label": "合肥高新技术产业开发区",
          "value": "340171"
        },
        {
          "label": "合肥经济技术开发区",
          "value": "340172"
        },
        {
          "label": "合肥新站高新技术产业开发区",
          "value": "340173"
        },
        {
          "label": "巢湖市",
          "value": "340181"
        }
      ],
      [
        {
          "label": "镜湖区",
          "value": "340202"
        },
        {
          "label": "弋江区",
          "value": "340203"
        },
        {
          "label": "鸠江区",
          "value": "340207"
        },
        {
          "label": "三山区",
          "value": "340208"
        },
        {
          "label": "芜湖县",
          "value": "340221"
        },
        {
          "label": "繁昌县",
          "value": "340222"
        },
        {
          "label": "南陵县",
          "value": "340223"
        },
        {
          "label": "无为县",
          "value": "340225"
        },
        {
          "label": "芜湖经济技术开发区",
          "value": "340271"
        },
        {
          "label": "安徽芜湖长江大桥经济开发区",
          "value": "340272"
        }
      ],
      [
        {
          "label": "龙子湖区",
          "value": "340302"
        },
        {
          "label": "蚌山区",
          "value": "340303"
        },
        {
          "label": "禹会区",
          "value": "340304"
        },
        {
          "label": "淮上区",
          "value": "340311"
        },
        {
          "label": "怀远县",
          "value": "340321"
        },
        {
          "label": "五河县",
          "value": "340322"
        },
        {
          "label": "固镇县",
          "value": "340323"
        },
        {
          "label": "蚌埠市高新技术开发区",
          "value": "340371"
        },
        {
          "label": "蚌埠市经济开发区",
          "value": "340372"
        }
      ],
      [
        {
          "label": "大通区",
          "value": "340402"
        },
        {
          "label": "田家庵区",
          "value": "340403"
        },
        {
          "label": "谢家集区",
          "value": "340404"
        },
        {
          "label": "八公山区",
          "value": "340405"
        },
        {
          "label": "潘集区",
          "value": "340406"
        },
        {
          "label": "凤台县",
          "value": "340421"
        },
        {
          "label": "寿县",
          "value": "340422"
        }
      ],
      [
        {
          "label": "花山区",
          "value": "340503"
        },
        {
          "label": "雨山区",
          "value": "340504"
        },
        {
          "label": "博望区",
          "value": "340506"
        },
        {
          "label": "当涂县",
          "value": "340521"
        },
        {
          "label": "含山县",
          "value": "340522"
        },
        {
          "label": "和县",
          "value": "340523"
        }
      ],
      [
        {
          "label": "杜集区",
          "value": "340602"
        },
        {
          "label": "相山区",
          "value": "340603"
        },
        {
          "label": "烈山区",
          "value": "340604"
        },
        {
          "label": "濉溪县",
          "value": "340621"
        }
      ],
      [
        {
          "label": "铜官区",
          "value": "340705"
        },
        {
          "label": "义安区",
          "value": "340706"
        },
        {
          "label": "郊区",
          "value": "340711"
        },
        {
          "label": "枞阳县",
          "value": "340722"
        }
      ],
      [
        {
          "label": "迎江区",
          "value": "340802"
        },
        {
          "label": "大观区",
          "value": "340803"
        },
        {
          "label": "宜秀区",
          "value": "340811"
        },
        {
          "label": "怀宁县",
          "value": "340822"
        },
        {
          "label": "潜山县",
          "value": "340824"
        },
        {
          "label": "太湖县",
          "value": "340825"
        },
        {
          "label": "宿松县",
          "value": "340826"
        },
        {
          "label": "望江县",
          "value": "340827"
        },
        {
          "label": "岳西县",
          "value": "340828"
        },
        {
          "label": "安徽安庆经济开发区",
          "value": "340871"
        },
        {
          "label": "桐城市",
          "value": "340881"
        }
      ],
      [
        {
          "label": "屯溪区",
          "value": "341002"
        },
        {
          "label": "黄山区",
          "value": "341003"
        },
        {
          "label": "徽州区",
          "value": "341004"
        },
        {
          "label": "歙县",
          "value": "341021"
        },
        {
          "label": "休宁县",
          "value": "341022"
        },
        {
          "label": "黟县",
          "value": "341023"
        },
        {
          "label": "祁门县",
          "value": "341024"
        }
      ],
      [
        {
          "label": "琅琊区",
          "value": "341102"
        },
        {
          "label": "南谯区",
          "value": "341103"
        },
        {
          "label": "来安县",
          "value": "341122"
        },
        {
          "label": "全椒县",
          "value": "341124"
        },
        {
          "label": "定远县",
          "value": "341125"
        },
        {
          "label": "凤阳县",
          "value": "341126"
        },
        {
          "label": "苏滁现代产业园",
          "value": "341171"
        },
        {
          "label": "滁州经济技术开发区",
          "value": "341172"
        },
        {
          "label": "天长市",
          "value": "341181"
        },
        {
          "label": "明光市",
          "value": "341182"
        }
      ],
      [
        {
          "label": "颍州区",
          "value": "341202"
        },
        {
          "label": "颍东区",
          "value": "341203"
        },
        {
          "label": "颍泉区",
          "value": "341204"
        },
        {
          "label": "临泉县",
          "value": "341221"
        },
        {
          "label": "太和县",
          "value": "341222"
        },
        {
          "label": "阜南县",
          "value": "341225"
        },
        {
          "label": "颍上县",
          "value": "341226"
        },
        {
          "label": "阜阳合肥现代产业园区",
          "value": "341271"
        },
        {
          "label": "阜阳经济技术开发区",
          "value": "341272"
        },
        {
          "label": "界首市",
          "value": "341282"
        }
      ],
      [
        {
          "label": "埇桥区",
          "value": "341302"
        },
        {
          "label": "砀山县",
          "value": "341321"
        },
        {
          "label": "萧县",
          "value": "341322"
        },
        {
          "label": "灵璧县",
          "value": "341323"
        },
        {
          "label": "泗县",
          "value": "341324"
        },
        {
          "label": "宿州马鞍山现代产业园区",
          "value": "341371"
        },
        {
          "label": "宿州经济技术开发区",
          "value": "341372"
        }
      ],
      [
        {
          "label": "金安区",
          "value": "341502"
        },
        {
          "label": "裕安区",
          "value": "341503"
        },
        {
          "label": "叶集区",
          "value": "341504"
        },
        {
          "label": "霍邱县",
          "value": "341522"
        },
        {
          "label": "舒城县",
          "value": "341523"
        },
        {
          "label": "金寨县",
          "value": "341524"
        },
        {
          "label": "霍山县",
          "value": "341525"
        }
      ],
      [
        {
          "label": "谯城区",
          "value": "341602"
        },
        {
          "label": "涡阳县",
          "value": "341621"
        },
        {
          "label": "蒙城县",
          "value": "341622"
        },
        {
          "label": "利辛县",
          "value": "341623"
        }
      ],
      [
        {
          "label": "贵池区",
          "value": "341702"
        },
        {
          "label": "东至县",
          "value": "341721"
        },
        {
          "label": "石台县",
          "value": "341722"
        },
        {
          "label": "青阳县",
          "value": "341723"
        }
      ],
      [
        {
          "label": "宣州区",
          "value": "341802"
        },
        {
          "label": "郎溪县",
          "value": "341821"
        },
        {
          "label": "广德县",
          "value": "341822"
        },
        {
          "label": "泾县",
          "value": "341823"
        },
        {
          "label": "绩溪县",
          "value": "341824"
        },
        {
          "label": "旌德县",
          "value": "341825"
        },
        {
          "label": "宣城市经济开发区",
          "value": "341871"
        },
        {
          "label": "宁国市",
          "value": "341881"
        }
      ]
    ],
    [
      [
        {
          "label": "鼓楼区",
          "value": "350102"
        },
        {
          "label": "台江区",
          "value": "350103"
        },
        {
          "label": "仓山区",
          "value": "350104"
        },
        {
          "label": "马尾区",
          "value": "350105"
        },
        {
          "label": "晋安区",
          "value": "350111"
        },
        {
          "label": "闽侯县",
          "value": "350121"
        },
        {
          "label": "连江县",
          "value": "350122"
        },
        {
          "label": "罗源县",
          "value": "350123"
        },
        {
          "label": "闽清县",
          "value": "350124"
        },
        {
          "label": "永泰县",
          "value": "350125"
        },
        {
          "label": "平潭县",
          "value": "350128"
        },
        {
          "label": "福清市",
          "value": "350181"
        },
        {
          "label": "长乐市",
          "value": "350182"
        }
      ],
      [
        {
          "label": "思明区",
          "value": "350203"
        },
        {
          "label": "海沧区",
          "value": "350205"
        },
        {
          "label": "湖里区",
          "value": "350206"
        },
        {
          "label": "集美区",
          "value": "350211"
        },
        {
          "label": "同安区",
          "value": "350212"
        },
        {
          "label": "翔安区",
          "value": "350213"
        }
      ],
      [
        {
          "label": "城厢区",
          "value": "350302"
        },
        {
          "label": "涵江区",
          "value": "350303"
        },
        {
          "label": "荔城区",
          "value": "350304"
        },
        {
          "label": "秀屿区",
          "value": "350305"
        },
        {
          "label": "仙游县",
          "value": "350322"
        }
      ],
      [
        {
          "label": "梅列区",
          "value": "350402"
        },
        {
          "label": "三元区",
          "value": "350403"
        },
        {
          "label": "明溪县",
          "value": "350421"
        },
        {
          "label": "清流县",
          "value": "350423"
        },
        {
          "label": "宁化县",
          "value": "350424"
        },
        {
          "label": "大田县",
          "value": "350425"
        },
        {
          "label": "尤溪县",
          "value": "350426"
        },
        {
          "label": "沙县",
          "value": "350427"
        },
        {
          "label": "将乐县",
          "value": "350428"
        },
        {
          "label": "泰宁县",
          "value": "350429"
        },
        {
          "label": "建宁县",
          "value": "350430"
        },
        {
          "label": "永安市",
          "value": "350481"
        }
      ],
      [
        {
          "label": "鲤城区",
          "value": "350502"
        },
        {
          "label": "丰泽区",
          "value": "350503"
        },
        {
          "label": "洛江区",
          "value": "350504"
        },
        {
          "label": "泉港区",
          "value": "350505"
        },
        {
          "label": "惠安县",
          "value": "350521"
        },
        {
          "label": "安溪县",
          "value": "350524"
        },
        {
          "label": "永春县",
          "value": "350525"
        },
        {
          "label": "德化县",
          "value": "350526"
        },
        {
          "label": "金门县",
          "value": "350527"
        },
        {
          "label": "石狮市",
          "value": "350581"
        },
        {
          "label": "晋江市",
          "value": "350582"
        },
        {
          "label": "南安市",
          "value": "350583"
        }
      ],
      [
        {
          "label": "芗城区",
          "value": "350602"
        },
        {
          "label": "龙文区",
          "value": "350603"
        },
        {
          "label": "云霄县",
          "value": "350622"
        },
        {
          "label": "漳浦县",
          "value": "350623"
        },
        {
          "label": "诏安县",
          "value": "350624"
        },
        {
          "label": "长泰县",
          "value": "350625"
        },
        {
          "label": "东山县",
          "value": "350626"
        },
        {
          "label": "南靖县",
          "value": "350627"
        },
        {
          "label": "平和县",
          "value": "350628"
        },
        {
          "label": "华安县",
          "value": "350629"
        },
        {
          "label": "龙海市",
          "value": "350681"
        }
      ],
      [
        {
          "label": "延平区",
          "value": "350702"
        },
        {
          "label": "建阳区",
          "value": "350703"
        },
        {
          "label": "顺昌县",
          "value": "350721"
        },
        {
          "label": "浦城县",
          "value": "350722"
        },
        {
          "label": "光泽县",
          "value": "350723"
        },
        {
          "label": "松溪县",
          "value": "350724"
        },
        {
          "label": "政和县",
          "value": "350725"
        },
        {
          "label": "邵武市",
          "value": "350781"
        },
        {
          "label": "武夷山市",
          "value": "350782"
        },
        {
          "label": "建瓯市",
          "value": "350783"
        }
      ],
      [
        {
          "label": "新罗区",
          "value": "350802"
        },
        {
          "label": "永定区",
          "value": "350803"
        },
        {
          "label": "长汀县",
          "value": "350821"
        },
        {
          "label": "上杭县",
          "value": "350823"
        },
        {
          "label": "武平县",
          "value": "350824"
        },
        {
          "label": "连城县",
          "value": "350825"
        },
        {
          "label": "漳平市",
          "value": "350881"
        }
      ],
      [
        {
          "label": "蕉城区",
          "value": "350902"
        },
        {
          "label": "霞浦县",
          "value": "350921"
        },
        {
          "label": "古田县",
          "value": "350922"
        },
        {
          "label": "屏南县",
          "value": "350923"
        },
        {
          "label": "寿宁县",
          "value": "350924"
        },
        {
          "label": "周宁县",
          "value": "350925"
        },
        {
          "label": "柘荣县",
          "value": "350926"
        },
        {
          "label": "福安市",
          "value": "350981"
        },
        {
          "label": "福鼎市",
          "value": "350982"
        }
      ]
    ],
    [
      [
        {
          "label": "东湖区",
          "value": "360102"
        },
        {
          "label": "西湖区",
          "value": "360103"
        },
        {
          "label": "青云谱区",
          "value": "360104"
        },
        {
          "label": "湾里区",
          "value": "360105"
        },
        {
          "label": "青山湖区",
          "value": "360111"
        },
        {
          "label": "新建区",
          "value": "360112"
        },
        {
          "label": "南昌县",
          "value": "360121"
        },
        {
          "label": "安义县",
          "value": "360123"
        },
        {
          "label": "进贤县",
          "value": "360124"
        }
      ],
      [
        {
          "label": "昌江区",
          "value": "360202"
        },
        {
          "label": "珠山区",
          "value": "360203"
        },
        {
          "label": "浮梁县",
          "value": "360222"
        },
        {
          "label": "乐平市",
          "value": "360281"
        }
      ],
      [
        {
          "label": "安源区",
          "value": "360302"
        },
        {
          "label": "湘东区",
          "value": "360313"
        },
        {
          "label": "莲花县",
          "value": "360321"
        },
        {
          "label": "上栗县",
          "value": "360322"
        },
        {
          "label": "芦溪县",
          "value": "360323"
        }
      ],
      [
        {
          "label": "濂溪区",
          "value": "360402"
        },
        {
          "label": "浔阳区",
          "value": "360403"
        },
        {
          "label": "柴桑区",
          "value": "360404"
        },
        {
          "label": "武宁县",
          "value": "360423"
        },
        {
          "label": "修水县",
          "value": "360424"
        },
        {
          "label": "永修县",
          "value": "360425"
        },
        {
          "label": "德安县",
          "value": "360426"
        },
        {
          "label": "都昌县",
          "value": "360428"
        },
        {
          "label": "湖口县",
          "value": "360429"
        },
        {
          "label": "彭泽县",
          "value": "360430"
        },
        {
          "label": "瑞昌市",
          "value": "360481"
        },
        {
          "label": "共青城市",
          "value": "360482"
        },
        {
          "label": "庐山市",
          "value": "360483"
        }
      ],
      [
        {
          "label": "渝水区",
          "value": "360502"
        },
        {
          "label": "分宜县",
          "value": "360521"
        }
      ],
      [
        {
          "label": "月湖区",
          "value": "360602"
        },
        {
          "label": "余江县",
          "value": "360622"
        },
        {
          "label": "贵溪市",
          "value": "360681"
        }
      ],
      [
        {
          "label": "章贡区",
          "value": "360702"
        },
        {
          "label": "南康区",
          "value": "360703"
        },
        {
          "label": "赣县区",
          "value": "360704"
        },
        {
          "label": "信丰县",
          "value": "360722"
        },
        {
          "label": "大余县",
          "value": "360723"
        },
        {
          "label": "上犹县",
          "value": "360724"
        },
        {
          "label": "崇义县",
          "value": "360725"
        },
        {
          "label": "安远县",
          "value": "360726"
        },
        {
          "label": "龙南县",
          "value": "360727"
        },
        {
          "label": "定南县",
          "value": "360728"
        },
        {
          "label": "全南县",
          "value": "360729"
        },
        {
          "label": "宁都县",
          "value": "360730"
        },
        {
          "label": "于都县",
          "value": "360731"
        },
        {
          "label": "兴国县",
          "value": "360732"
        },
        {
          "label": "会昌县",
          "value": "360733"
        },
        {
          "label": "寻乌县",
          "value": "360734"
        },
        {
          "label": "石城县",
          "value": "360735"
        },
        {
          "label": "瑞金市",
          "value": "360781"
        }
      ],
      [
        {
          "label": "吉州区",
          "value": "360802"
        },
        {
          "label": "青原区",
          "value": "360803"
        },
        {
          "label": "吉安县",
          "value": "360821"
        },
        {
          "label": "吉水县",
          "value": "360822"
        },
        {
          "label": "峡江县",
          "value": "360823"
        },
        {
          "label": "新干县",
          "value": "360824"
        },
        {
          "label": "永丰县",
          "value": "360825"
        },
        {
          "label": "泰和县",
          "value": "360826"
        },
        {
          "label": "遂川县",
          "value": "360827"
        },
        {
          "label": "万安县",
          "value": "360828"
        },
        {
          "label": "安福县",
          "value": "360829"
        },
        {
          "label": "永新县",
          "value": "360830"
        },
        {
          "label": "井冈山市",
          "value": "360881"
        }
      ],
      [
        {
          "label": "袁州区",
          "value": "360902"
        },
        {
          "label": "奉新县",
          "value": "360921"
        },
        {
          "label": "万载县",
          "value": "360922"
        },
        {
          "label": "上高县",
          "value": "360923"
        },
        {
          "label": "宜丰县",
          "value": "360924"
        },
        {
          "label": "靖安县",
          "value": "360925"
        },
        {
          "label": "铜鼓县",
          "value": "360926"
        },
        {
          "label": "丰城市",
          "value": "360981"
        },
        {
          "label": "樟树市",
          "value": "360982"
        },
        {
          "label": "高安市",
          "value": "360983"
        }
      ],
      [
        {
          "label": "临川区",
          "value": "361002"
        },
        {
          "label": "东乡区",
          "value": "361003"
        },
        {
          "label": "南城县",
          "value": "361021"
        },
        {
          "label": "黎川县",
          "value": "361022"
        },
        {
          "label": "南丰县",
          "value": "361023"
        },
        {
          "label": "崇仁县",
          "value": "361024"
        },
        {
          "label": "乐安县",
          "value": "361025"
        },
        {
          "label": "宜黄县",
          "value": "361026"
        },
        {
          "label": "金溪县",
          "value": "361027"
        },
        {
          "label": "资溪县",
          "value": "361028"
        },
        {
          "label": "广昌县",
          "value": "361030"
        }
      ],
      [
        {
          "label": "信州区",
          "value": "361102"
        },
        {
          "label": "广丰区",
          "value": "361103"
        },
        {
          "label": "上饶县",
          "value": "361121"
        },
        {
          "label": "玉山县",
          "value": "361123"
        },
        {
          "label": "铅山县",
          "value": "361124"
        },
        {
          "label": "横峰县",
          "value": "361125"
        },
        {
          "label": "弋阳县",
          "value": "361126"
        },
        {
          "label": "余干县",
          "value": "361127"
        },
        {
          "label": "鄱阳县",
          "value": "361128"
        },
        {
          "label": "万年县",
          "value": "361129"
        },
        {
          "label": "婺源县",
          "value": "361130"
        },
        {
          "label": "德兴市",
          "value": "361181"
        }
      ]
    ],
    [
      [
        {
          "label": "历下区",
          "value": "370102"
        },
        {
          "label": "市中区",
          "value": "370103"
        },
        {
          "label": "槐荫区",
          "value": "370104"
        },
        {
          "label": "天桥区",
          "value": "370105"
        },
        {
          "label": "历城区",
          "value": "370112"
        },
        {
          "label": "长清区",
          "value": "370113"
        },
        {
          "label": "章丘区",
          "value": "370114"
        },
        {
          "label": "平阴县",
          "value": "370124"
        },
        {
          "label": "济阳县",
          "value": "370125"
        },
        {
          "label": "商河县",
          "value": "370126"
        },
        {
          "label": "济南高新技术产业开发区",
          "value": "370171"
        }
      ],
      [
        {
          "label": "市南区",
          "value": "370202"
        },
        {
          "label": "市北区",
          "value": "370203"
        },
        {
          "label": "黄岛区",
          "value": "370211"
        },
        {
          "label": "崂山区",
          "value": "370212"
        },
        {
          "label": "李沧区",
          "value": "370213"
        },
        {
          "label": "城阳区",
          "value": "370214"
        },
        {
          "label": "即墨区",
          "value": "370215"
        },
        {
          "label": "青岛高新技术产业开发区",
          "value": "370271"
        },
        {
          "label": "胶州市",
          "value": "370281"
        },
        {
          "label": "平度市",
          "value": "370283"
        },
        {
          "label": "莱西市",
          "value": "370285"
        }
      ],
      [
        {
          "label": "淄川区",
          "value": "370302"
        },
        {
          "label": "张店区",
          "value": "370303"
        },
        {
          "label": "博山区",
          "value": "370304"
        },
        {
          "label": "临淄区",
          "value": "370305"
        },
        {
          "label": "周村区",
          "value": "370306"
        },
        {
          "label": "桓台县",
          "value": "370321"
        },
        {
          "label": "高青县",
          "value": "370322"
        },
        {
          "label": "沂源县",
          "value": "370323"
        }
      ],
      [
        {
          "label": "市中区",
          "value": "370402"
        },
        {
          "label": "薛城区",
          "value": "370403"
        },
        {
          "label": "峄城区",
          "value": "370404"
        },
        {
          "label": "台儿庄区",
          "value": "370405"
        },
        {
          "label": "山亭区",
          "value": "370406"
        },
        {
          "label": "滕州市",
          "value": "370481"
        }
      ],
      [
        {
          "label": "东营区",
          "value": "370502"
        },
        {
          "label": "河口区",
          "value": "370503"
        },
        {
          "label": "垦利区",
          "value": "370505"
        },
        {
          "label": "利津县",
          "value": "370522"
        },
        {
          "label": "广饶县",
          "value": "370523"
        },
        {
          "label": "东营经济技术开发区",
          "value": "370571"
        },
        {
          "label": "东营港经济开发区",
          "value": "370572"
        }
      ],
      [
        {
          "label": "芝罘区",
          "value": "370602"
        },
        {
          "label": "福山区",
          "value": "370611"
        },
        {
          "label": "牟平区",
          "value": "370612"
        },
        {
          "label": "莱山区",
          "value": "370613"
        },
        {
          "label": "长岛县",
          "value": "370634"
        },
        {
          "label": "烟台高新技术产业开发区",
          "value": "370671"
        },
        {
          "label": "烟台经济技术开发区",
          "value": "370672"
        },
        {
          "label": "龙口市",
          "value": "370681"
        },
        {
          "label": "莱阳市",
          "value": "370682"
        },
        {
          "label": "莱州市",
          "value": "370683"
        },
        {
          "label": "蓬莱市",
          "value": "370684"
        },
        {
          "label": "招远市",
          "value": "370685"
        },
        {
          "label": "栖霞市",
          "value": "370686"
        },
        {
          "label": "海阳市",
          "value": "370687"
        }
      ],
      [
        {
          "label": "潍城区",
          "value": "370702"
        },
        {
          "label": "寒亭区",
          "value": "370703"
        },
        {
          "label": "坊子区",
          "value": "370704"
        },
        {
          "label": "奎文区",
          "value": "370705"
        },
        {
          "label": "临朐县",
          "value": "370724"
        },
        {
          "label": "昌乐县",
          "value": "370725"
        },
        {
          "label": "潍坊滨海经济技术开发区",
          "value": "370772"
        },
        {
          "label": "青州市",
          "value": "370781"
        },
        {
          "label": "诸城市",
          "value": "370782"
        },
        {
          "label": "寿光市",
          "value": "370783"
        },
        {
          "label": "安丘市",
          "value": "370784"
        },
        {
          "label": "高密市",
          "value": "370785"
        },
        {
          "label": "昌邑市",
          "value": "370786"
        }
      ],
      [
        {
          "label": "任城区",
          "value": "370811"
        },
        {
          "label": "兖州区",
          "value": "370812"
        },
        {
          "label": "微山县",
          "value": "370826"
        },
        {
          "label": "鱼台县",
          "value": "370827"
        },
        {
          "label": "金乡县",
          "value": "370828"
        },
        {
          "label": "嘉祥县",
          "value": "370829"
        },
        {
          "label": "汶上县",
          "value": "370830"
        },
        {
          "label": "泗水县",
          "value": "370831"
        },
        {
          "label": "梁山县",
          "value": "370832"
        },
        {
          "label": "济宁高新技术产业开发区",
          "value": "370871"
        },
        {
          "label": "曲阜市",
          "value": "370881"
        },
        {
          "label": "邹城市",
          "value": "370883"
        }
      ],
      [
        {
          "label": "泰山区",
          "value": "370902"
        },
        {
          "label": "岱岳区",
          "value": "370911"
        },
        {
          "label": "宁阳县",
          "value": "370921"
        },
        {
          "label": "东平县",
          "value": "370923"
        },
        {
          "label": "新泰市",
          "value": "370982"
        },
        {
          "label": "肥城市",
          "value": "370983"
        }
      ],
      [
        {
          "label": "环翠区",
          "value": "371002"
        },
        {
          "label": "文登区",
          "value": "371003"
        },
        {
          "label": "威海火炬高技术产业开发区",
          "value": "371071"
        },
        {
          "label": "威海经济技术开发区",
          "value": "371072"
        },
        {
          "label": "威海临港经济技术开发区",
          "value": "371073"
        },
        {
          "label": "荣成市",
          "value": "371082"
        },
        {
          "label": "乳山市",
          "value": "371083"
        }
      ],
      [
        {
          "label": "东港区",
          "value": "371102"
        },
        {
          "label": "岚山区",
          "value": "371103"
        },
        {
          "label": "五莲县",
          "value": "371121"
        },
        {
          "label": "莒县",
          "value": "371122"
        },
        {
          "label": "日照经济技术开发区",
          "value": "371171"
        },
        {
          "label": "日照国际海洋城",
          "value": "371172"
        }
      ],
      [
        {
          "label": "莱城区",
          "value": "371202"
        },
        {
          "label": "钢城区",
          "value": "371203"
        }
      ],
      [
        {
          "label": "兰山区",
          "value": "371302"
        },
        {
          "label": "罗庄区",
          "value": "371311"
        },
        {
          "label": "河东区",
          "value": "371312"
        },
        {
          "label": "沂南县",
          "value": "371321"
        },
        {
          "label": "郯城县",
          "value": "371322"
        },
        {
          "label": "沂水县",
          "value": "371323"
        },
        {
          "label": "兰陵县",
          "value": "371324"
        },
        {
          "label": "费县",
          "value": "371325"
        },
        {
          "label": "平邑县",
          "value": "371326"
        },
        {
          "label": "莒南县",
          "value": "371327"
        },
        {
          "label": "蒙阴县",
          "value": "371328"
        },
        {
          "label": "临沭县",
          "value": "371329"
        },
        {
          "label": "临沂高新技术产业开发区",
          "value": "371371"
        },
        {
          "label": "临沂经济技术开发区",
          "value": "371372"
        },
        {
          "label": "临沂临港经济开发区",
          "value": "371373"
        }
      ],
      [
        {
          "label": "德城区",
          "value": "371402"
        },
        {
          "label": "陵城区",
          "value": "371403"
        },
        {
          "label": "宁津县",
          "value": "371422"
        },
        {
          "label": "庆云县",
          "value": "371423"
        },
        {
          "label": "临邑县",
          "value": "371424"
        },
        {
          "label": "齐河县",
          "value": "371425"
        },
        {
          "label": "平原县",
          "value": "371426"
        },
        {
          "label": "夏津县",
          "value": "371427"
        },
        {
          "label": "武城县",
          "value": "371428"
        },
        {
          "label": "德州经济技术开发区",
          "value": "371471"
        },
        {
          "label": "德州运河经济开发区",
          "value": "371472"
        },
        {
          "label": "乐陵市",
          "value": "371481"
        },
        {
          "label": "禹城市",
          "value": "371482"
        }
      ],
      [
        {
          "label": "东昌府区",
          "value": "371502"
        },
        {
          "label": "阳谷县",
          "value": "371521"
        },
        {
          "label": "莘县",
          "value": "371522"
        },
        {
          "label": "茌平县",
          "value": "371523"
        },
        {
          "label": "东阿县",
          "value": "371524"
        },
        {
          "label": "冠县",
          "value": "371525"
        },
        {
          "label": "高唐县",
          "value": "371526"
        },
        {
          "label": "临清市",
          "value": "371581"
        }
      ],
      [
        {
          "label": "滨城区",
          "value": "371602"
        },
        {
          "label": "沾化区",
          "value": "371603"
        },
        {
          "label": "惠民县",
          "value": "371621"
        },
        {
          "label": "阳信县",
          "value": "371622"
        },
        {
          "label": "无棣县",
          "value": "371623"
        },
        {
          "label": "博兴县",
          "value": "371625"
        },
        {
          "label": "邹平县",
          "value": "371626"
        }
      ],
      [
        {
          "label": "牡丹区",
          "value": "371702"
        },
        {
          "label": "定陶区",
          "value": "371703"
        },
        {
          "label": "曹县",
          "value": "371721"
        },
        {
          "label": "单县",
          "value": "371722"
        },
        {
          "label": "成武县",
          "value": "371723"
        },
        {
          "label": "巨野县",
          "value": "371724"
        },
        {
          "label": "郓城县",
          "value": "371725"
        },
        {
          "label": "鄄城县",
          "value": "371726"
        },
        {
          "label": "东明县",
          "value": "371728"
        },
        {
          "label": "菏泽经济技术开发区",
          "value": "371771"
        },
        {
          "label": "菏泽高新技术开发区",
          "value": "371772"
        }
      ]
    ],
    [
      [
        {
          "label": "中原区",
          "value": "410102"
        },
        {
          "label": "二七区",
          "value": "410103"
        },
        {
          "label": "管城回族区",
          "value": "410104"
        },
        {
          "label": "金水区",
          "value": "410105"
        },
        {
          "label": "上街区",
          "value": "410106"
        },
        {
          "label": "惠济区",
          "value": "410108"
        },
        {
          "label": "中牟县",
          "value": "410122"
        },
        {
          "label": "郑州经济技术开发区",
          "value": "410171"
        },
        {
          "label": "郑州高新技术产业开发区",
          "value": "410172"
        },
        {
          "label": "郑州航空港经济综合实验区",
          "value": "410173"
        },
        {
          "label": "巩义市",
          "value": "410181"
        },
        {
          "label": "荥阳市",
          "value": "410182"
        },
        {
          "label": "新密市",
          "value": "410183"
        },
        {
          "label": "新郑市",
          "value": "410184"
        },
        {
          "label": "登封市",
          "value": "410185"
        }
      ],
      [
        {
          "label": "龙亭区",
          "value": "410202"
        },
        {
          "label": "顺河回族区",
          "value": "410203"
        },
        {
          "label": "鼓楼区",
          "value": "410204"
        },
        {
          "label": "禹王台区",
          "value": "410205"
        },
        {
          "label": "祥符区",
          "value": "410212"
        },
        {
          "label": "杞县",
          "value": "410221"
        },
        {
          "label": "通许县",
          "value": "410222"
        },
        {
          "label": "尉氏县",
          "value": "410223"
        },
        {
          "label": "兰考县",
          "value": "410225"
        }
      ],
      [
        {
          "label": "老城区",
          "value": "410302"
        },
        {
          "label": "西工区",
          "value": "410303"
        },
        {
          "label": "瀍河回族区",
          "value": "410304"
        },
        {
          "label": "涧西区",
          "value": "410305"
        },
        {
          "label": "吉利区",
          "value": "410306"
        },
        {
          "label": "洛龙区",
          "value": "410311"
        },
        {
          "label": "孟津县",
          "value": "410322"
        },
        {
          "label": "新安县",
          "value": "410323"
        },
        {
          "label": "栾川县",
          "value": "410324"
        },
        {
          "label": "嵩县",
          "value": "410325"
        },
        {
          "label": "汝阳县",
          "value": "410326"
        },
        {
          "label": "宜阳县",
          "value": "410327"
        },
        {
          "label": "洛宁县",
          "value": "410328"
        },
        {
          "label": "伊川县",
          "value": "410329"
        },
        {
          "label": "洛阳高新技术产业开发区",
          "value": "410371"
        },
        {
          "label": "偃师市",
          "value": "410381"
        }
      ],
      [
        {
          "label": "新华区",
          "value": "410402"
        },
        {
          "label": "卫东区",
          "value": "410403"
        },
        {
          "label": "石龙区",
          "value": "410404"
        },
        {
          "label": "湛河区",
          "value": "410411"
        },
        {
          "label": "宝丰县",
          "value": "410421"
        },
        {
          "label": "叶县",
          "value": "410422"
        },
        {
          "label": "鲁山县",
          "value": "410423"
        },
        {
          "label": "郏县",
          "value": "410425"
        },
        {
          "label": "平顶山高新技术产业开发区",
          "value": "410471"
        },
        {
          "label": "平顶山市新城区",
          "value": "410472"
        },
        {
          "label": "舞钢市",
          "value": "410481"
        },
        {
          "label": "汝州市",
          "value": "410482"
        }
      ],
      [
        {
          "label": "文峰区",
          "value": "410502"
        },
        {
          "label": "北关区",
          "value": "410503"
        },
        {
          "label": "殷都区",
          "value": "410505"
        },
        {
          "label": "龙安区",
          "value": "410506"
        },
        {
          "label": "安阳县",
          "value": "410522"
        },
        {
          "label": "汤阴县",
          "value": "410523"
        },
        {
          "label": "滑县",
          "value": "410526"
        },
        {
          "label": "内黄县",
          "value": "410527"
        },
        {
          "label": "安阳高新技术产业开发区",
          "value": "410571"
        },
        {
          "label": "林州市",
          "value": "410581"
        }
      ],
      [
        {
          "label": "鹤山区",
          "value": "410602"
        },
        {
          "label": "山城区",
          "value": "410603"
        },
        {
          "label": "淇滨区",
          "value": "410611"
        },
        {
          "label": "浚县",
          "value": "410621"
        },
        {
          "label": "淇县",
          "value": "410622"
        },
        {
          "label": "鹤壁经济技术开发区",
          "value": "410671"
        }
      ],
      [
        {
          "label": "红旗区",
          "value": "410702"
        },
        {
          "label": "卫滨区",
          "value": "410703"
        },
        {
          "label": "凤泉区",
          "value": "410704"
        },
        {
          "label": "牧野区",
          "value": "410711"
        },
        {
          "label": "新乡县",
          "value": "410721"
        },
        {
          "label": "获嘉县",
          "value": "410724"
        },
        {
          "label": "原阳县",
          "value": "410725"
        },
        {
          "label": "延津县",
          "value": "410726"
        },
        {
          "label": "封丘县",
          "value": "410727"
        },
        {
          "label": "长垣县",
          "value": "410728"
        },
        {
          "label": "新乡高新技术产业开发区",
          "value": "410771"
        },
        {
          "label": "新乡经济技术开发区",
          "value": "410772"
        },
        {
          "label": "新乡市平原城乡一体化示范区",
          "value": "410773"
        },
        {
          "label": "卫辉市",
          "value": "410781"
        },
        {
          "label": "辉县市",
          "value": "410782"
        }
      ],
      [
        {
          "label": "解放区",
          "value": "410802"
        },
        {
          "label": "中站区",
          "value": "410803"
        },
        {
          "label": "马村区",
          "value": "410804"
        },
        {
          "label": "山阳区",
          "value": "410811"
        },
        {
          "label": "修武县",
          "value": "410821"
        },
        {
          "label": "博爱县",
          "value": "410822"
        },
        {
          "label": "武陟县",
          "value": "410823"
        },
        {
          "label": "温县",
          "value": "410825"
        },
        {
          "label": "焦作城乡一体化示范区",
          "value": "410871"
        },
        {
          "label": "沁阳市",
          "value": "410882"
        },
        {
          "label": "孟州市",
          "value": "410883"
        }
      ],
      [
        {
          "label": "华龙区",
          "value": "410902"
        },
        {
          "label": "清丰县",
          "value": "410922"
        },
        {
          "label": "南乐县",
          "value": "410923"
        },
        {
          "label": "范县",
          "value": "410926"
        },
        {
          "label": "台前县",
          "value": "410927"
        },
        {
          "label": "濮阳县",
          "value": "410928"
        },
        {
          "label": "河南濮阳工业园区",
          "value": "410971"
        },
        {
          "label": "濮阳经济技术开发区",
          "value": "410972"
        }
      ],
      [
        {
          "label": "魏都区",
          "value": "411002"
        },
        {
          "label": "建安区",
          "value": "411003"
        },
        {
          "label": "鄢陵县",
          "value": "411024"
        },
        {
          "label": "襄城县",
          "value": "411025"
        },
        {
          "label": "许昌经济技术开发区",
          "value": "411071"
        },
        {
          "label": "禹州市",
          "value": "411081"
        },
        {
          "label": "长葛市",
          "value": "411082"
        }
      ],
      [
        {
          "label": "源汇区",
          "value": "411102"
        },
        {
          "label": "郾城区",
          "value": "411103"
        },
        {
          "label": "召陵区",
          "value": "411104"
        },
        {
          "label": "舞阳县",
          "value": "411121"
        },
        {
          "label": "临颍县",
          "value": "411122"
        },
        {
          "label": "漯河经济技术开发区",
          "value": "411171"
        }
      ],
      [
        {
          "label": "湖滨区",
          "value": "411202"
        },
        {
          "label": "陕州区",
          "value": "411203"
        },
        {
          "label": "渑池县",
          "value": "411221"
        },
        {
          "label": "卢氏县",
          "value": "411224"
        },
        {
          "label": "河南三门峡经济开发区",
          "value": "411271"
        },
        {
          "label": "义马市",
          "value": "411281"
        },
        {
          "label": "灵宝市",
          "value": "411282"
        }
      ],
      [
        {
          "label": "宛城区",
          "value": "411302"
        },
        {
          "label": "卧龙区",
          "value": "411303"
        },
        {
          "label": "南召县",
          "value": "411321"
        },
        {
          "label": "方城县",
          "value": "411322"
        },
        {
          "label": "西峡县",
          "value": "411323"
        },
        {
          "label": "镇平县",
          "value": "411324"
        },
        {
          "label": "内乡县",
          "value": "411325"
        },
        {
          "label": "淅川县",
          "value": "411326"
        },
        {
          "label": "社旗县",
          "value": "411327"
        },
        {
          "label": "唐河县",
          "value": "411328"
        },
        {
          "label": "新野县",
          "value": "411329"
        },
        {
          "label": "桐柏县",
          "value": "411330"
        },
        {
          "label": "南阳高新技术产业开发区",
          "value": "411371"
        },
        {
          "label": "南阳市城乡一体化示范区",
          "value": "411372"
        },
        {
          "label": "邓州市",
          "value": "411381"
        }
      ],
      [
        {
          "label": "梁园区",
          "value": "411402"
        },
        {
          "label": "睢阳区",
          "value": "411403"
        },
        {
          "label": "民权县",
          "value": "411421"
        },
        {
          "label": "睢县",
          "value": "411422"
        },
        {
          "label": "宁陵县",
          "value": "411423"
        },
        {
          "label": "柘城县",
          "value": "411424"
        },
        {
          "label": "虞城县",
          "value": "411425"
        },
        {
          "label": "夏邑县",
          "value": "411426"
        },
        {
          "label": "豫东综合物流产业聚集区",
          "value": "411471"
        },
        {
          "label": "河南商丘经济开发区",
          "value": "411472"
        },
        {
          "label": "永城市",
          "value": "411481"
        }
      ],
      [
        {
          "label": "浉河区",
          "value": "411502"
        },
        {
          "label": "平桥区",
          "value": "411503"
        },
        {
          "label": "罗山县",
          "value": "411521"
        },
        {
          "label": "光山县",
          "value": "411522"
        },
        {
          "label": "新县",
          "value": "411523"
        },
        {
          "label": "商城县",
          "value": "411524"
        },
        {
          "label": "固始县",
          "value": "411525"
        },
        {
          "label": "潢川县",
          "value": "411526"
        },
        {
          "label": "淮滨县",
          "value": "411527"
        },
        {
          "label": "息县",
          "value": "411528"
        },
        {
          "label": "信阳高新技术产业开发区",
          "value": "411571"
        }
      ],
      [
        {
          "label": "川汇区",
          "value": "411602"
        },
        {
          "label": "扶沟县",
          "value": "411621"
        },
        {
          "label": "西华县",
          "value": "411622"
        },
        {
          "label": "商水县",
          "value": "411623"
        },
        {
          "label": "沈丘县",
          "value": "411624"
        },
        {
          "label": "郸城县",
          "value": "411625"
        },
        {
          "label": "淮阳县",
          "value": "411626"
        },
        {
          "label": "太康县",
          "value": "411627"
        },
        {
          "label": "鹿邑县",
          "value": "411628"
        },
        {
          "label": "河南周口经济开发区",
          "value": "411671"
        },
        {
          "label": "项城市",
          "value": "411681"
        }
      ],
      [
        {
          "label": "驿城区",
          "value": "411702"
        },
        {
          "label": "西平县",
          "value": "411721"
        },
        {
          "label": "上蔡县",
          "value": "411722"
        },
        {
          "label": "平舆县",
          "value": "411723"
        },
        {
          "label": "正阳县",
          "value": "411724"
        },
        {
          "label": "确山县",
          "value": "411725"
        },
        {
          "label": "泌阳县",
          "value": "411726"
        },
        {
          "label": "汝南县",
          "value": "411727"
        },
        {
          "label": "遂平县",
          "value": "411728"
        },
        {
          "label": "新蔡县",
          "value": "411729"
        },
        {
          "label": "河南驻马店经济开发区",
          "value": "411771"
        }
      ],
      [{
        "label": "济源市",
        "value": "419001"
      }]
    ],
    [
      [
        {
          "label": "江岸区",
          "value": "420102"
        },
        {
          "label": "江汉区",
          "value": "420103"
        },
        {
          "label": "硚口区",
          "value": "420104"
        },
        {
          "label": "汉阳区",
          "value": "420105"
        },
        {
          "label": "武昌区",
          "value": "420106"
        },
        {
          "label": "青山区",
          "value": "420107"
        },
        {
          "label": "洪山区",
          "value": "420111"
        },
        {
          "label": "东西湖区",
          "value": "420112"
        },
        {
          "label": "汉南区",
          "value": "420113"
        },
        {
          "label": "蔡甸区",
          "value": "420114"
        },
        {
          "label": "江夏区",
          "value": "420115"
        },
        {
          "label": "黄陂区",
          "value": "420116"
        },
        {
          "label": "新洲区",
          "value": "420117"
        }
      ],
      [
        {
          "label": "黄石港区",
          "value": "420202"
        },
        {
          "label": "西塞山区",
          "value": "420203"
        },
        {
          "label": "下陆区",
          "value": "420204"
        },
        {
          "label": "铁山区",
          "value": "420205"
        },
        {
          "label": "阳新县",
          "value": "420222"
        },
        {
          "label": "大冶市",
          "value": "420281"
        }
      ],
      [
        {
          "label": "茅箭区",
          "value": "420302"
        },
        {
          "label": "张湾区",
          "value": "420303"
        },
        {
          "label": "郧阳区",
          "value": "420304"
        },
        {
          "label": "郧西县",
          "value": "420322"
        },
        {
          "label": "竹山县",
          "value": "420323"
        },
        {
          "label": "竹溪县",
          "value": "420324"
        },
        {
          "label": "房县",
          "value": "420325"
        },
        {
          "label": "丹江口市",
          "value": "420381"
        }
      ],
      [
        {
          "label": "西陵区",
          "value": "420502"
        },
        {
          "label": "伍家岗区",
          "value": "420503"
        },
        {
          "label": "点军区",
          "value": "420504"
        },
        {
          "label": "猇亭区",
          "value": "420505"
        },
        {
          "label": "夷陵区",
          "value": "420506"
        },
        {
          "label": "远安县",
          "value": "420525"
        },
        {
          "label": "兴山县",
          "value": "420526"
        },
        {
          "label": "秭归县",
          "value": "420527"
        },
        {
          "label": "长阳土家族自治县",
          "value": "420528"
        },
        {
          "label": "五峰土家族自治县",
          "value": "420529"
        },
        {
          "label": "宜都市",
          "value": "420581"
        },
        {
          "label": "当阳市",
          "value": "420582"
        },
        {
          "label": "枝江市",
          "value": "420583"
        }
      ],
      [
        {
          "label": "襄城区",
          "value": "420602"
        },
        {
          "label": "樊城区",
          "value": "420606"
        },
        {
          "label": "襄州区",
          "value": "420607"
        },
        {
          "label": "南漳县",
          "value": "420624"
        },
        {
          "label": "谷城县",
          "value": "420625"
        },
        {
          "label": "保康县",
          "value": "420626"
        },
        {
          "label": "老河口市",
          "value": "420682"
        },
        {
          "label": "枣阳市",
          "value": "420683"
        },
        {
          "label": "宜城市",
          "value": "420684"
        }
      ],
      [
        {
          "label": "梁子湖区",
          "value": "420702"
        },
        {
          "label": "华容区",
          "value": "420703"
        },
        {
          "label": "鄂城区",
          "value": "420704"
        }
      ],
      [
        {
          "label": "东宝区",
          "value": "420802"
        },
        {
          "label": "掇刀区",
          "value": "420804"
        },
        {
          "label": "京山县",
          "value": "420821"
        },
        {
          "label": "沙洋县",
          "value": "420822"
        },
        {
          "label": "钟祥市",
          "value": "420881"
        }
      ],
      [
        {
          "label": "孝南区",
          "value": "420902"
        },
        {
          "label": "孝昌县",
          "value": "420921"
        },
        {
          "label": "大悟县",
          "value": "420922"
        },
        {
          "label": "云梦县",
          "value": "420923"
        },
        {
          "label": "应城市",
          "value": "420981"
        },
        {
          "label": "安陆市",
          "value": "420982"
        },
        {
          "label": "汉川市",
          "value": "420984"
        }
      ],
      [
        {
          "label": "沙市区",
          "value": "421002"
        },
        {
          "label": "荆州区",
          "value": "421003"
        },
        {
          "label": "公安县",
          "value": "421022"
        },
        {
          "label": "监利县",
          "value": "421023"
        },
        {
          "label": "江陵县",
          "value": "421024"
        },
        {
          "label": "荆州经济技术开发区",
          "value": "421071"
        },
        {
          "label": "石首市",
          "value": "421081"
        },
        {
          "label": "洪湖市",
          "value": "421083"
        },
        {
          "label": "松滋市",
          "value": "421087"
        }
      ],
      [
        {
          "label": "黄州区",
          "value": "421102"
        },
        {
          "label": "团风县",
          "value": "421121"
        },
        {
          "label": "红安县",
          "value": "421122"
        },
        {
          "label": "罗田县",
          "value": "421123"
        },
        {
          "label": "英山县",
          "value": "421124"
        },
        {
          "label": "浠水县",
          "value": "421125"
        },
        {
          "label": "蕲春县",
          "value": "421126"
        },
        {
          "label": "黄梅县",
          "value": "421127"
        },
        {
          "label": "龙感湖管理区",
          "value": "421171"
        },
        {
          "label": "麻城市",
          "value": "421181"
        },
        {
          "label": "武穴市",
          "value": "421182"
        }
      ],
      [
        {
          "label": "咸安区",
          "value": "421202"
        },
        {
          "label": "嘉鱼县",
          "value": "421221"
        },
        {
          "label": "通城县",
          "value": "421222"
        },
        {
          "label": "崇阳县",
          "value": "421223"
        },
        {
          "label": "通山县",
          "value": "421224"
        },
        {
          "label": "赤壁市",
          "value": "421281"
        }
      ],
      [
        {
          "label": "曾都区",
          "value": "421303"
        },
        {
          "label": "随县",
          "value": "421321"
        },
        {
          "label": "广水市",
          "value": "421381"
        }
      ],
      [
        {
          "label": "恩施市",
          "value": "422801"
        },
        {
          "label": "利川市",
          "value": "422802"
        },
        {
          "label": "建始县",
          "value": "422822"
        },
        {
          "label": "巴东县",
          "value": "422823"
        },
        {
          "label": "宣恩县",
          "value": "422825"
        },
        {
          "label": "咸丰县",
          "value": "422826"
        },
        {
          "label": "来凤县",
          "value": "422827"
        },
        {
          "label": "鹤峰县",
          "value": "422828"
        }
      ],
      [
        {
          "label": "仙桃市",
          "value": "429004"
        },
        {
          "label": "潜江市",
          "value": "429005"
        },
        {
          "label": "天门市",
          "value": "429006"
        },
        {
          "label": "神农架林区",
          "value": "429021"
        }
      ]
    ],
    [
      [
        {
          "label": "芙蓉区",
          "value": "430102"
        },
        {
          "label": "天心区",
          "value": "430103"
        },
        {
          "label": "岳麓区",
          "value": "430104"
        },
        {
          "label": "开福区",
          "value": "430105"
        },
        {
          "label": "雨花区",
          "value": "430111"
        },
        {
          "label": "望城区",
          "value": "430112"
        },
        {
          "label": "长沙县",
          "value": "430121"
        },
        {
          "label": "浏阳市",
          "value": "430181"
        },
        {
          "label": "宁乡市",
          "value": "430182"
        }
      ],
      [
        {
          "label": "荷塘区",
          "value": "430202"
        },
        {
          "label": "芦淞区",
          "value": "430203"
        },
        {
          "label": "石峰区",
          "value": "430204"
        },
        {
          "label": "天元区",
          "value": "430211"
        },
        {
          "label": "株洲县",
          "value": "430221"
        },
        {
          "label": "攸县",
          "value": "430223"
        },
        {
          "label": "茶陵县",
          "value": "430224"
        },
        {
          "label": "炎陵县",
          "value": "430225"
        },
        {
          "label": "云龙示范区",
          "value": "430271"
        },
        {
          "label": "醴陵市",
          "value": "430281"
        }
      ],
      [
        {
          "label": "雨湖区",
          "value": "430302"
        },
        {
          "label": "岳塘区",
          "value": "430304"
        },
        {
          "label": "湘潭县",
          "value": "430321"
        },
        {
          "label": "湖南湘潭高新技术产业园区",
          "value": "430371"
        },
        {
          "label": "湘潭昭山示范区",
          "value": "430372"
        },
        {
          "label": "湘潭九华示范区",
          "value": "430373"
        },
        {
          "label": "湘乡市",
          "value": "430381"
        },
        {
          "label": "韶山市",
          "value": "430382"
        }
      ],
      [
        {
          "label": "珠晖区",
          "value": "430405"
        },
        {
          "label": "雁峰区",
          "value": "430406"
        },
        {
          "label": "石鼓区",
          "value": "430407"
        },
        {
          "label": "蒸湘区",
          "value": "430408"
        },
        {
          "label": "南岳区",
          "value": "430412"
        },
        {
          "label": "衡阳县",
          "value": "430421"
        },
        {
          "label": "衡南县",
          "value": "430422"
        },
        {
          "label": "衡山县",
          "value": "430423"
        },
        {
          "label": "衡东县",
          "value": "430424"
        },
        {
          "label": "祁东县",
          "value": "430426"
        },
        {
          "label": "衡阳综合保税区",
          "value": "430471"
        },
        {
          "label": "湖南衡阳高新技术产业园区",
          "value": "430472"
        },
        {
          "label": "湖南衡阳松木经济开发区",
          "value": "430473"
        },
        {
          "label": "耒阳市",
          "value": "430481"
        },
        {
          "label": "常宁市",
          "value": "430482"
        }
      ],
      [
        {
          "label": "双清区",
          "value": "430502"
        },
        {
          "label": "大祥区",
          "value": "430503"
        },
        {
          "label": "北塔区",
          "value": "430511"
        },
        {
          "label": "邵东县",
          "value": "430521"
        },
        {
          "label": "新邵县",
          "value": "430522"
        },
        {
          "label": "邵阳县",
          "value": "430523"
        },
        {
          "label": "隆回县",
          "value": "430524"
        },
        {
          "label": "洞口县",
          "value": "430525"
        },
        {
          "label": "绥宁县",
          "value": "430527"
        },
        {
          "label": "新宁县",
          "value": "430528"
        },
        {
          "label": "城步苗族自治县",
          "value": "430529"
        },
        {
          "label": "武冈市",
          "value": "430581"
        }
      ],
      [
        {
          "label": "岳阳楼区",
          "value": "430602"
        },
        {
          "label": "云溪区",
          "value": "430603"
        },
        {
          "label": "君山区",
          "value": "430611"
        },
        {
          "label": "岳阳县",
          "value": "430621"
        },
        {
          "label": "华容县",
          "value": "430623"
        },
        {
          "label": "湘阴县",
          "value": "430624"
        },
        {
          "label": "平江县",
          "value": "430626"
        },
        {
          "label": "岳阳市屈原管理区",
          "value": "430671"
        },
        {
          "label": "汨罗市",
          "value": "430681"
        },
        {
          "label": "临湘市",
          "value": "430682"
        }
      ],
      [
        {
          "label": "武陵区",
          "value": "430702"
        },
        {
          "label": "鼎城区",
          "value": "430703"
        },
        {
          "label": "安乡县",
          "value": "430721"
        },
        {
          "label": "汉寿县",
          "value": "430722"
        },
        {
          "label": "澧县",
          "value": "430723"
        },
        {
          "label": "临澧县",
          "value": "430724"
        },
        {
          "label": "桃源县",
          "value": "430725"
        },
        {
          "label": "石门县",
          "value": "430726"
        },
        {
          "label": "常德市西洞庭管理区",
          "value": "430771"
        },
        {
          "label": "津市市",
          "value": "430781"
        }
      ],
      [
        {
          "label": "永定区",
          "value": "430802"
        },
        {
          "label": "武陵源区",
          "value": "430811"
        },
        {
          "label": "慈利县",
          "value": "430821"
        },
        {
          "label": "桑植县",
          "value": "430822"
        }
      ],
      [
        {
          "label": "资阳区",
          "value": "430902"
        },
        {
          "label": "赫山区",
          "value": "430903"
        },
        {
          "label": "南县",
          "value": "430921"
        },
        {
          "label": "桃江县",
          "value": "430922"
        },
        {
          "label": "安化县",
          "value": "430923"
        },
        {
          "label": "益阳市大通湖管理区",
          "value": "430971"
        },
        {
          "label": "湖南益阳高新技术产业园区",
          "value": "430972"
        },
        {
          "label": "沅江市",
          "value": "430981"
        }
      ],
      [
        {
          "label": "北湖区",
          "value": "431002"
        },
        {
          "label": "苏仙区",
          "value": "431003"
        },
        {
          "label": "桂阳县",
          "value": "431021"
        },
        {
          "label": "宜章县",
          "value": "431022"
        },
        {
          "label": "永兴县",
          "value": "431023"
        },
        {
          "label": "嘉禾县",
          "value": "431024"
        },
        {
          "label": "临武县",
          "value": "431025"
        },
        {
          "label": "汝城县",
          "value": "431026"
        },
        {
          "label": "桂东县",
          "value": "431027"
        },
        {
          "label": "安仁县",
          "value": "431028"
        },
        {
          "label": "资兴市",
          "value": "431081"
        }
      ],
      [
        {
          "label": "零陵区",
          "value": "431102"
        },
        {
          "label": "冷水滩区",
          "value": "431103"
        },
        {
          "label": "祁阳县",
          "value": "431121"
        },
        {
          "label": "东安县",
          "value": "431122"
        },
        {
          "label": "双牌县",
          "value": "431123"
        },
        {
          "label": "道县",
          "value": "431124"
        },
        {
          "label": "江永县",
          "value": "431125"
        },
        {
          "label": "宁远县",
          "value": "431126"
        },
        {
          "label": "蓝山县",
          "value": "431127"
        },
        {
          "label": "新田县",
          "value": "431128"
        },
        {
          "label": "江华瑶族自治县",
          "value": "431129"
        },
        {
          "label": "永州经济技术开发区",
          "value": "431171"
        },
        {
          "label": "永州市金洞管理区",
          "value": "431172"
        },
        {
          "label": "永州市回龙圩管理区",
          "value": "431173"
        }
      ],
      [
        {
          "label": "鹤城区",
          "value": "431202"
        },
        {
          "label": "中方县",
          "value": "431221"
        },
        {
          "label": "沅陵县",
          "value": "431222"
        },
        {
          "label": "辰溪县",
          "value": "431223"
        },
        {
          "label": "溆浦县",
          "value": "431224"
        },
        {
          "label": "会同县",
          "value": "431225"
        },
        {
          "label": "麻阳苗族自治县",
          "value": "431226"
        },
        {
          "label": "新晃侗族自治县",
          "value": "431227"
        },
        {
          "label": "芷江侗族自治县",
          "value": "431228"
        },
        {
          "label": "靖州苗族侗族自治县",
          "value": "431229"
        },
        {
          "label": "通道侗族自治县",
          "value": "431230"
        },
        {
          "label": "怀化市洪江管理区",
          "value": "431271"
        },
        {
          "label": "洪江市",
          "value": "431281"
        }
      ],
      [
        {
          "label": "娄星区",
          "value": "431302"
        },
        {
          "label": "双峰县",
          "value": "431321"
        },
        {
          "label": "新化县",
          "value": "431322"
        },
        {
          "label": "冷水江市",
          "value": "431381"
        },
        {
          "label": "涟源市",
          "value": "431382"
        }
      ],
      [
        {
          "label": "吉首市",
          "value": "433101"
        },
        {
          "label": "泸溪县",
          "value": "433122"
        },
        {
          "label": "凤凰县",
          "value": "433123"
        },
        {
          "label": "花垣县",
          "value": "433124"
        },
        {
          "label": "保靖县",
          "value": "433125"
        },
        {
          "label": "古丈县",
          "value": "433126"
        },
        {
          "label": "永顺县",
          "value": "433127"
        },
        {
          "label": "龙山县",
          "value": "433130"
        },
        {
          "label": "湖南吉首经济开发区",
          "value": "433172"
        },
        {
          "label": "湖南永顺经济开发区",
          "value": "433173"
        }
      ]
    ],
    [
      [
        {
          "label": "荔湾区",
          "value": "440103"
        },
        {
          "label": "越秀区",
          "value": "440104"
        },
        {
          "label": "海珠区",
          "value": "440105"
        },
        {
          "label": "天河区",
          "value": "440106"
        },
        {
          "label": "白云区",
          "value": "440111"
        },
        {
          "label": "黄埔区",
          "value": "440112"
        },
        {
          "label": "番禺区",
          "value": "440113"
        },
        {
          "label": "花都区",
          "value": "440114"
        },
        {
          "label": "南沙区",
          "value": "440115"
        },
        {
          "label": "从化区",
          "value": "440117"
        },
        {
          "label": "增城区",
          "value": "440118"
        }
      ],
      [
        {
          "label": "武江区",
          "value": "440203"
        },
        {
          "label": "浈江区",
          "value": "440204"
        },
        {
          "label": "曲江区",
          "value": "440205"
        },
        {
          "label": "始兴县",
          "value": "440222"
        },
        {
          "label": "仁化县",
          "value": "440224"
        },
        {
          "label": "翁源县",
          "value": "440229"
        },
        {
          "label": "乳源瑶族自治县",
          "value": "440232"
        },
        {
          "label": "新丰县",
          "value": "440233"
        },
        {
          "label": "乐昌市",
          "value": "440281"
        },
        {
          "label": "南雄市",
          "value": "440282"
        }
      ],
      [
        {
          "label": "罗湖区",
          "value": "440303"
        },
        {
          "label": "福田区",
          "value": "440304"
        },
        {
          "label": "南山区",
          "value": "440305"
        },
        {
          "label": "宝安区",
          "value": "440306"
        },
        {
          "label": "龙岗区",
          "value": "440307"
        },
        {
          "label": "盐田区",
          "value": "440308"
        },
        {
          "label": "龙华区",
          "value": "440309"
        },
        {
          "label": "坪山区",
          "value": "440310"
        }
      ],
      [
        {
          "label": "香洲区",
          "value": "440402"
        },
        {
          "label": "斗门区",
          "value": "440403"
        },
        {
          "label": "金湾区",
          "value": "440404"
        }
      ],
      [
        {
          "label": "龙湖区",
          "value": "440507"
        },
        {
          "label": "金平区",
          "value": "440511"
        },
        {
          "label": "濠江区",
          "value": "440512"
        },
        {
          "label": "潮阳区",
          "value": "440513"
        },
        {
          "label": "潮南区",
          "value": "440514"
        },
        {
          "label": "澄海区",
          "value": "440515"
        },
        {
          "label": "南澳县",
          "value": "440523"
        }
      ],
      [
        {
          "label": "禅城区",
          "value": "440604"
        },
        {
          "label": "南海区",
          "value": "440605"
        },
        {
          "label": "顺德区",
          "value": "440606"
        },
        {
          "label": "三水区",
          "value": "440607"
        },
        {
          "label": "高明区",
          "value": "440608"
        }
      ],
      [
        {
          "label": "蓬江区",
          "value": "440703"
        },
        {
          "label": "江海区",
          "value": "440704"
        },
        {
          "label": "新会区",
          "value": "440705"
        },
        {
          "label": "台山市",
          "value": "440781"
        },
        {
          "label": "开平市",
          "value": "440783"
        },
        {
          "label": "鹤山市",
          "value": "440784"
        },
        {
          "label": "恩平市",
          "value": "440785"
        }
      ],
      [
        {
          "label": "赤坎区",
          "value": "440802"
        },
        {
          "label": "霞山区",
          "value": "440803"
        },
        {
          "label": "坡头区",
          "value": "440804"
        },
        {
          "label": "麻章区",
          "value": "440811"
        },
        {
          "label": "遂溪县",
          "value": "440823"
        },
        {
          "label": "徐闻县",
          "value": "440825"
        },
        {
          "label": "廉江市",
          "value": "440881"
        },
        {
          "label": "雷州市",
          "value": "440882"
        },
        {
          "label": "吴川市",
          "value": "440883"
        }
      ],
      [
        {
          "label": "茂南区",
          "value": "440902"
        },
        {
          "label": "电白区",
          "value": "440904"
        },
        {
          "label": "高州市",
          "value": "440981"
        },
        {
          "label": "化州市",
          "value": "440982"
        },
        {
          "label": "信宜市",
          "value": "440983"
        }
      ],
      [
        {
          "label": "端州区",
          "value": "441202"
        },
        {
          "label": "鼎湖区",
          "value": "441203"
        },
        {
          "label": "高要区",
          "value": "441204"
        },
        {
          "label": "广宁县",
          "value": "441223"
        },
        {
          "label": "怀集县",
          "value": "441224"
        },
        {
          "label": "封开县",
          "value": "441225"
        },
        {
          "label": "德庆县",
          "value": "441226"
        },
        {
          "label": "四会市",
          "value": "441284"
        }
      ],
      [
        {
          "label": "惠城区",
          "value": "441302"
        },
        {
          "label": "惠阳区",
          "value": "441303"
        },
        {
          "label": "博罗县",
          "value": "441322"
        },
        {
          "label": "惠东县",
          "value": "441323"
        },
        {
          "label": "龙门县",
          "value": "441324"
        }
      ],
      [
        {
          "label": "梅江区",
          "value": "441402"
        },
        {
          "label": "梅县区",
          "value": "441403"
        },
        {
          "label": "大埔县",
          "value": "441422"
        },
        {
          "label": "丰顺县",
          "value": "441423"
        },
        {
          "label": "五华县",
          "value": "441424"
        },
        {
          "label": "平远县",
          "value": "441426"
        },
        {
          "label": "蕉岭县",
          "value": "441427"
        },
        {
          "label": "兴宁市",
          "value": "441481"
        }
      ],
      [
        {
          "label": "城区",
          "value": "441502"
        },
        {
          "label": "海丰县",
          "value": "441521"
        },
        {
          "label": "陆河县",
          "value": "441523"
        },
        {
          "label": "陆丰市",
          "value": "441581"
        }
      ],
      [
        {
          "label": "源城区",
          "value": "441602"
        },
        {
          "label": "紫金县",
          "value": "441621"
        },
        {
          "label": "龙川县",
          "value": "441622"
        },
        {
          "label": "连平县",
          "value": "441623"
        },
        {
          "label": "和平县",
          "value": "441624"
        },
        {
          "label": "东源县",
          "value": "441625"
        }
      ],
      [
        {
          "label": "江城区",
          "value": "441702"
        },
        {
          "label": "阳东区",
          "value": "441704"
        },
        {
          "label": "阳西县",
          "value": "441721"
        },
        {
          "label": "阳春市",
          "value": "441781"
        }
      ],
      [
        {
          "label": "清城区",
          "value": "441802"
        },
        {
          "label": "清新区",
          "value": "441803"
        },
        {
          "label": "佛冈县",
          "value": "441821"
        },
        {
          "label": "阳山县",
          "value": "441823"
        },
        {
          "label": "连山壮族瑶族自治县",
          "value": "441825"
        },
        {
          "label": "连南瑶族自治县",
          "value": "441826"
        },
        {
          "label": "英德市",
          "value": "441881"
        },
        {
          "label": "连州市",
          "value": "441882"
        }
      ],
      [{
        "label": "东莞市",
        "value": "441900"
      }],
      [{
        "label": "中山市",
        "value": "442000"
      }],
      [
        {
          "label": "湘桥区",
          "value": "445102"
        },
        {
          "label": "潮安区",
          "value": "445103"
        },
        {
          "label": "饶平县",
          "value": "445122"
        }
      ],
      [
        {
          "label": "榕城区",
          "value": "445202"
        },
        {
          "label": "揭东区",
          "value": "445203"
        },
        {
          "label": "揭西县",
          "value": "445222"
        },
        {
          "label": "惠来县",
          "value": "445224"
        },
        {
          "label": "普宁市",
          "value": "445281"
        }
      ],
      [
        {
          "label": "云城区",
          "value": "445302"
        },
        {
          "label": "云安区",
          "value": "445303"
        },
        {
          "label": "新兴县",
          "value": "445321"
        },
        {
          "label": "郁南县",
          "value": "445322"
        },
        {
          "label": "罗定市",
          "value": "445381"
        }
      ]
    ],
    [
      [
        {
          "label": "兴宁区",
          "value": "450102"
        },
        {
          "label": "青秀区",
          "value": "450103"
        },
        {
          "label": "江南区",
          "value": "450105"
        },
        {
          "label": "西乡塘区",
          "value": "450107"
        },
        {
          "label": "良庆区",
          "value": "450108"
        },
        {
          "label": "邕宁区",
          "value": "450109"
        },
        {
          "label": "武鸣区",
          "value": "450110"
        },
        {
          "label": "隆安县",
          "value": "450123"
        },
        {
          "label": "马山县",
          "value": "450124"
        },
        {
          "label": "上林县",
          "value": "450125"
        },
        {
          "label": "宾阳县",
          "value": "450126"
        },
        {
          "label": "横县",
          "value": "450127"
        }
      ],
      [
        {
          "label": "城中区",
          "value": "450202"
        },
        {
          "label": "鱼峰区",
          "value": "450203"
        },
        {
          "label": "柳南区",
          "value": "450204"
        },
        {
          "label": "柳北区",
          "value": "450205"
        },
        {
          "label": "柳江区",
          "value": "450206"
        },
        {
          "label": "柳城县",
          "value": "450222"
        },
        {
          "label": "鹿寨县",
          "value": "450223"
        },
        {
          "label": "融安县",
          "value": "450224"
        },
        {
          "label": "融水苗族自治县",
          "value": "450225"
        },
        {
          "label": "三江侗族自治县",
          "value": "450226"
        }
      ],
      [
        {
          "label": "秀峰区",
          "value": "450302"
        },
        {
          "label": "叠彩区",
          "value": "450303"
        },
        {
          "label": "象山区",
          "value": "450304"
        },
        {
          "label": "七星区",
          "value": "450305"
        },
        {
          "label": "雁山区",
          "value": "450311"
        },
        {
          "label": "临桂区",
          "value": "450312"
        },
        {
          "label": "阳朔县",
          "value": "450321"
        },
        {
          "label": "灵川县",
          "value": "450323"
        },
        {
          "label": "全州县",
          "value": "450324"
        },
        {
          "label": "兴安县",
          "value": "450325"
        },
        {
          "label": "永福县",
          "value": "450326"
        },
        {
          "label": "灌阳县",
          "value": "450327"
        },
        {
          "label": "龙胜各族自治县",
          "value": "450328"
        },
        {
          "label": "资源县",
          "value": "450329"
        },
        {
          "label": "平乐县",
          "value": "450330"
        },
        {
          "label": "荔浦县",
          "value": "450331"
        },
        {
          "label": "恭城瑶族自治县",
          "value": "450332"
        }
      ],
      [
        {
          "label": "万秀区",
          "value": "450403"
        },
        {
          "label": "长洲区",
          "value": "450405"
        },
        {
          "label": "龙圩区",
          "value": "450406"
        },
        {
          "label": "苍梧县",
          "value": "450421"
        },
        {
          "label": "藤县",
          "value": "450422"
        },
        {
          "label": "蒙山县",
          "value": "450423"
        },
        {
          "label": "岑溪市",
          "value": "450481"
        }
      ],
      [
        {
          "label": "海城区",
          "value": "450502"
        },
        {
          "label": "银海区",
          "value": "450503"
        },
        {
          "label": "铁山港区",
          "value": "450512"
        },
        {
          "label": "合浦县",
          "value": "450521"
        }
      ],
      [
        {
          "label": "港口区",
          "value": "450602"
        },
        {
          "label": "防城区",
          "value": "450603"
        },
        {
          "label": "上思县",
          "value": "450621"
        },
        {
          "label": "东兴市",
          "value": "450681"
        }
      ],
      [
        {
          "label": "钦南区",
          "value": "450702"
        },
        {
          "label": "钦北区",
          "value": "450703"
        },
        {
          "label": "灵山县",
          "value": "450721"
        },
        {
          "label": "浦北县",
          "value": "450722"
        }
      ],
      [
        {
          "label": "港北区",
          "value": "450802"
        },
        {
          "label": "港南区",
          "value": "450803"
        },
        {
          "label": "覃塘区",
          "value": "450804"
        },
        {
          "label": "平南县",
          "value": "450821"
        },
        {
          "label": "桂平市",
          "value": "450881"
        }
      ],
      [
        {
          "label": "玉州区",
          "value": "450902"
        },
        {
          "label": "福绵区",
          "value": "450903"
        },
        {
          "label": "容县",
          "value": "450921"
        },
        {
          "label": "陆川县",
          "value": "450922"
        },
        {
          "label": "博白县",
          "value": "450923"
        },
        {
          "label": "兴业县",
          "value": "450924"
        },
        {
          "label": "北流市",
          "value": "450981"
        }
      ],
      [
        {
          "label": "右江区",
          "value": "451002"
        },
        {
          "label": "田阳县",
          "value": "451021"
        },
        {
          "label": "田东县",
          "value": "451022"
        },
        {
          "label": "平果县",
          "value": "451023"
        },
        {
          "label": "德保县",
          "value": "451024"
        },
        {
          "label": "那坡县",
          "value": "451026"
        },
        {
          "label": "凌云县",
          "value": "451027"
        },
        {
          "label": "乐业县",
          "value": "451028"
        },
        {
          "label": "田林县",
          "value": "451029"
        },
        {
          "label": "西林县",
          "value": "451030"
        },
        {
          "label": "隆林各族自治县",
          "value": "451031"
        },
        {
          "label": "靖西市",
          "value": "451081"
        }
      ],
      [
        {
          "label": "八步区",
          "value": "451102"
        },
        {
          "label": "平桂区",
          "value": "451103"
        },
        {
          "label": "昭平县",
          "value": "451121"
        },
        {
          "label": "钟山县",
          "value": "451122"
        },
        {
          "label": "富川瑶族自治县",
          "value": "451123"
        }
      ],
      [
        {
          "label": "金城江区",
          "value": "451202"
        },
        {
          "label": "宜州区",
          "value": "451203"
        },
        {
          "label": "南丹县",
          "value": "451221"
        },
        {
          "label": "天峨县",
          "value": "451222"
        },
        {
          "label": "凤山县",
          "value": "451223"
        },
        {
          "label": "东兰县",
          "value": "451224"
        },
        {
          "label": "罗城仫佬族自治县",
          "value": "451225"
        },
        {
          "label": "环江毛南族自治县",
          "value": "451226"
        },
        {
          "label": "巴马瑶族自治县",
          "value": "451227"
        },
        {
          "label": "都安瑶族自治县",
          "value": "451228"
        },
        {
          "label": "大化瑶族自治县",
          "value": "451229"
        }
      ],
      [
        {
          "label": "兴宾区",
          "value": "451302"
        },
        {
          "label": "忻城县",
          "value": "451321"
        },
        {
          "label": "象州县",
          "value": "451322"
        },
        {
          "label": "武宣县",
          "value": "451323"
        },
        {
          "label": "金秀瑶族自治县",
          "value": "451324"
        },
        {
          "label": "合山市",
          "value": "451381"
        }
      ],
      [
        {
          "label": "江州区",
          "value": "451402"
        },
        {
          "label": "扶绥县",
          "value": "451421"
        },
        {
          "label": "宁明县",
          "value": "451422"
        },
        {
          "label": "龙州县",
          "value": "451423"
        },
        {
          "label": "大新县",
          "value": "451424"
        },
        {
          "label": "天等县",
          "value": "451425"
        },
        {
          "label": "凭祥市",
          "value": "451481"
        }
      ]
    ],
    [
      [
        {
          "label": "秀英区",
          "value": "460105"
        },
        {
          "label": "龙华区",
          "value": "460106"
        },
        {
          "label": "琼山区",
          "value": "460107"
        },
        {
          "label": "美兰区",
          "value": "460108"
        }
      ],
      [
        {
          "label": "海棠区",
          "value": "460202"
        },
        {
          "label": "吉阳区",
          "value": "460203"
        },
        {
          "label": "天涯区",
          "value": "460204"
        },
        {
          "label": "崖州区",
          "value": "460205"
        }
      ],
      [
        {
          "label": "西沙群岛",
          "value": "460321"
        },
        {
          "label": "南沙群岛",
          "value": "460322"
        },
        {
          "label": "中沙群岛的岛礁及其海域",
          "value": "460323"
        }
      ],
      [{
        "label": "儋州市",
        "value": "460400"
      }],
      [{
        "label": "五指山市",
        "value": "469001"
      }],
      [{
        "label": "琼海市",
        "value": "469002"
      }],
      [{
        "label": "文昌市",
        "value": "469005"
      }],
      [{
        "label": "万宁市",
        "value": "469006"
      }],
      [{
        "label": "东方市",
        "value": "469007"
      }],
      [{
        "label": "定安县",
        "value": "469021"
      }],
      [{
        "label": "屯昌县",
        "value": "469022"
      }],
      [{
        "label": "澄迈县",
        "value": "469023"
      }],
      [{
        "label": "临高县",
        "value": "469024"
      }],
      [{
        "label": "白沙黎族自治县",
        "value": "469025"
      }],
      [{
        "label": "昌江黎族自治县",
        "value": "469026"
      }],
      [{
        "label": "乐东黎族自治县",
        "value": "469027"
      }],
      [{
        "label": "陵水黎族自治县",
        "value": "469028"
      }],
      [{
        "label": "保亭黎族苗族自治县",
        "value": "469029"
      }],
      [{
        "label": "琼中黎族苗族自治县",
        "value": "469030"
      }]
    ],
    [
      [
        {
          "label": "万州区",
          "value": "500101"
        },
        {
          "label": "涪陵区",
          "value": "500102"
        },
        {
          "label": "渝中区",
          "value": "500103"
        },
        {
          "label": "大渡口区",
          "value": "500104"
        },
        {
          "label": "江北区",
          "value": "500105"
        },
        {
          "label": "沙坪坝区",
          "value": "500106"
        },
        {
          "label": "九龙坡区",
          "value": "500107"
        },
        {
          "label": "南岸区",
          "value": "500108"
        },
        {
          "label": "北碚区",
          "value": "500109"
        },
        {
          "label": "綦江区",
          "value": "500110"
        },
        {
          "label": "大足区",
          "value": "500111"
        },
        {
          "label": "渝北区",
          "value": "500112"
        },
        {
          "label": "巴南区",
          "value": "500113"
        },
        {
          "label": "黔江区",
          "value": "500114"
        },
        {
          "label": "长寿区",
          "value": "500115"
        },
        {
          "label": "江津区",
          "value": "500116"
        },
        {
          "label": "合川区",
          "value": "500117"
        },
        {
          "label": "永川区",
          "value": "500118"
        },
        {
          "label": "南川区",
          "value": "500119"
        },
        {
          "label": "璧山区",
          "value": "500120"
        },
        {
          "label": "铜梁区",
          "value": "500151"
        },
        {
          "label": "潼南区",
          "value": "500152"
        },
        {
          "label": "荣昌区",
          "value": "500153"
        },
        {
          "label": "开州区",
          "value": "500154"
        },
        {
          "label": "梁平区",
          "value": "500155"
        },
        {
          "label": "武隆区",
          "value": "500156"
        },
        {
          "label": "城口县",
          "value": "500229"
        },
        {
          "label": "丰都县",
          "value": "500230"
        },
        {
          "label": "垫江县",
          "value": "500231"
        },
        {
          "label": "忠县",
          "value": "500233"
        },
        {
          "label": "云阳县",
          "value": "500235"
        },
        {
          "label": "奉节县",
          "value": "500236"
        },
        {
          "label": "巫山县",
          "value": "500237"
        },
        {
          "label": "巫溪县",
          "value": "500238"
        },
        {
          "label": "石柱土家族自治县",
          "value": "500240"
        },
        {
          "label": "秀山土家族苗族自治县",
          "value": "500241"
        },
        {
          "label": "酉阳土家族苗族自治县",
          "value": "500242"
        },
        {
          "label": "彭水苗族土家族自治县",
          "value": "500243"
        }
      ]
    ],
    [
      [
        {
          "label": "锦江区",
          "value": "510104"
        },
        {
          "label": "青羊区",
          "value": "510105"
        },
        {
          "label": "金牛区",
          "value": "510106"
        },
        {
          "label": "武侯区",
          "value": "510107"
        },
        {
          "label": "成华区",
          "value": "510108"
        },
        {
          "label": "龙泉驿区",
          "value": "510112"
        },
        {
          "label": "青白江区",
          "value": "510113"
        },
        {
          "label": "新都区",
          "value": "510114"
        },
        {
          "label": "温江区",
          "value": "510115"
        },
        {
          "label": "双流区",
          "value": "510116"
        },
        {
          "label": "郫都区",
          "value": "510117"
        },
        {
          "label": "金堂县",
          "value": "510121"
        },
        {
          "label": "大邑县",
          "value": "510129"
        },
        {
          "label": "蒲江县",
          "value": "510131"
        },
        {
          "label": "新津县",
          "value": "510132"
        },
        {
          "label": "都江堰市",
          "value": "510181"
        },
        {
          "label": "彭州市",
          "value": "510182"
        },
        {
          "label": "邛崃市",
          "value": "510183"
        },
        {
          "label": "崇州市",
          "value": "510184"
        },
        {
          "label": "简阳市",
          "value": "510185"
        }
      ],
      [
        {
          "label": "自流井区",
          "value": "510302"
        },
        {
          "label": "贡井区",
          "value": "510303"
        },
        {
          "label": "大安区",
          "value": "510304"
        },
        {
          "label": "沿滩区",
          "value": "510311"
        },
        {
          "label": "荣县",
          "value": "510321"
        },
        {
          "label": "富顺县",
          "value": "510322"
        }
      ],
      [
        {
          "label": "东区",
          "value": "510402"
        },
        {
          "label": "西区",
          "value": "510403"
        },
        {
          "label": "仁和区",
          "value": "510411"
        },
        {
          "label": "米易县",
          "value": "510421"
        },
        {
          "label": "盐边县",
          "value": "510422"
        }
      ],
      [
        {
          "label": "江阳区",
          "value": "510502"
        },
        {
          "label": "纳溪区",
          "value": "510503"
        },
        {
          "label": "龙马潭区",
          "value": "510504"
        },
        {
          "label": "泸县",
          "value": "510521"
        },
        {
          "label": "合江县",
          "value": "510522"
        },
        {
          "label": "叙永县",
          "value": "510524"
        },
        {
          "label": "古蔺县",
          "value": "510525"
        }
      ],
      [
        {
          "label": "旌阳区",
          "value": "510603"
        },
        {
          "label": "罗江区",
          "value": "510604"
        },
        {
          "label": "中江县",
          "value": "510623"
        },
        {
          "label": "广汉市",
          "value": "510681"
        },
        {
          "label": "什邡市",
          "value": "510682"
        },
        {
          "label": "绵竹市",
          "value": "510683"
        }
      ],
      [
        {
          "label": "涪城区",
          "value": "510703"
        },
        {
          "label": "游仙区",
          "value": "510704"
        },
        {
          "label": "安州区",
          "value": "510705"
        },
        {
          "label": "三台县",
          "value": "510722"
        },
        {
          "label": "盐亭县",
          "value": "510723"
        },
        {
          "label": "梓潼县",
          "value": "510725"
        },
        {
          "label": "北川羌族自治县",
          "value": "510726"
        },
        {
          "label": "平武县",
          "value": "510727"
        },
        {
          "label": "江油市",
          "value": "510781"
        }
      ],
      [
        {
          "label": "利州区",
          "value": "510802"
        },
        {
          "label": "昭化区",
          "value": "510811"
        },
        {
          "label": "朝天区",
          "value": "510812"
        },
        {
          "label": "旺苍县",
          "value": "510821"
        },
        {
          "label": "青川县",
          "value": "510822"
        },
        {
          "label": "剑阁县",
          "value": "510823"
        },
        {
          "label": "苍溪县",
          "value": "510824"
        }
      ],
      [
        {
          "label": "船山区",
          "value": "510903"
        },
        {
          "label": "安居区",
          "value": "510904"
        },
        {
          "label": "蓬溪县",
          "value": "510921"
        },
        {
          "label": "射洪县",
          "value": "510922"
        },
        {
          "label": "大英县",
          "value": "510923"
        }
      ],
      [
        {
          "label": "市中区",
          "value": "511002"
        },
        {
          "label": "东兴区",
          "value": "511011"
        },
        {
          "label": "威远县",
          "value": "511024"
        },
        {
          "label": "资中县",
          "value": "511025"
        },
        {
          "label": "内江经济开发区",
          "value": "511071"
        },
        {
          "label": "隆昌市",
          "value": "511083"
        }
      ],
      [
        {
          "label": "市中区",
          "value": "511102"
        },
        {
          "label": "沙湾区",
          "value": "511111"
        },
        {
          "label": "五通桥区",
          "value": "511112"
        },
        {
          "label": "金口河区",
          "value": "511113"
        },
        {
          "label": "犍为县",
          "value": "511123"
        },
        {
          "label": "井研县",
          "value": "511124"
        },
        {
          "label": "夹江县",
          "value": "511126"
        },
        {
          "label": "沐川县",
          "value": "511129"
        },
        {
          "label": "峨边彝族自治县",
          "value": "511132"
        },
        {
          "label": "马边彝族自治县",
          "value": "511133"
        },
        {
          "label": "峨眉山市",
          "value": "511181"
        }
      ],
      [
        {
          "label": "顺庆区",
          "value": "511302"
        },
        {
          "label": "高坪区",
          "value": "511303"
        },
        {
          "label": "嘉陵区",
          "value": "511304"
        },
        {
          "label": "南部县",
          "value": "511321"
        },
        {
          "label": "营山县",
          "value": "511322"
        },
        {
          "label": "蓬安县",
          "value": "511323"
        },
        {
          "label": "仪陇县",
          "value": "511324"
        },
        {
          "label": "西充县",
          "value": "511325"
        },
        {
          "label": "阆中市",
          "value": "511381"
        }
      ],
      [
        {
          "label": "东坡区",
          "value": "511402"
        },
        {
          "label": "彭山区",
          "value": "511403"
        },
        {
          "label": "仁寿县",
          "value": "511421"
        },
        {
          "label": "洪雅县",
          "value": "511423"
        },
        {
          "label": "丹棱县",
          "value": "511424"
        },
        {
          "label": "青神县",
          "value": "511425"
        }
      ],
      [
        {
          "label": "翠屏区",
          "value": "511502"
        },
        {
          "label": "南溪区",
          "value": "511503"
        },
        {
          "label": "宜宾县",
          "value": "511521"
        },
        {
          "label": "江安县",
          "value": "511523"
        },
        {
          "label": "长宁县",
          "value": "511524"
        },
        {
          "label": "高县",
          "value": "511525"
        },
        {
          "label": "珙县",
          "value": "511526"
        },
        {
          "label": "筠连县",
          "value": "511527"
        },
        {
          "label": "兴文县",
          "value": "511528"
        },
        {
          "label": "屏山县",
          "value": "511529"
        }
      ],
      [
        {
          "label": "广安区",
          "value": "511602"
        },
        {
          "label": "前锋区",
          "value": "511603"
        },
        {
          "label": "岳池县",
          "value": "511621"
        },
        {
          "label": "武胜县",
          "value": "511622"
        },
        {
          "label": "邻水县",
          "value": "511623"
        },
        {
          "label": "华蓥市",
          "value": "511681"
        }
      ],
      [
        {
          "label": "通川区",
          "value": "511702"
        },
        {
          "label": "达川区",
          "value": "511703"
        },
        {
          "label": "宣汉县",
          "value": "511722"
        },
        {
          "label": "开江县",
          "value": "511723"
        },
        {
          "label": "大竹县",
          "value": "511724"
        },
        {
          "label": "渠县",
          "value": "511725"
        },
        {
          "label": "达州经济开发区",
          "value": "511771"
        },
        {
          "label": "万源市",
          "value": "511781"
        }
      ],
      [
        {
          "label": "雨城区",
          "value": "511802"
        },
        {
          "label": "名山区",
          "value": "511803"
        },
        {
          "label": "荥经县",
          "value": "511822"
        },
        {
          "label": "汉源县",
          "value": "511823"
        },
        {
          "label": "石棉县",
          "value": "511824"
        },
        {
          "label": "天全县",
          "value": "511825"
        },
        {
          "label": "芦山县",
          "value": "511826"
        },
        {
          "label": "宝兴县",
          "value": "511827"
        }
      ],
      [
        {
          "label": "巴州区",
          "value": "511902"
        },
        {
          "label": "恩阳区",
          "value": "511903"
        },
        {
          "label": "通江县",
          "value": "511921"
        },
        {
          "label": "南江县",
          "value": "511922"
        },
        {
          "label": "平昌县",
          "value": "511923"
        },
        {
          "label": "巴中经济开发区",
          "value": "511971"
        }
      ],
      [
        {
          "label": "雁江区",
          "value": "512002"
        },
        {
          "label": "安岳县",
          "value": "512021"
        },
        {
          "label": "乐至县",
          "value": "512022"
        }
      ],
      [
        {
          "label": "马尔康市",
          "value": "513201"
        },
        {
          "label": "汶川县",
          "value": "513221"
        },
        {
          "label": "理县",
          "value": "513222"
        },
        {
          "label": "茂县",
          "value": "513223"
        },
        {
          "label": "松潘县",
          "value": "513224"
        },
        {
          "label": "九寨沟县",
          "value": "513225"
        },
        {
          "label": "金川县",
          "value": "513226"
        },
        {
          "label": "小金县",
          "value": "513227"
        },
        {
          "label": "黑水县",
          "value": "513228"
        },
        {
          "label": "壤塘县",
          "value": "513230"
        },
        {
          "label": "阿坝县",
          "value": "513231"
        },
        {
          "label": "若尔盖县",
          "value": "513232"
        },
        {
          "label": "红原县",
          "value": "513233"
        }
      ],
      [
        {
          "label": "康定市",
          "value": "513301"
        },
        {
          "label": "泸定县",
          "value": "513322"
        },
        {
          "label": "丹巴县",
          "value": "513323"
        },
        {
          "label": "九龙县",
          "value": "513324"
        },
        {
          "label": "雅江县",
          "value": "513325"
        },
        {
          "label": "道孚县",
          "value": "513326"
        },
        {
          "label": "炉霍县",
          "value": "513327"
        },
        {
          "label": "甘孜县",
          "value": "513328"
        },
        {
          "label": "新龙县",
          "value": "513329"
        },
        {
          "label": "德格县",
          "value": "513330"
        },
        {
          "label": "白玉县",
          "value": "513331"
        },
        {
          "label": "石渠县",
          "value": "513332"
        },
        {
          "label": "色达县",
          "value": "513333"
        },
        {
          "label": "理塘县",
          "value": "513334"
        },
        {
          "label": "巴塘县",
          "value": "513335"
        },
        {
          "label": "乡城县",
          "value": "513336"
        },
        {
          "label": "稻城县",
          "value": "513337"
        },
        {
          "label": "得荣县",
          "value": "513338"
        }
      ],
      [
        {
          "label": "西昌市",
          "value": "513401"
        },
        {
          "label": "木里藏族自治县",
          "value": "513422"
        },
        {
          "label": "盐源县",
          "value": "513423"
        },
        {
          "label": "德昌县",
          "value": "513424"
        },
        {
          "label": "会理县",
          "value": "513425"
        },
        {
          "label": "会东县",
          "value": "513426"
        },
        {
          "label": "宁南县",
          "value": "513427"
        },
        {
          "label": "普格县",
          "value": "513428"
        },
        {
          "label": "布拖县",
          "value": "513429"
        },
        {
          "label": "金阳县",
          "value": "513430"
        },
        {
          "label": "昭觉县",
          "value": "513431"
        },
        {
          "label": "喜德县",
          "value": "513432"
        },
        {
          "label": "冕宁县",
          "value": "513433"
        },
        {
          "label": "越西县",
          "value": "513434"
        },
        {
          "label": "甘洛县",
          "value": "513435"
        },
        {
          "label": "美姑县",
          "value": "513436"
        },
        {
          "label": "雷波县",
          "value": "513437"
        }
      ]
    ],
    [
      [
        {
          "label": "南明区",
          "value": "520102"
        },
        {
          "label": "云岩区",
          "value": "520103"
        },
        {
          "label": "花溪区",
          "value": "520111"
        },
        {
          "label": "乌当区",
          "value": "520112"
        },
        {
          "label": "白云区",
          "value": "520113"
        },
        {
          "label": "观山湖区",
          "value": "520115"
        },
        {
          "label": "开阳县",
          "value": "520121"
        },
        {
          "label": "息烽县",
          "value": "520122"
        },
        {
          "label": "修文县",
          "value": "520123"
        },
        {
          "label": "清镇市",
          "value": "520181"
        }
      ],
      [
        {
          "label": "钟山区",
          "value": "520201"
        },
        {
          "label": "六枝特区",
          "value": "520203"
        },
        {
          "label": "水城县",
          "value": "520221"
        },
        {
          "label": "盘州市",
          "value": "520281"
        }
      ],
      [
        {
          "label": "红花岗区",
          "value": "520302"
        },
        {
          "label": "汇川区",
          "value": "520303"
        },
        {
          "label": "播州区",
          "value": "520304"
        },
        {
          "label": "桐梓县",
          "value": "520322"
        },
        {
          "label": "绥阳县",
          "value": "520323"
        },
        {
          "label": "正安县",
          "value": "520324"
        },
        {
          "label": "道真仡佬族苗族自治县",
          "value": "520325"
        },
        {
          "label": "务川仡佬族苗族自治县",
          "value": "520326"
        },
        {
          "label": "凤冈县",
          "value": "520327"
        },
        {
          "label": "湄潭县",
          "value": "520328"
        },
        {
          "label": "余庆县",
          "value": "520329"
        },
        {
          "label": "习水县",
          "value": "520330"
        },
        {
          "label": "赤水市",
          "value": "520381"
        },
        {
          "label": "仁怀市",
          "value": "520382"
        }
      ],
      [
        {
          "label": "西秀区",
          "value": "520402"
        },
        {
          "label": "平坝区",
          "value": "520403"
        },
        {
          "label": "普定县",
          "value": "520422"
        },
        {
          "label": "镇宁布依族苗族自治县",
          "value": "520423"
        },
        {
          "label": "关岭布依族苗族自治县",
          "value": "520424"
        },
        {
          "label": "紫云苗族布依族自治县",
          "value": "520425"
        }
      ],
      [
        {
          "label": "七星关区",
          "value": "520502"
        },
        {
          "label": "大方县",
          "value": "520521"
        },
        {
          "label": "黔西县",
          "value": "520522"
        },
        {
          "label": "金沙县",
          "value": "520523"
        },
        {
          "label": "织金县",
          "value": "520524"
        },
        {
          "label": "纳雍县",
          "value": "520525"
        },
        {
          "label": "威宁彝族回族苗族自治县",
          "value": "520526"
        },
        {
          "label": "赫章县",
          "value": "520527"
        }
      ],
      [
        {
          "label": "碧江区",
          "value": "520602"
        },
        {
          "label": "万山区",
          "value": "520603"
        },
        {
          "label": "江口县",
          "value": "520621"
        },
        {
          "label": "玉屏侗族自治县",
          "value": "520622"
        },
        {
          "label": "石阡县",
          "value": "520623"
        },
        {
          "label": "思南县",
          "value": "520624"
        },
        {
          "label": "印江土家族苗族自治县",
          "value": "520625"
        },
        {
          "label": "德江县",
          "value": "520626"
        },
        {
          "label": "沿河土家族自治县",
          "value": "520627"
        },
        {
          "label": "松桃苗族自治县",
          "value": "520628"
        }
      ],
      [
        {
          "label": "兴义市",
          "value": "522301"
        },
        {
          "label": "兴仁县",
          "value": "522322"
        },
        {
          "label": "普安县",
          "value": "522323"
        },
        {
          "label": "晴隆县",
          "value": "522324"
        },
        {
          "label": "贞丰县",
          "value": "522325"
        },
        {
          "label": "望谟县",
          "value": "522326"
        },
        {
          "label": "册亨县",
          "value": "522327"
        },
        {
          "label": "安龙县",
          "value": "522328"
        }
      ],
      [
        {
          "label": "凯里市",
          "value": "522601"
        },
        {
          "label": "黄平县",
          "value": "522622"
        },
        {
          "label": "施秉县",
          "value": "522623"
        },
        {
          "label": "三穗县",
          "value": "522624"
        },
        {
          "label": "镇远县",
          "value": "522625"
        },
        {
          "label": "岑巩县",
          "value": "522626"
        },
        {
          "label": "天柱县",
          "value": "522627"
        },
        {
          "label": "锦屏县",
          "value": "522628"
        },
        {
          "label": "剑河县",
          "value": "522629"
        },
        {
          "label": "台江县",
          "value": "522630"
        },
        {
          "label": "黎平县",
          "value": "522631"
        },
        {
          "label": "榕江县",
          "value": "522632"
        },
        {
          "label": "从江县",
          "value": "522633"
        },
        {
          "label": "雷山县",
          "value": "522634"
        },
        {
          "label": "麻江县",
          "value": "522635"
        },
        {
          "label": "丹寨县",
          "value": "522636"
        }
      ],
      [
        {
          "label": "都匀市",
          "value": "522701"
        },
        {
          "label": "福泉市",
          "value": "522702"
        },
        {
          "label": "荔波县",
          "value": "522722"
        },
        {
          "label": "贵定县",
          "value": "522723"
        },
        {
          "label": "瓮安县",
          "value": "522725"
        },
        {
          "label": "独山县",
          "value": "522726"
        },
        {
          "label": "平塘县",
          "value": "522727"
        },
        {
          "label": "罗甸县",
          "value": "522728"
        },
        {
          "label": "长顺县",
          "value": "522729"
        },
        {
          "label": "龙里县",
          "value": "522730"
        },
        {
          "label": "惠水县",
          "value": "522731"
        },
        {
          "label": "三都水族自治县",
          "value": "522732"
        }
      ]
    ],
    [
      [
        {
          "label": "五华区",
          "value": "530102"
        },
        {
          "label": "盘龙区",
          "value": "530103"
        },
        {
          "label": "官渡区",
          "value": "530111"
        },
        {
          "label": "西山区",
          "value": "530112"
        },
        {
          "label": "东川区",
          "value": "530113"
        },
        {
          "label": "呈贡区",
          "value": "530114"
        },
        {
          "label": "晋宁区",
          "value": "530115"
        },
        {
          "label": "富民县",
          "value": "530124"
        },
        {
          "label": "宜良县",
          "value": "530125"
        },
        {
          "label": "石林彝族自治县",
          "value": "530126"
        },
        {
          "label": "嵩明县",
          "value": "530127"
        },
        {
          "label": "禄劝彝族苗族自治县",
          "value": "530128"
        },
        {
          "label": "寻甸回族彝族自治县",
          "value": "530129"
        },
        {
          "label": "安宁市",
          "value": "530181"
        }
      ],
      [
        {
          "label": "麒麟区",
          "value": "530302"
        },
        {
          "label": "沾益区",
          "value": "530303"
        },
        {
          "label": "马龙县",
          "value": "530321"
        },
        {
          "label": "陆良县",
          "value": "530322"
        },
        {
          "label": "师宗县",
          "value": "530323"
        },
        {
          "label": "罗平县",
          "value": "530324"
        },
        {
          "label": "富源县",
          "value": "530325"
        },
        {
          "label": "会泽县",
          "value": "530326"
        },
        {
          "label": "宣威市",
          "value": "530381"
        }
      ],
      [
        {
          "label": "红塔区",
          "value": "530402"
        },
        {
          "label": "江川区",
          "value": "530403"
        },
        {
          "label": "澄江县",
          "value": "530422"
        },
        {
          "label": "通海县",
          "value": "530423"
        },
        {
          "label": "华宁县",
          "value": "530424"
        },
        {
          "label": "易门县",
          "value": "530425"
        },
        {
          "label": "峨山彝族自治县",
          "value": "530426"
        },
        {
          "label": "新平彝族傣族自治县",
          "value": "530427"
        },
        {
          "label": "元江哈尼族彝族傣族自治县",
          "value": "530428"
        }
      ],
      [
        {
          "label": "隆阳区",
          "value": "530502"
        },
        {
          "label": "施甸县",
          "value": "530521"
        },
        {
          "label": "龙陵县",
          "value": "530523"
        },
        {
          "label": "昌宁县",
          "value": "530524"
        },
        {
          "label": "腾冲市",
          "value": "530581"
        }
      ],
      [
        {
          "label": "昭阳区",
          "value": "530602"
        },
        {
          "label": "鲁甸县",
          "value": "530621"
        },
        {
          "label": "巧家县",
          "value": "530622"
        },
        {
          "label": "盐津县",
          "value": "530623"
        },
        {
          "label": "大关县",
          "value": "530624"
        },
        {
          "label": "永善县",
          "value": "530625"
        },
        {
          "label": "绥江县",
          "value": "530626"
        },
        {
          "label": "镇雄县",
          "value": "530627"
        },
        {
          "label": "彝良县",
          "value": "530628"
        },
        {
          "label": "威信县",
          "value": "530629"
        },
        {
          "label": "水富县",
          "value": "530630"
        }
      ],
      [
        {
          "label": "古城区",
          "value": "530702"
        },
        {
          "label": "玉龙纳西族自治县",
          "value": "530721"
        },
        {
          "label": "永胜县",
          "value": "530722"
        },
        {
          "label": "华坪县",
          "value": "530723"
        },
        {
          "label": "宁蒗彝族自治县",
          "value": "530724"
        }
      ],
      [
        {
          "label": "思茅区",
          "value": "530802"
        },
        {
          "label": "宁洱哈尼族彝族自治县",
          "value": "530821"
        },
        {
          "label": "墨江哈尼族自治县",
          "value": "530822"
        },
        {
          "label": "景东彝族自治县",
          "value": "530823"
        },
        {
          "label": "景谷傣族彝族自治县",
          "value": "530824"
        },
        {
          "label": "镇沅彝族哈尼族拉祜族自治县",
          "value": "530825"
        },
        {
          "label": "江城哈尼族彝族自治县",
          "value": "530826"
        },
        {
          "label": "孟连傣族拉祜族佤族自治县",
          "value": "530827"
        },
        {
          "label": "澜沧拉祜族自治县",
          "value": "530828"
        },
        {
          "label": "西盟佤族自治县",
          "value": "530829"
        }
      ],
      [
        {
          "label": "临翔区",
          "value": "530902"
        },
        {
          "label": "凤庆县",
          "value": "530921"
        },
        {
          "label": "云县",
          "value": "530922"
        },
        {
          "label": "永德县",
          "value": "530923"
        },
        {
          "label": "镇康县",
          "value": "530924"
        },
        {
          "label": "双江拉祜族佤族布朗族傣族自治县",
          "value": "530925"
        },
        {
          "label": "耿马傣族佤族自治县",
          "value": "530926"
        },
        {
          "label": "沧源佤族自治县",
          "value": "530927"
        }
      ],
      [
        {
          "label": "楚雄市",
          "value": "532301"
        },
        {
          "label": "双柏县",
          "value": "532322"
        },
        {
          "label": "牟定县",
          "value": "532323"
        },
        {
          "label": "南华县",
          "value": "532324"
        },
        {
          "label": "姚安县",
          "value": "532325"
        },
        {
          "label": "大姚县",
          "value": "532326"
        },
        {
          "label": "永仁县",
          "value": "532327"
        },
        {
          "label": "元谋县",
          "value": "532328"
        },
        {
          "label": "武定县",
          "value": "532329"
        },
        {
          "label": "禄丰县",
          "value": "532331"
        }
      ],
      [
        {
          "label": "个旧市",
          "value": "532501"
        },
        {
          "label": "开远市",
          "value": "532502"
        },
        {
          "label": "蒙自市",
          "value": "532503"
        },
        {
          "label": "弥勒市",
          "value": "532504"
        },
        {
          "label": "屏边苗族自治县",
          "value": "532523"
        },
        {
          "label": "建水县",
          "value": "532524"
        },
        {
          "label": "石屏县",
          "value": "532525"
        },
        {
          "label": "泸西县",
          "value": "532527"
        },
        {
          "label": "元阳县",
          "value": "532528"
        },
        {
          "label": "红河县",
          "value": "532529"
        },
        {
          "label": "金平苗族瑶族傣族自治县",
          "value": "532530"
        },
        {
          "label": "绿春县",
          "value": "532531"
        },
        {
          "label": "河口瑶族自治县",
          "value": "532532"
        }
      ],
      [
        {
          "label": "文山市",
          "value": "532601"
        },
        {
          "label": "砚山县",
          "value": "532622"
        },
        {
          "label": "西畴县",
          "value": "532623"
        },
        {
          "label": "麻栗坡县",
          "value": "532624"
        },
        {
          "label": "马关县",
          "value": "532625"
        },
        {
          "label": "丘北县",
          "value": "532626"
        },
        {
          "label": "广南县",
          "value": "532627"
        },
        {
          "label": "富宁县",
          "value": "532628"
        }
      ],
      [
        {
          "label": "景洪市",
          "value": "532801"
        },
        {
          "label": "勐海县",
          "value": "532822"
        },
        {
          "label": "勐腊县",
          "value": "532823"
        }
      ],
      [
        {
          "label": "大理市",
          "value": "532901"
        },
        {
          "label": "漾濞彝族自治县",
          "value": "532922"
        },
        {
          "label": "祥云县",
          "value": "532923"
        },
        {
          "label": "宾川县",
          "value": "532924"
        },
        {
          "label": "弥渡县",
          "value": "532925"
        },
        {
          "label": "南涧彝族自治县",
          "value": "532926"
        },
        {
          "label": "巍山彝族回族自治县",
          "value": "532927"
        },
        {
          "label": "永平县",
          "value": "532928"
        },
        {
          "label": "云龙县",
          "value": "532929"
        },
        {
          "label": "洱源县",
          "value": "532930"
        },
        {
          "label": "剑川县",
          "value": "532931"
        },
        {
          "label": "鹤庆县",
          "value": "532932"
        }
      ],
      [
        {
          "label": "瑞丽市",
          "value": "533102"
        },
        {
          "label": "芒市",
          "value": "533103"
        },
        {
          "label": "梁河县",
          "value": "533122"
        },
        {
          "label": "盈江县",
          "value": "533123"
        },
        {
          "label": "陇川县",
          "value": "533124"
        }
      ],
      [
        {
          "label": "泸水市",
          "value": "533301"
        },
        {
          "label": "福贡县",
          "value": "533323"
        },
        {
          "label": "贡山独龙族怒族自治县",
          "value": "533324"
        },
        {
          "label": "兰坪白族普米族自治县",
          "value": "533325"
        }
      ],
      [
        {
          "label": "香格里拉市",
          "value": "533401"
        },
        {
          "label": "德钦县",
          "value": "533422"
        },
        {
          "label": "维西傈僳族自治县",
          "value": "533423"
        }
      ]
    ],
    [
      [
        {
          "label": "城关区",
          "value": "540102"
        },
        {
          "label": "堆龙德庆区",
          "value": "540103"
        },
        {
          "label": "林周县",
          "value": "540121"
        },
        {
          "label": "当雄县",
          "value": "540122"
        },
        {
          "label": "尼木县",
          "value": "540123"
        },
        {
          "label": "曲水县",
          "value": "540124"
        },
        {
          "label": "达孜县",
          "value": "540126"
        },
        {
          "label": "墨竹工卡县",
          "value": "540127"
        },
        {
          "label": "格尔木藏青工业园区",
          "value": "540171"
        },
        {
          "label": "拉萨经济技术开发区",
          "value": "540172"
        },
        {
          "label": "西藏文化旅游创意园区",
          "value": "540173"
        },
        {
          "label": "达孜工业园区",
          "value": "540174"
        }
      ],
      [
        {
          "label": "桑珠孜区",
          "value": "540202"
        },
        {
          "label": "南木林县",
          "value": "540221"
        },
        {
          "label": "江孜县",
          "value": "540222"
        },
        {
          "label": "定日县",
          "value": "540223"
        },
        {
          "label": "萨迦县",
          "value": "540224"
        },
        {
          "label": "拉孜县",
          "value": "540225"
        },
        {
          "label": "昂仁县",
          "value": "540226"
        },
        {
          "label": "谢通门县",
          "value": "540227"
        },
        {
          "label": "白朗县",
          "value": "540228"
        },
        {
          "label": "仁布县",
          "value": "540229"
        },
        {
          "label": "康马县",
          "value": "540230"
        },
        {
          "label": "定结县",
          "value": "540231"
        },
        {
          "label": "仲巴县",
          "value": "540232"
        },
        {
          "label": "亚东县",
          "value": "540233"
        },
        {
          "label": "吉隆县",
          "value": "540234"
        },
        {
          "label": "聂拉木县",
          "value": "540235"
        },
        {
          "label": "萨嘎县",
          "value": "540236"
        },
        {
          "label": "岗巴县",
          "value": "540237"
        }
      ],
      [
        {
          "label": "卡若区",
          "value": "540302"
        },
        {
          "label": "江达县",
          "value": "540321"
        },
        {
          "label": "贡觉县",
          "value": "540322"
        },
        {
          "label": "类乌齐县",
          "value": "540323"
        },
        {
          "label": "丁青县",
          "value": "540324"
        },
        {
          "label": "察雅县",
          "value": "540325"
        },
        {
          "label": "八宿县",
          "value": "540326"
        },
        {
          "label": "左贡县",
          "value": "540327"
        },
        {
          "label": "芒康县",
          "value": "540328"
        },
        {
          "label": "洛隆县",
          "value": "540329"
        },
        {
          "label": "边坝县",
          "value": "540330"
        }
      ],
      [
        {
          "label": "巴宜区",
          "value": "540402"
        },
        {
          "label": "工布江达县",
          "value": "540421"
        },
        {
          "label": "米林县",
          "value": "540422"
        },
        {
          "label": "墨脱县",
          "value": "540423"
        },
        {
          "label": "波密县",
          "value": "540424"
        },
        {
          "label": "察隅县",
          "value": "540425"
        },
        {
          "label": "朗县",
          "value": "540426"
        }
      ],
      [
        {
          "label": "乃东区",
          "value": "540502"
        },
        {
          "label": "扎囊县",
          "value": "540521"
        },
        {
          "label": "贡嘎县",
          "value": "540522"
        },
        {
          "label": "桑日县",
          "value": "540523"
        },
        {
          "label": "琼结县",
          "value": "540524"
        },
        {
          "label": "曲松县",
          "value": "540525"
        },
        {
          "label": "措美县",
          "value": "540526"
        },
        {
          "label": "洛扎县",
          "value": "540527"
        },
        {
          "label": "加查县",
          "value": "540528"
        },
        {
          "label": "隆子县",
          "value": "540529"
        },
        {
          "label": "错那县",
          "value": "540530"
        },
        {
          "label": "浪卡子县",
          "value": "540531"
        }
      ],
      [
        {
          "label": "那曲县",
          "value": "542421"
        },
        {
          "label": "嘉黎县",
          "value": "542422"
        },
        {
          "label": "比如县",
          "value": "542423"
        },
        {
          "label": "聂荣县",
          "value": "542424"
        },
        {
          "label": "安多县",
          "value": "542425"
        },
        {
          "label": "申扎县",
          "value": "542426"
        },
        {
          "label": "索县",
          "value": "542427"
        },
        {
          "label": "班戈县",
          "value": "542428"
        },
        {
          "label": "巴青县",
          "value": "542429"
        },
        {
          "label": "尼玛县",
          "value": "542430"
        },
        {
          "label": "双湖县",
          "value": "542431"
        }
      ],
      [
        {
          "label": "普兰县",
          "value": "542521"
        },
        {
          "label": "札达县",
          "value": "542522"
        },
        {
          "label": "噶尔县",
          "value": "542523"
        },
        {
          "label": "日土县",
          "value": "542524"
        },
        {
          "label": "革吉县",
          "value": "542525"
        },
        {
          "label": "改则县",
          "value": "542526"
        },
        {
          "label": "措勤县",
          "value": "542527"
        }
      ]
    ],
    [
      [
        {
          "label": "新城区",
          "value": "610102"
        },
        {
          "label": "碑林区",
          "value": "610103"
        },
        {
          "label": "莲湖区",
          "value": "610104"
        },
        {
          "label": "灞桥区",
          "value": "610111"
        },
        {
          "label": "未央区",
          "value": "610112"
        },
        {
          "label": "雁塔区",
          "value": "610113"
        },
        {
          "label": "阎良区",
          "value": "610114"
        },
        {
          "label": "临潼区",
          "value": "610115"
        },
        {
          "label": "长安区",
          "value": "610116"
        },
        {
          "label": "高陵区",
          "value": "610117"
        },
        {
          "label": "鄠邑区",
          "value": "610118"
        },
        {
          "label": "蓝田县",
          "value": "610122"
        },
        {
          "label": "周至县",
          "value": "610124"
        }
      ],
      [
        {
          "label": "王益区",
          "value": "610202"
        },
        {
          "label": "印台区",
          "value": "610203"
        },
        {
          "label": "耀州区",
          "value": "610204"
        },
        {
          "label": "宜君县",
          "value": "610222"
        }
      ],
      [
        {
          "label": "渭滨区",
          "value": "610302"
        },
        {
          "label": "金台区",
          "value": "610303"
        },
        {
          "label": "陈仓区",
          "value": "610304"
        },
        {
          "label": "凤翔县",
          "value": "610322"
        },
        {
          "label": "岐山县",
          "value": "610323"
        },
        {
          "label": "扶风县",
          "value": "610324"
        },
        {
          "label": "眉县",
          "value": "610326"
        },
        {
          "label": "陇县",
          "value": "610327"
        },
        {
          "label": "千阳县",
          "value": "610328"
        },
        {
          "label": "麟游县",
          "value": "610329"
        },
        {
          "label": "凤县",
          "value": "610330"
        },
        {
          "label": "太白县",
          "value": "610331"
        }
      ],
      [
        {
          "label": "秦都区",
          "value": "610402"
        },
        {
          "label": "杨陵区",
          "value": "610403"
        },
        {
          "label": "渭城区",
          "value": "610404"
        },
        {
          "label": "三原县",
          "value": "610422"
        },
        {
          "label": "泾阳县",
          "value": "610423"
        },
        {
          "label": "乾县",
          "value": "610424"
        },
        {
          "label": "礼泉县",
          "value": "610425"
        },
        {
          "label": "永寿县",
          "value": "610426"
        },
        {
          "label": "彬县",
          "value": "610427"
        },
        {
          "label": "长武县",
          "value": "610428"
        },
        {
          "label": "旬邑县",
          "value": "610429"
        },
        {
          "label": "淳化县",
          "value": "610430"
        },
        {
          "label": "武功县",
          "value": "610431"
        },
        {
          "label": "兴平市",
          "value": "610481"
        }
      ],
      [
        {
          "label": "临渭区",
          "value": "610502"
        },
        {
          "label": "华州区",
          "value": "610503"
        },
        {
          "label": "潼关县",
          "value": "610522"
        },
        {
          "label": "大荔县",
          "value": "610523"
        },
        {
          "label": "合阳县",
          "value": "610524"
        },
        {
          "label": "澄城县",
          "value": "610525"
        },
        {
          "label": "蒲城县",
          "value": "610526"
        },
        {
          "label": "白水县",
          "value": "610527"
        },
        {
          "label": "富平县",
          "value": "610528"
        },
        {
          "label": "韩城市",
          "value": "610581"
        },
        {
          "label": "华阴市",
          "value": "610582"
        }
      ],
      [
        {
          "label": "宝塔区",
          "value": "610602"
        },
        {
          "label": "安塞区",
          "value": "610603"
        },
        {
          "label": "延长县",
          "value": "610621"
        },
        {
          "label": "延川县",
          "value": "610622"
        },
        {
          "label": "子长县",
          "value": "610623"
        },
        {
          "label": "志丹县",
          "value": "610625"
        },
        {
          "label": "吴起县",
          "value": "610626"
        },
        {
          "label": "甘泉县",
          "value": "610627"
        },
        {
          "label": "富县",
          "value": "610628"
        },
        {
          "label": "洛川县",
          "value": "610629"
        },
        {
          "label": "宜川县",
          "value": "610630"
        },
        {
          "label": "黄龙县",
          "value": "610631"
        },
        {
          "label": "黄陵县",
          "value": "610632"
        }
      ],
      [
        {
          "label": "汉台区",
          "value": "610702"
        },
        {
          "label": "南郑区",
          "value": "610703"
        },
        {
          "label": "城固县",
          "value": "610722"
        },
        {
          "label": "洋县",
          "value": "610723"
        },
        {
          "label": "西乡县",
          "value": "610724"
        },
        {
          "label": "勉县",
          "value": "610725"
        },
        {
          "label": "宁强县",
          "value": "610726"
        },
        {
          "label": "略阳县",
          "value": "610727"
        },
        {
          "label": "镇巴县",
          "value": "610728"
        },
        {
          "label": "留坝县",
          "value": "610729"
        },
        {
          "label": "佛坪县",
          "value": "610730"
        }
      ],
      [
        {
          "label": "榆阳区",
          "value": "610802"
        },
        {
          "label": "横山区",
          "value": "610803"
        },
        {
          "label": "府谷县",
          "value": "610822"
        },
        {
          "label": "靖边县",
          "value": "610824"
        },
        {
          "label": "定边县",
          "value": "610825"
        },
        {
          "label": "绥德县",
          "value": "610826"
        },
        {
          "label": "米脂县",
          "value": "610827"
        },
        {
          "label": "佳县",
          "value": "610828"
        },
        {
          "label": "吴堡县",
          "value": "610829"
        },
        {
          "label": "清涧县",
          "value": "610830"
        },
        {
          "label": "子洲县",
          "value": "610831"
        },
        {
          "label": "神木市",
          "value": "610881"
        }
      ],
      [
        {
          "label": "汉滨区",
          "value": "610902"
        },
        {
          "label": "汉阴县",
          "value": "610921"
        },
        {
          "label": "石泉县",
          "value": "610922"
        },
        {
          "label": "宁陕县",
          "value": "610923"
        },
        {
          "label": "紫阳县",
          "value": "610924"
        },
        {
          "label": "岚皋县",
          "value": "610925"
        },
        {
          "label": "平利县",
          "value": "610926"
        },
        {
          "label": "镇坪县",
          "value": "610927"
        },
        {
          "label": "旬阳县",
          "value": "610928"
        },
        {
          "label": "白河县",
          "value": "610929"
        }
      ],
      [
        {
          "label": "商州区",
          "value": "611002"
        },
        {
          "label": "洛南县",
          "value": "611021"
        },
        {
          "label": "丹凤县",
          "value": "611022"
        },
        {
          "label": "商南县",
          "value": "611023"
        },
        {
          "label": "山阳县",
          "value": "611024"
        },
        {
          "label": "镇安县",
          "value": "611025"
        },
        {
          "label": "柞水县",
          "value": "611026"
        }
      ]
    ],
    [
      [
        {
          "label": "城关区",
          "value": "620102"
        },
        {
          "label": "七里河区",
          "value": "620103"
        },
        {
          "label": "西固区",
          "value": "620104"
        },
        {
          "label": "安宁区",
          "value": "620105"
        },
        {
          "label": "红古区",
          "value": "620111"
        },
        {
          "label": "永登县",
          "value": "620121"
        },
        {
          "label": "皋兰县",
          "value": "620122"
        },
        {
          "label": "榆中县",
          "value": "620123"
        },
        {
          "label": "兰州新区",
          "value": "620171"
        }
      ],
      [{
        "label": "嘉峪关市",
        "value": "620201"
      }],
      [
        {
          "label": "金川区",
          "value": "620302"
        },
        {
          "label": "永昌县",
          "value": "620321"
        }
      ],
      [
        {
          "label": "白银区",
          "value": "620402"
        },
        {
          "label": "平川区",
          "value": "620403"
        },
        {
          "label": "靖远县",
          "value": "620421"
        },
        {
          "label": "会宁县",
          "value": "620422"
        },
        {
          "label": "景泰县",
          "value": "620423"
        }
      ],
      [
        {
          "label": "秦州区",
          "value": "620502"
        },
        {
          "label": "麦积区",
          "value": "620503"
        },
        {
          "label": "清水县",
          "value": "620521"
        },
        {
          "label": "秦安县",
          "value": "620522"
        },
        {
          "label": "甘谷县",
          "value": "620523"
        },
        {
          "label": "武山县",
          "value": "620524"
        },
        {
          "label": "张家川回族自治县",
          "value": "620525"
        }
      ],
      [
        {
          "label": "凉州区",
          "value": "620602"
        },
        {
          "label": "民勤县",
          "value": "620621"
        },
        {
          "label": "古浪县",
          "value": "620622"
        },
        {
          "label": "天祝藏族自治县",
          "value": "620623"
        }
      ],
      [
        {
          "label": "甘州区",
          "value": "620702"
        },
        {
          "label": "肃南裕固族自治县",
          "value": "620721"
        },
        {
          "label": "民乐县",
          "value": "620722"
        },
        {
          "label": "临泽县",
          "value": "620723"
        },
        {
          "label": "高台县",
          "value": "620724"
        },
        {
          "label": "山丹县",
          "value": "620725"
        }
      ],
      [
        {
          "label": "崆峒区",
          "value": "620802"
        },
        {
          "label": "泾川县",
          "value": "620821"
        },
        {
          "label": "灵台县",
          "value": "620822"
        },
        {
          "label": "崇信县",
          "value": "620823"
        },
        {
          "label": "华亭县",
          "value": "620824"
        },
        {
          "label": "庄浪县",
          "value": "620825"
        },
        {
          "label": "静宁县",
          "value": "620826"
        },
        {
          "label": "平凉工业园区",
          "value": "620871"
        }
      ],
      [
        {
          "label": "肃州区",
          "value": "620902"
        },
        {
          "label": "金塔县",
          "value": "620921"
        },
        {
          "label": "瓜州县",
          "value": "620922"
        },
        {
          "label": "肃北蒙古族自治县",
          "value": "620923"
        },
        {
          "label": "阿克塞哈萨克族自治县",
          "value": "620924"
        },
        {
          "label": "玉门市",
          "value": "620981"
        },
        {
          "label": "敦煌市",
          "value": "620982"
        }
      ],
      [
        {
          "label": "西峰区",
          "value": "621002"
        },
        {
          "label": "庆城县",
          "value": "621021"
        },
        {
          "label": "环县",
          "value": "621022"
        },
        {
          "label": "华池县",
          "value": "621023"
        },
        {
          "label": "合水县",
          "value": "621024"
        },
        {
          "label": "正宁县",
          "value": "621025"
        },
        {
          "label": "宁县",
          "value": "621026"
        },
        {
          "label": "镇原县",
          "value": "621027"
        }
      ],
      [
        {
          "label": "安定区",
          "value": "621102"
        },
        {
          "label": "通渭县",
          "value": "621121"
        },
        {
          "label": "陇西县",
          "value": "621122"
        },
        {
          "label": "渭源县",
          "value": "621123"
        },
        {
          "label": "临洮县",
          "value": "621124"
        },
        {
          "label": "漳县",
          "value": "621125"
        },
        {
          "label": "岷县",
          "value": "621126"
        }
      ],
      [
        {
          "label": "武都区",
          "value": "621202"
        },
        {
          "label": "成县",
          "value": "621221"
        },
        {
          "label": "文县",
          "value": "621222"
        },
        {
          "label": "宕昌县",
          "value": "621223"
        },
        {
          "label": "康县",
          "value": "621224"
        },
        {
          "label": "西和县",
          "value": "621225"
        },
        {
          "label": "礼县",
          "value": "621226"
        },
        {
          "label": "徽县",
          "value": "621227"
        },
        {
          "label": "两当县",
          "value": "621228"
        }
      ],
      [
        {
          "label": "临夏市",
          "value": "622901"
        },
        {
          "label": "临夏县",
          "value": "622921"
        },
        {
          "label": "康乐县",
          "value": "622922"
        },
        {
          "label": "永靖县",
          "value": "622923"
        },
        {
          "label": "广河县",
          "value": "622924"
        },
        {
          "label": "和政县",
          "value": "622925"
        },
        {
          "label": "东乡族自治县",
          "value": "622926"
        },
        {
          "label": "积石山保安族东乡族撒拉族自治县",
          "value": "622927"
        }
      ],
      [
        {
          "label": "合作市",
          "value": "623001"
        },
        {
          "label": "临潭县",
          "value": "623021"
        },
        {
          "label": "卓尼县",
          "value": "623022"
        },
        {
          "label": "舟曲县",
          "value": "623023"
        },
        {
          "label": "迭部县",
          "value": "623024"
        },
        {
          "label": "玛曲县",
          "value": "623025"
        },
        {
          "label": "碌曲县",
          "value": "623026"
        },
        {
          "label": "夏河县",
          "value": "623027"
        }
      ]
    ],
    [
      [
        {
          "label": "城东区",
          "value": "630102"
        },
        {
          "label": "城中区",
          "value": "630103"
        },
        {
          "label": "城西区",
          "value": "630104"
        },
        {
          "label": "城北区",
          "value": "630105"
        },
        {
          "label": "大通回族土族自治县",
          "value": "630121"
        },
        {
          "label": "湟中县",
          "value": "630122"
        },
        {
          "label": "湟源县",
          "value": "630123"
        }
      ],
      [
        {
          "label": "乐都区",
          "value": "630202"
        },
        {
          "label": "平安区",
          "value": "630203"
        },
        {
          "label": "民和回族土族自治县",
          "value": "630222"
        },
        {
          "label": "互助土族自治县",
          "value": "630223"
        },
        {
          "label": "化隆回族自治县",
          "value": "630224"
        },
        {
          "label": "循化撒拉族自治县",
          "value": "630225"
        }
      ],
      [
        {
          "label": "门源回族自治县",
          "value": "632221"
        },
        {
          "label": "祁连县",
          "value": "632222"
        },
        {
          "label": "海晏县",
          "value": "632223"
        },
        {
          "label": "刚察县",
          "value": "632224"
        }
      ],
      [
        {
          "label": "同仁县",
          "value": "632321"
        },
        {
          "label": "尖扎县",
          "value": "632322"
        },
        {
          "label": "泽库县",
          "value": "632323"
        },
        {
          "label": "河南蒙古族自治县",
          "value": "632324"
        }
      ],
      [
        {
          "label": "共和县",
          "value": "632521"
        },
        {
          "label": "同德县",
          "value": "632522"
        },
        {
          "label": "贵德县",
          "value": "632523"
        },
        {
          "label": "兴海县",
          "value": "632524"
        },
        {
          "label": "贵南县",
          "value": "632525"
        }
      ],
      [
        {
          "label": "玛沁县",
          "value": "632621"
        },
        {
          "label": "班玛县",
          "value": "632622"
        },
        {
          "label": "甘德县",
          "value": "632623"
        },
        {
          "label": "达日县",
          "value": "632624"
        },
        {
          "label": "久治县",
          "value": "632625"
        },
        {
          "label": "玛多县",
          "value": "632626"
        }
      ],
      [
        {
          "label": "玉树市",
          "value": "632701"
        },
        {
          "label": "杂多县",
          "value": "632722"
        },
        {
          "label": "称多县",
          "value": "632723"
        },
        {
          "label": "治多县",
          "value": "632724"
        },
        {
          "label": "囊谦县",
          "value": "632725"
        },
        {
          "label": "曲麻莱县",
          "value": "632726"
        }
      ],
      [
        {
          "label": "格尔木市",
          "value": "632801"
        },
        {
          "label": "德令哈市",
          "value": "632802"
        },
        {
          "label": "乌兰县",
          "value": "632821"
        },
        {
          "label": "都兰县",
          "value": "632822"
        },
        {
          "label": "天峻县",
          "value": "632823"
        },
        {
          "label": "大柴旦行政委员会",
          "value": "632857"
        },
        {
          "label": "冷湖行政委员会",
          "value": "632858"
        },
        {
          "label": "茫崖行政委员会",
          "value": "632859"
        }
      ]
    ],
    [
      [
        {
          "label": "兴庆区",
          "value": "640104"
        },
        {
          "label": "西夏区",
          "value": "640105"
        },
        {
          "label": "金凤区",
          "value": "640106"
        },
        {
          "label": "永宁县",
          "value": "640121"
        },
        {
          "label": "贺兰县",
          "value": "640122"
        },
        {
          "label": "灵武市",
          "value": "640181"
        }
      ],
      [
        {
          "label": "大武口区",
          "value": "640202"
        },
        {
          "label": "惠农区",
          "value": "640205"
        },
        {
          "label": "平罗县",
          "value": "640221"
        }
      ],
      [
        {
          "label": "利通区",
          "value": "640302"
        },
        {
          "label": "红寺堡区",
          "value": "640303"
        },
        {
          "label": "盐池县",
          "value": "640323"
        },
        {
          "label": "同心县",
          "value": "640324"
        },
        {
          "label": "青铜峡市",
          "value": "640381"
        }
      ],
      [
        {
          "label": "原州区",
          "value": "640402"
        },
        {
          "label": "西吉县",
          "value": "640422"
        },
        {
          "label": "隆德县",
          "value": "640423"
        },
        {
          "label": "泾源县",
          "value": "640424"
        },
        {
          "label": "彭阳县",
          "value": "640425"
        }
      ],
      [
        {
          "label": "沙坡头区",
          "value": "640502"
        },
        {
          "label": "中宁县",
          "value": "640521"
        },
        {
          "label": "海原县",
          "value": "640522"
        }
      ]
    ],
    [
      [
        {
          "label": "天山区",
          "value": "650102"
        },
        {
          "label": "沙依巴克区",
          "value": "650103"
        },
        {
          "label": "新市区",
          "value": "650104"
        },
        {
          "label": "水磨沟区",
          "value": "650105"
        },
        {
          "label": "头屯河区",
          "value": "650106"
        },
        {
          "label": "达坂城区",
          "value": "650107"
        },
        {
          "label": "米东区",
          "value": "650109"
        },
        {
          "label": "乌鲁木齐县",
          "value": "650121"
        },
        {
          "label": "乌鲁木齐经济技术开发区",
          "value": "650171"
        },
        {
          "label": "乌鲁木齐高新技术产业开发区",
          "value": "650172"
        }
      ],
      [
        {
          "label": "独山子区",
          "value": "650202"
        },
        {
          "label": "克拉玛依区",
          "value": "650203"
        },
        {
          "label": "白碱滩区",
          "value": "650204"
        },
        {
          "label": "乌尔禾区",
          "value": "650205"
        }
      ],
      [
        {
          "label": "高昌区",
          "value": "650402"
        },
        {
          "label": "鄯善县",
          "value": "650421"
        },
        {
          "label": "托克逊县",
          "value": "650422"
        }
      ],
      [
        {
          "label": "伊州区",
          "value": "650502"
        },
        {
          "label": "巴里坤哈萨克自治县",
          "value": "650521"
        },
        {
          "label": "伊吾县",
          "value": "650522"
        }
      ],
      [
        {
          "label": "昌吉市",
          "value": "652301"
        },
        {
          "label": "阜康市",
          "value": "652302"
        },
        {
          "label": "呼图壁县",
          "value": "652323"
        },
        {
          "label": "玛纳斯县",
          "value": "652324"
        },
        {
          "label": "奇台县",
          "value": "652325"
        },
        {
          "label": "吉木萨尔县",
          "value": "652327"
        },
        {
          "label": "木垒哈萨克自治县",
          "value": "652328"
        }
      ],
      [
        {
          "label": "博乐市",
          "value": "652701"
        },
        {
          "label": "阿拉山口市",
          "value": "652702"
        },
        {
          "label": "精河县",
          "value": "652722"
        },
        {
          "label": "温泉县",
          "value": "652723"
        }
      ],
      [
        {
          "label": "库尔勒市",
          "value": "652801"
        },
        {
          "label": "轮台县",
          "value": "652822"
        },
        {
          "label": "尉犁县",
          "value": "652823"
        },
        {
          "label": "若羌县",
          "value": "652824"
        },
        {
          "label": "且末县",
          "value": "652825"
        },
        {
          "label": "焉耆回族自治县",
          "value": "652826"
        },
        {
          "label": "和静县",
          "value": "652827"
        },
        {
          "label": "和硕县",
          "value": "652828"
        },
        {
          "label": "博湖县",
          "value": "652829"
        },
        {
          "label": "库尔勒经济技术开发区",
          "value": "652871"
        }
      ],
      [
        {
          "label": "阿克苏市",
          "value": "652901"
        },
        {
          "label": "温宿县",
          "value": "652922"
        },
        {
          "label": "库车县",
          "value": "652923"
        },
        {
          "label": "沙雅县",
          "value": "652924"
        },
        {
          "label": "新和县",
          "value": "652925"
        },
        {
          "label": "拜城县",
          "value": "652926"
        },
        {
          "label": "乌什县",
          "value": "652927"
        },
        {
          "label": "阿瓦提县",
          "value": "652928"
        },
        {
          "label": "柯坪县",
          "value": "652929"
        }
      ],
      [
        {
          "label": "阿图什市",
          "value": "653001"
        },
        {
          "label": "阿克陶县",
          "value": "653022"
        },
        {
          "label": "阿合奇县",
          "value": "653023"
        },
        {
          "label": "乌恰县",
          "value": "653024"
        }
      ],
      [
        {
          "label": "喀什市",
          "value": "653101"
        },
        {
          "label": "疏附县",
          "value": "653121"
        },
        {
          "label": "疏勒县",
          "value": "653122"
        },
        {
          "label": "英吉沙县",
          "value": "653123"
        },
        {
          "label": "泽普县",
          "value": "653124"
        },
        {
          "label": "莎车县",
          "value": "653125"
        },
        {
          "label": "叶城县",
          "value": "653126"
        },
        {
          "label": "麦盖提县",
          "value": "653127"
        },
        {
          "label": "岳普湖县",
          "value": "653128"
        },
        {
          "label": "伽师县",
          "value": "653129"
        },
        {
          "label": "巴楚县",
          "value": "653130"
        },
        {
          "label": "塔什库尔干塔吉克自治县",
          "value": "653131"
        }
      ],
      [
        {
          "label": "和田市",
          "value": "653201"
        },
        {
          "label": "和田县",
          "value": "653221"
        },
        {
          "label": "墨玉县",
          "value": "653222"
        },
        {
          "label": "皮山县",
          "value": "653223"
        },
        {
          "label": "洛浦县",
          "value": "653224"
        },
        {
          "label": "策勒县",
          "value": "653225"
        },
        {
          "label": "于田县",
          "value": "653226"
        },
        {
          "label": "民丰县",
          "value": "653227"
        }
      ],
      [
        {
          "label": "伊宁市",
          "value": "654002"
        },
        {
          "label": "奎屯市",
          "value": "654003"
        },
        {
          "label": "霍尔果斯市",
          "value": "654004"
        },
        {
          "label": "伊宁县",
          "value": "654021"
        },
        {
          "label": "察布查尔锡伯自治县",
          "value": "654022"
        },
        {
          "label": "霍城县",
          "value": "654023"
        },
        {
          "label": "巩留县",
          "value": "654024"
        },
        {
          "label": "新源县",
          "value": "654025"
        },
        {
          "label": "昭苏县",
          "value": "654026"
        },
        {
          "label": "特克斯县",
          "value": "654027"
        },
        {
          "label": "尼勒克县",
          "value": "654028"
        }
      ],
      [
        {
          "label": "塔城市",
          "value": "654201"
        },
        {
          "label": "乌苏市",
          "value": "654202"
        },
        {
          "label": "额敏县",
          "value": "654221"
        },
        {
          "label": "沙湾县",
          "value": "654223"
        },
        {
          "label": "托里县",
          "value": "654224"
        },
        {
          "label": "裕民县",
          "value": "654225"
        },
        {
          "label": "和布克赛尔蒙古自治县",
          "value": "654226"
        }
      ],
      [
        {
          "label": "阿勒泰市",
          "value": "654301"
        },
        {
          "label": "布尔津县",
          "value": "654321"
        },
        {
          "label": "富蕴县",
          "value": "654322"
        },
        {
          "label": "福海县",
          "value": "654323"
        },
        {
          "label": "哈巴河县",
          "value": "654324"
        },
        {
          "label": "青河县",
          "value": "654325"
        },
        {
          "label": "吉木乃县",
          "value": "654326"
        }
      ],
      [{
        "label": "石河子市",
        "value": "659001"
      }],
      [{
        "label": "阿拉尔市",
        "value": "659002"
      }],
      [{
        "label": "图木舒克市",
        "value": "659003"
      }],
      [{
        "label": "五家渠市",
        "value": "659004"
      }],
      [{
        "label": "铁门关市",
        "value": "659006"
      }]
    ],
    [
      [{
        "label": "台北",
        "value": "660101"
      }],
      [{
        "label": "高雄",
        "value": "660201"
      }],
      [{
        "label": "基隆",
        "value": "660301"
      }],
      [{
        "label": "台中",
        "value": "660401"
      }],
      [{
        "label": "台南",
        "value": "660501"
      }],
      [{
        "label": "新竹",
        "value": "660601"
      }],
      [{
        "label": "嘉义",
        "value": "660701"
      }],
      [{
        "label": "宜兰",
        "value": "660801"
      }],
      [{
        "label": "桃园",
        "value": "660901"
      }],
      [{
        "label": "苗栗",
        "value": "661001"
      }],
      [{
        "label": "彰化",
        "value": "661101"
      }],
      [{
        "label": "南投",
        "value": "661201"
      }],
      [{
        "label": "云林",
        "value": "661301"
      }],
      [{
        "label": "屏东",
        "value": "661401"
      }],
      [{
        "label": "台东",
        "value": "661501"
      }],
      [{
        "label": "花莲",
        "value": "661601"
      }],
      [{
        "label": "澎湖",
        "value": "661701"
      }]
    ],
    [
      [
        {
          "label": "香港岛",
          "value": "670101"
        },
        {
          "label": "九龙",
          "value": "670201"
        },
        {
          "label": "新界",
          "value": "670301"
        }
      ]
    ],
    [
      [
        {
          "label": "澳门半岛",
          "value": "6801"
        },
        {
          "label": "氹仔岛",
          "value": "6802"
        },
        {
          "label": "路环岛",
          "value": "6803"
        },
        {
          "label": "路氹城",
          "value": "6804"
        }
      ]
    ]
  ];
  const _sfc_main$4 = {
    __name: "selectArea",
    props: {
      provinceName: {
        type: String,
        default: ""
      },
      cityName: {
        type: String,
        default: ""
      },
      countyName: {
        type: String,
        default: ""
      }
    },
    emits: ["@getAreaData"],
    setup(__props, { expose, emit: emits }) {
      const props = __props;
      const popup2 = vue.ref();
      const province = vue.reactive({
        // data的值是一个数组，为provinceData中的数据
        data: provinceData
      });
      let selectedProvince = vue.reactive({
        data: {
          label: "北京",
          value: "11"
        }
      });
      const city = vue.reactive({
        data: []
      });
      let selectedCity = vue.reactive({
        data: {
          label: "北京市",
          value: "1101"
        }
      });
      const area = vue.reactive({
        data: []
      });
      let selectedArea = vue.reactive({
        data: {
          label: "东城区",
          value: "110101"
        }
      });
      let areaIndex = vue.reactive({
        data: [0, 0, 0]
      });
      let chooseType = vue.ref("select");
      const getList = () => {
        city.data = cityData[areaIndex.data[0]];
        area.data = areaData[areaIndex.data[0]][areaIndex.data[1]];
      };
      vue.watch(
        () => props.cityName,
        () => {
          var _a, _b;
          if (props.provinceName)
            areaIndex.data[0] = provinceData == null ? void 0 : provinceData.findIndex((item) => {
              return item.label === props.provinceName;
            });
          if (props.cityName)
            areaIndex.data[1] = (_a = cityData[areaIndex.data[0]]) == null ? void 0 : _a.findIndex((item) => {
              return item.label === props.cityName;
            });
          if (props.countyName)
            areaIndex.data[2] = (_b = areaData[areaIndex.data[0]][areaIndex.data[1]]) == null ? void 0 : _b.findIndex((item) => {
              return item.label === props.countyName;
            });
          getList();
        },
        { deep: true }
      );
      const handlePickStart = () => {
        chooseType.value = "select";
      };
      const bindChange = (event) => {
        if (chooseType.value === "click")
          return;
        if (areaIndex.data[0] !== event.detail.value[0]) {
          city.data = cityData[event.detail.value[0]];
          area.data = areaData[event.detail.value[0]][event.detail.value[1]];
          selectedProvince.data = province.data[event.detail.value[0]];
          event.detail.value[1] = 0;
          event.detail.value[2] = 0;
          selectedCity.data = city.data[event.detail.value[1]];
          selectedArea.data = area.data[event.detail.value[2]];
        } else if (areaIndex.data[1] !== event.detail.value[1]) {
          area.data = areaData[event.detail.value[0]][event.detail.value[1]];
          event.detail.value[2] = 0;
          selectedCity.data = city.data[event.detail.value[1]];
          selectedArea.data = area.data[event.detail.value[2]];
        } else {
          selectedArea.data = area.data[event.detail.value[2]];
        }
        areaIndex.data = event.detail.value;
      };
      const handleOpen = () => {
        popup2.value.open("bottom");
      };
      const handleCancel = () => {
        popup2.value.close("bottom");
      };
      const confirm = () => {
        handleCancel();
        emits("getAreaData", {
          province: selectedProvince.data,
          city: selectedCity.data,
          area: selectedArea.data
        });
      };
      expose({
        handleOpen,
        getList
      });
      return (_ctx, _cache) => {
        const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_0$3);
        return vue.openBlock(), vue.createElementBlock("view", { class: "selectArea" }, [
          vue.createVNode(
            _component_uni_popup,
            {
              ref_key: "popup",
              ref: popup2,
              type: "bottom"
            },
            {
              default: vue.withCtx(() => [
                vue.createElementVNode("view", { class: "header" }, [
                  vue.createElementVNode("view", { class: "line" }, [
                    vue.createElementVNode("view", { class: "header-title" }, "选择省市区"),
                    vue.createElementVNode("view", {
                      class: "close",
                      onClick: handleCancel
                    })
                  ])
                ]),
                vue.createCommentVNode(" 省市区三级联动 "),
                vue.createElementVNode("view", { class: "province-city-area" }, [
                  vue.createElementVNode("view", { class: "label-box" }, [
                    vue.createElementVNode("view", { class: "label" }, "省份"),
                    vue.createElementVNode("view", { class: "label" }, "城市"),
                    vue.createElementVNode("view", { class: "label" }, "区县")
                  ]),
                  vue.createElementVNode("picker-view", {
                    value: vue.unref(areaIndex).data,
                    "indicator-class": "picker-view-indicator",
                    onChange: bindChange,
                    onPickstart: handlePickStart,
                    "mask-class": "picker-view-mask",
                    class: "picker-view"
                  }, [
                    vue.createElementVNode("picker-view-column", null, [
                      (vue.openBlock(true), vue.createElementBlock(
                        vue.Fragment,
                        null,
                        vue.renderList(province.data, (item, index) => {
                          return vue.openBlock(), vue.createElementBlock(
                            "view",
                            {
                              class: vue.normalizeClass([
                                "item",
                                index === vue.unref(areaIndex).data[0] ? "activeAddress" : ""
                              ]),
                              key: index
                            },
                            vue.toDisplayString(item.label),
                            3
                            /* TEXT, CLASS */
                          );
                        }),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    vue.createElementVNode("picker-view-column", null, [
                      (vue.openBlock(true), vue.createElementBlock(
                        vue.Fragment,
                        null,
                        vue.renderList(city.data, (item, index) => {
                          return vue.openBlock(), vue.createElementBlock(
                            "view",
                            {
                              class: vue.normalizeClass([
                                "item",
                                index === vue.unref(areaIndex).data[1] ? "activeAddress" : ""
                              ]),
                              key: index
                            },
                            vue.toDisplayString(item.label),
                            3
                            /* TEXT, CLASS */
                          );
                        }),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    vue.createElementVNode("picker-view-column", null, [
                      (vue.openBlock(true), vue.createElementBlock(
                        vue.Fragment,
                        null,
                        vue.renderList(area.data, (item, index) => {
                          return vue.openBlock(), vue.createElementBlock(
                            "view",
                            {
                              class: vue.normalizeClass([
                                "item",
                                index === vue.unref(areaIndex).data[2] ? "activeAddress" : ""
                              ]),
                              key: index
                            },
                            vue.toDisplayString(item.label),
                            3
                            /* TEXT, CLASS */
                          );
                        }),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ])
                  ], 40, ["value"])
                ]),
                vue.createCommentVNode(" 底部 "),
                vue.createElementVNode("view", { class: "footer" }, [
                  vue.createElementVNode("view", {
                    class: "btn",
                    onClick: confirm
                  }, "确定")
                ])
              ]),
              _: 1
              /* STABLE */
            },
            512
            /* NEED_PATCH */
          )
        ]);
      };
    }
  };
  const SelectArea = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-00e56261"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/pages/account/components/selectArea.vue"]]);
  const _sfc_main$3 = {
    __name: "index",
    setup(__props) {
      const title = vue.ref("账户设置");
      const flag = vue.ref(true);
      let bankIndex = vue.ref(0);
      const selectArea = vue.ref();
      const formData = vue.ref({
        name: "",
        bankName: "",
        province: "",
        city: "",
        district: "",
        branch: "",
        account: "",
        accountCertification: "",
        type: 2
      });
      const bankArray = vue.ref([
        {
          label: "中国工商银行",
          value: 1
        },
        {
          label: "中国建设银行",
          value: 2
        },
        {
          label: "中国邮政储蓄银行",
          value: 3
        },
        {
          label: "中国农业银行",
          value: 4
        },
        {
          label: "北京农商银行",
          value: 5
        },
        {
          label: "招商银行",
          value: 6
        }
      ]);
      vue.onMounted(() => {
        getAccountInfoFunc();
      });
      const handleDelete = () => {
        formData.value.accountCertification = "";
      };
      const getAccountInfoFunc = () => {
        getAccountInfo().then((res) => {
          formData.value.name = res.data.name;
          formData.value.bankName = res.data.bankName;
          formData.value.province = res.data.province || 0;
          formData.value.city = res.data.city || 0;
          formData.value.district = res.data.district || 0;
          formData.value.branch = res.data.branch;
          formData.value.account = res.data.account;
          formData.value.accountCertification = res.data.accountCertification;
        }).catch((err) => {
          uni.showToast({
            title: err.msg || "账户信息获取失败!",
            duration: 1e3,
            icon: "none"
          });
        });
      };
      const handleSelect = (e2) => {
        const item = e2.tempFiles[0];
        uni.uploadFile({
          url: `${baseUrl}/publics/storage/upload`,
          files: [
            {
              name: "file",
              uri: item.url,
              file: item
            }
          ],
          header: {
            Authorization: uni.getStorageSync("token")
            // 请求头配置token
          },
          success: (uploadFileRes) => {
            formData.value.accountCertification = JSON.parse(
              uploadFileRes.data
            ).data.url;
          },
          fail: () => {
            uni.showToast({
              title: "图片上传失败",
              duration: 1e3,
              icon: "none"
            });
          }
        });
      };
      const handleSubmit = () => {
        if (!formData.value.name) {
          return uni.showToast({
            title: "请填写户名",
            duration: 1e3,
            icon: "none"
          });
        } else if (!formData.value.bankName) {
          return uni.showToast({
            title: "请选择银行",
            duration: 1e3,
            icon: "none"
          });
        } else if (!formData.value.province || !formData.value.city || !formData.value.district) {
          return uni.showToast({
            title: "请选择开户行",
            duration: 1e3,
            icon: "none"
          });
        } else if (!formData.value.branch) {
          return uni.showToast({
            title: "请填写网点",
            duration: 1e3,
            icon: "none"
          });
        } else if (!formData.value.account) {
          return uni.showToast({
            title: "请填写银行账号",
            duration: 1e3,
            icon: "none"
          });
        } else if (!formData.value.accountCertification) {
          return uni.showToast({
            title: "请上传开户证明",
            duration: 1e3,
            icon: "none"
          });
        }
        if (!flag.value)
          return;
        flag.value = false;
        postAccount(formData.value).then((res) => {
          setTimeout(() => {
            flag.value = true;
          }, 1e3);
          if (res.code === 200) {
            uni.showToast({
              title: "提交成功!",
              duration: 1e3,
              icon: "none"
            });
            setTimeout(() => {
              uni.navigateBack();
            }, 1e3);
          }
        }).catch((err) => {
          setTimeout(() => {
            flag.value = true;
          }, 1e3);
          uni.showToast({
            title: err.msg || "提交失败!",
            duration: 1e3,
            icon: "none"
          });
        });
      };
      const getAreaData = (e2) => {
        formData.value.province = e2.province.label;
        formData.value.city = e2.city.label;
        formData.value.district = e2.area.label;
      };
      const handleBank = (e2) => {
        bankIndex.value = e2.detail.value;
        formData.value.bankName = bankArray.value[e2.detail.value].label;
      };
      const goBack = () => {
        uni.navigateBack();
      };
      const handleOpenLocation = () => {
        selectArea.value.handleOpen();
      };
      return (_ctx, _cache) => {
        const _component_uni_easyinput = resolveEasycom(vue.resolveDynamicComponent("uni-easyinput"), __easycom_0$5);
        const _component_uni_file_picker = resolveEasycom(vue.resolveDynamicComponent("uni-file-picker"), __easycom_1);
        return vue.openBlock(), vue.createElementBlock("view", { class: "account" }, [
          vue.createCommentVNode(" 导航 "),
          vue.createVNode(UniNav, {
            title: title.value,
            onGoBack: goBack
          }, null, 8, ["title"]),
          vue.createCommentVNode(" 姓名 "),
          vue.createElementVNode("view", { class: "name" }, [
            vue.createElementVNode("text", { class: "label" }, "户名"),
            vue.createVNode(_component_uni_easyinput, {
              modelValue: formData.value.name,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => formData.value.name = $event),
              placeholder: "请输入户名",
              placeholderStyle: { fontSize: "16px" }
            }, null, 8, ["modelValue"])
          ]),
          vue.createCommentVNode(" 银行 "),
          vue.createElementVNode("view", { class: "idCard" }, [
            vue.createElementVNode("text", { class: "label" }, "银行"),
            vue.createElementVNode("picker", {
              mode: "selector",
              class: "citySelect bankSelect",
              value: vue.unref(bankIndex),
              onChange: handleBank,
              range: bankArray.value,
              "range-key": "label"
            }, [
              vue.createElementVNode(
                "text",
                {
                  class: vue.normalizeClass(["bankName", !formData.value.bankName ? "placeholder" : ""])
                },
                vue.toDisplayString(formData.value.bankName ? formData.value.bankName : "请选择银行"),
                3
                /* TEXT, CLASS */
              ),
              vue.createElementVNode("image", { src: "/static/new/icon_more@2x.png" })
            ], 40, ["value", "range"])
          ]),
          vue.createCommentVNode(" 开户行 "),
          vue.createElementVNode("view", { class: "idCard" }, [
            vue.createElementVNode("text", { class: "label" }, "开户行"),
            vue.createElementVNode("view", {
              class: "citySelect",
              onClick: handleOpenLocation
            }, [
              vue.createElementVNode(
                "view",
                {
                  class: vue.normalizeClass([
                    "area",
                    !(formData.value.province && formData.value.city && formData.value.district) ? "placeholder" : ""
                  ])
                },
                vue.toDisplayString(formData.value.province && formData.value.city && formData.value.district ? formData.value.province + "-" + formData.value.city + "-" + formData.value.district : "请选择开户行"),
                3
                /* TEXT, CLASS */
              ),
              vue.createElementVNode("image", { src: "/static/new/icon_more@2x.png" })
            ])
          ]),
          vue.createCommentVNode(" 网点 "),
          vue.createElementVNode("view", { class: "idCard" }, [
            vue.createElementVNode("text", { class: "label" }, "网点"),
            vue.createVNode(_component_uni_easyinput, {
              placeholder: "请输入网点名称",
              placeholderStyle: { fontSize: "16px" },
              modelValue: formData.value.branch,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => formData.value.branch = $event)
            }, null, 8, ["modelValue"])
          ]),
          vue.createCommentVNode(" 银行账号 "),
          vue.createElementVNode("view", { class: "idCard bankAccount" }, [
            vue.createElementVNode("text", { class: "label" }, "银行账号"),
            vue.createVNode(_component_uni_easyinput, {
              placeholder: "请输入银行账号",
              placeholderStyle: { fontSize: "16px" },
              modelValue: formData.value.account,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => formData.value.account = $event)
            }, null, 8, ["modelValue"])
          ]),
          vue.createCommentVNode(" 开户证明 "),
          vue.createElementVNode("view", { class: "data" }, [
            vue.createElementVNode("view", { class: "label" }, "开户证明"),
            vue.createElementVNode("view", { class: "content" }, [
              vue.createElementVNode("view", { class: "photoItem" }, [
                vue.createVNode(_component_uni_file_picker, {
                  limit: "1",
                  title: "",
                  onSelect: handleSelect,
                  onDelete: handleDelete,
                  value: [
                    {
                      url: formData.value.accountCertification,
                      name: "file.txt",
                      extname: "txt"
                    }
                  ]
                }, {
                  default: vue.withCtx(() => [
                    formData.value.accountCertification ? (vue.openBlock(), vue.createElementBlock("image", {
                      key: 0,
                      class: "image",
                      src: formData.value.accountCertification
                    }, null, 8, ["src"])) : vue.createCommentVNode("v-if", true)
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["value"]),
                vue.createElementVNode("view", { class: "photoLabel" }, "资料上传 ")
              ])
            ])
          ]),
          vue.createCommentVNode(" 底部按钮 "),
          vue.createElementVNode("view", { class: "footer" }, [
            vue.createElementVNode("view", {
              class: "btn-red",
              onClick: handleSubmit
            }, "确认提交")
          ]),
          vue.createCommentVNode(" 选择省市区弹窗 "),
          vue.createVNode(SelectArea, {
            ref_key: "selectArea",
            ref: selectArea,
            onGetAreaData: getAreaData,
            provinceName: formData.value.province,
            cityName: formData.value.city,
            countyName: formData.value.district
          }, null, 8, ["provinceName", "cityName", "countyName"])
        ]);
      };
    }
  };
  const PagesAccountIndex = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-3c1b446f"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/pages/account/index.vue"]]);
  const _sfc_main$2 = {
    __name: "index",
    setup(__props) {
      const title = vue.ref("实名认证");
      const flag = vue.ref(true);
      const formData = vue.ref({
        certificationMaterial: "",
        idCardNo: "",
        backImg: "",
        frontImg: "",
        name: ""
      });
      const goBack = () => {
        uni.navigateBack();
      };
      const handleDelete = (type) => {
        formData.value[type] = "";
      };
      const handleSelect = (e2, type) => {
        const item = e2.tempFiles[0];
        uni.uploadFile({
          url: `${baseUrl}/publics/storage/upload`,
          files: [
            {
              name: "file",
              uri: item.url,
              file: item
            }
          ],
          header: {
            Authorization: uni.getStorageSync("token")
          },
          success: (uploadFileRes) => {
            formData.value[type] = JSON.parse(uploadFileRes.data).data.url;
          },
          fail: () => {
            uni.showToast({
              title: "图片上传失败",
              duration: 1e3,
              icon: "none"
            });
          }
        });
      };
      const handleSubmit = () => {
        if (!formData.value.name) {
          return uni.showToast({
            title: "请填写真实姓名",
            duration: 1e3,
            icon: "none"
          });
        } else if (!formData.value.idCardNo) {
          return uni.showToast({
            title: "请填写身份证号",
            duration: 1e3,
            icon: "none"
          });
        } else if (!formData.value.frontImg) {
          return uni.showToast({
            title: "请上传人像面照片",
            duration: 1e3,
            icon: "none"
          });
        } else if (!formData.value.backImg) {
          return uni.showToast({
            title: "请上传国徽面照片",
            duration: 1e3,
            icon: "none"
          });
        } else if (!formData.value.certificationMaterial) {
          return uni.showToast({
            title: "请上传证明资料",
            duration: 1e3,
            icon: "none"
          });
        }
        if (!flag.value)
          return;
        flag.value = false;
        postAuth(formData.value).then((res) => {
          setTimeout(() => {
            flag.value = true;
          }, 1e3);
          if (res.code === 200) {
            uni.navigateTo({
              url: "/pages/setting/index"
            });
          }
        }).catch((err) => {
          setTimeout(() => {
            flag.value = true;
          }, 1e3);
          uni.showToast({
            title: err.msg || "提交失败!",
            duration: 1e3,
            icon: "none"
          });
        });
      };
      return (_ctx, _cache) => {
        const _component_uni_easyinput = resolveEasycom(vue.resolveDynamicComponent("uni-easyinput"), __easycom_0$5);
        const _component_uni_file_picker = resolveEasycom(vue.resolveDynamicComponent("uni-file-picker"), __easycom_1);
        return vue.openBlock(), vue.createElementBlock("view", { class: "auth" }, [
          vue.createCommentVNode(" 导航 "),
          vue.createVNode(UniNav, {
            title: title.value,
            onGoBack: goBack
          }, null, 8, ["title"]),
          vue.createCommentVNode(" 姓名 "),
          vue.createElementVNode("view", { class: "name" }, [
            vue.createElementVNode("text", { class: "label" }, "真实姓名"),
            vue.createVNode(_component_uni_easyinput, {
              modelValue: formData.value.name,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => formData.value.name = $event),
              placeholder: "请输入",
              placeholderStyle: { fontSize: "16px" }
            }, null, 8, ["modelValue"])
          ]),
          vue.createCommentVNode(" 身份证号 "),
          vue.createElementVNode("view", { class: "idCard" }, [
            vue.createElementVNode("text", { class: "label" }, "身份证号"),
            vue.createVNode(_component_uni_easyinput, {
              modelValue: formData.value.idCardNo,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => formData.value.idCardNo = $event),
              placeholder: "请输入",
              placeholderStyle: { fontSize: "16px" }
            }, null, 8, ["modelValue"])
          ]),
          vue.createCommentVNode(" 身份证正面 "),
          vue.createElementVNode("view", { class: "idCardPhoto" }, [
            vue.createElementVNode("view", { class: "label" }, "上传身份证正反面（仅用于云岚到家系统认证）"),
            vue.createElementVNode("view", { class: "content" }, [
              vue.createElementVNode("view", { class: "photoItem" }, [
                vue.createVNode(_component_uni_file_picker, {
                  limit: "1",
                  title: "",
                  onSelect: _cache[2] || (_cache[2] = (e2) => handleSelect(e2, "frontImg")),
                  onDelete: _cache[3] || (_cache[3] = ($event) => handleDelete("frontImg"))
                }),
                vue.createElementVNode("view", { class: "photoLabel" }, "人像面照片")
              ]),
              vue.createElementVNode("view", { class: "photoItem" }, [
                vue.createElementVNode("image", {
                  class: "forImg",
                  src: "/static/new/ren@2x.png"
                }),
                vue.createElementVNode("view", { class: "photoLabel" }, "示例图")
              ])
            ]),
            vue.createCommentVNode(" 身份证反面 "),
            vue.createElementVNode("view", { class: "countryPhoto" }, [
              vue.createElementVNode("view", { class: "content" }, [
                vue.createElementVNode("view", { class: "photoItem" }, [
                  vue.createVNode(_component_uni_file_picker, {
                    limit: "1",
                    title: "",
                    onSelect: _cache[4] || (_cache[4] = (e2) => handleSelect(e2, "backImg")),
                    onDelete: _cache[5] || (_cache[5] = ($event) => handleDelete("backImg"))
                  }),
                  vue.createElementVNode("view", { class: "photoLabel" }, "国徽面照片 ")
                ]),
                vue.createElementVNode("view", { class: "photoItem" }, [
                  vue.createElementVNode("image", {
                    class: "forImg",
                    src: "/static/new/ren@2x.png"
                  }),
                  vue.createElementVNode("view", { class: "photoLabel" }, "示例图")
                ])
              ])
            ])
          ]),
          vue.createElementVNode("view", { class: "data" }, [
            vue.createElementVNode("view", { class: "label" }, "上传证明资料"),
            vue.createElementVNode("view", { class: "content" }, [
              vue.createElementVNode("view", { class: "photoItem" }, [
                vue.createVNode(_component_uni_file_picker, {
                  limit: "1",
                  title: "",
                  onSelect: _cache[6] || (_cache[6] = (e2) => handleSelect(e2, "certificationMaterial")),
                  onDelete: _cache[7] || (_cache[7] = ($event) => handleDelete("certificationMaterial"))
                }),
                vue.createElementVNode("view", { class: "photoLabel" }, "资料上传 ")
              ])
            ])
          ]),
          vue.createCommentVNode(" 底部按钮 "),
          vue.createElementVNode("view", { class: "footer" }, [
            vue.createElementVNode("view", {
              class: "btn-red",
              onClick: handleSubmit
            }, "确认提交")
          ])
        ]);
      };
    }
  };
  const PagesAuthIndex = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-3f748249"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/pages/auth/index.vue"]]);
  const _sfc_main$1 = {
    __name: "index",
    setup(__props) {
      const title = vue.ref("实名认证");
      const reason = vue.ref("");
      vue.onMounted(() => {
        getAuthFail().then((res) => {
          reason.value = res.data.rejectReason;
        });
      });
      const goBack = () => {
        uni.navigateBack();
      };
      const toAuth = () => {
        uni.navigateTo({
          url: "/pages/auth/index"
        });
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "authFail" }, [
          vue.createCommentVNode(" 导航 "),
          vue.createVNode(UniNav, {
            title: title.value,
            onGoBack: goBack
          }, null, 8, ["title"]),
          vue.createElementVNode("image", {
            class: "bImg",
            src: "/static/new/img_weitongguo@2x.png"
          }),
          vue.createElementVNode("view", { class: "content" }, "提交的认证审核末通过"),
          vue.createElementVNode(
            "view",
            { class: "content" },
            "原因：" + vue.toDisplayString(reason.value === "null" ? "无" : reason.value),
            1
            /* TEXT */
          ),
          vue.createElementVNode("view", {
            class: "btn-red",
            onClick: toAuth
          }, "重新认证")
        ]);
      };
    }
  };
  const PagesAuthFailIndex = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-14a9d75c"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/pages/authFail/index.vue"]]);
  __definePage("pages/start/index", PagesStartIndex);
  __definePage("pages/login/user", PagesLoginUser);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/serviceSkill/index", PagesServiceSkillIndex);
  __definePage("pages/getOrder/index", PagesGetOrderIndex);
  __definePage("pages/serviceRange/index", PagesServiceRangeIndex);
  __definePage("pages/city/index", PagesCityIndex);
  __definePage("pages/setting/index", PagesSettingIndex);
  __definePage("pages/history/index", PagesHistoryIndex);
  __definePage("pages/pickup/index", PagesPickupIndex);
  __definePage("pages/orderInfo/index", PagesOrderInfoIndex);
  __definePage("pages/cancel/index", PagesCancelIndex);
  __definePage("pages/serveRecord/index", PagesServeRecordIndex);
  __definePage("pages/delivery/index", PagesDeliveryIndex);
  __definePage("pages/my/index", PagesMyIndex);
  __definePage("pages/evaluate/index", PagesEvaluateIndex);
  __definePage("pages/account/index", PagesAccountIndex);
  __definePage("pages/auth/index", PagesAuthIndex);
  __definePage("pages/authFail/index", PagesAuthFailIndex);
  const _sfc_main = {
    __name: "App",
    setup(__props) {
      const store2 = useStore();
      const locationData = vue.ref({});
      onShow(() => {
        {
          uni.getLocation({
            type: "gcj02",
            success: (res) => {
              locationData.value = {
                longitude: res.longitude,
                latitude: res.latitude
              };
              store2.commit("user/setlLacation", locationData.value);
            },
            fail: (err) => {
            }
          });
        }
        uni.getNetworkType({
          success: function(res) {
          }
        });
      });
      vue.onMounted(() => {
      });
      return () => {
      };
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/App.vue"]]);
  const global$1 = {
    // 注意：全局模块中不需要开启命名空间
    state: {
      footStatus: 0,
      // 公用footer的激活状态码
      orderActive: 0
      //记录订单页面顶部激活的订单状态
    },
    mutations: {
      // 公用footer的激活码
      setFootStatus(state, provider) {
        state.footStatus = provider;
        formatAppLog("log", "at store/modules/global.js:11", "???");
      },
      setOrderActive(state, provider) {
        state.footStatus = provider;
      }
    },
    actions: {},
    getters: {}
  };
  const user = {
    namespaced: true,
    // 开启命名空间
    state() {
      return {
        location: {},
        //服务范围坐标
        address: "请选择",
        //服务范围详细地址
        cityCode: "",
        //服务范围城市编码
        cityName: "请选择",
        //服务范围城市名称
        tabIndex: 0,
        //储存当前触发的tab值
        keyBoardHeight: 0,
        //记录键盘高度
        canPickUp: true,
        //是否开启接单
        first: true,
        //是否第一次进入
        userBase: {},
        // 用户信息
        pages: 0,
        //总页数
        page: 1,
        //当前页码
        token: "",
        //token
        taskId: "",
        //任务id
        detailsData: {},
        //任务详情
        taskType: 1,
        //当前进入的是取件详情还是派件详情  1取件，2派件
        taskStatus: 0,
        //已取件\已取消\去派件\已签收状态
        detailType: 0,
        //历史订单或者已经取件的详情页
        orderTime: null,
        //时间筛选值
        filterOverTime: null,
        //超时值
        deliveryData: [],
        //待取件数据储存
        cancelData: [],
        //已取件数据储存
        isDelivery: false,
        //是否跳转派件页面
        isSearch: false
        //是否从搜索页进的详情页
      };
    },
    mutations: {
      setKeyServiceType(state, provider) {
        state.serviceType = provider;
      },
      setKeyDistance(state, provider) {
        state.distance = provider;
      },
      setKeyCanPickUp(state, provider) {
        state.canPickUp = provider;
      },
      setKeyBoardHeight(state, provider) {
        state.keyBoardHeight = provider;
      },
      // 定义mutations，用于同步修改状态
      setLocation(state, provider) {
        state.location = provider;
      },
      setAddress(state, provider) {
        state.address = provider;
      },
      setCityCode(state, provider) {
        state.cityCode = provider;
      },
      setCityName(state, provider) {
        state.cityName = provider;
      },
      setFirst(state, provider) {
        state.first = provider;
      },
      // 设置token
      setToken(state, provider) {
        state.token = provider;
      },
      // 设置用户信息
      setUserInfo(state, provider) {
        state.userBase = provider;
      },
      // 设置经纬度
      setlLacation(state, provider) {
        state.loacation = provider;
      },
      // 设置当前页数
      setPage(state, provider) {
        state.page = provider;
      },
      // 设置总页数
      setPages(state, provider) {
        state.pages = provider;
      },
      // 设置时间筛选值
      setOrderTime(state, provider) {
        state.orderTime = provider;
      },
      // 设置超时筛选值
      setFilterOverTime(state, provider) {
        state.filterOverTime = provider;
      },
      // 设置待取件数据储存
      setDeliveryData(state, provider) {
        state.deliveryData = provider;
      },
      // 设置取消数据储存
      setCancelData(state, provider) {
        state.cancelData = provider;
      },
      // 设置任务id，方便其他页面用
      setTaskId(state, provider) {
        state.taskId = provider;
      },
      // 
      setTaskType(state, provider) {
        state.taskType = provider;
      },
      // 设置消息触发的当前tab值
      setTabIndex(state, provider) {
        state.tabIndex = provider;
      },
      // 设置已取件\已取消\去派件\已签收状态
      setTaskStatus(state, provider) {
        state.taskStatus = provider;
      },
      // 设置任务详情
      setDetailsData(state, provider) {
        state.detailsData = provider;
      },
      // 历史订单或者已经取件的详情页
      setDetailType(state, provider) {
        state.detailType = provider;
      },
      setIsDelivery(state, provider) {
        state.isDelivery = provider;
      },
      // 设置是否由搜索页进的详情页，方便详情页返回
      setIsSearch(state, provider) {
        state.isSearch = provider;
      }
    },
    actions: {},
    getters: {}
  };
  const store = createStore({
    // 全局模块
    ...global$1,
    // 局部模块
    modules: {
      user
    }
  });
  function createApp(rootComponent, rootProps) {
    rootComponent.mpTye = "app";
    rootComponent.render = () => {
    };
    const app2 = vue.createVueApp(rootComponent, rootProps);
    app2.provide("__globalStyles", __uniConfig.styles);
    const oldMount = app2.mount;
    app2.mount = (container) => {
      const appVm = oldMount.call(app2, container);
      return appVm;
    };
    return app2;
  }
  const app = createApp(App);
  app.use(store);
  app.mount("#app");
})(Vue, uni.VueShared);
