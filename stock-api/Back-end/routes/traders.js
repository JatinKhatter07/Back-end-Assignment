const express = require('express');
const router = express.Router();
const {
    getAllTrades,
    getTradeById,
    createTrade,
    deleteTradeById,
    updateTradeById
} = require('../controllers/tradesController');

router.get('/trades', getAllTrades);
router.get('/trades/:id', getTradeById);
router.post('/trades', createTrade);
router.delete('/trades/:id', deleteTradeById);
router.patch('/trades/:id', updateTradeById);

module.exports = router;
