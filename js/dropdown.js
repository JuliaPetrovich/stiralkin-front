const handleDropdownClick = (id) => {
    const dropDownContent = document.querySelector(`#item_${id}`);
    const dropdownIcon = dropDownContent.previousElementSibling.querySelector('.dropdown-item__icon');

    if (dropDownContent.classList.contains('show')) {
        dropDownContent.classList.remove('show');
        dropdownIcon.classList.remove('rotate');
    } else {
        dropDownContent.classList.add('show');
        dropdownIcon.classList.add('rotate');
    }
}
