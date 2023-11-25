const products = [
    {id:'1', name: "Ñoquis tradicionales", category: "ñoquis", price: 1800, stock: 50, description: "Ñoquis tradicionales de papa (1 kg rinde 3 porciones) $1500 x kg/ $800 x medio kilo", img: "/assets/ñoquisTradicionales1.jpeg"},
    {id:'2', name: "Ñoquis rellenos", category: "ñoquis", price: 2500, stock: 50, description: "Ñoquis rellenos de muzarella (1 kg rinde 4 porciones) $2500 por kilo/ $1400 por medio kilo", img: "/assets/ñoquisRellenos1.jpeg"},
    {id:'3', name: "Tallarines al huevo", category: "tallarines", price: 1800, stock: 50, description: "Los más tradicionales Tallarines al huevo, súper rendidores y sabrosos. 1 kg rinde 5/6 porciones", img: "/assets/tallarines1.jpeg"},
    {id:'4', name: "Tallarines de morrón", category: "tallarines", price: 2000, stock: 50, description: "1 kg rinde 5/6 porciones", img: "/assets/tallarines3.jpeg"},
    {id:'5', name: "Sorrentinos de JyQ", category: "sorrentinos", price: 2200, stock: 50, description: "Caja por 2 docenas $2500", img: "/assets/sorrentinos1.jpeg"},
    {id:'6', name: "Sorrentinos de Verdura", category: "sorrentinos", price: 2200, stock: 50, description: "Caja por 2 docenas $2500", img: "/assets/sorrentinos2.jpeg"},
    {id:'7', name: "Raviolones de JyQ", category: "raviolones", price: 1800, stock: 50, description: "Caja por 2 docenas $3000", img: "/assets/raviolones1.jpeg"},
    {id:'8', name: "Raviolones de 4 quesos", category: "raviolones", price: 1800, stock: 50, description: "Caja por 2 docenas $3000", img: "/assets/raviolones2.jpeg"},
    {id:'9', name: "Tapas para empanada", category: "empanadas", price: 600, stock: 50, description: "Tapas de empanadas caseras para freír $500 por docena", img: "/assets/empanada1.jpeg"}
]

export const mFetch = (id) => {
    return new Promise ((res, rej)=>{
        setTimeout(()=>{
            res(id ? products.find(prod => prod.id === id) : products)
        }, 1500)
    })
} 