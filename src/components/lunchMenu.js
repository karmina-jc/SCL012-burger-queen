import React, { Component } from 'react';
// import { v4 as uuidv4 } from "uuid";
import db from '../config/firebase';


class lunchMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuA: []
    }
  }
  
  componentDidMount(){
    db.collection('Almuerzo').get().then((querySnapshot) => {
      const data = querySnapshot.docs.map(doc => doc.data());
      this.setState({
        menuA:data
      })
    
      console.log("STATE:", this.state);
    })
        
  }

  render(){
    return (      
      <div>
        <p>Menu</p>
        {this.state.menuA.map((item, key) =>{
            return (
              <div key={key}>
                <button onClick={this.props.addFood.bind(this, item)}><p>{item.nombre}</p> <p>${item.precio}</p></button>
              </div>
            ) 
          })          
        }      
      </div>
    )
    }
  }

  export default lunchMenu;