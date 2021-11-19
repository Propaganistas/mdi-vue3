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
    _createElementVNode("path", { d: "M17 2H7C5.9 2 5 2.9 5 4V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V4C19 2.9 18.1 2 17 2M17 20H7V4H17V20M12 8C10.9 8 10 8.9 10 10C10 10.4 10.1 10.7 10.3 11H10C8.9 11 8 11.9 8 13S8.9 15 10 15C10.6 15 11.1 14.7 11.5 14.3L10.5 17H13.5L12.5 14.3C12.9 14.7 13.4 15 14 15C15.1 15 16 14.1 16 13S15.1 11 14 11H13.7C13.9 10.7 14 10.3 14 10C14 8.9 13.1 8 12 8Z" })
  ]))
}