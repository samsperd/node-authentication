const express = require('express');
const cors = require('cors');
const app = express();
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const { authenticateToken } = require('./middleware/authenticate');

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:8081',
  credentials: true 
}))

app.use('/auth', authRoutes);
app.use('/user', authenticateToken, userRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
