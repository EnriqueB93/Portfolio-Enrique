import { Link } from 'react-scroll';

const links = [
	{ link: 'Sobre Min', section: 'sobre-min' },
	{ link: 'Projetos', section: 'projetos' },
	{ link: 'Habilidades', section: 'habilidades' },
	{ link: 'Contato', section: 'contato' },
];

export const Footer = () => {
	return (
		<div className="px-4">
			<div className="w-full h-[1px] bg-grey mt-24 "></div>
			<div className="max-w-[1200px] sm:hidden md:flex mx-auto justify-between items-center mt-4">
				<p className="text-2xl font-semibold text-lightGrey">Enrique Blanco</p>
				<ul className="flex gap-6 text-lightGrey font-semibold">
					{links.map((link, index) => (
						<Link
							to={link.section}
							smooth={true}
							duration={500}
							spy={true}
							offset={-130}
							className="hover:text-white transition-all duration-300  "
							key={index}
						>
							{link.link}
						</Link>
					))}
				</ul>
			</div>
			<p className="max-w-[1200px] text-right mx-auto mt-2 mb-12 text-sm text-lightBrown ">
				Obrigado por visitar meu espaço digital – Enrique © 2025.
			</p>
		</div>
	);
};
