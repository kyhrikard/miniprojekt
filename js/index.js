const url = 'http://localhost:3000';

function validateForm(form) {
    let username = form.usrname.value;

    if (username !== ''){
        fetch(url + "/login", {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                username: username
            })
        })
            .then((resp) => resp.json())
            .then(function (res) {
                console.log(res);
            });
    }



    if (username === 'student') {
        window.location.href = "./student.html";
    }
    else if (username === 'teacher') {
        window.location.href = "./teacher.html";
    }
    return false;
}

