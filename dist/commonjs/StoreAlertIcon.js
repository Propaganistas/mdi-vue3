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
    _createElementVNode("path", { d: "M2 7L1 12V14H2V20H12V14H16V20H18V14H19V12L18 7H2M10 18H4V14H10V18M18 6H2V4H18V6M23 7V13H21V7H23M21 15H23V17H21V15Z" })
  ]))
}