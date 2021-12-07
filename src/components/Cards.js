import React from 'react'
import CardsItem from './CardsItem'

const Cards = () => {
    return (
        <div className="py-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center my-3">
            <CardsItem />
            <CardsItem />
            <CardsItem />
        </div>
        </div>
    )
}

export default Cards
