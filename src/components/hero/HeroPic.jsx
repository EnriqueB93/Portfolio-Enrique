import React from 'react';
import BgHero from '../../../src/assets/BgHero.png';
import HeroImg from '../../../src/assets/heroImg3.png';

export const HeroPic = () => {
	return (
		<div className="h-full flex items-center justify-center">
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
		</div>
	);
};
