import React from "react";
import NavBar from "../../components/navbarcomponent/NavBar";
import "../buscador/buscador.css";
import { useState, useEffect } from "react";
import dataTop20 from "../../components/dataTop20";
import InputComponent from "../../components/input/input";
import lupa from '../../assets//icons/lupa.png';
import { Link } from 'react-router-dom';


function Buscador() {
  const [top20, setTop20] = useState([]);
  let imgOnClick = '';
  const [dataTop20Todos, setdataTop20Todos] = useState(dataTop20);
  let bgcolor = "";
  
  const mostrarTodo = async () => {
    /* setdataTop20Todos(dataTop20); */
    const myHeaders = new Headers();
    myHeaders.append("Authorization", localStorage.getItem("token"));
    myHeaders.append("Content-Type", "application/json");

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};
try {const response = await fetch("http://localhost:8000/api/top20", requestOptions).then(response =>{return response});
console.log(response)
if (response.ok) {
  const respuesta = await response.json();
  setTop20(respuesta.musica);
  console.log(respuesta)
} else {
  alert("Ocurrio un error del lado del cliente");
}
} catch (error) {
alert(error.message);
}
  };
  useEffect(() => {
    mostrarTodo();
  }, []);
  
  return (
    
    <div className="titulo">
      <section className="buscadorTop">
        <h1 className="buscadorTitulo">Buscador</h1>
        <Link to='/busquedas'>
          <InputComponent bgcolor='buscadorGris' img={lupa} imgOnClick='/busquedas' />
        </Link>
        <h3 className="top20titulo" style={{ display: "inline-block" }}>
          Top 20s
        </h3>
        <hr
          style={{
            display: "inline-block",
            marginLeft: "10px",
            height: "1px",
            width: "240px",
            border: "none",
            backgroundColor: "#E4E6E8",
          }}
        />
      </section>

      <div className="mainBuscador">
      <div>{console.log("1",top20)}
  {top20.map((item) => (
    <div key={item.id}>
      <p>{item.nombre}</p>
      <img src={item.imagen} alt={item.nombre} />
    </div>
  ))}
</div>{console.log("2",dataTop20Todos)}
        {dataTop20Todos.map((data) => (
          <Card key={data.id} data={data} mostrarTodo={mostrarTodo} />
        ))}
      </div>
      <NavBar activeImage={"imagen2"} />
    </div> 
  );
}

function Card(props) {
  const { data, mostrarTodo } = props;

  return (
    <div className="card" onClick={mostrarTodo}>
      <img
        src={data.image}
        alt={data.artista}
        style={{ width: "152px", height: "152px" }}
      />
 
      <h4 className="cancion">{mostrarTodo}</h4>
      <h4 className="artista">{mostrarTodo}</h4>
    </div>
  );
}

export default Buscador;
