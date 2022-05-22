import { Children } from "react";
import VirtualList from "react-tiny-virtual-list";

import css from "./index.module.css";

const DefaultItemHeight = 40;

const renderItem = ({ children, style, index, ...props }: any) => {
	if (Array.isArray(children)) {
		return (
			<li style={style} key={index}>
				{children[index]}
			</li>
		);
	}
	return (
		<li key={index} className={css["react-virtualized-menu-placeholder"]}>
			{children}
		</li>
	);
};

export const MenuList = ({ options, children, maxHeight, getValue }: any) => {
	const [value] = getValue();
	const initialOffset = options.indexOf(value) * DefaultItemHeight;
	const childrenOptions = Children.toArray(children);
	const wrapperHeight =
		maxHeight < childrenOptions.length * DefaultItemHeight
			? maxHeight
			: childrenOptions.length * DefaultItemHeight;

	return (
		<div className={css["react-virtualized-list-wrapper"]}>
			<VirtualList
				width='100%'
				height={wrapperHeight + 6}
				scrollOffset={initialOffset}
				itemCount={childrenOptions.length}
				itemSize={DefaultItemHeight}
				renderItem={({ index, style }) => renderItem({ children, style, index })}
			/>
		</div>
	);
};
