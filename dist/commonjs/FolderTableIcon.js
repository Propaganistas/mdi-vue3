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
    _createElementVNode("path", { d: "M4 4C2.89 4 2 4.89 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V8C22 6.89 21.1 6 20 6H12L10 4H4M12 9H15V11H12V9M16 9H19V11H16V9M12 12H15V14H12V12M16 12H19V14H16V12M12 15H15V17H12V15M16 15H19V17H16V15Z" })
  ]))
}