const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
msg.text = document.querySelector('[name="text"]').value;

const populatevoices = function () {
    voices = this.getVoices();
    const voiceOption = voices
        .filter(voice => voice.lang.includes('en'))
        .map(
            voice =>
                `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`
        )
        .join('');
    voicesDropdown.innerHTML = voiceOption;
};

const setVoice = function () {
    msg.voice = voices.find(voice => voice.name === this.value);
    toggle();
};

const toggle = function (startOver = true) {
    speechSynthesis.cancel();
    if (startOver) speechSynthesis.speak(msg);
};

const setOPtion = function () {
    console.log(this.name, this.value);
    msg[this.name] = this.value;
    toggle();
};
speechSynthesis.addEventListener('voiceschanged', populatevoices);
voicesDropdown.addEventListener('change', setVoice);
options.forEach(option => option.addEventListener('change', setOPtion));
speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', toggle.bind(null, false));
