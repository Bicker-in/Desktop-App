import React, { FormEventHandler, FunctionComponent } from 'react';

interface FormProps {
  handleSubmit?: FormEventHandler<HTMLFormElement>;
}

/**
 * Form
 *
 * @param {FormProps} props Form's props
 * @param {FormEventHandler<HTMLFormElement>} props.handleSubmit Function that to handle submits on the form.
 * @param {React.ReactNode} props.children The children that is the content of the form.
 * @description Component that wraps around Form sections.
 * @returns {FunctionComponent<FormProps>} Form Component
 */
const Form: FunctionComponent<FormProps> = ({ handleSubmit = () => {}, children }) => (
  <form onSubmit={handleSubmit} style={{ width: '100%', height: '80%' }}>
    {children}
  </form>
);

Form.defaultProps = {
  handleSubmit: () => {},
};

export default Form;
