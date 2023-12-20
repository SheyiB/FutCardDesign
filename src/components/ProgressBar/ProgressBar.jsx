import './ProgressBar.css'

const ProgressBar = ({ value }) => {
    const color = value > 75 ? 'green' : value >= 50 ? 'yellow' : 'red';
    return (
      <div className="progress-bar">
        <div className="progress-bar-fill" style={{ width: `${value}%`, backgroundColor: color }} />
      </div>
    );
  };

  
  export default ProgressBar;
