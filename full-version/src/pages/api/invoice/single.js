// project import
import { invoice } from 'data/invoice';

// ==============================|| MOCK SERVICES ||============================== //

export default async function handler(req, res) {
  try {
    const data = req.body;
    const { id } = data;
    const index = invoice.findIndex((x) => x.id.toString() === id.toString());
    res.status(200).json(invoice[index]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
}
