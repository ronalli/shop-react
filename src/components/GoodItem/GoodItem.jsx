import './goodItem.css';

const GoodItem = (props) => {
  const { mainId, displayName, displayDescription, displayAssets, price } =
    props;
  return (
    <div className='card'>
      <div className='card-image'>
        <img src={displayAssets[0].background} />
      </div>
      <div className='card-content'>
        <span className='card-title'>{displayName.toLowerCase()}</span>
        <p>{displayDescription}</p>
      </div>
      <div className='card-action'>
        <button className='btn'>Купить</button>
        <span>{price.regularPrice}</span>
      </div>
    </div>
  );
};

export default GoodItem;
