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
    _createElementVNode("path", { d: "M14 3.5C14 4.33 13.33 5 12.5 5S11 4.33 11 3.5 11.67 2 12.5 2 14 2.67 14 3.5M8.5 5C7.67 5 7 5.67 7 6.5S7.67 8 8.5 8 10 7.33 10 6.5 9.33 5 8.5 5M14 12L13.22 9.75H16.18L18.34 8.67C18.71 8.5 18.86 8.04 18.67 7.67C18.5 7.3 18.04 7.14 17.67 7.33L16.85 7.74L16.36 6.9C16.07 6.25 15.36 5.88 14.66 6.04L12.19 6.57C11.5 6.72 11 7.35 11 8.07V8.77L8.57 10.39H8.58C8.5 10.46 8.39 10.55 8.33 10.67L7.44 12.44L5.66 13.33C5.29 13.5 5.14 13.97 5.33 14.34C5.46 14.6 5.73 14.75 6 14.75C6.11 14.75 6.23 14.73 6.34 14.67L8.56 13.56L9.6 11.5L11 13C10 16 3 20 3 20S7 22 12 22 21 20 21 20 16 16 14 12M16.85 11.09L16.53 11.25H15.33L15.39 11.41C15.91 12.44 16.67 13.5 17.5 14.44L16.97 11.03L16.85 11.09Z" })
  ]))
}