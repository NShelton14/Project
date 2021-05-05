const user = document.getElementById('user');
const opp = document.getElementById('opp');

const userLife = 20;
const oppLife = 20;

// Todo: Turn the inner text and buttons into a renderList
user.innerText = userLife;
opp.innerText = oppLife;

document.getElementById('userPlus').addEventListener('click', event => {
  event.preventDefault();

  user.innerText = userLife + 1;
});
