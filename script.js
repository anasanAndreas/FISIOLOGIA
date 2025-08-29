document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submit-btn');
    submitButton.addEventListener('click', showResults);
  });
  
  function showResults() {
    const quizForm = document.getElementById('quiz-form');
    const questions = quizForm.querySelectorAll('li');
    let correctAnswers = 0;
    let incorrectAnswers = 0;
    let resultHTML = '<h2>Resultados:</h2><ul>';
  
    questions.forEach((question, index) => {
      const selectedAnswer = question.querySelector('input[type="radio"]:checked');
      if (selectedAnswer && selectedAnswer.value === 'certo') {
        correctAnswers++;
        resultHTML += `<li>Pergunta ${index + 1}: Correta</li>`;
      } else {
        incorrectAnswers++;
        resultHTML += `<li>Pergunta ${index + 1}: Incorreta</li>`;
      }
    });
  
    resultHTML += '</ul>';
    localStorage.setItem('quizResults', resultHTML);
    window.location.href = 'resultado.html'; // redireciona para a página de resultados (crie resultado.html)
  }