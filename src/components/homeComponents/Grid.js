import { Link } from "react-router-dom";

const Grid = () => {
  const data = [
    {
      id: 1,
      subtitle: "30% off",
      title: "for women",
      img: "./images/img-grid-1.jpg",
      path: "/catalog/women",
    },
    {
      id: 2,
      subtitle: "hot deal",
      title: "for men",
      img: "./images/img-grid-2.jpg",
      path: "/catalog/men",
    },
    {
      id: 3,
      subtitle: "new arrivals",
      title: "for kids",
      img: "./images/img-grid-3.jpg",
      path: "/catalog/kids",
    },
    {
      id: 4,
      subtitle: "luxirous & trendy",
      title: "accessories",
      img: "./images/img-grid-4.jpg",
      path: "/catalog/men/Accessories",
    },
  ];

  return (
    <section className="offers pad" aria-label="offers">
      <div className="container">
        {data.map((el) => {
          const { id, subtitle, title, img, path } = el;
          return (
            <Link key={id} to={path} className="offer">
              <article aria-label="offer">
                <img src={img} alt="img" className="offer-img" />
                <span className="offer-title">
                  {subtitle}
                  <br />
                  <span className="pink">{title}</span>
                </span>
              </article>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Grid;
