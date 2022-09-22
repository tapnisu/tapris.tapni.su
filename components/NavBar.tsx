import NavBase from "@components/NavBase";

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
