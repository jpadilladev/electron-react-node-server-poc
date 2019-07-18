"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const controllers = require("./controllers");
const core_1 = require("@overnightjs/core");
const logger_1 = require("@overnightjs/logger");
class DemoServer extends core_1.Server {
    constructor(ENV) {
        super(true);
        this.SERVER_START_MSG = 'Demo server started on port: ';
        this.DEV_MSG = 'Express Server is running in development mode. No front-end ' +
            'content is being served.';
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.setupControllers();
        if (ENV !== 'production') {
            this.app.get('*', (req, res) => res.send(this.DEV_MSG));
        }
        else {
            this.serveFrontEndProd();
        }
    }
    setupControllers() {
        const ctlrInstances = [];
        for (const name in controllers) {
            if (controllers.hasOwnProperty(name)) {
                let Controller = controllers[name];
                ctlrInstances.push(new Controller());
            }
        }
        super.addControllers(ctlrInstances);
    }
    serveFrontEndProd() {
        const dir = path.join(__dirname, '');
        this.app.set('views', dir);
        this.app.use(express.static(dir));
        this.app.get('*', (req, res) => {
            res.sendFile('index.html', { root: dir });
        });
    }
    start(port) {
        this.app.listen(port, () => {
            logger_1.Logger.Imp(this.SERVER_START_MSG + port);
        });
    }
}
exports.default = DemoServer;
