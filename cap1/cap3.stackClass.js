function Stack(){
  var items = [];
  this.push = function(element){
    items.push(element);
  };

  this.pop = function(){
    return items.pop();
  };

  this.peek = function(){
    return items[items.length-1];
  };

  this.isEmpty = function(){
    return items.length == 0;
  };

  this.size = function(){
    return items.length;
  };

  this.clear = function(){
    items = [];
  };

  this.print = function(){
    console.log(items.toString());
  };

  this.length = function(){
    return items.length;
  };
}

var stack = new Stack();
console.log(stack.isEmpty());
stack.push(5);
stack.push(8);
console.log(stack.peek());

stack.push(11);
console.log(stack.length());
console.log(stack.isEmpty());

stack.push(15);
//excluiu os últimos 2 elementos que foram adicionados {11,15}
stack.pop();
stack.pop();
console.log(stack.size());
stack.print();

function baseConverter(decNumber, base){
  var remStack = new Stack(),
  rem,
  baseString = '',
  digits = '0123456789ABCDEF';

  while(decNumber > 0 ){
    //A função Math.floor(x) retorna o maior número inteiro dentre o número "x".
    rem = Math.floor(decNumber % base); //{2}
    remStack.push(rem);
    decNumber = Math.floor(decNumber / base); //{4}
  }

  while(!remStack.isEmpty()){ //{5}
      baseString += digits[remStack.pop()]; //{7}
  }

  return baseString;
}

function celsosToFahrenhiet(temp){
  var remStack = new Stack(),
  fahrenheit,
  baseString;

  fahrenheit = (temp * 9 / 5) + 32;
  remStack.push(fahrenheit);

  baseString = remStack.pop().toString(); //{7}

  return baseString;;
}

//cria a instancia de stack
//inicializa variáveis
//efetua operações e adiciona dentro da Stack
//verifica o status da Stack (vazia ou cheia)
//processa e retorna o resultado processando a string.

console.log(baseConverter(100345,2));
console.log(baseConverter(100345, 8));
console.log(baseConverter(100345, 16));
console.log("celsosToFahrenhiet");
console.log(celsosToFahrenhiet(32));
