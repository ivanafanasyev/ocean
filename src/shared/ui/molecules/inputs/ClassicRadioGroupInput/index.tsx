import { ComponentProps, FC, ForwardedRef } from "react";

import css from "./index.module.css";

export type ClassicRadioGroupInputType = {
	value: string;
	label: string;
};

export interface IClassicRadioGroup extends Omit<ComponentProps<"input">, "id" | "ref" | "name"> {
	name: string;
	groupLabel: string;
	inputs: Array<ClassicRadioGroupInputType>;
	hideGroupLabel?: boolean;
	reassignedRef?: ForwardedRef<HTMLInputElement> | React.LegacyRef<HTMLInputElement> | undefined;
	validationMsg?: string | JSX.Element | null;
	validationMsgCN?: string;
	validationMsgIsError?: boolean;
	validationMsgIsSuccess?: boolean;
}

export const ClassicRadioGroup: FC<IClassicRadioGroup> = ({
	groupLabel,
	hideGroupLabel = false,
	inputs,
	onChange,
	reassignedRef,
	...props
}: IClassicRadioGroup) => (
	<div className={css["radio-group"]}>
		<p className={css["group-label"]} data-hiddenlabel={hideGroupLabel}>
			{groupLabel}
		</p>
		<div className={css.group}>
			{inputs.map(({ value, label }, index) => (
				<div className={css["radio-wrapper"]} key={`${groupLabel}${label}`}>
					<input
						type='radio'
						ref={reassignedRef}
						id={`${groupLabel}${label}`}
						onChange={onChange}
						value={value}
						className={css.input}
						{...props}
					/>
					<label htmlFor={`${groupLabel}${label}`} className={css.label}>
						{label}
					</label>
				</div>
			))}
		</div>
		<div className={props.validationMsgCN}>{props.validationMsg}</div>
	</div>
);
