const themeBtn = document.getElementById('theme-btn');
const body = document.body;
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
    body.classList.add('dark-mode')
    themeBtn.textContent = 'Light Mode';
}

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        themeBtn.textContent = 'Light Mode';
        localStorage.setItem('theme', 'dark');
    } else {
        themeBtn.textContent = 'Dark Mode';
        localStorage.setItem('theme', 'light');
    }
})