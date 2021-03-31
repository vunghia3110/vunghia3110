const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");
const answersIndicatorContainer = document.querySelector(".answers-indicator");

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];

//push the question into available question Array
function setAvailableQuestions(){
    const totalQuestion = quiz.length;
    for(let i = 0;i<totalQuestion;i++){
        availableQuestions.push(quiz[i])
    }
}

//set question number and question options
function getNewQuestion(){
    //set question number
    questionNumber.innerHTML = 'Question ' + (questionCounter + 1) + " of " + quiz.length;
    //set question text
    //get random question
    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.q; 
    //get the positon of 'questionIndex' from the availableQuestions Array;
    const index1 = availableQuestions.indexOf(questionIndex);
    //remove the 'questionIndex' from the availableQuestions Array; for not repeating question
    availableQuestions.splice(index1,1);

    //set options
    //get the length of options
    const optionLen = currentQuestion.options.length;
    // push options into availableOptions Array
    for(let i=0;i<optionLen;i++){
        availableOptions.push(i);
    }

    let animationDelay = 0.15;
    //create options in HTML
    for(let i=0; i<optionLen; i++){
        //random option
        const optonIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];
        //get the 'optonIndex' from the availableOptions
        const index2 = availableOptions.indexOf(optonIndex);
        //remove the 'optionIndex' from the avaiableOptions, for nor repaeting the options
        availableOptions.splice(index2,1);
        const option = document.createElement("div");
        option.innerHTML = currentQuestion.options[optonIndex];
        option.id = optonIndex;
        option.style.animationDelay = animationDelay + 's';
        animationDelay = animationDelay + 0.15;
        option.className = "option";
        optionContainer.appendChild(option);
        option.setAttribute("onclick", "getResult(this)");
    }
    questionCounter++;
}

//get the result of current attempt question
function getResult(element){
    const id = parseInt(element.id);
    //get the answer by comparing the id of clicked option 
    if(id=== currentQuestion.answer){
        console.log("answer is correct");
        element.classList.add("correct");
        updateAnswerIndicator("correct");
    }
    else{
        console.log("answer is wrong");
        element.classList.add("wrong");
        updateAnswerIndicator("wrong");
    }
    const optionLen = optionContainer.children.length;
    for(let i=0;i<optionLen;i++){
        if(parseInt(optionContainer.children[i].id) === currentQuestion.answer){
            optionContainer.children[i].classList.add("correct");
        }
    }
    unclickableOptions();
}

function unclickableOptions(){
    const optionLen = optionContainer.children[i].length;
    for(let i=0; i<optionLen;i++){
        optionContainer.children[i].classList.add("already-answered");
    }
}

function answersIndicator(){
    const totalQUestion = quiz.length;
    for(let i=0;i<totalQUestion;i++){
        const indicator = document.createElement("div");
        answersIndicatorContainer.appendChild(indicator);
        
    }
}

function updateAnswerIndicator(markType){
    answersIndicatorContainer.children[questionCounter-1].classList.add(markType);

}

function next(){
    if (questionCounter === quiz.length){
        console.log("quiz over");
    }
    else{
        getNewQuestion();
    }
}
window.onload = function(){
    //first set all questions in availableQuestion Array
    setAvailableQuestions();
    //second we will call getNewQuestion(); function
    getNewQuestion();
    //to create indicators of answers
    answersIndicator();
}

