var pics=(downlaod.jpg,adiphoto.jpg,poops.jpg,mama.jpg,dadi.jpg,dadaji.jpg,bai.jpg,poorchi.jpg)
var names=("   ","Aditya Kakkad","Hitesh Kakkad","Anuya Kakkad","Nutan Kakkad","Dinesh Kakkad","Kamlabai Kakkad","Prachi Kakkad")
var s=0;

function next(){
document.getElementById("h4").innerHTML=names[s];
document.getElementById("album1").src=pics
[s];
s++;
}