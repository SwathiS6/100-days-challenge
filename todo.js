const container = document.querySelector(".hearts-container");

// Create Galaxy Hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    const colors = ["#ff4d6d", "#ff85a1", "#ff99c8", "#c77dff", "#7b2cbf"];
    heart.style.color = colors[Math.floor(Math.random() * colors.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 40 + 20) + "px";
    heart.style.animationDuration = (Math.random() * 6 + 6) + "s";

    container.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 12000);
}

setInterval(createHeart, 250);

// Mouse Parallax Effect
document.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 50;
    const y = (window.innerHeight / 2 - e.clientY) / 50;
    container.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

// Todo Functions
function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value;

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `
        ${taskText}
        <div>
            <button onclick="completeTask(this)">✔</button>
            <button onclick="deleteTask(this)">❌</button>
        </div>
    `;

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}

function completeTask(button) {
    button.parentElement.parentElement.classList.toggle("completed");
}

function deleteTask(button) {
    button.parentElement.parentElement.remove();
}