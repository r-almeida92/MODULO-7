const form = document.getElementById ('form-deposito');

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split (' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    let formEValido = false;
    e.preventDefault();

    const nomeBeneficiario = document.getElementById ('nome-beneficiario');
    const numeroContaBeneficiario = document.getElementById ('numero-conta');
    const valorDeposito = document.getElementById ('valor-deposito');
    const mensagemSucesso = `R$ <b>${valorDeposito.value}</b> depositados com sucesso para o beneficiário <b>${nomeBeneficiario.value}</b>. Número da conta: <b>${numeroContaBeneficiario.value}</b>`;

    formEValido = validaNome (nomeBeneficiario.value)
    if (formEValido) {
        document.querySelector ('.mensagem-sucesso').innerHTML = mensagemSucesso;

        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';
    } else{
        alert("Digite o nome completo do beneficiário.");
    }
})

console.log (form);