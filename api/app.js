const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

app.get('/', (req,res)=>{
    res.json([
        {
            "id":"1",
            "title":"Book Review : the Bear & the nightingale"
        },
        {
            
            "id":"2",
            "title":"Game review : Pokemon Brillian Diamond"
        },
        {
            
            "id":"3",
            "title":"Show Review :  Alice in borderland"
        }
    ]);
});

app.listen(8080,()=>{
    console.log(" our application is running on port 8080");
})



