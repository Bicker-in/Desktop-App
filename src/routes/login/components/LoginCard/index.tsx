import React, { ReactElement, useState } from 'react';
import { Button, Heading, HStack, Input, VStack, Text, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import BickerinIcon from '../../../../components/BickerinIcon';
import Card from '../../../../components/Card';
import Loader from '../../../../components/Loader';

/**
 * LoginForm
 *
 * @description Component that contains the form for a client to login to their account.
 * @returns {ReactElement} LoginForm Component
 */
function LoginCard(): ReactElement {
  const [isLoggingIn, setLoggingIn] = useState(false);

  return (
    <Card variant="small">
      <VStack spacing={8}>
        <HStack>
          <BickerinIcon />
          <Heading fontSize="5xl" fontWeight="light">
            Bicker<b>!n</b>
          </Heading>
        </HStack>
        <VStack spacing={5}>
          <Input variant="small" placeholder="Email" type="text" data-testid="emailInput" />
          <Input
            variant="small"
            placeholder="Password"
            type="password"
            data-testid="passwordInput"
          />
        </VStack>
        <VStack spacing={-0.25}>
          <Button
            data-testid="login"
            role="button"
            variant="solid"
            size="xl"
            bgColor={isLoggingIn ? 'brand.primary-gray' : 'brand.secondary'}
            onClick={() => setLoggingIn(true)}
          >
            {isLoggingIn ? (
              <Loader size="sm" width="medium" bgColor="brand.primary-gray" />
            ) : (
              'Login  >>'
            )}
          </Button>
          <Link data-testid="signUpLink" as={RouterLink} to="/signup">
            <Text variant="link">or signup...</Text>
          </Link>
        </VStack>
      </VStack>
      <Text fontSize="sm" position="absolute" bottom={0} right={0} color="white">
        Forgot password?
      </Text>
    </Card>
  );
}

export default LoginCard;
