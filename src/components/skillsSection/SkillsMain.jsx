import { SkillsAll } from './SkillsAll';
import { SkillsAllSM } from './SkillsAllSM';
import { SkillsText } from './SkillsText';

// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';
import { fadeIn } from '../../utils/framerMotion/variant';

export const SkillsMain = () => {
	return (
		<div id="habilidades">
			<div className=" px-4 max-w-[1200px] overflow-hidden min-h-[600px]  mx-auto relative  ">
				<motion.div
					variants={fadeIn('up', 0.2)}
					initial="hidden"
					whileInView="show"
					viewport={{ once: false, amount: 0 }}
				>
					<SkillsText />
				</motion.div>
				<div className="bottom-[50px] left-[50%] -translate-x-[50%] absolute lg:block sm:hidden">
					<SkillsAll />
				</div>

				<div className="sm:block lg:hidden">
					<SkillsAllSM />
				</div>
			</div>
		</div>
	);
};
