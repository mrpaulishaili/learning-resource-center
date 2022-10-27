import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <main className="errorPage">
      <div className="">
        <h1>404! </h1>
        <p>😭 not found!</p>
      </div>
      <button>
        <Link to={'/'}>Back to Home</Link>{' '}
      </button>
    </main>
  );
};
export default ErrorPage;
