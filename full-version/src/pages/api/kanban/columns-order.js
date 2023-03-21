const columnIdsData = {
  column1: 'column-1',
  column2: 'column-2',
  column3: 'column-3'
};
const columnsOrderData = [columnIdsData.column1, columnIdsData.column2, columnIdsData.column3];
export default function handler(req, res) {
  return res.status(200).json({ columnsOrder: columnsOrderData });
}
