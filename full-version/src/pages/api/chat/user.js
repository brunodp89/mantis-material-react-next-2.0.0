import { users } from 'data/chat';

// ==============================|| CHAT - USER DETAILS ||============================== //

export default async function handler(req, res) {
  try {
    const { id } = req.query;
    const index = users.findIndex((x) => x.id.toString() === id);
    res.status(200).json(users[index]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
}
