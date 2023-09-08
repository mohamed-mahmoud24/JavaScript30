const bands = [
    'The Plot in You',
    'The Devil Wears Prada',
    'Pierce the Veil',
    'Norma Jean',
    'The Bled',
    'Say Anything',
    'The Midway State',
    'We Came as Romans',
    'Counterparts',
    'Oh, Sleeper',
    'A Skylit Drive',
    'Anywhere But Here',
    'An Old Dog',
];

const strip = function (bandName) {
    return bandName.replace(/^(a |the |an )/i, '').trim();
};

const sorteBands = bands.sort((a, b) => (strip(a) > strip(b) ? 1 : -1));

document.querySelector('#bands').innerHTML = sorteBands
    .map(band => `<li>${band}</li>`)
    .join('');
