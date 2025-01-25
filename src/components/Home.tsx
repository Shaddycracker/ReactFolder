import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Our Website</h1>
        <p>Discover amazing content and features here!</p>
      </header>

      <main className="home-main">
        <div className="card-container">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="card">
              <h2>Card {index + 1}</h2>
              <p>This is a description of card {index + 1}. Check out its amazing features.</p>
              <button className="card-button">Learn More</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
