import { ForwardedRef } from "react";
import { FieldWrap, FieldWrapProps } from "../../../atoms/FieldWrap";
import { DateInputCalendar } from "./DateInputCalendar";

export type DateInputProps = FieldWrapProps & {
	name: string;
	reassignedRef?: ForwardedRef<HTMLInputElement> | React.LegacyRef<HTMLInputElement> | undefined;
};

export const DateInput = ({
	label,
	hideLabel,
	id,
	reassignedRef,
	validationMsg,
	validationMsgIsError,
	validationMsgIsSuccess,
	...props
}: DateInputProps) => {
	return (
		<FieldWrap
			label={label}
			hideLabel={hideLabel}
			id={id}
			validationMsg={validationMsg}
			validationMsgIsError={validationMsgIsError}
			validationMsgIsSuccess={validationMsgIsSuccess}
		>
			<input type='text' id={id} ref={reassignedRef} {...props} />
			<DateInputCalendar />
		</FieldWrap>
	);
};
