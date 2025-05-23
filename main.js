var a = 1
var iwannaplusu = 1
var immorelittleeverysecond
var Cost = 100
var seconds = 5000
var hoas = document.getElementById("hello")
var fuku = document.getElementById("fuku")
var bruh = document.getElementById("bruh")

function Holafuncion() {
  a += iwannaplusu
  a += immorelittleeverysecond
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
  bruh.innerHTML = "Im a text that shows how many clicks you do" + immorelittleeverysecond
  
}
window.setInterval(secondfuk(),seconds)
function secondfuk( ){ 
  immorelittleeverysecond -= 1
}