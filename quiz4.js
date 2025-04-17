
import randomWords from 'random-words';


const words = randomWords({ exactly: 5 });


words.forEach(word => console.log(word.toUpperCase()));
