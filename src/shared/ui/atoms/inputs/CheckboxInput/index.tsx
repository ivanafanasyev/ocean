import { ComponentProps, FC, ForwardedRef, KeyboardEvent, useRef } from "react";
import cn from "classnames";
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
		<div className={cn(css.wrap, wrapClassName)}>
			<p data-hiddenlabel={hideLabel} className={cn(css.label, labelClassName)}>
				{label}
			</p>
			<div className={cn(css.block, blockClassName)}>
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
				<p className={cn(css.text, textClassName)}>{text}</p>
			</div>
		</div>
	);
};
