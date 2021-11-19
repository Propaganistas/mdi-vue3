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
    _createElementVNode("path", { d: "M20.8 22.7L15.6 17.5L14 19V15.9L13.1 14.9C8.6 15.2 5.4 16.8 3 20.1C3.58 16.31 5.72 12.94 8.9 10.8L1.1 3L2.4 1.7L22.1 21.5M18.1 14.9L21 12L14 5V9L12.5 9.3" })
  ]))
}