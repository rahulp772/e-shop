import React from "react";
import StripeCheckout from 'react-stripe-checkout';

// onToken = token => {
//     console.log(token);
//     alert('Payement Successful');
// }

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Kcqs5SJqrVaPG6qEuC7rLa51A4ZeC910LsTNxWZXQt6luyHsGYuIkQtjbnBepdOw3vknHub4v4Kl48BGpxMvQJj003y8GTLkF';

    let onToken = token => {
    console.log(token);
    alert('Payement Successful');
}

    return(
        <StripeCheckout
        label="Pay Now"
        name="CRWN Clothing Ltd."
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        token={onToken}
        stripeKey={publishableKey} />
    )
}

export default StripeCheckoutButton;