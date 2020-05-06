import React from 'react';
import * as s from './styled';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { changeStatusForm, userLogsIn } from './reducer/actions';
import { InputComponent } from '../neuroDrawingComponent/components/components/inputComponent';
import { Link } from 'react-router-dom';
import { IAuthUserSchema } from '../../Models/interfaces';

const buttonStyle: React.CSSProperties = { marginLeft: '16px' };

const AuthComponent: React.FC = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, watch, setValue } = useForm<
    IAuthUserSchema
  >();
  const values = watch();
  const onSubmit = React.useCallback(() => {
    dispatch(userLogsIn.started(values));
  }, [values]);

  React.useEffect(() => {
    setValue('email', null);
    setValue('password', null);
  }, []);
  React.useEffect(() => {
    register(
      { name: 'email' },
      {
        validate: {
          required: () => true,
        },
      },
    );
    register(
      { name: 'password' },
      {
        validate: {
          required: () => true,
        },
      },
    );
  }, [register]);
  const onChangeEmail = React.useCallback((value: string) => {
    setValue('email', value);
  }, []);
  const onChangePassword = React.useCallback((value: string) => {
    setValue('password', value);
  }, []);

  const onClickSignUp = React.useCallback(
    () => dispatch(changeStatusForm()),
    [],
  );
  return (
    <s.AuthComponentStyled>
      <s.FormWrapperStyled>
        <form onSubmit={handleSubmit(onSubmit)}>
          <s.FormStyled>
            <InputComponent
              title="Email"
              value={values.email}
              onChange={onChangeEmail}
            />
            <InputComponent
              title="Password"
              value={values.password}
              onChange={onChangePassword}
            />
            <s.ButtonBlockStyled>
              <Link to="/register">
                <s.ButtonStyled onClick={onClickSignUp}>Sign up</s.ButtonStyled>
              </Link>
              <s.ButtonStyled
                style={buttonStyle}
                type="primary"
                htmlType="submit"
              >
                Login
              </s.ButtonStyled>
            </s.ButtonBlockStyled>
          </s.FormStyled>
        </form>
      </s.FormWrapperStyled>
    </s.AuthComponentStyled>
  );
};

export default React.memo(AuthComponent);
