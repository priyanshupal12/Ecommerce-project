import React from "react";
import PropTypes from "prop-types";

const blogs = [
	{
		img: "https://img.freepik.com/premium-photo/trendy-brocade-paper-bag-circular-shape-brocade-color-theme-brocade-fashion-packaging-collections_1020495-394478.jpg?ga=GA1.1.2013911909.1740885931&semt=ais_hybrid",
		title: "",
		price: "$20",
		
	},
	{
		img: "https://img.freepik.com/free-photo/indian-couple-celebrating-propose-day-by-being-romantic-with-each-other_23-2151110946.jpg?ga=GA1.1.2013911909.1740885931&semt=ais_hybrid",
		title: "",
		price: "$10",
		
	},
	{
		img: "https://img.freepik.com/free-photo/close-up-person-wearing-futuristic-sneakers_23-2151005652.jpg?ga=GA1.1.2013911909.1740885931&semt=ais_hybrid",
		title: "",
		price: "$35",
		
	},
        {
            img: "https://img.freepik.com/premium-photo/indian-woman-with-beautiful-smile-wearing-bridal-lengha-bridal-jewellery_143921-479.jpg?ga=GA1.1.2013911909.1740885931&semt=ais_hybrid",
            title: "",
            price: "$20",
           
        },
        {
            img: "https://img.freepik.com/premium-photo/beautiful-woman-wearing-high-fashion-embroidered-dress_743855-70721.jpg?ga=GA1.1.2013911909.1740885931&semt=ais_hybrid",
            title: " ",
            price: "$10",
            
        },
        {
            img: "https://img.freepik.com/premium-photo/man-maroon-jacket-blue-shirt_383949-297.jpg?ga=GA1.1.2013911909.1740885931&semt=ais_hybrid",
            title: "",
            price: "$35",
           
        },
        {
            img: "https://img.freepik.com/free-photo/rococo-style-photography-beautiful-woman_23-2151916511.jpg?ga=GA1.1.2013911909.1740885931&semt=ais_hybrid",
            title: "",
            price: "$25",
            
        },
        {
            img: "https://img.freepik.com/free-photo/rococo-style-photography-beautiful-woman_23-2151916512.jpg?ga=GA1.1.2013911909.1740885931&semt=ais_hybrid",
            title: "",
            price: "$15",
          
        },
        {
            img: "https://img.freepik.com/free-photo/rococo-style-photography-beautiful-woman_23-2151916512.jpg?ga=GA1.1.2013911909.1740885931&semt=ais_hybrid",
            title: "",
            price: "$50",
           
        },
        {
            img: "https://img.freepik.com/premium-photo/there-is-black-suit-with-black-tie-mannequin_901242-102223.jpg?ga=GA1.1.2013911909.1740885931&semt=ais_hybrid",
            title: "",
            price: "$30",
           
        },
        {
            img: "https://img.freepik.com/free-photo/fashion-store-showcases-elegant-black-white-collection-generated-by-ai_188544-19610.jpg?ga=GA1.1.2013911909.1740885931&semt=ais_hybrid",
            title: "",
            price: "$40",
           
        },
        {
            img: "https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Fuploads%2Fgrid%2Fapp%2F444x666-Msite-Trending-Category-Icon-Co-ords-women-1735904628.jpg&w=256&q=75",
            title: "",
            price: "$20",
            
        },
        {
            img: "https://images.bewakoof.com/uploads/grid/app/1x1-tops-women-1738816614.jpg",
            title: "",
            price: "$22",
            
        },
    
];


const BlogItem = ({ item }) => (
  <div className="rounded-lg overflow-hidden mt-6 lg:mt-0 transform transition-all hover:scale-105 hover:shadow-lg">
    <div className="relative marquee"> {/* Apply marquee effect here */}
      <img src={item.img} alt="" className="w-full h-[415px] object-cover" />
      {/* Increased height here */}
      <div className="absolute bottom-0 flex flex-col justify-center items-center w-full text-white px-8 pb-6 text-center bg-gradient-to-t from-black via-transparent to-transparent">
        <h4 className="text-[20px] lg:text-[24px] font-medium">{item.title}</h4>
        <h5 className="text-[18px] font-semibold text-blue-600 my-3">
          {item.price}
        </h5>
        <a
          href="#!"
          className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-white py-2 rounded transition-all duration-300 text-center px-8 mb-3"
        >
          Add To Cart
        </a>
        <a
          href="#!"
          className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-white py-2 rounded transition-all duration-300 text-center px-8 mb-3"
        >
          BUY NOW
        </a>

        <p className="text-base opacity-80">{item.format}</p>
      </div>
    </div>
  </div>
);

BlogItem.propTypes = {
  item: PropTypes.object.isRequired,
};


  
  const BestSeller = () => {
  return (
    <section className="ezy__blog12 light py-14 md:py-24 text-stone-800 bg-gradient-to-r from-gray-300 via-gray-200 to-yellow-100 dark:bg-[#0b1727] dark:text-white overflow-hidden">
      <div className="container px-8 md:px-24">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-9 flex flex-col items-start text-left">
            <h1 className="text-[32px] lg:text-[45px] leading-none font-bold mb-3">
              BESTSELLERS
            </h1>
            <div className="grid grid-cols-12 justify-start">
              <div className="col-span-12 md:col-span-9">
                <p className="text-lg opacity-80 mb-2">
                  Explore our curated collection of top-rated and bestselling
                  products, loved by readers and shoppers worldwide. Each
                  bestseller is carefully selected for its outstanding quality,
                  rave reviews, and lasting impact. Whether you're hunting for
                  the latest trends or seeking timeless classics, our collection
                  has something for every taste and style.
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-12">
            <div className="grid grid-cols-12 gap-x-6 gap-y-6 mt-12">
              {blogs.map((item, i) => (
                <div className="col-span-6 md:col-span-4 lg:col-span-3" key={i}>
                  <BlogItem item={item} />
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-12">
            <div className="text-center mt-12">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white rounded transition px-8 py-3">
                View All
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
