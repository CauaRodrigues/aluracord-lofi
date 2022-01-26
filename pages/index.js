import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Box, Button, Text, TextField, Image } from "@skynexui/components";
import appConfig from "../config.json";

const Title = (props) => {
	const Tag = props.tag || "h1";
	return (
		<>
			<Tag>{props.children}</Tag>
			<style jsx>{`
				${Tag} {
					color: ${appConfig.theme.colors.neutrals["050"]};
					font-size: 24px;
					font-weight: 600;
				}
			`}</style>
		</>
	);
};

export default function PaginaInicial() {
	const [username, setUsername] = useState("CauaRodrigues");
	const roteamento = useRouter();

	return (
		<>
			<Box
				styleSheet={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					backgroundImage:
						"url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp3826700.jpg&f=1&nofb=1)",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					backgroundBlendMode: "multiply",
				}}
			>
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
						maxWidth: "700px",
						borderRadius: "5px",
						padding: "32px",
						margin: "16px",
						boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
						backgroundColor: appConfig.theme.colors.neutrals[700],
					}}
				>
					{/* Formulário */}
					<Box
						as="form"
						onSubmit={(event) => {
							event.preventDefault();
							console.log(event);
							roteamento.push("/chat");
						}}
						styleSheet={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
							width: { xs: "100%", sm: "50%" },
							textAlign: "center",
							marginBottom: "32px",
						}}
					>
						<Title tag="h2">Welcome to back!</Title>
						<Text
							variant="body3"
							styleSheet={{
								marginBottom: "32px",
								color: appConfig.theme.colors.neutrals[200],
							}}
						>
							{appConfig.name}
						</Text>

						<TextField
							value={username}
							fullWidth
							onChange={(event) => {
								setUsername(event.target.value);
							}}
							textFieldColors={{
								neutral: {
									textColor: appConfig.theme.colors.neutrals[200],
									mainColor: appConfig.theme.colors.neutrals[900],
									mainColorHighlight:
										appConfig.theme.colors.neutrals["full_black"],
									backgroundColor: appConfig.theme.colors.neutrals[800],
								},
							}}
							placeholder="Account GitHub"
						/>
						<Button
							type="submit"
							label="Log in"
							fullWidth
							buttonColors={{
								contrastColor: appConfig.theme.colors.neutrals["000"],
								mainColor: appConfig.theme.colors.neutrals[950],
								mainColorLight: appConfig.theme.colors.neutrals["050"],
								mainColorStrong: appConfig.theme.colors.neutrals["full_black"],
							}}
						/>
					</Box>
					{/* Formulário */}

					{/* Photo Area */}
					<Box
						styleSheet={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							maxWidth: "200px",
							padding: "16px",
							margin: "0 12px",
							backgroundColor: appConfig.theme.colors.neutrals[800],
							border: "2px solid",
							borderColor: appConfig.theme.colors.neutrals["000"],
							borderRadius: "10px",
							flex: 1,
							minHeight: "240px",
						}}
					>
						<Image
							styleSheet={{
								borderRadius: "50%",
								marginBottom: "16px",
							}}
							src={`https://github.com/${username}.png`}
						/>
						<Text
							variant="body4"
							styleSheet={{
								color: appConfig.theme.colors.neutrals["full_black"],
								backgroundColor: appConfig.theme.colors.neutrals[200],
								padding: "3px 10px",
								borderRadius: "1000px",
							}}
						>
							{username}
						</Text>
					</Box>
					{/* Photo Area */}
				</Box>
			</Box>
		</>
	);
}
