import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SingleSocial } from './SingleSocial';

export const ContactSocial = () => {
	return (
		<div className="flex gap-4 items-center justify-center ">
			<SingleSocial link="https://github.com/EnriqueB93" Icon={FaGithub} />
			<SingleSocial
				link="https://www.linkedin.com/in/enrique-jose-blanco/"
				Icon={FaLinkedin}
			/>
		</div>
	);
};
