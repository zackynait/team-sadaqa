<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Diventa Volontario - Team Sadaqa</title>
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

    <!-- Form Section -->
    <section class="form-section">
        <div class="container">
            <div class="form-container">
                <h2 class="form-title">Diventa <span class="highlight">Volontario</span></h2>
                <p class="form-subtitle">Compila il form per unirti al nostro team di volontari</p>
                
                <form id="volunteerForm" class="volunteer-form" novalidate>
                    <div class="form-group">
                        <label for="nome">Nome *</label>
                        <input type="text" id="nome" name="nome" required>
                        <span class="error-message"></span>
                    </div>

                    <div class="form-group">
                        <label for="cognome">Cognome *</label>
                        <input type="text" id="cognome" name="cognome" required>
                        <span class="error-message"></span>
                    </div>

                    <div class="form-group">
                        <label for="email">Email *</label>
                        <input type="email" id="email" name="email" required>
                        <span class="error-message"></span>
                    </div>

                    <div class="form-group">
                        <label for="telefono">Telefono *</label>
                        <input type="tel" id="telefono" name="telefono" required>
                        <span class="error-message"></span>
                    </div>

                    <div class="form-group">
                        <label for="dataNascita">Data di Nascita *</label>
                        <input type="date" id="dataNascita" name="dataNascita" required>
                        <span class="error-message"></span>
                    </div>

                    <div class="form-group">
                        <label for="indirizzo">Indirizzo *</label>
                        <input type="text" id="indirizzo" name="indirizzo" required>
                        <span class="error-message"></span>
                    </div>

                    <div class="form-group">
                        <label for="citta">Città *</label>
                        <input type="text" id="citta" name="citta" required>
                        <span class="error-message"></span>
                    </div>

                    <div class="form-group">
                        <label for="cap">CAP *</label>
                        <input type="text" id="cap" name="cap" pattern="[0-9]{5}" required>
                        <span class="error-message"></span>
                    </div>

                    <div class="form-group">
                        <label for="disponibilita">Disponibilità *</label>
                        <select id="disponibilita" name="disponibilita" required>
                            <option value="">Seleziona...</option>
                            <option value="settimanale">Settimanale</option>
                            <option value="mensile">Mensile</option>
                            <option value="occasionale">Occasionale</option>
                            <option value="ramadan">Solo durante Ramadan</option>
                        </select>
                        <span class="error-message"></span>
                    </div>

                    <div class="form-group">
                        <label for="esperienza">Hai già esperienza come volontario? *</label>
                        <div class="radio-group">
                            <label class="radio-label">
                                <input type="radio" name="esperienza" value="si" required>
                                <span>Sì</span>
                            </label>
                            <label class="radio-label">
                                <input type="radio" name="esperienza" value="no" required>
                                <span>No</span>
                            </label>
                        </div>
                        <span class="error-message"></span>
                    </div>

                    <div class="form-group">
                        <label for="motivazione">Motivazione *</label>
                        <textarea id="motivazione" name="motivazione" rows="5" required placeholder="Raccontaci perché vuoi diventare volontario..."></textarea>
                        <span class="error-message"></span>
                    </div>

                    <div class="form-group checkbox-group">
                        <label class="checkbox-label">
                            <input type="checkbox" id="termini" name="termini" required>
                            <span>Accetto i <a href="#termini-condizioni" class="terms-link" onclick="event.preventDefault(); showTermsModal();">termini e condizioni</a> *</span>
                        </label>
                        <span class="error-message" id="termini-error"></span>
                    </div>

                    <div class="form-group checkbox-group">
                        <label class="checkbox-label">
                            <input type="checkbox" id="privacy" name="privacy">
                            <span>Acconsento al trattamento dei dati personali secondo la privacy policy</span>
                        </label>
                    </div>

                    <button type="submit" class="btn btn-primary btn-submit">
                        Invia Candidatura
                    </button>
                </form>
            </div>
        </div>
    </section>

    <!-- Modal Termini e Condizioni -->
    <div id="termsModal" class="modal">
        <div class="modal-content">
            <span class="close-modal" onclick="closeTermsModal()">&times;</span>
            <h2>Termini e Condizioni</h2>
            <div class="terms-content">
                <h3>1. Accettazione dei Termini</h3>
                <p>Compilando questo form, accetti di diventare volontario per Team Sadaqa e di rispettare i seguenti termini e condizioni.</p>
                
                <h3>2. Impegno del Volontario</h3>
                <p>Il volontario si impegna a:</p>
                <ul>
                    <li>Partecipare alle attività organizzate da Team Sadaqa con impegno e dedizione</li>
                    <li>Rispettare gli orari e le scadenze concordate</li>
                    <li>Mantenere un comportamento rispettoso verso tutti i beneficiari e gli altri volontari</li>
                    <li>Rispettare la privacy e la dignità delle persone assistite</li>
                </ul>
                
                <h3>3. Responsabilità</h3>
                <p>Team Sadaqa si riserva il diritto di:</p>
                <ul>
                    <li>Valutare le candidature e selezionare i volontari</li>
                    <li>Interrompere la collaborazione in caso di comportamenti inappropriati</li>
                    <li>Organizzare le attività secondo le necessità della comunità</li>
                </ul>
                
                <h3>4. Privacy</h3>
                <p>I dati personali forniti verranno utilizzati esclusivamente per le finalità di volontariato e non verranno condivisi con terze parti.</p>
                
                <h3>5. Accettazione</h3>
                <p>Compilando e inviando questo form, dichiari di aver letto, compreso e accettato tutti i termini e condizioni sopra indicati.</p>
            </div>
            <button class="btn btn-primary" onclick="acceptTerms()">Accetto i Termini</button>
        </div>
    </div>

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
    <script src="/assets/js/form.js?v=1"></script>
</body>
</html>

