let users = [{
    username: 'lisa',
    role: 'student',
    firstname: 'Lisa',
    lastname: 'LaFlamme',
    age: 21,
    classes: ['street', 'dancehall', 'balett']
},
{
    username: 'bart',
    role: 'student',
    firstname: 'Bart',
    lastname: 'LaFlamez',
    age: 41,
    classes: ['street', 'dancehall', 'balett']
},
{
    username: 'homer',
    role: 'student',
    firstname: 'Homer',
    lastname: 'Rodriques',
    age: 32,
    classes: ['street', 'dancehall', 'balett']
},
{
    username: 'adrienne',
    role: 'teacher',
    firstname: 'Adrienne',
    lastname: 'Picard',
    age: 28,
    classes: ['street', 'dancehall', 'balett']
},
{
    username: 'john',
    role: 'teacher',
    firstname: 'John',
    lastname: 'Travolta',
    age: 55,
    classes: ['street', 'dancehall', 'balett']
},
{
    username: 'jennifer',
    role: 'teacher',
    firstname: 'Jennifer',
    lastname: 'Lopez',
    age: 44,
    classes: ['street', 'dancehall', 'balett']
}
];

let classes = [{
    name: 'street',
    dates: ['2018-03-16', '2018-03-23', '2018-03-30'],
    start: '18:00',
    length: 2,
},
{
    name: 'dancehall',
    dates: ['2018-03-17', '2018-03-24', '2018-03-31'],
    start: '18:00',
    length: 2,
},
{
    name: 'ballet',
    dates: ['2018-03-18', '2018-03-25', '2018-04-01'],
    start: '18:00',
    length: 2,
}];

let database = {
    users: users,
    classes: classes
}

module.exports = database;


