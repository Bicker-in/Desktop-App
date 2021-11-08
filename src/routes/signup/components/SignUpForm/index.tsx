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

/**
 * <GridItem colSpan={3}>
          <label htmlFor="email">
            <Box>
              <Text>
                Email
                <Text display="inline" color="brand.secondary">
                  *
                </Text>
              </Text>
            </Box>
            <Input
              variant="small"
              placeholder="Email"
              id="email"
              data-testid="emailInput"
              width="70%"
              {...formController.getFieldProps('email')}
            />
            <FormError label="email" formikController={formController} />
          </label>
        </GridItem>
        <GridItem colSpan={2} height="100%">
          <label htmlFor="username">
            <Text>
              Username
              <Text display="inline" color="brand.secondary">
                *
              </Text>
            </Text>
            <Input
              w="80%"
              variant="small"
              placeholder="Username"
              id="username"
              data-testid="usernameInput"
              {...formController.getFieldProps('username')}
            />
            <FormError label="username" formikController={formController} />
          </label>
        </GridItem>
        <GridItem colSpan={2}>
          <label htmlFor="password">
            <Text>
              Password
              <Text display="inline" color="brand.secondary">
                *
              </Text>
            </Text>
            <Input
              w="80%"
              variant="small"
              placeholder="Password"
              id="password"
              {...formController.getFieldProps('password')}
            />
            <FormError label="password" formikController={formController} />
          </label>
        </GridItem>
        <GridItem colSpan={3}>
          <label htmlFor="bio">
            <Text>Bio</Text>
            <Textarea
              resize="none"
              variant="small"
              id="bio"
              {...formController.getFieldProps('bio')}
            />
          </label>
          <FormError label="bio" formikController={formController} />
        </GridItem>
        #TODO: Add Rust Backend for adding Image to app.
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
 */
