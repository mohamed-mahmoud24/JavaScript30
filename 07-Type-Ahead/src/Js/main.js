const endpoint =
    'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
    .then(res => res.json())
    .then(data => cities.push(...data));

const findMatch = function (wordMatch, arr) {
    return arr.filter(element => {
        const regexp = new RegExp(wordMatch, 'gi');
        return element.state.match(regexp) || element.city.match(regexp);
    });
};

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
const content = suggestions.innerHTML;

const numbersWithCommas = function (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const displayMatch = function () {
    const matchArr = findMatch(this.value, cities);
    const html = matchArr
        .map(element => {
            const regex = new RegExp(this.value, 'gi');
            const cityName = element.city.replace(
                regex,
                `<span class="hl" >${this.value}</span>`
            );
            const stateName = element.state.replace(
                regex,
                `<span class="hl">${this.value}</span>`
            );
            const population = numbersWithCommas(element.population);
            return `
        <li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">${population}</span>
        </li>`;
        })
        .join('');
    suggestions.innerHTML = html;
};

const emptySuggestions = function () {
    if (this.value === '') {
        suggestions.innerHTML = content;
    }
};
searchInput.addEventListener('keyup', displayMatch);
searchInput.addEventListener('keyup', emptySuggestions);
searchInput.addEventListener('change', emptySuggestions);
