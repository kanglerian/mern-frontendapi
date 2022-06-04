import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductList = () => {

const [products, setProduct] = useState([]);

useEffect(() => {
    getProducts();
}, []);

const getProducts = async () => {
    const response = await axios.get('http://localhost:5000/products');
    // console.log(response.data);
    setProduct(response.data);
}

const deleteProduct = async (id) => {
  await axios.delete(`http://localhost:5000/products/${id}`);
  getProducts();
}

  return (
    <div>
      <Link to="/add" className='button is-primary my-2'>Add New</Link>
      <table className='table is-striped is-fullwidth'>
          <thead>
              <tr>
                <th>No</th>
                <th>Title</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
          </thead>
          <tbody>
              {products.map((product, index) => (
                <tr key={product.id}>
                    <td>{index + 1}</td>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>
                        <Link to={`/edit/${product.id}`} className='button is-small is-info mr-2'>edit</Link>
                        <button onClick={ () => deleteProduct(product.id)} className='button is-small is-danger'>delete</button>
                    </td>
                </tr>
              ))}
          </tbody>
      </table>
    </div>
  );
}

export default ProductList;
