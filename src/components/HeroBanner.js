import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
	return (
		<Box
			sx={{
				mt: { lg: "212px", xs: "70px" },
				ml: { sm: "50px" },
			}}
			position="relative"
			p="20px"
		>
			<Typography color="#FF2625" fontWeight="600" fontSize="26px" mb={7}>
				Fitness Club
			</Typography>
			<Typography
				fontWeight={700}
				sx={{
					fontSize: { lg: "44px", xs: "40px" },
				}}
			>
				Sweat, Smile <br /> and Repeat
			</Typography>
			<Typography fontSize="22px" lineHeight="35px" mt="20px" mb={4}>
				Cheackout the most expensive excercises
			</Typography>
			<Button
				variant="contained"
				color="error"
				href="#excercises"
				mb="20px"
				sx={{
					background: "#FF2625",
					padding: ".8rem",
				}}
			>
				Explore Excercises
			</Button>
			<Typography
				fontWeight={600}
				color="#FF2625"
				fontSize="200px"
				sx={{
					opacity: 0.1,
					display: { lg: "block", sm: "none" },
				}}
			>
				Excercise
			</Typography>
			<img
				src={HeroBannerImage}
				alt="Banner_Img_Illustration"
				className="hero-banner-img"
			/>
		</Box>
	);
};

export default HeroBanner;
