import Link from "next/link";
import { FC } from "react";

const Layout: FC = ({ children }) => {
  return (
    <div className="max-w-4xl mx-auto px-8">
      <header>
        <nav className="flex justify-between items-center h-24 text-xl">
          <Link href="/">
            <a className="font-black">HOME</a>
          </Link>
          <Link href="/resume">
            <a className="font-black">RESUME</a>
          </Link>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
