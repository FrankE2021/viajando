import { useContext } from "react"
import Context from "../contexto/Context"
import types from "../contexto/types"
import "./miviaje.css"
import { Link } from "react-router-dom"


const Miviaje = () => {
    const {contratacion,dispatch2,referencia,sumaTotal,setSumaTotal}=useContext(Context)
  return (
    <>
    <section className="ruta">
        <h3>Lugares a Visitar:</h3>
        {(contratacion.length<1) &&
        <div className="aviso">
          Todavia no has contratado ninguna actividad.<br/>
          Haz clic en {<Link to={'/cp'}>Capital y Patagonia </Link>}
          o {<Link to={'/no'}>Norte y Este</Link>} para ver nuestras ofertas.
        </div>}

        {contratacion.map(mapa=>
            <div key={mapa.sitio}>
                <button className="boton anularRuta" onClick={
                  ()=>{
                    setSumaTotal(sumaTotal-mapa.precio)
                    dispatch2({
                      type:types.anular,
                      payload:{nombre:mapa.sitio}
                    })
                  }
                }>Anular</button>
                {mapa.sitio} ({mapa.precio})
            </div>)}
            <h3>Total a Pagar: {sumaTotal}$</h3>
            <h3>Referencia: {referencia}</h3>
    </section>
    </>
  )
}

export default Miviaje
