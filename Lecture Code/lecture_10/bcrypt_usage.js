const bcrypt = require("bcrypt-nodejs");
const plainTextPassword = "mySuperAwesomePassword";

const hash = bcrypt.hashSync(plainTextPassword);
// This hash will change each time it's generated!
// That's one of the wonderful things about bcrypt -- even
// though the has changes, you can still compare the unhashed version
// successfully
console.log(hash);

// Load hash from your password DB.
bcrypt.compare("merlinsbeard", hash, (err, res) => {
    if (res === true) {
        console.log("merlinsbeard matches the hash");
    } else {
        console.log("merlinsbeard does not match the hash");
    }
});

bcrypt.compare("mySuperAwesomePassword", hash, (err, res) => {
    if (res === true) {
        console.log("mySuperAwesomePassword matches the hash");
    } else {
        console.log("mySuperAwesomePassword does not match the hash");
    }
});
