import React from 'react';

function Item({ item, onBuy, onRestock, onDelete }) {
  return (
    <div>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>{item.quantity > 0 ? `Quantity: ${item.quantity}` : 'Out of Stock'}</p>
      <button onClick={() => onBuy(item.id)}>Buy</button>
      <button onClick={() => onRestock(item.id, 1)}>Restock by 1</button>
      <button onClick={() => onDelete(item.id)}>Delete</button>
    </div>
  );
}

export default Item;



// import {useState} from "react"

// const Items = () => {
//   const [name, setName] = useState("merchandise1")
//   const [inventory, setInv] = useState(5)
//   const [operation, setOperation] = useState("add")

//   const handleClick = () => {
//     if (operation === "add") {
//       setName("merchandise2")
//       setInv(inventory + 1)
//     } else if (operation === "subtract") {
//       setName("merchandise1")
//       setInv(inventory - 1)
//     }
//   }

//   const toggleOperation = () => {
//     setOperation(prevOperation =>
//       prevOperation === "add" ? "subtract" : "add"
//     )
//   }

//   return (star
//     <div className="home">
//       <h2>Homepage</h2>
//       <p>
//         {inventory} units of {name} in inventory
//       </p>
//       <button onClick={handleClick}>Modify Inventory</button>
//       <button onClick={toggleOperation}>
//         {operation === "add" ? "Switch to Subtract" : "Switch to Add"}
//       </button>
//     </div>
//   )
// }

// export default Items
