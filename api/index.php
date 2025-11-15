<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Sadaqa - Insieme per chi ha bisogno</title>
    <link rel="stylesheet" href="/assets/css/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Header con Logo Animato -->
    <header class="header">
        <div class="container">
            <div class="logo-container">
                <div class="logo-animated">
                    <svg class="logo-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <!-- Mani che tengono il globo -->
                        <g class="hands">
                            <path d="M 50 120 Q 40 100 50 80 Q 60 70 70 80 Q 80 100 70 120" fill="#D4AF37" opacity="0.8" class="hand-left"/>
                            <path d="M 130 120 Q 120 100 130 80 Q 140 70 150 80 Q 160 100 150 120" fill="#D4AF37" opacity="0.8" class="hand-right"/>
                        </g>
                        <!-- Globo con figure umane stilizzate -->
                        <circle cx="100" cy="100" r="60" fill="#F5E6D3" class="globe"/>
                        <circle cx="100" cy="100" r="60" fill="none" stroke="#D4AF37" stroke-width="2" class="globe-border"/>
                        <!-- Figure umane stilizzate -->
                        <circle cx="85" cy="90" r="8" fill="#D4AF37" class="person"/>
                        <circle cx="115" cy="90" r="8" fill="#D4AF37" class="person"/>
                        <circle cx="100" cy="110" r="8" fill="#D4AF37" class="person"/>
                        <circle cx="90" cy="115" r="6" fill="#D4AF37" class="person"/>
                        <circle cx="110" cy="115" r="6" fill="#D4AF37" class="person"/>
                    </svg>
                </div>
                <h1 class="logo-text">Team Sadaqa</h1>
            </div>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <h2 class="hero-title">
                Insieme per chi ha <span class="highlight">bisogno</span>
            </h2>
            <p class="hero-description">
                Team Sadaqa è un gruppo di giovani volontari musulmani che aiutano i senzatetto di Milano 
                distribuendo cibo, bevande e indumenti tutto l'anno, con un impegno speciale durante il Ramadan.
            </p>
            <div class="cta-buttons">
                <a href="/api/dona-ora.php" class="btn btn-primary">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    Dona Ora
                </a>
                <a href="/api/diventa-volontario.php" class="btn btn-secondary">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    Diventa Volontario
                </a>
            </div>
        </div>
    </section>

    <!-- Statistiche Section -->
    <section class="stats-section">
        <div class="container">
            <h2 class="section-title">
                Il Nostro <span class="highlight">Impatto</span>
            </h2>
            <p class="section-description">
                Numeri che raccontano l'impegno quotidiano e l'effetto positivo delle nostre azioni sulla comunità milanese.
            </p>
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                    </div>
                    <div class="stat-number" data-target="500">0</div>
                    <div class="stat-label">Persone aiutate ogni mese</div>
                    <div class="stat-description">Raggiungiamo centinaia di persone in difficoltà</div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                    </div>
                    <div class="stat-number" data-target="1200">0</div>
                    <div class="stat-label">Pasti distribuiti al mese</div>
                    <div class="stat-description">Pasti caldi preparati con amore dai volontari</div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                        </svg>
                    </div>
                    <div class="stat-number" data-target="85000">0</div>
                    <div class="stat-label">€ Donazioni raccolte</div>
                    <div class="stat-description">Grazie alla generosità della comunità</div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                        </svg>
                    </div>
                    <div class="stat-number" data-target="45">0</div>
                    <div class="stat-label">Volontari attivi</div>
                    <div class="stat-description">Giovani uniti dalla passione per l'aiuto sociale</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Immagini Section -->
    <section class="images-section">
        <div class="container">
            <h2 class="section-title">
                Le Nostre <span class="highlight">Attività</span>
            </h2>
            <div class="images-grid">
                <div class="image-card">
                    <div class="image-placeholder islamic-image-1">
                        <div class="image-overlay">
                            <h3>Distribuzione Settimanale</h3>
                            <p>Ogni settimana distribuiamo pasti caldi, bevande e indumenti ai senzatetto di Milano</p>
                        </div>
                    </div>
                </div>
                <div class="image-card">
                    <div class="image-placeholder islamic-image-2">
                        <div class="image-overlay">
                            <h3>Ramadan Speciale</h3>
                            <p>Durante il Ramadan prepariamo pacchi alimentari speciali per le famiglie bisognose</p>
                        </div>
                    </div>
                </div>
                <div class="image-card">
                    <div class="image-placeholder islamic-image-3">
                        <div class="image-overlay">
                            <h3>Comunità Giovane</h3>
                            <p>Un gruppo di giovani volontari uniti dalla passione per l'aiuto sociale</p>
                        </div>
                    </div>
                </div>
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

    <script src="/assets/js/main.js"></script>
</body>
</html>
