import { FaCss3, FaGitAlt, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiTailwindcss, SiTypescript } from 'react-icons/si';

// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';
import { fadeIn } from '../../utils/framerMotion/variant';

const skills = [
	{
		skill: 'HTML',
		icon: FaHtml5,
	},
	{
		skill: 'CSS',
		icon: FaCss3,
	},
	{
		skill: 'Javascript',
		icon: IoLogoJavascript,
	},
	{
		skill: 'Typescript',
		icon: SiTypescript,
	},
	{
		skill: 'ReactJS',
		icon: FaReact,
	},
	{
		skill: 'Tailwind',
		icon: SiTailwindcss,
	},
	{
		skill: 'NodeJS',
		icon: FaNodeJs,
	},
	{
		skill: 'Git',
		icon: FaGitAlt,
	},
];

export const SkillsAllSM = () => {
	return (
		<div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12 ">
			{skills.map((item, index) => {
				return (
					<motion.div
						variants={fadeIn('up', `0.${index}`)}
						initial="hidden"
						whileInView="show"
						viewport={{ once: false, amount: 0 }}
						key={index}
						className="flex flex-col items-center "
					>
						<item.icon className="text-7xl text-orange" />
						<p className="text-white text-center mt-4">{item.skill}</p>
					</motion.div>
				);
			})}
		</div>
	);
};
