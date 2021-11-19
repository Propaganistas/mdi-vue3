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
    _createElementVNode("path", { d: "M21 7H3V3H21V7M9.5 11H14.5C14.78 11 15 11.22 15 11.5V12.06C15.87 10.83 17.35 10 19 10C19.34 10 19.68 10.04 20 10.11V8H4V21H13.03C13 20.9 13 20.8 13 20.7V17.2C13 16.24 13.5 15.34 14.2 14.74V14.5C14.2 14 14.32 13.47 14.5 13H9V11.5C9 11.22 9.22 11 9.5 11M23 17.3V20.8C23 21.4 22.4 22 21.7 22H16.2C15.6 22 15 21.4 15 20.7V17.2C15 16.6 15.6 16 16.2 16V14.5C16.2 13.1 17.6 12 19 12S21.8 13.1 21.8 14.5V16C22.4 16 23 16.6 23 17.3M20.5 14.5C20.5 13.7 19.8 13.2 19 13.2S17.5 13.7 17.5 14.5V16H20.5V14.5Z" })
  ]))
}