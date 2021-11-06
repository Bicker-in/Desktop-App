import { Box, Button, Heading, HStack, Input, VStack, Text } from '@chakra-ui/react';
import React, { ReactElement } from 'react';
import BickerinIcon from '../../../../components/BickerinIcon';
import Card from '../../../../components/Card';

/**
 * LoginForm
 *
 * @description Component that contains the form for a client to login to their account.
 * @returns {ReactElement} LoginForm Component
 */
function LoginForm(): ReactElement {
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
          <Input variant="small" placeholder="Username" />
          <Input variant="small" placeholder="Password" />
        </VStack>
        <VStack spacing={-0.25}>
          <Button data-testid="login" role="button" variant="solid" size="xl">
            Login &gt;&gt;
          </Button>
          <Text variant="link">or signup...</Text>
        </VStack>
      </VStack>
      <Box fontSize="sm" position="absolute" bottom={3} right={3} color="white">
        Forgot password?
      </Box>
    </Card>
  );
}

export default LoginForm;
