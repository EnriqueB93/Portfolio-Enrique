import React from 'react';
import { AboutImge } from './AboutImge';
import { AboutText } from './AboutText';

export const AboutMain = () => {
	return (
		<div className="flex md:flex-row sm:flex-col gap-12 items-center justify-between px-4 mx-auto max-w-[1200px] my-[100px]">
			<div>
				<AboutText />
			</div>
			<div>
				<AboutImge />
			</div>
		</div>
	);
};
