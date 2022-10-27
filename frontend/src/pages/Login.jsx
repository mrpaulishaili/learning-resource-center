import { Link } from 'react-router-dom';

const Login = () => {
  let content = (
    <main className="auth">
      <h1>Login</h1>

      <form className="form">
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <button>Login</button>

        <p className="error-class">This is an error!</p>

        <span className="info-class">
          Don't you have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </main>
  );
  return content;
};
export default Login;
