const checkBoxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;
const handleCheck = function (e) {
    let inbetween = false;
    if (e.shiftKey && this.checked) {
        checkBoxes.forEach(checkBox => {
            if (checkBox === this || checkBox === lastChecked) {
                inbetween = !inbetween;
            }
            if (inbetween) {
                checkBox.checked = true;
            }
        });
    }
    lastChecked = this;
};
checkBoxes.forEach(checkBox => checkBox.addEventListener('click', handleCheck));
