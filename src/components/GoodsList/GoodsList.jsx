import './goodsList.css';
import GoodItem from '../GoodItem/GoodItem';

const GoodsList = ({ goods, addToBacket }) => {
  if (!goods.length) return <h2>Nothing here</h2>;
  return (
    <div className='goods'>
      {goods.map((item) => {
        return (
          <GoodItem key={item.mainId} {...item} addToBacket={addToBacket} />
        );
      })}
    </div>
  );
};

export default GoodsList;
