import React, { useState, useEffect, useContext }from 'react';
import { CartContext } from './context';
import "./styles.css";

function formatPrice (price) {
    return `$${(price * 0.01).toFixed(2)}`
}

function totalPrice(items) {
    return items.reduce((acc, item) => acc + item.quantity * item.price, 0.0)
}

function Cart({ stripeToken }) {
const [stripe, setStripe] = useState(null)
const ctx = useContext(CartContext)
// give you a to the items inside the context

useEffect(() => {
    if(window.Stripe) setStripe(window.Stripe(stripeToken))
}, [stripeToken])

function checkout() {
    // redirct users to the checkout page powered by stripe
    stripe.redirectToCheckout({
        items: ctx.items.map(item => ({
            quantity: item.quantity,
            sku: item.sku
        })),
        successUrl: 'https://your-website.com/success',
        cancelUrl: 'https://your-website.com/canceled',
    })
}

    return(
        <div> 
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {ctx.items.map(item => (
                        <tr>
                            <td>{item.title}</td>
                            <td>{item.quantity}</td>
                            <td>{formatPrice(item.price * item.quantity)}</td>
                        </tr>
                    ))}
                 <tr>
                    <td colSpan={2}>Total:</td>
                    <td>{formatPrice(totalPrice(ctx.items))}</td>
                </tr>

                  <tr>
                    <td colSpan={4}>
                        <button type="button" 
                        className="btn btn-primary"
                         data-toggle="modal" 
                         data-target=".bd-example-modal-sm" 
                         onClick={checkout}>
                             Checkout Now with Stripe</button>
                        {/* Checkout */}
                            <div className="modal fade bd-example-modal-sm" tabIndex="-1" role="dialog"
                                aria-labelledby="mySmallModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-sm">
                                <div className="modal-content">
                                ...Loading
                                </div>
                            </div>
                            </div>
                        {/* Checkout */}
                    </td>
                  </tr>
                </tbody>
            </table>
        </div>

    )
}

export default Cart
