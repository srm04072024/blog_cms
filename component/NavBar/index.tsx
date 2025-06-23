import Link from "next/link";

const NavBar = () => {
  return (
    <div className="fixed max-w-7xl top-0 w-full flex justify-between items-center bg-neutral-700 text-white px-4 py-2 z-30">
      <div className="text-2xl flex justify-center px-2 py-1 bg-gradient-to-l from-fuchsia-500 to-green-400 rounded-2xl">
        Headless
        <span className="bg-white rounded-2xl text-amber-500 px-2">BLOG</span>
      </div>
      <div>
        <ul className="list-none flex items-center gap-6">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blogs">All Blogs</Link>
          </li>
        </ul>
      </div>
      <div className="flex gap-4 items-center">
        <Link href="/contact-us">Contact Us</Link>
        <a
          href="https://sanity-headless.netlify.app/"
          className="px-4 py-2 bg-violet-400 text-white font-bold rounded-3xl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Launch CMS
        </a>
      </div>
    </div>
  );
};

export default NavBar;
