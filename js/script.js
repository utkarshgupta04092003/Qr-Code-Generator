function createQr() {
    let urlTemplate = "https://chart.googleapis.com/chart?cht=qr&";
    let qrUrl = "https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=Fuck%20u";


    let size = document.getElementById("qrSize").value;
    let msg = document.getElementById("qrText").value;
    let url = urlTemplate + "chs=" + size + "&chl=" + msg;


    open(url);
}