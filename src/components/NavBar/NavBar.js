import { CartWidget } from "../CartWidget/CartWidget";
import styled from 'styled-components';



function NavBar() {
    
    return (
        <Wrapper>
            <HeaderElement>
                <BrandName>Stuffed</BrandName>
            </HeaderElement>
            <HeaderElement>
                <CartWidget size = {45}/>
            </HeaderElement>
        </Wrapper> 
    );
}

const background = "#B400FF";

const Wrapper = styled.header`
    color: black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color:white;
    border-bottom: 4px solid ${background};
`

const HeaderElement = styled.div`
    padding: 0% 10%;
`

const BrandName = styled.h1`
 color: black;
 font-size: 4vw;
`

export default NavBar;