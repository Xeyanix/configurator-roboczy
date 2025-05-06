const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 9000;


const app = express();

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

const logger = (req, res, next) => {
  console.log('URL: ', req.originalUrl);
  next();
};

app.set('view engine', 'ejs');
app.use(logger);

const productsRoutes = require('./routes/products');
app.use('/products', productsRoutes);

app.get('/', (req, res) => {
  res.send('Server is running');
});
// app.listen(9000);



app.listen(PORT, () => console.log(`Listening on ${PORT}`));


