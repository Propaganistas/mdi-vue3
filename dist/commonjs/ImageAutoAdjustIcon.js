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
    _createElementVNode("path", { d: "M19 10V19H5V5H14V3H5C3.92 3 3 3.9 3 5V19C3 20.1 3.92 21 5 21H19C20.12 21 21 20.1 21 19V10H19M17 10L17.94 7.94L20 7L17.94 6.06L17 4L16.06 6.06L14 7L16.06 7.94L17 10M13.25 10.75L12 8L10.75 10.75L8 12L10.75 13.25L12 16L13.25 13.25L16 12L13.25 10.75Z" })
  ]))
}