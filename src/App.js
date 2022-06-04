import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from "./components/ProductList.js";
import AddProduct from "./components/AddProduct.js";
import EditProduct from './components/EditProduct.js';

const App = () => {
  return (
    <Router>
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <Routes>
            <Route exact path='/' element={<ProductList/>} />
            <Route path='/add' element={<AddProduct/>} />
            <Route path='/edit/:id' element={<EditProduct/>} />
          </Routes>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
