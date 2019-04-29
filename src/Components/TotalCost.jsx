import React from 'react';

const TotalCost = (props) => {
    // Removed as a total of all the single prices didn't seem as important as the others -
    // const totalPrice = props.basketList.length ?
    // props.basketList.map((item)=> item.price * item.quantity).reduce((acc, currVal) => acc + currVal)
    // : 0;
    
    const totalTax = props.basketList.length ?
    props.basketList.map((item)=>
    item.taxDue * item.quantity)
    .reduce((acc, currVal) => acc + currVal)
    : 0;
    
    const totalDue = props.basketList.length ?
    props.basketList.map((item)=> (item.price + item.taxDue) * item.quantity)
    .reduce((acc, currVal) => acc + currVal)
    : 0;

    

    return(
        <tr className="totalRow">
              <td>
                  TOTALS
              </td>
              <td>
                 
              </td>
              <td>
                  £{totalTax.toFixed(2)}
              </td>
              <td>
                  £{totalDue.toFixed(2)}
              </td>
              <td style={{padding: 0}}>
                  <input onClick={props.handleCheckout} name="checkout" value="Checkout" type="button" />
              </td>
            </tr>
    )
}

export default TotalCost;