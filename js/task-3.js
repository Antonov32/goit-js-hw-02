// Задача 3. Перевірка спаму
// Виконуй це завдання у файлі task-3.js

// Функція checkForSpam(message) приймає рядок (параметр message), перевіряє його на вміст заборонених слів spam і sale, і повертає результат перевірки. Слова в рядку параметра message можуть бути в довільному регістрі, наприклад SPAM або sAlE.

// Доповни код функції таким чином, що:

// Якщо знайдено заборонене слово (spam або sale), то функція повертає буль true
// Якщо в рядку відсутні заборонені слова, функція повертає буль false
// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

// function checkForSpam(message) {
//   let messageLower = message.toLowerCase();
//   return messageLower.includes("sale") || messageLower.includes("spam")
//     ? true
//     : false;
// }

// console.log(checkForSpam("Latest technology news")); // false
// console.log(checkForSpam("JavaScript weekly newsletter")); // false
// console.log(checkForSpam("Get best sale offers now!")); // true
// console.log(checkForSpam("Amazing SalE, only tonight!")); // true
// console.log(checkForSpam("Trust me, this is not a spam message")); // true
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
