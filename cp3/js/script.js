function welcomeAlert() {
    alert("Seja bem-vindo");
}

let currentSlide = 0;
const slides = document.querySelectorAll('.slides img');
setInterval(() => {
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.display = 'block';
}, 3000);

function validateContactForm() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    if (name === '' || phone === '' || email === '') {
        alert('Por favor, preencha todos os campos.');
        return false;
    }
    alert('Formulário enviado com sucesso!');
    return true;
}

function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === '' || password === '') {
        alert('Por favor, preencha todos os campos. ');
        return false; 
    }
    
    return true;
}

function submitQuiz() {
    const form = document.getElementById('quizForm');
    const resultDiv = document.getElementById('quizResult');
    const answers = {
        q1: 'a',
    };

    let score = 0;
    const totalQuestions = Object.keys(answers).length;

    for (let [question, answer] of Object.entries(answers)) {
        const userAnswer = form.elements[question].value;
        if (userAnswer === answer) {
            score++;
        }
    }

    resultDiv.textContent = `Você acertou ${score} de ${totalQuestions} perguntas.`;

    return false; 
}
