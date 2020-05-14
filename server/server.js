const express = require('express');
const app = express();
const port = 3010;
const bodyParser = require('body-parser')
const cors = require('cors')
const connection = require('./config');

app.use(express.static('dist'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.get('/home', (req, res) => {
    connection.query('SELECT * FROM Chicken', function (error, results) {
        if (error){
            console.error(error)
        }else
            console.log(results)
            res.send(results)
      });

});

app.get('/home/:id', (req, res) => {
    console.log('I am from the moon',req.params.id)
    // debugger
    connection.query(`SELECT * FROM Chicken WHERE item_id = ${req.params.id};`, function (error, results) {
        if (error){
            console.error(error)
        }else{
        console.log(results[0])
            res.send(results[0])
        }
      });
});

// app.post('/footer', (req, res) => {
//     connection.query(`INSERT into mando_header (item,model,category) VALUES ('${req.body.item}','${req.body.model}'${req.body.category}')`, function (error, results) {
//         if (error){
//             console.error(error)
//         }else
//             res.send(results)
//       });
// });

app.listen(port, () => console.log(`listening from port: ${port}`));