import React from 'react';

export const SkillSingle = ({ text, imgIcon }) => {
	return (
		<div className="hover:-translate-y-10 transition-all duration-300  ">
			<div className="flex items-center gap-2 flex-col relative">
				<div className="bg-white text-cyan w-[100px] h-[100px] rounded-full flex items-center justify-center hover:text-darkGrey hover:scale-105 transition-all text-6xl border-4 border-orange ">
					{imgIcon}
				</div>
				<p className="text-white font-bold">{text}</p>
				<div className="w-[100px] h-[200px] bg-orange absolute top-[50px] -z-10"></div>
			</div>
		</div>
	);
};
