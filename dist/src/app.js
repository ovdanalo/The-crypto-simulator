"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const client_1 = __importDefault(require("../lib/prisma/client"));
const validation_1 = require("../lib/validation");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/planets', async (req, res) => {
    const planets = await client_1.default.planet.findMany();
    res.json(planets);
});
app.get('/planets/:id(\\d+)', async (req, res, next) => {
    const planetId = Number(req.params.id);
    const planet = await client_1.default.planet.findUnique({
        where: { id: planetId }
    });
    if (!planet) {
        res.status(404);
        return next(`Cannot GET /planets/${planetId}`);
    }
    res.json(planet);
});
app.post('/planets', (0, validation_1.validate)({ body: validation_1.planetSchema }), async (req, res) => {
    const planetData = req.body;
    const planet = await client_1.default.planet.create({
        data: planetData
    });
    res.status(201).json(planet);
});
app.put('/planets/:id(\\d+)', (0, validation_1.validate)({ body: validation_1.planetSchema }), async (req, res, next) => {
    const planetData = req.body;
    const planetId = Number(req.params.id);
    try {
        const planet = await client_1.default.planet.update({
            where: { id: planetId },
            data: planetData
        });
        res.status(200).json(planet);
    }
    catch (error) {
        res.status(404);
        next(`Cannot PUT /planets/${planetId}`);
    }
});
app.delete('/planets/:id(\\d+)', async (req, res, next) => {
    ;
    const planetId = Number(req.params.id);
    try {
        const planet = await client_1.default.planet.delete({
            where: { id: planetId }
        });
        res.status(204).end();
    }
    catch (error) {
        res.status(404);
        next(`Cannot DELETE /planets/${planetId}`);
    }
});
app.use(validation_1.validationErrorMiddleware);
exports.default = app;
//# sourceMappingURL=app.js.map