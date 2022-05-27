var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useMemo } from "react";
import styled from "styled-components";
var Profile = function (_a) {
    var originPokeData = _a.pokeData, _b = _a.type, type = _b === void 0 ? "default" : _b, onClick = _a.onClick;
    var pokeData = useMemo(function () { return originPokeData === null || originPokeData === void 0 ? void 0 : originPokeData[type]; }, [originPokeData, type]);
    return (_jsx(_Fragment, { children: pokeData ? (_jsxs(Box, __assign({ className: "box" }, { children: [_jsxs("p", { children: ["HELLO,", _jsx("br", {}), " I'M ", pokeData.name.toLocaleUpperCase(), "!"] }), _jsx(Image, { src: pokeData.sprites.front_default, onClick: onClick, type: type }), type === "detail" &&
                    ["name", "weight", "height"].map(function (propKey) { return (_jsxs("div", { children: [propKey, ":", pokeData[propKey]] })); }), type === "detail" &&
                    pokeData.stats.map(function (_a) {
                        var stat = _a[0], gage = _a[1];
                        return (_jsxs("div", { children: [stat, ":", gage] }));
                    })] }))) : (_jsxs(Box, { children: ["CHOOSE", _jsx("br", {}), "YOUR", _jsx("br", {}), "POKEMON!"] })) }));
};
export default Profile;
var Image = styled.img(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 200px;\n  cursor: ", ";\n"], ["\n  width: 200px;\n  cursor: ", ";\n"])), function (_a) {
    var type = _a.type;
    return type === "default" ? "pointer" : "default";
});
var Box = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  min-height: 300px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  line-height: 1.4;\n  p {\n    font-size: 18px;\n  }\n"], ["\n  min-height: 300px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  line-height: 1.4;\n  p {\n    font-size: 18px;\n  }\n"])));
var templateObject_1, templateObject_2;
