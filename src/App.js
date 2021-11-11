import './App.css'
import Header from './Components/Header/Header';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import AuthProvider from './Context/AuthProvider';
import Register from './Components/Register/Register';
import Footer from './Components/Footer/Footer';
import Packages from './Components/Packages/Packages';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Booking from './Components/Booking/Booking';
import Success from './Components/Booking/Success/Success';
import MyOrders from './Components/MyOrders/MyOrders';
import AddNewPackage from './Components/AddNewPackage/AddNewPackage';
import Contact from './Components/Contact/Contact';
import ManageAllOrders from './Components/ManageAllOrders/ManageAllOrders';
import NotFound from './Components/NotFound/NotFound';
import About from './Components/About/About';
import Offers from './Components/Offers/Offers';

function App() {
  return (
    <AuthProvider>
      <div className="app">

        <Router>
          <Header></Header>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/packages">
              <Packages></Packages>
            </Route>
            <Route path="/offers">
              <Offers></Offers>
            </Route>
            <PrivateRoute path="/booking/:packageId">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path="/bookingSuccessful">
              <Success></Success>
            </PrivateRoute>
            <PrivateRoute path="/my-orders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/add-a-new-package">
              <AddNewPackage></AddNewPackage>
            </PrivateRoute>
            <PrivateRoute path="/manage-all-orders">
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route  path="/home">
              <Home></Home>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
        <Footer></Footer>
      </div>
    </AuthProvider>
  );
}

export default App;
