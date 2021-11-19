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
    _createElementVNode("path", { d: "M10 6.82L6.25 3.05C6.59 2.42 7.24 2 8 2H16C17.11 2 18 2.89 18 4V14.8L12.16 8.96C13.19 8.87 14 8 14 6.97C14 5.87 13.11 4.97 12 4.97C10.95 4.97 10.1 5.78 10 6.82M15 18V20H18V22H15C13.89 22 13 21.11 13 20V18H11V20C11 21.11 10.11 22 9 22H6V20H9V18H8C6.89 18 6 17.11 6 16V7.89L1.11 3L2.39 1.73L22.11 21.46L20.84 22.73L16.1 18C16.06 18 16.03 18 16 18H15M14 16V15.89L12.61 14.5H10V16H14Z" })
  ]))
}