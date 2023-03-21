import { products } from 'data/e-commerce';

// ==============================|| CALENDAR - EVENTS ||============================== //

export default async function handler(req, res) {
  res.status(200).json({ products });
}
