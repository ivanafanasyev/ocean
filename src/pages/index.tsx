import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const HomePage: NextPage = () => {
	return (
		<>
			<Head>
				<title>HOME</title>
			</Head>
			<main>
				<ul>
					<li>
						<Link href='/form'>Form + inputs sample</Link>
					</li>
					<li>
						<Link href='/table'>Table and search sample</Link>
					</li>
				</ul>
			</main>
		</>
	);
};

export default HomePage;
