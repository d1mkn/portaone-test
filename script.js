// Обробка тексту, що передали на аналіз. Функція використовується як коллбек і повертає масив унікальних символів
// Видаляємо небажані символи, які можуть вплинути на кінцевий результат
// Ділимо текст на окремі слова, після чого перебираємо слово посимвольно і перевіряємо на співпадіння початкового та кінцевого індексів, таким чином отримаємо літери, що не повторюються в слові
// Коли знайшли перший унікальний символ, передаємо його у новий масив, де зберігаються унікальні символи з усіх слів
const wordByChars = (textInputEl) => {
  const text = textInputEl.value;
  const uniqueWordChars = [];
  text
    .replaceAll(/[-().,^+!?]/g, "")
    .split(" ")
    .forEach((word) => {
      for (let i = 0; i < word.length; i += 1) {
        const letter = word[i];
        if (word.indexOf(letter) === i && word.lastIndexOf(letter) === i) {
          uniqueWordChars.push(letter);
          break;
        }
      }
    });
  return uniqueWordChars;
};

// Передаємо результат попередньої функції
// Метод масивів find повертає перший символ, який проходить перевірку індексів, тобто зустрічається вперше і більше не повторюється
// Функція повертає перший унікальний символ
function firstUniqueChar(checkText) {
  const uniqueWordChars = wordByChars(checkText);
  let uniqueChar = "";
  uniqueChar = uniqueWordChars.find(
    (letter, index, word) =>
      word.indexOf(letter) === index && word.lastIndexOf(letter) === index
  );
  return uniqueChar;
}

let textInputEl = document.querySelector("textarea");
const buttonEl = document.querySelector("button");
const answerEl = document.querySelector("p");

textInputEl.addEventListener("input", () => {
  textInputEl.value;
});

buttonEl.addEventListener("click", () => {
  const answer = firstUniqueChar(textInputEl);
  answerEl.innerHTML = answer;
});
