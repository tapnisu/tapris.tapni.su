const Navbar = () => (
  <nav className="sticky top-0 flex flex-row flex-nowrap w-full bg-black overflow-x-auto overflow-y-hidden whitespace-nowrap">
    <ul className="mx-2">
      {[{ name: "Home", url: "/" }]?.map(
        (info: { name: string; url: string }) => (
          <li className="inline-block m-4" key={info.name}>
            <a
              href={info.url}
              className="hover:text-indigo-400 transition-colors"
            >
              {info.name}
            </a>
          </li>
        ),
      )}
    </ul>
  </nav>
);

export default Navbar;
