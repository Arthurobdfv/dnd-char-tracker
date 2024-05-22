/* HP config*/
let yourHealth = 100;
setInterval(function(){
    let healthvariable = document.getElementById("health");
    healthvariable.value = yourHealth;   
}, 1);

function loseHp() {
    yourHealth -= 10;
    console.log("Health after reduction: " + yourHealth);
  if (yourHealth<=40) {
    document.getElementById("health").style.backgroundColor = "red";
  }
    
}

function addHp(){
yourHealth += 10;
  console.log("Health after addition: " + yourHealth);
  
}
