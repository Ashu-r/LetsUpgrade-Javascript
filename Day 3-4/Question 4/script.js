let persons = [{
        name: 'Light',
        age: 18,
        country: 'Japan',
        hobbies: ['Waching Anime', 'Learning new things', 'Waching anime']

    },
    {
        name: 'Sundar',
        age: 40,
        country: 'India',
        hobbies: ['Playing games', 'Some generic hobbie', 'Other cool hobby that Geroge never does']

    }
]


function show_object(person) {
    console.log(
        `Hi my name is ${person.name}. I am ${person.age}years old. I am from ${person.country}.`
    )
    console.log('My hobbies are:')
    person.hobbies.forEach(function (hobby) {
        console.log(hobby)
    })


}

function less_than_30(data) {
    data.forEach(function (person) {
        if (person.age < 30) {
            show_object(person)
        }
    })
}

function indian(data) {
    data.forEach(function (person) {
        if (person.country === 'India') {
            show_object(person)
        }
    })
}
console.log("Calling less_than_30")
less_than_30(persons)

console.log("Calling indian")
indian(persons)