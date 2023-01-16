import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/products");
    setProducts(response.data);
  };

  const deleteProduct = async (productId) => {
    await axios.delete(`http://localhost:5000/products/${productId}`);
    getProducts();
  };

  return (
    <div>
      <h1 className="title">Proizvodi</h1>
      <h2 className="subtitle">Lista Proizvoda</h2>
      <Link to="/products/add" className="button is-primary mb-2">
        Dodaj Novi
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>ID</th>
            <th>Ime Proizvoda</th>
            <th>Cijena</th>
            <th>Stavio</th>
            <th>Akcija</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.uuid}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.user.name}</td>
              <td>
                <Link
                  to={`/products/edit/${product.uuid}`}
                  className="button is-small is-info"
                >
                  Ažuriraj
                </Link>
                <button
                  onClick={() => deleteProduct(product.uuid)}
                  className="button is-small is-danger"
                >
                  Izbriši
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
