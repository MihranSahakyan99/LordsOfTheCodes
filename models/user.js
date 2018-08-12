const mongoose = require('mongoose');
const bcrypt   = require('bcryptjs');

const userSchema = mongoose.Schema({
    local : {
        username  : String,
        email     : String,
        password  : String
    }
});

class User {
    get username() {
        return this.local.username;
    }

    set username(username) {
        this.local.username = username;
    }

    get email() {
        return this.local.email;
    }

    set email(email) {
        this.local.email = email;
    }

    get password() {
        return this.local.password;
    }

    set password(password) {
        this.local.password = password;
    }

    static isValidEmail(email) {
        const  re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    static isValidPasswordSignUp(password) {
        if(password.length < 6)
            return false;

        const variations = {
            digits   : /\d/.test(password),
            lower    : /[a-z]/.test(password),
            upper    : /[A-Z]/.test(password),
            nonWords : /\W/.test(password),
        };

        let score = 0;
        for (let check in variations)
            score += (variations[check] === true) ? 1 : 0;

        score += score * 13;

        return (score >= 30);
    }

    static isValidName(name) {
        const  re = /^[a-zA-Z]+$/;
        return re.test(name);
    }

    static generateHash(password) {
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(password, salt);
    }

    static passwordsAreMatch(input_password, db_password) {
        return bcrypt.compareSync(input_password, db_password);
    }

    static findByEmail(email) {
        return this.findOne({'local.email': email});
    }
}

module.exports = mongoose.model('user', userSchema.loadClass(User));
