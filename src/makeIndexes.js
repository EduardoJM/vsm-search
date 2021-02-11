const fs = require('fs');
const { processPost } = require('./core');

fs.readFile('./posts/data.json', {
    encoding: 'utf-8'
}, (err, data) => {
    if (err) {
        return;
    }
    const { posts } = JSON.parse(data);
    const output = posts.map((p) => processPost(p));
    fs.writeFile('./posts/indexes.json', JSON.stringify(output), (err) => {
        if (err) {
            console.log('Can\'t create indexes file: ', err);
            return;
        }
        console.log('Criado.')
    });
});
