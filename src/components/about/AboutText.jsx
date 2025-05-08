import React from 'react';

export const AboutText = () => {
	return (
		<div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center ">
			<h2 className="text-6xl  text-cyan font-semibold mb-10">Sobre Min</h2>

			<p className="text-white text-lg py-8">
				Sou Enrique Blanco, desenvolvedor front-end com formação full-stack pelo
				DevClub e uma grande paixão por criar experiências digitais modernas,
				funcionais e com foco em performance.
				<br />
				<br />
				Após 11 anos de experiência como pintor automotivo profissão que me
				ensinou disciplina, atenção aos detalhes e comprometimento com prazos
				iniciei minha transição de carreira para a área tech, onde encontrei
				minha verdadeira vocação. Domino tecnologias como HTML, CSS, JavaScript,
				React, Bootstrap, Tailwind e TypeScript. Tenho também boas noções de
				Node.js, com foco na criação de APIs robustas, integrações com Stripe,
				além de práticas sólidas de controle de versões com Git e GitHub.
				<br />
				<br />
				Atualmente continuo evoluindo através de projetos práticos, aplicando
				boas práticas de código, técnicas de melhoria de performance, e
				aprimorando minha lógica e organização para entregar soluções escaláveis
				e eficientes. Estou pronto para agregar valor em equipes de tecnologia
				com minha dedicação, aprendizado constante e foco em resultados reais.
			</p>

			<button className="px-4 text-white py-2 rounded-full border border-orange  hover:bg-orange hover:text-black cursor-pointer transition-all duration-500 mb-10 text-lg flex items-center justify-center md:self-start sm:self-center">
				Meus Projetos
			</button>
		</div>
	);
};
