import React from 'react';
import Item from './Item';

function ItemList({ items, onBuy, onRestock, onDelete, onUpdate }) {
    return (
      <div>
        {items.map(item => (
          <Item
            key={item.id}
            item={item}
            onBuy={() => onBuy(item.id)}
            onRestock={(amount) => onRestock(item.id, amount)}
            onDelete={() => onDelete(item.id)}
            onUpdate={(updatedItem) => onUpdate(item.id, updatedItem)}
          />
        ))}
      </div>
    );
  }

export default ItemList;
