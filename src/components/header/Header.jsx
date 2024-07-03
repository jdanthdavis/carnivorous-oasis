import { Link } from 'react-router-dom';
import Logo from '../../assets/blk-circle.png';
import './Header.scss';

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="logo-container">
        <img src={Logo} alt="logo" width="50" height="50" />
        <b>Carnivorous</b>Oasis
      </div>
      <div className="header-btn-container">
        <Link>Plant Catalog</Link>
        <Link>User Tips</Link>
        <Link>Articles</Link>
        <Link>Community</Link>
      </div>
    </div>
  );
};

export default Header;
