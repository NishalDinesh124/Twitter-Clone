const session = require('express-session')

module.exports = function(app) {
    // install session middleware
    app.use(session({
        secret:'Key',
        resave :true,
        saveUninitialized :false

    }))
}