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
    _createElementVNode("path", { d: "M6,8H6.73L14,15.27V16H6M2.27,1L1,2.27L3,4.28C2.41,4.62 2,5.26 2,6V18A2,2 0 0,0 4,20H18.73L20.73,22L22,20.73M20,4H7.82L11.82,8H14V10.18L14.57,10.75L18,8V14.18L22,18.17C22,18.11 22,18.06 22,18V6A2,2 0 0,0 20,4Z" })
  ]))
}