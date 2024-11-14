import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";

const DeleteItem = ({ id }) => {
  const dispatch = useDispatch();
  console.log(id);
  return (
    <Button type="small" onClick={() => dispatch(deleteItem(id))}>
      Delete
    </Button>
  );
};

export default DeleteItem;
