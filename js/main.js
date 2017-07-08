var button = document.getElementById('button');
var quizes = document.getElementById('quizes');
var form = document.getElementById('quiz_form');
var result = document.getElementById('result');
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
  var correctAnswers_num = 0;
  for (var i = 0; i < questions.length; i++) {
    var userAnswer = (document.querySelector('input[name=quiz_'+i+']:checked') || {}).value;
    var correctAnswer = questions[i].correctAnswer;
    if (userAnswer == correctAnswer) {
      correctAnswers_num++;
    }
  }
  // 結果表示
  var resultText = questions.length + "問中" + correctAnswers_num + "問正解";
  result.innerHTML = resultText;
});
