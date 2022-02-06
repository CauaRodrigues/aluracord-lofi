import { Box, Image, Text } from "@skynexui/components";
import appConfig from "../../../config.json";

const PhotoArea = ({ user: username }) => {
	const defaultProfileImage =
		"https://i.pinimg.com/564x/2c/4b/0e/2c4b0e84ae36cd3524bc4bd2ce671ebf.jpg";

	return (
		<Box
			styleSheet={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				maxWidth: "320px",
				height: "400px",
				padding: "16px",
				margin: "0 12px",
				backgroundColor: appConfig.theme.colors.neutrals[999],
				border: "2px solid",
				borderColor: appConfig.theme.colors.neutrals["000"],
				borderRadius: "10px",
				flex: 1,
			}}
		>
			<Image
				styleSheet={{
					borderRadius: "50%",
					marginBottom: "16px",
				}}
				src={
					username.length > 2
						? `https://github.com/${username}.png`
						: defaultProfileImage
				}
				onError={(err) => {
					err.target.src = `${defaultProfileImage}`;
				}}
			/>

			{username && (
				<Text
					variant="body4"
					styleSheet={{
						color: appConfig.theme.colors.neutrals["full_black"],
						backgroundColor: appConfig.theme.colors.neutrals[200],
						padding: "3px 10px",
						borderRadius: "1000px",
						fontWeight: "700",
					}}
				>
					{username}
				</Text>
			)}
		</Box>
	);
};

export default PhotoArea;
