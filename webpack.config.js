module.exports = {
    entry: {
        //canvas  : './views/common_components/canvas.js',
        home    : './views/home/home_components/home.js',
        profile : './views/profile/profile_components/profile.js',
        login   : './views/login/login_components/login.js',
    },
    output: {
        path: '../dist',
        filename: '[name].bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            }
        ]
    }
};