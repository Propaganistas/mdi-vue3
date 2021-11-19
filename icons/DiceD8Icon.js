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
    _createElementVNode("path", { d: "M12 2C11.5 2 11 2.19 10.59 2.59L2.59 10.59C1.8 11.37 1.8 12.63 2.59 13.41L10.59 21.41C11.37 22.2 12.63 22.2 13.41 21.41L21.41 13.41C22.2 12.63 22.2 11.37 21.41 10.59L13.41 2.59C13 2.19 12.5 2 12 2M12 8.25C13.31 8.25 14.38 9.2 14.38 10.38C14.38 11.07 14 11.68 13.44 12.07C14.14 12.46 14.6 13.13 14.6 13.9C14.6 15.12 13.44 16.1 12 16.1C10.56 16.1 9.4 15.12 9.4 13.9C9.4 13.13 9.86 12.46 10.56 12.07C10 11.68 9.63 11.07 9.63 10.38C9.63 9.2 10.69 8.25 12 8.25M12 9.5C11.5 9.5 11.1 9.95 11.1 10.5C11.1 11.05 11.5 11.5 12 11.5C12.5 11.5 12.9 11.05 12.9 10.5C12.9 9.95 12.5 9.5 12 9.5M12 12.65C11.39 12.65 10.9 13.14 10.9 13.75C10.9 14.36 11.39 14.85 12 14.85C12.61 14.85 13.1 14.36 13.1 13.75C13.1 13.14 12.61 12.65 12 12.65Z" })
  ]))
}