export const getHighlightedText = (text: string, highlight: string): JSX.Element => {
	// Split on highlight term and include term into parts, ignore case
	const parts = text.split(new RegExp(`(${highlight})`, "gi"));
	return (
		<>
			{parts.map((part, i) => (
				<span
					key={i}
					style={part.toLowerCase() === highlight.toLowerCase() ? { fontWeight: "bold" } : {}}
				>
					{part}
				</span>
			))}{" "}
		</>
	);
};
