import React from 'react';

// eslint-disable-next-line no-unused-vars
export const SingleSocial = ({ Icon, link }) => {
	return (
		<div className="text-3xl text-orange border border-orange p-3 rounded-full  hover:opacity-50 transition-all duration-300 items-center justify-center flex">
			<a href={link}>
				<Icon />
			</a>
		</div>
	);
};
