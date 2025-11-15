const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Create a Stripe Checkout session
router.post('/create-session', async (req, res) => {
    try {
        const { amount, name, email, message } = req.body;
        
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [{
                price_data: {
                    currency: 'eur',
                    product_data: {
                        name: 'Donazione a Team Sadaqa',
                    },
                    unit_amount: amount,
                },
                quantity: 1,
            }],
            mode: 'payment',
            success_url: `${process.env.BASE_URL}/grazie?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.BASE_URL}/dona-ora`,
            customer_email: email,
            metadata: {
                donor_name: name,
                message: message || '',
            },
        });

        res.json({ id: session.id });
    } catch (error) {
        console.error('Error creating Stripe session:', error);
        res.status(500).json({ error: 'Errore durante la creazione della sessione di pagamento' });
    }
});

// Webhook handler for Stripe events
router.post('/webhook', express.raw({type: 'application/json'}), async (req, res) => {
    const sig = req.headers['stripe-signature'];
    let event;

    try {
        event = stripe.webhooks.constructEvent(
            req.body,
            sig,
            process.env.STRIPE_WEBHOOK_SECRET
        );
    } catch (err) {
        console.error(`Webhook Error: ${err.message}`);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Handle the checkout.session.completed event
    if (event.type === 'checkout.session.completed') {
        const session = event.data.object;
        
        // Here you can save the donation to your database
        // For example:
        // await saveDonation({
        //     amount: session.amount_total / 100,
        //     currency: session.currency,
        //     payment_intent: session.payment_intent,
        //     customer_email: session.customer_email,
        //     name: session.metadata.donor_name,
        //     message: session.metadata.message,
        //     payment_method: 'stripe',
        //     status: 'completed'
        // });
        
        console.log('Payment successful for:', session.customer_email);
    }

    res.json({ received: true });
});

// Success page
router.get('/success', (req, res) => {
    res.redirect('/grazie');
});

// Cancel page
router.get('/cancel', (req, res) => {
    res.redirect('/dona-ora?cancelled=true');
});

module.exports = router;
