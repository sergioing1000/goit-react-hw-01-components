import propTypes from "prop-types"
import '../../CSS/transactions.css';

function TransactionHistory(props) {

  const { transactionData } = props;

  return (
    <div>
      <h2>Transaction 💲 Histoty</h2>

      <hr /> 

      <table className="transac-hist-table">
        <thead>
            <tr>
              <th className='tr-T-head'>Type</th>
              <th className='tr-T-head'>Transaction ID</th>
              <th className='tr-T-head'>Amount</th>
              <th className='tr-T-head'>Currency</th>
            </tr>
        </thead>

        <tbody>
          
          {transactionData.map(item => (
            <tr key={item.id}>
              <td>{item.type}</td>
              <td>...{item.id.slice(-8)}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>            
            ))}
        </tbody>
      </table>
    </div>
  );
}

TransactionHistory.propTypes = {
  transactionData: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      type: propTypes.string.isRequired,
      amount: propTypes.string.isRequired,
      currency: propTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;