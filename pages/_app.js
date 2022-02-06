import { Box } from "@skynexui/components";
import Head from "next/head";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Aluracord Lofi</title>
				<meta charSet="utf-8" />
				<mata
					name="viewport"
					content="initical-scale=1.0, width=device-width"
				/>
			</Head>
			<Box
				styleSheet={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					backgroundImage:
						"url(https://external-content.duckduckgo.com/iu/?u=https://wallpapercave.com/wp/wp3826700.jpg)",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					backgroundBlendMode: "multiply",
				}}
			>
				<Component {...pageProps} />
			</Box>
		</>
	);
}
