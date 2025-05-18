import React from 'react';

import { ContactLeft } from './ContactLeft';
import { ContactRight } from './ContactRight';

export const ContactMain = () => {
	return (
		<div className="max-w-[1200px] mx-auto ">
			<h2 className="text-center text-cyan text-6xl mt-[100px] ">Contato</h2>
			<div className=" flex sm:flex-col md:flex-row gap-8 mx-auto bg-brown my-12 rounded-2xl p-8">
				<div className="md:max-w-[50%] sm:w-full ">
					<ContactLeft />
				</div>
				<div className="md:max-w-[50%] flex justify-center sm:w-full ">
					<ContactRight />
				</div>
			</div>
		</div>
	);
};
