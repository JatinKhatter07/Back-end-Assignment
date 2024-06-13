document.addEventListener('DOMContentLoaded', () => {
    const tradeForm = document.getElementById('tradeForm');
    const tradesList = document.getElementById('tradesList');

    const apiUrl = 'http://localhost:3000/trades';

    const fetchTrades = async () => {
        const response = await fetch(apiUrl);
        const data = await response.json();
        renderTrades(data.trades);
    };

    const renderTrades = (trades) => {
        tradesList.innerHTML = '';
        trades.forEach(trade => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${trade.type.toUpperCase()} ${trade.shares} shares of ${trade.symbol} at $${trade.price} (User: ${trade.user_id})</span>
                <button onclick="deleteTrade(${trade.id})">Delete</button>
                <button onclick="updateTrade(${trade.id})">Update</button>
            `;
            tradesList.appendChild(li);
        });
    };

    tradeForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const trade = {
            type: document.getElementById('type').value,
            user_id: parseInt(document.getElementById('userId').value),
            symbol: document.getElementById('symbol').value,
            shares: parseInt(document.getElementById('shares').value),
            price: parseInt(document.getElementById('price').value)
        };

        await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(trade)
        });

        tradeForm.reset();
        fetchTrades();
    });

    window.deleteTrade = async (id) => {
        await fetch(`${apiUrl}/${id}`, {
            method: 'DELETE'
        });
        fetchTrades();
    };

    window.updateTrade = async (id) => {
        const newPrice = prompt("Enter new price:");
        if (newPrice) {
            await fetch(`${apiUrl}/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ price: parseInt(newPrice) })
            });
            fetchTrades();
        }
    };

    fetchTrades();
});
