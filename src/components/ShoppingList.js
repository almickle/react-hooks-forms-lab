import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchInput, setSearchInput] = useState("")
  const [newName, setNewName] = useState()
  const [newCategory, setNewCategory] = useState("Produce")
  const [newItem, setNewItem] = useState()
  const [displayItems, setNewArray] = useState(items)

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearch(event) {
    setSearchInput(event.target.value)
  }

  // Add new item handling
  function handleNewName(event) {
    event.preventDefault()
    setNewName(event.target.value)
  }

  function handleNewCategory(event) {
    setNewCategory(event.target.value)
  }

  function onItemFormSubmit(event) {
      event.preventDefault()
        const newFormItem = {
          id: uuid(),
          name: newName,
          category: newCategory,
        }
      setNewItem(newFormItem)
      setNewArray([...items, newFormItem])
      console.log("displayItems")
      console.log(displayItems)
  }


  const itemsToDisplay = displayItems.filter((item) => {
    if (searchInput !== "") return item.name.toLowerCase().includes(searchInput.toLowerCase())
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  const displayElements = itemsToDisplay.map(item => <Item key={item.id} name={item.name} category={item.category} />)


  return (
    <div className="ShoppingList">
      <ItemForm assignName={handleNewName} assignCategory={handleNewCategory} onItemFormSubmit={onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearch} />
      <ul className="Items">
       {displayElements}
      </ul>
    </div>
  );
}

export default ShoppingList;


// {itemsToDisplay.map((item) => (
//   <Item key={item.id} name={item.name} category={item.category} />
// ))}