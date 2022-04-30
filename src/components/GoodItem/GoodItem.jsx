import { useContext } from 'react';
import { ShopContext } from '../../context/context';
import './goodItem.css';

const GoodItem = (props) => {
  const {
    mainId: id,
    displayName: name,
    displayDescription: description,
    displayAssets: image,
    price,
  } = props;

  // console.log(image);

  const { addToBacket } = useContext(ShopContext);

  return (
    <div className='card'>
      <div className='card-image'>
        <img src={image[0].full_background} alt={name.toLowerCase()} />
      </div>
      <div className='card-content'>
        <span className='card-title'>{name.toLowerCase()}</span>
        <p>{description}</p>
      </div>
      <div className='card-action'>
        <button
          className='btn'
          onClick={() =>
            addToBacket({
              id,
              name,
              price,
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
