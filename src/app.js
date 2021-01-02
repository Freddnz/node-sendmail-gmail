require('dotenv').config();
const app = require('./server');

app.listen(app.get('port'), () => {
    console.log('into to http://localhost:'+ app.get('port'));
})