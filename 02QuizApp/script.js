const quizData=[
    {
        question:'Select PC manufacturing company',
        a:'Dell',
        b:'Toyota',
        c:'Amazon',
        d:'Nike',
        correct:'a'
    },
    {
        question:'What is the most used programming language in 2020?',
        a:'Java',
        b:'Python',
        c:'JavaScript',
        d:'C#',
        correct:'a'
    },
    {
        question:'Who is the current president of Us',
        a:'Obama',
        b:'Trump',
        c:'Biden',
        d:'Bush Jr',
        correct:'c'
    },
    {
        question:'What does JSON stand for?',
        a:'JASON Omega Nest',
        b:'JavaScript Object Notation',
        c:'Java Object Nesting',
        d:'Joomla ON',
        correct:'b'
    },
    {
        question:'What year was JavaScript launched?',
        a:'1990',
        b:'2000',
        c:'1994',
        d:'none of the above',
        correct:'d'
    }
];

const questionEl=document.getElementById('question');
const a_text=document.getElementById('a_text');
const b_text=document.getElementById('b_text');
const c_text=document.getElementById('c_text');
const d_text=document.getElementById('d_text');
const submitBtn=document.getElementById("submit");
const answerEls=document.querySelectorAll('.answer');

let currentQuiz=0;
let score=0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData=quizData[currentQuiz];

    questionEl.innerText=currentQuizData.question;
    a_text.innerText=currentQuizData.a;
    b_text.innerText=currentQuizData.b;
    c_text.innerText=currentQuizData.c;
    d_text.innerText=currentQuizData.d;

}

function getSelected(){
    let answer=undefined;
    console.log('heelo');
    
    answerEls.forEach((answerEl)=>{
        if(answerEl.checked){
            answer=answerEl.id;
        }
    })
    console.log('ans',answer);
    return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEl)=>{
        answerEl.checked=false;
    })
}

submitBtn.addEventListener("click",()=>{
   
   const answer= getSelected();

    if(answer){
        if(answer===quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz<quizData.length){
            loadQuiz();
        }else{
            quiz.innerHTML=`
                <h2>You answerd ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>`
        }
    }else{
        alert("NO answers selected")
    }
    
})


