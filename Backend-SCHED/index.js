import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors()); // allow requests from React
app.use(express.json()); // parse JSON bodies

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const TEMP_USERNAME = 'clyde@email.com';
  const TEMP_PASSWORD = '123';

  if (email === TEMP_USERNAME && password === TEMP_PASSWORD) {
    return res.json({ success: true, message: 'Login successful!' });
  } else {
    return res.status(401).json({ success: false, message: 'Invalid credentials.' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
