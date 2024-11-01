// Script untuk mengupdate pratinjau warna
function updatePreview() {
    const color = document.getElementById('color').value;
    const previewImage = document.getElementById('preview-image');
    
    switch (color) {
        case 'hitam':
            previewImage.style.backgroundColor = '#000000';
            break;
        case 'putih':
            previewImage.style.backgroundColor = '#FFFFFF';
            break;
        case 'merah':
            previewImage.style.backgroundColor = '#FF0000';
            break;
        case 'biru':
            previewImage.style.backgroundColor = '#0000FF';
            break;
    }
}

// Script untuk menambahkan teks pada pratinjau
function updateText() {
    const text = document.getElementById('text').value;
    const previewImage = document.getElementById('preview-image');
    previewImage.alt = text;
}

// Script untuk konfirmasi pesanan
function confirmOrder() {
    alert("Pesanan Anda telah diterima! Kami akan menghubungi Anda segera.");
}