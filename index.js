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
    const mensagemSucesso = `R$ ${valor-deposito.value} depositados com sucesso para o beneficiário ${nome-beneficiario.value}. Número da conta: ${numero-conta.value}`;

    formEValido = validaNome (nomeBeneficiario.value)
    if (formEValido) {
        alert (mensagemSucesso);

        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';
    } else{
        alert("Digite o nome completo do beneficiário.");
    }
    })

console.log (form);