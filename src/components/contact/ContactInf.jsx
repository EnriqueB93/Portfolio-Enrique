import React from 'react';
import { BsTelephone } from 'react-icons/bs';
import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlineEmail } from 'react-icons/md';
import { SingleInf } from './SingleInf';

export const ContactInf = () => {
	return (
		<div className="flex flex-col gap-4 ">
			<SingleInf text="enriquejblancob93@gmail.com" Image={MdOutlineEmail} />
			<SingleInf text="+55 (48) 99665-3016" Image={BsTelephone} />
			<SingleInf text="Florianopolis, SC, Brasil" Image={IoLocationOutline} />
		</div>
	);
};
