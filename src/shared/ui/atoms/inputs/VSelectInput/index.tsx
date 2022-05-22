import { FC } from "react";
import cn from "classnames";
// https://react-select.com/async#defaultoptions
import Select, { components, createFilter, OptionProps } from "react-select";
import { StateManagerProps } from "react-select/dist/declarations/src/useStateManager";
import { MenuList } from "./MenuList";

import { getHighlightedText } from "../../../../lib/utils/getHighlightText";

import css from "./index.module.css";

const Option = ({ children, ...props }: OptionProps) => {
	// eslint-disable-next-line no-unused-vars
	const { onMouseMove, onMouseOver, ...rest } = props.innerProps;
	const newProps = { ...props, innerProps: rest };

	return (
		<components.Option {...newProps}>
			{getHighlightedText(String(children), props.selectProps.inputValue)}
		</components.Option>
	);
};

export type SelectInputProps = Omit<StateManagerProps, "name" | "id"> & {
	name: string;
	id: string;
	label: string;
	hideLabel?: boolean;
	className?: string;
};

export const VSelectInput: FC<SelectInputProps> = ({
	name,
	id,
	label,
	hideLabel,
	className,
	options,
	...props
}) => {
	return (
		<div className={css.wrap}>
			<label data-hiddenlabel={hideLabel} className={css.label} htmlFor={id}>
				{label}
			</label>
			<Select
				captureMenuScroll={false}
				components={{ Option, MenuList: MenuList }}
				className={cn(css.select, className)}
				classNamePrefix={"rv-select"}
				filterOption={createFilter({ ignoreAccents: false })} //for avoid calling a function stripDiactricts
				id={id}
				instanceId={id}
				name={name}
				options={options}
				{...props}
			/>
			<div></div>
		</div>
	);
};
