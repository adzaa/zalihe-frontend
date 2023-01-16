import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SupplierList = () => {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    getSuppliers();
  }, []);

  const getSuppliers = async () => {
    const response = await axios.get("http://localhost:5000/suppliers");
    setSuppliers(response.data);
  };

  const deleteSupplier = async (supplierId) => {
    await axios.delete(`http://localhost:5000/suppliers/${supplierId}`);
    getSuppliers();
  };

  return (
    <div>
      <h1 className="title">Dobavljači</h1>
      <h2 className="subtitle">Lista Dobavljača</h2>
      <Link to="/suppliers/add" className="button is-primary mb-2">
        Dodaj Dobavljača
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>ID</th>
            <th>Naziv Dobavljača</th>
            <th>JIB</th>
            <th>Broj Telefona</th>
            <th>Kontakt Osoba</th>
            <th>Email Adresa</th>
            <th>Datum Početka</th>
            <th>Akcija</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((supplier, index) => (
            <tr key={supplier.uuid}>
              <td>{index + 1}</td>
              <td>{supplier.name}</td>
              <td>{supplier.jib}</td>
              <td>{supplier.broj}</td>
              <td>{supplier.osoba}</td>
              <td>{supplier.email}</td>
              <td>{supplier.datump}</td>
              <td>
                <Link
                  to={`/suppliers/edit/${supplier.uuid}`}
                  className="button is-small is-info"
                >
                  Ažuriraj
                </Link>
                <button
                  onClick={() => deleteSupplier(supplier.uuid)}
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

export default SupplierList;
