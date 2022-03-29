import { ComponentProps, FC, ForwardedRef } from "react";
import css from "./index.module.css";

export type CheckboxInputProps = Omit<ComponentProps<"input">, "id" | "ref" | "name"> & {
	id: string;
	name: string;
	label: string;
	hideLabel?: boolean;
	reassignedRef?: ForwardedRef<HTMLInputElement> | React.LegacyRef<HTMLInputElement> | undefined;
	wrapClassName?: string;
	labelClassName?: string;
	blockClassName?: string;
};

export const CheckboxInput: FC<CheckboxInputProps> = ({
	onChange,
	id,
	reassignedRef,
	label,
	hideLabel = false,
	wrapClassName,
	labelClassName,
	blockClassName,
	...props
}: CheckboxInputProps) => {
	return (
		<div className={wrapClassName ? `${css.wrap} ${wrapClassName}` : css.wrap}>
			<p
				data-hiddenlabel={hideLabel}
				className={labelClassName ? `${css.label} ${labelClassName}` : css.label}
			>
				{label}
			</p>
			<div className={blockClassName ? `${css.block} ${blockClassName}` : css.block}>
				<label htmlFor={id} className={css.checkbox}>
					<input type='checkbox' ref={reassignedRef} id={id} onChange={onChange} {...props} />
					<div className={css.checkmark}></div>
				</label>
			</div>
		</div>
	);
};
