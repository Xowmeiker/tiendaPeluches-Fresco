import { CartWidget } from "../CartWidget/CartWidget";
import styled from "styled-components";
import { Button, Menu } from "@mantine/core";
import { RiGameLine } from "react-icons/ri";
import { FaCat } from "react-icons/fa";
import { GiPillow } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

function NavBar() {
    const iconSize = 14;
    let navigate = useNavigate();
  return (
    <>
      <Wrapper dRow>
        <HeaderElement>
          <BrandName onClick={()=>{navigate("/")}}>Stuffed</BrandName>
        </HeaderElement>
        <HeaderElement>
          <CartWidget size={45} />
        </HeaderElement>
      </Wrapper>
      <Wrapper>
        <Menu trigger="hover" openDelay={100} closeDelay={400}>
          <Menu.Target>
            <Button>Categories</Button>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item onClick={()=>navigate("/category/jewelery")} icon={<FaCat size={iconSize} />}>Animales</Menu.Item>
            <Menu.Item onClick={()=>navigate("/category/electronics")} icon={<RiGameLine size={iconSize} />}>
              Personajes
            </Menu.Item>
            <Menu.Item onClick={()=>navigate("/category/men's clothing")} icon={<GiPillow size={iconSize} />}>Almohadas</Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Wrapper>
    </>
  );
}

const background = "#B400FF";

const Wrapper = styled.header`
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  flex-direction: ${(props) => (props.dRow ? "row" : "column")};
  border-bottom: 4px solid ${background};
`;

const HeaderElement = styled.div`
  padding: 0% 10%;
`;

const BrandName = styled.h1`
  color: black;
  font-size: 4vw;
  cursor: pointer;
`;

export default NavBar;
