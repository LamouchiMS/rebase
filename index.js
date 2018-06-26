const app = require('express')();
app.get('/', (req, res) => {
    res.send('Hello');
});

app.listen(3000, 'localhost', () => {
    console.log('Listening...')
});