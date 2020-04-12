module.exports = function(req, res, next) {
    res.locals.isAuth = req.session.isUser
    res.locals.isAdmin=req.session.isAdmin
    res.locals.User=req.session.User
    res.setHeader('Access-Control-Allow-Credentials', true)
    next()
}