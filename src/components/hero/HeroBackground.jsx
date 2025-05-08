import React from 'react';

export const HeroBackground = () => {
	return (
		<div>
			<div className=" inset-shadow-cyanMediumshadow w-[200px] h-[200px] absolute top-0 right-[200px] animate-pulse -z-10  blur-3xl "></div>

			<div className="w-[200px] h-[200px] absolute top-0 right-[0px] animate-pulse -z-10   blur-3xl inset-shadow-orangeMediumshadow"></div>

			<div className=" inset-shadow-cyanMediumshadow w-[200px] h-[200px] absolute left-0 top-[150px] animate-pulse -z-10  blur-3xl "></div>

			<div className="w-[200px] h-[200px] absolute left-0 top-[400px] animate-pulse -z-10   blur-3xl inset-shadow-orangeMediumshadow"></div>
		</div>
	);
};
