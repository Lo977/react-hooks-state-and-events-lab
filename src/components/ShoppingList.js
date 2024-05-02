import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [isFilter, setIsFilter] = useState("All");
  const renderList =
    isFilter === "All"
      ? items
      : items.filter((item) => item.category === isFilter);
  console.log(renderList);

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select
          name="filter"
          value={isFilter}
          onChange={(e) => setIsFilter(e.target.value)}
        >
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {renderList.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
