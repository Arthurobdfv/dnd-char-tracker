/* HP config*/
let yourHealth = 100;
setInterval(function(){
    let healthvariable = document.getElementById("health");
    healthvariable.value = yourHealth;   
}, 1);

function addHP(){
    yourHealth += 10;
}

function loseHp(){
  yourHealth -= 1;
}