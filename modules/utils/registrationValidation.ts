import * as Yup from 'yup';

export const registrationValidation = Yup.object({
  firstName: Yup.string()
    .required('First name is required')
    .min(2, 'First name must be at least 2 characters'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().required('Email is required').email('Email is not valid'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
});
