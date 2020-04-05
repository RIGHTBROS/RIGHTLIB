const gradientSelector = document.querySelector('select');
const viewDivision = document.querySelector('.view-division');
const text = document.querySelector('.inner-text');

gradientSelector.addEventListener('change', () => {
    let className = gradientSelector.options[gradientSelector.selectedIndex].text;
    viewDivision.className = 'rb-wrapper view-division ' + className;
    gradientSelector.className = className;
    text.innerHTML = className;
});