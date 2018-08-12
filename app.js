const express      = require('express');
const mongoose     = require('mongoose');
const passport     = require('passport');
const flash        = require('connect-flash');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const session      = require('express-session');
const mysql        = require('mysql');
const DB           = require('./config/db');

/* MySQL configurations
const mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "mydb"
    //password: "",
});
mysqlConnection.connect((err) => {
    if (err)
        throw (err);
    console.log('Connected to MySQL.');
});
*/

/* MongoDB configurations */
mongoose.Promise = global.Promise;
mongoose.connect(DB.URL);
const db = mongoose.connection;
db.once('open', () => {
    console.log('Connected to MongoDB.');
});
db.on('error', (error) => {
    console.log('Connection error:', error);
});
require('./passport/auth')(passport);

const app = express();
app.use('/dist', express.static(__dirname + '/dist'));
app.set('view engine', 'ejs');
app.engine('js', require('express-react-views').createEngine());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'Lords Of The Codes', // session secret
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./routes/users')(app, passport);

app.listen(3000);
