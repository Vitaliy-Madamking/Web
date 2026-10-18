function isLuckyTicket(ticketNumber) {
    // Преобразуем в строку на случай, если пришло число
    const str = String(ticketNumber);

    // Проверка длины
    if (str.length !== 6 || isNaN(Number(str))) {
        return null;
    }

    let sumOdd = 0;   // сумма цифр на нечётных местах (1, 3, 5)
    let sumEven = 0;  // сумма цифр на чётных местах (2, 4, 6)

    // Цикл по всем 6 позициям
    for (let i = 0; i < 6; i++) {
        const digit = parseInt(str[i]);
        // Позиции в задаче считаются с 1: i+1
        if ((i + 1) % 2 === 1) {
            sumOdd += digit;
        } else {
            sumEven += digit;
        }
    }

    return sumOdd === sumEven;
}

function checkTicket() {
    const ticketNumber = document.getElementById('ticketInput').value.trim();

    const result = isLuckyTicket(ticketNumber);

    if (result === null) {
        alert('Введите корректный шестизначный номер!');
        return;
    }

    const message = result
        ? `Билет ${ticketNumber} — СЧАСТЛИВЫЙ`
        : `Билет ${ticketNumber} — не счастливый`;

    console.log(message);
    document.getElementById('result').innerHTML = `<b>${message}</b>`;
}

document.getElementById('checkBtn').addEventListener('click', checkTicket);