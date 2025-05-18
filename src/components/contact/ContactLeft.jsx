import React from 'react';
import { ContactForm } from './ContactForm';
import { ContactText } from './ContactText';

export const ContactLeft = () => {
	return (
		<div>
			<div>
				<ContactText />
			</div>
			<div>
				<ContactForm />
			</div>
		</div>
	);
};
