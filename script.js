// DOM EVENTS - gli eventi del DOM ci permettono di COLLEGARE una funzionalità con un EVENTO che si scatena a partire tipicamente da un'azione
// che fa l'utente (click, movimento del mouse, scroll, invio del form, ecc...) o da eventi programmati (caricamento della pagina, del DOM, o di un'immagine)

// EVENTO CHE SI SCATENA AL CARICAMENTO DELLA PAGINA
window.onload = function () {
  console.log("pagina caricata, con tutte le risorse (script, font, ecc..)");
};

// _____________________________ METODO 1 ___________________________________
// EVENT LISTENER - è la funzione che aspetta di essere chiamata,
// in questo caso verrà associata all'attributo di evento sull'HTML
const handleInlineEvent = () => {
  console.log("Evento in linea scatenato da funzione esterna");
};

// _____________________________ METODO 2 ___________________________________
const secondBtn = document.getElementById("second-btn");
console.log("Second button", secondBtn);

console.dir(secondBtn);

// la funzione anonima che associo all'evento NON E' MAI STATA CHIAMATA!!!
// verrà chiamata dal browser SE e solo SE rileverà il click sul nostro elemento

// secondBtn.onclick = function () {
//   console.log("Evento scatenato da proprietà del nodo");
// };

// EVENT LISTENER associato alla proprietà di evento di un nodo
const handleEventFromProp = () => {
  console.log("Evento scatenato da proprietà del nodo");
};

// secondBtn.onclick = handleEventFromProp; // ⚠️⚠️⚠️ATTENZIONE⚠️⚠️⚠️ non vanno usate le (), altrimenti la funzione si esegue SENZA ASPETTARE l'evento
// secondBtn.onclick = handleEventFromProp() // !!! ERRORE !!!

secondBtn.onclick = function () {
  handleEventFromProp(); // questa chiamata succederà solo se la funzione esterna verrà eseguita, quindi non è soggetta al problema di cui sopra
  console.log("HAHAHA TI HO FREGATO");

  // questo approccio può essere utile per scatenare più funzioni assieme
};

// _____________________________ METODO 3 ___________________________________

// EVENT LISTENER associato al metodo .addEventListener()

// Sintassi:
/* 
nodo.addEventListener("nomeevento", function(){})

oppure:
nodo.addEventListener("nomeevento", nomeFunzione)
*/

const thirdBtn = document.getElementById("third-btn");
console.log("Third button", thirdBtn);

console.dir(thirdBtn);

// il nome evento perde l'"on", si usa solo il nome dell'evento stesso
// thirdBtn.addEventListener("click", function () {
//   console.log("Evento scatenato da metodo addEventListener");
// });

const handleEventFromMethod = function () {
  console.log("Evento scatenato da metodo addEventListener");
};
const handleEventFromMethod2 = function () {
  console.log("ALTRO evento scatenato da metodo addEventListener");

  thirdBtn.remove(); // dopo il secondo click il bottone viene rimosso perché non ha nessuna funzione associata
};

// anche qui RICORDARSI DI NON APPLICARE LE () !!!!
thirdBtn.addEventListener("click", handleEventFromMethod);

// un altro dei vantaggi di questo metodo è la possibilità di associare più di una funzione alla volta sullo stesso elemento
// thirdBtn.addEventListener("click", handleEventFromMethod2)

// e può avere delle opzioni: es. eseguirsi una volta sola e poi basta
thirdBtn.addEventListener("click", handleEventFromMethod2, { once: true });

// possiamo creare una funzionalità a step associando una prima funzione anonima che ci racchiuda l'esecuzione della prima funzione,
// e associando la seconda funzione al prossimo click sul bottone
// entrambe le funzioni hanno una vita limitata ad una esecuzione soltanto, un click ciascuna.
// thirdBtn.addEventListener(
//   "click",
//   function () {
//     handleEventFromMethod();

//     thirdBtn.addEventListener("click", handleEventFromMethod2, { once: true });
//   },
//   { once: true }
// );

// SCATENARE UNA FUNZIONE DAL MOVIMENTO DEL MOUSE

const movingArea = document.getElementById("moving-area");
// movingArea.onmousemove = function () {
//   console.log("Il mouse si è mosso");
// };

// movingArea.addEventListener("mousemove", function () {
//   console.log("Il mouse si è mosso");
// });

const h1 = document.querySelector("h1");

movingArea.onmouseenter = function () {
  console.log("Il mouse si è ENTRATO");
  h1.innerText = "DENTRO";
};

movingArea.onmouseleave = function (event) {
  console.log("event", event);
  console.log("Il mouse si è USCITO", event.offsetX, event.offsetY);
  h1.innerText = "FUORI";
};

movingArea.onclick = function () {
  console.log("hai cliccato moving area");
  //   h1.style.color = "red";
  h1.classList.toggle("color-red");
};

// GESTIONE DI UN INPUT TRAMITE EVENTI

const input = document.querySelector("input");

// onchange scatena la sua funzione alla pressione del tasto Enter o quando, dopo aver inserito qualcosa, clicchiamo fuori dall'input (blur)
// input.onchange = function () {
//   console.log("l'input è cambiato");
// };

// input.oninput = function () {
//   console.log("oninput scatenato");
// };

// L'OGGETTO EVENTO - è un oggetto che riceviamo dal parametro della funzione di event listener

// gli eventi di keyboard vengono scatenati anche per tasti speciali
input.onkeyup = function (event) {
  console.log("onkeyup scatenato");

  console.log("oggetto evento", event);

  console.log("nodo dell'input", event.target);
  console.log("valore dell'input", event.target.value);
};

// input.onkeydown = function () {
//   console.log("onkeydown scatenato");
// };

input.onblur = function () {
  console.log("l'input ha perso il focus");
};

// target VS currentTarget
const testingTargetsContainer = document.getElementById("testing-targets");

testingTargetsContainer.onclick = function (event) {
  console.log("EVENT", event);
  console.log("TARGET", event.target); // target è l'elemento effettivamente cliccato, POTREBBE ESSERE UN FIGLIO DEL DIV
  console.log("CURRENT TARGET", event.currentTarget); // currentTarget è SEMPRE il proprietario dell'evento, quindi quell'elemento su cui abbiamo associato l'evento

  //   event.currentTarget.style.border = "2px solid red";
  //   event.currentTarget.remove();
};
