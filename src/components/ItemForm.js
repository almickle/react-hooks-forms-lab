import React from "react";

function ItemForm({ assignName, assignCategory, onItemFormSubmit }) {
  
  return (
    <form className="NewItem" onSubmit={onItemFormSubmit} >
      <label>
        Name:
        <input type="text" name="name" placeholder="Pickle..." onChange={assignName} />
      </label>

      <label>
        Category:
        <select name="category" onChange={assignCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
