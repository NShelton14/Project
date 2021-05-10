const opp = document.getElementById('opp');
const user = document.getElementById('user');

// Todo: IS THERE A WAY TO MAKE THIS 'CLEANER'?! Would a Switch case work?

let oppLife = 20;
opp.innerText = oppLife;

document.getElementById('oppRed').addEventListener('click', event => {
  event.preventDefault();

  document
    .getElementById('oppDiv')
    .classList.remove('green', 'black', 'white', 'blue');
  document.getElementById('oppDiv').classList.add('red');
});

document.getElementById('oppGreen').addEventListener('click', event => {
  event.preventDefault();

  document
    .getElementById('oppDiv')
    .classList.remove('red', 'black', 'white', 'blue');
  document.getElementById('oppDiv').classList.add('green');
});

document.getElementById('oppBlack').addEventListener('click', event => {
  event.preventDefault();

  document
    .getElementById('oppDiv')
    .classList.remove('red', 'green', 'white', 'blue');
  document.getElementById('oppDiv').classList.add('black');
});

document.getElementById('oppWhite').addEventListener('click', event => {
  event.preventDefault();

  document
    .getElementById('oppDiv')
    .classList.remove('red', 'green', 'black', 'blue');
  document.getElementById('oppDiv').classList.add('white');
});

document.getElementById('oppBlue').addEventListener('click', event => {
  event.preventDefault();

  document
    .getElementById('oppDiv')
    .classList.remove('red', 'green', 'black', 'white');
  document.getElementById('oppDiv').classList.add('blue');
});

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

document.getElementById('oppPlusIn').addEventListener('click', event => {
  event.preventDefault();

  const oppPlusInput = document.getElementById('oppPlusInput').value;
  console.log(oppPlusInput);
  oppLife += +oppPlusInput;
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

document.getElementById('oppMinusIn').addEventListener('click', event => {
  event.preventDefault();

  const oppMinusInput = document.getElementById('oppMinusInput').value;
  if (oppLife > 0 && oppLife - oppMinusInput >= 0) {
    oppLife -= oppMinusInput;
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

document.getElementById('userPlusIn').addEventListener('click', event => {
  event.preventDefault();

  const userPlusInput = document.getElementById('userPlusInput').value;
  userLife += +userPlusInput;
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

document.getElementById('userMinusIn').addEventListener('click', event => {
  event.preventDefault();

  const userMinusInput = document.getElementById('userMinusInput').value;
  if (userLife > 0 && userLife - userMinusInput >= 0) {
    userLife -= userMinusInput;
    user.innerText = userLife;
  } else if (userLife > 0) {
    userLife = 0;
    user.innerText = userLife;
  }
});
