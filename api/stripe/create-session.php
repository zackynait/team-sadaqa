<?php
require __DIR__ . '/../vendor/autoload.php'; // percorso corretto a seconda del file

\Stripe\Stripe::setApiKey('sk_test_123456789'); // chiave segreta Stripe

header('Content-Type: application/json');

$amount = $_POST['amount'] ?? 10; // importo inviato da JS
$amountCents = intval($amount * 100); // Stripe usa centesimi

$YOUR_DOMAIN = 'https://tuosito.it';

$checkout_session = \Stripe\Checkout\Session::create([
  'payment_method_types' => ['card'],
  'line_items' => [[
    'price_data' => [
      'currency' => 'eur',
      'product_data' => [
        'name' => 'Donazione Team Sadaqa',
      ],
      'unit_amount' => $amountCents,
    ],
    'quantity' => 1,
  ]],
  'mode' => 'payment',
  'success_url' => $YOUR_DOMAIN . '/stripe-success.php?session_id={CHECKOUT_SESSION_ID}',
  'cancel_url' => $YOUR_DOMAIN . '/stripe-cancel.php',
]);

echo json_encode(['id' => $checkout_session->id]);