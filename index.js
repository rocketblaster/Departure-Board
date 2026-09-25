const dropdownButton = document.getElementById('dropdownButton');
const dropdownContent = document.getElementById('dropdownContent');

dropdownButton.addEventListener('click', () => {
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});

window.addEventListener('click', (event) => {
    if (!event.target.matches('.dropdown button')) {
        dropdownContent.style.display = 'none';
    }
});