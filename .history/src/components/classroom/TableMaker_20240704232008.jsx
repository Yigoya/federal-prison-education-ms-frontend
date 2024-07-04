import React, { useState } from 'react';

const App = () => {
  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);
  const [tableData, setTableData] = useState([]);

  const handleRowChange = (e) => setRows(e.target.value);
  const handleColumnChange = (e) => setColumns(e.target.value);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTableData = Array.from({ length: rows }, () => Array(columns).fill(''));
    setTableData(newTableData);
  };

  const handleInputChange = (rowIndex, colIndex, value) => {
    const newData = [...tableData];
    newData[rowIndex][colIndex] = value;
    setTableData(newData);
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-2">
          <label className="block mb-1">Number of Rows</label>
          <input
            type="number"
            value={rows}
            onChange={handleRowChange}
            className="border p-2"
          />
        </div>
        <div className="mb-2">
          <label className="block mb-1">Number of Columns</label>
          <input
            type="number"
            value={columns}
            onChange={handleColumnChange}
            className="border p-2"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 mt-2">Create Table</button>
      </form>
      {tableData.length > 0 && (
        <div className="overflow-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                {Array.from({ length: columns }, (_, colIndex) => (
                  <th key={colIndex} className="border px-4 py-2">
                    Column {colIndex + 1}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, colIndex) => (
                    <td key={colIndex} className="border px-4 py-2">
                      <input
                        type="text"
                        value={cell}
                        onChange={(e) => handleInputChange(rowIndex, colIndex, e.target.value)}
                        className="w-full p-1 border"
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TableMaker;
