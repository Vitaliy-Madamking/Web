// Три исходных объекта
const obj1 = { name: 'Иван', age: 30 };
const obj2 = { city: 'Москва', country: 'Россия' };
const obj3 = { hobby: 'футбол', job: 'программист' };

function mergeObjects() {
    // Object.assign копирует свойства всех объектов в первый
    const merged = Object.assign({}, obj1, obj2, obj3);

    // Альтернатива через spread-оператор:
    // const merged = { ...obj1, ...obj2, ...obj3 };

    console.log('Объект 1:', obj1);
    console.log('Объект 2:', obj2);
    console.log('Объект 3:', obj3);
    console.log('Итоговый объект:', merged);

    document.getElementById('result').textContent =
        JSON.stringify(merged, null, 2);
}

document.getElementById('mergeBtn').addEventListener('click', mergeObjects);