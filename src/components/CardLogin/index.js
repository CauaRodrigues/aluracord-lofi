import { Box } from "@skynexui/components";
import { useState } from "react";
import appConfig from "../../../config.json";
import Form from "../Form";
import PhotoArea from "../PhotoArea";

const CardLogin = () => {
	const [username, setUsername] = useState("");

	const handleUsername = (newUsername) => {
		setUsername(newUsername);
	};

	return (
		<Box
			styleSheet={{
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				flexDirection: {
					xs: "column",
					sm: "row",
				},
				width: "100%",
				maxWidth: "900px",
				height: "max-content",
				borderRadius: "5px",
				padding: "32px",
				margin: "16px",
				boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
				backgroundColor: appConfig.theme.colors.neutrals[999],
			}}
		>
			<Form user={username} changeUser={handleUsername} />

			<PhotoArea user={username} />
		</Box>
	);
};

export default CardLogin;
