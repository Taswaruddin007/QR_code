function qrGenerator(){
    var qr_text = document.getElementById("qr-text").value;
    var qr_container = document.getElementById("qr-code");
    qr_container.innerHTML = "";

    var qrCode = new QRCode(qr_container, {
        text:qr_text,
        width:200,
        height:200,
        colorDark:"#000000",
        colorLight:"#ffffff",
        correctLevel:QRCode.CorrectLevel.H
    })
}