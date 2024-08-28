const express = require('express');
const pokemonRouter = require('./src/routes/pokemon');
const { PORT } = require('./src/constants');


const app = express();

app.use(express.json());

app.use('/pokemon', pokemonRouter);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});