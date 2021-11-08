import React, { ReactElement } from 'react';
import { Grid, GridItem, Text, Button, Flex, Box } from '@chakra-ui/react';
import { useFormik } from 'formik';
import FormInput from '../FormInput';
import { FormInputProps } from '../types.d';
import { yupSignUpValidationSchema } from '../../validation/signUpForm';
import Form from '../../../../components/Form';
import './style.css';

const formItems: Array<FormInputProps> = [
  {
    label: 'email',
    title: 'Email',
    colSpan: 3,
    isInput: true,
    isRequired: true,
  },
  {
    label: 'username',
    title: 'Username',
    colSpan: 2,
    isInput: true,
    isRequired: true,
  },
  {
    label: 'password',
    title: 'Password',
    colSpan: 2,
    isInput: true,
    isRequired: true,
  },
  {
    label: 'firstName',
    title: 'First Name',
    colSpan: 2,
    isInput: true,
    isRequired: true,
  },
  {
    label: 'lastName',
    title: 'Last Name',
    colSpan: 2,
    isInput: true,
    isRequired: true,
  },
  {
    label: 'location',
    title: 'Location',
    colSpan: 3,
    isInput: true,
    isRequired: false,
  },
  {
    label: 'bio',
    title: 'Bio',
    colSpan: 3,
    isInput: false,
    isRequired: false,
  },
];

/**
 * SignUpForm
 *
 * @description Component that contains the form for a client to sign up for an account.
 * @returns {ReactElement} SignUpForm Component
 */
const SignUpForm = (): ReactElement => {
  const formController = useFormik({
    initialValues: {
      email: '',
      username: '',
      firstName: '',
      lastName: '',
      location: '',
      password: '',
      bio: '',
    },
    validationSchema: yupSignUpValidationSchema,
    onSubmit: () => {
      // alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Form handleSubmit={formController.handleSubmit}>
      <Grid
        w="100%"
        templateRows={['repeat(3, 1fr)', 'repeat(3, 1fr)']}
        templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(4, 1fr)']}
        mt="6"
        rowGap={5}
      >
        {formItems.map((formItem) => {
          return <FormInput formController={formController} key={formItem.label} {...formItem} />;
        })}
        <GridItem colSpan={3} pt="4">
          <label htmlFor="avatarImg">
            <Text>Avatar</Text>
            <input
              className="fileUploader"
              placeholder="Password"
              id="avatarImg"
              name="avatarImg"
              type="file"
            />
          </label>
        </GridItem>
      </Grid>
      <Flex w="100%" flexDirection="row" justifyContent="flex-end" alignItems="center">
        <Box>
          <Text>
            Required
            <Text display="inline" color="brand.secondary">
              *
            </Text>
          </Text>
        </Box>
        <Button variant="solid">Submit</Button>
      </Flex>
    </Form>
  );
};

export default SignUpForm;
