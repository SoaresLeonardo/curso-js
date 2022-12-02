exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Este é um valor da variavel local.'
    next();
};