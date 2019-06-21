const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const app = express();

app.use(express.static(__dirname + '/public'));



express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('public', path.join(__dirname, 'public'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/from', (req, res) => res.render('public/from'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

  function form(){

  }