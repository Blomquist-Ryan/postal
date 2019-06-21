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
  .get('/calculate', calc)
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

  function calc(req, res){
    const type = req.query.package;
    const weight = req.query.weight;

    computeRate(Res, type, weight);



   

  }

function computeRate(Response, type, weight){
  const price = 0;

  if(type == "stamped"){
    if(wieght < 1){
      price = .55;
    } else if(weight < 3.5){
      price = .55 + ((weight - 1) * .15);

    } else {
      price = 1;
    }
    type = "stamped letter";

  } else if(type == "metered"){
    if(wieght < 1){
      price = .50;
    } else if(weight < 3.5){
      price = .50 + ((weight - 1) *.15);

    } else {
      price = 1;
    }

    type = "metered letter";

  } else if(type == "flat"){
    if(wieght < 1){
      price = 1;
    } else if(weight < 13){
      price = 1 + (((weight-1) *.15));

    } else {
      price = 2.80;
    }
    type = "large envelopes";


  } else if(type == "retail"){
    if(wieght < 4){
      price = 3.66;
    } else if(weight < 8){
      price = 4.39;

    } else if(weight < 12){
      price = 4.19;

    } else {
      price = 5.71;
    }
    type = "First-Class package";
  }

 const params = {type: type, weight: weight, price: price};
    res.render('pages/result', params);
}
  