const btn = document.getElementById('btn');
const qrcode = document.getElementById('qr-code');
const input = document.getElementById('form-input');
const qrimage = document.getElementById('qr-code-image');

btn.addEventListener('click', () => {
    let qrValue = input.value.trim();
    if (!qrValue) {
        return alert('Please enter a text or address');
    }

    btn.innerText = 'Receiving QR Cdoe';
    qrimage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrValue)}`;

    qrimage.onload = () => {
        qrcode.style.display = 'block';
        btn.innerText = 'product QR Code';
    };
});

input.addEventListener('keyup', () => {
    if (!input.value.trim()) {
        qrcode.style.display = 'none';
    }
});
