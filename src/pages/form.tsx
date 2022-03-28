import type { NextPage } from "next";
import Head from "next/head";
import { GreatSampleForm } from "../features/GreatSampleForm";

const FormPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Form Best Practices</title>
			</Head>
			<main>
				<GreatSampleForm />
			</main>
		</>
	);
};

export default FormPage;
