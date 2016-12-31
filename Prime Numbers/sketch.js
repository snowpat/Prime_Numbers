var srcTxt;
var prmTxt;
var output;
var submit;
var numberArray = [];
var indexArray = [];
var primeNums;

function setup() {
  noCanvas();
  srcTxt = createInput();
  srcTxt.changed(newText);
  prmTxt = createInput();
  prmTxt.changed(prmText);
}

function primeChecker(n) {
  var a = true;
  for(i = 2; i < floor(sqrt(n))+1; i++)
  {
    if(n%i === 0)
    {
      a = false;
    }
  }
  return a;
}


function newText(){
  primeNums = Primes(parseInt(srcTxt.value()));
  primeNums = join(primeNums, ' ');
  createP(primeNums);
}

function prmText(){
  createP(primeChecker(parseInt(prmTxt.value())));
}