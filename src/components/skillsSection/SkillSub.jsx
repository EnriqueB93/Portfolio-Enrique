import React from 'react';
import SubSkill from '../../assets/subSkills.jpg';

export const SkillSub = () => {
	return (
		<div className="border-y-2 border-lightGrey relative">
			<div className="absolute bg-gradient-to-r from-orange to-cyan w-full h-full opacity-50"></div>
			<img src={SubSkill} alt=" sub skills img" />
		</div>
	);
};
