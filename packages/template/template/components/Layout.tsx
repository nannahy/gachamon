import Navbar from "./Navbar";

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <div className="box">
        <h1>GOCHA-MON!</h1>
        <Navbar />
        <div className="body">{children}</div>
      </div>
      <style jsx>{`
        .box {
          width: 100vw;
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .body {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }
      `}</style>
    </>
  );
};

export default Layout;
