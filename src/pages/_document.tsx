import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);

		return initialProps;
	}

	render() {
		return (
			<Html lang='uk'>
				<Head>
					<link rel='icon' href='/favicon.ico' />
					<link
						rel='preload'
						href='/fonts/Montserrat/woff/Montserrat-Regular.woff2'
						as='font'
						type='font/woff2'
						crossOrigin='anonymous'
					/>
					<link
						rel='preload'
						href='/fonts/Montserrat/woff/Montserrat-Medium.woff2'
						as='font'
						type='font/woff2'
						crossOrigin='anonymous'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
