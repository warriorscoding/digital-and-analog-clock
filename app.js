const sec_circle = document.querySelector('.circle-sec');
const min_circle = document.querySelector('.circle-min');
const hrs_circle = document.querySelector('.circle-hrs');
const time_dom = document.getElementById('time');

setInterval(() => {
    const date = new Date();
    const time = {
        hrs: date.getHours(),
        min: date.getMinutes(),
        sec: date.getSeconds(),
        r_hrs: date.getHours() / 12 * 360,
        r_min: date.getMinutes() / 60 * 360,
        r_sec: date.getSeconds() / 60 * 360,
    }
    
    time.am_pm = time.hrs >= 12 ? 'PM' : 'AM';
    time._12hourtime = time.hrs > 12 ? time.hrs - 12 : time.hrs;
    
    sec_circle.style.transform = `rotate(${time.r_sec}deg)`;
    min_circle.style.transform = `rotate(${time.r_min}deg)`;
    hrs_circle.style.transform = `rotate(${time.r_hrs}deg)`;
    
    time_dom.innerText = 
        `${preety(time._12hourtime)}:${preety(time.min)}`; 
    time_dom.setAttribute('data-time', time.am_pm);
}, 1000);

const preety = value => value < 10 ? "0" + value : value;


