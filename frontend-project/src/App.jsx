import { Routes, Route } from 'react-router-dom';
import ClientLayout from './shared/layout/ClientLayout';
import Home from './pages/home';
import Items from './pages/items';
import Forms from './pages/forms';
import Item from './pages/item';
import NotFound from './pages/notFound';
import ItemCheckout from './pages/itemCheckout';

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
