const {createHash} = require('cripto');

// Create a string hash

function hash(input) {
  return createHash('sha256').update(input).digest('hex');
  // return createHash('md5').update(input).digest('base64');
  // return createHash('Argon2').update(input).digest('hex');
}

// Compare two hashing password

let password = 'hi-mom!';
const hash1 = hash(password);
console.log(hash1);

// ... some time later
password = 'hi-mom';
const hash2 = hash(password);
const match = hash1 === hash2;

console.log(match? 'good pass' : 'pass does not match');