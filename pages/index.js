import ClaseComponent from '../componentes/ClaseComponent'
import Header from '../componentes/comunes/Header'
import {matematicas, ciencias} from '../data/estudiantes'
import BarraTitulo from '../componentes/comunes/BarraTitulo'

export default ()=> (
    <div>
      <Header/>
      <BarraTitulo/>
        <h1 style={{textAlign: "center"}}>Cursos del Plan</h1>
        <div style={{display: "flex", justifyContent: "space-around"}}>
          <ClaseComponent nombre="Matematica" clase={matematicas}/>
        <ClaseComponent nombre="Ciencias" clase={ciencias}/>
        </div>
        
        <style jsx global>
      {
        `body {
          background: #15C5E8;
          color: white;
        }
        `
      }
    </style>

    </div>



)