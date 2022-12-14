const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = function(req, res, next) {
    // Get toke from header
    const token = req.header('x-auth-token')

    // chck if no token
    if(!token) {
        return res.status(401).json({msg: "No token autorization denied"})
    }

    // verify token
    try{
        const decoded = jwt.verify(token, config.get('jwtSecret'))

        req.user = decoded.user
        next()
    }catch(err){
        res.status(401).json({msg: 'Token is not valid'})
    }
}