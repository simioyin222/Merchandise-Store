import React, { useState } from 'react';
import ItemList from './components/ItemList';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    setItems(prevItems => [...prevItems, { ...newItem, id: Date.now() }]);
  };

  const updateItem = (itemId, updatedItem) => {
    setItems(prevItems => prevItems.map(item =>
      item.id === itemId ? { ...item, ...updatedItem } : item
    ));
  };

  const deleteItem = (itemId) => {
    setItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const buyItem = (itemId) => {
    setItems(prevItems => prevItems.map(item =>
      item.id === itemId ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item
    ));
  };

  const restockItem = (itemId, restockAmount) => {
    setItems(prevItems => prevItems.map(item =>
      item.id === itemId ? { ...item, quantity: item.quantity + restockAmount } : item
    ));
  };

  return (
    <div className="App">
      <h1>Merchandise Store</h1>
      <ItemList
        items={items}
        onBuy={buyItem}
        onRestock={restockItem}
        onDelete={deleteItem}
        onUpdate={updateItem}
      />
    </div>
  );
}

export default App;