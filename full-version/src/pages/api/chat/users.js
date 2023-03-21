import { users } from 'data/chat';

// ==============================|| CHAT - USER LIST ||============================== //

export default async function handler(req, res) {
  res.status(200).json({ users });
}
