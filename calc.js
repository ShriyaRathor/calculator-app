var l = 0;
var a;
$("button").click(function () {
  a = $(this).val();
  l = document.getElementById("display").innerHTML.length;

  if (a == "←") {
    document.getElementById("display").innerHTML = document
      .getElementById("display")
      .innerHTML.substring(0, l - 1);
  } else if (a == "=") {
    expression = document.getElementById("display").innerHTML;
    result = evaluate(expression);
    document.getElementById("display").innerHTML = result;
  } else if (a == "C") {
    document.getElementById("display").innerHTML = "";
  } else {
    if (l >= 25) {
      alert("Cannot enter more than this");
    } else {
      document.getElementById("display").innerHTML += a;
    }
  }
});

function isNumber(character) {
  return !isNaN(parseInt(character));
}
const priority = {
  "+": 1,
  "-": 1,
  "*": 2,
  "/": 2,
};
function peek(stack) {
  return stack[stack.length - 1];
}

function evaluate(expression) {
  expression = "(" + expression + ")";
  postfixExpression = [];

  let stack = [];
  for (i = 0; i < expression.length; i++) {
    c = expression[i];
    if (isNumber(c) != true && c!='.') {
      if (c in priority) {
        if (priority[peek(stack)] >= priority[c]) {
          postfixExpression.push(stack.pop());
        }
        stack.push(c);
      } else if (c == ")") {
        while (peek(stack) != "(") {
          postfixExpression.push(stack.pop());
        }
        stack.pop();
      } else {
        stack.push(c);
      }
    } else {
      // number = c;
      post ="";
      while (isNumber(expression[i]) || expression[i]=='.') {
        post = post + expression[i]
        // number = (number * 10) + parseInt(expression[i + 1]);
        i++;
      }
      i--;
      postfixExpression.push(parseFloat(post))
    }
  }
  console.log(postfixExpression);
  // Calculation part

  calcStack = [];
  for (i = 0; i < postfixExpression.length; i++) {
    c = postfixExpression[i];
    if (!isNaN(parseFloat(c))) {
      calcStack.push(c);
    } else {
      a = parseFloat(calcStack.pop());
      b = parseFloat(calcStack.pop());
      if (c == "+") calcStack.push(a + b);
      if (c == "-") calcStack.push(b - a);
      if (c == "*") calcStack.push(a * b);
      if (c == "/") calcStack.push(b / a);
    }
  }
  return peek(calcStack);
}
