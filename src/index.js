const express = require('express');
const app = express();
const flash = require('express-flash');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const handlebars = require('express-handlebars');
const path = require('path'); // trong tai



app.set('view engine', 'hbs');
app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true })) // req.body

app.use(cookieParser('sud'))
app.use(session({ cookie: { maxAge: 30000 } })) // req.session

app.use(flash()); // req.flash('err') || ('success')


app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    return res.render('home');
})

const port = 3000;
app.listen(port, () => {
    console.log(`Server Running on ${port}`);
});