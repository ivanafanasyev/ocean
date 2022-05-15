import { FC } from "react";
import cn from "classnames";
import Select, { components, OptionProps } from "react-select";
import { StateManagerProps } from "react-select/dist/declarations/src/useStateManager";

import { getHighlightedText } from "../../../../lib/utils/getHighlightText";

import css from "./index.module.css";

const Option = ({ children, ...props }: OptionProps) => {
	return (
		<components.Option {...props}>
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
	wrapCN?: string;
	labelCN?: string;
};

export const SelectInput: FC<SelectInputProps> = ({
	name,
	id,
	label,
	hideLabel,
	className,
	options,
	wrapCN,
	labelCN,
	...props
}) => {
	return (
		<div className={cn(css.inputbox, wrapCN)}>
			<label className={cn(css.label, labelCN)} data-hiddenlabel={hideLabel} htmlFor={id}>
				{label}
			</label>
			<Select
				className={cn(css.select, className)}
				classNamePrefix={"r-select"}
				name={name}
				options={options}
				components={{ Option }}
				id={id}
				instanceId={id}
				{...props}
			/>
		</div>
	);
};
