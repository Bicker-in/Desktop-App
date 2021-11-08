import * as Yup from 'yup';

const yupSignUpValidationSchema = Yup.object({
  email: Yup.string().email().max(50, 'Must be 50 characters or less').required('Required'),
  firstName: Yup.string().max(50, 'Must be 50 characters or less').required('Required'),
  lastName: Yup.string().max(50, 'Must be 50 characters or less').required('Required'),
  location: Yup.string()
    .min(5, 'Must be longer than 5 characters')
    .max(50, 'Must be 50 characters or less'),
  occupation: Yup.string().max(50, 'Must be 50 characters or less'),
  username: Yup.string().max(25, 'Must be 25 characters or less').required('Required'),
  password: Yup.string()
    .min(6, 'Must be longer than 5 characters')
    .max(50, 'Must be 50 characters or less')
    .required('Required'),
  bio: Yup.string().max(1000, 'Must be 1000 characters or less'),
});

export { yupSignUpValidationSchema };
