import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemSaleCard from "./components/ItemSaleCard/ItemSaleCard";

function App() {
  return (
    <>
      <MantineProvider
        theme={{
          colors: {
            purple: [
              "#F8E5FF",
              "#EAB8FF",
              "#DD8AFF",
              "#CF5CFF",
              "#C22EFF",
              "#B400FF",
              "#9000CC",
              "#6C0099",
              "#480066",
              "#240033",
            ],
          },
        }}
      >
        <Router>
          <NotificationsProvider>
            <NavBar />
            <ItemListContainer
              greeting="Bienvenido a la tienda"
              iconsSize={14}
            />
          </NotificationsProvider>

          <Routes>
            <Route path="/product/:id" element={<ItemSaleCard />}></Route>
          </Routes>
        </Router>
      </MantineProvider>
    </>
  );
}

export default App;
