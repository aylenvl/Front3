import React, {Component} from "react";
import "./index.css"
import data from "./components/data.json";
import Swal from "sweetalert2"
import Boton from "./components/Boton"


class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      
      historia : data[0].historia,
      opciones : data[0].opciones,
      pagina: 1,

      id: data[0].id,
      datos: data,
      key: data[0].id
    };
    //this.buscarPagina= this.buscarPagina.bind(this)
    

  }

  /*buscarPagina(id, opcion){

    const datatemp = data.filter(f => f.id == ((id +1) + opcion).toString())


    this.setState({
      pagina : paginaActualizada,
      historia : data[1].historia,
      opcionA : data[1].opciones.a,
      opcionB : data[1].opciones.b
    })
  }
  */


  componentWillMount(){
    Swal.fire("Hola","¿Comenzamos a jugar?", "question");

  }

  render(){

    //<Boton pagina={this.state.id} opcion={this.state.opciones.b}/>
    return(
      <div className="App">
        <div className="layout">
          <h1 className="historia">{this.state.historia}</h1>
          <div className="opciones">
            <Boton letra="A"  opcion={this.state.opciones.a}  />
            <Boton letra="B" opcion={this.state.opciones.b}/>
          </div>
          <div className="recordatorio">
            <h3>Selección anterior:</h3>
            <h4>Historial de opciones elegidas:</h4>
            <ul></ul>
          </div>
        </div>
      </div>
    )
  }




}


export default App