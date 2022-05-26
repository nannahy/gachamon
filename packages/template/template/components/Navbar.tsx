import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  return (
    <>
      <div className="box">
        <Link href={"/"}>
          <a className={router.pathname === "/" ? "active" : ""}>HOME</a>
        </Link>
        <Link href={"/about"}>
          <a className={router.pathname === "/about" ? "active" : ""}>ABOUT</a>
        </Link>
      </div>
      <style jsx>{`
        .box {
          display: flex;
          column-gap: 16px;
        }
        a {
          color: gray;
        }
        a:hover {
          color: black;
        }
        .active {
          color: black;
        }
      `}</style>
    </>
  );
};

export default Navbar;
