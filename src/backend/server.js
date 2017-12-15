import express from 'express';
import mongodb from 'mongodb';
import bodyParser from 'body-parser'


const app = express();
app.use(bodyParser.json());
const dbUrl = 'mongodb://localhost/database';

function validate(data) {
    let errors = {};
    if (data.username === '') errors.username = "Введіть ім'я";
    if (data.email === '') errors.email = "Введіть email";
    if (data.text === '') errors.text = "Введіть повідомлення";
    const isValid = Object.keys(errors).length === 0;
    return { errors, isValid }
}

mongodb.MongoClient.connect(dbUrl, (err, db) =>{

    app.get('/api/products', (req, res) => {
        db.collection('products').find({}).toArray((err, products) => {
            res.json({ products });

        });
    });
    app.post('/api/callback', (req, res) => {
        const {errors, isValid} = validate(req.body);
        if(isValid){
            const {username, email, subject, text} = req.body;
            db.collection('callback').insert({username, email, subject, text}, (err, result) =>{
                if(err){
                    res.status(500).json({errors: {global:"Щось не так"}})
                }else {
                    res.json({callback: result.ops[0]})
                }
            })
        }else {
            res.status(400).json({errors})
        }
    });

    app.get('/api/products/:_id', (req, res) => {
        db.collection('products').findOne({ _id: new mongodb.ObjectId(req.params._id) }, (err, product) => {
            res.json({ product });
        })
    });
    app.use((req, res) =>{
        res.status(404).json({
            errors: {
                global: "Помилка"
            }
        })
    });
    app.listen(8080, () => console.log('Server is running on localhost:8080'));
});