var questions = [
    { title: 'css styles',
      options: [ 'option 1', 'option 2', 'option 3', 'option 4'],
      correct: 'option 2'
    },
    { title: 'javascript ',
      options: [ 'option 1', 'option 2', 'option 3', 'option 4'],
      correct: 'option 2'
    },
    { title: 'html',
      options: [ 'option 1', 'option 2', 'option 3', 'option 4'],
      correct: 'option 2'
    },
]
var questionIndex;

function startQuiz() {
    questionIndex = 0;
    displayQuestion()

    document.getElementById('begin').style.display='none'
}

function displayQuestion() {
    document.getElementById('quiz-box').innerHTML = ""
    var question = questions[questionIndex];
    const title = document.createElement("h2")
    title.textContent = question.title
    document.getElementById('quiz-box').appendChild(title)
    for (let index = 0; index < question.options.length; index++) {
        const option = document.createElement("button")
       option.textContent = question.options[index]
       option.addEventListener("click", checkAnswer )
       document.getElementById('quiz-box').appendChild(option)
        
    }
}

function checkAnswer() {
    questionIndex ++
    displayQuestion()
    
}

function stopQuiz() {
    
}

document.getElementById("begin").addEventListener("click", startQuiz);
