import React, { Component, Fragment } from "react";

import UserTable from "./UserTable";
import AddProductForm from "./AddProductForm";
import db from "../config/firebase";
import LunchMenu from "./lunchMenu";


class Mesonero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuA: [],
      menuB: [],
      foodList: []
    };
  }

  componentDidMount() {
    db.collection("Almuerzo")
      .get()
      .then(querySnapshot => {
        let data = querySnapshot.docs.map(doc => doc.data());
        this.setState({
          menuA: data
        });

        console.log("STATE:", this.state.menuA);
      });

    db.collection("Desayuno")
      .get()
      .then(querySnapshot => {
        let data = querySnapshot.docs.map(doc => doc.data());
        this.setState({
          menuB: data
        });

        console.log("STATE:", this.state.menuB);
      });
  }






  render() {
    return (

      <Fragment>
        <div>
          <div className="container">
            <div className="flex-row">
              <div className="flex-large">
                {
                  <div>
                    <AddProductForm />
                  </div>
                }
                <div>
                  <h1 className="mainTitle">Mesonero</h1>
                </div>
                <div className="menu">
                  {this.state.menuA.map((item, key) => {
                    return (
                      <div key={key}>
                        <LunchMenu name={item.nombre} price={item.precio} image={item.img} />
                      </div>
                    )
                  })}

                </div>
              </div>
              <div className="flex-large">
                <h2>View Order</h2>
                <UserTable />
              </div>
            </div>
          </div>
        </div>

      </Fragment>
    );
  }
}

export default Mesonero;

// const Mesonero = () => {
//   // state
//   const [foodList, setFoodList] = useState([]);
//   // agrega usuarios
//   const addFood = food => {
//     console.log("SE EJECUTA Y TRAE:", food);
//     food.id = uuidv4();
//     setFoodList([...foodList, food]);
//     console.log("STATE EN MESONERO.JSX", foodList);
//   };
//   // elimina producto
//   const deleteProduct = id => {
//     console.log("id en Mesonero.jsx es:", id);
//     const arrayFiltrado = foodList.filter(food => food.id !== id);
//     setFoodList(arrayFiltrado);
//   };
//   // const updateOrder = (id, updatedOrder) => {
//   //   setEditing(false)
//   //   setFoodList(foodList.map(e => (e.id === id ? updatedOrder : e)))
//   // }
//   return (
//     <Fragment>
//       <h1>Mesonero</h1>
//       <div>
//         {/* <header className="App-header">

//       </header> */}
//         <div className="container">
//           <h1>Burger Queen</h1>
//           <div className="flex-row">
//             <div className="flex-large">
//               {
//                 <div>
//                   <h3>Add Costumer</h3>
//                   <AddProductForm addFood={addFood} />
//                 </div>
//               }
//               <div>
//                 <LunchMenu addFood={addFood} />
//               </div>
//             </div>
//             <div className="flex-large">
//               <h2>View Order</h2>
//               <UserTable foodList={foodList} deleteProduct={deleteProduct} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </Fragment>
//   );
// };
// export default Mesonero;

// this.props.addOrder();