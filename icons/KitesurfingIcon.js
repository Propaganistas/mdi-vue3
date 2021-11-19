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
    _createElementVNode("path", { d: "M16.5 4.5L15.5 3.43L17.92 1H20L16.5 4.5M20.96 23C19.9 23 18.9 22.75 17.96 22.25C16.12 23.25 13.81 23.25 11.97 22.25C10.13 23.25 7.82 23.25 6 22.25C4.77 22.94 3.36 23.05 2 23V21C3.41 21.05 4.77 20.9 6 20C7.74 21.25 10.21 21.25 11.97 20C13.74 21.25 16.2 21.25 17.96 20C19.17 20.9 20.54 21.05 21.94 21V23H20.96M20.35 12.26C18.3 11.5 16.14 12.61 14.08 13.36L12.39 11.5H9.58V8C11.89 8.19 14.29 7.67 15.9 5.96L14.5 4.56C13.6 5.46 12.3 6 11 6H8C6.89 6 5.95 6.92 6 8C6.07 9.35 5.67 12.73 6.45 13.87L8 16.82C7.43 17.23 6.93 17.62 6.5 18C8.09 19.5 10.65 19.17 11.97 17.5C12.91 18.59 14.45 19.3 15.9 18.83C17.45 17.77 22.74 14 20.35 12.26M11.43 14.65C11 14.89 10.16 15.37 9.82 15.61L8.97 13.59L11.46 13.5L12.16 14.25L11.43 14.65M8 1C6.9 1 6 1.9 6 3S6.9 5 8 5 10 4.11 10 3 9.11 1 8 1Z" })
  ]))
}