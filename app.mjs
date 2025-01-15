import express from 'express';
import Router from './routes/router.js';
const PORT = process.env.PORT | 3000;
import ejs from 'ejs';

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({
  extended: true
}));

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(Router);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
