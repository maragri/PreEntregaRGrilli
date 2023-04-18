const products = [
    {
        id: '1',
        name: 'Proplan puppies',
        price: 500,
        category: 'Alimento Balanceado',
        img: 'alimento.png',
        stock: 30,
        description: 'Alimento para razas pequeñas'
    },
    {
        id: '2',
        name: 'Juguete para mordida',
        price: 500,
        category: 'Accesorios',
        img: 'juguete.png',
        stock: 30,
        description: 'Juguetes caninos'
    }
    {
        id: '3',
        name: 'Pipeta para pulgas',
        price: 500,
        category: 'Higiene y cuidado',
        img:'pulgas.png',
        stock: 30,
        description: 'Pipeta para razas pequeñas'
    }
]
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve {products}
        }, 420)
    })
}