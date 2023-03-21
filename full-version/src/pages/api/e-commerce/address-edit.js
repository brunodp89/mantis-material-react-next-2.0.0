import { address } from 'data/e-commerce';

export default function handler(req, res) {
  const data = req.body;

  let result = address;
  if (data.isDefault) {
    result = address.map((item) => {
      if (item.isDefault === true) {
        return { ...item, isDefault: false };
      }
      return item;
    });
  }

  result = result.map((item) => {
    if (item.id === data.id) {
      return data;
    }
    return item;
  });
  res.status(200).json({ address: result });
}
