import React from 'react';

// eslint-disable-next-line no-unused-vars
export const SingleInf = ({ text, Image }) => {
	return (
		<div className="flex gap-4 items-center text-white">
			<Image className=" text-3xl" />
			<p>{text}</p>
		</div>
	);
};
