import { events } from 'data/calendar';

// ==============================|| CALENDAR - EVENTS ||============================== //

export default async function handler(req, res) {
  res.status(200).json({ events });
}
