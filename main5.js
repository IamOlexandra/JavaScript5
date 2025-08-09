let drink = prompt("Оберіть напій");
if (drink !== null) {
    drink = drink.trim().toLowerCase();
    switch(drink) {
        case "кава":
            alert("Ви вибрали каву");
            break;
        case "чай":
            alert("Ви вибрали чай");
            break;
        case "сік":
            alert("Ви вибрали сік");
            break;
        default: alert(`Ви вибрали "${drink}". Цей напій не підтримується`);
    }
}

let dayOfTheWeek = prompt("Введіть день тижня");
if (dayOfTheWeek !== null) {
    dayOfTheWeek = dayOfTheWeek.trim().toLowerCase();
    switch(dayOfTheWeek) {
        case "понеділок": case "вівторок": case "середа": case "четвер": case "п'ятниця":
            alert("Робочій день");
            break;
        case "субота": case "неділя":
            alert("Вихідний день");
            break;
        default: alert(`"${dayOfTheWeek}" - це не день тижня`);
    }
}

let month = prompt("Введіть номер місяця");
if (month !== null) {
    month = month.trim();
    switch(month) {
        case "1": case "2": case "12":
            alert("Це зимовий місяць");
            break;
        case "3": case "4": case "5":
            alert("Це весняний місяць");
            break;
        case "6": case "7": case "8":
            alert("Це літній місяць");
            break;
        case "9": case "10": case "11":
            alert("Це осінній місяць");
            break;
        default: alert("Помилка: неправильне заповнення");
    }
}

let color = prompt("Введіть колір світлофора");
if (color !== null) {
    color = color.trim().toLowerCase();
    switch(color) {
        case "червоний":
            alert("стоп");
            break;
        case "зелений":
            alert("йти");
            break;
        case "жовтий":
            alert("чекати");
            break;
        default: alert(`"${color}" не є кольором світлофора`);
    }
}

let num1 = prompt("Введіть перше число");
let operator = prompt("Введіть оператор");
let num2 = prompt("Введіть друге число");
if (num1 !== null || operator !== null || num2 !== null) {
    num1 = Number(num1.replace(/,/g, ".").trim());
    num2 = Number(num2.replace(/,/g, ".").trim());
    operator = operator.trim().toLowerCase();
    if (num1 !== NaN || num2 !== NaN) {
        switch(operator) {
            case "+":
                alert(`${num1} + ${num2} = ${num1 + num2}`);
                break;
            case "-":
                alert(`${num1} - ${num2} = ${num1 - num2}`);
                break;
            case "*": case "x":
                alert(`${num1} * ${num2} = ${num1 * num2}`);
                break;
            case "/": case ":":
                if (num2 === 0) {
                    alert("Ділення на нуль неможливо виконати");
                } else {
                    alert(`${num1} / ${num2} = ${num1 / num2}`);
                }
                break;
            default: alert("Помилка: неправильне заповнення");
        }
    } else {
        alert("Помилка: неправильне заповнення");
    }
}