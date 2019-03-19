import React, { Component } from 'react';

import ReactMarkdown from 'react-markdown';

import readme from '../../../../README.md';
import styles from './styles.css';

class Welcome extends Component {
  state = { text: null };

  componentWillMount() {
    fetch(readme).then(res => res.text()).then((text) => {
      this.setState({ text });
    });
  }

  render() {
    const { text } = this.state;

    return (
      <ReactMarkdown className={styles.wrapper} source={text} />
    );
  }
}

export default Welcome;
