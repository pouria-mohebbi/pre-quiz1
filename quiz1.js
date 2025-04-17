const fs = require('fs');

const fileName = 'example.txt';
const fileContent = 'This is the data to write to the file.';

fs.writeFile(fileName, fileContent, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
        return;
    }
    console.log('Data has been successfully written to the file.');
});
