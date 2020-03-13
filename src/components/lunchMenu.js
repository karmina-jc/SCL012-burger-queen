import React, { Fragment } from "react";


const LunchMenu = (props) => {


  return (
    <Fragment>
      <div>
        <button className="menuButton">
          <img src={props.image} alt="" className="iconButton" />
          <p> {props.name}</p>
          <p>{props.price}</p>
        </button>
      </div>
    </Fragment>

  );
};

export default LunchMenu;
