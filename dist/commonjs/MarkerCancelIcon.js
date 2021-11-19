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
    _createElementVNode("path", { d: "M17.5,13C20,13 22,15 22,17.5C22,20 20,22 17.5,22C15,22 13,20 13,17.5C13,15 15,13 17.5,13M17.5,14.5C16.94,14.5 16.42,14.65 16,14.92L20.08,19C20.35,18.58 20.5,18.06 20.5,17.5A3,3 0 0,0 17.5,14.5M14.5,17.5A3,3 0 0,0 17.5,20.5C18.06,20.5 18.58,20.35 19,20.08L14.92,16C14.65,16.42 14.5,16.94 14.5,17.5M18.5,1.15C19,1.15 19.5,1.34 19.89,1.73L22.73,4.56C23.5,5.35 23.5,6.61 22.73,7.39L18.95,11.16C18.5,11.06 18,11 17.5,11C16.67,11 15.88,11.16 15.15,11.44L11.26,7.55L17.07,1.73C17.46,1.34 17.97,1.15 18.5,1.15M10.3,8.5L13.89,12.1C12.15,13.26 11,15.25 11,17.5C11,18 11.06,18.5 11.16,18.95L10,20.12C9.22,20.89 7.97,20.9 7.19,20.14L6.33,21H0.67L4.36,17.31C3.56,16.5 3.56,15.24 4.34,14.46L10.3,8.5Z" })
  ]))
}