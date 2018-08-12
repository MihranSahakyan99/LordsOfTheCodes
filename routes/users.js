module.exports = (app, passport) => {
    app.get('/', (req, res) => {
        res.render('home/home', {name: 'Home'});
    });


    app.get('/profile', isLoggedIn, (req, res) => {
        res.render('profile/profile', {name: 'Profile'});
    });

    app.post('/', passport.authenticate('local-signup', {
            successRedirect : '/profile',
            failureRedirect : '/',
            failureFlash    : true
        })
    );

    app.get('/login', (req, res) => {
        res.render('login/login');
    });

    app.post('/login', passport.authenticate('local-login', {
            successRedirect : '/profile',
            failureRedirect : '/login',
            failureFlash    : true
        })
    );

    // TODO - if user logged out, prevent redirecting to 'profile' page
    app.get('/logout',  (req, res) => {
        req.logout();
        res.redirect('/');
    });
};

const isLoggedIn = (req, res, next) => {
    if(req.isAuthenticated())
        return next();
    res.redirect('/');
};
