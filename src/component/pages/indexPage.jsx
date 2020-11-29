import React from 'react'
import Navbar from '../navbar'
import PrizeContainer from '../prizeContainer'
import ProductContainer from '../productContainer'
import Footer from '../footer'
const indexPage = () => {
    return (
        <div>
            <Navbar />
            <PrizeContainer />
            <ProductContainer />
            <Footer />
        </div>
    )
}

export default indexPage
