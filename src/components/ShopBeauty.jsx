import React from "react";
import {
	faFacebookF,
	faLinkedinIn,
	faTwitter,
	faBehance,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const teamMembers = [
	{
		picture: "https://m.media-amazon.com/images/G/31/img24/Fashion/AF/BAU/Winterflip/Rec/Beauty/Haircare._CB543803854_.png",
		fullName: "",
		// designation: "",
		// bio: "",
		// socialLinks: [
		// 	{ icon: faFacebookF, href: "#" },
		// 	{ icon: faLinkedinIn, href: "#" },
		// 	{ icon: faTwitter, href: "#" },
		// 	{ icon: faBehance, href: "#" },
		// ],
	},
	{
		picture: "https://m.media-amazon.com/images/G/31/img24/Fashion/AF/BAU/Winterflip/Rec/Beauty/makeup._CB543803854_.png",
		fullName: "",
		
	},
	{
		picture: "https://m.media-amazon.com/images/G/31/img24/Fashion/AF/BAU/Winterflip/Rec/Beauty/Luxury_Beauty._CB543803854_.png",
		fullName: "",
		
	},
	{
		picture: "https://m.media-amazon.com/images/G/31/img24/Fashion/AF/BAU/Winterflip/Rec/Beauty/Professional_Beauty._CB543803854_.png",
		fullName: "",
		
	},
];

const TeamMemberItem = ({ member }) => (
	<>
		<img
			src={member.picture}
			alt={member.fullName}
			className="max-w-full h-auto rounded-full mx-auto"
			width="230"
		/>
		<div className="px-4 py-6 xl:px-6">
			<h4 className="text-2xl font-medium mb-2">{member.fullName}</h4>
			{/* <h6 className="font-medium">{member.designation}</h6> */}
			{/* <p className="opacity-50 mb-0">{member.bio}</p> */}
			{/* <div className="mt-6">
				{member.socialLinks.map((link, i) => (
					<a
						href={link.href}
						className="inline-block opacity-60 transition duration-300 hover:translate-y-1 hover:opacity-100 mr-4"
						key={i}
					>
						<FontAwesomeIcon icon={link.icon} />
					</a>
				))}
			</div> */}
		</div>
	</>
);

TeamMemberItem.propTypes = {
	member: PropTypes.object.isRequired,
};

const ShopBeauty = () => {
	return (
		<section className="ezy__team2 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
			<div className="container px-4 mx-auto">
				<div className="flex justify-center mb-6 md:mb-12">
					<div className="sm:max-w-md text-center">
						<h2 className="text-3xl leading-none font-bold md:text-[45px] mb-4">
							Body Care
						</h2>
					</div>
				</div>
				<div className="grid grid-cols-4 gap-6 text-center">
					{teamMembers.map((member, i) => (
						<div className="col-span-4 md:col-span-2 lg:col-span-1" key={i}>
							<TeamMemberItem member={member} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ShopBeauty;