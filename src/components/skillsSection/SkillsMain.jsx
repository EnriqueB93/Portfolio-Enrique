import React from 'react';
import { SkillsAll } from './SkillsAll';
import { SkillsAllSM } from './SkillsAllSM';
import { SkillsText } from './SkillsText';

export const SkillsMain = () => {
	return (
		<div>
			<div className=" px-4 max-w-[1200px] overflow-hidden min-h-[600px]  mx-auto relative  ">
				<div>
					<SkillsText />
				</div>
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
