import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

const UpdateItemQuantity = ({ pizzaId, quantity }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-2 md:gap-3 items-center">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <p className="text-1xl font-semibold">{quantity}</p>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
};

export default UpdateItemQuantity;
