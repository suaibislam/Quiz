const questions =[
    {
        question:"What is the most beautiful in the world?",
        answers : [
            {text : "Gigabyte  " ,correct:false},
            {text : "Anonna Islam  " ,correct:true},
            {text : "Byte  " ,correct:false},
            {text : "Terabyte  " ,correct:false},
        ]
    },
    {
        question:"What is Anonna full name ?",
        answers : [
            {text : "Gigabyte  " ,correct:false},
            {text : "Bit " ,correct:false},
            {text : "Israt Zahan Anonna " ,correct:true},
            {text : "Terabyte  " ,correct:false},
        ]
    },
    {
        question:"What is Anonna Husband name ?",
        answers : [
            {text : "Gigabyte  " ,correct:false},
            {text : "Bit " ,correct:false},
            {text : "Byte  " ,correct:false},
            {text : "Md.Suaib  " ,correct:true},
        ]
    },
    {
        question:"What is the best quality in Anonna?",
        answers : [
            {text : "Gigabyte  " ,correct:false},
            {text : "Bit " ,correct:false},
            {text : "Nispap mind" ,correct:true},
            {text : "Terabyte  " ,correct:false},
        ]
    },
]

const questionElement = document.getElementById("question-type");
const answerButton   = document.getElementById("option-type");
const nextBtn  = document.getElementById("next-btn");

let score = 0;
let currentQuestionIndex = 0;

function startQuiz() {
     currentQuestionIndex =0;
     score = 0;
     nextBtn.innerHTML = "Next";
     showQuestion();
    
}
startQuiz();
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;
     
    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
       
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer)

    })
}

function resetState() {
    nextBtn.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e) {
    const seletedBtn = e.target;
    // console.log(seletedBtn);
    const isCorrect = seletedBtn.dataset.correct === "true";
    if(isCorrect){
        seletedBtn.classList.add("correct");
        score ++
    }else{
        seletedBtn.classList.add("incorrect");
    }

    Array.from(answerButton.children).forEach(button=>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true ;
    })
    nextBtn.style.display="block"
}


function handleNextButton() {
    currentQuestionIndex ++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

function showScore() {
    resetState();
    questionElement.innerHTML = `your score ${score} out of ${questions.length}`;
    nextBtn.innerHTML = "play Again";
    nextBtn.style.display = "block";
}

nextBtn.addEventListener('click',()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
