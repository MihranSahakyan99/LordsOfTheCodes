const express      = require('express');
const mongoose     = require('mongoose');
const passport     = require('passport');
const Auth         = require('../passport/auth');
const flash        = require('connect-flash');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const session      = require('express-session');
const mysql        = require('mysql');
const DB           = require('../config/db');
const UserRouter   = require('../routes/UsersRouter');

class Server {
    constructor() {
        this.server = express();
    }

    _DBconfigurations() {
        console.log(`${__dirname}\\dist`);
        mongoose.Promise = global.Promise;
        mongoose.connect(DB.URL);
        const db = mongoose.connection;
        Auth(passport);
        db.once('open', () => {
            console.log('Connected to MongoDB.');
        });
        db.on('error', (error) => {
            console.log('Connection error:', error);
        });
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
    }

    start() {
        this._DBconfigurations();
        this.server.use('/dist', express.static(`../dist`));
        this.server.set('view engine', 'ejs');
        this.server.engine('js', require('express-react-views').createEngine());
        this.server.use(cookieParser());
        this.server.use(bodyParser.json());
        this.server.use(bodyParser.urlencoded({ extended: true }));
        this.server.use(session({
            secret: 'Lords Of The Codes', // session secret
            resave: true,
            saveUninitialized: true
        }));
        this.server.use(passport.initialize());
        this.server.use(passport.session());
        this.server.use(flash());

        UserRouter(this.server, passport);
        this.server.listen(3000);
    }
}

module.exports = new Server();