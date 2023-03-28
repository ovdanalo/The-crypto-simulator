"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.userSchema = typebox_1.Type.Object({
    email: typebox_1.Type.String(),
    password: typebox_1.Type.String(),
    cryptoSell: typebox_1.Type.Optional(typebox_1.Type.Record(typebox_1.Type.String(), typebox_1.Type.Object({
        sell: typebox_1.Type.Number(),
    }))),
    total: typebox_1.Type.Optional(typebox_1.Type.Number()),
    totalEur: typebox_1.Type.Optional(typebox_1.Type.String()),
    percentuageEur: typebox_1.Type.Optional(typebox_1.Type.String()),
    cryptoData: typebox_1.Type.Optional(typebox_1.Type.Record(typebox_1.Type.String(), typebox_1.Type.Object({
        moAmEur: typebox_1.Type.Number(),
        moAmUsd: typebox_1.Type.Number(),
        crAm: typebox_1.Type.Number(),
        priceChange: typebox_1.Type.Number(),
    }))),
    totalUsd: typebox_1.Type.Optional(typebox_1.Type.Number())
}, { additionalProperties: false });
//# sourceMappingURL=user.js.map