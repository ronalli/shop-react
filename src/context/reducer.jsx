export const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'ADD_TO_BASKET': {
      const itemIndex = state.order.findIndex((item) => item.id === payload.id);
      let newOrder = null;
      if (itemIndex < 0) {
        const newItem = {
          ...item,
          quantity: 1,
        };
        newOrder = [...state.order, newItem];
      } else {
        newOrder = state.order.map((el, index) => {
          if (index === itemIndex) {
            return {
              ...el,
              quantity: el.quantity + 1,
            };
          }
        });
      }
      return {
        ...state,
        order: newOrder,
        nameAlert: payload.name,
      };
    }
    case 'DEC_QUANTITY':
      return {
        ...state,
        order: state.order.map((el) => {
          if (el.id === payload.id) {
            let newQuantity = el.quantity - 1;
            return {
              ...el,
              quantity: el.quantity > 0 ? newQuantity : 0,
            };
          }
          return el;
        }),
      };
    case 'INC_QUANTITY':
      return {
        ...state,
        order: state.order.map((el) => {
          if (el.id === payload.id) {
            let newQuantity = el.quantity + 1;
            return {
              ...el,
              quantity: newQuantity,
            };
          }
          return el;
        }),
      };
    case 'HANDLE_BASKET_SHOW':
      return {
        ...state,
        isBasketShow: !state.isBasketShow,
      };
    case 'REMOVE_TO_BASKET':
      return {
        ...state,
        order: state.order.filter((el) => el.id !== payload.id),
      };
    case 'CLOSE_ALERT':
      return {
        ...state,
        nameAlert: '',
      };
    default:
      return state;
  }
};
