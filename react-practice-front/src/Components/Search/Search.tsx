import React from 'react'
import './Search.css'

type productType = {
    id: number,
    name: string,
    price: number
}


const Search: React.FC<{}> = () => {

    const [ filter, setFilter ] = React.useState("");

    const products = [
        {id: 1, name: "Laptop", price: 789},
        {id: 2, name: "Monitor", price: 459},
        {id: 3, name: "Mouse", price: 79},
        {id: 4, name: "Headphones", price: 189},
        {id: 5, name: "Keyboard", price: 129},
        {id: 6, name: "Mousepad", price: 29},
        {id: 7, name: "Backpack", price: 89}
    ]

    const handleSearchFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(event.target.value);
    }

    return (
        <>

        <input
            className="search-filter"
            type="text"
            value={filter} 
            placeholder='Search Product'
            onChange={handleSearchFilterChange}
        />

        <table>
            <tr className="table-header">
                <th>Name</th>
                <th>Price</th>
            </tr>
            {products
                .filter(product => product.name.toLowerCase().includes(filter.toLowerCase()))
                .map(product => (
                <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                </tr>   
            ))}

        </table>
        </>
    )


}

export default Search