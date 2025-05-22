// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';
import { fadeIn } from '../../utils/framerMotion/variant';

export const ProjectSingle = ({ name, year, img, align, link }) => {
	return (
		<motion.div
			variants={fadeIn('up', 0.2)}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0 }}
			className={`flex sm:flex-col-reverse items-center ${align == 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} justify-end gap-8`}
		>
			<div>
				<h2 className="md:text-3xl sm:text-2xl text-orange">{name}</h2>
				<h2
					className={`text-xl text-white sm:text-center  ${align === 'left' ? 'md:text-right' : ' md:text-left'}`}
				>
					{year}
				</h2>
				<a
					href={link}
					className={`text-lg flex gap-2 items-center hover:text-orange text-cyan sm:justify-self-center transition-all duration-300   ${align === 'left' ? 'md:justify-self-end' : 'md:justify-self-start'}`}
				>
					Demo <BsArrowUpRightCircleFill />
				</a>
			</div>
			<div className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transition-all duration-300 relative border border-white">
				<div className="w-full h-full bg-cyan opacity-50 hover:opacity-0 transition-all duration-300 md:block sm:hidden absolute top-0 left-0"></div>
				<img src={img} alt="img projects" className="w-full h-full" />
			</div>
		</motion.div>
	);
};
