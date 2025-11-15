const style = document.createElement('style');
style.textContent = `
.payment-methods {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    margin-top: 20px;
}

.payment-btn {
    background-color: #f5b041;
    color: #fff;
    border: none;
    padding: 12px 20px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
    flex: 1;
    min-width: 150px;
    text-align: center;
}

.payment-btn:hover {
    background-color: #d68910;
    transform: translateY(-2px);
}

#backToStep1, #backToStep2 {
    background-color: #dcdcdc;
    border: none;
    padding: 10px 15px;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
}

#backToStep1:hover, #backToStep2:hover {
    background-color: #bcbcbc;
    transform: translateY(-1px);
}
`;
document.head.appendChild(style);

// Logica Donazione con Immagine Dinamica
const importoRange = document.getElementById('importo');
const amountValue = document.getElementById('amountValue');
const donationImage = document.getElementById('donationImage');
const donationTitle = document.getElementById('donationTitle');
const donationText = document.getElementById('donationText');
const campagnaSelect = document.getElementById('campagna');
const campaignDescription = document.getElementById('campaignDescription');
const donationForm = document.getElementById('donationForm');

// Descrizioni campagne
const campaignDescriptions = {
    'emergenza-freddo': 'Aiutaci a fornire coperte, indumenti caldi e pasti caldi alle persone senza dimora durante i mesi invernali.',
    'distribuzione-settimanale': 'Sostieni la nostra distribuzione settimanale di pasti caldi, bevande e indumenti ai senzatetto di Milano.',
    'ramadan': 'Durante il mese sacro del Ramadan, prepariamo pacchi alimentari speciali per le famiglie bisognose della comunità.',
    'vestiti': 'Aiutaci a fornire kit di vestiti puliti e in buone condizioni a chi ne ha bisogno.',
    'generale': 'La tua donazione verrà utilizzata dove c\'è più bisogno, sostenendo tutte le nostre attività.'
};

// Aggiorna descrizione campagna
if (campagnaSelect) {
    campagnaSelect.addEventListener('change', function() {
        const selectedCampaign = this.value;
        if (selectedCampaign && campaignDescriptions[selectedCampaign]) {
            campaignDescription.textContent = campaignDescriptions[selectedCampaign];
            campaignDescription.classList.add('active');
        } else {
            campaignDescription.classList.remove('active');
        }
    });
}

// Aggiorna immagine e testo in base all'importo
function updateDonationVisual(amount) {
    if (!amountValue || !donationImage || !donationTitle || !donationText) return;

    amountValue.textContent = amount;

    donationImage.className = 'donation-image';
    donationImage.innerHTML = '';

    // Determina quante immagini mostrare (fino a 5 livelli)
    const maxAmount = 2000;
    let imagesToShow = Math.min(5, Math.ceil((amount / maxAmount) * 5));

    for (let i = 1; i <= imagesToShow; i++) {
        const img = document.createElement('img');
        img.src = `/assets/images/donation-level-${i}.png`;
        img.alt = `Livello donazione ${i}`;
        img.className = 'donation-level-image';
        img.style.marginRight = '5px';
        donationImage.appendChild(img);
    }

    donationTitle.textContent = 'Con ' + amount + '€ puoi donare';

    // Aggiorna testo descrittivo
    if (amount < 50) {
        donationText.textContent = 'Un piccolo aiuto per chi ha bisogno';
    } else if (amount < 150) {
        donationText.textContent = 'Pasti e bevande per diverse persone';
    } else if (amount < 500) {
        donationText.textContent = 'Supporto importante per molte persone';
    } else if (amount < 1000) {
        donationText.textContent = 'Aiuto massiccio per la distribuzione settimanale';
    } else {
        donationText.textContent = 'Una donazione enorme che sostiene centinaia di persone';
    }
}

// Aggiorna quando cambia il range
if (importoRange) {
    importoRange.addEventListener('input', function() {
        const amount = parseInt(this.value);
        updateDonationVisual(amount);
    });
    
    // Inizializza
    updateDonationVisual(parseInt(importoRange.value));
}

// Validazione form donazione
if (donationForm) {
    donationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        
        // Validazione campagna
        if (!campagnaSelect.value) {
            isValid = false;
            campagnaSelect.style.borderColor = '#e74c3c';
            const errorMsg = campagnaSelect.parentElement.querySelector('.error-message');
            if (errorMsg) {
                errorMsg.textContent = 'Seleziona una campagna';
                errorMsg.style.display = 'block';
            }
        } else {
            campagnaSelect.style.borderColor = '';
            const errorMsg = campagnaSelect.parentElement.querySelector('.error-message');
            if (errorMsg) {
                errorMsg.style.display = 'none';
            }
        }
        
        // Validazione nome
        const nomeDonatore = document.getElementById('nomeDonatore');
        if (nomeDonatore && !nomeDonatore.value.trim()) {
            isValid = false;
            nomeDonatore.style.borderColor = '#e74c3c';
        } else if (nomeDonatore) {
            nomeDonatore.style.borderColor = '';
        }
        
        // Validazione email
        const emailDonatore = document.getElementById('emailDonatore');
        if (emailDonatore) {
            if (!emailDonatore.value.trim()) {
                isValid = false;
                emailDonatore.style.borderColor = '#e74c3c';
            } else {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(emailDonatore.value)) {
                    isValid = false;
                    emailDonatore.style.borderColor = '#e74c3c';
                } else {
                    emailDonatore.style.borderColor = '';
                }
            }
        }
        
        if (isValid) {
            // Qui puoi integrare con un sistema di pagamento
            const amount = parseInt(importoRange.value);
            const campaign = campagnaSelect.options[campagnaSelect.selectedIndex].text;
            
            alert(`Grazie per la tua donazione di ${amount}€ per la campagna "${campaign}"!\n\nTi invieremo una conferma via email.`);
            
            // Reset form (opzionale)
            // donationForm.reset();
        }
    });
}

