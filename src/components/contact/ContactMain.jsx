import React from 'react';
import { ContactForm } from './ContactForm';
import { ContactImg } from './ContactImg';
import { ContactInf } from './ContactInf';
import { ContactText } from './ContactText';

export const ContactMain = () => {
	return (
		<div>
			<h2 className="text-center text-cyan text-6xl mt-[100px] ">Contato</h2>
			<div className="max-w-[1200px] mx-auto bg-brown my-12 rounded-2xl p-8">
				<div>
					<ContactText />
					<ContactForm />
				</div>
				<div>
					<ContactImg />
					<ContactInf />
				</div>
			</div>
		</div>
	);
};
