const Header = () => {
  return (
    <>
      <header>
        <div className="cta">
          <h1>Little Lemon Restaurant</h1>
          <p>Where the Mediterranean meets Chicago</p>
          <button className="reserve-button">
            <a href="/reservations">Reserve a table</a>
          </button>
        </div>
        <div className="hero">
          <img src="restaurant.jpg" alt="Restaurant" />
        </div>
      </header>
    </>
  );
};

export default Header;
