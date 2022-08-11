import cssImg from "../assets/images/skills/css-logo.png";
import htmlImg from "../assets/images/skills/html-5.png";
import jsImg from "../assets/images/skills/JS.jpg";
import mongoDbImg from "../assets/images/skills/mongodb.png";
import mysqlImg from "../assets/images/skills/mysql.png";
import nodeJsImg from "../assets/images/skills/nodejs.png";
import reactImg from "../assets/images/skills/react.png";

function skillSet() {
  return (
    <>
      <div class="slider logo">
        <div class="slide-track row ">
          <div class="slide mt-3 col ">
            <img src={htmlImg} width="60%" alt="" />
          </div>
          <div class="slide mt-3 col">
            <img src={cssImg} width="60%" alt="" />
          </div>
          <div class="slide mt-3 col">
            <img src={jsImg} width="55%" alt="" />
          </div>
          <div class="slide mt-3 col">
            <img src={nodeJsImg} width="55%" alt="" />
          </div>
          <div class="slide mt-3 col">
            <img src={reactImg} width="60%" alt="" />
          </div>
          <div class="slide mt-3 col">
            <img src={mongoDbImg} width="60%" alt="" />
          </div>
          <div class="slide mt-3 col">
            <img src={mysqlImg} width="60%" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
export default skillSet;
