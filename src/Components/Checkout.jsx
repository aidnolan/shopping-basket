import React from 'react';

const Checkout = (props) => {
    const style = {
        width:'100%',
        height: '100%',
        backgroundColor: 'rgba(100,100,100, 0.6)',
        padding: '5%',
        position: 'absolute',
        zIndex: 1  
    }

    const style2 = {
        display: 'none'
    }

    const checkoutScreenStyle = {
        margin: '200px 50px',
        backgroundColor: 'rgba(255,255,255,0.8)',
        width: '70%',
        margin: '15%'
    }

    return(
        <div style={props.checkingOut ? style : style2}>
            <div style={checkoutScreenStyle}>
                <button style={{float:'right'}}>X</button>
                <h2>Thank you for shopping with us!</h2>
                <p>Please see below for a summary of your order:</p>
            </div>
            
            
        </div>
    )
}

export default Checkout;