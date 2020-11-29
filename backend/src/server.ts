import app from './app';
import database from './database';

database.sync({force: true});

var port = process.env.PORT || 3001;
app.listen(port, function () {
    console.log('Umbler listening on port %s', port);
});

