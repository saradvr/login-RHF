import { useState } from "react";
import { FormField } from "../formField";
import "./styles.css";
export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Envió");
    const infoRegister = {
      name,
      email,
      password,
    };
    console.log(infoRegister);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <FormField
        id="name"
        placeholder="Nombre de la empresa"
        label="Nombre de usuario"
        value={name}
        handleChange={(e) => setName(e.target.value)}
      />
      <FormField
        id="email"
        placeholder="correo@email.com"
        label="Correo"
        type="email"
        value={email}
        handleChange={(e) => setEmail(e.target.value)}
      />
      <FormField
        id="password"
        placeholder="******"
        label="Contraseña"
        type="password"
        value={password}
        handleChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Registrarme</button>
    </form>
  );
};
