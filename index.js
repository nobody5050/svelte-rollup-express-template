import express from 'express';
import cors from 'cors';
import path from 'path';
import chalk from 'chalk';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// configure express
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());

app.use(express.json({
    type: "*/*"
}));

app.use(express.static('public'));
app.use('*', (req, res) => {
    // check if the request is for an api endpoint
    if (req.originalUrl.startsWith('/api')) return res.status(404).send('404 Not Found');
    // otherwise, send the index.html file
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(chalk.blue(`Serving app at http://localhost:${port}`));
});