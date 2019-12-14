firstQuestion = 5;
questionNum   = firstQuestion-1;
question      = [];
questions     = [];

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
    
    question=questions[questionNum];
    console.log(question);
    document.querySelector("#quiz-question").innerHTML = question.question;
    document.querySelector("label[for=ans1]").innerHTML = question.answer1;
    document.querySelector("label[for=ans2]").innerHTML = question.answer2;
    document.querySelector("label[for=ans3]").innerHTML = question.answer3;
};
