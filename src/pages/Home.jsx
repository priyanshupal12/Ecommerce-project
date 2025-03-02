import React from 'react'
import OfferBar from '../components/OfferrBar'
import Hero from '../components/Hero'
import CategorySection from '../components/CategorySection'
import FeaturedProducts from '../components/FeaturedProducts'
import MarqueeLogo from '../components/MarqueeLogo'
import ComingSoon from '../components/ComingSoon'
import BestSeller from '../components/BestSeller'

function Home() {
    return (
        <>
            <OfferBar />
            <Hero />
            <CategorySection />
            <FeaturedProducts />
            <BestSeller/>
            <ComingSoon/>
            <MarqueeLogo/>
        </>
    )
}

export default Home