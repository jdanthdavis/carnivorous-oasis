import { useState } from 'react';
import AccountLoginModal from './partials/AccountLoginModal';
import CreateAccount from './partials/CreateAccount';
import './LoginModal.scss';

const LoginModal = ({ setShowLoginModal }) => {
  const [newAccountClicked, setNewAccountClicked] = useState(false);
  setTimeout(() => {
    document.getElementById('create-account-card')?.classList.remove('loading');
    document.getElementById('account-login-card')?.classList.remove('loading');
  }, 1);

  return (
    <div className="login-modal-container">
      <div className="modal">
        <div className="modal-content modal-enter" id="modal-content">
          <button
            className="close-btn"
            onClick={() => setShowLoginModal(false)}
          >
            X
          </button>{' '}
          {!newAccountClicked && (
            <AccountLoginModal
              setShowLoginModal={setShowLoginModal}
              setNewAccountClicked={setNewAccountClicked}
            />
          )}
          {newAccountClicked && (
            <CreateAccount
              setShowLoginModal={setShowLoginModal}
              setNewAccountClicked={setNewAccountClicked}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
