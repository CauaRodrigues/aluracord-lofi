import { Box, Button, Text, TextField } from "@skynexui/components";
import { useRouter } from "next/router";
import appConfig from "../../../config.json";

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

const Form = ({ user: username, changeUser }) => {
	const roteamento = useRouter();

	return (
		<Box
			as="form"
			onSubmit={(event) => {
				event.preventDefault();
				roteamento.push(`/chat?username=${username}`);
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
				autoComplete="off"
				onChange={(event) => {
					changeUser(event.target.value);
				}}
				textFieldColors={{
					neutral: {
						textColor: appConfig.theme.colors.neutrals[200],
						mainColor: appConfig.theme.colors.neutrals[900],
						mainColorHighlight: appConfig.theme.colors.neutrals["full_black"],
						backgroundColor: appConfig.theme.colors.neutrals[700],
					},
				}}
				placeholder="Account GitHub"
			/>
			<Button
				disabled={username.length < 2}
				type="submit"
				label="Log in"
				fullWidth
				buttonColors={{
					contrastColor: appConfig.theme.colors.neutrals["000"],
					mainColor: appConfig.theme.colors.neutrals[900],
					mainColorLight: appConfig.theme.colors.neutrals["050"],
					mainColorStrong: appConfig.theme.colors.neutrals["full_black"],
				}}
			/>
		</Box>
	);
};

export default Form;
