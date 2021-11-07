import React, { FunctionComponent } from 'react';
import { Button, Input, VStack, Text } from '@chakra-ui/react';
import { useFormik } from 'formik';
import { yupLoginValidationSchema } from '../../validation/loginForm';

const LoginForm: FunctionComponent = () => {
  const formController = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: yupLoginValidationSchema,
    onSubmit: () => {
      // alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formController.handleSubmit}>
      <VStack alignItems="center" spacing={6}>
        <label htmlFor="email">
          <Input
            variant="small"
            placeholder="Email"
            id="email"
            name="email"
            type="text"
            onChange={formController.handleChange}
            onBlur={formController.handleBlur}
            value={formController.values.email}
          />
          {formController.touched.email && formController.errors.email ? (
            <Text variant="alertFormMessage">{formController.errors.email}</Text>
          ) : null}
        </label>
        <Input variant="small" placeholder="Password" />
        <Button type="submit" data-testid="login" role="button" variant="solid" size="xl">
          Login &gt;&gt;
        </Button>
      </VStack>
    </form>
  );
};

export default LoginForm;
