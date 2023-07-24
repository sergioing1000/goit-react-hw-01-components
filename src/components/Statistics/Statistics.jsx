import propTypes from "prop-types"
import '../../CSS/stats.css'; 

function Statistic(props) {

  const { statsData } = props;
  
  let docx = 0;
  let pdf = 0;
  let mp3 = 0;
  let psd = 0;

  statsData.forEach(element => {
      
    switch (element.label) {
      case '.docx':
        docx= docx + element.percentage;
        break;
      case '.pdf':
        pdf= pdf + element.percentage;
        break;
      case '.mp3':
        mp3= mp3 + element.percentage;
        break;
      case '.psd':
        psd= psd + element.percentage;
        break;
      default:
        break;
    }
  });

  return (
    
      <section className="statistics">
        
        <h2 className="title">Upload stats</h2>

        <ul className="stat-list">
          <li className="item item1">
            <p className="labelS">.docx</p>
          <p className="percentage">{docx} %</p>
          </li>
          <li className="item item2">
            <p className="labelS">.pdf</p>
            <p className="percentage">{pdf} %</p>
          </li>
          <li className="item item3">
            <p className="labelS">.mp3</p>
            <p className="percentage">{mp3} %</p>
          </li>
          <li className="item item4">
            <p className="labelS">.psd</p>
            <p className="percentage">{psd} %</p>
          </li>
        </ul>
      </section>
    
  );
}

Statistic.propTypes = {
  statsData: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistic;