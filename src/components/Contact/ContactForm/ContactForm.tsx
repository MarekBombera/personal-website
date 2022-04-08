import { Field, ErrorMessage } from 'formik';
import { Error } from '../Error/Error';

export const ContactForm: (props: any) => JSX.Element = ({
	handleSubmit,
	form,
}) => {
	return (
		<form ref={form} onSubmit={handleSubmit} className="contact__form">
			<label htmlFor="user_name">Name</label>
			<Field cl id="user_name" name="user_name" type="text" />
			<ErrorMessage
				name="user_name"
				component={() => <Error message="Name Required" />}
			/>

			<label htmlFor="user_email">Email</label>
			<Field id="user_email" name="user_email" type="text" />
			<ErrorMessage
				name="user_email"
				component={() => <Error message="Email Required" />}
			/>

			<label htmlFor="message">Message</label>
			<Field as="textarea" id="message" name="message" />
			<ErrorMessage
				name="message"
				component={() => <Error message="Message Required" />}
			/>

			<button type="submit">Send</button>
		</form>
	);
};
