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
    _createElementVNode("path", { d: "M12 2C10.9 2 10 2.9 10 4C10 4.1 10 4.19 10 4.29C7.12 5.14 5 7.82 5 11V17L3 19V20H12.35C12.12 19.36 12 18.68 12 18H7V11C7 8.24 9.24 6 12 6C14.76 6 17 8.24 17 11V12.09C17.33 12.03 17.67 12 18 12C18.34 12 18.67 12.03 19 12.09V11C19 7.82 16.88 5.14 14 4.29C14 4.19 14 4.1 14 4C14 2.9 13.11 2 12 2M17 14V17H14V19H17V22H19V19H22V17H19V14M10 21C10 22.11 10.9 23 12 23C12.66 23 13.28 22.67 13.65 22.13C13.33 21.79 13.05 21.41 12.81 21Z" })
  ]))
}