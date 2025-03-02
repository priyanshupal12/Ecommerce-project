import React from "react";

const clientLogos = [
	{
		logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-1.png",
		alt: "",
	},
	{
		logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-2.png",
		alt: "",
	},
	{
		logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-3.png",
		alt: "",
	},
	{
		logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-4.png",
		alt: "",
	},
	{
		logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-5.png",
		alt: "",
	},
	{
		logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-6.png",
		alt: "",
	},
	{
		logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-7.png",
		alt: "",
	},
	{
		logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-8.png",
		alt: "",
	},
];

const MarqueeLogo = () => {
	return (
		<section className="ezy__clients3 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
			<div className="container px-4 mx-auto">
				<div className="grid grid-cols-1 justify-center mb-8">
					<div className="col-span-1 text-center">
						<h2 className="font-bold text-[25px] lg:text-[35px] leading-none mb-2">
							Meet Our Clients & Partners
						</h2>
					</div>
				</div>
				{/* Marquee Container */}
				<div className="overflow-hidden">
					<div className="flex marquee-wrapper animate-marquee">
						{clientLogos.map((client, i) => (
							<img
								src={client.logo}
								alt={client.alt}
								className="max-h-[50px] h-auto max-w-full px-12 my-8"
								key={i}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default MarqueeLogo;
