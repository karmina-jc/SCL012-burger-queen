import React, { Fragment, Component } from "react";


class UserTable extends Component {
  constructor(props) {
    super(props);
    console.log("FOOD EN PROPS", props.foodList);
    this.state = {
      foodList: props.foodList
    };
  }

  deleteFoodFromList = id => {
    let newArrayOfFood = this.state.foodList.filter(food => {
      return food.id !== id;
    });

    this.setState({
      foodList: newArrayOfFood
    });
  };

  render() {
    return (
      <Fragment>
        <table>
          <thead>
            <tr>
              <th>Food</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
      </Fragment>
    );
  }
}

export default UserTable;
