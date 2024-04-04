import { Routes, Route, Navigate } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Error from './pages/Error'
import Details from './pages/Details'
import ProductsUser from './pages/ProductsUser'
import Cart from './pages/Cart'
import { CartProvider } from './components/context/cart'
import User from './pages/User'
import Purchases from './components/user/Purchases'
import Settings from './components/user/Settings'
import Statistics from './components/user/Statistics'
import HomeUser from './components/user/HomeUser'

function App() {

  return (
    <CartProvider>

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:user" element={<ProductsUser />} />
        <Route path="/products/details/:id" element={<Details />} />
        <Route path="*" element={<Error />} />
        <Route path="/user" element={<User />}>
          <Route path="/user" element={<Navigate to="/user/home" />} />
          <Route path="home" element={<HomeUser />} />
          <Route path="compras" element={<Purchases />} />
          <Route path="estadisticas" element={<Statistics />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
      <Footer />

    </CartProvider>
  )
}

export default App
