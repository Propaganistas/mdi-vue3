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
    _createElementVNode("path", { d: "M12 3L2 12H5V20H19V12H22L12 3M15.54 16.12L14.12 17.54L12 15.41L9.88 17.54L8.47 16.12L10.59 14L8.47 11.88L9.88 10.47L12 12.59L14.12 10.47L15.54 11.88L13.41 14L15.54 16.12Z" })
  ]))
}