import { Box, Text, TextField, Image, Button } from "@skynexui/components";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import appConfig from "../config.json";
import { ButtonSendSticker } from "../src/components/ButtonSendSticker";
import { createClient } from "@supabase/supabase-js";

const supabaseClient = createClient(
	process.env.SUPABASE_URL,
	process.env.SUPABASE_KEY
);

const listenMessages = (addMessage) => {
	return supabaseClient
		.from("messages")
		.on("INSERT", (response) => {
			addMessage(response.new);
		})
		.subscribe();
};

export default function ChatPage() {
	const roteamento = useRouter();
	const usuarioLogado = roteamento.query.username;
	const [mensagem, setMensagem] = useState("");
	const [messageList, setMessageList] = useState([]);

	useEffect(() => {
		supabaseClient
			.from("messages")
			.select("*")
			.order("id", { ascending: false })
			.then(({ data }) => {
				setMessageList(data);
			});

		const subscription = listenMessages((newMessage) => {
			setMessageList((value) => {
				return [newMessage, ...value];
			});
		});

		return () => {
			subscription.unsubscribe();
		};
	}, []);

	const handleNewMessage = (newMessage) => {
		const message = {
			de: usuarioLogado,
			texto: newMessage,
		};

		supabaseClient
			.from("messages")
			.insert([message])
			.then(({ data }) => {});

		setMensagem("");
	};

	return (
		<Box
			styleSheet={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				backgroundImage: `url(https://cutt.ly/UOfACRF)`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundBlendMode: "multiply",
				color: appConfig.theme.colors.neutrals["000"],
			}}
		>
			<Box
				styleSheet={{
					display: "flex",
					flexDirection: "column",
					flex: 1,
					boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
					borderRadius: "5px",
					backgroundColor: appConfig.theme.colors.neutrals[999],
					height: "100%",
					maxWidth: "80%",
					maxHeight: "95vh",
					padding: "32px",
				}}
			>
				<Header />
				<Box
					styleSheet={{
						position: "relative",
						display: "flex",
						flex: 1,
						height: "80%",
						backgroundColor: appConfig.theme.colors.neutrals[900],
						flexDirection: "column",
						borderRadius: "5px",
						padding: "16px",
					}}
				>
					<MessageList messages={messageList} />

					<Box
						as="form"
						styleSheet={{
							display: "flex",
							alignItems: "center",
						}}
					>
						<TextField
							value={mensagem}
							onChange={(event) => {
								setMensagem(event.target.value);
							}}
							onKeyPress={(event) => {
								if (event.key === "Enter") {
									handleNewMessage(mensagem);
									event.preventDefault();
								}
							}}
							placeholder="Insira sua mensagem aqui..."
							type="textarea"
							styleSheet={{
								width: "100%",
								border: "0",
								resize: "none",
								borderRadius: "5px",
								padding: "6px 8px",
								backgroundColor: appConfig.theme.colors.neutrals[999],
								marginRight: "12px",
								color: appConfig.theme.colors.neutrals[200],
							}}
						/>
						<ButtonSendSticker
							onStickerClick={(sticker) => {
								handleNewMessage(`:sticker: ${sticker}`);
							}}
						/>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

function Header() {
	return (
		<>
			<Box
				styleSheet={{
					width: "100%",
					marginBottom: "16px",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<Text variant="heading5">Chat</Text>
				<Button
					variant="tertiary"
					colorVariant="neutral"
					label="Logout"
					href="/"
				/>
			</Box>
		</>
	);
}

function MessageList(props) {
	return (
		<Box
			tag="ul"
			styleSheet={{
				overflow: "hidden",
				overflowY: "auto",
				display: "flex",
				flexDirection: "column-reverse",
				flex: 1,
				color: appConfig.theme.colors.neutrals["000"],
				marginBottom: "16px",
			}}
		>
			{props.messages.map((mensagem) => {
				return (
					<Text
						key={mensagem.id}
						tag="li"
						styleSheet={{
							borderRadius: "5px",
							padding: "6px",
							marginBottom: "12px",
							hover: {
								backgroundColor: appConfig.theme.colors.neutrals[700],
							},
						}}
					>
						<Box
							styleSheet={{
								marginBottom: "8px",
							}}
						>
							<Image
								styleSheet={{
									width: "20px",
									height: "20px",
									borderRadius: "50%",
									display: "inline-block",
									marginRight: "8px",
								}}
								src={`https://github.com/${mensagem.de}.png`}
							/>
							<Text tag="strong">{mensagem.de}</Text>
							<Text
								styleSheet={{
									fontSize: "10px",
									marginLeft: "8px",
									color: appConfig.theme.colors.neutrals[300],
								}}
								tag="span"
							>
								{new Date().toLocaleDateString()}
							</Text>
						</Box>
						{mensagem.texto.startsWith(":sticker:") ? (
							<Image src={mensagem.texto.replace(":sticker:", "")} />
						) : (
							mensagem.texto
						)}
					</Text>
				);
			})}
		</Box>
	);
}
