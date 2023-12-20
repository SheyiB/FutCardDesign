const StarRating = ({ stars }) => (
    <span className='playerInfoItemValue star'>
      {stars.map((star, index) => (
        <img key={index} src={star} alt='' />
      ))}
    </span>
  );
  
  const PlayerInfoItem = ({ item }) => (
    <div className='playerInfoItem'>
      {item.stars && <StarRating stars={item.stars} />}
      <span className='playerInfoItemValue'>
        {item.icon && <img src={item.icon} alt='' />}
        <span>{item.value}</span>
      </span>
      <span className='playerInfoItemKey'>{item.label} </span>
    </div>
  );
  
  export default PlayerInfoItem;
  