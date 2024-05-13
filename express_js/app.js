// const express = require ("express")
// const app = express ();

app.get ("/", (req, res) =>{
    res.send("marvie is a girl");
});
const port = 3030;
app.listen(port, ()=>{
    console.log (`server is running on http:localhost:${port}`);
});


// const express = require("express");
// const app = express();
// app.get( "/", (req,res) =>{
//     res.send( "app is working well")
// })

// app.post("/create", (req, res) => {
//     // console.log(req.body);
//     console.log(req.headers)
//     // console.log(req.params);
//     res.send(req.headers);
//   });

// const port = 4040;
// app.listen(port, () =>{
//     console.log(`server is runing on http:localhost:${port}`);
// });


// how to create a server using GET verb
// const data = require("./data.json");
// const express = require("express");
// const app = express();

// app.get ("/", (req,res) =>{
//     res.send(data);
// });

// const port = 7070;

// app.listen (port, () =>{
//     console.log(`server is running on http://localhost:${port}`);
// });

// how to create a server using get verb
// const express = require("express");
// const app = express();
// const object = require("./object.js")
// app.get ("./", (req,res) =>{
//     res.send(object);
// });
// const port = 4444;
// app.listen(port, () => {
//     console.log (`server is running on http://localhost:${port}`);
// })

// POST VERB 
// const express = require("express");
// const app = express();
// app.get ("/", (req,res) =>{
//     res.send(data);
// })
// app.post ("/create", (req,res) =>{
//     console.log(req.body);
//     console.log(req,params);
//     res.send(req.body);
// });

// const port = 1111;
// app.listen = (port, () =>{
//     console.log(`server is running on http://localhost:${port}`);
// });


// EXAMPLE
// const express = require ("express");
// const app = express();
// const morgan = require ("morgan");


// app.use(express.json()); // automatically becomes a function
// app.use(morgan("dev"));


// const animals = [
//     { id: 1, name: "dog"},
//     { id: 2, name: "goat"},
//     { id: 3, name: "rat"},
//     { id: 4, name: "rabbit"},
//     { id: 5, name: "lion"},
// ];
// app.get ("/", (req,res) =>{
//     res.send(data);
// })

// app.get ("/all", (req,res) =>{
//     res.send(animals);
// });

// app.post("/create", (req,res) => {
//     console.log(req.body);
//     console.log(req.params);
//     res.send(req.body);
// });

// app.get("/all/:id", (req, res) => {
//     console.log(req.params);
//     const actualAnimal = animals.filter(item => item.id == req.params.id)
//     res.send({ 
//       message: "animal with id: " + req.params.id,
//       data: actualAnimal
//    });
//   });

// const port = 8080;
// app.listen = (port, () => {
//     console.log(`server is running on http://localhost:${port}`)
// })
// const express = require("express");
// const app = express ();

// const animals = [
//     { id: 1, name: "dog"},
//     { id: 2, name: "goat"},
//     { id: 3, name: "rat"},
//     { id: 4, name: "rabbit"},
//     { id: 5, name: "lion"},
// ];

// app.get("/:id",(req,res) =>{
//     console.log(req.params.name);
//     const actualAnimal = animals.filter(items => items.id =req.params.name)
//     res.send({
//         message:"animal with name: " + req.params.name,
//         data: actualAnimal
//     });
// });

// const port = 8080; 
// app.listen(port, () =>{
//     console.log(`server is running on http://localhost:${port}`);
// });


//HOW TO CREATE AN EXPRESS SERVER 
//step 1 import the express file from the package.json file
// const express = require("express");
// const app = express()

// step 2 create an applicaton using a function
// app.get("/", (req,res) => {  
//     console.log("here");
    // res.send("hi"); 
    // res.sendStatus(500) or
    // res.render("index")  rendering html file 
    // res.status(500).send("hi") or 
    // res.status(500).json({message: "error"})or 
//     res.json({message:"error"}) 
// });

// app.post("")

//step 3 listen to the application by launching it in a browser
// const port = 4040;
// app.listen(port, ()=>{
//     console.log(`server is running on http://localhost:${port}`);
// });



