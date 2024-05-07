const {verify} = require('jsonwebtoken');

async function auth(req, res, next) {
    try {
        const {authorization} = req.headers;

        if (!authorization) {
            return res.status(401).send({message: 'Token is required'});
        }
        req['payload'] = verify(authorization, process.env.SECRET_KEY);

        next();
    } catch (error) {
        return res.status(401).send({message: 'Invalid token'});
    }
}

module.exports = auth;