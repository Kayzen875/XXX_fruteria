import { useState } from "react"
import Productos from "./Frutas"

function App() {

  const [usuarios, setUsuarios] = useState([]);

  function consultaDatos(){

    const opciones = {
      method: "GET"
    }

    fetch("https://jsonplaceholder.typicode.com/users", opciones).then(respuesta => respuesta.json()).then(datos => setUsuarios(datos)).then().catch(err => console.log(err));
  }

  return (
    <>
      <h1>Pruebas Fetch</h1>
      <button onClick={consultaDatos}>Pedir datos</button>

      <ul>
        {usuarios.map(usuario => <li>{usuario.name}</li>)}
      </ul>
      
      {/*<Productos />*/}
    </>
  )
}

export default App
