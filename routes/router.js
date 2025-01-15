import { Router } from 'express';
import path from 'path';
import { readFile, writeFile } from 'fs/promises';

const router = Router();

const DATA_FILE = path.join('data', 'links.json');

router.get('/', (req, res) => {
  //res.render();
  res.send('<h1>Hello, Sushil!</h1>');
});

export default router;
