import React, {useState, Fragment} from 'react';


function total() { 

    const [total, setTotal] = useState[0]

    let cellsPrice = document.querySelectorAll('td + td');
    for (let i = 0; i < cellsPrice.length; i++) {
        setTotal(total += parseInt(cellsPrice[i]))       
    }
  
  return (
    <Fragment>    
        <tr>
            <td> Total: </td>
            <td>{total}</td>
        </tr>    
    </Fragment>
  );
}

export default total;