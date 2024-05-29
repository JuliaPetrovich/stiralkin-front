const handleCalculatorBtnClick = () => {
    const select = document.getElementById('problem');
    const selectedValue = select.value;
    const section = document.getElementById(selectedValue);

    if (section) {
        section.scrollIntoView({behavior: 'smooth', block: 'center'});
        section.classList.add('highlight');

        setTimeout(() => {
            section.classList.remove('highlight');
        }, 2000);
    }
}