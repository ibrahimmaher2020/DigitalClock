const houreEl=document.getElementById("hour");
const minutesEl=document.getElementById("minutes");
const secondsEL=document.getElementById("seconds");
const ampmEL=document.getElementById("ampm");
function updateClock()
{
    let h= new Date().getHours();
    let m= new Date().getMinutes();
    let s= new Date().getSeconds();
    const ampm="AM";
    
    if (h>12) {

        ampm="PM";
        h=h-12;
    }

    h=h<10?'0'+h:h;    
    m=m<10?'0'+m:m;
    s=s<10?'0'+s:s;
    
    houreEl.innerText=h;
    minutesEl.innerHTML=m;
    secondsEL.innerHTML=s;
    ampmEL.innerText=ampm;
    setTimeout(()=>{
        updateClock()
    },1000)
}
updateClock()