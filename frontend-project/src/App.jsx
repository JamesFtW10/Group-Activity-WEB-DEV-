import { Routes, Route } from 'react-router-dom';
import ClientLayout from './shared/layout/ClientLayout';
import Home from './pages/Home.jsx';
import Items from './pages/Items.jsx';
import Forms from './pages/Forms.jsx';
import Item from './pages/Item.jsx';
import NotFound from './pages/NotFound.jsx';
import ItemCheckout from './pages/ItemCheckout.jsx';

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
