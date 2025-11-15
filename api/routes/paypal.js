const express = require('express');
const router = express.Router();
const paypal = require('@paypal/checkout-server-sdk');

// Configure PayPal environment
const configureEnvironment = function() {
  const clientId = process.env.PAYPAL_CLIENT_ID;
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET;
  
  return process.env.NODE_ENV === 'production' 
    ? new paypal.core.LiveEnvironment(clientId, clientSecret)
    : new paypal.core.SandboxEnvironment(clientId, clientSecret);
};

const client = new paypal.core.PayPalHttpClient(configureEnvironment());

// Process PayPal payment
router.post('/process-payment', async (req, res) => {
    try {
        const { amount, name, email, message, paymentId } = req.body;
        
        // Here you would typically verify the payment with PayPal
        // and then save the donation to your database
        // For example:
        // await saveDonation({
        //     amount: amount,
        //     currency: 'EUR',
        //     payment_intent: paymentId,
        //     customer_email: email,
        //     name: name,
        //     message: message || '',
        //     payment_method: 'paypal',
        //     status: 'completed'
        // });
        
        console.log('PayPal payment successful for:', email);
        res.json({ success: true });
    } catch (error) {
        console.error('Error processing PayPal payment:', error);
        res.status(500).json({ error: 'Errore durante l\'elaborazione del pagamento PayPal' });
    }
});

// Create PayPal order
router.post('/create-order', async (req, res) => {
    try {
        const { amount } = req.body;
        
        const request = new paypal.orders.OrdersCreateRequest();
        request.prefer('return=representation');
        request.requestBody({
            intent: 'CAPTURE',
            purchase_units: [{
                amount: {
                    currency_code: 'EUR',
                    value: amount.toString(),
                    breakdown: {
                        item_total: {
                            currency_code: 'EUR',
                            value: amount.toString()
                        }
                    }
                },
                items: [{
                    name: 'Donazione a Team Sadaqa',
                    description: 'Donazione a sostegno delle attività di Team Sadaqa',
                    quantity: '1',
                    unit_amount: {
                        currency_code: 'EUR',
                        value: amount.toString()
                    }
                }]
            }],
            application_context: {
                brand_name: 'Team Sadaqa',
                landing_page: 'NO_PREFERENCE',
                user_action: 'PAY_NOW',
                return_url: `${process.env.BASE_URL}/grazie`,
                cancel_url: `${process.env.BASE_URL}/dona-ora`
            }
        });

        const order = await client.execute(request);
        res.json({ id: order.result.id });
    } catch (error) {
        console.error('Error creating PayPal order:', error);
        res.status(500).json({ error: 'Errore durante la creazione dell\'ordine PayPal' });
    }
});

// Capture PayPal order
router.post('/capture-order', async (req, res) => {
    try {
        const { orderID } = req.body;
        const request = new paypal.orders.OrdersCaptureRequest(orderID);
        request.requestBody({});
        
        const capture = await client.execute(request);
        res.json(capture.result);
    } catch (error) {
        console.error('Error capturing PayPal order:', error);
        res.status(500).json({ error: 'Errore durante l\'elaborazione del pagamento PayPal' });
    }
});

module.exports = router;
