// project import
import { invoice } from 'data/invoice';

// ==============================|| MOCK SERVICES ||============================== //

export default async function handler(req, res) {
  res.status(200).json({ invoice: invoice });
}
