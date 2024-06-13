# Stock Trades API

A simple REST API to manage stock trades. This project includes both back-end and front-end components.

## Deployed Application

Check out the live application here: [https://stockapi.netlify.app/](https://stockapi.netlify.app/)

## Features

- Create new stock trades
- Retrieve all trades
- Retrieve a specific trade by ID
- Update the price of a trade
- Delete a trade by ID

## Endpoints

### POST `/trades`

- Creates a new trade.
- Request Body: `{ "type": "buy", "user_id": 23, "symbol": "ABX", "shares": 30, "price": 134 }`

### GET `/trades`

- Retrieves all trades.
- Response: `{ "trades": [ ... ] }`

### GET `/trades/:id`

- Retrieves a trade by ID.
- Response: `{ "id": 1, "type": "buy", "user_id": 23, "symbol": "ABX", "shares": 30, "price": 134 }`

### DELETE `/trades/:id`

- Deletes a trade by ID.

### PATCH `/trades/:id`

- Updates the price of a trade.
- Request Body: `{ "price": 150 }`

## Running Locally

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/stock-api.git
   cd stock-api
