const textInput = document.getElementById('input');
const btnGenerate = document.getElementById('btn-generate');
const viewQR = document.getElementById('qrcode');
const viewDownload = document.getElementById('download');

textInput.focus();

function createQR() {
    viewQR.innerHTML = '';

    if (!textInput.value) {
        alert("Insira um valor!");
        textInput.focus();
        return;
    }

    let qrcode = new QRCode(viewQR, {
        width: 180,
        height: 180,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    qrcode.makeCode(textInput.value);
}

function createButton() {
    let downloadButton = document.createElement('a');
    downloadButton.classList.add('btn');
    downloadButton.classList.add('btn-success');
    downloadButton.setAttribute('id', 'downloadButton');
    downloadButton.textContent = "Download";
    return downloadButton;
}

btnGenerate.addEventListener('click', () => {
    createQR();
    viewDownload.innerHTML = '';
    viewDownload.appendChild(createButton());
    setTimeout(() => {
        let downloadButton = document.getElementById('downloadButton');
        downloadButton.setAttribute('href', viewQR.querySelector('img').src);
        downloadButton.setAttribute('download', 'qrcode.png');
    }, 1);
});