let express = require('express');
let path = require('path');
let app = express();
let router = require('./routes/router');


app.use(express.static(path.join(__dirname, 'public')));
app.use('/', router);

let port = process.env.PORT || 80;

app.listen(port);