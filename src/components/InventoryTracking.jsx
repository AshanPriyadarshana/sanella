import React, { useState } from 'react';

const InventoryTracking = () => {
    const [inventory, setInventory] = useState([]);
    const [item, setItem] = useState('');
    const [quantity, setQuantity] = useState(0);

    const addItem = () => {
        if (item && quantity > 0) {
            setInventory([...inventory, { item, quantity }]);
            setItem('');
            setQuantity(0);
        }
    };

    return (
        <div>
            <h2>Inventory Tracking</h2>
            <input 
                type="text" 
                value={item} 
                onChange={(e) => setItem(e.target.value)} 
                placeholder="Item Name" 
            />
            <input 
                type="number" 
                value={quantity} 
                onChange={(e) => setQuantity(Number(e.target.value))} 
                placeholder="Quantity" 
            />
            <button onClick={addItem}>Add Item</button>
            <ul>
                {inventory.map((inv, index) => (
                    <li key={index}>{inv.item} - Quantity: {inv.quantity}</li>
                ))}
            </ul>
        </div>
    );
};

export default InventoryTracking;