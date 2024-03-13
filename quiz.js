function submitQuiz() {
    const form = document.getElementById('quizForm');
    const resultsDiv = document.getElementById('results');
    const correctAnswers = ['c', 'b', 'a', 'c']; 

    let score = 0;
    let feedback = '';

    for (let i = 1; i <= correctAnswers.length; i++) {
        const selectedOption = document.querySelector(`input[name="q${i}"]:checked`);
        const explanation = getExplanation(i);

        if (selectedOption) {
            if (selectedOption.value === correctAnswers[i - 1]) {
                score++;
                feedback += `<p>Pergunta ${i}: <span class="correct">Correto!</span> <span class="explanation">${explanation}</span></p>`;
            } else {
                feedback += `<p>Pergunta ${i}: <span class="incorrect">Incorreto.</span> <span class="explanation">${explanation}</span></p>`;
            }
        }
    }

    const percentage = (score / correctAnswers.length) * 100;

    resultsDiv.innerHTML = `<h2 class="result-header">Resultados do Quiz</h2>
                             <p class="user-score">Você acertou ${score} de ${correctAnswers.length} perguntas (${percentage}%)!</p>
                             ${feedback}`;
    resultsDiv.classList.remove('hidden');
    form.classList.add('hidden');
}

function getExplanation(questionNumber) {
    switch (questionNumber) {
        case 1:
            return "Ambos os raios UVA e UVB penetram na atmosfera e desempenham um papel importante em condições como o envelhecimento prematuro da pele, lesões oculares e câncer de pele";
        case 2:
            return "Falso. Os cânceres de pele podem se desenvolver em áreas não expostas do corpo, incluindo as solas dos pés, genitais e até mesmo nas membranas mucosas.";
        case 3:
            return "Espremer espinhas pode aumentar a inflamação e o risco de hiperpigmentação.";
        case 4:
            return "O Ministério da Saúde classifica a acne de acordo com a gravidade das lesões na pele.";
        default:
            return "";
    }
}
