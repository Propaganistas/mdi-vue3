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
    _createElementVNode("path", { d: "M21,2H3A2,2 0 0,0 1,4V20A2,2 0 0,0 3,22H21A2,2 0 0,0 23,20V4A2,2 0 0,0 21,2M11,17.5L9.5,19L5,14.5L9.5,10L11,11.5L8,14.5L11,17.5M14.5,19L13,17.5L16,14.5L13,11.5L14.5,10L19,14.5L14.5,19M21,7H3V4H21V7Z" })
  ]))
}