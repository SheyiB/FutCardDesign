import React from 'react';
import './PlayerCard.css';

import ProgressBar from '../ProgressBar/ProgressBar';

const PlayerCard = ({ category, value, stats }) => (
  <div className='cardContainer'>
    <span className='cardTop'>
      <span className='category'>{category}</span>
      <span style={{ color: value > 75 ? 'green' : value >= 50 ? 'yellow' : 'red' }}>{value}</span>
    </span>
    <ProgressBar value={value} />
    <div className='otherCardRatingsContainer'>
      {stats.slice(0).map((stat, index) => (
        <span key={index} className='otherCardRatings'>
          <span className='otherCardRatingsKey'>{stat[0]}</span>
          <span style={{ color: stat[1] > 75 ? 'green' : stat[1] >= 50 ? 'yellow' : 'red' }}>{stat[1]}</span>
        </span>
      ))}
    </div>
  </div>
);

export default PlayerCard;
