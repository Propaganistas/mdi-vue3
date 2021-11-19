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
    _createElementVNode("path", { d: "M22.11 21.46L2.39 1.73L1.11 3L4.3 6.19L3.53 6.62C3.21 6.79 3 7.12 3 7.5V16.5C3 16.88 3.21 17.21 3.53 17.38L11.43 21.82C11.59 21.94 11.79 22 12 22S12.41 21.94 12.57 21.82L17.28 19.17L20.84 22.73L22.11 21.46M5 15.91V9.21L10.29 12.18L11 12.89V19.29L5 15.91M13 19.29V14.89L15.82 17.7L13 19.29M9 5.82L7.56 4.36L11.43 2.18C11.59 2.06 11.79 2 12 2S12.41 2.06 12.57 2.18L20.47 6.62C20.79 6.79 21 7.12 21 7.5V16.5C21 16.85 20.82 17.16 20.53 17.33L19 15.8V9.21L14.78 11.58L13.31 10.11L17.96 7.5L12 4.15L9 5.82Z" })
  ]))
}