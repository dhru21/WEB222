function addColourPreference(user, colour) {
    user = user || {};
    user.colourPreference = colour;
    return user;
}

let user = {
    name: 'Yan',
};

user = console.log(addColourPreference(user, 'red'));
