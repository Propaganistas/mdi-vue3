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
    _createElementVNode("path", { d: "M15 7L13 6V3.5C13 3.2 13.2 3 13.5 3S14 3.2 14 3.5V4H16V3.5C16 2.1 14.9 1 13.5 1S11 2.1 11 3.5V6L9 7L6 6L11.1 21.3C11.4 22.2 12.7 22.2 13 21.3C14.6 16.2 18 6 18 6L15 7M11 15L9 8.9L9.7 9.1L11 8.1V15M13 8.1L14.3 9.1L15 8.9L13 15V8.1Z" })
  ]))
}