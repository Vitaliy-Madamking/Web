const firstString = 'Hello world';
const secondString = 'Web programming';

function combineStrings() {
    // Берём первое слово из первой строки: "Hello"
    // slice(0, indexOf(' ')) — от начала до первого пробела
    const firstWord = firstString.slice(0, firstString.indexOf(' '));

    // Берём второе слово из второй строки: "programming"
    // slice(indexOf(' ') + 1) — от символа после пробела до конца
    const secondWord = secondString.slice(secondString.indexOf(' ') + 1);

    const result = firstWord + ' ' + secondWord;

    console.log('Первая строка:', firstString);
    console.log('Вторая строка:', secondString);
    console.log('Результат:', result);

    document.getElementById('result').innerHTML =
        `<b>Результат: "${result}"</b>`;
}

document.getElementById('runBtn').addEventListener('click', combineStrings);