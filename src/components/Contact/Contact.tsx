import { useState, useRef } from 'react';
import { Formik } from 'formik';

import { ContactForm } from './ContactForm/ContactForm';
import { validationSchema } from './validationSchema';
import emailjs from '@emailjs/browser';

export const Contact = (): JSX.Element => {
	const [showMessage, setShowMessage] = useState(false);
	const form = useRef<any>('');

	const handleSubmit = (resetForm: any): void => {
		setShowMessage(true);
		emailjs
			.sendForm(
				process.env.REACT_APP_SERVICE!,
				process.env.REACT_APP_TEMPLATE!,
				form.current,
				process.env.REACT_APP_ID
			)
			.then(resetForm())
			.then(
				(result) => {
					console.log(`Email status - ${result.text}`);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<section className="contact" id="contact">
			<h2 className="contact-heading sectionHeading">
				<span className="underline">Get In Touch</span>
			</h2>
			<p className="contact-text body">
				I'm open to job opportunities where I can contribute, learn and grow.
			</p>
			<Formik
				initialValues={{ user_name: '', user_email: '', message: '' }}
				onSubmit={(values, { resetForm }) => handleSubmit(resetForm)}
				validationSchema={validationSchema}
				component={(formikProps) => (
					<ContactForm {...formikProps} form={form} showMessage={showMessage} />
				)}
			/>
		</section>
	);
};
