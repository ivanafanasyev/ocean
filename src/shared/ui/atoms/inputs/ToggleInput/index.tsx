import { ComponentProps, FC, ForwardedRef } from "react";

import css from "./index.module.css";

export type ToggleInputProps = Omit<ComponentProps<"input">, "id" | "ref" | "name"> & {
	id: string;
	name: string;
	label: string;
	hideLabel?: boolean;
	reassignedRef?: ForwardedRef<HTMLInputElement> | React.LegacyRef<HTMLInputElement> | undefined;
	wrapClassName?: string;
	labelClassName?: string;
	blockClassName?: string;
	statusClassName?: string;
	statusText?: string;
};

export const ToggleInput: FC<ToggleInputProps> = ({
	id,
	label,
	hideLabel = false,
	reassignedRef,
	onChange,
	wrapClassName,
	labelClassName,
	blockClassName,
	statusClassName,
	statusText,
	...props
}: ToggleInputProps) => {
	return (
		<div className={wrapClassName ? `${css.wrap} ${wrapClassName}` : css.wrap}>
			<span
				data-hiddenlabel={hideLabel}
				className={labelClassName ? `${css.label} ${labelClassName}` : css.label}
			>
				{label}
			</span>
			<div className={blockClassName ? `${css.block} ${blockClassName}` : css.block}>
				<label className={css.switch} htmlFor={id}>
					<input type='checkbox' id={id} ref={reassignedRef} onChange={onChange} {...props} />
					<div className={css.slider}></div>
				</label>
				<span className={statusClassName ? `${css.status} ${statusClassName}` : css.status}>
					{statusText}
				</span>
			</div>
		</div>
	);
};
