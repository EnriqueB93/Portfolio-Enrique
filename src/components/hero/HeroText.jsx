import React from 'react';

export const HeroText = () => {
	return (
		<div className="flex flex-col gap-4 h-full md:text-left sm:text-center font-semibold justify-center">
			<h2 className=" lg:text-2xl sm:text-xl uppercase text-cyan-500  ">
				Desenvolvedor Front-End
			</h2>
			<h1 className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-semibold mb-4">
				Enrique Blanco
			</h1>

			<p className=" text-white text-lg mt-4">
				Apaixonado por tecnologia e interfaces modernas. <br /> Em busca da
				minha primeira oportunidade como desenvolvedor <br /> front-end para
				crescer, aprender e contribuir com dedicação.
			</p>
		</div>
	);
};
