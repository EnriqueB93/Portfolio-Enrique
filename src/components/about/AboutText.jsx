// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';
import { fadeIn } from '../../utils/framerMotion/variant';

export const AboutText = () => {
	return (
		<div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center ">
			<motion.h2
				variants={fadeIn('right', 0.2)}
				initial="hidden"
				whileInView="show"
				viewport={{ once: false, amount: 0 }}
				className="text-6xl  text-cyan font-semibold mb-10"
			>
				Sobre Min
			</motion.h2>

			<motion.p
				variants={fadeIn('right', 0.4)}
				initial="hidden"
				whileInView="show"
				viewport={{ once: false, amount: 0 }}
				className="text-white text-lg py-8"
			>
				Sou Enrique Blanco, desenvolvedor front-end com formação full-stack pelo
				DevClub. Após 11 anos como pintor automotivo — experiência que me
				ensinou disciplina, atenção aos detalhes e comprometimento com prazos —
				encontrei minha verdadeira vocação na área tech.
				<br /> <br />
				Domino HTML, CSS, JavaScript, React, Bootstrap, Tailwind e TypeScript.
				Possuo também conhecimentos em Node.js, criação de APIs, integrações com
				Stripe e controle de versões com Git/GitHub.
				<br /> <br />
				Continuo evoluindo através de projetos práticos, aplicando boas práticas
				de código e técnicas de performance. Estou pronto para agregar valor em
				equipes de tecnologia com dedicação, aprendizado constante e foco em
				resultados.
			</motion.p>

			<button className="px-4 text-white py-2 rounded-full border border-orange  hover:bg-orange hover:text-black cursor-pointer transition-all duration-500 mb-10 text-lg flex items-center justify-center md:self-start sm:self-center">
				Meus Projetos
			</button>
		</div>
	);
};
