const user = document.getElementById('user');
const opp = document.getElementById('opp');

let userLife = 20;
user.innerText = userLife;

document.getElementById('userPlus').addEventListener('click', event => {
  event.preventDefault();

  userLife += 1;
  user.innerText = userLife;
});

document.getElementById('userMinus').addEventListener('click', event => {
  event.preventDefault();

  if (userLife > 0) {
    userLife -= 1;
    user.innerText = userLife;
  }
});

let oppLife = 20;
opp.innerText = oppLife;

document.getElementById('oppPlus').addEventListener('click', event => {
  event.preventDefault();

  oppLife += 1;
  opp.innerText = oppLife;
});

document.getElementById('oppMinus').addEventListener('click', event => {
  event.preventDefault();

  if (oppLife > 0) {
    oppLife -= 1;
    opp.innerText = oppLife;
  }
});
