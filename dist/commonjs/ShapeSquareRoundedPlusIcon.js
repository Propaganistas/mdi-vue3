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
    _createElementVNode("path", { d: "M17 2H19V5H22V7H19V10H17V7H14V5H17V2M7 5H11V7H7C5.9 7 5 7.9 5 9V17C5 18.11 5.9 19 7 19H15C16.11 19 17 18.11 17 17V13H19V17C19 19.21 17.21 21 15 21H7C4.79 21 3 19.21 3 17V9C3 6.79 4.79 5 7 5Z" })
  ]))
}