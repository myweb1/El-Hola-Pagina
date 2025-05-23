var a = 1
var iwannaplusu = 1
var immorelittleeverysecond
var Cost = 100
var seconds = 1000
var hoas = document.getElementById("hello")
var fuku = document.getElementById("fuku")

function Holafuncion() {
  a += iwannaplusu
  a +=
  hoas.innerHTML = "Holas:" + a
}
function upgrade() {
  if(a >= Cost){
    a -= Cost
    hoas.innerHTML = "Holas:" + a
    iwannaplusu += 1
    seconds += seconds/2
    Cost += Cost/2
   fuku.innerHTML = "i'm a button that upgrades u and i have a cost of:" + Cost
  }
}
function whyimdointhis() {
  immorelittleeverysecond += iwannaplusu
  
}
window.setInterval(secondfuk(),seconds)
function secondfuk( ){ 
  immorelittleeverysecond -= 1
}