const horas=document.getElementById("horas");

const minutos=document.getElementById("minutos");

const segundos=document.getElementById("segundos");

const relogio=setInterval(function time(){

let dateToday =new Date();

let hr=dateToday.getHours();

let mn=dateToday.getMinutes();

let sg=dateToday.getSeconds();

if(sg<10) sg= "0" + sg;
if(mn<10) mn= "0" + mn;
if(hr<10) hr= "0" + mn;


horas.textContent=hr;

minutos.textContent=mn;

segundos.textContent=sg;



});

