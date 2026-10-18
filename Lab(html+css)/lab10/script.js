const array = [1, 0, 0, 0, 0, 0];

function transformArray() {
    // Копия исходного массива
    const transformed = [...array];

    // Первый элемент остаётся без изменений
    // Начинаем с индекса 1
    for (let i = 1; i < transformed.length; i++) {
        transformed[i] = transformed[i - 1] * i;
    }

    console.log('Исходный массив:', array);
    console.log('Преобразованный массив:', transformed);

    document.getElementById('result').innerHTML =
        `Исходный: [${array.join(', ')}]<br>
         <b>Результат: [${transformed.join(', ')}]</b>`;
}

document.getElementById('runBtn').addEventListener('click', transformArray);
