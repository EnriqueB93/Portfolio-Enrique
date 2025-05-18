import React from 'react';
import { ContactImg } from './ContactImg';
import { ContactInf } from './ContactInf';
import { ContactSocial } from './ContactSocial';

export const ContactRight = () => {
	return (
		<div className="flex flex-col items-center justify-center gap-12">
			<div>
				<ContactImg />
			</div>
			<div>
				<ContactInf />
			</div>
			<div>
				<ContactSocial />
			</div>
		</div>
	);
};
