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
    _createElementVNode("path", { d: "M19 2H5C3.89 2 3 2.89 3 4V16C3 17.11 3.9 18 5 18H10V20H8V22H16V20H14V18H19C20.11 18 21 17.11 21 16V4C21 2.89 20.1 2 19 2M19 16H5V4H19V16Z" })
  ]))
}