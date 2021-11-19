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
    _createElementVNode("path", { d: "M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12.25,13.27H10.81V16.5H9V7.71H12.26C13.29,7.71 14.09,7.94 14.66,8.4C15.22,8.87 15.5,9.5 15.5,10.36C15.5,10.96 15.37,11.46 15.11,11.86C14.85,12.26 14.46,12.58 13.93,12.81L15.83,16.4V16.5H13.89L12.25,13.27M10.81,11.81H12.27C12.72,11.81 13.07,11.69 13.32,11.46C13.57,11.23 13.69,10.91 13.69,10.5C13.69,10.09 13.58,9.77 13.34,9.53C13.11,9.29 12.75,9.18 12.26,9.18H10.81V11.81Z" })
  ]))
}