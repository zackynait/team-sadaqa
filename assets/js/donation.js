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

    const totalIcons = Math.floor(amount / 20);

    for (let i = 0; i < totalIcons; i++) {
        const icon = document.createElement('span');
        icon.className = 'donation-food-icon';
        icon.textContent = i % 2 === 0 ? '🥪' : '🥤';
        donationImage.appendChild(icon);
    }

    donationTitle.textContent = 'Con ' + amount + '€ puoi donare';

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
