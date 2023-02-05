import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import "./SideVertical.css";

function SideVertical(props) {
  let numberPage;
  let titlePage;
  let directUp;
  let directDown;
  const { pathname } = useLocation();
  const date = new Date().toISOString().slice(0, 10);

  switch (pathname) {
    case "/":
      numberPage = "01";
      titlePage = "Home";
      break;
    case "/about":
      numberPage = "02";
      titlePage = "About";
      break;
    case "/skills":
      numberPage = "03";
      titlePage = "Skills";
      break;
    case "/projects":
      numberPage = "04";
      titlePage = "Projects";
      break;
    case "/contact":
      numberPage = "05";
      titlePage = "Contact";
      break;
    // case "/login":
    //   numberPage = "06";
    //   titlePage = "Login";
    //   break;
    default:
  }

  // Direct Up
  switch (pathname) {
    case "/":
      directUp = "/contact";
      break;
    // case "/":
    //   directUp = "/login";
    //   break;
    // case "/about":
    //   directUp = "/";
    //   break;
    case "/skills":
      directUp = "/about";
      break;
    case "/projects":
      directUp = "/skills";
      break;
    case "/contact":
      directUp = "/projects";
      break;
    default:
  }

  // Direct Down
  switch (pathname) {
    case "/":
      directDown = "/about";
      break;
    case "/about":
      directDown = "/skills";
      break;
    case "/skills":
      directDown = "/projects";
      break;
    case "/projects":
      directDown = "/contact";
      break;
    case "/contact":
      directDown = "/login";
      break;
      case "/login":
      directDown = "/";
      break;
    default:
  }

  return (
    <>
      <div className="side-vertical">
        <div className="upper-side d-flex">
          <p className="side-title">{titlePage}</p>
          <p className="side-date">{date}</p>
        </div>
        <div className="lower-side d-flex">
          <p className="side-number">
            {numberPage} <span className="disabled-color">/ 06</span>
          </p>
          <Link to={directUp} className="d-flex align-items-center pb-3 arrow">
            <AiOutlineArrowUp />
          </Link>
          <Link to={directDown} className="d-flex align-items-center arrow">
            <AiOutlineArrowDown />
          </Link>
        </div>
      </div>
    </>
  );
}

export default SideVertical;
