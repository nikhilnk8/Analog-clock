
setClock=()=>{
    
    const hour = document.getElementById('hour');
    const minute = document.getElementById('minute');
    const second = document.getElementById('second');

    const currentdate = new Date();

    const secondRatio = currentdate.getSeconds()/60;
    const minuteRatio = (secondRatio+ currentdate.getMinutes())/60;
    const hourRatio = (minuteRatio+currentdate.getHours())/12;

    setRotation(second, secondRatio);
    setRotation(minute, minuteRatio);
    setRotation(hour, hourRatio);
    
    setTimeout(setClock, 1000);

}

setRotation=(ele, ratio)=>{
    ele.style.setProperty('--rotation', ratio*360)
}

setClock();