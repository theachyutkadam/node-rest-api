// // Get all users
// app.get('/users', (req, res) => {
//   db.query('SELECT * FROM users', (err, results) => {
//     if (err) throw err;
//     res.json(results);
//   });
// });

// // Get a user by ID
// app.get('/users/:id', (req, res) => {
//   const { id } = req.params;
//   db.query('SELECT * FROM users WHERE id = ?', [id], (err, results) => {
//     if (err) throw err;
//     res.json(results[0]);
//   });
// });

// // Create a new user
// app.post('/users', (req, res) => {
//   const { email, password, first_name, last_name } = req.body;
//   db.query('INSERT INTO users (email, password, first_name, last_name) VALUES (?, ?, ?, ?)', [email, password, first_name, last_name], (err, result) => {
//     if (err) throw err;
//     // res.json({ message: 'User added successfully', id: result.insertId });
//     db.query('SELECT * FROM users WHERE id = ?', [result.insertId], (err, results) => {
//       if (err) throw err;
//       res.json(results[0]);
//     });
//   });
// });

// // Update a user
// app.put('/users/:id', (req, res) => {
//   const { id } = req.params;
//   const { email, password, first_name, last_name } = req.body;
//   console.warn('Check--request ->', req);
//   console.warn('Check--body params->', req.body);
//   db.query(
//     'UPDATE users SET email= ?, password= ?, first_name= ?, last_name= ? WHERE id= ?', [email, password, first_name, last_name, id], (err) => {
//     if (err) throw err;
//     db.query('SELECT * FROM users WHERE id = ?', [id], (err, results) => {
//       if (err) throw err;
//       res.json(results[0]);
//     });
//     // res.json({ message: 'User updated successfully' });
//   });
// });

// // Delete a user
// app.delete('/users/:id', (req, res) => {
//   const { id } = req.params;
//   db.query('DELETE FROM users WHERE id = ?', [id], (err) => {
//     if (err) throw err;
//     res.json({ message: 'User deleted successfully' });
//   });
// });

import { createRequire } from "module";
const require = createRequire(import.meta.url);

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  'node_rest_api_development',
  'root',
  'root',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);
sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});


const User = sequelize.define("users", {
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1
  }
});

sequelize.sync().then(() => {
  console.log('User table created successfully!');
  User.create({
    email: "Rupali",
    password: "Kadam",
    status: 0,
  }).then(res => {
    console.log(res)
  }).catch((error) => {
    console.error('Failed to create a new record : ', error);
  });


  // // console.log('Return users Record');
  // User.findAll().then(res => {
  //   console.log(res)
  // }).catch((error) => {
  //   console.error('Failed to retrieve data : ', error);
  // });

  // // console.log('Return users using ID');
  // User.findOne({
  //   where: { id: "3" }
  // }).then(res => {
  //   console.log(res)
  // }).catch((error) => {
  //   console.error('Failed to retrieve data : ', error);
  // });

  // // console.log('Destroy User using ID');
  // User.destroy({
  //   where: { id: 3 }
  // }).then(() => {
  //   console.log("Successfully deleted record.")
  // }).catch((error) => {
  //   console.error('Failed to delete record : ', error);
  // });


}).catch((error) => {
  console.error('Unable to create table : ', error);
});
