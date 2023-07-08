const textInput = document.getElementById('input');
const btnGenerate = document.getElementById('btn-generate');
const viewQR = document.getElementById('qrcode');
// const viewDownload = document.getElementById('download');

textInput.focus();

// Cria Tag 'a' Download
// let downloadButton = document.createElement('a');

// Atribui as classes
// downloadButton.classList.add('btn')
// downloadButton.classList.add('btn-success')
// downloadButton.setAttribute('id', 'downloadButton')

// Atribui Valor
// let valueLink = document.createTextNode("Download");
// downloadButton.appendChild(valueLink)

btnGenerate.addEventListener('click', async () => {

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

    await qrcode.makeCode(textInput.value);

    let test = viewQR.children[1];
    console.log(test.src)
    // Coloca na DOM
    // viewDownload.appendChild(downloadButton)
})

// let buttonDownload = document.getElementById('downloadButton');

// buttonDownload.addEventListener('click', ()=>{
//     let test = viewQR.children[1]
//     buttonDownload.setAttribute('href', test.src)
//     console.log(test.src)
// })