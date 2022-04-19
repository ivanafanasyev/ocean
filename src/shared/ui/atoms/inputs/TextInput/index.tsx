import { ComponentProps, FC, ForwardedRef } from "react";
import cn from "classnames";

import css from "./index.module.css";

export type TextInputProps = Omit<ComponentProps<"input">, "id" | "ref" | "name"> & {
	id: string;
	name: string;
	label: string;
	hideLabel?: boolean;
	wrapCN?: string;
	labelCN?: string;
	validationMsg?: string | JSX.Element | null;
	validationMsgCN?: string;
	validationMsgIsError?: boolean;
	validationMsgIsSuccess?: boolean;
	leadingIcon?: JSX.Element | React.ReactNode;
	leadingIconWrapCN?: string;
	trailingIcon?: JSX.Element | React.ReactNode;
	trailingIconWrapCN?: string;
	reassignedRef?: ForwardedRef<HTMLInputElement> | React.LegacyRef<HTMLInputElement> | undefined;
};

export const TextInput: FC<TextInputProps> = ({
	id,
	type = "text",
	className,
	label,
	hideLabel = false,
	wrapCN,
	labelCN,
	validationMsg,
	validationMsgCN,
	validationMsgIsError,
	validationMsgIsSuccess,
	leadingIcon,
	leadingIconWrapCN,
	trailingIcon,
	required,
	trailingIconWrapCN,
	reassignedRef,
	...props
}: TextInputProps) => (
	<div className={cn(css.inputbox, wrapCN)}>
		<label className={cn(css.label, labelCN)} data-hiddenlabel={hideLabel} htmlFor={id}>
			{label}
		</label>
		<div className={css.relativewrap}>
			<div className={cn(css.leadingicon, leadingIconWrapCN)}>{leadingIcon}</div>
			<input
				aria-invalid={validationMsgIsError && validationMsg ? "true" : "false"}
				aria-required={required ? "true" : "false"}
				className={cn(css.input, className)}
				type={type}
				ref={reassignedRef}
				id={id}
				required={required}
				{...props}
			/>
			<div className={cn(css.trailingicon, trailingIconWrapCN)}>{trailingIcon}</div>
		</div>
		<p
			className={cn(css.validationMsg, validationMsgCN)}
			data-iserror={validationMsgIsError}
			data-issuccess={validationMsgIsSuccess}
		>
			{validationMsg}
		</p>
	</div>
);
