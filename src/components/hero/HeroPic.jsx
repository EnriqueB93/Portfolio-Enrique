// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';
import { fadeIn } from '../../utils/framerMotion/variant';

import BgHero from '../../../src/assets/BgHero.png';
import HeroImg from '../../../src/assets/heroImg3.png';

export const HeroPic = () => {
	return (
		<motion.div
			variants={fadeIn('left', 0.2)}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0 }}
			className="h-full flex items-center justify-center"
		>
			<img
				className="rounded-b-full max-h-[450px] w-auto z-10"
				src={HeroImg}
				alt="hero imgen"
			/>
			<div className="absolute flex justify-center items-center animate-pulse">
				<img
					src={BgHero}
					className="md:h[90%] sm:h-[10px] min-h-[30rem] min-w-[30rem] w-auto text-cyan  animate-[spin_20s_linear_infinite]"
				/>
			</div>
		</motion.div>
	);
};
