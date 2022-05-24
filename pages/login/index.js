import ProvidersLoginCotainer from "../../components/ProvidersLoginContainer";
import Form from "../../components/Form";
import { logIn } from "../../firebase/client/auth";
export default function register() {
  return (
    <>
      <section>
        <Form type={"LOGIN"} submitFunction={logIn} />
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
