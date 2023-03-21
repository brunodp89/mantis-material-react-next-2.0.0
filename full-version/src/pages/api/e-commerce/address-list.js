import { address } from 'data/e-commerce';

export default function handler(req, res) {
  res.status(200).json({ address });
}
