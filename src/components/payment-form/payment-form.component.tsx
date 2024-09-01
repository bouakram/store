import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.components";
import { FormContainer, PaymentFormContainer, Title } from "./payment-form.styles";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../store/cart/cart.selector";
import { FormEvent, useState } from "react";
import { selectCurrentUser } from "../../store/user/user.selector";
import { StripeCardElement } from "@stripe/stripe-js";

const isValidStripeCardElement = (card: StripeCardElement | null): card is StripeCardElement => card !== null

const PaymentForm = () => {
    const stripe = useStripe()
    const elements = useElements()
    const amount = useSelector(selectCartTotal)
    const currentUser = useSelector(selectCurrentUser)
    const [isProcessingPayment, setIsProcessingPayment] = useState(false)
    const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
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

        const cardDetails = elements.getElement(CardElement)

        if (!isValidStripeCardElement(cardDetails)) {
            return
        }

        const paymentResult = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: cardDetails,
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