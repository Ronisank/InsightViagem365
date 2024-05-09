const { verify, decode } = require('jsonwebtoken');

async function auth(req, res, next) {
    try {
        const { authorization } = req.headers;

        if (!authorization) {
            return res.status(401).send({ message: 'Token is required' });
        }
        req['payload'] = verify(authorization, process.env.SECRET_KEY, (err, decoded) => {
            if (err) return res.status(500).send(
                { message: 'Failed to authenticate token.' });

            req.user_id = decoded.user_id;
            console.log(req['payload'] + ' payload do auth')
            console.log(req.user_id + ' decoded do auth')
            next();
        });
    } catch (error) {
        return res.status(401).send({ message: 'Invalid token' });
    }
}

module.exports = auth;