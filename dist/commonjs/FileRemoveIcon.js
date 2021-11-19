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
    _createElementVNode("path", { d: "M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M13,9H18.5L13,3.5V9M10,14.59L7.88,12.46L6.46,13.88L8.59,16L6.46,18.12L7.88,19.54L10,17.41L12.12,19.54L13.54,18.12L11.41,16L13.54,13.88L12.12,12.46L10,14.59Z" })
  ]))
}