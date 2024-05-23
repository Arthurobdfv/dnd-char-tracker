var totalCp = 3259; //We will get this from the user

function refreshUI(){
  var cpTotalClone = totalCp // We do this not to alter totalCP, so its just a copy
  var platinumValue = Math.floor(cpTotalClone/1000);
  cpTotalClone = cpTotalClone - platinumValue*1000;
  var goldValue = Math.floor(cpTotalClone/100);
  cpTotalClone = cpTotalClone - goldValue*100;
  var eleValue = Math.floor(cpTotalClone/50);
  cpTotalClone = cpTotalClone - eleValue*50;
  var silverValue = Math.floor(cpTotalClone*10);
  cpTotalClone = cpTotalClone - silverValue;
  var copperValue = cpTotalClone;

  /* Here you add all the logic to update the
  text / label fields with the corresponding values*/
  document.getElementById('money-counter-input-gold').innerHTML = goldValue;
  document.getElementById('money-counter-input-platinum').innerHTML = platinumValue;
  document.getElementById('money-counter-input-electrum').innerHTML = eleValue;
  document.getElementById('money-counter-input-silver').innerHTML = silverValue;
  document.getElementById('money-counter-input-copper').innerHTML = copperValue;
  
}

function addValueToCurrency(value) {
  totalCp = totalCp + value;
  refreshUI();
}


// Adding gold
function addGold() {
 
  addValueToCurrency(100);
}

// adding EP
function addEP() {
 
  addValueToCurrency(50);
}

// func to remove platinum
function removePlatinum() {
  
  addValueToCurrency(-1000);
}
//func to remove gold
function removeGold() {
    addValueToCurrency(-100);
  }
//func to remove silver
  function removeSilver() {
    addValueToCurrency(-10);
  }

