const fs = require('fs');

const fileName = 'example.txt';

fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    console.log('File content:', data);
});
