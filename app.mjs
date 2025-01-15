import express from 'express';
const PORT = process.env.PORT | 3000;
import ejs from 'ejs';

const app = express();

const server = app.listen(8080, '127.0.0.1', (error) => {
  if (error) {
    throw error // e.g. EADDRINUSE
  }
  console.log(`Server Listening on port ${PORT}`)
})

app.set('view engine', 'ejs');
//app.use('views', '/views');

app.get('/', (req, res)=> {
  res.send(`<h1>Hello, Sushil</h1>`);
})
