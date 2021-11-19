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
    _createElementVNode("path", { d: "M16,9V11H8V9H10V8H4V10H2V2H4V4H12A2,2 0 0,1 14,6V9H16M10,15V18A2,2 0 0,0 12,20H20V22H22V14H20V16H14V15H16V13H8V15H10Z" })
  ]))
}