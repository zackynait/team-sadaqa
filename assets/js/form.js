// Validazione Form Volontario
const volunteerForm = document.getElementById('volunteerForm');
const terminiCheckbox = document.getElementById('termini');
const terminiError = document.getElementById('termini-error');

// Mostra modal termini
function showTermsModal() {
    const modal = document.getElementById('termsModal');
    if (modal) {
        modal.style.display = 'block';
    }
}

// Chiudi modal termini
function closeTermsModal() {
    const modal = document.getElementById('termsModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Accetta termini
function acceptTerms() {
    if (terminiCheckbox) {
        terminiCheckbox.checked = true;
        terminiError.textContent = '';
        terminiError.style.display = 'none';
    }
    closeTermsModal();
}

// Chiudi modal cliccando fuori
window.onclick = function(event) {
    const modal = document.getElementById('termsModal');
    if (event.target === modal) {
        closeTermsModal();
    }
}

// Validazione form
if (volunteerForm) {
    volunteerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        
        // Validazione campi obbligatori
        const requiredFields = volunteerForm.querySelectorAll('[required]');
        requiredFields.forEach(field => {
            const errorMsg = field.parentElement.querySelector('.error-message');
            
            if (!field.value.trim()) {
                isValid = false;
                field.style.borderColor = '#e74c3c';
                if (errorMsg) {
                    errorMsg.textContent = 'Questo campo è obbligatorio';
                    errorMsg.style.display = 'block';
                }
            } else {
                field.style.borderColor = '';
                if (errorMsg) {
                    errorMsg.style.display = 'none';
                }
            }
        });
        
        // Validazione checkbox termini
        if (!terminiCheckbox.checked) {
            isValid = false;
            terminiError.textContent = 'Devi accettare i termini e condizioni per procedere';
            terminiError.style.display = 'block';
        } else {
            terminiError.style.display = 'none';
        }
        
        // Validazione email
        const emailField = document.getElementById('email');
        if (emailField && emailField.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailField.value)) {
                isValid = false;
                emailField.style.borderColor = '#e74c3c';
                const errorMsg = emailField.parentElement.querySelector('.error-message');
                if (errorMsg) {
                    errorMsg.textContent = 'Inserisci un indirizzo email valido';
                    errorMsg.style.display = 'block';
                }
            }
        }
        
        // Validazione CAP
        const capField = document.getElementById('cap');
        if (capField && capField.value) {
            const capRegex = /^[0-9]{5}$/;
            if (!capRegex.test(capField.value)) {
                isValid = false;
                capField.style.borderColor = '#e74c3c';
                const errorMsg = capField.parentElement.querySelector('.error-message');
                if (errorMsg) {
                    errorMsg.textContent = 'Il CAP deve essere di 5 cifre';
                    errorMsg.style.display = 'block';
                }
            }
        }
        
        if (isValid) {
            // Qui puoi inviare i dati al server
            alert('Grazie per la tua candidatura! Ti contatteremo presto.');
            volunteerForm.reset();
        }
    });
    
    // Rimuovi errori quando l'utente inizia a digitare
    const inputs = volunteerForm.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            this.style.borderColor = '';
            const errorMsg = this.parentElement.querySelector('.error-message');
            if (errorMsg) {
                errorMsg.style.display = 'none';
            }
        });
    });
}

