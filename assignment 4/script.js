// Функция для генерации случайного числа от 1 до 6
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

// Основная функция для игры
document.getElementById("rollButton").addEventListener("click", function() {
    // Генерируем случайные числа для двух кубиков
    let dice1Value = rollDice();
    let dice2Value = rollDice();

    // Меняем изображения кубиков на соответствующие значения
    document.getElementById("dice1").src = `D:\Khama's files\assignment 4\images\diceone.png`;
    document.getElementById("dice2").src = `D:\Khama's files\assignment 4\images\dicetwo.png`;

    // Рассчитываем сумму
    let sum = dice1Value + dice2Value;

    // Отображаем результат
    let resultMessage = `You rolled ${dice1Value} and ${dice2Value}. Sum: ${sum}`;
    
    // Если выпали одинаковые значения на обоих кубиках
    if (dice1Value === dice2Value) {
        resultMessage += " - It's a double!";
    }

    document.getElementById("result").textContent = resultMessage;
});
