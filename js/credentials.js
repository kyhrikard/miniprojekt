function readFromLocalStorage() {
    let localData = localStorage.getItem('user');
    let locaDataParsed = JSON.parse(localData);
    user = locaDataParsed;
}

function setUserName() {
    document.getElementById("user-name").innerHTML = `${user.firstname} ${user.lastname}`;
}

function drawJumbotron(){
    let jumbotron = document.getElementById('jumbotron');
    if (user.role === 'student'){
        jumbotron.innerHTML = `<h2>Welcome dance student, ${user.firstname}</h2>`;
    }
    else {
        jumbotron.innerHTML = `<h2>Welcome dance teacher, ${user.firstname}</h2>`;
    }
}

readFromLocalStorage()
setUserName();
drawJumbotron();