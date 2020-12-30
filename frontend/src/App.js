import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Signin from './pages/Signin';
import { useSelector } from 'react-redux';
import Register from './pages/Register';
import StockManage from './pages/StockManage';
import Shipping from './pages/Shipping';
import Payment from './pages/Payment';
import PlaceOrder from './pages/PlaceOrder';
import Order from './pages/Order';
import Profile from './pages/Profile';
import Orders from './pages/Orders';
import About from './pages/About';
import FAQ from './pages/faq';
import Contact from './pages/contact';
import privacy from './pages/privacy';
import ShippingPol from './pages/shippingPol';
import FaveList from './pages/faveList';
import { Sidebar } from './component';
import { SidebarContainer } from './containers/privacy';

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;


  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/" className="title">Soap Shop</Link>
          </div>
          <div className="header-links">
            <a href="cart.html">Cart</a>
            {userInfo ? (
              <Link to="/profile">{userInfo.name}</Link>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <a href="#">Admin</a>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/orders">Orders</Link>
                    <Link to="/stockManage">Products</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
        <aside className="sidebar">
            <Sidebar.Button onClick={closeMenu}>X</Sidebar.Button>
            <Sidebar.Section>
            <Sidebar.Title>Shop by catagory</Sidebar.Title>
            <Sidebar.UL>
                <Sidebar.LI>
                    <Link to="/" >All products</Link>
                </Sidebar.LI>
                <Sidebar.LI>
                    <Link to="/bar" params={{category: "bar"}}>Bars</Link>
                </Sidebar.LI>
                <Sidebar.LI>
                    <Link to="/face" category="face" >Face</Link>
                </Sidebar.LI>
                <Sidebar.LI>
                    <Link to="/bath" category="bath" >Bath</Link>
                </Sidebar.LI>
                <Sidebar.LI>
                    <Link to="/body" category="body" >Body</Link>
                </Sidebar.LI>
                <Sidebar.LI>
                    <Link to="/hair" category="hair" >Hair</Link>
                </Sidebar.LI>
            </Sidebar.UL>
            </Sidebar.Section>
            <Sidebar.Section>
            <Sidebar.Title>About us.</Sidebar.Title>
            <Sidebar.UL>
                <Sidebar.LI>
                    <Link to="/about">About</Link>
                </Sidebar.LI>
                <Sidebar.LI>
                    <Link to="/contact">Contact</Link>
                </Sidebar.LI>
                <Sidebar.LI>
                    <Link to="/faq">FAQ</Link>
                </Sidebar.LI>
                <Sidebar.LI>
                    <Link to="/privacy">Privacy Policy</Link>
                </Sidebar.LI>
                <Sidebar.LI>
                    <Link to="/shippingPolicy">Shipping and Returns</Link>
                </Sidebar.LI>
            </Sidebar.UL>
            </Sidebar.Section>
            <Sidebar.Section>
            <Sidebar.Title>About You.</Sidebar.Title>
            <Sidebar.UL>
                <Sidebar.LI>
                <Link to="/profile">Edit Profile</Link>
                </Sidebar.LI>
            </Sidebar.UL>
            </Sidebar.Section>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/favelist" component={FaveList} />
            <Route path="/about" component={About} />
            <Route path="/faq" component={FAQ} />
            <Route path="/shippingPolicy" component={ShippingPol} />
            <Route path="/privacy" component={privacy} />
            <Route path="/contact" component={Contact} />
            <Route path="/orders" component={Orders} />
            <Route path="/profile" component={Profile} />
            <Route path="/order/:id" component={Order} />
            <Route path="/StockManage" component={StockManage} />
            <Route path="/shipping" component={Shipping} />
            <Route path="/payment" component={Payment} />
            <Route path="/placeorder" component={PlaceOrder} />
            <Route path="/signin" component={Signin} />
            <Route path="/register" component={Register} />
            <Route path="/product/:id" component={Product} />
            <Route path="/cart/:id?" component={Cart} />
            <Route path="/:category" component={Home} />
            <Route exact path="/" component={Home} />
          </div>
        </main>
        <footer className="footer">
          <div className="footer-left">
           <Link to="/faq">FAQ</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/shippingPolicy">Shipping and Returns</Link>
          </div>
          <div className="footer-right">
            <Link to="/contact">Contact</Link>
            <a>Facebook</a>
            <a>Instagram</a>
          </div>
          </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
