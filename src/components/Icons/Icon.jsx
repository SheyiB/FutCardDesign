import './Icon.css'

const Icon = ({ name, image, column }) => {
    return (
      <div className={`iconComponent ${column==true? 'iconColumn' : ''}`}>

        <img className={`iconImage ${column==true? "iconImageSize" : ""}`}src={image} alt="" />
        <span className='iconName'>{name}</span>
        
      </div>
    );
  };
  
  export default Icon;
  