
import { Static, Type } from '@sinclair/typebox';

export const userSchema = Type.Object({
    email: Type.String(),
    password: Type.String(),
    cryptoSell: Type.Optional(Type.Record(Type.String(), Type.Object({
        sell: Type.Number(),
      }))),
    total: Type.Optional(Type.Number()),
    totalEur: Type.Optional(Type.String()),
    percentuageEur: Type.Optional(Type.String()),
    cryptoData: Type.Optional(Type.Record(Type.String(), Type.Object({
        moAmEur: Type.Number(),
        moAmUsd: Type.Number(),
        crAm: Type.Number(),
        priceChange: Type.Number(),
    }))),
    totalUsd: Type.Optional(Type.Number())
}, { additionalProperties: false })

export type UserData = Static<typeof userSchema>
