'use strict';

const Express = require('express');
const { resolve } = require('path')

const app = new Express();
let port = process.env.PORT || 3000;

app.set('port', port);
app.use(Express.static('public'));
app.get('/', (_, res) => res.sendFile(resolve(__dirname, '..', 'public', 'index.html')));
app.listen(app.get('port'), () => console.log(`Listening to port ${port}`));
