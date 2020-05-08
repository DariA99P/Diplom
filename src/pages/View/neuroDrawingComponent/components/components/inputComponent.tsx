import React from 'react';
import {
  InputPasswordStyled,
  InputStyled,
  InputWrapperStyled,
  SelectStyled,
  TitleStyled,
} from './styled';
import { Select } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../redux';
import { IOrganizations } from '../../../../Models/interfaces';

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
  const organizationsList = useSelector<RootState, IOrganizations[]>(
    state => state.mainPage.organizationsList,
  );
  const onChangeValue = React.useCallback(e => onChange(e.target.value), []);
  const onChangeSelect = React.useCallback(value => onChange(value), []);
  return (
    <InputWrapperStyled>
      <TitleStyled>
        {title}&nbsp;{mandatoryFields && <RequiredFieldIcon />}
      </TitleStyled>
      {title === 'Password' || title === 'Confirm password' ? (
        <InputPasswordStyled value={value} onChange={onChangeValue} />
      ) : title === 'Organization' ? (
        <SelectStyled allowClear onChange={onChangeSelect}>
          {organizationsList.map(item => (
            <Option key={item.id} value={item.id}>
              {item.nameOrganization}
            </Option>
          ))}
        </SelectStyled>
      ) : (
        <InputStyled value={value} onChange={onChangeValue} />
      )}
    </InputWrapperStyled>
  );
};
