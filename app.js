const express  = require("express"); // express setup
const { MongoClient, ServerApiVersion} = require('mongodb');
const cors = require("cors"); 
const port = process.env.PORT || 5000
const app = express()     // express call

app.use(cors())
app.use(express.json())

 app.get('/', (req, res)=> {
    res.send('chart app is running')
 })

 
 
 const uri = `mongodb+srv://omar-chat:f8MYRzfMdKO3O177@cluster0.uadalh8.mongodb.net/?retryWrites=true&w=majority`;
 const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
    try{
        const userCollection = client.db('omar-chat').collection('user')

        app.get('/all-services', async (req, res) => {
            const query = {}
            const cursor = serviceCollection.find(query)
            const courses = await cursor.toArray()
            res.send(courses)
          })

        app.get('/user', async (req, res) => {
            const query = { }
            const cursor = userCollection.find(query)
            const user = await cursor.toArray()
            res.send(user)
          })
          
        
    app.post('/user', async (req, res) => {
        const user = req.body;
        console.log(user)
        const result = await userCollection.insertOne(user)
        res.send(result)
      })
    }
    finally{}
}

run()

app.listen(port, () => {
    console.log('Omar Chat app is running' , port)
})
