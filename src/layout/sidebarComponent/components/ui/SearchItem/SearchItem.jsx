import React from 'react';
import { PropTypes } from 'prop-types';
import {
  Row,
  Input,
} from 'antd';

import styles from './styles.css';

const SearchItem = ({ query, onSearch }) => (
  <div>
    <Row type="flex" justify="space-around" className="search-row">
      <Input.Search
        className={styles.antSearch}
        value={query}
        onChange={e => onSearch(e.target.value)}
      />
    </Row>
  </div>
);

SearchItem.propTypes = {
  onSearch: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};

export default SearchItem;
