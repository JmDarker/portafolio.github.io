const toggleBtn = document.querySelector ('.menu')
const toggleBtnIcon = document.querySelector ('.menu i')
const dropDownMenu = document.querySelector ('.ul')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('visible')
    const isOpen = dropDownMenu.classList.contains('visible')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}
