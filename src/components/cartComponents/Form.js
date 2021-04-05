const Form = () => {
  const inputs = ["Country", "City", "Postcode / Zip"];

  return (
    <form className="shipping-form">
      <h5 className="shipping-title">shipping address</h5>
      {inputs.map((el, id) => (
        <input
          key={id}
          type="text"
          placeholder={el}
          autoComplete="off"
          aria-label={el}
          className="input"
        />
      ))}
      <button className="btn gray small">get a quote</button>
    </form>
  );
};

export default Form;
