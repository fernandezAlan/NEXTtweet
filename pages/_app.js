import AppLayout from "../components/AppLayout";
import Nav from "../components/Nav";

export default function App({ Component, pageProps }) {
  return (
    <AppLayout>
      <Component {...pageProps} />
      <Nav></Nav>
    </AppLayout>
  );
}
