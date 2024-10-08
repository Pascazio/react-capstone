const Header = () => {
  return (
    <>
      <header>
        <div className="cta">
          <h1>Little Lemon Restaurant</h1>
          <p>Where the Mediterranean meets Chicago</p>
          <button className="reserve-button">Reserve a table</button>
        </div>
        <div className="hero">
          <img src="restaurant.jpg" alt="Restaurant" />
        </div>
      </header>
    </>
  );
};

export default Header;
