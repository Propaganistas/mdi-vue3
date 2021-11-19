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
    _createElementVNode("path", { d: "M2 8V22H20V24H2C.895 24 0 23.11 0 22V8H2M23.03 6.29L14 .64L4.97 6.29C4.39 6.64 4 7.27 4 8V18C4 19.1 4.9 20 6 20H22C23.1 20 24 19.1 24 18V8C24 7.27 23.61 6.64 23.03 6.29M22 18H6V10L14 15L22 10V18M14 13L6 8L14 3L22 8L14 13Z" })
  ]))
}