import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormAddSirovina = () => {
  const [name, setName] = useState("");
  const [kolicina, setKolicina] = useState("");
  const [min_kolicina, setMin_kolicina] = useState("");
  const [cijena, setCijena] = useState("");
  const [jedinica_mjere, setJedinica_mjere] = useState("");
  const [da_li_se_koristi, setDa_li_se_koristi] = useState("");
  const [dobavljac_id, setDobavljac_id] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveSirovina = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/sirovine", {
        name: name,
        kolicina: kolicina,
        min_kolicina: min_kolicina,
        cijena: cijena,
        jedinica_mjere: jedinica_mjere,
        da_li_se_koristi: da_li_se_koristi,
        dobavljac_id: dobavljac_id
      });
      navigate("/sirovine");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <h1 className="title">Sirovine</h1>
      <h2 className="subtitle">Dodaj Sirovnu </h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={saveSirovina}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Naziv Sirovine</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Naziv Sirovine"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Količina</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={kolicina}
                    onChange={(e) => setKolicina(e.target.value)}
                    placeholder="Količina"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Minimalna Količina</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={min_kolicina}
                    onChange={(e) => setMin_kolicina(e.target.value)}
                    placeholder="+387"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Cijena</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={cijena}
                    onChange={(e) => setCijena(e.target.value)}
                    placeholder="Cijena"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Mjerna Jedinica</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={jedinica_mjere}
                    onChange={(e) => setJedinica_mjere(e.target.value)}
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Da li se koristi</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={da_li_se_koristi}
                    onChange={(e) => setDa_li_se_koristi(e.target.value)}
                    placeholder="Da li se koristi"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Dobavljač</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={dobavljac_id}
                    onChange={(e) => setDobavljac_id(e.target.value)}
                    placeholder="Dobavljač"
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Sačuvaj
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAddSirovina;
