const htmlElement = document.querySelector('html')
const buttonDarkMode = document.getElementById('buttonDarkMode')

const darkMode = () => {
    htmlElement.className == '' ? htmlElement.className = 'dark' : htmlElement.className = ''
}

buttonDarkMode.addEventListener('click', darkMode)