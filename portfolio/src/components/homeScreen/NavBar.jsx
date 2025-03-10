import { Link } from "react-scroll";
import "./Header.css";

const NavBar = () => {
  return (
    <div className=" parent_class" style={{position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "10%",
      background: "#333",
      color: "white",
      zIndex: 1000,
      }}>
      <ul className="parent_list" style={{marginRight:20}}>

      <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about-body" smooth={true} duration={500}>
            About Me
          </Link>
        </li>

        <li>
        <Link to="skill" smooth={true} duration={500}>
            Skills
          </Link>
        </li>

        <li>
        <Link to="project" smooth={true} duration={500}>
            Projects
          </Link>
        </li>

        <li>
        <Link to="contact" smooth={true} duration={500}>
              <p
                // style={{
                //   background: "white",
                //   color: "black",
                //   padding: "4px 9px",
                //   borderRadius: "10px",
                // }}
              >
                Contact Me
              </p>
            </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
