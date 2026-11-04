import { Routes, Route } from 'react-router-dom';
import ClientLayout from './shared/layout/ClientLayout';
import Home from './pages/Home';
import Items from './pages/Items';
import Forms from './pages/Forms';
import Item from './pages/Item';
import NotFound from './pages/NotFound';
import ItemCheckout from './pages/ItemCheckout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ClientLayout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="items" element={<Items />} />
        <Route path="item/:id" element={<Item />} />
        <Route path="item/:id/checkout" element={<ItemCheckout />} />
        <Route path="forms" element={<Forms />} />
      </Route>


      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
