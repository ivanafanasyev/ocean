import { ComponentProps, FC, ForwardedRef } from "react";

import css from "./index.module.css";

export type TextInputProps = Omit<ComponentProps<"input">, "id" | "ref" | "name"> & {
	id: string;
	name: string;
	label: string;
	hideLabel?: boolean;
	wrapperClassName?: string;
	labelClassName?: string;
	errorClassName?: string;
	error?: string | null;
	icon?: JSX.Element | React.ReactNode;
	iconWrapClassName?: string;
	ref?: ForwardedRef<HTMLInputElement> | React.LegacyRef<HTMLInputElement> | undefined;
};

export const TextInput: FC<TextInputProps> = ({
	id,
	name,
	type = "text",
	className,
	label,
	hideLabel = false,
	wrapperClassName,
	labelClassName,
	errorClassName,
	error,
	icon,
	iconWrapClassName,
	ref,
	...props
}: TextInputProps) => {
	return (
		<div className={`${css.inputbox} ${wrapperClassName}`}>
			<label className={`${css.label} ${labelClassName}`} data-hiddenlabel={hideLabel} htmlFor={id}>
				{label}
			</label>
			<input
				aria-invalid={error ? "true" : "false"}
				aria-required={props.required ? "true" : "false"}
				className={`${css.input} ${className}`}
				type={type}
				id={id}
				name={name}
				ref={ref}
				{...props}
			/>
			{icon}
			<p className={css.error}>{error}</p>
		</div>
	);
};
