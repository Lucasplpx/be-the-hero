import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import api from "../../services/api";

import "./styles.css";
import logoImg from "../../assets/logo.svg";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();
    const data = { name, email, whatsapp, city, uf };

    try {
      const resp = await api.post("/ongs", data);
      alert(`Seu ID de acesso ${resp.data.id}`);
      history.push("/");
    } catch (error) {
      alert("Erro no cadastro, tente novamente.");
      console.log("Error handleRegister", error);
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encotrarem
            os casos da sua ONG.
          </p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#e02041" />
            Tenho cadastro
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input
            placeholder="Nome da ONG"
            type="text"
            onChange={e => setName(e.target.value)}
          />
          <input
            placeholder="E-mail"
            type="email"
            onChange={e => setEmail(e.target.value)}
          />
          <input
            placeholder="WhatsApp"
            type="text"
            onChange={e => setWhatsapp(e.target.value)}
          />

          <div className="input-group">
            <input
              placeholder="Cidade"
              type="text"
              onChange={e => setCity(e.target.value)}
            />
            <input
              placeholder="UF"
              style={{ width: 80 }}
              type="text"
              onChange={e => setUf(e.target.value)}
            />
          </div>

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
