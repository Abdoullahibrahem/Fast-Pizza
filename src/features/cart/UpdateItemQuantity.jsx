/* eslint-disable no-unused-vars */

import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { deceaseItemQuantity, inceaseItemQuantity } from './cartSlice';

/* eslint-disable react/prop-types */
function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(deceaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span className="text-sm font-semibold">{currentQuantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(inceaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
