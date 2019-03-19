import React from 'react';
import { Antd } from '@vj/vjcomponentslibrary';

const { Button, Icon } = Antd;

const ButtonWrapper = () => (
  <div>
    <Button type="primary"><Icon type="book" />Save</Button>
  </div>
);

export default ButtonWrapper;
