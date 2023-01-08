const save=[]
const book=()=>{

let name = document.getElementById("name").value
let email = document.getElementById("email").value
let phno = document.getElementById("phno").value
let service = document.getElementById("service").value
let date = document.getElementById("date").value
let time = document.getElementById("time").value

const details = {name,email,phno,service,date,time}
save.push(details)
const pdet = JSON.stringify(save)
localStorage.setItem("detail",pdet)
alert("Booking Conformed")

document.getElementById("name").value='';
document.getElementById("email").value='';
document.getElementById("phno").value='';
document.getElementById("service").selectedIndex = 0;
document.getElementById("date").value='';
document.getElementById("time").value='';



//const nametag= document.getElementById("name");
//const nametag= document.getElementById("name");




//document.getElementById("name").innerHTML=''
// document.getElementById("name").innerHTML=''
//  document.getElementById("name").innerHTML=''
//  document.getElementById("name").innerHTML=''



}

