document.addEventListener("DOMContentLoaded", function () {
    let savedpassword = JSON.parse(localStorage.getItem("savedpasswords")) || [];
    let passwordContainer = document.getElementById("mypassword");
    passwordContainer.innerHTML = "";
    savedpassword.forEach((entry) => {
        let item = document.createElement("span");
        item.className = "list-group-item";
        
        // Apply styles properly
        item.style.cssText = `
            display: block;
            margin: 2vh auto;
            width: 80%;
            max-width: 370px;
            background-color: rgb(255, 255, 255);
            padding: 10px;
            border-radius: 5px;
            border: 1px solid #ccc;
            white-space: normal;
            word-break: break-word;
            overflow: hidden;
            text-overflow: ellipsis;
        `;

        item.innerHTML = ` Password: <span style="font-weight: bold; font-size:1.3rem;"> ${entry.password} </span>  generated on: ${entry.timestamp}`;
        passwordContainer.appendChild(item);
    });
});