import { Link } from 'react-router-dom';

const Register = () => {
  let content = (
    <main className="auth">
      <h1>Register</h1>

      <form className="form">
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <input type="password" placeholder="confirrm password" />
        <button>Create account</button>

        <p className="error-class">This is an error!</p>

        <span className="info-class">
          Do you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </main>
  );
  return content;
};
export default Register;
