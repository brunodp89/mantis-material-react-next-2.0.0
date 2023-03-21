import { productReviews } from 'data/e-commerce';

export default function handler(req, res) {
  res.status(200).json({ productReviews });
}
