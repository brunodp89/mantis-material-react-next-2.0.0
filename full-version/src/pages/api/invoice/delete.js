// third-party
import reject from 'lodash/reject';

// project import
import { invoice } from 'data/invoice';

// ==============================|| MOCK SERVICES ||============================== //

export default async function handler(req, res) {
  try {
    const { invoiceId } = req.body;
    reject(invoice, { id: invoiceId });

    res.status(200).json(invoiceId);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
}
