import { Link } from 'react-router-dom';
import Logo from './assets/Logobg.svg';
import About from './assets/About.svg';
import './App.css';

function NavBar() {
  return (
    <div>
      <div className="HeadingBar">
        <div>
          <Link to="/">
            <img className="logo" src={Logo} alt="Home" />
          </Link>
        </div>
        <div>
          <Link to="/about">
            <img className="logo" src={About} alt="About" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;