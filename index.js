const express = require('express');
const mysql = require('mysql2');

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/",function(request,response){
  response.send("Hello World!")
})

// app.use(express.json());


// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'password',
//   database: 'node_rest_api_development',
// });

// db.connect((err) => {
//   if (err) {
//     console.error('Error connecting to MySQL:', err);
//     return;
//   }
//   console.log('Connected to MySQL database');
// });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});