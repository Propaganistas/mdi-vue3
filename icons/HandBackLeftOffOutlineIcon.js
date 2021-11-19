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
    _createElementVNode("path", { d: "M22.11 21.46L2.39 1.73L1.11 3L3.56 5.45C3.21 5.87 3 6.41 3 7V16C3 20.42 6.58 24 11 24C13.94 24 16.62 22.45 18.12 20L20.84 22.73L22.11 21.46M11 22C7.69 22 5 19.31 5 16V7C5 6.97 5 6.94 5 6.91L6 7.89V12H8V9.89L9 10.89V12H10.11L16.65 18.54C15.57 20.64 13.41 22 11 22M8 4.8L6.21 3C6.59 2.12 7.47 1.5 8.5 1.5C8.73 1.5 8.96 1.53 9.17 1.59C9.54 .66 10.44 0 11.5 0C12.73 0 13.75 .89 13.96 2.06C14.13 2 14.31 2 14.5 2C15.88 2 17 3.12 17 4.5V10.39C17.34 10.08 17.76 9.85 18.22 9.73L19 9.5C19.82 9.29 20.69 9.61 21.18 10.35C21.56 10.92 21.58 11.66 21.33 12.3L19.67 16.47L18.13 14.93L19.5 11.45L19 11.59C18.5 11.71 18.15 12.05 18 12.5L17.34 14.14L15 11.8V4.5C15 4.22 14.78 4 14.5 4S14 4.22 14 4.5V10.8L12 8.8V2.5C12 2.22 11.78 2 11.5 2S11 2.22 11 2.5V7.8L9 5.8V4C9 3.72 8.78 3.5 8.5 3.5S8 3.72 8 4V4.8Z" })
  ]))
}