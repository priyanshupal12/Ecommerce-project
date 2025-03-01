import React from 'react'
import OfferBar from '../components/OfferrBar'
import Hero from '../components/Hero'
import CategorySection from '../components/CategorySection'
import FeaturedProducts from '../components/FeaturedProducts'

function Home() {
    return (
        <>
            <OfferBar />
            <Hero />
            <CategorySection />
            <FeaturedProducts />
        </>
    )
}

export default Home