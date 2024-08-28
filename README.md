# Poke-Backend

A simple Pokémon API built with Express and Dockerized for easy deployment.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or later)
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js)
- [Docker](https://www.docker.com/get-started) (if you plan to run the project in a Docker container)

## Installation

### Option 1: run with Docker

1. Clone the repository:

    ```bash
    git clone https://github.com/martifapa/poke-backend.git
    cd poke-backend
    ```

2. Build and start the Docker containers:

    ```bash
    docker-compose up --build
    ```

### Option 2: run locally

1. Clone the repository:

    ```bash
    git clone https://github.com/martifapa/poke-backend.git
    cd poke-backend
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Run the server:

    ```bash
    npm start
    ```

## Endpoints

### 1. POST: `/pokemon/findByName`

Returns an object containing two key-value pairs:
- `count`: The number of Pokémon that match the specified criteria.
- `results`: An array of Pokémon objects that match the specified criteria.

#### Request Body:
```json
{
    "color": "<desired-color>"
}
```
#### Response example:
```{
    "count": <number>,
    "results": [
        {
            "name": "pikachu",
            "base_experience": 112,
            "height": 4,
            "weight": 60
        },
        ...
    ]
}
```

### 2. GET: `/pokemon/csv/:color`

Returns a csv file containing the Pokémon of the specified color

#### URL parameters:
- `color`: The color of the Pokémon to be retrieved.

#### Response example:
A downloadable csv file with the following columns:
- `name`
- `base_experience`
- `height`
- `weight`
