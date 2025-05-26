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
  print(a)
  print(iwannaplusu)
  if(immorelittleeverysecond >= 0){
    a += immorelittleeverysecond
    print(a)
    print(iwannaplusu)
    print(immorelittleeverysecond)
  }
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
   print(a)
   print(iwannaplusu)
   print(seconds)
   print(cost)
  }
}
function whyimdointhis() {
  immorelittleeverysecond += iwannaplusu 
  bruh.innerHTML = "Im a text that shows how many clicks you do" + immorelittleeverysecond
  print(immorelittleeverysecond)
  
}
window.setInterval(secondfuk(),seconds)
function secondfuk( ){ 
  if (immorelittleeverysecond >= 1) {
    immorelittleeverysecond -= 1
    print(immorelittleeverysecond)
  } 
  else (immorelittleeverysecond <= 0); 
    
  
  
}