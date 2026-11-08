import { Routes, Route } from 'react-router-dom';
import ClientLayout from './shared/components/layout/ClientLayout.jsx';
import Home from './pages/Home.jsx';
import Product from './pages/Product.jsx';
import Contact from './pages/Contact.jsx';
import Item from './pages/Item.jsx';
import NotFound from './pages/NotFound.jsx';
import ItemCheckout from './pages/ItemCheckout.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ClientLayout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="items" element={<Product />} />
        <Route path="item/:id" element={<Item />} />
        <Route path="item/:id/checkout" element={<ItemCheckout />} />
        <Route path="contact" element={<Contact />} />
      </Route>

    {/*  Catch-all route for 404 Not Found */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
