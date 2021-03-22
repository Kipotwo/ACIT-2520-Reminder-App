const database = require("../database");

const getUserByEmail = ( email, password ) => {
    let user = database.find((user)=> user.email === email );
    if (user) {
        console.log("found user")
        if ( isUserValid (user, password)) {
            console.log(user)
            return user;
        }
    } 
    return null;
};

const getUserById = (id) => {
    let user = database.find((user)=> user.id === id);
    if (user) {
        return user;
    }
    return null;
}

const isUserValid = (user,password) => {
    return user.password === password;
}

module.exports = {
    getUserByEmail,
    getUserById
};