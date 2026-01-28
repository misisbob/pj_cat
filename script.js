function calculateResult() {
    const nameInput = document.getElementById("userName");
    const name = nameInput.value.trim() || "Тайный котик";

    const form = document.getElementById("quizForm");
    const scores = { a: 0, b: 0, c: 0, d: 0 };

    for (let i = 1; i <= 9; i++) {
        const selected = form.querySelector(`input[name="q${i}"]:checked`);
        if (selected) {
            scores[selected.value]++;
        }
    }

    const maxScore = Math.max(scores.a, scores.b, scores.c, scores.d);

    const winners = [];
    if (scores.a === maxScore) winners.push("a");
    if (scores.b === maxScore) winners.push("b");
    if (scores.c === maxScore) winners.push("c");
    if (scores.d === maxScore) winners.push("d");

    const chosenType = winners[Math.floor(Math.random() * winners.length)];

    let description = "";
    if (chosenType === "a") {
        description = "Спокойный персидский кот<br>Обожаешь уют, мягкие пледы и долгие дневные сны";
    } else if (chosenType === "b") {
        description = "Энергичный бенгальский кот<br>Постоянно в движении, любишь прыгать и исследовать всё вокруг";
    } else if (chosenType === "c") {
        description = "Разговорчивый сиамский кот<br>Очень общительный, любишь быть в центре внимания и громко выражать эмоции";
    } else {
        description = "Независимый сибирский кот<br>Сильный, свободолюбивый, немного загадочный и самодостаточный";
    }

    document.getElementById("result").innerHTML = `
        <strong>${name}, ты — ${description}</strong>
    `;
}
