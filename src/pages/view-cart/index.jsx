import React from 'react';
import Layout from "../../components/layout"
import Cart from "../../components/cart"


function ViewCartPage() {
    return (
        <Layout title="Items in my cart">
             <Cart stripeToken="pk_test_Soy8WkaHrCT16ORZ4kd3ctkn00t9pvmpGa" />
        </Layout>
    )
}

export default ViewCartPage