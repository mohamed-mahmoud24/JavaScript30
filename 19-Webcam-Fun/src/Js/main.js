const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

const getVideo = function () {
    navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })
        .then(localMediaStream => {
            video.srcObject = localMediaStream;
            video.play();
        })
        .catch(err => {
            console.error(`OH NO!!!`, err);
        });
};

const paintToCanvas = function () {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;
    setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);
        let pixels = ctx.getImageData(0, 0, width, height);
        // ctx.globalAlpha = 0.1;
        pixels = greenScreen(pixels);
        // pixels = redEffect(pixels);
        // pixels = rgbSplit(pixels);
        pixels = greenScreen(pixels);
        ctx.putImageData(pixels, 0, 0);
    }, 16);
};

const takePhoto = function () {
    snap.currentTime = 0;
    snap.play();

    const data = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'handsome');
    link.innerHTML = `<img src="${data}" />`;
    strip.insertBefore(link, strip.firstChild);
};

const redEffect = function (pixels) {
    for (let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i] += 100;
        pixels.data[i + 1] -= 50;
        pixels.data[i + 2] *= 0.5;
    }
    return pixels;
};
const rgbSplit = function (pixels) {
    for (let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i - 550] = pixels.data[i];
        pixels.data[i + 500] = pixels.data[i + 1];
        pixels.data[i - 550] = pixels.data[i + 2];
    }
    return pixels;
};

const greenScreen = function (pixels) {
    const levels = {};

    document.querySelectorAll('.rgb input').forEach(input => {
        levels[input.name] = input.value;
    });

    for (i = 0; i < pixels.data.length; i = i + 4) {
        red = pixels.data[i + 0];
        green = pixels.data[i + 1];
        blue = pixels.data[i + 2];
        alpha = pixels.data[i + 3];

        if (
            red >= levels.rmin &&
            green >= levels.gmin &&
            blue >= levels.bmin &&
            red <= levels.rmax &&
            green <= levels.gmax &&
            blue <= levels.bmax
        ) {
            // take it out!
            pixels.data[i + 3] = 0;
        }
    }

    return pixels;
};

getVideo();
video.addEventListener('canplay', paintToCanvas);
