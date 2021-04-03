import Filter from "./Filter";
import Select from "../Select";

const Filters = () => {
  const selects = [
    {
      title: "gender",
      options: ["men", "women", "kids"],
    },
    {
      title: "size",
      options: ["xs", "s", "m", "l", "xl"],
    },
    {
      title: "price",
      options: ["10$ - 20$", "20$ - 50$", "50$ - 100$", "> 100$"],
    },
  ];

  return (
    <section className="filters pad">
      <div className="container">
        <Filter />
        <div className="selects">
          {selects.map((el, id) => (
            <Select key={id} {...el} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Filters;
