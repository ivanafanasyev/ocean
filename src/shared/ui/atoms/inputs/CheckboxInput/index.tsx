import { ComponentProps, FC, ForwardedRef, forwardRef, KeyboardEvent, useRef } from "react";
import css from "./index.module.css";

export type CheckboxInputProps = Omit<ComponentProps<"input">, "id" | "ref" | "name"> & {
	id: string;
	name: string;
	label: string;
	text?: string | JSX.Element;
	hideLabel?: boolean;
	reassignedRef?: ForwardedRef<HTMLInputElement> | React.LegacyRef<HTMLInputElement> | undefined;
	wrapClassName?: string;
	labelClassName?: string;
	blockClassName?: string;
	textClassName?: string;
};

export const CheckboxInput: FC<CheckboxInputProps> = ({
	onChange,
	id,
	reassignedRef,
	label,
	text,
	hideLabel = false,
	wrapClassName,
	labelClassName,
	blockClassName,
	textClassName,
	...props
}: CheckboxInputProps) => {
	const labelRef = useRef<HTMLLabelElement>(null);
	const handleCheckbox = (e: KeyboardEvent<HTMLLabelElement>) => {
		let isEnterOrSpace = e.code === "Enter" || e.code === "Space";
		if (isEnterOrSpace) {
			e.preventDefault(); //stop scroll the page
			labelRef.current?.click();
		}
	};

	return (
		<div className={wrapClassName ? `${css.wrap} ${wrapClassName}` : css.wrap}>
			<p
				data-hiddenlabel={hideLabel}
				className={labelClassName ? `${css.label} ${labelClassName}` : css.label}
			>
				{label}
			</p>
			<div className={blockClassName ? `${css.block} ${blockClassName}` : css.block}>
				<label
					htmlFor={id}
					className={css.checkbox}
					tabIndex={0}
					ref={labelRef}
					onKeyDown={handleCheckbox}
				>
					<input type='checkbox' ref={reassignedRef} id={id} onChange={onChange} {...props} />
					<div className={css.checkmark}></div>
				</label>
				<p className={textClassName ? `${css.text} ${textClassName}` : css.text}>{text}</p>
			</div>
		</div>
	);
};
