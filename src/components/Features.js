const Features = () => {
  const featuresData = [
    {
      img: "./images/icon-delivery.svg",
      title: "Free Delivery",
      text:
        "Worldwide delivery on all. Authorit tively morph next-generation innovation with extensive models.",
    },
    {
      img: "./images/icon-sale.svg",
      title: "Sales & discounts",
      text:
        "Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.",
    },
    {
      img: "./images/icon-quality.svg",
      title: "Quality assurance",
      text:
        "Worldwide delivery on all. Authorit tively morph next-generation innovation with extensive models.",
    },
  ];

  return (
    <section className="features pad" aria-label="features">
      <div className="container">
        {featuresData.map((el, id) => {
          const { img, title, text } = el;
          return (
            <article className="feature" aria-label={title} key={id}>
              <img src={img} alt="icon" />
              <h5 className="light-gray">{title}</h5>
              <p className="light-gray">{text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
