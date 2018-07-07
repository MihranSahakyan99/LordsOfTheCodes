module.exports = (app) => {
    // Home page
    app.get('/', (req, res) => {
        res.render('home', {name: 'Home'});
    });

    // Login page
    app.get('/login', (req, res) => {
        res.render('log-in', {name: 'Log in'});
    });

    // Sign in page
    app.get('/signin', (req, res) => {
        res.render('sign-in', {name: 'Signin'});
    });

    // Profile page
    app.get('/profile', (req, res) => {
        res.render('profile', {name: 'Profile'});
    });
};