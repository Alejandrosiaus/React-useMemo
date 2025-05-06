import React, { useState, useMemo } from "react";

const UserSearch = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([
    { name: "Walter White", description: "Mejor personaje de la ficcion (rompe mal)" },
    { name: "Jesse Pinkman", description: "El Drogadicto de la serie (lo mandan al hospital 78 veces)" },
    { name: "Saul Goodman", description: "Cuentale a Saul" },
    { name: "Hank Schrader", description: "IDK Walt, you have been sus lately" },
  ]);
  

  const [newUser, setNewUser] = useState({ name: "", description: "" });

  const filteredUsers = useMemo(() => {
    console.log("Filtrando usuarios...");
    return users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.description.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, users]);

  const handleAddUser = () => {
    if (newUser.name.trim() && newUser.description.trim()) {
      setUsers([...users, newUser]);
      setNewUser({ name: "", description: "" });
    }
  };

  return (
    <>
      <div className="header">
        <h1>Buscador de Usuarios *Breaking Bad*</h1>
      </div>
      <div className="container">
  

      <input
        type="text"
        placeholder="Buscar..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ display: "block", marginBottom: "1rem", width: "300px" }}
      />

      <h2>Agregar Nuevo Usuario</h2>
      <input
        type="text"
        placeholder="Nombre"
        value={newUser.name}
        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        style={{ marginRight: "0.5rem" }}
      />
      <input
        type="text"
        placeholder="Descripción"
        value={newUser.description}
        onChange={(e) => setNewUser({ ...newUser, description: e.target.value })}
        style={{ marginRight: "0.5rem" }}
      />
      <button onClick={handleAddUser}>Agregar</button>

      <h2>Usuarios encontrados</h2>
      <ul>
        {filteredUsers.map((user, index) => (
          <li key={index}>
            <strong>{user.name}</strong>: {user.description}
          </li>
        ))}
      </ul>
      </div> 
  </>
);
};

export default UserSearch;

