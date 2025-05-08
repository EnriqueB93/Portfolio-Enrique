import React from 'react';
import ImgAbout from '../../assets/about-me.jpg';

export const AboutImge = () => {
	return (
		<div className="relative h-[500px] w-[300px] ">
			<div className="h-[500px] w-[300px] rounded-[100px] absolute overflow-hidden">
				<img
					src={ImgAbout}
					alt="image about section"
					className="h-full w-auto object-cover"
				/>
			</div>
			<div className="bg-orange h-[500px] w-[250px] absolute left-[-30px] bottom-[-30px]  rounded-bl-[120px] -z-10 rounded-tl-[20px] rounded-br-[20px]"></div>
		</div>
	);
};
