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
    _createElementVNode("path", { d: "M22.1 21.5L2.4 1.7L1.1 3L7.2 9.1C7.1 9.7 7 10.3 7 11C5.5 10.4 3.8 10 2 10C7.9 12.6 6 22 12 22C14.5 22 15.7 20.5 16.6 18.5L20.9 22.8L22.1 21.5M8.1 10L9.1 11H8L8.1 10M8.8 12H10.1L11 12.9V13.7C10.3 13.1 9.6 12.5 8.8 12M14.3 19.2C14.1 18 13.4 16.4 12.2 15H13.1L15.2 17.1C15 17.9 14.7 18.6 14.3 19.2M11 6V7.8L12.2 9H14V8H12V6H13V5H12V3C14.1 3 15.9 7 16 11.8V12.8L18 14.8C18.8 12.8 19.9 10.9 22 10C20.2 10 18.5 10.4 17 11.1C16.8 5.9 14.7 2 12 2C10.5 2 9.2 3.2 8.3 5.1L9.2 6H11M11 3.3V5H9.5C10 4.2 10.5 3.6 11 3.3M15 11.8L14.2 11H15V11.8Z" })
  ]))
}