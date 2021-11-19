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
    _createElementVNode("path", { d: "M20.8 22.7L15.7 17.6C15.1 18.3 14.6 18.9 14.1 19.3C13.3 20 12.7 20 12 20L12.8 17C9.5 16.8 6.6 15.4 5.8 13.6C5.7 14.1 5.6 14.5 5.4 14.8C4.7 16 3.3 16 2 16C3.1 16 3.5 14.4 3.5 12.5S3.1 9 2 9C3.3 9 4.7 9 5.3 10.2C5.5 10.5 5.6 11 5.7 11.4C6 10.7 6.7 10 7.6 9.5L1.1 3L2.4 1.7L22.1 21.4L20.8 22.7M9.8 6.6L9 5C11 5 13 5 14.3 5.7C15.4 6.3 16.1 7.3 16.7 8.4C19.6 9.1 22 10.7 22 12.5C22 13.8 20.8 15 19 15.8L9.8 6.6M16 12C16 12.6 16.4 13 17 13S18 12.6 18 12 17.6 11 17 11 16 11.4 16 12Z" })
  ]))
}