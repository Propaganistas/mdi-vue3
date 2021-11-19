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
    _createElementVNode("path", { d: "M20,3H5A2,2 0 0,0 3,5V11H7V9L11,12L7,15V13H3V19A2,2 0 0,0 5,21H20A2,2 0 0,0 22,19V5A2,2 0 0,0 20,3M17,17H13V15H17V17M20,13H13V11H20V13M20,9H13V7H20V9M3,13H0V11H3V13Z" })
  ]))
}