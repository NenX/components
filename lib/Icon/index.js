"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var configs_1 = __importDefault(require("../configs"));
var IconScriptUrl = configs_1.default.IconScriptUrl;
function Icon(props) {
    return react_1.default.createElement(antd_1.Icon, __assign({}, props));
}
Icon.MyIcon = antd_1.Icon.createFromIconfontCN({
    scriptUrl: IconScriptUrl || '//at.alicdn.com/t/font_1303463_2alryf6xujk.js',
});
exports.default = Icon;
