import { Link } from "react-scroll";
import "./Header.css";

const Header = () => {
  return (
    <div className=" parent_class">
      <ul className="parent_list">
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
              style={{
                background: "white",
                color: "black",
                padding: "4px 9px",
                borderRadius: "10px",
              }}
            >
              Contact Me
            </p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
