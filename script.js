const question = [
    {
        question: "which is largest animal in the world?",
        ans:[
               {Text:"Shark", correct:false},
               { Text:"Blue whale", correct:true},
               { Text:"Element", correct:false},
               { Text:"Giraffe", correct:false},
              
        ]
    },
    {
        question: "which is smallest Country in the world?",
        ans:[
               { Text:"Vatican City", correct:true},
               { Text:"BHutan", correct:false},
               { Text:"Nepal", correct:false},
               { Text:"Shri Lanka", correct:false},
              
        ] 
    },
    {
        question: "which is largest desert  in the world?",
        ans:[
               { Text:"Kalahari", correct:false},
               { Text:"Gobi", correct:false},
               { Text:"Sahara", correct:false},
               { Text:"Antarctica", correct:true},
              
        ]
    },
    {
        question: "which is largest continent in the world?",
        ans:[
               { Text:"Asia", correct:false},
               { Text:"Australia", correct:true},
               { Text:"Arctic", correct:false},
               { Text:"Africa", correct:false},
              
        ]
    }
];

const questionElement = document.getElementById("question");
const ansbtn = document.getElementById("ans-btn");
const nextbtn = document.getElementById("next-btn");
let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextbtn.innerHTML = "Next";
    showQuestion();
};

function showQuestion(){
    resetState();
    let currentQustion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " +currentQustion.question;


    currentQustion.ans.forEach(ans =>{
        const button = document.createElement("button");
        button.innerHTML = ans.Text;
        button.classList.add("btn");
        ansbtn.appendChild(button);
        if(ans.correct){
            button.dataset.correct = ans.correct;
        };
        button.addEventListener("click", selectAns);
    });
};
function resetState(){
nextbtn.style.display = "none";
while(ansbtn.firstChild){
    ansbtn.removeChild(ansbtn.firstChild);
};
};
function selectAns(e){
    const selectedbtn = e.target;
    const iscorrect = selectedbtn.dataset.correct ==="true";
    if(iscorrect){
        selectedbtn.classList.add("correct");
        score++;
    }
    else{
        selectedbtn.classList.add("incorrect");
    }
    Array.from(ansbtn.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        };
        button.disabled = true;
    });
    nextbtn.style.display = "block";
};
function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${question.length}!`;
    nextbtn.innerHTML = "Play Again";
    nextbtn.style.display = "block";
}
function handalNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < question.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextbtn.addEventListener("click", () =>{
    if(currentQuestionIndex < question.length){
        handalNextButton();
    }
    else{

        startQuiz();
    }
})

startQuiz();