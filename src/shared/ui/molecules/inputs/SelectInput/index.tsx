import { FC } from "react";
import cn from "classnames";
import Select, { components, OptionProps } from "react-select";
import { StateManagerProps } from "react-select/dist/declarations/src/useStateManager";

import { getHighlightedText } from "../../../../lib/utils/getHighlightText";

import css from "./index.module.css";
import { FieldWrap, FieldWrapProps } from "../../../atoms/FieldWrap";

const Option = ({ children, ...props }: OptionProps) => {
	return (
		<components.Option {...props}>
			{getHighlightedText(String(children), props.selectProps.inputValue)}
		</components.Option>
	);
};

export type SelectInputProps = Omit<StateManagerProps, "name" | "id"> &
	FieldWrapProps & {
		name: string;
		className?: string;
	};

export const SelectInput: FC<SelectInputProps> = ({
	name,
	id,
	label,
	hideLabel,
	className,
	options,
	validationMsg,
	validationMsgIsError,
	validationMsgIsSuccess,
	...props
}) => {
	return (
		<FieldWrap
			id={id}
			label={label}
			hideLabel={hideLabel}
			validationMsg={validationMsg}
			validationMsgIsError={validationMsgIsError}
			validationMsgIsSuccess={validationMsgIsSuccess}
		>
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
		</FieldWrap>
	);
};
