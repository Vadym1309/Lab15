// script.js
function showPage(pageNumber) {
    // Приховуємо всі сторінки
    let pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Показуємо вибрану сторінку
    let selectedPage = document.getElementById('page' + pageNumber);
    selectedPage.classList.add('active');
}
