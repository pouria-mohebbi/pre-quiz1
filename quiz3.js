const fs = require('fs');


const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

/**

 * @param {string} username 
 * @param {string} password 
 * @returns {object|string} 
 */
function login(username, password) {
    const user = data.users.find(user => user.username === username && user.password === password);
    return user ? user : "email or password incorrect.";
}

const [,, username, password] = process.argv;

console.log(login(username, password));
