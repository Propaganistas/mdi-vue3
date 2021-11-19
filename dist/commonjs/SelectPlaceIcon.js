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
    _createElementVNode("path", { d: "M4 3H5V5H3V4C3 3.5 3.5 3 4 3M20 3C20.5 3 21 3.5 21 4V5H19V3H20M15 5V3H17V5H15M11 5V3H13V5H11M7 5V3H9V5H7M21 12C21 12.5 20.5 13 20 13H19V11H21V12M15 13V11H17V13H15M11 13V11H13V13H11M7 13V11H9V13H7M4 13C3.5 13 3 12.5 3 12V11H5V13H4M3 7H5V9H3V7M21 7V9H19V7H21M7 16L12 21L17 16H7Z" })
  ]))
}