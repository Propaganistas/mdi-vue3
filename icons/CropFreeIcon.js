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
    _createElementVNode("path", { d: "M19,3H15V5H19V9H21V5C21,3.89 20.1,3 19,3M19,19H15V21H19A2,2 0 0,0 21,19V15H19M5,15H3V19A2,2 0 0,0 5,21H9V19H5M3,5V9H5V5H9V3H5A2,2 0 0,0 3,5Z" })
  ]))
}