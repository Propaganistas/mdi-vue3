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
    _createElementVNode("path", { d: "M19.97 10.24C19.95 10 19.91 9.74 19.87 9.5C19.6 9 19 9 19 9H17V8C17 7 16 7 16 7H14V6C14 5 13 5 13 5H12V3C12 2 11 2 11 2C6.03 2 2 6.03 2 11C2 15.71 5.62 19.57 10.23 19.96C11.5 21.8 13.61 23 16 23C19.87 23 23 19.87 23 16C23 13.61 21.8 11.5 19.97 10.24M11.64 10.53C10.87 11.15 10.23 11.92 9.78 12.81C9.32 12.55 9 12.06 9 11.5C9 10.67 9.67 10 10.5 10C10.96 10 11.36 10.21 11.64 10.53M5.5 12C4.67 12 4 11.33 4 10.5S4.67 9 5.5 9 7 9.67 7 10.5 6.33 12 5.5 12M7 6.5C7 5.67 7.67 5 8.5 5S10 5.67 10 6.5 9.33 8 8.5 8 7 7.33 7 6.5M8.5 16.5C8.5 16.04 8.71 15.64 9.03 15.36C9 15.57 9 15.79 9 16C9 16.62 9.09 17.22 9.24 17.79C8.8 17.5 8.5 17.05 8.5 16.5M16 21C13.24 21 11 18.76 11 16S13.24 11 16 11 21 13.24 21 16 18.76 21 16 21M16.5 16.25L19.36 17.94L18.61 19.16L15 17V12H16.5V16.25Z" })
  ]))
}