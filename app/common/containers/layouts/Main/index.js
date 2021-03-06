import React from 'react';

import withStyles from 'nebo15-isomorphic-style-loader/lib/withStyles';

import Icon from '@components/Icon';
import Aside from 'containers/blocks/Aside';

import styles from './styles.scss';

@withStyles(styles)
export default class App extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className={styles.main}>
        <main>
          <Aside />
          <div className={styles.content}>
            { children }
          </div>
        </main>
        <footer className={styles.footer}>
          <a href="http://nebo15.com" rel="noopener noreferrer" target="_blank">
            <Icon name="nebo15" />
          </a>
        </footer>
      </div>
    );
  }
}
