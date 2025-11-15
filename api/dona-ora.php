<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dona Ora - Team Sadaqa</title>
    <link rel="stylesheet" href="/assets/css/style.css?v=1">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Header -->
    <header class="header">
        <div class="container">
            <div class="logo-container">
                <a href="/api/index.php" class="logo-link">
                    <div class="logo-animated">
                        <svg class="logo-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <g class="hands">
                                <path d="M 50 120 Q 40 100 50 80 Q 60 70 70 80 Q 80 100 70 120" fill="#D4AF37" opacity="0.8" class="hand-left"/>
                                <path d="M 130 120 Q 120 100 130 80 Q 140 70 150 80 Q 160 100 150 120" fill="#D4AF37" opacity="0.8" class="hand-right"/>
                            </g>
                            <circle cx="100" cy="100" r="60" fill="#F5E6D3" class="globe"/>
                            <circle cx="100" cy="100" r="60" fill="none" stroke="#D4AF37" stroke-width="2" class="globe-border"/>
                            <circle cx="85" cy="90" r="8" fill="#D4AF37" class="person"/>
                            <circle cx="115" cy="90" r="8" fill="#D4AF37" class="person"/>
                            <circle cx="100" cy="110" r="8" fill="#D4AF37" class="person"/>
                            <circle cx="90" cy="115" r="6" fill="#D4AF37" class="person"/>
                            <circle cx="110" cy="115" r="6" fill="#D4AF37" class="person"/>
                        </svg>
                    </div>
                    <h1 class="logo-text">Team Sadaqa</h1>
                </a>
            </div>
        </div>
    </header>

    <!-- Donation Section -->
    <section class="donation-section">
        <div class="container">
            <div class="donation-container">
                <h2 class="donation-title">Dona <span class="highlight">Ora</span></h2>
                <p class="donation-subtitle">Il tuo contributo fa la differenza nella vita di chi ha bisogno</p>
                
                <form id="donationForm" class="donation-form">
                    <!-- Selezione Campagna -->
                    <div class="form-group campaign-group">
                        <label for="campagna">Scegli la Campagna *</label>
                        <select id="campagna" name="campagna" required>
                            <option value="">Seleziona una campagna...</option>
                            <option value="emergenza-freddo">Emergenza Freddo</option>
                            <option value="distribuzione-settimanale">Distribuzione Settimanale</option>
                            <option value="ramadan">Pacchi Ramadan</option>
                            <option value="vestiti">Kit Vestiti</option>
                            <option value="generale">Donazione Generale</option>
                        </select>
                        <span class="error-message"></span>
                    </div>

                    <!-- Descrizione Campagna -->
                    <div id="campaignDescription" class="campaign-description"></div>

                    <!-- Selezione Importo con Range -->
                    <div class="donation-amount-section">
                        <label for="importo" class="amount-label">Scegli l'importo della donazione</label>
                        <div class="amount-display">
                            <span class="amount-value" id="amountValue">15</span>
                            <span class="amount-currency">€</span>
                        </div>
                        <input 
                            type="range" 
                            id="importo" 
                            name="importo" 
                            min="15" 
                            max="300" 
                            step="15" 
                            value="15" 
                            class="amount-range"
                            required
                        >
                        <div class="amount-labels">
                            <span>15€</span>
                            <span>300€</span>
                        </div>
                    </div>

                    <!-- Immagine Dinamica -->
                    <div class="donation-visual">
                        <div class="donation-image-container">
                            <div id="donationImage" class="donation-image donation-image-1"></div>
                            <div class="donation-description">
                                <h3 id="donationTitle">Con 15€ puoi donare</h3>
                                <p id="donationText">Pochi panini per una persona</p>
                            </div>
                        </div>
                    </div>

                    <!-- Dettagli Pagamento -->
                    <div class="payment-section">
                        <h3>Dettagli Pagamento</h3>
                        <div class="form-group">
                            <label for="nomeDonatore">Nome *</label>
                            <input type="text" id="nomeDonatore" name="nomeDonatore" required>
                        </div>
                        <div class="form-group">
                            <label for="emailDonatore">Email *</label>
                            <input type="email" id="emailDonatore" name="emailDonatore" required>
                        </div>
                        <div class="form-group">
                            <label for="telefonoDonatore">Telefono</label>
                            <input type="tel" id="telefonoDonatore" name="telefonoDonatore">
                        </div>
                        <div class="form-group checkbox-group">
                            <label class="checkbox-label">
                                <input type="checkbox" id="anonimo" name="anonimo">
                                <span>Donazione anonima</span>
                            </label>
                        </div>
                    </div>

                    <button type="submit" class="btn btn-primary btn-donate">
                        Procedi con la Donazione
                    </button>
                </form>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>Team Sadaqa</h3>
                    <p>Un gruppo di giovani volontari musulmani dedicati ad aiutare chi ha bisogno nella comunità milanese.</p>
                </div>
                <div class="footer-section">
                    <h4>Link Utili</h4>
                    <ul>
                        <li><a href="/api/index.php">Home</a></li>
                        <li><a href="/api/diventa-volontario.php">Diventa Volontario</a></li>
                        <li><a href="/api/dona-ora.php">Dona Ora</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Contatti</h4>
                    <ul>
                        <li>Email: info@teamsadaqa.it</li>
                        <li>Milano, Italia</li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Seguici</h4>
                    <div class="social-links">
                        <a href="#" aria-label="Facebook">Facebook</a>
                        <a href="#" aria-label="Instagram">Instagram</a>
                        <a href="#" aria-label="Twitter">Twitter</a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 Team Sadaqa. Tutti i diritti riservati.</p>
            </div>
        </div>
    </footer>

    <script src="/assets/js/main.js?v=1"></script>
    <script src="/assets/js/donation.js?v=1"></script>
</body>
</html>

