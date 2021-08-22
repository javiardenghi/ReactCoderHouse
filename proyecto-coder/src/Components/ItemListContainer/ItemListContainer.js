import React from 'react'

function ItemListContainer({greeting}) {
    console.log(greeting)
    
    return (
        <div>
            <h1>{greeting}</h1>
        </div>
    )
}

export default ItemListContainer
