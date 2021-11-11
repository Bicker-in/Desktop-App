import * as Yup from 'yup';

const yupLoginValidationSchema = Yup.object({
  email: Yup.string().email().max(100, 'Must be 100 characters or less').required('Required'),
  password: Yup.string().max(50, 'Must be 50 characters or less').required('Required'),
});

export { yupLoginValidationSchema };
