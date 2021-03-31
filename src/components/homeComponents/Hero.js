const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-img">
          <img src="./images/img-hero.png" alt="img" />
        </div>
        <div className="hero-text">
          <h1>
            the brand
            <br />
            <span>of luxerious</span> <span className="pink">fashion</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
