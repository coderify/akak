var connect = require('express'),
    serveStatic = require('serve-static');

var app = connect();

app.use(serveStatic('public', {'index': ['index.html']}));
app.listen(process.env.PORT || 3000);
