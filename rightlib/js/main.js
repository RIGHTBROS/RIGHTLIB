const gradientSelector = document.querySelector('select');
const viewDivision = document.querySelector('.view-division');

gradientSelector.addEventListener('change', () => {
    let className = gradientSelector.options[gradientSelector.selectedIndex].text;
    console.log(className);
    viewDivision.className = 'rb-wrapper view-division ' + className;
});