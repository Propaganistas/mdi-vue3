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
    _createElementVNode("path", { d: "M12 10C12 10 16 9.2 16 7.6C16 6.8 15.2 5.2 15.2 4.4C15.2 3.6 16 2.8 16 2.8L15.2 2C14.74 2.26 14.16 2.4 13.6 2.4S12.46 2.25 12 2C11.54 2.25 10.96 2.4 10.4 2.4C9.84 2.4 9.26 2.26 8.8 2L8 2.8C8 2.8 8.8 3.6 8.8 4.4C8.8 5.2 8 6.8 8 7.6C8 9.2 12 10 12 10M11.43 5.32L12 4L12.55 5.32L14 5.44L12.89 6.38L13.22 7.78L12 7.04L10.76 7.78L11.09 6.38L10 5.44L11.43 5.32M21 6H16.65C16.84 6.58 17 7.12 17 7.6C17 9.85 13.32 10.76 12.2 11L12 11L11.8 11C10.68 10.76 7 9.85 7 7.6C7 7.12 7.16 6.58 7.35 6H3C2.45 6 2 6.45 2 7V22H10V17H14V22H22V7C22 6.45 21.55 6 21 6M8 20H4V17H8V20M8 15H4V12H8V15M14 15H10V12H14V15M20 20H16V17H20V20M20 15H16V12H20V15Z" })
  ]))
}