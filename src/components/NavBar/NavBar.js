import { CartWidget } from "../CartWidget/CartWidget";
import { Button, Menu } from "@mantine/core";
import { RiGameLine } from "react-icons/ri";
import { FaCat } from "react-icons/fa";
import { GiPillow } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import styles from "./NavBar.module.scss"
import "../commonStyles/_styles.scss" 


function NavBar() {
    const iconSize = 14;
    let navigate = useNavigate();
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.headerElement}>
          <div className={styles.brandName} onClick={()=>{navigate("/")}}>Stuffed</div>
        </div>
        <div className={styles.headerElement}>
          <CartWidget size={45} />
        </div>
      </div>
      <div className="containerColumn">
        <Menu trigger="hover" openDelay={100} closeDelay={400}>
          <Menu.Target>
            <Button>Categorias</Button>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item onClick={()=>navigate("/category/animal")} icon={<FaCat size={iconSize} />}>Animales</Menu.Item>
            <Menu.Item onClick={()=>navigate("/category/character")} icon={<RiGameLine size={iconSize} />}>
              Personajes
            </Menu.Item>
            <Menu.Item onClick={()=>navigate("/category/pillow")} icon={<GiPillow size={iconSize} />}>Almohadas</Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </div>
    </>
  );
}

export default NavBar;
