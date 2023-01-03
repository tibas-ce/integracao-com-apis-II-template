import axios from "axios";
import React, { useState } from "react";
import { InputCadastro, ContainerCadastro } from "./style";

function AddUsuario(props) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const postNovoUsuario = async () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users`;
    const body = {
      name: nome,
      email,
    };
    const headers = {
      headers: {
        Authorization: "rodrigo-desatinar-carver",
      },
    };
    try {
      const response = await axios.post(url, body, headers);
      alert("usuario criado!");
      props.getUsuarios();
      setEmail("");
      setNome("");
    } catch (error) {
      console.log(error);
    }
  };

  // const postNovoUsuario = () => {
  //   const body = {
  //     name: nome,
  //     email
  //   };
  //   axios
  //     .post(
  //       `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users`,
  //       body,
  //       {
  //         headers: {
  //           Authorization: "rodrigo-desatinar-carver"
  //         }
  //       }
  //     )
  //     .then(() => {
  //       alert("usuario criado!");
  //       props.getUsuarios();
  //       setEmail("");
  //       setNome("");
  //     })
  //     .catch((err) => {
  //       console.log("erro add", err.response);
  //     });
  // };

  return (
    <ContainerCadastro>
      <h3>Cadastrar novo usuario</h3>
      <InputCadastro
        placeholder={"Nome"}
        value={nome}
        onChange={(e) => {
          setNome(e.target.value);
        }}
      />
      <InputCadastro
        type="email"
        placeholder={"E-mail"}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button onClick={postNovoUsuario}>Enviar</button>
    </ContainerCadastro>
  );
}

export default AddUsuario;
