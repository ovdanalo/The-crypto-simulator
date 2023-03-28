import addFormats from 'ajv-formats';
import { Validator, ValidationError } from 'express-json-validator-middleware';
import { ErrorRequestHandler } from 'express';

const validator = new Validator({});

addFormats(validator.ajv, ["date-time"])
    .addKeyword("kind")
    .addKeyword("modifier");

export const validate = validator.validate;

export const validationErrorMiddleware: ErrorRequestHandler = (err, req, res, next) => {
    if (err instanceof ValidationError) {
        res.status(422).send({
            errors: err.validationErrors
        })

        next();
    } else {
        next(err);
    }
}

export * from "./user";
