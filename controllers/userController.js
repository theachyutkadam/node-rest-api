// Get all users
app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Get a user by ID
app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM users WHERE id = ?', [id], (err, results) => {
    if (err) throw err;
    res.json(results[0]);
  });
});

// Create a new user
app.post('/users', (req, res) => {
  const { email, password, first_name, last_name } = req.body;
  db.query('INSERT INTO users (email, password, first_name, last_name) VALUES (?, ?, ?, ?)', [email, password, first_name, last_name], (err, result) => {
    if (err) throw err;
    // res.json({ message: 'User added successfully', id: result.insertId });
    db.query('SELECT * FROM users WHERE id = ?', [result.insertId], (err, results) => {
      if (err) throw err;
      res.json(results[0]);
    });
  });
});

// Update a user
app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { email, password, first_name, last_name } = req.body;
  console.warn('Check--request ->', req);
  console.warn('Check--body params->', req.body);
  db.query(
    'UPDATE users SET email= ?, password= ?, first_name= ?, last_name= ? WHERE id= ?', [email, password, first_name, last_name, id], (err) => {
    if (err) throw err;
    db.query('SELECT * FROM users WHERE id = ?', [id], (err, results) => {
      if (err) throw err;
      res.json(results[0]);
    });
    // res.json({ message: 'User updated successfully' });
  });
});

// Delete a user
app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM users WHERE id = ?', [id], (err) => {
    if (err) throw err;
    res.json({ message: 'User deleted successfully' });
  });
});
