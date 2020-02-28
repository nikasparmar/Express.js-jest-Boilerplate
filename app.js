var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const swaggerOptions = require('./config/swagger');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

const expressSwagger = require('express-swagger-generator')(app);
const morganBody = require('morgan-body');
const cors = require('cors')
const helmet = require('helmet')
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/tmp/')
    },
    filename: function (req, file, cb) {
        file.originalname = file.originalname.replace(/[^A-Z0-9.]+/ig, "_");
        cb(null, file.originalname)
    }
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())
app.use(helmet())

app.use(multer({
    storage: storage,
}).any());

app.use('/', indexRouter);
app.use('/users', usersRouter);

expressSwagger(swaggerOptions)
morganBody(app);

// export default app;
module.exports = app;