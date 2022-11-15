const express  = require("express"); // express setup

const port = process.env.PORT || 6000
const app = express()     // express call


 app.get('/', (req, res)=> {
    res.send('chart app is running')
 })


app.listen(port, () => {
    console.log('Omar Chart app is running' , port)
})



// const dotenv  = require("dotenv");  // dot env => hide a sensitive data use this package
// const mongoose  = require("mongoose");  // mongoose => use mongoose data base
// const path  = require("path");  // mongoose => use mongoose data base



// dotenv.config()  // call env config package 



// // database connection 
// mongoose.connect(process.env.MONGOOSE_COLLECTION, {
//     useNewUrlParser : true,
//     useUnifiedTopology : true
// })
// .then(() => console.log('database connection successfully'))
// .then(error => console.log(error))

// app.use(express.json())
// app.use(express.urlencoded({encoded : true}))

// app.set("view engin", "ejs")
// app.use(express.static(part.join(__dirname, 'public')))

// app.use(cookieParser(process.env.COOKIE_SECRET))