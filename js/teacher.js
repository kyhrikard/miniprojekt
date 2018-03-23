function drawSchedule() {
    fetch(url + '/dancecourses')
        .then((resp) => resp.json())
        .then(function (data) {
            console.log(user);
            let teacherCoursesDiv = document.getElementById('teacher-courses')
            data.forEach(element => {
                if (user.id == element.teacherid) {
                    let p = document.createElement('p');
                    let text = document.createTextNode(`
                    ${element.name}
                    /
                    No of students: ${element.noofstudents}`);
                    p.appendChild(text);
                    teacherCoursesDiv.appendChild(p);
                }
            });
        })
    fetch(url + '/myteacherclasses/' + user.id)
        .then((resp) => resp.json())
        .then(function (data) {
            console.log(data)
            let upcomingClasses = removeOldClasses(data);
            let upcomingClassesDiv = document.getElementById('upcoming-classes');
            upcomingClasses.forEach(element => {
                let heading = document.createElement('h3');
                let textHeading = document.createTextNode(`${element.name}`);
                heading.appendChild(textHeading);
                let p = document.createElement('p');
                let text = document.createTextNode(`
                ${moment(element.datetime).format("dddd, Do MMMM YYYY,")} 
                
                ${moment(element.datetime).format("HH:mm")}`);
                p.classList.add('card-text');
                p.appendChild(text);
                upcomingClassesDiv.appendChild(heading);
                upcomingClassesDiv.appendChild(p);
            })
            let passedClasses = removeFutureClasses(data);
            let passedClassesDiv = document.getElementById('passed-classes');
            passedClasses.forEach(element => {
                let p = document.createElement('p');
                let text = document.createTextNode(`
                ${moment(element.datetime).format("dddd, Do MMMM YYYY,")} 
                
                ${moment(element.datetime).format("HH:mm")} 
                /
                ${element.name}`);
                p.appendChild(text);
                passedClassesDiv.appendChild(p);
            });
        })

}

function removeOldClasses(classes) {
    let removeOld = [];
    classes.forEach(element => {
        if (element.datetime > moment().format())
            removeOld.push(element);
    });
    return removeOld;
}

function removeFutureClasses(classes) {
    let removeFuture = [];
    classes.forEach(element => {
        if (element.datetime < moment().format())
            removeFuture.push(element);
    });
    return removeFuture;
}

drawSchedule();