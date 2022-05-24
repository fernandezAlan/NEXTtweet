import ProvidersLoginCotainer from "../../components/ProvidersLoginContainer";
import Form from "../../components/Form";
import { createUser } from "../../firebase/client/auth";
export default function register() {
  return (
    <>
      <section>
        <Form type={"REGISTER"} submitFunction={createUser} />
        <div>
          <ProvidersLoginCotainer />
        </div>
      </section>
      <style jsx>{`
        section {
          height: 90vh;
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: space-evenly;
        }
      `}</style>
    </>
  );
}
