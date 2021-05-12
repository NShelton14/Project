const opp = document.getElementById('opp');
const oppDiv = document.getElementById('oppDiv');
const oppColor = document.getElementById('oppColor');
const oppMath = document.getElementById('oppMath');
const user = document.getElementById('user');
const userDiv = document.getElementById('userDiv');
const userColor = document.getElementById('userColor');
const userMath = document.getElementById('userMath');
const colors = ['red', 'green', 'black', 'white', 'blue'];

let oppLife = 20;
opp.innerText = oppLife;

oppColor.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', event => {
    event.preventDefault();
    const divColor = event.target.className;

    colors
      .filter(color => color !== divColor)
      .forEach(color => {
        oppDiv.classList.remove(color);
      });

    oppDiv.classList.add(divColor);
  });
});

oppMath.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', event => {
    event.preventDefault();

    const buttonId = event.target.id;

    switch (buttonId) {
      case 'oppPlus':
        opp.innerText = oppLife += 1;
        break;
      case 'oppMinus':
        if (oppLife > 0) {
          opp.innerText = oppLife -= 1;
        }
        break;
      case 'oppPlusFive':
        opp.innerText = oppLife += 5;
        break;
      case 'oppPlusTen':
        opp.innerText = oppLife += 10;
        break;
      case 'oppPlusIn':
        const oppPlusInput = document.getElementById('oppPlusInput').value;
        opp.innerText = oppLife += +oppPlusInput;
        break;
      case 'oppMinusFive':
        if (oppLife > 0 && oppLife - 5 >= 0) {
          opp.innerText = oppLife -= 5;
        } else if (oppLife > 0) {
          opp.innerText = oppLife = 0;
        }
        break;
      case 'oppMinusTen':
        if (oppLife > 0 && oppLife - 10 >= 0) {
          opp.innerText = oppLife -= 10;
        } else if (oppLife > 0) {
          opp.innerText = oppLife = 0;
        }
        break;
      case 'oppMinusIn':
        const oppMinusInput = document.getElementById('oppMinusInput').value;
        if (oppLife > 0 && oppLife - oppMinusInput >= 0) {
          opp.innerText = oppLife -= oppMinusInput;
        } else if (oppLife > 0) {
          opp.innerText = oppLife = 0;
        }
        break;
      default:
        console.log('Hello World');
        break;
    }
  });
});

let userLife = 20;
user.innerText = userLife;

userColor.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', event => {
    event.preventDefault();
    const divColor = event.target.className;

    colors
      .filter(color => color !== divColor)
      .forEach(color => {
        userDiv.classList.remove(color);
      });

    userDiv.classList.add(divColor);
  });
});

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
