const links = [
	{ link: 'Sobre Min', section: 'sobre-min' },
	{ link: 'Projetos', section: 'projetos' },
	{ link: 'Habilidades', section: 'habilidades' },
	{ link: 'Contato', section: 'contato' },
];

export const NavbarLinks = () => {
	return (
		<div>
			<ul className="text-white flex gap-6 py-3 lg:flex-row sm:flex-col lg:relative sm:absolute sm:top-[120%] left-[50%] -translate-x-[50%] sm:bg-cyan/30 lg:text-base sm:text-xl backdrop-blur-lg sm:w-full lg:bg-black text-center font-semibold">
				{links.map((link, index) => (
					<li className="group">
						<a
							className=" hover:text-cyan transition-all duration-400"
							key={index}
						>
							{link.link}
						</a>
						<div className="mx-auto w-0 h-[1px] bg-cyan group-hover:w-full duration-400"></div>
					</li>
				))}
			</ul>
		</div>
	);
};
