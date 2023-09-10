
const toggleButton = document.getElementsByClassName('botao-menu')[0];
const barranavegacaoLink = document.getElementsByClassName('barra-navegacao-links')[0];

toggleButton.addEventListener('click' , () => {
    barranavegacaoLink.classList.toggle('active')
})

//when click on a code element, copy the code to the clipboard
const copyCode = document.querySelectorAll('code.copiavel');
copyCode.forEach((code) => {

    let codigo = code.innerText;
    code.addEventListener('click', () => {
        navigator.clipboard.writeText(code.innerText);

        let codigoCopiado = codigo.substring(0, codigo.length - 11) + ' - Copiado!';
        code.innerText = codigoCopiado;

        setTimeout(() => {
            code.innerText = codigo;
        }, 500);
    })
});
