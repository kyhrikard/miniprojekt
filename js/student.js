

function logOut() {
    window.location.href = "./index.html";
}

function setUserName(username) {
    document.getElementById("user-name").innerHTML = username;
}

function drawPage(){
    setUserName(`${student.firstname} ${student.lastname}`);
}

drawPage();

