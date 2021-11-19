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
    _createElementVNode("path", { d: "M5 13V19H19V13H5M17 17H7V15H17V17M18.73 10.68L20.5 8.91L19.09 7.5L17.32 9.27L18.73 10.68M5.27 10.68L6.68 9.27L4.91 7.5L3.5 8.91L5.27 10.68M13 8V5H11V8H13Z" })
  ]))
}