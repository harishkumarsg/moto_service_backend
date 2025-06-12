const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

// ✅ Register Route
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ error: 'Email already exists' });

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashed });
    res.json(user);
  } catch (err) {
    console.error('❌ Registration error:', err);
    res.status(500).json({ error: 'Registration failed' });
  }
});

// ✅ Login Route (with debugging)
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log('📥 Login attempt:', email);

    const user = await User.findOne({ email });
    if (!user) {
      console.log('❌ No user found with that email');
      return res.status(400).json({ error: 'Invalid email' });
    }

    console.log('✅ User found:', user.email);

    const match = await bcrypt.compare(password, user.password);
    console.log('🔍 Password match:', match);

    if (!match) {
      console.log('❌ Incorrect password');
      return res.status(400).json({ error: 'Wrong password' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    console.log('🔐 Token created');
    res.json({ token, user });
  } catch (err) {
    console.error('🚨 Login error:', err);
    res.status(500).json({ error: 'Login failed' });
  }
});

module.exports = router;
