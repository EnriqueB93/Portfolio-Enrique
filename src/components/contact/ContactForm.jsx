import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { ToastContainer, Zoom, toast } from 'react-toastify';

export const ContactForm = () => {
	const form = useRef();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const handleName = (e) => {
		setName(e.target.value);
	};
	const handleEmail = (e) => {
		setEmail(e.target.value);
	};
	const handleMessage = (e) => {
		setMessage(e.target.value);
	};

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm('service_7g9atye', 'template_qpvi96a', form.current, {
				publicKey: 'm95gkQZeHvrq417sw',
			})
			.then(
				() => {
					setName('');
					setEmail('');
					setMessage('');
					toast.success('Email enviado con sucesso!', {
						position: 'bottom-left',
						autoClose: 2000,
						hideProgressBar: false,
						closeOnClick: false,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: 'dark',
						transition: Zoom,
					});
				},
				(error) => {
					console.log('FAILED...', error.text);
				},
			);
	};

	return (
		<div>
			<form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 ">
				<div className="flex flex-col gap-2">
					<input
						className=" border-lightGrey text-white rounded-xl outline-0 border p-4 "
						placeholder="Nome"
						type="text"
						name="name"
						value={name}
						onChange={handleName}
						required
					/>
				</div>
				<div className="flex flex-col gap-4">
					<input
						className=" border-lightGrey rounded-xl outline-0 text-white  border p-4 placeholder:pl-1"
						placeholder="Email"
						type="email"
						name="email"
						value={email}
						onChange={handleEmail}
						required
					/>
				</div>
				<div className="flex flex-col gap-4">
					<textarea
						className=" border-lightGrey outline-0 text-white rounded-xl  border p-2 h-[200px] "
						placeholder="Digite sua mensagem"
						type="text"
						name="message"
						value={message}
						onChange={handleMessage}
						required
					/>
				</div>
				<button
					type="submit"
					value="Send"
					className="flex  w-full justify-center items-center  bg-cyan p-4 rounded-xl text-2xl text-white font-semibold hover:bg-darkCyan transition-all duration-300"
				>
					Enviar
				</button>
				<ToastContainer />
			</form>
		</div>
	);
};
