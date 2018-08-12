const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

module.exports = (passport) => {
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        console.log("ID" + id);
        User.findById(id, (err, user) => {
            done(err, user);
        })
    });

    // TODO - error handling
    passport.use('local-signup', new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },
        (req, email, password, done) => {
                User.findByEmail(req.body.email)
                    .then(
                        user => {
                            if (!user) {
                                console.log("Request's body ---> ", req.body);
                                let new_user = new User;
                                if (User.isValidName(req.body.username)) {
                                    new_user.username = req.body.username;
                                } else {
                                    console.warn("err username");
                                    return -1;
                                }
                                if (User.isValidEmail(req.body.email)) {
                                    new_user.email = req.body.email;
                                } else {
                                    console.warn("err email");
                                    return -1;
                                }
                                if (User.isValidPasswordSignUp(req.body.password)) {
                                    new_user.password = User.generateHash(req.body.password);
                                } else {
                                    console.warn("err password");
                                    return -1;
                                }
                                if (req.body.confirm_pass === req.body.password) {
                                    new_user.save((err) => {
                                        if (err)
                                            return done(err);
                                        console.log("The user has been saved successfully!");
                                        done(null, new_user);
                                    });
                                } else {
                                    console.warn("passwords don't match!");
                                    return -1;
                                }
                            } else {
                                console.warn("The email is already taken!");
                                done(null, false);
                            }
                        }
                    )
                    .catch(
                        err => {
                            console.warn("EMAIL error ---->", err);
                        }
                    );
        })
    );

    // TODO - error handling
    passport.use('local-login', new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },
        (req, email, password, done) => {
            User.findByEmail(req.body.email)
                .then(
                    user => {
                        if (!user || !User.passwordsAreMatch(req.body.password, user.local.password)) {
                            console.warn("Wrong email or password!");

                            return done(null, false);
                        }

                        return done(null, user);
                    })
                .catch(
                    err => console.warn(err)
                );
        })
    );
};


