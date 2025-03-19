function copypassword() {
    let copyText = document.getElementById("password-container").textContent;
    navigator.clipboard.writeText(copyText)
        .then(() => {
            Swal.fire({
                title: 'Password Copied!',
                icon: 'success',
                position: 'top-end',
                showConfirmButton: false,
                timer: 1500,
                toast: true,
            });
        })
        .catch(() => {
            Swal.fire({
                position: 'top-end',
                showConfirmButton: false,
                title: 'Failed to copy password',
                icon: 'error',
                timer: 1500,
                toast: true,
            });     
        });
        
        //saving password as cache 
       const today = new Date();
    const currenttime = today.toLocaleString('en-US', { month:'long', weekday:'long', year:'numeric', hour: 'numeric', minute: 'numeric', hour12: true });
    const password = copyText;
    const entry = { 
        password:password,
         timestamp:currenttime
         };
         let savedpasswords = JSON.parse(localStorage.getItem("savedpasswords")) || [];
         savedpasswords.push(entry);
            localStorage.setItem("savedpasswords", JSON.stringify(savedpasswords));

            //function for displaying saved passwords and timestamp 
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
}