const fs = require('fs');
const { processPost, cos } = require('./core');

const searchQuery = 'milagre';

fs.readFile('./posts/indexes.json', {
    encoding: 'utf-8'
}, (err, data) => {
    if (err) {
        return;
    }

    const posts = JSON.parse(data);

    const queryData = processPost({
        id: -1,
        text: searchQuery,
    });

    posts.forEach((post) => {
        const cossine = cos(post.indexes, queryData.indexes);
        console.log(cossine);
    });

});