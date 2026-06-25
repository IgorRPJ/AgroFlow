const form = document.getElementById('contactForm');
const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const assuntoInput = document.getElementById('assunto');
const mensagemInput = document.getElementById('mensagem');
const charCount = document.getElementById('charCount');
const successMessage = document.getElementById('successMessage');
nomeInput.addEventListener('input', validateNome);
emailInput.addEventListener('input', validateEmail);
assuntoInput.addEventListener('change', validateAssunto);
mensagemInput.addEventListener('input', validateMensagem);
function showError(input, errorElement, message) {
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    input.classList.add('is-invalid');
    input.classList.remove('is-valid');
}
function showSuccess(input, errorElement) {
    errorElement.textContent = '';
    errorElement.style.display = 'none';
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
}
function resetField(input, errorElement) {
    errorElement.textContent = '';
    errorElement.style.display = 'none';
    input.classList.remove('is-invalid');
    input.classList.remove('is-valid');
}
function validateNome() {
    const nome = nomeInput.value.trim();
    const nomeError = document.getElementById('nomeError');
    if (!nome) {
        resetField(nomeInput, nomeError);
        return false;
    }
    const partes = nome.split(/\s+/);
    if (partes.length < 2) {
        showError(
            nomeInput,
            nomeError,
            'Por favor, insira nome e sobrenome.'
        );
        return false;
    }
    const primeiroNome = partes[0];
    const ultimoNome = partes[partes.length - 1];
    if (primeiroNome.length < 2 || ultimoNome.length < 2) {
        showError(
            nomeInput,
            nomeError,
            'Nome e sobrenome devem ter no mínimo 2 letras cada.'
        );
        return false;
    }
    showSuccess(nomeInput, nomeError);
    return true;
}
function validateEmail() {
    const email = emailInput.value.trim();
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        resetField(emailInput, emailError);
        return false;
    }
    if (!emailRegex.test(email)) {
        showError(
            emailInput,
            emailError,
            'Por favor, insira um e-mail válido.'
        );
        return false;
    }
    showSuccess(emailInput, emailError);
    return true;
}
function validateAssunto() {
    const assunto = assuntoInput.value.trim();
    const assuntoError = document.getElementById('assuntoError');
    if (!assunto) {
        showError(
            assuntoInput,
            assuntoError,
            'Por favor, selecione um assunto.'
        );
        return false;
    }
    showSuccess(assuntoInput, assuntoError);
    return true;
}
function validateMensagem() {
    const mensagem = mensagemInput.value.trim();
    const mensagemError = document.getElementById('mensagemError');
    charCount.textContent = mensagem.length;
    if (!mensagem) {
        resetField(mensagemInput, mensagemError);
        return false;
    }
    if (mensagem.length > 500) {
        showError(
            mensagemInput,
            mensagemError,
            'A mensagem não pode exceder 500 caracteres.'
        );
        return false;
    }
    showSuccess(mensagemInput, mensagemError);
    return true;
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const isNomeValid = validateNome();
    const isEmailValid = validateEmail();
    const isAssuntoValid = validateAssunto();
    const isMensagemValid = validateMensagem();
    if (
        isNomeValid &&
        isEmailValid &&
        isAssuntoValid &&
        isMensagemValid
    ) {
        successMessage.classList.remove('hide');
        successMessage.classList.add('show');
        form.reset();
        charCount.textContent = '0';
        document
            .querySelectorAll('.is-valid, .is-invalid')
            .forEach(element => {
                element.classList.remove('is-valid');
                element.classList.remove('is-invalid');
            });
        document
            .querySelectorAll(
                '#nomeError, #emailError, #assuntoError, #mensagemError'
            )
            .forEach(error => {
                error.textContent = '';
                error.style.display = 'none';
            });
        setTimeout(() => {
            successMessage.classList.remove('show');
            successMessage.classList.add('hide');
        }, 5000);
    }
});