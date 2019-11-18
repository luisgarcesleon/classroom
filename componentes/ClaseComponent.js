export default (props)=> (
<div id="clase-container">
            <h2>Clase de {props.nombre}</h2>
     {props.clase.map(item=>{
         return ( <div className="clase-list">
             <img src={item.foto} alt="Profile Photo"/>
             <p>{item.first_name} {item.last_name}</p>
         </div>
         )
     })}
     <style jsx>
         {
            `
            #clase-container {
                perspective: 500px;
            }

            .clase-list {
                display: flex;
                margin-bottom: 10px;
            }
            .clase-list img {
                padding: 3px;
                border: 1px solid #0AF566;
                border-radius: 10px;
            }

            .clase-list p {
                font-size: 12px;
                font-weight: bold;
                font-style: italic;
                margin-left: 12px;
            }

            .clase-list:hover {
                transform: translateX(10px)scale(1);
            }
            `
         }

     </style>
        </div>
    )