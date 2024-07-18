import CircleProgress from "../UI/CircleProgress";
import ProgressBar from "../UI/ProgressBar";
import "./AboutDetailLeft.css";
import { FaCaretRight } from "react-icons/fa";

const AboutDetailLeft = () => {
  return (
    <div className="about-left">
      <h3>About Me</h3>
      <p>
        Passionate Junior front-end Web Developer skilled in JavaScript, and
        Python, with expertise in React.js, node.js, and tailwind CSS. Committed
        to developing innovative and efficient programs that drive
        organizational success.
      </p>
      <div className="qaulity-services">
        <h3>Quality Services</h3>
        <ul>
          <li>
            <FaCaretRight /> Website Development
          </li>
          <li>
            <FaCaretRight /> Website Desginging
          </li>
          <li>
            <FaCaretRight /> Database Development
          </li>
        </ul>
      </div>
      <div className="programming-language">
        <h3>Programming Skills</h3>
        <p>JavaScript</p>
        <ProgressBar comptPercentage={"90%"} />
        <p>Python</p>
        <ProgressBar comptPercentage={"80%"} />
        <p>DataBase</p>
        <ProgressBar comptPercentage={"85%"} />
        <div className="languages-skill">
          <h3>Languages Skills</h3>
          <div className="languages">
            <CircleProgress language={"English"} percentage={90} />
            <CircleProgress language={"Pashto"} percentage={92} />
            <CircleProgress language={"Persian"} percentage={95} />
          </div>
        </div>
        <div className="education">
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default AboutDetailLeft;