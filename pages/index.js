import { Box, Button, Text, TextField, Image } from "@skynexui/components";
import appConfig from "../config.json";

const GlobalStyle = () => {
	return (
		<style global jsx>{`
			* {
				margin: 0;
				padding: 0;
				box-sizing: border-box;
				list-style: none;
			}

			body {
				font-family: "Open Sans", sans-serif;
			}

			/* App fit Height */
			html,
			body,
			#__next {
				min-height: 100vh;
				display: flex;
				flex: 1;
			}

			#__next {
				flex: 1;
			}
			#__next > * {
				flex: 1;
			}

			/* ./App fit Height */
		`}</style>
	);
};

const Titulo = (props) => {
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
	const username = "CauaRodrigues";

	return (
		<>
			<GlobalStyle />
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
						<Titulo tag="h2">Welcome to back!</Titulo>
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
							fullWidth
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
							maxWidth: "250px",
							padding: "16px",
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
