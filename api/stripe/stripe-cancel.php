

<?php
// Pagina visualizzata quando l'utente annulla il pagamento con Stripe
?>
<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pagamento Annullato - Team Sadaqa</title>
    <link rel="stylesheet" href="/assets/css/style.css">
</head>
<body>
    <section class="payment-cancelled">
        <div class="container">
            <h2>Pagamento Annullato</h2>
            <p>Hai annullato il pagamento. Puoi tornare alla pagina della donazione e riprovare.</p>
            <a href="/api/dona-ora.php" class="btn btn-primary">Torna alla donazione</a>
        </div>
    </section>
</body>
</html>