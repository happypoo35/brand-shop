import PageHeader from "../components/PageHeader";
import Form from "../components/registrationComponents/Form";
import RegistrationInfo from "../components/registrationComponents/RegistrationInfo";

const Registration = () => {
  const pageName = "registration";

  return (
    <>
      <PageHeader title={pageName} />
      <section className={`${pageName} pad`} aria-label={pageName}>
        <div className="container">
          <Form />
          <RegistrationInfo />
        </div>
      </section>
    </>
  );
};

export default Registration;
