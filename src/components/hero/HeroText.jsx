/* eslint-disable no-unused-vars */
import { motion } from 'motion/react';

import { fadeIn } from '../../utils/framerMotion/variant';

export const HeroText = () => {
	return (
		<div className="flex flex-col gap-4 h-full md:text-left sm:text-center font-semibold justify-center">
			<motion.h2
				variants={fadeIn('dowm', 0.2)}
				initial="hidden"
				whileInView="show"
				viewport={{ once: false, amount: 0 }}
				className=" lg:text-2xl sm:text-xl uppercase text-cyan  "
			>
				Desenvolvedor Front-End
			</motion.h2>
			<motion.h1
				variants={fadeIn('right', 0.4)}
				initial="hidden"
				whileInView="show"
				viewport={{ once: false, amount: 0 }}
				className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-semibold mb-4"
			>
				Enrique Blanco
			</motion.h1>

			<motion.p
				variants={fadeIn('up', 0.6)}
				initial="hidden"
				whileInView="show"
				viewport={{ once: false, amount: 0 }}
				className=" text-white text-lg mt-4"
			>
				Apaixonado por tecnologia e interfaces modernas. <br /> Em busca da
				minha primeira oportunidade como desenvolvedor <br /> front-end para
				crescer, aprender e contribuir com dedicação.
			</motion.p>
		</div>
	);
};
