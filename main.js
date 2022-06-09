"use strict";
const calculateBtn = document.querySelector(".calculate-btn");
const inputEl = document.querySelector(".input-el");
const resultEl = document.querySelector(".result-el");
function calculatingTheFactorial(){
  "use strict";
  if(inputEl.value === ""){
    resultEl.innerText = "INSERT A POSITIVE INTEGER LESS THAN 21";
  }
  if(inputEl.value < 0){
    resultEl.innerText = "INSERT A POSITIVE INTEGER LESS THAN 21";
  }
  else if(inputEl.value === "0"){
    resultEl.innerText = "The factorial of 0 is equal to 1";
  }
  else if(inputEl.value > 21){
    resultEl.innerText = "INSERT A POSITIVE INTEGER LESS THAN 21";
  }
  
  else if(inputEl.value > 0){
  let sum = 1;
  for(let i = 1; i <= inputEl.value; i++){
     sum = sum * i;
     let paragraph = document.createElement("p");
     resultEl.appendChild(paragraph);
    resultEl.innerText =  ` The factorial of ${inputEl.value} is equal to ` + sum;
     }     
  }
}
calculatingTheFactorial();
calculateBtn.addEventListener("click", function(){
  "use strict";
  let paragraph = document.createElement("p");
  resultEl.appendChild(paragraph);
  paragraph.innerText += calculatingTheFactorial();
})  
