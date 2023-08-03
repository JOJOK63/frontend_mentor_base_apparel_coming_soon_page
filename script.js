const formulaire = document.getElementById('formulaire');
const btn = document.querySelector('button').addEventListener('click', (e) => {
  e.preventDefault();
  const formData = new FormData(formulaire);
  const valeurInput = formData.get('email');
  sendMessage(valeurInput); // Appel de la fonction avec la valeur de l'email
});

function validationEmail(email) {
  const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegEx.test(email);
}

function sendMessage(email) {
  console.log('test');
  const message = document.querySelector('.message');
  if (validationEmail(email)) {
    message.innerHTML = ""
    const div = document.createElement('p');
    div.innerHTML = "Votre email est valide";
    message.append(div);
  } else {
    message.innerHTML = ""
    const div = document.createElement('p');
    div.innerHTML = "Votre email est invalide";
    message.append(div);
  }
}
