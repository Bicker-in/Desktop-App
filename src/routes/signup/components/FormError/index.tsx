import React, { FunctionComponent } from 'react';
import { Text } from '@chakra-ui/react';

interface FormErrorProps {
  label: string;
  formikController: any;
}

/**
 * FormError
 *
 * @param {FormErrorProps} props FormError's props
 * @param {string} props.label The label whose error FormError is showing.
 * @param {string} props.formikController The controller object
 * @returns {FunctionComponent<FormErrorProps>} FormError Component
 */
const FormError: FunctionComponent<FormErrorProps> = ({ label, formikController }) => {
  return formikController.touched[label] && formikController.errors[label] ? (
    <Text data-testid={`${label}Error`} variant="alertFormMessage">
      {formikController.errors[label]}
    </Text>
  ) : null;
};

export default FormError;
