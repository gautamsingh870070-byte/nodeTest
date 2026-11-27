const loggerMiddleware = (req, res, next) => {

    console.log('Middleware is running!');
    console.log('Method:', req.method);
    console.log('URL:', req.originalUrl);

    next();
};

module.exports = loggerMiddleware;