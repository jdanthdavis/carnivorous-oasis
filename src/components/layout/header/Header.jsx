import { Link } from 'react-router-dom';
import Logo from '../../../assets/blk-circle.png';
import { useState } from 'react';
import LoginModal from '../../core/modals/login-modal/LoginModal';
import './Header.scss';

const Header = () => {
  console.log('running');
  const [showLoginModal, setShowLoginModal] = useState(false);
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
        <Link onClick={() => setShowLoginModal(true)}>Login</Link>
      </div>
      {showLoginModal && <LoginModal setShowLoginModal={setShowLoginModal} />}
    </div>
  );
};

export default Header;
