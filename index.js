const form = document.getElementById ('form-deposito');
const nomeBeneficiario = document.getElementById ('nome-beneficiario');

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split (' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    let formEValido = false;
    e.preventDefault();

    const numeroContaBeneficiario = document.getElementById ('numero-conta');
    const valorDeposito = document.getElementById ('valor-deposito');
    const mensagemSucesso = `R$ <b>${valorDeposito.value}</b> depositados com sucesso para o beneficiário <b>${nomeBeneficiario.value}</b>. Número da conta: <b>${numeroContaBeneficiario.value}</b>`;

    formEValido = validaNome (nomeBeneficiario.value)
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector ('.mensagem-sucesso');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';
    } else{
        nomeBeneficiario.style.border = '1px solid red';
        document.querySelector ('.mensagem-erro').style.display = 'block';
    }
})

nomeBeneficiario.addEventListener('keyup', function(e){
    console.log (e.target.value);
    formEValido = validaNome (e.target.value)

    if (!formEValido) {
        nomeBeneficiario.classList.add ('erro');
        document.querySelector('.mensagem-erro').style.display = 'block';
    } else{
        nomeBeneficiario.classList.remove ('erro');
        document.querySelector('.mensagem-erro').style.display = 'none';
    }
});