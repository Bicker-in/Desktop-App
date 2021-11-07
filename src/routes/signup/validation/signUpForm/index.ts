import * as Yup from 'yup';

const yupSignUpValidationSchema = Yup.object({
  email: Yup.string().email().max(100, 'Must be 100 characters or less').required('Required'),
  username: Yup.string().email().max(100, 'Must be 100 characters or less').required('Required'),
  password: Yup.string().max(50, 'Must be 50 characters or less').required('Required'),
  bio: Yup.string().max(1000, 'Must be 1000 characters or less'),
});

export { yupSignUpValidationSchema };
