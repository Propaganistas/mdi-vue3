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
    _createElementVNode("path", { d: "M20,8H18.95L6.95,20H4A2,2 0 0,1 2,18A2,2 0 0,1 4,16H5.29L7,14.29V10A1,1 0 0,1 8,9H9A1,1 0 0,1 10,10V11.29L17.29,4H20A2,2 0 0,1 22,6A2,2 0 0,1 20,8M8.5,5A1.5,1.5 0 0,1 10,6.5A1.5,1.5 0 0,1 8.5,8A1.5,1.5 0 0,1 7,6.5A1.5,1.5 0 0,1 8.5,5Z" })
  ]))
}