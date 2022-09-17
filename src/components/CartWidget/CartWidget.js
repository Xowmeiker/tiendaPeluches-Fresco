import { AiOutlineShoppingCart } from 'react-icons/ai';
import { IconContext } from "react-icons";
import { context } from '../CustomProvider/CustomProvider';
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";

export const CartWidget = (props) => {
    const {getTotalofElementsIn} = useContext(context)
    const navigate = useNavigate()
      
    return (
        <IconContext.Provider value={{ size: props.size?props.size:30 }}>
        <AiOutlineShoppingCart onClick={()=>{navigate(`/cart`)}}></AiOutlineShoppingCart>
        {getTotalofElementsIn()}
        </IconContext.Provider>
        )
}