const express = require('express');
const { json2csv } = require('json-2-csv');

const { findByName, findByColor } = require('../controllers/pokemon');


const router = express.Router();


router.post('/findByName', async (request, response) => {
    const { name } = request.body;
    if (!name) {
        response.status(400).json({ error: 'Name is required' });
    }

    const match = await findByName(name);
    response.json(match).end();
});

router.get('/csv/:color', async (request, response) => {
    try {
        const { color } = request.params;
        if (!color) {
            response.status(400).json({ error: 'Color is required' });
        }
        
        const match = await findByColor(color);

        if (!match || match.length === 0) {
            response.status(404).json({ error: `No Pokémon found with color ${color}` });
        }

        const csv = json2csv(match);
        
        response.header('Content-Type', 'text/csv');
        response.attachment(`${color}Pokemons.csv`).send(csv).end();
    } catch (error) {// Error generating CSV
        response.status(500).json({ error: 'Failed to generate CSV' });
    }    
});


module.exports = router;