
import React, { Component } from 'react';
import Badge from '../Badge';

import styles from './styles.scss';


const BadgeList = ({badges = [], details = {}}) => (
  <div className='badgeList'>
    {
      badges.map((name, index) => (
        <Badge key={index} details={details[name]}>{name}</Badge>
      ))
    }
  </div>
);

export default BadgeList
