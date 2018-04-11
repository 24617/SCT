const button = document.getElementById("startbutton");

function Startquiz() {
button.parentNode.removeChild(button);
const diviv = document.getElementById('diviv');
const questionBox = document.getElementById('questionBox');
const answerBox = document.getElementById('answerBox');
let counter = 0;
let wrong = 0;
let good = 0;

let div = document.createElement('div');
diviv.appendChild(div);
div.setAttribute("id", "myQuestion");
const myQuestion = document.getElementById('myQuestion');
makeQuestion();






function makeQuestion() {

  myQuestion.innerHTML = quiz[counter].question;
  answerBox.innerHTML = '';

    for (let i = 0; i < quiz[0].answers.length; i++) {
      let li = document.createElement('li');
      li.innerHTML = quiz[counter].answers[i].answer;
      answerBox.appendChild(li);
      li.feedback = quiz[0].answers[i].feedback;
      li.addEventListener('click', evaluate, true);
      li.setAttribute('id', "test");
}




    function evaluate(evt) {
      counter++;
      for (let o = 0; o < quiz[0].answers.length; o++) {
        li = document.getElementById('test');
        li.removeEventListener('click', evaluate, true);
        li.setAttribute("id", "disabled");
}
      if (evt.target.feedback == true){
        evt.target.style.backgroundColor = '#32CD32';
        good = good + 1;
      }

      if (evt.target.feedback == false){
        evt.target.style.backgroundColor = '#F71717';
        wrong = wrong + 1;
      }
}



  setTimeout(function() {
  if (counter<quiz.length) {
    makeQuestion();
  } else {
    finishQuiz();
  } }, (3000));
}



function finishQuiz() {

  let h1 =  document.createElement('h1');
  if (good == 1) {
    h1.innerHTML = "Je had " + good + " vraag goed. ";
  } else {
  h1.innerHTML = "Je had " + good + " vragen goed.";
  }
  h1.setAttribute('id', 'end');
  diviv.appendChild(h1);

  let h2 =  document.createElement('h1');
  if (wrong == 1) {
    h2.innerHTML = "Je had " + wrong + " vraag fout.";
  } else {
  h2.innerHTML = "Je had " + wrong + " vragen fout.";
  }
  h2.setAttribute('id', 'end');
  diviv.appendChild(h2);

  myQuestion.parentNode.removeChild(myQuestion);
  answerBox.parentNode.removeChild(answerBox);



}
}
