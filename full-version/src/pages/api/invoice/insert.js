// project import
import { invoice } from 'data/invoice';

// ==============================|| MOCK SERVICES ||============================== //

export default async function handler(req, res) {
  try {
    const { list } = req.body;
    const NewList = {
      ...list,
      id: invoice.length + 1
    };
    invoice.push(NewList);
    res.status(200).json(NewList);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
}
