const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    version: "1.1",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, [
    _createElementVNode("path", { d: "M22 8V2H16V5.8L14.4 8H9.6L8 5.8V2H2V8H4V16H2V22H8V20H16V22H22V16H20V8H22M11 10H13V12H11V10M4 4H6V6H4V4M6 20H4V18H6V20M16 18H8V16H6V8H7.1L9 10.6V14H15V10.6L16.9 8H18V16H16V18M20 20H18V18H20V20M18 6V4H20V6H18Z" })
  ]))
}