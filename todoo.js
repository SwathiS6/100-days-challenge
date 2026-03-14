Moving Rainbow Stars Logic
const canvas = document.getElementById('starCanvas');
const ctx = canvas.getContext('2d');
let stars = [];

function initStars() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    for (let i = 0; i < 150; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 1,
            speed: Math.random() * 2 + 0.5,
            hue: Math.random() * 360
        });
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(s => {
        ctx.fillStyle = `hsla(${s.hue}, 100%, 70%, 0.8)`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
        s.y -= s.speed; // Move up
        s.hue += 1; // Cycle colors
        if (s.y < 0) s.y = canvas.height;
    });
    requestAnimationFrame(animate);
}

initStars(); animate();

Todo List Functionality
function addTask() {
    const input = document.getElementById('taskInput');
    if (!input.value) return;

    const li = document.createElement('li');
    li.className = "task-item";
    li.innerHTML = `
        <span class="text">${input.value}</span>
        <div>
            <button class="complete-btn" onclick="this.parentElement.previousElementSibling.style.textDecoration='line-through'">✔</button>
            <button class="delete-btn" onclick="this.parentElement.parentElement.remove()">✖</button>
        </div>`;
    document.getElementById('taskList').appendChild(li);
    input.value = "";
}
function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  // Don't add an empty task
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }
 document.getElementById("taskList").prepend(li); // Prepend to put at the top

//   Clear the input box
  input.value = "";
}
//  const task_inp document.getElementById("taskInput");
//   const task_inp document.getElementById("okBtn");
// //    const task_inp document.getElementById("taskInpu");
//   taskInput addEventListener("click" function(){
//      alert("clicked")
//      console.log(input.value);
//     const input_value=task_input_value;
// if (t=== "") {
//     alert("Please enter a task.");
//     return;
//   }
//   })