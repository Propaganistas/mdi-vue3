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
    _createElementVNode("path", { d: "M11 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4H5L7 8H10L8 4H10L12 8H15L13 4H15L17 8H20L18 4H22V13C21.5 12.2 20.8 11.5 20 11V10H5.8L4 6.5V18H10.2C10.4 18.7 10.6 19.4 11 20M20.3 18.9C20.7 18.2 21 17.4 21 16.5C21 14 19 12 16.5 12S12 14 12 16.5 14 21 16.5 21C17.4 21 18.2 20.8 18.9 20.3L22 23.4L23.4 22L20.3 18.9M16.5 19C15.1 19 14 17.9 14 16.5S15.1 14 16.5 14 19 15.1 19 16.5 17.9 19 16.5 19Z" })
  ]))
}