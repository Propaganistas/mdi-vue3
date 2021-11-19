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
    _createElementVNode("path", { d: "M3 12V13.5L14 18.25V16.15L11.8 15.25V10.25L14 9.35V7.25L3 12M10 14.62L5 12.75L10 10.88V14.62M18 4.25L15 7.25H17V19.75H19V7.25H21L18 4.25Z" })
  ]))
}