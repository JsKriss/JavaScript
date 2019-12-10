//
//
// let message ='<ul>';
// for (let i = -1722;i <= 2756;i++){
//     if (i % 9 ===0){
//         message+='<li>';
//         message+=i;
//         message +='</li>';
//     }
// }
//
//
//
// message += '</ul>';
// console.log('aye!');
// document.write(message);


let valeur = prompt('veuillez saisir un nombre ');
let msg='';
if (!isNaN(valeur)) {
    if (valeur > 0) {
        msg = 'positif';
    } else if (valeur < 0) {
        msg = 'negatif';
    } else {
        msg = 'nul';
    }
}
else msg ='un nombre j\'ai dit';
document.write(msg);

