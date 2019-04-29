import React from 'react';

const Checkout = (props) => {
    const style = {
        width:'100%',
        height: '100%',
        // backgroundColor: 'rgba(100,100,100, 0.6)',
        // margin-top@
        position: 'absolute',
        zIndex: 1  
    }

    const style2 = {
        display: 'none'
    }

    const receipt = props.basketList.length ?
    props.basketList.map((item)=> {
        return(
            <tr key={item.name}>
                <td>{item.name}</td>
                <td>£{(item.price + item.taxDue).toFixed(2)}</td>
                <td>£{(item.quantity * item.taxDue).toFixed(2)}</td>
                <td>{item.quantity}</td>
            </tr>
        )
    })
    :
    "";

    const totalDue = props.basketList.length ?
    props.basketList.map((item)=> (item.price + item.taxDue) * item.quantity)
    .reduce((acc, currVal) => acc + currVal)
    : 0;

    return(
        <div style={props.checkingOut ? style : style2}>
            <div className="checkoutScreenStyle">
                <div>
                    <button
                        onClick={props.handleCheckoutClose}
                        style={{float:'right', margin: '10px'}}
                    >
                        X
                    </button>
                </div>
                <br />
                <br />
                
                {props.basketList.length ? 
                    <div>
                        <h2>Thank you for shopping with us!</h2>
                        <h4>Please see below for a summary of your order:</h4>
                        <table className="tableCheckout">
                            <tbody>
                                    <tr className="headerRow">
                                    <th>
                                        Product Name
                                    </th>
                                    <th>
                                        Total price/item<br />(With Tax)
                                    </th>
                                    <th>
                                        Total tax paid
                                    </th>
                                    <th>
                                        Quantity
                                    </th>
                                </tr>
                                {receipt}
                            </tbody>
                        
                        </table>
                        <h3>
                            Total payment made: £{totalDue.toFixed(2)}
                        </h3>
                    </div>
                    : <h2>You have not added anything to your basket</h2>}
                <div>
                    <button style={{margin:'10px'}} onClick={props.handleCheckoutClose}>Continue Shopping</button>
                </div>
                
            </div>
            
            
            
        </div>
    )
}

export default Checkout;