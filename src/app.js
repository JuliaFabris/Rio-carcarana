const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000; /* variable de entorno necesaria para el deploy */

/* Enrutadores */
let homeRouter = require('./routes/home');
let backRouter = require('./routes/backRouter');

app.use(express.static('./public'));

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname,'views'));

/* Capturar informacion */
app.use(express.urlencoded({ extended : false}));
app.use(express.json())

app.use(express.static( '../public'));


//app.use(express.urlencoded({ extended: false }));

app.use('/', homeRouter);
app.get('/back', backRouter);
/* app.use('/back', function (req, res) {
    res.render('back')
})  */

/* Error 404 */
app.use((req, res, next) => {
    res.status(404).render('404')
})


app.listen(port, () => console.log(`Servidor levantado en el puerto ${port}
http://localhost:${port}`));

