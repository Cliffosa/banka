import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/routes';
import cors from 'cors';
const app = express();

const PORT = process.env.PORT || 4500;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(router);

app.get('/', (req, res) => {
  return res.status(200).send({
    message: `Banka is a light-weight core banking application that powers banking operations like account
creation, customer deposit and withdrawals. This app is meant to support a single bank, where
users can signup and create bank accounts online, but must visit the branch to withdraw or
deposit money..`
  });
});

app.listen(PORT, () => {
  console.log(`App listening to port ${PORT}`);
});
