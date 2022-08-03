import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar'
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';

function App() {

  return (
    <>
    <NotificationsProvider>
    <MantineProvider
    theme={{
      colors: {
        'purple': ["#F8E5FF","#EAB8FF","#DD8AFF","#CF5CFF","#C22EFF","#B400FF","#9000CC","#6C0099","#480066","#240033"],
        'lol': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
      },
    }}
  >
      <NavBar/>
      <ItemListContainer greeting="Bienvenido a la tienda" iconsSize={14}/>
      </MantineProvider>
      </NotificationsProvider>
    </>
  );
}

export default App;
