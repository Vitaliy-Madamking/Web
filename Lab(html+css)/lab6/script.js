function getDayName(dayNumber) {
    switch (dayNumber) {
        case 1: return 'Понедельник';
        case 2: return 'Вторник';
        case 3: return 'Среда';
        case 4: return 'Четверг';
        case 5: return 'Пятница';
        case 6: return 'Суббота';
        case 7: return 'Воскресенье';
        default: return 'Некорректный номер дня';
    }
}

function checkDay() {
    const dayNumber = parseInt(document.getElementById('dayInput').value);
    // Пример 1 — из формы
    const name1 = getDayName(dayNumber);
    console.log(`${dayNumber} – ${name1}`);
    // Пример 2 — фиксированный (демонстрация второго примера по заданию)
    const secondExample = 5;
    const name2 = getDayName(secondExample);
    console.log(`${secondExample} – ${name2}`);

    document.getElementById('result').innerHTML =
        `<b>${dayNumber} – ${name1}</b><br>${secondExample} – ${name2}`;
}

document.getElementById('checkBtn').addEventListener('click', checkDay);