import path from 'path';
import express, { Application } from 'express';

const isProd = process.env.NODE_ENV === 'production';

const app: Application = express();
const PORT = 8000;

app.use(express.json());

if (isProd) {
  app.use(express.static(path.join(__dirname, '../../client/dist')));
  app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
