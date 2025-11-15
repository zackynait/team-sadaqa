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
    
    // Aggiorna valore
    amountValue.textContent = amount;
    
    // Determina quale immagine e testo mostrare (ogni 15 euro cambia)
    const level = Math.floor(amount / 15);
    
    // Rimuovi tutte le classi
    donationImage.className = 'donation-image';
    
    let imageClass, title, text;
    
    if (amount < 30) {
        // 15€ - Pochi panini
        imageClass = 'donation-image-1';
        title = 'Con ' + amount + '€ puoi donare';
        text = 'Pochi panini per una persona';
    } else if (amount < 45) {
        // 30€ - Panini e bevande
        imageClass = 'donation-image-2';
        title = 'Con ' + amount + '€ puoi donare';
        text = 'Panini e bevande per una persona';
    } else if (amount < 60) {
        // 45€ - Pasto completo
        imageClass = 'donation-image-3';
        title = 'Con ' + amount + '€ puoi donare';
        text = 'Un pasto completo per una persona';
    } else if (amount < 90) {
        // 60€ - Pasti multipli
        imageClass = 'donation-image-4';
        title = 'Con ' + amount + '€ puoi donare';
        text = 'Pasti per più persone';
    } else {
        // 90€+ - Cibo e bevande completi
        imageClass = 'donation-image-5';
        title = 'Con ' + amount + '€ puoi donare';
        text = 'Cibo e bevande per molte persone';
    }
    
    // Applica classe immagine
    donationImage.classList.add(imageClass);
    
    // Aggiorna testo
    donationTitle.textContent = title;
    donationText.textContent = text;
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

