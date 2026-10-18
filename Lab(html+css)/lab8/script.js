// Рекурсивная функция Фибоначчи
function fibonacci(n) {
    if (n <= 1) return n;              // база рекурсии: F(0)=0, F(1)=1
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function calcFibonacci() {
    const n = parseInt(document.getElementById('fibInput').value);

    if (isNaN(n) || n < 0) {
        alert('Введите целое неотрицательное число!');
        return;
    }

    const result = fibonacci(n);

    console.log(`F(${n}) = ${result}`);
    document.getElementById('result').innerHTML =
        `<b>F(${n}) = ${result}</b>`;
}

document.getElementById('fibBtn').addEventListener('click', calcFibonacci);