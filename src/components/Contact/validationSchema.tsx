import * as Yup from 'yup';

export const validationSchema = Yup.object({
	message: Yup.string().required('Required'),
	user_email: Yup.string().email('Email is invalid').required('Required'),
	user_name: Yup.string().required('Required'),
});
