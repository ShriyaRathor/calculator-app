function isNumber(character) {
  return !isNaN(parseInt(character));
}
const priority = {
  "+": 1,
  "-": 1,
  "*": 2,
  "/": 2
};
function peek(stack){
  return stack[stack.length-1]
}

postfixExpression="";
let stack = [];
for (i = 0; i < expression.length; i++) {
  c = expression[i];
  if (isNumber(c) != true) {
    if(c in priority){
      if (priority[peek(stack)] >= priority[c]) {
        postfixExpression += stack.pop();
      }
        stack.push(c);
      }
     else if( c == ')')
     {
      while(peek(stack) != '('){
        postfixExpression += stack.pop();
      }
      stack.pop();
     }
     else{
      stack.push(c);
     }
    }
    else
    {
      postfixExpression += c
    }
  }

// Calculation part

calcStack =[];
for (i=0;i< postfixExpression.length; i++){
  c = postfixExpression[i];
  if(! isNaN(parseFloat(c)))
  {
    calcStack.push(c)
  }
  else
  {
    a = parseFloat(calcStack.pop());
    b = parseFloat(calcStack.pop());
    if(c == '+')
    calcStack.push(a+b);
    if(c == '-')
    calcStack.push(a-b);
    if(c == '*')
    calcStack.push(a*b);
    if(c == '/')
    calcStack.push(b/a);
  }
}
peek(calcStack)

