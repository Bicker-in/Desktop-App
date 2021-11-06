import React, { ReactElement } from 'react';
import { Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

/**
 * SignUp
 *
 * @description Component that displays SignUp page flow, where a user adds their email, password, username, bio, etc..
 * @returns {ReactElement} React Component
 */
function SignUp(): ReactElement {
  return (
    <Box bgColor="brand.primary-dark" height="100vh">
      <h1>SignUp</h1>
      <Link to="/">
        <h2>Login</h2>
      </Link>
    </Box>
  );
}

export default SignUp;
