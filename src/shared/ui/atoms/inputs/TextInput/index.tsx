import { ComponentProps, FC, ForwardedRef } from "react";

import css from "./index.module.css";

export type TextInputProps = Omit<ComponentProps<"input">, "id" | "ref" | "name"> & {
	id: string;
	name: string;
	label: string;
	hideLabel?: boolean;
	wrapClassName?: string;
	labelClassName?: string;
	errorClassName?: string;
	error?: string | null;
	icon?: JSX.Element | React.ReactNode;
	iconWrapClassName?: string;
	reassignedRef?: ForwardedRef<HTMLInputElement> | React.LegacyRef<HTMLInputElement> | undefined;
};

export const TextInput: FC<TextInputProps> = ({
	id,
	type = "text",
	className,
	label,
	hideLabel = false,
	wrapClassName,
	labelClassName,
	errorClassName,
	error,
	icon,
	required,
	iconWrapClassName,
	reassignedRef,
	...props
}: TextInputProps) => (
	<div className={wrapClassName ? `${css.inputbox} ${wrapClassName}` : css.inputbox}>
		<label
			className={labelClassName ? `${css.label} ${labelClassName}` : css.label}
			data-hiddenlabel={hideLabel}
			htmlFor={id}
		>
			{label}
		</label>
		<input
			aria-invalid={error ? "true" : "false"}
			aria-required={required ? "true" : "false"}
			className={className ? `${css.input} ${className}` : css.input}
			type={type}
			ref={reassignedRef}
			id={id}
			{...props}
		/>
		{icon}
		<p className={errorClassName ? `${css.error} ${errorClassName}` : css.error}>{error}</p>
	</div>
);
