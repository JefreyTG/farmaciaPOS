import React, { useState, useEffect } from 'react';
import './clients.css'; // Importa el archivo de estilos CSS

function Clients() {
  const [clients, setClients] = useState([]);
  const [newClient, setNewClient] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  });

  const loadClients = () => {
    // Realiza una solicitud al backend para obtener la lista de clientes.
    fetch('/api/clients')
      .then((response) => response.json())
      .then((data) => setClients(data))
      .catch((error) => console.error('Error al cargar la lista de clientes:', error));
  }

  const addClient = () => {
    // Realiza una solicitud al backend para agregar un nuevo cliente.
    fetch('/api/clients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newClient),
    })
      .then((response) => response.json())
      .then((data) => {
        setClients([...clients, data]);
        setNewClient({
          name: '',
          email: '',
          phoneNumber: '',
        });
      })
      .catch((error) => console.error('Error al agregar un cliente:', error));
  }

  useEffect(() => {
    loadClients();
  }, []);

  return (
    <div className="clients-container">
      <h1 className="clients-title">Gestión de Clientes</h1>
      <table className="client-list">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo Electrónico</th>
            <th>Número de Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client._id}>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Agregar Cliente</h2>
      <form className="client-form">
        <label>Nombre:
          <input
            type="text"
            name="name"
            value={newClient.name}
            onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
          />
        </label>
        <label>Correo Electrónico:
          <input
            type="text"
            name="email"
            value={newClient.email}
            onChange={(e) => setNewClient({ ...newClient, email: e.target.value })}
          />
        </label>
        <label>Número de Teléfono:
          <input
            type="text"
            name="phoneNumber"
            value={newClient.phoneNumber}
            onChange={(e) => setNewClient({ ...newClient, phoneNumber: e.target.value })}
          />
        </label>
        <button onClick={addClient}>Agregar Cliente</button>
      </form>
    </div>
  );
}

export default Clients;
