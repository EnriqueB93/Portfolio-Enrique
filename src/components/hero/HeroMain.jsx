import React from 'react';
import { HeroPic } from './HeroPic';
import { HeroText } from './HeroText';

export const HeroMain = () => {
	return (
		<div className="pt-40 pb-20 ">
			<div className="flex md:flex-row px-4 sm:flex-col max-w-[1200px] mx-auto relative  justify-between items-center">
				<HeroText />
				<HeroPic />
			</div>
		</div>
	);
};
