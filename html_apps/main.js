var text_problem = "";
var text_problem_ans = "";

function sample() {
  var obj = event.target;
  obj.style.color = "red";
  alert("あたり");
  obj.style.color = "green";
  obj.onclick = "";

  var old_problems_elm = document.getElementById('old_problems');
  old_problems_elm.innerHTML = text_problem_ans + "<br>" + old_problems_elm.innerHTML;

  new_problem();

}

function new_problem(){
  var a = Math.floor(Math.random() * 10);
  var max_b = 10 - a + 0.5;
  var b = Math.floor(Math.random() * max_b);
  text_problem = a + " + " + b + " = ";
  var ans = a + b;
  text_problem_ans = text_problem + ans;
  var elm = document.getElementById('div_question');
  elm.textContent = text_problem;
  var button_id = "button_answer_" + ans;
  var ans_button = document.getElementById(button_id);
  ans_button.onclick = sample;
}
