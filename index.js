const express = require ("express");
const routerApi = require("./routes")
const {logErrors,errorHandler, boomErrorHandler} = require("./middlewares/ErrorHandler")
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get('/',(req, res)=>{
    res.send(`This is a mock API of videogames, use it<br/>
                -  API/v1/GameVideos<br/>
                -  API/v1/Developers<br/>
                -  API/v1/Platforms<br/>
                -  API/v1/Platforms<br/>
              Comming soon integration with Postgresql  `);
});

app.get('/nueva-ruta',(req, res)=>{
    res.send('Hola soy nueva ruta');
});


app.listen(port,()=>{
    
    console.log(`Mi port: ${port}`);
})

routerApi(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);