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
    _createElementVNode("path", { d: "M7 5V13L22 11V7L7 5M10 6.91L13 7.31V10.69L10 11.09V6.91M16 7.71L19 8.11V9.89L16 10.29V7.71M5 10V11H6V12H5V21H3V4C3 3.45 3.45 3 4 3S5 3.45 5 4V6H6V7H5V10Z" })
  ]))
}