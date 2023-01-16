import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SirovineList = () => {
  const [sirovine, setSirovine] = useState([]);

  useEffect(() => {
    getSirovine();
  }, []);

  const getSirovine = async () => {
    const response = await axios.get("http://localhost:5000/sirovine");
    setSirovine(response.data);
  };

  const deleteSirovina = async (sirovinaId) => {
    await axios.delete(`http://localhost:5000/sirovine/${sirovinaId}`);
    getSirovine();
  };

  return (
    <div>
      <h1 className="title">Sirovine</h1>
      <h2 className="subtitle">Lista Sirovina</h2>
      <Link to="/sirovine/add" className="button is-primary mb-2">
        Dodaj Sirovinu
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>ID</th>
            <th>Naziv Sirovine</th>
            <th>Količina</th>
            <th>Minimalna Količina</th>
            <th>Cijena</th>
            <th>Mjerne Jedinice</th>
            <th>Da li se koristi</th>
            <th>Dobavljač</th>
            <th>Akcija</th>
          </tr>
        </thead>
        <tbody>
          {sirovine.map((sirovina, index) => (
            <tr key={sirovina.uuid}>
              <td>{index + 1}</td>
              <td>{sirovina.name}</td>
              <td>{sirovina.kolicina}</td>
              <td>{sirovina.min_kolicina}</td>
              <td>{sirovina.cijena}</td>
              <td>{sirovina.jedinica_mjere}</td>
              <td>{sirovina.da_li_se_koristi}</td>
              <td>{sirovina.dobavljac_id}</td>

              <td>
                <Link
                  to={`/sirovine/edit/${sirovina.uuid}`}
                  className="button is-small is-info"
                >
                  Ažuriraj
                </Link>
                <button
                  onClick={() => deleteSirovina(sirovina.uuid)}
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

export default SirovineList;
