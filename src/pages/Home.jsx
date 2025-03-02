import React from 'react'
import OfferBar from '../components/OfferrBar'
import Hero from '../components/Hero'
import CategorySection from '../components/CategorySection'
import FeaturedProducts from '../components/FeaturedProducts'
import Testimonials from '../components/Testimonials'
import NewsletterSubscription from '../components/NewsletterSubscription'


function Home() {
    return (
        <>
            <OfferBar />
            <Hero />
            <CategorySection />
            <FeaturedProducts />
            <Testimonials />
            <NewsletterSubscription />           
        </>
    )
}

export default Home;