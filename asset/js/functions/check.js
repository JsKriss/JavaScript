function check() {
    let nom = document.getElementById('nom').value;
    let prenom = document.getElementById('prenom').value;
    let mail = document.getElementById('mail').value;
    let msg = '';
    if (nom === "") msg += 'mets ton nom\r';
    if (prenom === "") msg += 'mets ton prenom\r';
    if (prenom === "") msg += 'mets ton prenom\r';

    alert(msg);

}