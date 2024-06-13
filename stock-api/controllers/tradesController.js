const { readTrades, writeTrades } = require('../models/trade');

let nextId = 1;

// Helper function to update nextId
const updateNextId = (trades) => {
    if (trades.length > 0) {
        nextId = Math.max(...trades.map(trade => trade.id)) + 1;
    }
};

// Read trades to initialize nextId
updateNextId(readTrades());

const getAllTrades = (req, res) => {
    const trades = readTrades();
    res.status(200).json({ trades });
};

const getTradeById = (req, res) => {
    const trades = readTrades();
    const trade = trades.find(t => t.id === parseInt(req.params.id));
    if (trade) {
        res.status(200).json(trade);
    } else {
        res.status(404).send('ID not found');
    }
};

const createTrade = (req, res) => {
    const trades = readTrades();
    const newTrade = { id: nextId++, ...req.body };
    trades.push(newTrade);
    writeTrades(trades);
    res.status(201).json(newTrade);
};

const deleteTradeById = (req, res) => {
    let trades = readTrades();
    const index = trades.findIndex(t => t.id === parseInt(req.params.id));
    if (index !== -1) {
        trades = trades.filter(t => t.id !== parseInt(req.params.id));
        writeTrades(trades);
        res.status(200).send();
    } else {
        res.status(404).send('ID not found');
    }
};

const updateTradeById = (req, res) => {
    const trades = readTrades();
    const trade = trades.find(t => t.id === parseInt(req.params.id));
    if (trade) {
        trade.price = req.body.price;
        writeTrades(trades);
        res.status(200).json(trade);
    } else {
        res.status(404).send('ID not found');
    }
};

module.exports = {
    getAllTrades,
    getTradeById,
    createTrade,
    deleteTradeById,
    updateTradeById
};
