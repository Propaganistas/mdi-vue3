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
    _createElementVNode("path", { d: "M7,2A2,2 0 0,0 5,4V19A2,2 0 0,0 7,21V22H9V21H15V22H17V21A2,2 0 0,0 19,19V4A2,2 0 0,0 17,2H7M8,6H10V8H8V6M7,11H17V19H7V11M8,12V15H10V12H8Z" })
  ]))
}