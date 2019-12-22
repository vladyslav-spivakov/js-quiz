const firstQuestion = 1;
let questionNum   = firstQuestion-1;
let question      = [];
let questions     = [];
let questionMax   = 4;
let correctAnswers= 0;
let quizStatus = "";

document.addEventListener('DOMContentLoaded',init());
function init(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'questions.json', false);
    xhr.send();
    if (xhr.status != 200) {
    console.log( xhr.status + ': ' + xhr.statusText ); 
    } else { 
    questions = JSON.parse(xhr.responseText);
    console.log(questions);
    }
    questionMax = questions.length-1;
    buildQuestion();
    function buildQuestion() {
        question=questions[questionNum];
        console.log(question);
        document.querySelector("#quiz-question").innerHTML = question.question;
        document.querySelector("label[for=ans1]").innerHTML = question.answer1;
        document.querySelector("label[for=ans2]").innerHTML = question.answer2;
        document.querySelector("label[for=ans3]").innerHTML = question.answer3;
    }
    document.querySelector(".quiz-answers input[id=ans1]").addEventListener('click', ()=> {
        questions[questionNum].status = 1;
        if (questionNum !== questionMax) {
            questionNum++;
            buildQuestion();
        } else if (quizStatus !== "end") {
            buildResult();
        }
    });
    
    document.querySelector(".quiz-answers input[id=ans2]").addEventListener('click', ()=> {
        questions[questionNum].status = 2;
        if (questionNum !== questionMax) {
            questionNum++;
            buildQuestion();
        } else if (quizStatus !== "end") {
            buildResult();
        }
    });
    document.querySelector(".quiz-answers input[id=ans3]").addEventListener('click', ()=> {
        questions[questionNum].status = 3;
        if (questionNum !== questionMax) {
            questionNum++;
            buildQuestion();
        } else if (quizStatus !== "end") {
            buildResult();
        }
    });
    function buildResult() {
        quizStatus="end";
        for (let i = 0; i<=questionMax; i++) {
            if (questions[i].status === questions[i].answer) {
                correctAnswers++;
            }
        }
        document.querySelector("label[for=ans1]").innerHTML = "";
        document.querySelector("label[for=ans2]").innerHTML = "";
        document.querySelector("label[for=ans3]").innerHTML = "";
        document.querySelector("#quiz-question").innerHTML = "Ви правильно відповили на <span class='greenCorrect'>" + correctAnswers + "</span> з <span class='answersNum'>" + (questionMax+1) + "</span> питань!";
    }
};
