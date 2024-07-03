import { Icon } from '@iconify/react/dist/iconify.js';
import { CREATE_ACCOUNT_FIELDS } from './Fields';

export const CreateAccount = ({ setShowLoginModal, setNewAccountClicked }) => {
  return (
    <div className="create-account-card loading" id="create-account-card">
      <div className="greeting-container">
        <h1>Create an account</h1>
      </div>
      <div className="login-input-container">
        {CREATE_ACCOUNT_FIELDS.map((x, key) => {
          return (
            <label key={key}>
              <Icon icon={x.icon} />
              <input type={x.type} placeholder={x.placeholder} />
            </label>
          );
        })}
        <div className="login-btn-container">
          <button className="login-btn">
            Register &nbsp;
            <Icon icon="ph:plant" width="32" height="32" />
          </button>
        </div>
        <div className="sign-up-container">
          Already have an account?{' '}
          <a
            className="create-account-link"
            onClick={() => setNewAccountClicked(false)}
          >
            Log in
          </a>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
