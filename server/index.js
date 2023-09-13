const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const { graphqlHTTP } = require("express-graphql") 
const port = process.env.PORT || 4000;
const schema = require('./schema/schema.js');
const colors = require('colors');
const connectDB = require('./config/db.js');
const  cors  = require('cors');


const express =require('express');
const app = express();

//Connect to DB
connectDB();

app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(port, console.log(`Server running on port ${port}. 🚀`))