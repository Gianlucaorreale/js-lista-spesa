/*Descrizione:
Rivediamo l’esercizio della lista della spesa visto insieme, ma questa volta con il ciclo while al posto del ciclo for. Facciamo attenzione a non dimenticare tutte le differenze implementative che il ciclo while ci impone, in particolare alla variabile di indice.*/

/*-----VERSIONE CON FOR------

const shopItems = ['uova', 'pane','latte', 'biscotti', 'pasta', 'affettati', 'formaggio', 'verdura', 'frutta'];
console.table(shopItems);
const shopList = document.getElementById ('shop-list');

let shopElements ='<ul>'

for (let i=0; i<shopItems.length; i++){
  shopElements += `<li>${shopItems[i]}</li>`
}

shopElements += '</ul>'

shopList.innerHTML = shopElements;

*/

/*-----VERSIONE CON WHILE--------*/


