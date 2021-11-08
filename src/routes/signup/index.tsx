import React, { ReactElement } from 'react';
import { Flex, Heading, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Icon from '../../components/Icon';
import Card from '../../components/Card';
import SignUpForm from './components/SignUpForm';

/**
 * SignUp
 *
 * @description Component that displays SignUp page flow, where a user adds their email, password, username, bio, etc..
 * @returns {ReactElement} React Component
 */
function SignUp(): ReactElement {
  return (
    <Flex
      my="10"
      bgColor="brand.primary-gray"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
    >
      <Card
        variant="large"
        w={['95%', '90%', '70%']}
        alignItems="flex-start"
        justifyContent="flex-start"
        overflowY="scroll"
        boxShadow="2xl"
      >
        <Flex alignItems="center" pb="md">
          <Link data-testid="Back Button" as={RouterLink} to="/">
            <Icon icon={faArrowLeft} />
          </Link>
          <Heading
            fontSize={['xl', '3xl', '4xl']}
            as="h1"
            variant="regular"
            borderColor="brand.secondary"
            borderBottomWidth={2}
            ml="4"
          >
            User Sign Up
          </Heading>
        </Flex>
        <SignUpForm />
      </Card>
    </Flex>
  );
}

export default SignUp;
