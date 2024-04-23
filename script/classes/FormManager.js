// RESTE A FAIRE
// Taille max du texte ?
// Sécurité : empêcher l'injection de code

export class FormManager {
    
    constructor(formElement) {
        this.form = formElement;
        
        this.radioYes = formElement.querySelector("#yes");
        this.radioNo = formElement.querySelector("#no");

        this.textarea = formElement.querySelector("#textfield");

        this.submitButton = formElement.querySelector("button[type='submit']");
        this.errorMessages = formElement.querySelector(".error-message");

        this.modal = document.querySelector("#modal");
        this.closeModalBtn = this.modal.querySelector("button");

        this.initialize();
    }

    checkYes() {
        this.radioYes.checked = true;
        this.radioNo.checked = false;
    }
    checkNo() {
        this.radioYes.checked = false;
        this.radioNo.checked = true;
    }
    
    initialize() {

        this.form.addEventListener("submit", this.handleSubmit.bind(this));

        this.radioYes.addEventListener("click", this.checkYes.bind(this));
        this.radioNo.addEventListener("click", this.checkNo.bind(this));
        
        this.closeModalBtn.addEventListener("click", () => {
            this.modal.close(); // Close the modal
            this.form.reset(); // Reset the form
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        
        if (this.validateForm()) {
            console.log("Envoi du formulaire ok");
            this.errorMessages.classList.add("hidden");

            this.modal.showModal();
            // Fonction pour lancer le calcule

        } else {
            this.errorMessages.classList.remove("hidden");
        }
    }

    validateForm() {
        let isValid = true;

        if (this.textarea.value.trim() === '') {
            isValid = false;
            console.log("Erreur, champs texte invalide.");
        } else {
            isValid = true;
            console.log("Champs texte valide.");
        }

        return isValid;
    }
}