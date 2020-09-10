let persons = [{
        name: 'Satoshi',
        age: 36,
        country: 'Japan',
        hobbies: ['Waching Anime', 'Learning new things', 'Waching anime']

    },
    {
        name: 'George',
        age: 28,
        country: 'India',
        hobbies: ['Playing games', 'Some generic hobbie', 'Other cool hobby that Geroge never does']

    }
]

function show_object(data) {
    data.forEach(function (person) {
        console.log(
            `Hi my name is ${person.name}. I am ${person.age}years old. I am from ${person.country}.`
        )
        console.log('My hobbies are:')
        person.hobbies.forEach(function (hobby) {
            console.log(hobby)
        })
    })

}

show_object(persons)