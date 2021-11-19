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
    _createElementVNode("path", { d: "M14 17H12V15H14V17M20 7V17H18V9H16V7H20M10 7V9H6V11H8C9.1 11 10 11.9 10 13V15C10 16.1 9.1 17 8 17H4V15H8V13H4V7H10Z" })
  ]))
}