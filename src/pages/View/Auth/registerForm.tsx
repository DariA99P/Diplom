import React from 'react';
import * as s from './styled';
import { InputComponent } from '../neuroDrawingComponent/components/components/inputComponent';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeStatusForm,
  getOrganizationsList,
  userSubmitRegisterForm,
} from './reducer/actions';
import { Link } from 'react-router-dom';

const buttonStyle: React.CSSProperties = { marginLeft: '16px' };

const RegisterFormComponent: React.FC = props => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getOrganizationsList.started());
  }, []);

  const [email, setEmail] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [organizationId, setOrganizationId] = React.useState(null);
  const [password, setPassword] = React.useState('');
  const [confirmationPassword, setConfirmationPassword] = React.useState('');

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
  const onChangeOrganizationId = React.useCallback((value: string) => {
    console.log(value);
    setOrganizationId(value);
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
        organizationId,
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
    organizationId,
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
            value={organizationId}
            onChange={onChangeOrganizationId}
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
