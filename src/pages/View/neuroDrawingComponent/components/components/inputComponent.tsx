import React from 'react';
import {
  InputPasswordStyled,
  InputStyled,
  InputWrapperStyled,
  SelectStyled,
  TitleStyled,
} from './styled';
import { Select } from 'antd';

interface Props {
  title: string;
  value?: string;
  onChange?: (value: any) => void;
  mandatoryFields?: boolean;
}
const { Option } = Select;

const RequiredFieldIcon: React.FC = () => <span>*</span>;

export const InputComponent: React.FC<Props> = ({
  title,
  value,
  onChange,
  mandatoryFields = true,
}) => {
  const onChangeValue = React.useCallback(e => onChange(e.target.value), []);
  return (
    <InputWrapperStyled>
      <TitleStyled>
        {title}&nbsp;{mandatoryFields && <RequiredFieldIcon />}
      </TitleStyled>
      {title === 'Password' || title === 'Confirm password' ? (
        <InputPasswordStyled value={value} onChange={onChangeValue} />
      ) : title === 'Organization' ? (
        <SelectStyled allowClear defaultValue="DI">
          <Option value="DI">DI</Option>
          <Option value="Luxoft">Luxoft</Option>
        </SelectStyled>
      ) : (
        <InputStyled value={value} onChange={onChangeValue} />
      )}
    </InputWrapperStyled>
  );
};
