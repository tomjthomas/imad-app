var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
articles={
    "article-one":{
    title:"Article One",
    heading:"Article One",
    date:"26th January",
    content:`THIS IS THE CONTENT. I AM NOT CREATIVE ENOGUH TO MAKE ACTUAL CONTENT.THIS IS THE CONTENT. I AM NOT CREATIVE ENOGUH TO MAKE         ACTUAL CONTENT.THIS IS THE CONTENT. I AM NOT CREATIVE ENOGUH TO MAKE ACTUAL CONTENT.

             MORE NON-CREATIVE STUFF.MORE NON-CREATIVE STUFF.MORE NON-CREATIVE STUFF.MORE NON-CREATIVE STUFF.

            AVADA KEDAVRA`
    },
    "article-two":{
        title:"Article Two",
        heading:"Article Two",
        date:"14th February",
        content:"2nd Article"
    },
    "article-three":{
        title:"Article Three",
        heading:"Article Three",
        date:"14th February",
        content:"3rd Article"
    }
}
app.get('/:articleName', function (req, res) {
  var articleName=req.params.articleName;
  res.send(createTemplate(articles[article-two]));
});

function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;

    var ArticleTemplate=
    `<html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width-device-width, initial-scale-1">
            <link href="/ui/style.css" rel="stylesheet" />
        </head>    
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>`;
    return ArticleTemplate
}
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
