// Функция вычисления суммы квадратов
function calculateSumOfSquares() {
    // Считываем значения из формы
    let firstValue = parseFloat(document.getElementById("firstValue").value);
    let secondValue = parseFloat(document.getElementById("secondValue").value);

    if (isNaN(firstValue) || isNaN(secondValue)) {
        alert("Пожалуйста, введите  два числа!");
        return;
    }

    // Переменная, равная сумме квадратов
    let sumOfSquares = Math.pow(firstValue, 2) + Math.pow(secondValue, 2);

    console.log("firstValue =", firstValue);
    console.log("secondValue =", secondValue);
    console.log("Сумма квадратов =", sumOfSquares);

    // Дополнительно выводим на страницу
    document.getElementById("result").innerHTML =
        "firstValue<sup>2</sup> + secondValue<sup>2</sup> = " +
        firstValue + "<sup>2</sup> + " + secondValue + "<sup>2</sup> = " +
        sumOfSquares;
}
// Назначаем обработчик события click на кнопку
document.getElementById("calcBtn").addEventListener("click", calculateSumOfSquares);