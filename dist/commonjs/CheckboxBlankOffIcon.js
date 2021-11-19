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
    _createElementVNode("path", { d: "M20.84 22.73L19.1 21C19.06 21 19.03 21 19 21H5C3.9 21 3 20.11 3 19V5C3 4.97 3 4.94 3 4.9L1.11 3L2.39 1.73L22.11 21.46L20.84 22.73M21 5C21 3.89 20.1 3 19 3H6.2L21 17.8V5Z" })
  ]))
}