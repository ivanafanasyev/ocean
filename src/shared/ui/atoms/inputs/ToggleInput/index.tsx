import { ComponentProps, FC, ForwardedRef } from "react";

import css from "./index.module.css";

export type ToggleInputProps = Omit<ComponentProps<"input">, "id" | "ref" | "name"> & {
	id: string;
	name: string;
	label: string;
	hideLabel?: boolean;
	reassignedRef?: ForwardedRef<HTMLInputElement> | React.LegacyRef<HTMLInputElement> | undefined;
	wrapperClassName?: string;
	labelClassName?: string;
	togglerBlockClassName?: string;
	statusTextClassName?: string;
	statusText?: string;
};

export const ToggleInput: FC<ToggleInputProps> = ({
	id,
	label,
	hideLabel = false,
	reassignedRef,
	onChange,
	wrapperClassName,
	labelClassName,
	togglerBlockClassName,
	statusTextClassName,
	statusText,
	...props
}: ToggleInputProps) => {
	return (
		<div className={wrapperClassName ? `${css.wrap} ${wrapperClassName}` : css.wrap}>
			<span
				data-hiddenlabel={hideLabel}
				className={labelClassName ? `${css.labeltext} ${labelClassName}` : css.labeltext}
			>
				{label}
			</span>
			<div
				className={
					togglerBlockClassName ? `${css.togglerblock} ${togglerBlockClassName}` : css.togglerblock
				}
			>
				<label className={css.switch} htmlFor={id}>
					<input type='checkbox' id={id} ref={reassignedRef} onChange={onChange} {...props} />
					<div className={css.slider}></div>
				</label>
				<span
					className={
						statusTextClassName ? `${css.statustext} ${statusTextClassName}` : css.statustext
					}
				>
					{statusText}
				</span>
			</div>
		</div>
	);
};
