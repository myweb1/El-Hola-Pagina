var a = 1
var iwannaplusu = 1
var Cost = 100
var hoas = document.getElementById("hello")
var fuku = document.getElementById("fuku")

function Holafuncion() {
  a += iwannaplusu
  hoas.innerHTML = "Holas:" + a
}
function upgrade() {
  a -= Cost
  hoas.innerHTML = "Holas:" + a
  iwannaplusu + 1
  Cost += Cost/2
  fuku.innerHTML = "i'm a button that upgrades u and i have a cost of:" + Cost
}