import { Icon } from '@iconify/react/dist/iconify.js';
import { LOGIN_FIELDS } from './Fields';
import '../LoginModal.scss';

const AccountLoginModal = ({ setNewAccountClicked }) => {
  return (
    <div className="account-login-card loading" id="account-login-card">
      <div className="greeting-container">
        <h1>Welcome back to Carnivorous Oasis!</h1>
        <span className="wave-icon">👋</span>
      </div>
      <div className="login-input-container">
        {LOGIN_FIELDS.map((x, key) => {
          return (
            <label key={key}>
              <Icon icon={x.icon} />
              <input type={x.type} placeholder={x.placeholder} />
            </label>
          );
        })}
        <span className="forgot-pass-container">
          <div className="keep-signed-container">
            <input type="checkbox" />
            Keep me signed in
          </div>
          <a
            className="forgot-password"
            onClick={() => console.log('Forgot password clicked')}
          >
            Forgot password?
          </a>
        </span>
        <div className="login-btn-container">
          <button className="login-btn">
            Log in &nbsp;
            <Icon icon="ph:plant" width="32" height="32" />
          </button>
        </div>
        <div className="sign-up-container">
          New to Carnivorous Oasis?{' '}
          <a
            className="create-account-link"
            onClick={() => {
              setNewAccountClicked(true);
            }}
          >
            Create an account
          </a>
        </div>
      </div>
    </div>
  );
};

export default AccountLoginModal;
