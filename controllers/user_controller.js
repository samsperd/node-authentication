const jwt = require('jsonwebtoken');
const { User } = require('../models');



exports.profile = async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'your-secret-key');
    const userId = decodedToken.id;
    const user = await User.findByPk(userId, { attributes: ['name', 'email'] });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user data' });
  }
};