var timerId;
var timer = document.getElementById("clock")
let timerInterval;

var questions = [
    { title: 'What is considered to be the most popular programming language in the world?',
      options: [ 'JavaScript', 'HTML', 'Swift', 'Ruby'],
      correct: 'JavaScript'
    },
    { title: 'In CSS and HTML colors are displayed by combining these three shades of light',
      options: [ 'Red, Green, and Blue', 'Red, Beige, and Purple', 'Blue, Black, and Pink', 'Red, Brown, and Yellow'],
      correct: 'Red, Green, and Blue'
    },
    { title: 'What tag is used to define an unordered list that is bulleted?',
      options: [ '<s>', '<li>', '<ul>', '<a>'],
      correct: '<ul>'
    },
    { title: 'In JavaScript, what is a block of code called that is used to perform a specific task?',
      options: [ 'Function', 'Declaration', 'Variable', 'String'],
      correct: 'Function'
    },
    { title: 'In JavaScript, what element is used to store multiple values in a single variable?',
      options: [ 'Strings', 'Variables', 'Functions', 'Arrays'],
      correct: 'Arrays'
    },
]
var questionIndex;

function startQuiz() {
    questionIndex = 0;
    displayQuestion()

    startTimer()

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

startTimer = () => {
    //this will clear am existing timer in case of restart
    clearInterval(timerInterval);

    //this will clear the variables 
    let second = 0,
        minute = 0,
        hour = 0

    timerInterval = setInterval(function () {
        timer.innerHTML = 
        (hour ? hour + ':' : '') + 
        (minute < 10 ? '0' + minute : minute) +
        ':' + 
        (second <10 ? '0' + second : second);

        
    })
}

function checkAnswer() {
    questionIndex ++
    displayQuestion()
    
}

function stopQuiz() {
    
}

document.getElementById("begin").addEventListener("click", startQuiz);
