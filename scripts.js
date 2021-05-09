const opp = document.getElementById('opp');
const user = document.getElementById('user');

// Todo: IS THERE A WAY TO MAKE THIS 'CLEANER'?!

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

document.getElementById('userPlusFive').addEventListener('click', event => {
  event.preventDefault();

  userLife += 5;
  user.innerText = userLife;
});

document.getElementById('userPlusTen').addEventListener('click', event => {
  event.preventDefault();

  userLife += 10;
  user.innerText = userLife;
});
// Todo: Add number input to userLife
document.getElementById('userPlusIn').addEventListener('click', event => {
  event.preventDefault();

  userLife += event.target.value;
  user.innerText = userLife;
});

document.getElementById('userMinusFive').addEventListener('click', event => {
  event.preventDefault();

  if (userLife > 0 && userLife - 5 >= 0) {
    userLife -= 5;
    user.innerText = userLife;
  } else if (userLife > 0) {
    userLife = 0;
    user.innerText = userLife;
  }
});

document.getElementById('userMinusTen').addEventListener('click', event => {
  event.preventDefault();

  if (userLife > 0 && userLife - 10 >= 0) {
    userLife -= 10;
    user.innerText = userLife;
  } else if (userLife > 0) {
    userLife = 0;
    user.innerText = userLife;
  }
});
// Todo: Subtract number input from userLife
document.getElementById('userMinusIn').addEventListener('click', event => {
  event.preventDefault();

  if (userLife > 0 && userLife - event.target.value >= 0) {
    userLife -= event.target.value;
    user.innerText = userLife;
  } else if (userLife > 0) {
    userLife = 0;
    user.innerText = userLife;
  }
});
