import { useEffect } from 'react';
import './alert.css';

const Alert = (props) => {
  const { name, closeAlert } = props;

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);
    return () => clearTimeout(timerId);
  }, [name]);

  return (
    <div id='toast-container'>
      <div className='toast'>{name} добавлен в корзину</div>
    </div>
  );
};

export default Alert;
