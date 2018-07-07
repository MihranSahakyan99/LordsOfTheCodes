const express = require('express');
const routes  = require('./routes.js');
const app     = express();

app.use('/dist',express.static(__dirname + '/dist'));
app.set('view engine', 'ejs');
app.engine('js', require('express-react-views').createEngine());

routes(app);

app.listen(3000);