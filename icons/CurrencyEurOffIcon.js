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
    _createElementVNode("path", { d: "M22.11 21.46L2.39 1.73L1.11 3L6.69 8.58C6.63 8.72 6.55 8.85 6.5 9H2L3 11H6.03C6 11.2 6 11.53 6 12S6 12.8 6.03 13H2L3 15H6.5C7.13 16.75 8.21 18.19 9.76 19.31S13.05 21 15 21C15.92 21 17 20.77 18.17 20.32C18.24 20.3 18.29 20.27 18.35 20.24L20.84 22.73L22.11 21.46M8.56 13C8.5 12.55 8.47 12.22 8.47 12S8.5 11.45 8.56 11H9.13L11.1 13H8.56M15 18.5C13.89 18.5 12.78 18.17 11.66 17.5S9.72 15.97 9.22 15H13.11L16.45 18.34C16 18.45 15.5 18.5 15 18.5M15 9L15.97 11H14.22L12.2 9H15M10.55 7.35L8.74 5.54C9.06 5.24 9.39 4.95 9.76 4.69C11.31 3.56 13.05 3 15 3C17.3 3 19.3 3.77 21 5.3L19.2 7.08C18 6 16.58 5.5 15 5.5C13.89 5.5 12.78 5.83 11.66 6.5C11.24 6.77 10.88 7.05 10.55 7.35Z" })
  ]))
}