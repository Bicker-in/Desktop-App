import React, { FunctionComponent, ReactElement } from 'react';
import { Box, GridItem, Input, Text, Textarea } from '@chakra-ui/react';
import FormError from '../FormError';
import { FormInputProps as FormInputType } from '../types.d';

interface FormInputProps extends FormInputType {
  formController: any;
}

/**
 * FormInput
 *
 * @param {FormInputProps} props FormInput's props
 * @param {any} props.formController The formik controller.
 * @param {string} props.label The label for the form input.
 * @param {number} props.colSpan The number of columns that the Form item takes up.
 * @description Component that is inidividual form input.
 * @returns {ReactElement} FormInput Component
 */
const FormInput: FunctionComponent<FormInputProps> = ({
  formController,
  label,
  title,
  colSpan,
  isInput,
  isRequired,
}) => {
  return (
    <GridItem colSpan={colSpan} h={['20', '24', '24']}>
      <label htmlFor={label}>
        <Box>
          <Text>
            {title}
            {isRequired && (
              <Text as="span" display="inline" color="brand.secondary">
                *
              </Text>
            )}
          </Text>
        </Box>
        {isInput ? (
          <Input
            variant="small"
            placeholder={title}
            id={label}
            data-testid={`${label}Input`}
            width="90%"
            {...formController.getFieldProps(label)}
          />
        ) : (
          <Textarea
            resize="none"
            variant="small"
            id={label}
            data-testid={`${label}Input`}
            {...formController.getFieldProps(label)}
          />
        )}
        <FormError label={label} formikController={formController} />
      </label>
    </GridItem>
  );
};

export default FormInput;
