"use strict";
exports.__esModule = true;
exports.constant = void 0;
var constant = /** @class */ (function () {
    function constant() {
    }
    constant.fullNameRegex = /^([a-zA-Z ]{2,40})$/;
    constant.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    constant.mobileRegex = /^([0-9]{10})$/;
    constant.cityRegex = /^([a-zA-Z]{2,20})$/;
    constant.ageRegex = /^([0-9]{2})$/;
    constant.sallaryRegex = /^([0-9]{2,100})$/;
    return constant;
}());
exports.constant = constant;