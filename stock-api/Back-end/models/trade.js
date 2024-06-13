const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../trades.json');

const readTrades = () => {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
};

const writeTrades = (trades) => {
    fs.writeFileSync(filePath, JSON.stringify(trades, null, 2));
};

module.exports = {
    readTrades,
    writeTrades
};
