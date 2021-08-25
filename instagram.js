
const express = require('express');
const u_id = require('uuid');
const multer = require('multer');
const bp = require('body-parser');
const fs = require('fs');
const { text } = require('express');
const bodyParser = require('body-parser');
const { stringify } = require('querystring');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
const upload = multer({ dest: 'uploads/' });

app.put('/users/photos',upload.single('image1'),function (req, res) {

     let tmp = req.file.originalname.split('.').pop();

    if(tmp !== 'jpg' && tmp !== 'jpeg' && tmp !== 'png' && tmp !== 'gif'){

        res.send("Error");
        
    }

    res.send("uploaded");
});



app.post('/users/register', (req,res)=>{
    let users_array = JSON.parse(fs.readFileSync('users.json'));
    users_array.push(req.body);
    fs.writeFileSync('users.json',JSON.stringify(users_array))
    res.send('ok');
});
app.get('/users/name',(req,res)=>{
    const tmp = fs.readFileSync('users.json');
    const users_array = JSON.parse(tmp);
    const users = []
    for(elem of users_array){
        users.push(elem.u_name);
    }
    res.send(users);
});
app.listen(3000,()=>{
    console.log("server listens to 3000 port");
})






    


