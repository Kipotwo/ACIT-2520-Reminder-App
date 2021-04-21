let Database = [
    {
        reminders: [{id: 1, title: "abc", description: "abcabc", completed: false},
                    {id: 2, title: "def", description: "defdef", completed: true}
                    ],
        email: "cindy@email.com",
        password: "c",
        id: 1,
        name: "cindy",
        friends: ["alex", "test"]
    },
    {
        reminders: [],
        email: "alex@email.com",
        password: "a",
        id: 2,
        name: "alex",
        friends: [2]
    },
    {
        reminders:[{id: 1, title: "12323", description: "abcabc gjkglsja  dakflsk dfa f s", completed: false},
            {id: 2, title: "testestestetst12312", description: "defdef test test test 123 ", completed: true},
            {id: 2, title: "ttet 21323", description: "defdef test test test 123 ", completed: false},
            {id: 2, title: "testes213 4 12 ", description: "defdef la re  a r t a123est 123 ", completed: true},
            {id: 2, title: "testeasd f ds ad 12", description: "defdtest 2 31 3 4st 123 ", completed: false}
            ],
        email: "email@email.com",
        password:"b",
        id: 3,
        name: " test ",
        friends: [3, 1]
    } 
]

module.exports = Database;