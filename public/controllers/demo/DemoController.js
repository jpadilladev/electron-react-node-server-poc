"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
var DemoController_1, _a, _b;
const http_status_codes_1 = require("http-status-codes");
const core_1 = require("@overnightjs/core");
const logger_1 = require("@overnightjs/logger");
const express_1 = require("express");
let DemoController = DemoController_1 = class DemoController {
    sayHello(req, res) {
        try {
            const { name } = req.params;
            if (name === 'make_it_fail') {
                throw Error('User triggered failure');
            }
            logger_1.Logger.Info(DemoController_1.SUCCESS_MSG + name);
            return res.status(http_status_codes_1.OK).json({
                message: DemoController_1.SUCCESS_MSG + name,
            });
        }
        catch (err) {
            logger_1.Logger.Err(err, true);
            return res.status(http_status_codes_1.BAD_REQUEST).json({
                error: err.message,
            });
        }
    }
};
DemoController.SUCCESS_MSG = 'hello ';
tslib_1.__decorate([
    core_1.Get(':name'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _a : Object, typeof (_b = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], DemoController.prototype, "sayHello", null);
DemoController = DemoController_1 = tslib_1.__decorate([
    core_1.Controller('api/say-hello')
], DemoController);
exports.default = DemoController;
