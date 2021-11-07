import React, { ReactElement } from 'react';
import { Grid, GridItem, Input, Textarea, Text, Button, Flex, Box } from '@chakra-ui/react';
import Form from '../../../../components/Form';
import './style.css';

/**
 * SignUpForm
 *
 * @description Component that contains the form for a client to sign up for an account.
 * @returns {ReactElement} SignUpForm Component
 */
const SignUpForm = (): ReactElement => (
  <Form>
    <Grid
      w="100%"
      templateRows={['repeat(3, 1fr)', 'repeat(3, 1fr)']}
      templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(4, 1fr)']}
      mt="6"
    >
      <GridItem colSpan={3}>
        <label htmlFor="email">
          <Box>
            <Text>
              Email
              <Text display="inline" color="brand.secondary">
                *
              </Text>
            </Text>
          </Box>
          <Input variant="small" placeholder="Email" id="email" name="email" width="70%" />
        </label>
      </GridItem>
      <GridItem colSpan={2} height="100%">
        <label htmlFor="username">
          <Text>
            Username{' '}
            <Text display="inline" color="brand.secondary">
              *
            </Text>
          </Text>
          <Input w="80%" variant="small" placeholder="Username" name="username" id="username" />
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
          <Input w="80%" variant="small" placeholder="Password" name="password" id="password" />
        </label>
      </GridItem>
      <GridItem colSpan={3}>
        <label htmlFor="bio">
          <Text>Bio</Text>
          <Textarea resize="none" variant="small" id="bio" name="bio" />
        </label>
      </GridItem>
      {/* #TODO: Add Rust Backend for adding Image to app. */}
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

export default SignUpForm;
