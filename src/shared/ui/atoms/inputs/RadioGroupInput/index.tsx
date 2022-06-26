import { ComponentProps, ForwardedRef, KeyboardEvent, useRef } from "react";
import cn from "classnames";

import css from "./index.module.css";
import { FieldWrap, FieldWrapProps } from "../../FieldWrap";
import { validationMsg } from "../../FieldWrap/index.module.css";

export type RadioGroupInputType = {
	value: string;
	label: string;
	key: string;
};

export type IRadioGroup = Omit<ComponentProps<"input">, "id" | "ref" | "name"> &
	Omit<FieldWrapProps, "id"> & {
		name: string;
		inputs: Array<RadioGroupInputType>;
		reassignedRef?: ForwardedRef<HTMLInputElement> | React.LegacyRef<HTMLInputElement> | undefined;
	};

export const RadioGroup = ({
	hideLabel = false,
	label,
	inputs,
	reassignedRef,
	onChange,
	validationMsg,
	validationMsgIsError,
	validationMsgIsSuccess,
	...props
}: IRadioGroup) => {
	const labelRef = useRef<Array<HTMLLabelElement | null>>([]);
	const handleCheckbox = (e: KeyboardEvent<HTMLLabelElement>, index: number) => {
		let isEnterOrSpace = e.code === "Enter" || e.code === "Space";
		if (isEnterOrSpace) {
			e.preventDefault(); //stop scroll the page
			labelRef.current[index]?.click();
		}
	};

	return (
		<FieldWrap
			label={label}
			hideLabel={hideLabel}
			id={props.name}
			validationMsg={validationMsg}
			validationMsgIsError={validationMsgIsError}
			validationMsgIsSuccess={validationMsgIsSuccess}
			className={css["radio-group-box"]}
		>
			<div className={css.group}>
				{inputs.map((input, index) => (
					<div className={css["radio-block"]} key={`${label}${input.label}${input.key}`}>
						<label
							htmlFor={`${label}${input.label}${input.key}`}
							className={css["radio-checkbox"]}
							ref={el => (labelRef.current[index] = el)}
							tabIndex={0}
							onKeyDown={e => handleCheckbox(e, index)}
						>
							<input
								type='radio'
								ref={reassignedRef}
								id={`${label}${input.label}${input.key}`}
								onChange={onChange}
								value={input.value}
								{...props}
							/>
							<div className={css["radio-checkmark"]}></div>
						</label>
						<p className={css["radio-text"]}>{input.label}</p>
					</div>
				))}
			</div>
		</FieldWrap>
	);
};
