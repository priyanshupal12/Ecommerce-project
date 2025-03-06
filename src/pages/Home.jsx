import React from 'react'
import OfferBar from '../components/OfferrBar'
import Hero from '../components/Hero'
import CategorySection from '../components/CategorySection'
import FeaturedProducts from '../components/FeaturedProducts'
import MarqueeLogo from '../components/MarqueeLogo'
import ComingSoon from '../Components/ComingSoon'
import BestSeller from '../Components/BestSeller'
import Testimonials from '../components/Testimonials'
import NewsletterSubscription from '../components/NewsletterSubscription'
import SocialMediaGallery from '../components/SocialMediaGallery'
import BrandStory from '../components/BrandStory'
import LatestBlogPosts from '../components/LatestBlogPosts'
// import MaterialUIClockPage from '../components/MaterialUIClockPage'


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
            <Testimonials />
            <NewsletterSubscription />    
            <SocialMediaGallery />  
            <BrandStory />    
            <LatestBlogPosts /> 
            {/* <MaterialUIClockPage /> */}
        </>
    )
}

export default Home;