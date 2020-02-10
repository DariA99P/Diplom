import React from 'react';
import { connect } from 'react-redux';
import { Card, Button } from 'antd';
import { testAction } from './redux/actions';

interface IProps {
  field: boolean;
  changeFilter: () => void;
}

const Filters: React.FC<IProps> = props => (
  <div>
    <Card>
      <h1>Filters</h1>
      <p>{`${props.field}`}</p>
      <Button onClick={props.changeFilter} />
    </Card>
  </div>
);

const FiltersConnected = connect(
  state => ({
    field: state.filters.testField,
  }),
  {
    changeFilter: testAction,
  },
)(Filters);

export default FiltersConnected;
