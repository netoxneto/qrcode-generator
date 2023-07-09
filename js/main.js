const textInput = document.getElementById('input');
const btnGenerate = document.getElementById('btn-generate');
const viewQR = document.getElementById('qrcode');
const viewDownload = document.getElementById('download');

textInput.focus();

async function createQR() {
    viewQR.innerHTML = '';

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
}

function createButton() {
    // Cria Tag 'a' Download
    let downloadButton = document.createElement('a');

    // Atribui as classes
    downloadButton.classList.add('btn')
    downloadButton.classList.add('btn-success')
    downloadButton.setAttribute('id', 'downloadButton')

    // Atribui Valor
    let valueLink = document.createTextNode("Download");
    downloadButton.appendChild(valueLink);
    return downloadButton;
}

btnGenerate.addEventListener('click',() => {
    createQR();
    viewDownload.innerHTML = '';
    viewDownload.appendChild(createButton());
    setTimeout(()=>{
        document.getElementById('downloadButton').setAttribute('href', viewQR.children[1].src )
        document.getElementById('downloadButton').setAttribute('download', 'qrcode.png')
    }, 100)
})