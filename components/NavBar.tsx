import Link from "next/link";

const NavBase = () => {
	return (
		<>
			<nav className="fixed backdrop-blur-sm bg-black/30 w-full p-4 z-10">
				<ul>
					<li className="inline m-4">
						<Link href="/#home" className="m-4">
							Home
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

const Nav = () => {
	return (
		<>
			<div className="opacity-0 w-full">
				<NavBase />
			</div>

			<div className="fixed w-full z-10">
				<NavBase />
			</div>
		</>
	);
};

export default Nav;
