import Link from 'next/Link'

const links = [
    { url: "/", nombre: "Home", },
    { url: "/calc", nombre: "Calculadora", },
]
export default()=>(
  <nav>
    <div className="nav-wrapper">
      <Link href="/"><a className="brand-logo">ClassRoom</a></Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
          {
              links.map(link=>{
                return (
                    <li key={link.url}>
                        <Link href={link.url}><a>{link.nombre}</a></Link>
                    </li>)
            })
          }
      </ul>
    </div>
  </nav>
        
)