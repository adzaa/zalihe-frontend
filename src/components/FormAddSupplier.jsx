import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormAddSupplier = () => {
  const [name, setName] = useState("");
  const [jib, setJib] = useState("");
  const [broj, setBroj] = useState("");
  const [osoba, setOsoba] = useState("");
  const [email, setEmail] = useState("");
  const [datump, setDatump] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveSupplier = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/suppliers", {
        name: name,
        jib: jib,
        broj: broj,
        osoba: osoba,
        email: email,
        datump: datump,
      });
      navigate("/suppliers");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <h1 className="title">Dobavljači</h1>
      <h2 className="subtitle">Dodaj novog dobavljača</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={saveSupplier}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Naziv Dobavljača</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Naziv Dobavljača"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">JIB</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={jib}
                    onChange={(e) => setJib(e.target.value)}
                    placeholder="JIB"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Broj Telefona</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={broj}
                    onChange={(e) => setBroj(e.target.value)}
                    placeholder="+387"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Kontakt Osoba</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={osoba}
                    onChange={(e) => setOsoba(e.target.value)}
                    placeholder="Kontakt Osoba"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Email Adresa</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Datum Početka</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={datump}
                    onChange={(e) => setDatump(e.target.value)}
                    placeholder="Datum Početka"
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

export default FormAddSupplier;
