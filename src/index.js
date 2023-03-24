document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

const taskdescription = document.querySelector("#task-descripton");

checkbox.addEventListener("click", taskdescriptionClick, false);

function taskdescriptionClick(event) {
  let warn = "preventDefault() won't let you check this!<br>";
  document.getElementById("submittasks").innerHTML += warn;
  // event.preventDefault();
}