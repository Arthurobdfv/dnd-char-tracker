let copperPc = 0;
let silverPc = 0;
let goldPc = 0;
let platinumPc = 0;

function addCurrency(gold, silver, copperAmount, electrum, platinum) {

    //covert gold to copper
goldPc += gold * 100;
    //convert silver to copper
silverPc += silver * 10;
    //convert electrum to copper
electrumPc += electrum * 50;
    //convert platinum to copper
platinumPc +=  platinum * 1000;
copper += copperAmount;

 //Ill be doing mathfloor to "humanise values"
silverPc += Math.floor(copper/10);
    copper %= 10;
goldPc += Math.floor(silverPc/100);
electrumPc += Math.floor(eletrumPc/50);
    eletrumPc %= 50;
platinumPc += Math.floor(platinumPc/1000);
    platinumpc %= 1000;

updateDisplay();
}
