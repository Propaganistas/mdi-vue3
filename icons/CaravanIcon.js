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
    _createElementVNode("path", { d: "M5,7A2,2 0 0,0 3,9V15A2,2 0 0,0 5,17H7A3,3 0 0,0 10,20A3,3 0 0,0 13,17H21V15H19V9A2,2 0 0,0 17,7H5M5,9H10V12H5V9M13,9H17V12H13V9M10,16A1,1 0 0,1 11,17A1,1 0 0,1 10,18A1,1 0 0,1 9,17A1,1 0 0,1 10,16Z" })
  ]))
}