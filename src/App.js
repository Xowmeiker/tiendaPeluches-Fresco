import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./components/Index/Index";
import Cart from "./components/Cart/Cart";
import CustomProvider from "./components/CustomProvider/CustomProvider";
import ItemDetailsContainer from "./components/ItemDetailsContainer/ItemDetailsContainer";
import CheckoutForm from "./components/CheckoutForm/CheckoutForm";

function App() {
  return (
    <>
    <CustomProvider>
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
              element={<ItemListContainer
                iconsSize={14}
              />}
            />
            <Route
              path="/category/:categoryId"
              element={
                <ItemListContainer
                  iconsSize={14}
                />
              }
            />
            <Route path="/item/:id" element={<ItemDetailsContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckoutForm />} />
          </Routes>
        </Router>
      </MantineProvider>
      </CustomProvider>
    </>
  );
}

export default App;
