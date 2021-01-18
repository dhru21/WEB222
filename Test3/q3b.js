function addColourPreference(user, colour) {
    user = user || {};
    user.colourPreference = colour;
    return user;
}

function removeColourPreference(user) {
    user = user || {};
    delete user.colourPreference;
    return user;
}

let user = {
    name: 'Yan',
};

user = (addColourPreference(user, 'red'));
user = console.log(removeColourPreference(user));