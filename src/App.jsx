import './App.css'
import CityIcon  from './assets/manchester-city.svg'
import NorwayIcon from './assets/norway.svg'
import PLIcon from './assets/premier-league.svg'
import StarRegular from './assets/star.svg'
import StarFull from './assets/white-star.svg' 


import Boot from './assets/boot.svg'
import Engine from './assets/engine.svg'
import Hunter from './assets/hunter.svg'
import Hawk from './assets/hawk.svg'
import Marksman from './assets/marksman.svg'
import Anchor from './assets/anchor.svg'
import Pitch from './assets/pitch.png'
import Dots from './assets/dots.png'

import Overview from './assets/overview.svg'
import Reviews from './assets/reviews.svg'
import Similar from './assets/reviews.svg'
import Compare from './assets/compare.svg'
import Comments from './assets/comments.svg'
import Like from './assets/like.svg'
import Dislike from './assets/dislike.svg'

import Aerial from './assets/Ariel.png'
import Power from './assets/Power.png'
import Quick from'./assets/Quick.png'
import Acrobatics from'./assets/Acrobatics.png'
import ShotPower from './assets/ShotPower.png'


import Download from './assets/download.svg'
import FullScreen from './assets/fullscreen.svg'
import Share from './assets/share.svg'


import Graph from './assets/graph.png'

import FUTCard from './assets/playerCard.png'
import fut91 from './assets/fut91.png'
import fut92 from './assets/fut94.png'
import fut94 from './assets/fut94.png'
import fut94Classic from './assets/futt94.png'
import fut98 from './assets/fut98.png'

import Coin from './assets/coin.png'

import Question from './assets/question.svg'

import ArrowDown from './assets/downArr.svg'

import PlayerCard from './components/PlayerCard/PlayerCard'
import Icon from './components/Icons/Icon'

import Xbox from './assets/xbox.svg'
import Trends from './assets/trend.svg'

import FCLogo from './assets/fc24.png'
import Search from './assets/search.svg'
import Sun from './assets/sun.svg'
import Moon from './assets/moon.svg'
import Avatar from './assets/avatar.png'

import PlayerInfoItem from './components/PlayerInfoItem/PlayerInfoItem'

const cardFourIconList = [
  {
    name: 'Basic',
    image : Boot
  },
  {
    name: 'Engine',
    image: Engine
  },
  {
    name : 'Hunter',
    image : Hunter
  },
  {
    name : 'Hawk',
    image : Hawk
  },
  {
    name : 'Marksmam',
    image : Marksman
  },
  {
    name : 'Anchor',
    image : Anchor
  }
]

const playerData = [
  {
    category: 'Pace',
    value: 93,
    stats: [['Acceleration', 85], ['Sprint Speed', 97]],
  },
  {
    category: 'Shooting',
    value: 96,
    stats: [
      ['Positioning', 98],
      ['Finishing', 98],
      ['Shot Power', 96],
      ['Long Shots', 88],
      ['Volleys', 92],
      ['Penalties', 86],
    ],
  },
  {
    category: 'Passing',
    value: 71,
    stats: [
      ['Vision', 77],
      ['Crossing', 49],
      ['FK. Accuracy', 65],
      ['Short Passing', 81],
      ['Long Passing', 55],
      ['Curve', 92],
    ],
  },
  {
    category: 'Dibbling',
    value: 86,
    stats: [['Agility', 80], ['Balance', 76], ['Reactions', 98], ['Ball Control', 86], ['Dribbling', 83], ['Composure', 91]],
  },
  {
    category: 'Defending',
    value: 48,
    stats: [['Interceptions', 45], ['Heading Accuracy', 86], ['Def. Awareness', 40], ['Standing Tackle', 49], ['Sliding Tackle', 42]],
  },
  {
    category: 'Physicaliity',
    value: 92,
    stats: [ ['Jumping', 96], ['Stamina', 79], ['Strength', 96], ['Aggression', 90]],
  },
];

const statsData = [
  {
    name: 'Overview',
    image: Overview
  },
  {
    name: 'Reviews',
    image: Reviews
  },
  {
    name: 'Similar',
    image: Similar
  },
  {
    name: 'Compare',
    image: Compare
  },
  {
    name: 'Comments [50]',
    image: Comments
  }
]

const playerStylesData = [
  {
    name: 'Ariel',
    image: Aerial,
    column: true
  },
  {
    name: 'Power',
    image: Power,
    column: true
  },
  {
    name: 'Quick',
    image: Quick,
    column: true
  },
  {
    name: 'Acrobatics',
    image: Acrobatics,
    column: true
  },
  {
    name: 'Power',
    image: ShotPower,
    column: true
  }
]

const statsDataEnd =[
  {
    name: '850',
    image: Like
  },
  {
    name: '120',
    image: Dislike
  }
]

