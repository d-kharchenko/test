const express = require('express');
const bodyParser = require('body-parser');
const ObjectID = require('mongodb').ObjectID;
const db = require('../src/db');

let app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function (req, res) {
    res.send('Hello API');
});


app.get('/products', function (req, res) {
    db.collection('products').find({}).toArray((err, products) => {
        res.send( products );
    });
});

app.get('/products/:id', function (req, res) {
    db.collection('products').findOne({ _id: ObjectID(req.params.id) }, function (err, doc) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(doc);
    })
});

app.post('/products', function (req, res) {
    let artist = {
        name: req.body.name
    };
    db.get().collection('products').insert(artist, function (err, result) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendproducts;
    })
});

app.put('/products/:id', function (req, res) {
    db.collection('products').updateOne(
        {_id: ObjectID(req.params.id)},
        {name: req.body.name},
        function (err, result) {
            if (err){
                console.log(err);
                return res.sendStatus(500);
            }
            res.sendStatus(200)
        }
    );

});

app.delete('/products/:id', function (req, res) {
    db.get().collection('products').deleteOne(
        {_id: ObjectID(req.params.id)},
        function (err, result) {
            if (err){
                console.log(err);
                return res.sendStatus(500);
            }
            res.sendStatus(200)
        }
    );
});



db.connect('mongodb://localhost:27017/products', function (err) {
    if(err){
        return console.log(err)
    }
    app.listen(3012, function () {
        console.log('API app started');
    });
});