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
        oppLife += 1;
        opp.innerText = oppLife;
        break;
      case 'oppMinus':
        if (oppLife > 0) {
          oppLife -= 1;
          opp.innerText = oppLife;
        }
        break;
      case 'oppPlusFive':
        oppLife += 5;
        opp.innerText = oppLife;
        break;
      case 'oppPlusTen':
        oppLife += 10;
        opp.innerText = oppLife;
        break;
      case 'oppPlusIn': {
        const oppPlusInput = document.getElementById('oppPlusInput').value;
        oppLife += +oppPlusInput;
        opp.innerText = oppLife;
        break;
      }
      case 'oppMinusFive':
        if (oppLife > 0 && oppLife - 5 >= 0) {
          oppLife -= 5;
          opp.innerText = oppLife;
        } else if (oppLife > 0) {
          oppLife = 0;
          opp.innerText = oppLife;
        }
        break;
      case 'oppMinusTen':
        if (oppLife > 0 && oppLife - 10 >= 0) {
          oppLife -= 10;
          opp.innerText = oppLife;
        } else if (oppLife > 0) {
          oppLife = 0;
          opp.innerText = oppLife;
        }
        break;
      case 'oppMinusIn': {
        const oppMinusInput = document.getElementById('oppMinusInput').value;
        if (oppLife > 0 && oppLife - oppMinusInput >= 0) {
          oppLife -= oppMinusInput;
          opp.innerText = oppLife;
        } else if (oppLife > 0) {
          oppLife = 0;
          opp.innerText = oppLife;
        }
        break;
      }
      default:
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

userMath.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', event => {
    event.preventDefault();

    const buttonId = event.target.id;

    switch (buttonId) {
      case 'userPlus':
        userLife += 1;
        user.innerText = userLife;
        break;
      case 'userMinus':
        if (userLife > 0) {
          userLife -= 1;
          user.innerText = userLife;
        }
        break;
      case 'userPlusFive':
        userLife += 5;
        user.innerText = userLife;
        break;
      case 'userPlusTen':
        userLife += 10;
        user.innerText = userLife;
        break;
      case 'userPlusIn': {
        const userPlusInput = document.getElementById('userPlusInput').value;
        userLife += +userPlusInput;
        user.innerText = userLife;
        break;
      }
      case 'userMinusFive':
        if (userLife > 0 && userLife - 5 >= 0) {
          userLife -= 5;
          user.innerText = userLife;
        } else if (userLife > 0) {
          userLife = 0;
          user.innerText = userLife;
        }
        break;
      case 'userMinusTen':
        if (userLife > 0 && userLife - 10 >= 0) {
          userLife -= 10;
          user.innerText = userLife;
        } else if (userLife > 0) {
          userLife = 0;
          user.innerText = userLife;
        }
        break;
      case 'userMinusIn': {
        const userMinusInput = document.getElementById('userMinusInput').value;
        if (userLife > 0 && userLife - userMinusInput >= 0) {
          userLife -= userMinusInput;
          user.innerText = userLife;
        } else if (userLife > 0) {
          userLife = 0;
          user.innerText = userLife;
        }
        break;
      }
      default:
        break;
    }
  });
});
