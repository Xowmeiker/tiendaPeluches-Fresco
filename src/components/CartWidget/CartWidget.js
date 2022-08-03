import { AiOutlineShoppingCart } from 'react-icons/ai';
import { IconContext } from "react-icons";

export const CartWidget = (props) => {
    return (
        <IconContext.Provider value={{ size: props.size?props.size:30 }}>
        <AiOutlineShoppingCart></AiOutlineShoppingCart>
        </IconContext.Provider>
        )
}