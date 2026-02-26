const words = ['кот', 'собака', 'дом', 'слон', 'мышь', 'крокодил'];
const result = {};
for (let i = 0; i < words.length; i++) {
    const word = words[i];           
    const length = word.length;      
    if (result[length] === undefined) {
        result[length] = [];
    }
    result[length].push(word);
}
console.log(result);
