import { ComponentProps, FC, ForwardedRef } from "react";
import cn from "classnames";

import css from "./index.module.css";

export interface IClassicCheckbox extends Omit<ComponentProps<"input">, "id" | "name" | "ref"> {
	id: string;
	name: string;
	label: string;
	hideLabel?: boolean;
	reassignedRef?: ForwardedRef<HTMLInputElement> | React.LegacyRef<HTMLInputElement> | undefined;
	txt: string;
	txtCN?: string;
	validationMsg?: string;
	validationMsgIsError?: boolean;
}

export const ClassicCheckbox: FC<IClassicCheckbox> = ({
	id,
	label,
	hideLabel = false,
	txt,
	txtCN,
	reassignedRef,
	onChange,
	validationMsg,
	validationMsgIsError = true, // let's suppose that we expect an error usually
	...props
}: IClassicCheckbox) => (
	<div className={css.wrap}>
		<label htmlFor={id} data-hiddenlabel={hideLabel} className={css.label}>
			{label}
		</label>
		<div className={css.box}>
			<input
				aria-invalid={validationMsgIsError && validationMsg ? "true" : "false"}
				className={css.checkbox}
				id={id}
				onChange={onChange}
				ref={reassignedRef}
				type='checkbox'
				{...props}
			/>
			<p className={cn(css.txt, txtCN)}>{txt}</p>
		</div>
		<p
			className={cn(css["validation-message"], validationMsg && css["validation-message--visible"])}
			data-isError={validationMsgIsError}
		>
			{validationMsg}
		</p>
	</div>
);
