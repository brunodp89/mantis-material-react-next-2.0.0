// third-party
import { map, assign } from 'lodash';

// project import
import { invoice } from 'data/invoice';

// ==============================|| MOCK SERVICES ||============================== //

export default async function handler(req, res) {
  try {
    const { list } = req.body;

    let event = null;
    map(invoice, (_event) => {
      if (_event.id === list.id) {
        assign(_event, { ...list });
        event = _event;
      }

      return _event;
    });

    res.status(200).json(event);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
}
