const path = require('path')
const express =  require('express')
const { engine } = require('express-handlebars')

const app = express()
const PORT = process.env.PORT || 3001

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('home', {layout: false})
})

app.get('/signin', (req, res) => {
    res.render('signin', {layout: false})
})

app.get('/signup', (req, res) => {
    res.render('signup', {layout: false})
})


app.listen(PORT, () => console.log(`Now Listening At: http://localhost:${PORT}`))