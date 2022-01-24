import Layout from "../components/layout/layout";
import "../styles/globals.css";

// this component renders the page

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
