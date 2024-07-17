import "./CircleProgress.css";

const CircleProgress = (props) => {
  return (
    <div className="circle-progress-bar">
      <div className="circle-complete-bar" style={{background: `conic-gradient(var(--red) ${props.percentage * 3.6}deg, #a2a2a2 ${props.percentage * 3.6}deg)` }}>
        <div className="circle-completed-bar">
          <div className="inner-circle-bar">{props.percentage}%</div>
        </div>
      </div>
      <div>{props.language}</div>
    </div>
  );
};

export default CircleProgress;
