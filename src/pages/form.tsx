import type { NextPage } from "next";
import Head from "next/head";
import { RegistrationFormSample } from "../features/RegistrationFormSample";

const FormPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Form Best Practices</title>
			</Head>
			<main>
				<RegistrationFormSample />
			</main>
		</>
	);
};

export default FormPage;