const playerInfoData = [
  { icon: CityIcon, value: 'Manchester City', label: 'Club' },
  { icon: NorwayIcon, value: 'Norway', label: 'Nation' },
  { icon: PLIcon, value: 'Premier League', label: 'League' },
  { value: 'Mostly lengthy', label: 'AcceleRATE' },
  { label: 'Skill Move', stars: [StarFull, StarFull, StarFull, StarFull, StarRegular] },
  { label: 'Weak foot', stars: [StarFull, StarFull, StarFull, StarRegular, StarRegular] },
  { label: 'Intl. Rep', stars: [StarFull, StarFull, StarFull, StarFull, StarFull] },
  { value: 'Left', label: 'Foot' },
  { value: 'High/Medium', label: 'Att/Def. WR' },
  { value: '195cm | 6\'5\'', label: 'Height' },
  { value: 'RTTK', label: 'Origin' },
  { value: '94 Kg', label: 'Weight' },
  { value: '23 years old', label: 'Age' },
  { value: '67297409', label: 'Club' },
  { value: 'October 06, 2023', label: 'Added' },
];


function App() {

  return (
    <>
      <div className='container'>

        <div className='topBox'>
          
          <img src={FCLogo} alt="FC 24" className='logo' />

          <span className='searchBox'>
            <img src={Search} className='searchIcon'/>
            <input type='search' placeholder='Search for players' />            
          </span>
          
          <nav className='navHeader'>
            <span>Players</span>
            <span>Squad Builder</span>
            <span>SBCs</span>
            <span>Evolutions</span>
            <span>Market</span>
          </nav>

          <span className='modes'>
            <img src={Sun} alt="" />
            <img src={Moon} alt="" />
          </span>

          <span className='avatarContainer'>
            <img src={Avatar} alt="Profile Photo" className='avatar'/>
          </span>
        </div>
   
        <div className='midBox'>
          <div className='playerCard'> 
            
            <img src={FUTCard} className='FUTCard' alt="" />
            
            <div className='cardPoints'>
              <img src={fut91} alt="" />
              <img src={fut92} alt="" />
              <img src={fut94} alt="" />
              <img src={fut94Classic} alt="" />
              <img src={fut98} alt="" />
            </div>
          </div>
          
          <div className='playerPoint'> 

          <span className='playerPointTop'>
            <span className='pointsImagesTop'>
              <img src={Xbox} alt="" />
              <img className='dropDownPoints' src={ArrowDown} alt="" />
            </span>

            <span className='trendScore' >
              <img src={Trends} className='trends'/>
              <span> 136K</span>
            </span>


          
          </span>

          <span>
            <span className='stats'>
              <span className='statsValue'>
                <img src={Coin} className='coinImage' alt="" />
                <span>2,759,000</span>
              </span>
              
              <span className='updateInfo'>Updated 2 mins ago</span>
            </span>
          </span>
          
          <span className='pr'>
            PR: 25%
          </span>
          
          <div className='pr-progress-bar'>
              <div className='pr-progress-bar-fill' style={{ width: '25%' }} />
          </div>
          <span className='prTotal'>
            <span>PR:184,000</span>
            <span>3,550,000</span>
          </span>
          
          </div>
          <div className='playerGraph'> 
          
          <div className='graphHeaders'>
            <span className='graphDays'>
              <span className='topButton activeDay'>Today</span>
              <span>Week</span>
              <span>Month</span>
            </span>

            <span className='graphImages'>
              <img src={Download} alt="" />
              <img src={FullScreen} alt="" />
              <img src={Share} alt="" />
            </span>
          </div>

            <div>
              <img className='graphImage' src={Graph} alt="" />
            </div>
          
          </div>
          <div className='playerStyles'> 
          
          <span className='playerStylesTop'>
            <span>PlayStyles</span>
            <img className='playStylesImage' src={Question} alt="" />
          </span>

          <div className='playerStylesMain' >
            {playerStylesData.map((item, index) => (
                      <div key={index}>
                        <Icon name={item.name} image={item.image} column={item.column}/>
                      </div>
                    ))}
          </div>
          
          </div>
          <div className='statsHeading'> 
          <div className='statsHeadingTop'>
          {statsData.map((item, index) => (
                    <div key={index}>
                      <Icon name={item.name} image={item.image} />
                    </div>
                  ))}
          </div>
          
          <div className='statsHeadingEnd'>
          {statsDataEnd.map((item, index) => (
                    <div key={index}>
                      <Icon name={item.name} image={item.image} />
                    </div>
                  ))}
          </div>
          </div>

        </div>

        <div className='endBox'>

          <div className='endLeft'>

            <div className='topButtons'>
              <span className='topButton'>Info</span>
              <span>Links</span>
            </div>

            <div className='playerInfo'>
              {playerInfoData.map((item, index) => (
                <PlayerInfoItem key={index} item={item} />
              ))}        
            </div>

          </div>
          <div className='endMain'>
            
            
              {playerData.map((player, index) => (
                <div className='cards'>
                <PlayerCard key={index} category={player.category} value={player.value} stats={player.stats} />
                </div>
              ))}
            
            <div className='cardFour'>
                <div className='cardFourBody'>
                  <span className='cardFourHeader'>
                    <span>Chemistry</span>
                    <img src={Dots} alt="" />
                  </span>
                  <img className='pitch' src={Pitch} alt="" />
                </div>

                <div className='iconss'> 
                  {cardFourIconList.map((item, index) => (
                    <div key={index}>
                      <Icon name={item.name} image={item.image} />
                    </div>
                  ))}


                </div>
                <div className='showMore'>
                    <img src={ArrowDown} alt="" />
                    <span> Show More</span>
                </div>
            </div>
            
            
          </div>

        </div>
      </div>
   
    </>
  )
}

export default App
