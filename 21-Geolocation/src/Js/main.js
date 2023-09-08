const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

const getlocation = function () {
    navigator.geolocation.watchPosition(
        data => {
            console.log(data);
            speed.textContent = data.coords.speed;
            arrow.style.transform = `rotate(${
                data.coords.headding || alert('no coords')
            }deg)`;
        },
        err => {
            console.error(err);
        }
    );
};
getlocation();
