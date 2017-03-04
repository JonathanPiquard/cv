
import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';

import styles from './styles.scss';
const randomColor = (colors) => colors[ Math.floor(Math.random() * colors.length) ];

class Badge extends Component {

  render() {
    const {
      children,
      details,
      backgroundColor = randomColor(['#95b495', '#79BD9A', '#83AF9B', '#75A58B', '#428888', '#529897', '#50a293', '#3a8174'])
    } = this.props;

    return (details === undefined) ?
      <span className='badge' style={{backgroundColor}}>{children}</span>
    :
      (<span className='badge' style={{backgroundColor}}>
        <a href={details.website} data-tip={details.description}>
          {children}
        </a>
        <ReactTooltip className='tooltip' effect='solid' multiline={true} />
      </span>);
  }
}

export default Badge
