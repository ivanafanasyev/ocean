import { FC } from "react";
import cn from "classnames";
// https://react-select.com/async#defaultoptions
import Select, { components, createFilter, OptionProps } from "react-select";
import { StateManagerProps } from "react-select/dist/declarations/src/useStateManager";
import { MenuList } from "./MenuList";

import { getHighlightedText } from "../../../../lib/utils/getHighlightText";

import css from "./index.module.css";
import { FieldWrap, FieldWrapProps } from "../../../atoms/FieldWrap";

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

export type SelectInputProps = Omit<StateManagerProps, "name" | "id"> &
	FieldWrapProps & {
		name: string;
		className?: string;
	};

export const VSelectInput: FC<SelectInputProps> = ({
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
			label={label}
			id={id}
			hideLabel={hideLabel}
			validationMsg={validationMsg}
			validationMsgIsError={validationMsgIsError}
			validationMsgIsSuccess={validationMsgIsSuccess}
		>
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
		</FieldWrap>
	);
};
