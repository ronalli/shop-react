import './goodItem.css';

const GoodItem = (props) => {
  const {
    mainId,
    displayName,
    displayDescription,
    displayAssets,
    price,
    addToBacket,
  } = props;

  return (
    <div className='card'>
      <div className='card-image'>
        <img
          src={displayAssets[0].full_background}
          alt={displayName.toLowerCase()}
        />
      </div>
      <div className='card-content'>
        <span className='card-title'>{displayName.toLowerCase()}</span>
        <p>{displayDescription}</p>
      </div>
      <div className='card-action'>
        <button
          className='btn'
          onClick={() =>
            addToBacket({
              id: mainId,
              name: displayName,
              price: price.regularPrice,
            })
          }
        >
          Купить
        </button>
        <span>{price.regularPrice}</span>
      </div>
    </div>
  );
};

export default GoodItem;
