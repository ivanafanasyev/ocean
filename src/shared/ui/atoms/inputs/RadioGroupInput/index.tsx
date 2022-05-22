import { ComponentProps, ForwardedRef, KeyboardEvent, useRef } from "react";
import cn from "classnames";

import css from "./index.module.css";

export type RadioGroupInputType = {
	value: string;
	label: string;
	key: string;
};

export interface IRadioGroup extends Omit<ComponentProps<"input">, "id" | "ref" | "name"> {
	name: string;
	hideLabel?: boolean;
	label: string;
	inputs: Array<RadioGroupInputType>;
	wrapCN?: string;
	reassignedRef?: ForwardedRef<HTMLInputElement> | React.LegacyRef<HTMLInputElement> | undefined;
	validationMsg?: string | JSX.Element | null;
	validationMsgCN?: string;
	validationMsgIsError?: boolean;
	validationMsgIsSuccess?: boolean;
}

export const RadioGroup = ({
	hideLabel = false,
	label,
	inputs,
	reassignedRef,
	onChange,
	wrapCN,
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
		<div className={cn(css["radio-group-box"], wrapCN)}>
			<p className={css.label} data-hiddenlabel={hideLabel}>
				{label}
			</p>
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
		</div>
	);
};