const goToStep2Btn = document.getElementById('goToStep2');
const step2 = document.getElementById('step2');
const step3 = document.getElementById('step3');
const paymentContent = document.getElementById('paymentContent');
const backToStep1 = document.getElementById('backToStep1');
const backToStep2 = document.getElementById('backToStep2');

if (goToStep2Btn && donationForm && step2 && step3 && paymentContent) {
    // Passa a Step 2
    goToStep2Btn.addEventListener('click', function() {
        let isValid = true;

        // Validazione campagna, nome, email
        if (!campagnaSelect.value) {
            isValid = false;
            campagnaSelect.style.borderColor = '#e74c3c';
        } else {
            campagnaSelect.style.borderColor = '';
        }

        const nomeDonatore = document.getElementById('nomeDonatore');
        if (nomeDonatore && !nomeDonatore.value.trim()) {
            isValid = false;
            nomeDonatore.style.borderColor = '#e74c3c';
        } else if (nomeDonatore) {
            nomeDonatore.style.borderColor = '';
        }

        const emailDonatore = document.getElementById('emailDonatore');
        if (emailDonatore) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailDonatore.value)) {
                isValid = false;
                emailDonatore.style.borderColor = '#e74c3c';
            } else {
                emailDonatore.style.borderColor = '';
            }
        }

        if (isValid) {
            donationForm.style.display = 'none';
            step2.style.display = 'block';

            // Collega eventi pulsanti pagamento dopo che Step2 è visibile
            const payBonifico = document.getElementById('payBonifico');
            const payPayPal = document.getElementById('payPayPal');
            const payStripe = document.getElementById('payStripe');

            if (payBonifico) {
                payBonifico.addEventListener('click', function() {
                    step2.style.display = 'none';
                    step3.style.display = 'block';
                    paymentContent.innerHTML = `
                        <p>IBAN: IT00X000000000000000000000</p>
                        <p>Causale: Donazione</p>
                    `;
                });
            }

            if (payPayPal) {
                payPayPal.addEventListener('click', function() {
                    step2.style.display = 'none';
                    step3.style.display = 'block';
                    paymentContent.innerHTML = `<div id="paypal-button-container"></div>`;
                    const script = document.createElement('script');
                    script.src = "https://www.paypal.com/sdk/js?client-id=sb&currency=EUR";
                    script.onload = function() {
                        paypal.Buttons({
                            createOrder: function(data, actions) {
                                return actions.order.create({
                                    purchase_units: [{ amount: { value: importoRange.value } }]
                                });
                            },
                            onApprove: function(data, actions) {
                                return actions.order.capture().then(function(details) {
                                    alert('Pagamento completato da ' + details.payer.name.given_name);
                                });
                            }
                        }).render('#paypal-button-container');
                    };
                    document.body.appendChild(script);
                });
            }

            if (payStripe) {
                payStripe.addEventListener('click', function() {
                    step2.style.display = 'none';
                    step3.style.display = 'block';
                    paymentContent.innerHTML = `<button id="stripePayNow">Paga Ora</button>`;
                    const stripeScript = document.createElement('script');
                    stripeScript.src = "https://js.stripe.com/v3/";
                    stripeScript.onload = function() {
                        const stripe = Stripe('pk_test_123456789');
                        const stripeBtn = document.getElementById('stripePayNow');
                        if (stripeBtn) {
                            stripeBtn.addEventListener('click', function() {
                                fetch('/api/stripe/create-session.php', {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify({ amount: importoRange.value })
                                })
                                .then(res => res.json())
                                .then(session => {
                                    stripe.redirectToCheckout({ sessionId: session.id });
                                });
                            });
                        }
                    };
                    document.body.appendChild(stripeScript);
                });
            }
        }
    });

    // Torna a Step 1
    if (backToStep1) {
        backToStep1.addEventListener('click', function() {
            step2.style.display = 'none';
            donationForm.style.display = 'block';
        });
    }

    // Torna a Step 2
    if (backToStep2) {
        backToStep2.addEventListener('click', function() {
            step3.style.display = 'none';
            step2.style.display = 'block';
        });
    }
}
