import { Link } from "react-scroll";

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <span className="spanLogo">
          <img src="/logo.png" alt="" />
        </span>
        <div className="links">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            id="link1"
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            id="link1"
          >
            About
          </Link>

          <Link
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            id="link1"
          >
            Experience
          </Link>
          <Link
            activeClass="active"
            to="service"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            id="link1"
          >
            Service
          </Link>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
