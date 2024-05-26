var totalCp = 3259; //We will get this from the user

const currencies = [
  { Name: 'platinum', Value: 1000 },
  { Name: 'gold', Value: 100 },
  { Name: 'electrum', Value: 50 },
  { Name: 'silver', Value: 10 },
  { Name: 'copper', Value: 1 }
]
subscribeButtons();
refreshUI();
function addValueToCurrency(value) {
  totalCp = totalCp + value;
  refreshUI();
}

function addCurrency(currencyName){
  var currency = currencies.find((curr) => curr.Name === currencyName);
  addValueToCurrency(currency.Value);
}

function removeCurrency(currencyName){
  var currency = currencies.find((curr) => curr.Name === currencyName);
  addValueToCurrency(currency.Value*-1);
}


//#region UI Functions
function subscribeButtons() {
  currencies.forEach((curr) => {
    document.getElementById(`add-currency-${curr.Name}-button`).addEventListener('click', (event)=> {
      addCurrency(curr.Name);
    });
    document.getElementById(`remove-currency-${curr.Name}-button`).addEventListener('click', (event)=> {
      removeCurrency(curr.Name);
    })
  })
}

function refreshUI(){
  var cpTotalClone = totalCp // We do this not to alter totalCP, so its just a copy
  var platinumValue = Math.floor(cpTotalClone/1000);
  cpTotalClone = cpTotalClone - platinumValue*1000;
  var goldValue = Math.floor(cpTotalClone/100);
  cpTotalClone = cpTotalClone - goldValue*100;
  var eleValue = Math.floor(cpTotalClone/50);
  cpTotalClone = cpTotalClone - eleValue*50;
  var silverValue = Math.floor(cpTotalClone/10);
  cpTotalClone = cpTotalClone - silverValue*10;
  var copperValue = cpTotalClone;

  /* Here you add all the logic to update the
  text / label fields with the corresponding values*/
  document.getElementById('money-counter-input-gold').innerHTML = goldValue;
  document.getElementById('money-counter-input-platinum').innerHTML = platinumValue;
  document.getElementById('money-counter-input-electrum').innerHTML = eleValue;
  document.getElementById('money-counter-input-silver').innerHTML = silverValue;
  document.getElementById('money-counter-input-copper').innerHTML = copperValue;
  
}
//#endregion


