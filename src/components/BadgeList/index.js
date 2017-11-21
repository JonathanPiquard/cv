
import React, { Component } from 'react';
import Badge from '../Badge';
import technologiesDetails from './technologiesDetails';

import styles from './styles.scss';


const BadgeList = ({badges = [], details = {}, technologies = false}) => (
  <div className='badgeList'>
    {
      badges.map((name, index) => (
        <Badge key={index} details={((technologies) ? technologiesDetails : details)[name]}>{name}</Badge>
      ))
    }
  </div>
);

export default BadgeList
