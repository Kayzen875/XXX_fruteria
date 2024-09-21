import { useState } from "react";

function Productos() {

    const [total, setTotal] = useState(0);
    const [ticket, setTicket] = useState([]);

    const productes = [
        {
            "id": 1,
            "nom": "Plàtan",
            "preu": 0.5
        },
        {
            "id": 2,
            "nom": "Poma",
            "preu": 0.8
        },
        {
            "id": 3,
            "nom": "Pinya",
            "preu": 5
        },
        {
            "id": 4,
            "nom": "Meló",
            "preu": 6
        },
    ];

    return (
        <div className="gridContainer">
            <div>
                {productes.map(e => <div className="producto" key={e.id}><p>{e.nom + " (" + e.preu + " €/u)"}</p> <span className="button" onClick={() => Afegir(e)}>Afegir</span></div>)}
            </div>
            <div>
                {ticket.map(e => <div className="carrito" key={e.id}><p>{e.nom}</p><p>{e.quantity}u x {e.preu} €/u = {(e.quantity * e.preu).toFixed(2)}</p><span className="button" onClick={() => Treure(e)}>Treure</span></div>)}
                <div className="total"><p style={{marginLeft : "5px"}}>Total: {total.toFixed(2)} €</p></div>
            </div>
        </div>
    )

    function Afegir(e) {

        let updatedTicket;

        if (ticket.find(fruit => fruit.id == e.id)) {
            updatedTicket = ticket.map(fruit => fruit.id == e.id ? { ...fruit, quantity: fruit.quantity + 1 } : fruit);
        }
        else {
            updatedTicket = [...ticket, { ...e, quantity: 1 }];
        }


        setTicket(updatedTicket);
        Calcular(updatedTicket);
    }

    function Treure(e) {

        const filteredTicket = ticket.filter(ticket => ticket.id !== e.id);

        setTicket(filteredTicket);

        Calcular(filteredTicket);
    }

    function Calcular(updatedTicket) {

        setTotal(updatedTicket.reduce((accumulator, fruit) => accumulator + (fruit.preu * fruit.quantity), 0));
    }
}

export default Productos