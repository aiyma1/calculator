let sign;
  function func() {
    let result;
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    switch (sign) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2) {
          result = num1 / num2;
        } else {
          result = 'бесконечность';
        }
        break;
      default:
        result = 'выберите операцию';
    }

    document.getElementById("result").innerHTML = result;
  }