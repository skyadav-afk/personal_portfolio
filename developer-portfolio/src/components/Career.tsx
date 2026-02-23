import "./styles/Career.css";
import { config } from "../config";

const getPeriodParts = (period: string): { from: string; to: string } => {
  if (period.includes(" - ")) {
    const [from, to] = period.split(" - ");
    return { from: from.trim(), to: to.trim() === "Present" ? "Present" : to.trim() };
  }
  return { from: period.trim(), to: "" };
};

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {config.experiences.map((exp, index) => (
            <div key={index} className="career-info-box">
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{exp.position}</h4>
                  <h5>{exp.company}</h5>
                </div>
                <div className="career-period">
                  <span className="career-period-from">{getPeriodParts(exp.period).from}</span>
                  {getPeriodParts(exp.period).to && (
                    <>
                      <span className="career-period-sep">–</span>
                      <span className="career-period-to">{getPeriodParts(exp.period).to}</span>
                    </>
                  )}
                </div>
              </div>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
