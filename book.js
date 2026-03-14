function addBook() {

    let title = document.getElementById("titleInput").value;
    let author = document.getElementById("authorInput").value;

    if (title === "" || author === "") {
        alert("Please enter both Title and Author");
        return;
    }

    let bookList = document.getElementById("bookList");

    let card = document.createElement("div");
    card.className = "book-card";

    let content = document.createElement("p");
    content.innerHTML = "<strong>" + title + "</strong><br>by " + author;

    let status = document.createElement("span");
    status.className = "status";
    status.innerText = "Unread";

    let toggleBtn = document.createElement("button");
    toggleBtn.innerText = "Read";
    toggleBtn.className = "toggle-btn";
    toggleBtn.onclick = function() {
        if (status.innerText === "Unread") {
            status.innerText = "Read";
            status.classList.add("read");
        } else {
            status.innerText = "Unread";
            status.classList.remove("read");
        }
    };

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function() {
        card.remove();
    };

    let actionRow = document.createElement("div");
    actionRow.className = "action-row";

    actionRow.appendChild(status);
    actionRow.appendChild(toggleBtn);
    actionRow.appendChild(deleteBtn);

    card.appendChild(content);
    card.appendChild(actionRow);

    bookList.appendChild(card);

    document.getElementById("titleInput").value = "";
    document.getElementById("authorInput").value = "";
}