import "../shared/styles/global.css";
import type { AppProps } from "next/app";
import React from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
