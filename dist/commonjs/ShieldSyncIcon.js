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
    _createElementVNode("path", { d: "M18 12A6.41 6.41 0 0 1 20.87 12.67A11.63 11.63 0 0 0 21 11V5L12 1L3 5V11C3 16.55 6.84 21.74 12 23C12.35 22.91 12.7 22.8 13 22.68A6.42 6.42 0 0 1 11.5 18.5A6.5 6.5 0 0 1 18 12M18 14.5V13L15.75 15.25L18 17.5V16A2.5 2.5 0 0 1 20.24 19.62L21.33 20.71A4 4 0 0 0 18 14.5M18 21A2.5 2.5 0 0 1 15.76 17.38L14.67 16.29A4 4 0 0 0 18 22.5V24L20.25 21.75L18 19.5Z" })
  ]))
}