import { Router, Request, Response, RequestHandler } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const router = Router();


const login: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;

  console.log('username:', username);
  console.log('password input:', password);
  
  try {
    // Check if the user exists
    const user = await User.findOne({ where: { username } });

    console.log('found user:', user?.username);
    console.log('stored hash:', user?.password);


    if (!user) {
      res.status(401).json({ message: 'Invalid username or password' });
      return;
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(401).json({ message: 'Invalid username or password' });
      return;
    }

    // Sign and return JWT token

    const JWT_SECRET = process.env.JWT_SECRET as string;
    console.log('Loaded JWT secret:', process.env.JWT_SECRET);
    const token = jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Server error during login' });
  }
};

// POST /auth/login - Login a user
router.post('/login', login);

export default router;
