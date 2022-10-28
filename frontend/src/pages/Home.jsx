import AllBooks from '../components/Books/AllBooks';

const Home = () => {
  let content = (
    <main className="home container">
      <section className="section hero">
        <div className="speech">
          <h1>Learning Resource Center</h1>
          <p>With accredited partnerships and sponsorships</p>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Trending Books</h2>
        <AllBooks />
      </section>
    </main>
  );

  return content;
};
export default Home;
