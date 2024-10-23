import { Link } from "react-scroll";

function Nav() {
  return (
    <>
      <nav>
        <input type="checkbox" id="sidebar-active" />
        <label for="sidebar-active" className="open-sidebar-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48px"
            viewBox="0 -960 960 960"
            width="48px"
            fill="#e8eaed"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </label>
        <label id="overlay" for="sidebar-active"></label>
        <div className="links-container">
          <label for="sidebar-active" className="close-sidebar-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48px"
              viewBox="0 -960 960 960"
              width="48px"
              fill="#e8eaed"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </label>
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
      </nav>
    </>
  );
}

export default Nav;
