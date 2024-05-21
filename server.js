const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

const articleInfo = {
    "learn-react": {
        comments: [],
    },

    "learn-node": {
        comments: [],
    },

    "my-thoughts-on-learning-react": {
        comments: [],
    },
}

//initialize middleware
//we use to have to have to install body parser but now it is a built in middleware
//function of express
app.use(express.json({extended: false}));

app.post('/api/articles/:name/add-comments', (req, res) => {
    const {username, text } = req.body;
    const articleName = req.params.name;
    articleInfo[articleName].comments.push({username, text});
    res.status(200).send(articleInfo[articleName]);
});


//just test route for now
app.get('/', (req, res) => res.send("Hello, World!"));
app.post('/', (req, res) => res.send(`Hello, ${req.body.name}`));
app.get('/hello/:name', (req, res) => res.send(`Hello, ${req.params.name}`));

app.listen(8000, () => console.log(`srver started at port ${PORT}`));