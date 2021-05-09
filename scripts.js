const opp = document.getElementById('opp');
const user = document.getElementById('user');

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

document.getElementById('oppPlusFive').addEventListener('click', event => {
  event.preventDefault();

  oppLife += 5;
  opp.innerText = oppLife;
});

document.getElementById('oppPlusTen').addEventListener('click', event => {
  event.preventDefault();

  oppLife += 10;
  opp.innerText = oppLife;
});
// Todo: Add number input to oppLife
document.getElementById('oppPlusIn').addEventListener('click', event => {
  event.preventDefault();

  oppLife += event.target.value;
  opp.innerText = oppLife;
});

document.getElementById('oppMinusFive').addEventListener('click', event => {
  event.preventDefault();

  if (oppLife > 0 && oppLife - 5 >= 0) {
    oppLife -= 5;
    opp.innerText = oppLife;
  } else if (oppLife > 0) {
    oppLife = 0;
    opp.innerText = oppLife;
  }
});

document.getElementById('oppMinusTen').addEventListener('click', event => {
  event.preventDefault();

  if (oppLife > 0 && oppLife - 10 >= 0) {
    oppLife -= 10;
    opp.innerText = oppLife;
  } else if (oppLife > 0) {
    oppLife = 0;
    opp.innerText = oppLife;
  }
});
// Todo: Subtract number input from oppLife
document.getElementById('oppMinusIn').addEventListener('click', event => {
  event.preventDefault();

  if (oppLife > 0 && oppLife - event.target.value >= 0) {
    oppLife -= event.target.value;
    opp.innerText = oppLife;
  } else if (oppLife > 0) {
    oppLife = 0;
    opp.innerText = oppLife;
  }
});

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
