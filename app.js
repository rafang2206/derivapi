const express = require('express');
const router = require('./routes/ApiRoutes');
const cors = require('cors');

const app = express();


app.use(express.json());

app.use('/api', router);

const dominiosPermitidos = ["https://app.toptenfundingweb.com"];


const corsOptions = {
    origin: function(origin, callback){
        if(dominiosPermitidos.indexOf !== -1 ){
            callback(null, true);
        } else {
            callback(new Error('No permitido por cors'))
        }
    }
}

app.use(cors(corsOptions));


app.listen(3000, () => {
    console.log('Server is up on port 3000');
});
