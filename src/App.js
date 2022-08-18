import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemSaleCard from "./components/ItemSaleCard/ItemSaleCard";
import Index from "./components/Index/Index";
import Cart from "./components/Cart/Cart";

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
          </NotificationsProvider>

          <Routes>
            <Route
              path="/"
              element={
                <Index
                  greeting="Bienvenido a la tienda"
                />
              }
            />
            <Route
              path="/category/:categoryId"
              element={
                <ItemListContainer
                  greeting="Bienvenido a la tienda"
                  iconsSize={14}
                />
              }
            />
            <Route path="/item/:id" element={<ItemSaleCard />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </MantineProvider>
    </>
  );
}

export default App;
