// let santri = {
//     nama : "Asyifa Zahwa",
//     umur : 22,
//     Kelas : 3
// }
// console.log(JSON.stringify(santri));

// let ajax = new XMLHttpRequest();
// ajax.onreadystatechange = function () {
//     if (ajax.readyState == 4 && ajax.status == 200){
//         let santri = JSON.parse(this.responseText);
//         console.log(santri);
//     }
// }
// ajax.open('GET', 'coba.json', true);
// ajax.send();

$.getJSON('coba.json', function (data){
    console.log(data);
});