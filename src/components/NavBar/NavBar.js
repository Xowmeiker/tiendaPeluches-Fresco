import { CartWidget } from "../CartWidget/CartWidget";
import styled from 'styled-components';
import { Button } from '@mantine/core';


function NavBar() {
    
    return (
        <Wrapper>
            <Menu>
                <StyledList>
                <StyledButton color="dark" radius="xs" size="md">
                Animales
                </StyledButton>
                <StyledButton color="dark" radius="xs" size="md">
                Personajes
                </StyledButton>
                <StyledButton color="dark" radius="xs" size="md">
                Almohadas
                </StyledButton>
                </StyledList>
            </Menu>
            <BrandName>Stuffed</BrandName>
            <CartWidget></CartWidget>
        </Wrapper>
    );
}


const Wrapper = styled.header`
    color: indigo;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: darkgray;
`

const BrandName = styled.h1`

`

const Menu = styled.nav`

`

const StyledList = styled.ul`
text-decoration: none;
list-style-type: none;
`

const StyledButton = styled(Button)`
    margin: 5px;
`

export default NavBar;