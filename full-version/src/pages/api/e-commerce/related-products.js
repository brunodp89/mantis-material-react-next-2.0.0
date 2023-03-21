import { products } from 'data/e-commerce';

export default function handler(req, res) {
  const { id } = req.body;
  const results = products.filter((product) => product.id !== Number(id));
  res.status(200).json(results);
}
