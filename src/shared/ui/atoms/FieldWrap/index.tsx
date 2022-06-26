import { FC } from "react";
import cn from "classnames";
import css from "./index.module.css";

export type FieldWrapProps = {
	label: string;
	id: string;
	hideLabel?: boolean;
	validationMsg?: string | JSX.Element | null;
	validationMsgIsError?: boolean;
	validationMsgIsSuccess?: boolean;
	className?: string;
};

export const FieldWrap: FC<FieldWrapProps> = ({
	label,
	hideLabel,
	id,
	children,
	validationMsg,
	validationMsgIsError = true,
	validationMsgIsSuccess = false,
	className,
}) => (
	<div className={cn(css.inputbox, className)}>
		<label className={css.label} data-hiddenlabel={hideLabel} htmlFor={id}>
			{label}
		</label>
		{children}
		<p
			className={css.validationMsg}
			data-iserror={validationMsgIsError}
			data-issuccess={validationMsgIsSuccess}
		>
			{validationMsg}
		</p>
	</div>
);
