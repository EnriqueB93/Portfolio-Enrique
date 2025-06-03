import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { NavbarBtn } from './NavbarBtn';
import { NavbarLinks } from './NavbarLinks';
import { NavbarLogo } from './NavbarLogo';

export const NavbarMain = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<nav className="max-w-[1300px] mx-auto px-4 w-full fixed mt-4 z-20 left-[50%] -translate-x-[50%] flex gap-4 ">
			<div className="flex justify-between max-w-[1200px] mx-auto w-full items-center bg-black p-4 rounded-full border-orange border">
				<NavbarLogo />

				<div className={`${menuOpen ? 'sm:block' : 'sm:hidden'} lg:block`}>
					<NavbarLinks />
				</div>

				<NavbarBtn />
			</div>
			<div className="p-3 border-[0.5px] lg:hidden sm:block rounded-full border-orange bg-black flex justify-center items-center">
				<button
					className="border-[0.5px] rounded-full p-4 border-cyan text-white "
					onClick={toggleMenu}
				>
					<GiHamburgerMenu />
				</button>
			</div>
		</nav>
	);
};
