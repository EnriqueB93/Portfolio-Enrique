import React from 'react';

export const ContactForm = () => {
	return (
		<div>
			<form className="flex flex-col gap-4 ">
				<div className="flex flex-col gap-2">
					<input
						className=" border-lightGrey text-white rounded-xl  border p-4 "
						placeholder="Nome"
						type="text"
						required
					/>
				</div>
				<div className="flex flex-col gap-4">
					<input
						className=" border-lightGrey rounded-xl text-white  border p-4 placeholder:pl-1"
						placeholder="Email"
						type="email"
						required
					/>
				</div>
				<div className="flex flex-col gap-4">
					<textarea
						className=" border-lightGrey text-white rounded-xl  border p-2 h-[200px] "
						placeholder="Digite sua menssagem"
						type="text"
						required
					/>
				</div>
				<button
					type="submit"
					className="flex  w-full justify-center items-center  bg-cyan p-4 rounded-xl text-2xl text-white font-semibold hover:bg-darkCyan transition-all duration-300"
				>
					Enviar
				</button>
			</form>
		</div>
	);
};
