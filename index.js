const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const app = express();

app.use(express.static('/public'));



express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('public', path.join(__dirname, 'public'))
  .set('view engine', 'ejs')

  .get('/', (req, res) => res.render('pages/index'))
  .get('/from',  (req, res) => res.render('pages/from'))
  .get('/calculate')
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

  function calc(req, res){
    const type = req.query.package;
    const weight = req.query.weight;

    const params = {type: type, weight: weight};
    res.render('pages/result', params);

  }

  