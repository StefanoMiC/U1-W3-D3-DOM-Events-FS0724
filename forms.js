const form = document.querySelector("form");

form.onsubmit = function (event) {
  // questa operazione è OBBLIGATORIA e IMPORTANTISSIMA, eviterà il comportamento di default del form che corrisponde al refresh della pagina
  // usando i form con JS vorremo SEMPRE evitarlo!
  event.preventDefault();

  const nameInput = document.getElementById("name");
  const surnameInput = document.getElementById("surname");
  const ageInput = document.getElementById("age");
  const phoneInput = document.getElementById("phone");

  const user = {
    name: nameInput.value,
    surname: surnameInput.value,
    age: ageInput.value,
    phone: phoneInput.value
  };

  const usersContainer = document.getElementById("users-container");

  // questa è la generazione di una card con il metodo "veloce"
  // nel generarla usiamo i valori dinamici raccolti dai value dei vari input, e oltretutto applichiamo un attributo di evento di tipo click
  // associato alla funzione creata qui sotto, che riesce a determinare tramite event.currentTarget su quale elemento agire con
  // il cambio di border color
  usersContainer.innerHTML += `
            <div class="card" onclick="handleCardClick(event)">
                <div class="card-content">
                    <h3>${user.name} ${user.surname}</h3>
                    <p>Età: ${user.age}</p>
                    <p>Telefono: ${user.phone}</p>
                </div>
            </div>
  `;

  form.reset();
  console.log("FORM INVIATO!", user);
};

const handleCardClick = event => {
  console.log("EVENT", event);

  //   event.currentTarget.remove();
  event.currentTarget.style.borderColor = "red"; // si modifica dinamicamente solo l'elemento effettivamente cliccato
  // perché il suo riferimento esatto è contenuto in event.currentTarget
  // ogni card che scatena questa funzione al click avrà il suo riferimento preciso all'interno, non ci sarà mai ambiguità in questo.
};

// bottone di reset con richiesta di conferma
const agnosticBtn = document.querySelector("button[type='button']");
agnosticBtn.onclick = function () {
  console.log("bottone premuto");

  const hasConfirmed = confirm("sei sicuro di voler resettare il form?");
  if (hasConfirmed) {
    form.reset();
  }
};
