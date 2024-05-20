
var longRestBtn = document.getElementsByClassName('long-rest-event-button')[0];
var count = 0;
var actionSurgeComponent = document.getElementsByClassName("action-surge-counter-display");

longRestBtn.addEventListener("click",(e) => {
  count += 1;
  console.log("Clicou em ShortRest");
  updateComponent();
})


function updateComponent(){
  actionSurgeComponent.innerHTML = count + "/1";
}
