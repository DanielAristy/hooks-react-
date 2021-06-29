import React, { Fragment, useState, useEffect } from 'react';
import './App.css';
const API = 'https://jsonplaceholder.typicode.com/users';

function App() {

  /*
  const users = [
    {name: "Daniel Aristizabal", username: "DanielAristy", email:"danielaristy@gmail.com", telefono: 5484840},
    {name: "Jose Pereza", username: "JosePerez", email:"danielaristy@gmail.com", telefono: 5484840},
  ];*/

  //Api
  // const [users, setUsers] = useState([
  //   {name: "Daniel Aristizabal", username: "DanielAristy", email:"danielaristy@gmail.com", telefono: 5484840},
  //   {name: "Jose Pereza", username: "JosePerez", email:"danielaristy@gmail.com", telefono: 5484840},
  // ])

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(API)
    .then(response => response.json())
    .then(data => setUsers(data))
    .catch(error => console.error(error))
  }, [])

  //Aumentar numero
  const [contador, setContador] = useState(0)

  return (<Fragment>
      <div className="container">
        <h2>Lista de Usuarios</h2>
        <table className="table table-striped table-hover">
          <thead>
            <tr className="table-dark">
              <th scope="col">Nombre</th>
              <th scope="col">UserName</th>
              <th scope="col">Email</th>
              <th scope="col">Teléfono</th>
              <th scope="col">Compañia</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.company.name}</td>
            </tr>
            ))}
          </tbody>
        </table>
        <h2>Contador</h2>
        <p>La cuenta va en {contador}</p>
        <button onClick={() => setContador(contador + 1)}>Sumar</button>
        <button onClick={() => setContador(contador - 1)}>Restar</button>
      </div>
      
    </Fragment>
  );
}

export default App;
