import { users } from './[...nextauth]';

// ==============================|| ACCOUNT - LOGIN  ||============================== //

export default async function handler(req, res) {
  try {
    const { email, password } = req.body;

    const user = users.find((_user) => _user.email === email);

    if (!user) {
      return res.status(400).json({ message: 'Verify Your Email & Password' });
    }

    if (user.password !== password) {
      return res.status(400).json({ message: 'Invalid Password' });
    }

    return res.status(200).json({
      id: user.id,
      name: user.name,
      email: user.email
    });
  } catch (err) {
    return res.status(500).json({ message: 'Internal server error' });
  }
}
