import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");
        div {
          font-family: "Press Start 2P", cursive;
        }
      `}</style>
    </>
  );
}

export default MyApp;
