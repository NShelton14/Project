const user = document.getElementById('user');
const opp = document.getElementById('opp');

let userLife = 20;
const oppLife = 20;

// Todo: Turn the inner text and buttons into a renderList

user.innerText = userLife;
opp.innerText = oppLife;

document.getElementById('userPlus').addEventListener('click', event => {
  event.preventDefault();

  userLife += 1;
  user.innerText = userLife;
});

document.getElementById('userMinus').addEventListener('click', event => {
  event.preventDefault();

  userLife -= 1;
  user.innerText = userLife;
});
