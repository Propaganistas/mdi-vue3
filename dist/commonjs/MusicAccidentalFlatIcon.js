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
    _createElementVNode("path", { d: "M8.5 19C13.36 16.26 15.5 13.91 15.5 12C15.5 10.59 14.79 9 12.5 9C11.8 9 11.11 9.28 10.5 9.67V5H8.5M10.5 15.38V12.26C11.12 11.59 11.95 11 12.5 11C13.09 11 13.5 11.07 13.5 12C13.5 12.15 13.4 13.3 10.5 15.38Z" })
  ]))
}