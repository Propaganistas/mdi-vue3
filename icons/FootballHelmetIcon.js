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
    _createElementVNode("path", { d: "M13.5,12A1.5,1.5 0 0,0 12,13.5A1.5,1.5 0 0,0 13.5,15A1.5,1.5 0 0,0 15,13.5A1.5,1.5 0 0,0 13.5,12M13.5,3C18.19,3 22,6.58 22,11C22,12.62 22,14 21.09,16C17,16 16,20 12.5,20C10.32,20 9.27,18.28 9.05,16H9L8.24,16L6.96,20.3C6.81,20.79 6.33,21.08 5.84,21H3A1,1 0 0,1 2,20A1,1 0 0,1 3,19V16A1,1 0 0,1 2,15A1,1 0 0,1 3,14H6.75L7.23,12.39C6.72,12.14 6.13,12 5.5,12H5.07L5,11C5,6.58 8.81,3 13.5,3M5,16V19H5.26L6.15,16H5Z" })
  ]))
}