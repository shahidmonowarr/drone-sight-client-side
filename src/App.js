
import './App.css';
import { BrowserRouter, Switch, Route,  } from 'react-router-dom';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import AddProducts from './Pages/AddProducts/AddProducts';
import Products from './Pages/Products/Products';
import AddReview from './Pages/AddReview/AddReview';
import Reviews from './Pages/Reviews/Reviews';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation></Navigation>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route path="/addProducts">
          <AddProducts></AddProducts>
        </Route>
        <Route path="/addReview">
          <AddReview></AddReview>
        </Route>
        <Route path="/products">
          <Products></Products>
        </Route>
        <Route path="/reviews">
          <Reviews></Reviews>
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
