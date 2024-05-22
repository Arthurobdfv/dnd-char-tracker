var actionSurgeComponent = document.getElementById(`action-surge-tracker`);
var actionSurgeComponentText = document.getElementById(`action-surge-tracker-text`);
var actionSurgeComponentDisplay = document.getElementById(`action-surge-counter-display`);

var count = 0;
var maxCharges = 1;

longRestButton.addEventListener("click", (event) => {
    count ++;
    if(count > maxCharges){
        count = maxCharges;
    };
    updateUI();
});
updateUI();

function updateUI(){
    actionSurgeComponentDisplay.innerHTML = `${count}/${maxCharges}`;
}