import React, { FunctionComponent, ReactElement } from 'react';
import { Flex, Heading, ListItem, UnorderedList, VStack } from '@chakra-ui/react';
import { mainHeading, bulletPoints } from '../../constants/login.json';
import LoginForm from './components/LoginForm';

/**
 * FeatureList
 *
 * @description Component that lists out allof Bickerin's features.
 * @returns {ReactElement} FeatureList Component
 */
function FeaturesList(): ReactElement {
  const FeatureListItem: FunctionComponent = ({ children }) => (
    <ListItem fontFamily="primary" fontSize="3xl" fontWeight="light">
      {children}
    </ListItem>
  );

  return (
    <UnorderedList listStylePosition="inside">
      {bulletPoints.map((bulletText) => (
        <FeatureListItem key={bulletText}>{bulletText}</FeatureListItem>
      ))}
    </UnorderedList>
  );
}

/**
 * Login
 *
 * @description Component that displays a way for a user to type in their username/password or signup.
 * @returns {ReactElement} React Component
 */
function Login(): ReactElement {
  return (
    <Flex bgColor="brand.tertiary-dark" height="100vh">
      <Flex
        justifyContent="center"
        alignItems="center"
        bgColor="brand.secondary-dark"
        height="100vh"
        flexGrow={5}
        flexShrink={6}
        display={['none', 'none', 'none', 'flex']}
        padding="4"
        color="white"
      >
        <VStack spacing="12">
          <Heading variant="regular">{mainHeading}</Heading>
          <FeaturesList />
        </VStack>
      </Flex>
      <Flex justifyContent="center" alignItems="center" bgColor="brand.tertiary-dark" flexGrow={4}>
        <LoginForm />
      </Flex>
    </Flex>
  );
}

export default Login;
