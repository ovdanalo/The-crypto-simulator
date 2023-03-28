"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const axios_1 = __importDefault(require("axios"));
const client_1 = __importDefault(require("../lib/prisma/client"));
const validation_1 = require("../lib/validation");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', async (req, res) => {
    try {
        const response = await axios_1.default.get('https://example.com/api/data');
        res.json(response.data);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
});
app.post('/historic-investment', async (req, res) => {
    const { fiatCurrency, cryptoCurrency, start, end } = req.body;
    try {
        const response = await axios_1.default.get(`https://api.coingecko.com/api/v3/coins/${cryptoCurrency}/market_chart/range?vs_currency=${fiatCurrency}&from=${start}&to=${end}`);
        res.json(response.data);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
});
app.put('/users/:id', async (req, res) => {
    const userId = Number(req.params.id);
    const { cryptoSell, total, totalEur, percentuageEur, cryptoData, totalUsd } = req.body;
    try {
        const updatedUser = await client_1.default.user.update({
            where: { id: userId },
            data: {
                cryptoSell,
                total,
                totalEur,
                percentuageEur,
                cryptoData,
                totalUsd,
            },
        });
        res.json(updatedUser);
    }
    catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while updating the user.');
    }
});
app.put('/planets/:id(\\d+)', (0, validation_1.validate)({ body: validation_1.userSchema }), async (req, res, next) => {
    const planetData = req.body;
    const planetId = Number(req.params.id);
    try {
        const planet = await client_1.default.user.update({
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
        const planet = await client_1.default.user.delete({
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