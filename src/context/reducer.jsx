export const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_GOODS':
      return {
        ...state,
        goods: payload || [],
        loading: false,
      };
    case 'ADD_TO_BASKET': {
      const itemIndex = state.order.findIndex((item) => item.id === payload.id);
      let newOrder = null;
      if (itemIndex < 0) {
        const newItem = {
          ...payload,
          quantity: 1,
        };
        newOrder = [...state.order, newItem];
      } else {
        newOrder = state.order.map((el, index) => {
          return index === itemIndex
            ? { ...el, quantity: el.quantity + 1 }
            : el;
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
          return el.id === payload.id
            ? { ...el, quantity: el.quantity > 0 ? el.quantity - 1 : 0 }
            : el;
        }),
      };
    case 'INC_QUANTITY':
      return {
        ...state,
        order: state.order.map((el) => {
          return el.id === payload.id
            ? { ...el, quantity: el.quantity + 1 }
            : el;
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
