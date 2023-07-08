const textInput = document.getElementById('input');
const btnGenerate = document.getElementById('btn-generate');
const viewQR = document.getElementById('qrcode');
const viewDownload = document.getElementById('download');

textInput.focus();

// Cria Tag 'a' Download
let downloadButton = document.createElement('a');

// Atribui as classes
downloadButton.classList.add('btn')
downloadButton.classList.add('btn-success')
downloadButton.setAttribute('id', 'downloadButton')

// Atribui Valor
let valueLink = document.createTextNode("Download");
downloadButton.appendChild(valueLink)

btnGenerate.addEventListener('click', () => {

    viewQR.innerHTML = '';
    viewDownload.innerHTML = '';

    if (!textInput.value) {
        alert("Insira um valor!");
        textInput.focus();
        return;
    }

    let qrcode = new QRCode(viewQR, {
        width: 180,
        height: 180,
        // colorDark: "#ffffff",
        // colorLight: "#2b2a2a"
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    qrcode.makeCode(textInput.value);

    // Coloca na DOM
    viewDownload.appendChild(downloadButton)
})

let buttonDownload = document.getElementById('downloadButton');

buttonDownload.addEventListener('click', ()=>{
    alert('Funcionou')
})