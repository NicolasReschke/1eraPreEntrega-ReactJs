const products = [
    {id:1, name: "pasta1", category: "sorrentinos", price: 1500, stock: 50, description: "Sorrentinos de algo", img: "/assets/foto1.jpeg"},
    {id:2, name: "pasta2", category: "sorrentinos", price: 1500, stock: 50, description: "Sorrentinos de algo", img: "/assets/foto2.jpeg"},
    {id:3, name: "pasta3", category: "sorrentinos", price: 1500, stock: 50, description: "Sorrentinos de algo", img: "/assets/foto3.jpeg"},
    {id:4, name: "pasta4", category: "sorrentinos", price: 1500, stock: 50, description: "Sorrentinos de algo", img: "/assets/foto1.jpeg"},
    {id:5, name: "pasta5", category: "sorrentinos", price: 1500, stock: 50, description: "Sorrentinos de algo", img: "/assets/foto1.jpeg"},
    {id:6, name: "pasta6", category: "sorrentinos", price: 1500, stock: 50, description: "Sorrentinos de algo", img: "/assets/foto1.jpeg"}
]

export const mFetch = () => {
    return new Promise ((res, rej)=>{
        setTimeout(()=>{
            res(products)
        }, 1500)
    })
} 