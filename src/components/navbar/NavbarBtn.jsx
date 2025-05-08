import { FiArrowDownRight } from 'react-icons/fi';

export const NavbarBtn = () => {
	return (
		<div>
			<button className="text-white px-4 py-2 border rounded-full border-cyan text-xl font-semibold flex items-center gap-2 bg-gradient-to-r from-cyan to-orange hover:border-orange hover:scale-110 transition-all duration-400 hover:shadow-cyan-800 hover:shadow-lg ">
				Contato
				<FiArrowDownRight className="sm:hidden md:block" />
			</button>
		</div>
	);
};
