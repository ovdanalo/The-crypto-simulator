import express from 'express';
import 'express-async-errors';
import axios from 'axios';

import prisma from '../lib/prisma/client';

import {
    validate,
    validationErrorMiddleware,
    userSchema,
    UserData
} from '../lib/validation'

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    try {
      const response = await axios.get('https://example.com/api/data');
      res.json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Something went wrong' });
    }
  });

app.get('/historic-investment', async (req, res) => {
    const { fiatCurrency, cryptoCurrency, start, end } = req.body;

    try {
        const response = await axios.get('https://example.com/api/data');
        res.json(response.data);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
      }
})

app.put('/users/:id', async (req, res) => {
    const userId = Number(req.params.id);
    const { cryptoSell, total, totalEur, percentuageEur, cryptoData, totalUsd } = req.body;

    try {
      const updatedUser = await prisma.user.update({
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
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred while updating the user.');
    }
  });

app.put('/planets/:id(\\d+)', validate({ body: userSchema }), async (req, res, next) => {
    const planetData: UserData = req.body;
    const planetId = Number(req.params.id);

    try {
        const planet = await prisma.user.update({
            where: { id: planetId },
            data: planetData
        })
        res.status(200).json(planet);
    } catch (error) {
        res.status(404);
        next(`Cannot PUT /planets/${planetId}`)
    }
});

app.delete('/planets/:id(\\d+)', async (req, res, next) => {;
    const planetId = Number(req.params.id);

    try {
        const planet = await prisma.user.delete({
            where: { id: planetId }
        })
        res.status(204).end();
    } catch (error) {
        res.status(404);
        next(`Cannot DELETE /planets/${planetId}`)
    }
});

app.use(validationErrorMiddleware);

export default app;
