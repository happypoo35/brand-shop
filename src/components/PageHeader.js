import { Link } from "react-router-dom";

const PageHeader = ({ title, gender, cat }) => {
  return (
    <header className={`page-header ${title}-header pad`}>
      <div className="container">
        <h1 className="page-title pink">
          {cat ? cat : gender ? gender : title}
        </h1>
        <div className="bc">
          <Link to="/" className="bc-link">
            home
          </Link>
          <Link
            to={`/${title}`}
            className={gender ? "bc-link" : "bc-link pink"}
          >
            {title}
          </Link>
          {gender ? (
            <Link
              to={`/${title}/${gender}`}
              className={cat ? "bc-link" : "bc-link pink"}
            >
              {gender}
            </Link>
          ) : (
            ""
          )}
          {cat ? (
            <Link to={`/${title}/${gender}/${cat}`} className="bc-link pink">
              {cat}
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
