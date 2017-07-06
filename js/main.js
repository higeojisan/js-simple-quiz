var button = document.getElementById('button');
var quizes = document.getElementById('quizes');
var form = document.getElementById('quiz_form');
var questions = [
  {
    question: "What is 10/2?",
    answers: {
      a: '3',
      b: '5',
      c: '115'
    },
    correctAnswer: 'b'
  },
  {
    question: "What is 10/2?",
    answers: {
      a: '3',
      b: '5',
      c: '115'
    },
    correctAnswer: 'b'
  }
];

function showquiz() {
  var outputs = "";
  for (var i = 0; i < questions.length; i++) {
    var output = "<li><p>" + questions[i].question + "</p>";
    for (letter in questions[i].answers) {
        output += '<input type="radio" name="quiz_' + i + '" value="' + letter + '">' + letter + ": " + questions[i].answers[letter];
    }
    output += "</li>";
    outputs += output;
  }
  quizes.innerHTML = outputs;
}

showquiz();

button.addEventListener('click', function() {
  // 答え合わせ
  // 答えの取得
  for (var i = 0; i < questions.length; i++) {
    var userAnswer = (document.querySelector('input[name=quiz_'+i+']:checked') || {}).value;
    console.log(userAnswer);
  }
});
