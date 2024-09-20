import { useState } from "react";

function Productos(){

    const [total, setTotal] = useState([]); 
    const [ticket, setTicket] = useState([]);
    const [precio, setPrecio] = useState(0);

    const productes = [
        {
            "id" : 1,
            "nom" : "Plàtan",
            "preu" : 0.5
        },
        {
            "id" : 2,
            "nom" : "Poma",
            "preu": 0.8
        },
        {
            "id" : 3,
            "nom" : "Pinya",
            "preu": 5
        },
        {
            "id" : 4,
            "nom" : "Meló",
            "preu": 6
        },
    ];
    
    return(
        <div>
            {productes.map(e => <div><p>{e.nom + " (" + e.preu + " €/u)"}</p> <button id={e.id} onClick={() => Afegir(e)}>Afegir</button></div>)}
            {ticket.map(e => <div><p>{e}</p></div>)}
            <div><p>Total: {precio} €</p></div>
        </div>
    )

    function Afegir(e){
        setTicket([...ticket, e.nom, e.preu]);
        setTotal(...total, e.preu);
    }

    function Treure(){

    }
}

export default Productos