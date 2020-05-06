import React from 'react';
import * as s from './styled';
import { InputComponent } from '../neuroDrawingComponent/components/components/inputComponent';
import { useDispatch } from 'react-redux';
import { changeStatusForm, userSubmitRegisterForm } from './reducer/actions';
import { Link } from 'react-router-dom';

const buttonStyle: React.CSSProperties = { marginLeft: '16px' };

const RegisterFormComponent: React.FC = props => {
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState('test@gmail.com');
  const [username, setUsername] = React.useState('Daria1999');
  const [firstName, setFirstName] = React.useState('Daria');
  const [lastName, setLastName] = React.useState('Poprotska');
  const [phoneNumber, setPhoneNumber] = React.useState('0998765432');
  const [organization, setOrganization] = React.useState(null);
  const [password, setPassword] = React.useState('1234567890s');
  const [confirmationPassword, setConfirmationPassword] = React.useState(
    '1234567890s',
  );

  const onChangeEmail = React.useCallback((value: string) => {
    setEmail(value);
  }, []);
  const onChangePassword = React.useCallback((value: string) => {
    setPassword(value);
  }, []);
  const onChangeUserName = React.useCallback((value: string) => {
    setUsername(value);
  }, []);
  const onChangeFirstName = React.useCallback((value: string) => {
    setFirstName(value);
  }, []);
  const onChangeLastName = React.useCallback((value: string) => {
    setLastName(value);
  }, []);
  const onChangePhoneNumber = React.useCallback((value: string) => {
    setPhoneNumber(value);
  }, []);
  const onChangeOrganization = React.useCallback((value: string) => {
    setOrganization(value);
  }, []);
  const onChangeConfirmPassword = React.useCallback((value: string) => {
    setConfirmationPassword(value);
  }, []);

  const onClickSignUp = React.useCallback(
    () => dispatch(changeStatusForm()),
    [],
  );

  const onSubmit = React.useCallback(() => {
    dispatch(
      userSubmitRegisterForm.started({
        username,
        firstName,
        lastName,
        phoneNumber,
        confirmationPassword,
        email,
        organizationId: 0,
        password,
      }),
    );
  }, [
    username,
    firstName,
    lastName,
    phoneNumber,
    confirmationPassword,
    email,
    organization,
    password,
  ]);

  return (
    <s.AuthComponentStyled>
      <s.FormWrapperStyled>
        <s.FormStyled>
          <InputComponent
            title="Email"
            value={email}
            onChange={onChangeEmail}
          />
          <InputComponent
            title="Username"
            value={username}
            onChange={onChangeUserName}
          />
          <InputComponent
            title="First name"
            value={firstName}
            onChange={onChangeFirstName}
          />
          <InputComponent
            title="Last name"
            value={lastName}
            onChange={onChangeLastName}
          />
          <InputComponent
            title="Phone number"
            value={phoneNumber}
            onChange={onChangePhoneNumber}
          />
          <InputComponent
            title="Organization"
            value={organization}
            onChange={onChangePhoneNumber}
            mandatoryFields={false}
          />
          <InputComponent
            title="Password"
            value={password}
            onChange={onChangePassword}
          />
          <InputComponent
            title="Confirm password"
            value={confirmationPassword}
            onChange={onChangeConfirmPassword}
          />
          <s.ButtonBlockStyled>
            <Link to="/">
              <s.ButtonStyled onClick={onClickSignUp}>Back</s.ButtonStyled>
            </Link>
            <s.ButtonStyled
              style={buttonStyle}
              type="primary"
              onClick={onSubmit}
            >
              Sign in
            </s.ButtonStyled>
          </s.ButtonBlockStyled>
        </s.FormStyled>
      </s.FormWrapperStyled>
    </s.AuthComponentStyled>
  );
};

export default React.memo(RegisterFormComponent);
