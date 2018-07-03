// Array operators: filter, map, reduce
var users = [{
    "id": 1,
    "firstName": "Cosetta",
    "lastName": "Trent",
    "email": "ctrent0@amazon.co.uk",
    "gender": "Female",
    "userAgent": "Safari/537.13 "
  }, {
    "id": 2,
    "firstName": "Marge",
    "lastName": "Sporrij",
    "email": "msporrij1@amazon.de",
    "gender": "Female",
    "userAgent": "Mozilla/5.0 "
  }, {
    "id": 3,
    "firstName": "Blake",
    "lastName": "Clemonts",
    "email": "bclemonts2@cnbc.com",
    "gender": "Male",
    "userAgent": "Mozilla/5.0 "
  }, {
    "id": 4,
    "firstName": "Caroline",
    "lastName": "Bowser",
    "email": "cbowser3@independent.co.uk",
    "gender": "Female",
    "userAgent": "Chrome/16.0.912.77 "
  }]

// Filter only males
var onlyMales = users.filter(function (user) {
    return user.gender === 'Male';
});

// Map to first names
var onlyMales = users.map(function (user) {
    return user.firstName;
});

// Reduce to get all useragents
var userAgents = users.reduce(function (userAgents, user) {
    if( !userAgents.includes(user.userAgent) ) {
        userAgents = userAgents.concat(user.userAgent);
    }
    return userAgents;
}, '');