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
//   const { name, email } = req.body;
//   db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], (err, result) => {
//     if (err) throw err;
//     res.json({ message: 'User added successfully', id: result.insertId });
//   });
// });

// // Update a user
// app.put('/users/:id', (req, res) => {
//   const { id } = req.params;
//   const { name, email } = req.body;
//   db.query('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, id], (err) => {
//     if (err) throw err;
//     res.json({ message: 'User updated successfully' });
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