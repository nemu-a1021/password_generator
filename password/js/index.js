document.getElementById('generate').addEventListener('click', generatePassword);
document.getElementById('copy').addEventListener('click', copyPassword);
document.getElementById('download').addEventListener('click', downloadPassword);

function generatePassword() {
    const length = document.getElementById('length').value;
    const type = document.getElementById('type').value;
    let characters = '';
//修正予定
    if (type === 'numbers') {
        characters = '0123456789';
    } else if (type === 'letters') {
        characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    } else if (type === 'alphanumeric') {
        characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    } else if (type === 'numberkigou') {
        characters = '0123456789!#$%^&*()_+{}[]|:;"<>,.?/~';
    }

    if (length > 25) {
        alert('パスワードの長さは25文字以下にしてください。');
        return;
    }
   if (length < 4) {
    alert('パスワードの長さは4文字以上にしてください');
    return;
   }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    document.getElementById('password').value = password;
}
//修正予定
function copyPassword() {
    const passwordInput = document.getElementById('password');
    passwordInput.select();
    document.execCommand('copy');
    alert('パスワードがコピーされました: ' + passwordInput.value);
}

function downloadPassword() {
    const password = document.getElementById('password').value;
    const fileFormat = document.getElementById('file-format').value;
    const fileName = 'generated_password.' + fileFormat;

    const blob = new Blob([password], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
}
