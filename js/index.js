const url = 'https://bailamos-web-api.herokuapp.com';

function validateForm(form) {
    let username = form.usrname.value;
    if (username !== '') {
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
                if (res[0].role === 'student') {
                    window.location.href = "./student.html";
                }
                else if (res[0].role === 'teacher') {
                    window.location.href = "./teacher.html";
                }
                localStorage.setItem('user', JSON.stringify(res[0]));
            })
            .catch(function (err) {
                console.log(err);
            });;
    }
    return false;
}

function logOut() {
    window.location.href = "./index.html";
}