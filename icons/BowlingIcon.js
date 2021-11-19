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
    _createElementVNode("path", { d: "M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12.5,11A1.5,1.5 0 0,0 11,12.5A1.5,1.5 0 0,0 12.5,14A1.5,1.5 0 0,0 14,12.5A1.5,1.5 0 0,0 12.5,11M12,5A2,2 0 0,0 10,7A2,2 0 0,0 12,9A2,2 0 0,0 14,7A2,2 0 0,0 12,5M5.93,8.5C5.38,9.45 5.71,10.67 6.66,11.22C7.62,11.78 8.84,11.45 9.4,10.5C9.95,9.53 9.62,8.31 8.66,7.76C7.71,7.21 6.5,7.53 5.93,8.5Z" })
  ]))
}