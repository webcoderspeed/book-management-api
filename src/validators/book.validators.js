import joi from 'joi';

export const validateCreateBook = (req, res, next) => {
	const schema = joi.object({
		title: joi.string().required(),
		author: joi.string().required(),
		summary: joi.string().required(),
	});

	const { error } = schema.validate(req.body);

	if (error) next(error);

	next();
};

export const validateUpdateBook = (req, res, next) => {
	const schema = joi.object({
		title: joi.string().optional(),
		author: joi.string().optional(),
		summary: joi.string().optional(),
	});

	const { error } = schema.validate(req.body);

	if (error) next(error);

	next();
};


