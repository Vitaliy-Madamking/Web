// Получаем все прямоугольники
const rectangles = document.querySelectorAll('.rect');

// Для каждого вешаем обработчик клика
rectangles.forEach(rect => {
    rect.addEventListener('click', () => {
        // toggle добавляет/убирает класс .rotating
        rect.classList.toggle('rotating');

        console.log('Клик по', rect.id,
            rect.classList.contains('rotating') ? '— вращается' : '— остановлен');
    });
});
