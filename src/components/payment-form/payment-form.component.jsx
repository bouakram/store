import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.components";
import { FormContainer, PaymentFormContainer, Title } from "./payment-form.styles";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../store/cart/cart.selector";
import { useState } from "react";

const PaymentForm = () => {
    const stripe = useStripe()
    const elements = useElements()
    const amount = useSelector(selectCartTotal)
    const currentUser = useSelector(state => state.user.currentUser)
    const [isProcessingPayment, setIsProcessingPayment] = useState(false)
    const paymentHandler = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return
        }
        setIsProcessingPayment(true)

        const res = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount: amount * 100 })
        }).then(res => res.json())

        const clientSecret = res.paymentIntent.client_secret

        const paymentResult = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser ? currentUser.displayName : 'Guest',
                }
            }
        })

        setIsProcessingPayment(false)

        if (paymentResult.error) {
            alert(paymentResult.error)
        }
        else {
            if (paymentResult.paymentIntent.status === 'succeeded') {
                alert('Payment successful')
            }
        }
    }
    return (
        <PaymentFormContainer>
            <Title>Credit Card Payment</Title>
            <FormContainer onSubmit={paymentHandler}>
                <CardElement />
                <Button button_type={BUTTON_TYPE_CLASSES.inverted} isLoading={isProcessingPayment}>Pay Now</Button>
            </FormContainer>
        </PaymentFormContainer>
    )
}

export default PaymentForm