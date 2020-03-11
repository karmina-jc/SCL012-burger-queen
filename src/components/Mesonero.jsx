import React, { Fragment, useState, Component } from "react";
import { v4 as uuidv4 } from "uuid";
import UserTable from "./UserTable";
import AddProductForm from "./AddProductForm";
import LunchMenu from "./lunchMenu";
const Mesonero = () => {
  const foodData = [
    { id: uuidv4(), food: "Café americano", price: 500 },
    { id: uuidv4(), food: "Café con leche", price: 700 },
    { id: uuidv4(), food: "Sandwich de jamón y queso", price: 1000 }
  ];
  // state
  const [foodList, setFoodList] = useState(foodData);
  // agrega usuarios
  const addFood = food => {
    console.log("SE EJECUTA Y TRAE:", food);
    food.id = uuidv4();
    setFoodList([...foodList, food]);
    console.log("STATE EN MESONERO.JSX", foodList);
  };
  // elimina producto
  const deleteProduct = id => {
    console.log("id en Mesonero.jsx es:", id);
    const arrayFiltrado = foodList.filter(food => food.id !== id);
    setFoodList(arrayFiltrado);
  };
  // const updateOrder = (id, updatedOrder) => {
  //   setEditing(false)
  //   setFoodList(foodList.map(e => (e.id === id ? updatedOrder : e)))
  // }
  return (
    <Fragment>
      <h1>Mesonero</h1>
      <div>
        {/* <header className="App-header">
    
      </header> */}
        <div className="container">
          <h1>Burger Queen</h1>
          <div className="flex-row">
            <div className="flex-large">
              {
                <div>
                  <h3>Add Costumer</h3>
                  <AddProductForm addFood={addFood} />
                </div>
              }
              <div>
                <LunchMenu addFood={addFood} />
              </div>
            </div>
            <div className="flex-large">
              <h2>View Order</h2>
              <UserTable foodList={foodList} deleteProduct={deleteProduct} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Mesonero;