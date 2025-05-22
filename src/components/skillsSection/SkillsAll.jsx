import React from 'react';
import { FaCss3, FaGitAlt, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiTailwindcss, SiTypescript } from 'react-icons/si';
import { SkillSingle } from './SkillSingle';

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

export const SkillsAll = () => {
	return (
		<div>
			<div className="flex justify-center items-center gap-2 relative max-w-[1200px] mx-auto">
				{skills.map((item, index) => {
					return (
						<motion.div
							variants={fadeIn('up', `0.${index}`)}
							initial="hidden"
							whileInView="show"
							viewport={{ once: false, amount: 0 }}
						>
							<SkillSingle
								key={index}
								text={item.skill}
								imgIcon={<item.icon />}
							/>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
};
