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
    _createElementVNode("path", { d: "M12 3C7.8 3 3.7 4.4 .4 7C4.4 12.1 7.9 16.4 12 21.5C14.4 18.5 16.7 15.7 19 12.8V8H22.8C23 7.7 23.4 7.3 23.6 7C20.3 4.4 16.2 3 12 3M21 10V16H23V10M21 18V20H23V18" })
  ]))
}