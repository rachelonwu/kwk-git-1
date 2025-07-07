var factList = [
  "I am a student athlete on MIT's Track team (I throw shotput, discus, hammer throw, and weight throw)",
  "I love digital art and have a Redbubble shop where I sell hand-designed stickers",
  "I LOVE matcha",
  "I have 3 sisters, 1 older and 2 younger",
];

var fact = document.getElementById("fact");
var factGen = document.getElementById("factGen");
var count = 0;
if (factGen) {
  factGen.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}
