
//onClick={()=>props.buscarPagina()}

//onClick={this.props.buscarPagina(props.pagina, props.opcion)}

const Boton = (props)=>{

    
    return(
        <div className="opcion">
            <button className="botones">{props.letra}</button>
            <h2>{props.opcion}</h2>

        </div>
    )
}

export default Boton