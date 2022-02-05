const finDeClases = '22 Dec 2022';
const valor_dias = document.getElementById('days');
const valor_horas= document.getElementById('hours') ;
const valor_mins= document.getElementById('mins');
const valor_seg= document.getElementById('seconds');

function countDown(){
    const fechaFinDeClases = new Date(finDeClases);
    const fechaActual = new Date();
    console.log(fechaFinDeClases);
    console.log(fechaActual);
    
    var totalSegundos = new Date(fechaFinDeClases - fechaActual) / 1000;
    
    const dias = Math.floor(totalSegundos /3600 / 24);
    const horas = Math.floor(totalSegundos/3600) %24;
    const mins = Math.floor(totalSegundos/60) %60;
    const seg = Math.floor(totalSegundos) % 60;
    
    valor_dias.innerHTML= dias;
    valor_horas.innerHTML= horas;
    valor_mins.innerHTML= mins;
    valor_seg.innerHTML= seg;

}


countDown();

setInterval(countDown,1000);
