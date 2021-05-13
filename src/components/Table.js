const Table = (props) => {
  const { tableData } = props;
  return (
    <table className="styled-table">
      <thead>
        <tr>
          <th>S. no.</th>
          <th>Word</th>
          <th>Frequency</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((data, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data[0]}</td>
              <td>{data[1]}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
